"use client"
import { useState, useCallback, useRef, useEffect } from "react"
import { generateTopology, getDeviceConfig, PROTOCOLS } from "@/lib/topology"
import type { Topology, Protocol, Difficulty, TopoDevice } from "@/lib/topology"
import { TopoSvg } from "./TopoSvg"
import LabDocument from "./LabDocument"

const DIFFICULTIES: Difficulty[] = ['Lätt', 'Medel', 'Svår']

const HELP_TEXT: Record<Protocol, { step: string; cmd?: string }[]> = {
  OSPF: [
    { step: '1. Konfigurera IP-adresser på alla interface', cmd: 'ip address <IP> <mask>\nno shutdown' },
    { step: '2. Aktivera OSPF process 1 på varje router', cmd: 'router ospf 1' },
    { step: '3. Annonsera nät med network-kommandot', cmd: 'network <net> <wildcard> area 0' },
    { step: '4. Verifiera grannskap', cmd: 'show ip ospf neighbor' },
    { step: '5. Verifiera routingtabellen', cmd: 'show ip route ospf' },
    { step: '6. Testa konnektion med ping', cmd: 'ping <dest-IP> source <src-IP>' },
  ],
  EIGRP: [
    { step: '1. Konfigurera IP-adresser på alla interface', cmd: 'ip address <IP> <mask>\nno shutdown' },
    { step: '2. Aktivera EIGRP AS 100', cmd: 'router eigrp 100\nno auto-summary' },
    { step: '3. Annonsera nät', cmd: 'network <net> <wildcard>' },
    { step: '4. Verifiera grannskap', cmd: 'show ip eigrp neighbors' },
    { step: '5. Verifiera routingtabellen', cmd: 'show ip route eigrp' },
    { step: '6. Testa konnektion med ping', cmd: 'ping <dest-IP> source <src-IP>' },
  ],
  STP: [
    { step: '1. Identifiera root bridge (lägst Bridge ID)', cmd: 'show spanning-tree' },
    { step: '2. Sätt SW-1 som root bridge', cmd: 'spanning-tree vlan 1 priority 4096' },
    { step: '3. Verifiera root ports på varje switch', cmd: 'show spanning-tree vlan 1' },
    { step: '4. Hitta blocked port (Alternate Port)', cmd: 'show spanning-tree detail' },
    { step: '5. Aktivera PortFast på access-portar', cmd: 'interface Gi0/0\nspanning-tree portfast' },
    { step: '6. Aktivera BPDU Guard för skydd', cmd: 'spanning-tree portfast bpduguard default' },
  ],
  VLANs: [
    { step: '1. Skapa VLAN på alla switchar', cmd: 'vlan 10\nname VLAN_10\nvlan 20\nname VLAN_20' },
    { step: '2. Konfigurera trunk-portar (uplinks)', cmd: 'switchport mode trunk\nswitchport trunk allowed vlan 10,20' },
    { step: '3. Konfigurera access-portar (hosts)', cmd: 'switchport mode access\nswitchport access vlan 10' },
    { step: '4a. L3-switch: aktivera ip routing + SVIs', cmd: 'ip routing\ninterface Vlan10\n ip address 192.168.10.1 255.255.255.0' },
    { step: '4b. Router-on-a-stick: sub-interfaces', cmd: 'interface Gi0/0.10\n encapsulation dot1Q 10\n ip address 192.168.10.1 255.255.255.0' },
    { step: '5. Verifiera VLAN och trunk', cmd: 'show vlan brief\nshow interfaces trunk' },
    { step: '6. Testa inter-VLAN ping', cmd: 'ping 192.168.20.1 source 192.168.10.10' },
  ],
  NAT: [
    { step: '1. Markera inside/outside interface', cmd: 'interface Gi0/0\n ip nat inside\ninterface Gi0/1\n ip nat outside' },
    { step: '2. Skapa ACL för inside-nät', cmd: 'access-list 1 permit 192.168.0.0 0.0.0.255' },
    { step: '3. Konfigurera NAT overload (PAT)', cmd: 'ip nat inside source list 1 interface Gi0/1 overload' },
    { step: '4. Verifiera NAT-tabell', cmd: 'show ip nat translations' },
    { step: '5. Verifiera statistik', cmd: 'show ip nat statistics' },
    { step: '6. Testa ping mot Internet från inside', cmd: 'ping 8.8.8.8' },
  ],
  ACLs: [
    { step: '1. Planera: vad ska blockeras och varifrån', cmd: '! Standard ACL: source-IP only\n! Extended ACL: source + dest + port' },
    { step: '2. Skapa Extended ACL', cmd: 'ip access-list extended FILTER\n deny ip host <src> host <dst>\n permit ip any any' },
    { step: '3. Tillämpa ACL på rätt interface och riktning', cmd: 'interface Gi0/0\n ip access-group FILTER in' },
    { step: '4. Verifiera ACL-träffar', cmd: 'show access-lists' },
    { step: '5. Verifiera på interface', cmd: 'show ip interface Gi0/0' },
    { step: '6. Testa: tillåten trafik passerar, blockerad stoppas', cmd: 'ping <dest> source <tillåten-IP>\nping <dest> source <blockerad-IP>' },
  ],
}

// ─── Canvas ───────────────────────────────────────────────────────────────────

function TopoCanvas({ topo, onSelect }: { topo: Topology; onSelect: (d: TopoDevice) => void }) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  useEffect(() => { setZoom(1); setPan({ x: 0, y: 0 }) }, [topo.id])

  function onWheel(e: React.WheelEvent) {
    e.preventDefault()
    setZoom(z => Math.min(2.5, Math.max(0.4, z - e.deltaY * 0.001)))
  }
  function onMouseDown(e: React.MouseEvent) {
    if ((e.target as Element).closest('[data-device]')) return
    dragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setPan(p => ({ x: p.x + dx, y: p.y + dy }))
  }
  function onMouseUp() { dragging.current = false }

  return (
    <div
      style={{ width: '100%', height: '100%', overflow: 'hidden', cursor: 'grab', userSelect: 'none' }}
      onWheel={onWheel} onMouseDown={onMouseDown} onMouseMove={onMouseMove}
      onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
    >
      <TopoSvg topo={topo} onSelect={onSelect} svgStyle={{
        transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
        transformOrigin: 'center center',
        transition: dragging.current ? 'none' : 'transform 0.05s',
      }} />

      <div style={{
        position: 'absolute', bottom: 10, right: 10,
        background: '#060a1488', border: '1px solid var(--border)',
        borderRadius: 4, padding: '3px 8px', fontSize: 9, color: 'var(--text-dim)',
        pointerEvents: 'none',
      }}>
        {Math.round(zoom * 100)}% · scroll = zoom · drag = pan
      </div>
    </div>
  )
}

// ─── Config modal (click device) ──────────────────────────────────────────────

function ConfigPanel({ device, topo, onClose }: { device: TopoDevice; topo: Topology; onClose: () => void }) {
  const config = getDeviceConfig(device, topo)
  const [copied, setCopied] = useState(false)
  function copy() { navigator.clipboard.writeText(config); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#060a14bb', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ width: 520, maxHeight: '80%', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{device.label}</span>
            <span style={{ marginLeft: 10, fontSize: 10, color: 'var(--text-dim)', textTransform: 'uppercase' }}>{device.type}</span>
            {device.ip && <span style={{ marginLeft: 8, fontSize: 10, color: 'var(--cyan)' }}>{device.ip}</span>}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={copy} style={{ padding: '4px 10px', borderRadius: 4, fontSize: 10, cursor: 'pointer', background: copied ? '#00e67620' : 'transparent', border: `1px solid ${copied ? 'var(--green)' : 'var(--border)'}`, color: copied ? 'var(--green)' : 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>{copied ? '✓ Kopierad' : '⎘ Kopiera'}</button>
            <button onClick={onClose} style={{ padding: '4px 8px', borderRadius: 4, fontSize: 11, cursor: 'pointer', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>✕</button>
          </div>
        </div>
        <pre style={{ margin: 0, padding: '16px', overflowY: 'auto', fontSize: 11.5, lineHeight: 1.65, color: 'var(--text)', fontFamily: "'JetBrains Mono', monospace", background: 'var(--bg-base)' }}>{config}</pre>
      </div>
    </div>
  )
}

// ─── Facit tab ────────────────────────────────────────────────────────────────

function FacitPanel({ topo }: { topo: Topology }) {
  const [copied, setCopied] = useState<string | null>(null)

  function copyConfig(deviceId: string, text: string) {
    navigator.clipboard.writeText(text)
    setCopied(deviceId)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {topo.devices.map(device => {
        const config = getDeviceConfig(device, topo)
        const isCopied = copied === device.id
        return (
          <div key={device.id} style={{ background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text)' }}>{device.label}</span>
                <span style={{ marginLeft: 8, fontSize: 9, color: 'var(--text-dim)', textTransform: 'uppercase' }}>{device.type}</span>
                {device.ip && <span style={{ marginLeft: 6, fontSize: 9, color: 'var(--cyan)' }}>{device.ip}</span>}
              </div>
              <button onClick={() => copyConfig(device.id, config)} style={{ padding: '3px 8px', borderRadius: 3, fontSize: 9, cursor: 'pointer', background: isCopied ? '#00e67618' : 'transparent', border: `1px solid ${isCopied ? 'var(--green)' : 'var(--border)'}`, color: isCopied ? 'var(--green)' : 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                {isCopied ? '✓' : '⎘'}
              </button>
            </div>
            <pre style={{ margin: 0, padding: '10px 12px', fontSize: 9.5, lineHeight: 1.6, color: 'var(--text)', fontFamily: "'JetBrains Mono', monospace", background: 'var(--bg-base)', overflowX: 'auto' }}>{config}</pre>
          </div>
        )
      })}
    </div>
  )
}

// ─── Hjälp tab ────────────────────────────────────────────────────────────────

function HjalpPanel({ protocol }: { protocol: Protocol }) {
  const [open, setOpen] = useState<number | null>(null)
  const steps = HELP_TEXT[protocol]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 10, color: 'var(--text-dim)', marginBottom: 6, lineHeight: 1.6 }}>
        Steg-för-steg guide för {protocol}. Klicka ett steg för exempelkommando.
      </div>
      {steps.map((s, i) => (
        <div key={i} style={{ border: `1px solid ${open === i ? 'var(--cyan)' : 'var(--border)'}`, borderRadius: 6, overflow: 'hidden' }}>
          <div
            onClick={() => setOpen(open === i ? null : i)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', cursor: s.cmd ? 'pointer' : 'default', background: open === i ? '#00e5ff08' : 'transparent' }}
          >
            <span style={{ fontSize: 10, color: open === i ? 'var(--cyan)' : 'var(--text)', lineHeight: 1.5 }}>{s.step}</span>
            {s.cmd && <span style={{ fontSize: 10, color: 'var(--text-dim)', flexShrink: 0, marginLeft: 6 }}>{open === i ? '▲' : '▼'}</span>}
          </div>
          {open === i && s.cmd && (
            <pre style={{ margin: 0, padding: '8px 10px', fontSize: 9.5, lineHeight: 1.6, color: '#00e676', fontFamily: "'JetBrains Mono', monospace", background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>{s.cmd}</pre>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

type RightTab = 'tasks' | 'facit' | 'help'

export default function TopologyPage() {
  const [protocol, setProtocol]     = useState<Protocol>('OSPF')
  const [difficulty, setDifficulty] = useState<Difficulty>('Medel')
  const [topo, setTopo]             = useState<Topology>(() => generateTopology('OSPF', 'Medel'))
  const [done, setDone]             = useState<boolean[]>([])
  const [selected, setSelected]     = useState<TopoDevice | null>(null)
  const [activeTab, setActiveTab]   = useState<RightTab>('tasks')
  const [genOpen, setGenOpen]       = useState(true)            // vänster generator-kolumn
  const [view, setView]             = useState<'diagram' | 'lab'>('diagram')

  const generate = useCallback(() => {
    setTopo(generateTopology(protocol, difficulty))
    setDone([]); setSelected(null)
  }, [protocol, difficulty])

  const toggleTask = (i: number) => setDone(prev => {
    const next = [...prev]; next[i] = !next[i]; return next
  })

  const completed = done.filter(Boolean).length

  const tabLabel: Record<RightTab, string> = { tasks: 'UPPGIFTER', facit: 'FACIT', help: 'HJÄLP' }

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 0, background: 'var(--bg-base)', fontFamily: "'JetBrains Mono', monospace" }}>

      {/* ── Collapsed rail (när generatorn är stängd) ─── */}
      {!genOpen && (
        <div style={{ width: 36, flexShrink: 0, background: 'var(--bg-surface)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 16 }}>
          <button onClick={() => setGenOpen(true)} title="Öppna generator" style={{ width: 26, height: 26, borderRadius: 5, border: '1px solid var(--border)', background: 'transparent', color: 'var(--cyan)', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          <div style={{ writingMode: 'vertical-rl', fontSize: 9, color: 'var(--text-dim)', marginTop: 12, letterSpacing: 1, textTransform: 'uppercase' }}>Generator</div>
        </div>
      )}

      {/* ── Left config panel ─── */}
      {genOpen && (
      <aside style={{ width: 220, flexShrink: 0, background: 'var(--bg-surface)', borderRight: '1px solid var(--border)', padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>Generator</div>
            <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>Välj protokoll och svårighetsgrad</div>
          </div>
          <button onClick={() => setGenOpen(false)} title="Stäng generator" style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 4, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-dim)', cursor: 'pointer', fontSize: 12 }}>‹</button>
        </div>

        <div>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Protokoll</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {PROTOCOLS.map(p => (
              <button key={p} onClick={() => setProtocol(p)} style={{ padding: '5px 9px', borderRadius: 4, fontSize: 10, cursor: 'pointer', border: `1px solid ${protocol === p ? 'var(--cyan)' : 'var(--border)'}`, background: protocol === p ? '#00e5ff18' : 'transparent', color: protocol === p ? 'var(--cyan)' : 'var(--text)', fontFamily: "'JetBrains Mono', monospace" }}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Svårighet</div>
          <div style={{ display: 'flex', gap: 5 }}>
            {DIFFICULTIES.map(d => (
              <button key={d} onClick={() => setDifficulty(d)} style={{ flex: 1, padding: '6px 0', borderRadius: 4, fontSize: 10, cursor: 'pointer', border: `1px solid ${difficulty === d ? 'var(--cyan)' : 'var(--border)'}`, background: difficulty === d ? '#00e5ff18' : 'transparent', color: difficulty === d ? 'var(--cyan)' : 'var(--text)', fontFamily: "'JetBrains Mono', monospace" }}>{d}</button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Cisco-symboler</div>
          {[
            { label: 'Router',    color: '#00e5ff' },
            { label: 'L3 Switch', color: '#00e5ff' },
            { label: 'L2 Switch', color: '#7c4dff' },
            { label: 'Firewall',  color: '#ff4c6a' },
            { label: 'Server',    color: '#7c4dff' },
            { label: 'PC / Host', color: '#6888aa' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: item.color, opacity: 0.8, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 9, color: 'var(--text-dim)', lineHeight: 1.6, marginTop: 'auto' }}>
          Klicka på en enhet för att se Cisco IOS-konfig
        </div>

        <button onClick={generate} style={{ padding: '10px 0', background: 'var(--cyan)', color: '#060a14', border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.5, boxShadow: '0 0 16px #00e5ff44', fontFamily: "'JetBrains Mono', monospace" }}>
          ⟳ GENERERA NY
        </button>
      </aside>
      )}

      {/* ── Center ─── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, padding: '16px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 12 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{topo.scenario}</div>
            <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 3 }}>{topo.protocol} · {topo.difficulty} · {topo.domain}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            {/* Vy-växlare: Diagram | Lab */}
            <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
              {(['diagram', 'lab'] as const).map(v => (
                <button key={v} onClick={() => setView(v)} style={{
                  padding: '6px 14px', fontSize: 10, fontWeight: 700, cursor: 'pointer', border: 'none',
                  background: view === v ? 'var(--cyan)' : 'transparent',
                  color: view === v ? '#060a14' : 'var(--text-dim)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{v === 'diagram' ? '◈ Diagram' : '▤ Lab-vy'}</button>
              ))}
            </div>
            <div style={{ padding: '5px 12px', borderRadius: 5, background: 'var(--bg-elevated)', border: '1px solid var(--border)', fontSize: 10, color: 'var(--text-dim)' }}>
              ◈ {topo.devices.length} · {topo.links.length}—
            </div>
          </div>
        </div>

        {view === 'lab' ? (
          <div style={{ flex: 1, minHeight: 0 }}>
            <LabDocument topo={topo} />
          </div>
        ) : (
          <div style={{ flex: 1, background: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', position: 'relative', backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '28px 28px' }}>
            <TopoCanvas topo={topo} onSelect={setSelected} />
            {selected && <ConfigPanel device={selected} topo={topo} onClose={() => setSelected(null)} />}
          </div>
        )}
      </div>

      {/* ── Right panel with tabs (endast i diagram-vy) ─── */}
      {view === 'diagram' && (
      <aside style={{ width: 270, flexShrink: 0, background: 'var(--bg-surface)', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>

        {/* Tab bar */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
          {(['tasks', 'facit', 'help'] as RightTab[]).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: '10px 0', fontSize: 9, fontWeight: 700, letterSpacing: 1, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: activeTab === tab ? '2px solid var(--cyan)' : '2px solid transparent', color: activeTab === tab ? 'var(--cyan)' : 'var(--text-dim)', background: 'none', cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}>
              {tabLabel[tab]}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px' }}>

          {/* UPPGIFTER */}
          {activeTab === 'tasks' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)', padding: 14 }}>
                <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Mål</div>
                <div style={{ fontSize: 11, color: 'var(--text)', lineHeight: 1.65 }}>{topo.objective}</div>
              </div>

              <div style={{ background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)', padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>Uppgifter</div>
                  <div style={{ fontSize: 10, color: completed === topo.tasks.length ? 'var(--green)' : 'var(--text-dim)' }}>{completed}/{topo.tasks.length}</div>
                </div>
                {topo.tasks.map((task, i) => (
                  <div key={i} onClick={() => toggleTask(i)} style={{ display: 'flex', gap: 9, padding: '8px 10px', marginBottom: 7, background: done[i] ? '#00e67608' : 'var(--bg-surface)', borderRadius: 6, borderLeft: `2px solid ${done[i] ? 'var(--green)' : i === 0 && completed === 0 ? 'var(--cyan)' : 'var(--border)'}`, cursor: 'pointer' }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, background: done[i] ? 'var(--green)' : 'transparent', border: `1px solid ${done[i] ? 'var(--green)' : 'var(--border)'}`, color: done[i] ? '#060a14' : 'var(--text-dim)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {done[i] ? '✓' : i + 1}
                    </span>
                    <span style={{ fontSize: 10.5, color: done[i] ? 'var(--text-dim)' : 'var(--text)', lineHeight: 1.55, textDecoration: done[i] ? 'line-through' : 'none' }}>{task}</span>
                  </div>
                ))}
                {completed === topo.tasks.length && topo.tasks.length > 0 && (
                  <div style={{ marginTop: 8, padding: '10px', borderRadius: 6, background: '#00e67614', border: '1px solid #00e67640', fontSize: 11, color: 'var(--green)', textAlign: 'center', fontWeight: 600 }}>
                    Labb klar!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FACIT */}
          {activeTab === 'facit' && (
            <div>
              <div style={{ fontSize: 9, color: 'var(--text-dim)', marginBottom: 12, lineHeight: 1.6 }}>
                Komplett IOS-konfig för alla enheter. Kopiera och klistra in direkt i Packet Tracer.
              </div>
              <FacitPanel topo={topo} />
            </div>
          )}

          {/* HJÄLP */}
          {activeTab === 'help' && (
            <HjalpPanel protocol={topo.protocol} />
          )}
        </div>
      </aside>
      )}
    </div>
  )
}
