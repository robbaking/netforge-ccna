"use client"
import { useState, useCallback, useRef, useEffect } from "react"
import { generateTopology, getDeviceConfig, PROTOCOLS } from "@/lib/topology"
import type { Topology, Protocol, Difficulty, TopoDevice } from "@/lib/topology"
import { RouterIcon, SwitchL2Icon, SwitchL3Icon, PCIcon, ServerIcon, FirewallIcon, CloudIcon } from "./CiscoIcons"

const DIFFICULTIES: Difficulty[] = ['Lätt', 'Medel', 'Svår']

const DEVICE_SIZES: Record<string, number> = {
  router: 52, switchL2: 56, switchL3: 56, pc: 42, server: 50, firewall: 52, cloud: 72,
}

function DeviceIcon({ device }: { device: TopoDevice }) {
  const size = DEVICE_SIZES[device.type] ?? 52
  const props = { size, label: device.label }
  switch (device.type) {
    case 'router':   return <RouterIcon   {...props} />
    case 'switchL2': return <SwitchL2Icon {...props} />
    case 'switchL3': return <SwitchL3Icon {...props} />
    case 'pc':       return <PCIcon       {...props} />
    case 'server':   return <ServerIcon   {...props} />
    case 'firewall': return <FirewallIcon {...props} />
    case 'cloud':    return <CloudIcon    {...props} />
    default:         return null
  }
}

// ─── Canvas ───────────────────────────────────────────────────────────────────

function TopoCanvas({
  topo, onSelect,
}: {
  topo: Topology
  onSelect: (d: TopoDevice) => void
}) {
  const devMap = Object.fromEntries(topo.devices.map(d => [d.id, d]))

  // zoom / pan state
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  // reset on new topology
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
      style={{
        width: '100%', height: '100%', overflow: 'hidden',
        cursor: dragging.current ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <svg
        viewBox="0 0 720 430"
        style={{
          width: '100%', height: '100%', display: 'block',
          transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          transformOrigin: 'center center',
          transition: dragging.current ? 'none' : 'transform 0.05s',
        }}
      >
        {/* links */}
        {topo.links.map((link, i) => {
          const f = devMap[link.from]; const t = devMap[link.to]
          if (!f || !t) return null
          const mx = (f.x + t.x) / 2; const my = (f.y + t.y) / 2
          const lc = link.color ?? '#2a3a5c'
          return (
            <g key={i}>
              <line x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                stroke={lc} strokeWidth="1.5" strokeOpacity={link.area ? 0.85 : 0.45} />
              {link.networkLabel && (
                <g transform={`translate(${mx},${my})`}>
                  <rect x="-44" y="-14" width="88" height="20" rx="3"
                    fill="#060a14" stroke={lc} strokeWidth="1" strokeOpacity="0.7" />
                  <text x="0" y="-3" textAnchor="middle"
                    fill={lc} fontSize="8.5" fontFamily="JetBrains Mono,monospace" fontWeight="600">
                    {link.networkLabel}
                  </text>
                  {link.area && (
                    <text x="0" y="5.5" textAnchor="middle"
                      fill={lc} fontSize="7" fontFamily="JetBrains Mono,monospace" opacity="0.7">
                      {link.area}
                    </text>
                  )}
                </g>
              )}
              {!link.networkLabel && link.area && (
                <g transform={`translate(${mx},${my})`}>
                  <rect x="-30" y="-10" width="60" height="16" rx="3"
                    fill="#060a14" stroke={lc} strokeWidth="1" strokeOpacity="0.6" />
                  <text x="0" y="2" textAnchor="middle"
                    fill={lc} fontSize="7.5" fontFamily="JetBrains Mono,monospace">
                    {link.area}
                  </text>
                </g>
              )}
            </g>
          )
        })}

        {/* devices */}
        {topo.devices.map(d => {
          const size = DEVICE_SIZES[d.type] ?? 52
          return (
            <g
              key={d.id}
              data-device="1"
              transform={`translate(${d.x - size / 2},${d.y - size / 2})`}
              onClick={() => onSelect(d)}
              style={{ cursor: 'pointer' }}
            >
              {/* invisible hit area */}
              <rect x="0" y="0" width={size} height={size} fill="transparent" />
              <DeviceIcon device={d} />
              {d.ip && (
                <text x={size / 2} y={-5} textAnchor="middle"
                  fill="#00e5ff" fontSize="8.5" fontFamily="JetBrains Mono,monospace">
                  {d.ip}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* zoom hint */}
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

// ─── Config modal ─────────────────────────────────────────────────────────────

function ConfigPanel({ device, topo, onClose }: {
  device: TopoDevice; topo: Topology; onClose: () => void
}) {
  const config = getDeviceConfig(device, topo)
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(config)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        background: '#060a14bb', zIndex: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 520, maxHeight: '80%',
          background: 'var(--bg-surface)', border: '1px solid var(--border)',
          borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '12px 16px', borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{device.label}</span>
            <span style={{ marginLeft: 10, fontSize: 10, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              {device.type}
            </span>
            {device.ip && (
              <span style={{ marginLeft: 8, fontSize: 10, color: 'var(--cyan)' }}>{device.ip}</span>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={copy} style={{
              padding: '4px 10px', borderRadius: 4, fontSize: 10, cursor: 'pointer',
              background: copied ? '#00e67620' : 'transparent',
              border: `1px solid ${copied ? 'var(--green)' : 'var(--border)'}`,
              color: copied ? 'var(--green)' : 'var(--text-dim)',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {copied ? '✓ Kopierad' : '⎘ Kopiera'}
            </button>
            <button onClick={onClose} style={{
              padding: '4px 8px', borderRadius: 4, fontSize: 11, cursor: 'pointer',
              background: 'transparent', border: '1px solid var(--border)',
              color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace",
            }}>✕</button>
          </div>
        </div>

        {/* config code */}
        <pre style={{
          margin: 0, padding: '16px', overflowY: 'auto',
          fontSize: 11.5, lineHeight: 1.65,
          color: 'var(--text)', fontFamily: "'JetBrains Mono', monospace",
          background: 'var(--bg-base)',
        }}>
          {config}
        </pre>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function TopologyPage() {
  const [protocol, setProtocol]     = useState<Protocol>('OSPF')
  const [difficulty, setDifficulty] = useState<Difficulty>('Medel')
  const [topo, setTopo]             = useState<Topology>(() => generateTopology('OSPF', 'Medel'))
  const [done, setDone]             = useState<boolean[]>([])
  const [selected, setSelected]     = useState<TopoDevice | null>(null)

  const generate = useCallback(() => {
    setTopo(generateTopology(protocol, difficulty))
    setDone([]); setSelected(null)
  }, [protocol, difficulty])

  const toggleTask = (i: number) => setDone(prev => {
    const next = [...prev]; next[i] = !next[i]; return next
  })

  const completed = done.filter(Boolean).length

  return (
    <div style={{
      display: 'flex', height: '100%', minHeight: 0,
      background: 'var(--bg-base)', fontFamily: "'JetBrains Mono', monospace",
    }}>

      {/* ── Left config panel ─────────────────────────── */}
      <aside style={{
        width: 220, flexShrink: 0,
        background: 'var(--bg-surface)', borderRight: '1px solid var(--border)',
        padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto',
      }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>Generator</div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>Välj protokoll och svårighetsgrad</div>
        </div>

        <div>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Protokoll</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {PROTOCOLS.map(p => (
              <button key={p} onClick={() => setProtocol(p)} style={{
                padding: '5px 9px', borderRadius: 4, fontSize: 10, cursor: 'pointer',
                border: `1px solid ${protocol === p ? 'var(--cyan)' : 'var(--border)'}`,
                background: protocol === p ? '#00e5ff18' : 'transparent',
                color: protocol === p ? 'var(--cyan)' : 'var(--text)',
                fontFamily: "'JetBrains Mono', monospace",
              }}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Svårighet</div>
          <div style={{ display: 'flex', gap: 5 }}>
            {DIFFICULTIES.map(d => (
              <button key={d} onClick={() => setDifficulty(d)} style={{
                flex: 1, padding: '6px 0', borderRadius: 4, fontSize: 10, cursor: 'pointer',
                border: `1px solid ${difficulty === d ? 'var(--cyan)' : 'var(--border)'}`,
                background: difficulty === d ? '#00e5ff18' : 'transparent',
                color: difficulty === d ? 'var(--cyan)' : 'var(--text)',
                fontFamily: "'JetBrains Mono', monospace",
              }}>{d}</button>
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

        <button onClick={generate} style={{
          padding: '10px 0', background: 'var(--cyan)', color: '#060a14',
          border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700,
          cursor: 'pointer', letterSpacing: 0.5, boxShadow: '0 0 16px #00e5ff44',
          fontFamily: "'JetBrains Mono', monospace",
        }}>⟳ GENERERA NY</button>
      </aside>

      {/* ── Center canvas ────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, padding: '16px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{topo.scenario}</div>
            <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 3 }}>
              {topo.protocol} · {topo.difficulty} · {topo.domain}
            </div>
          </div>
          <div style={{
            padding: '5px 12px', borderRadius: 5,
            background: 'var(--bg-elevated)', border: '1px solid var(--border)',
            fontSize: 10, color: 'var(--text-dim)',
          }}>
            ◈ {topo.devices.length} enheter · {topo.links.length} länkar
          </div>
        </div>

        <div style={{
          flex: 1, background: 'var(--bg-surface)', borderRadius: 10,
          border: '1px solid var(--border)', overflow: 'hidden', position: 'relative',
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}>
          <TopoCanvas topo={topo} onSelect={setSelected} />
          {selected && (
            <ConfigPanel device={selected} topo={topo} onClose={() => setSelected(null)} />
          )}
        </div>
      </div>

      {/* ── Right tasks panel ────────────────────────── */}
      <aside style={{
        width: 256, flexShrink: 0,
        background: 'var(--bg-surface)', borderLeft: '1px solid var(--border)',
        padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto',
      }}>
        <div style={{ background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)', padding: 14 }}>
          <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontWeight: 600 }}>Mål</div>
          <div style={{ fontSize: 11, color: 'var(--text)', lineHeight: 1.65 }}>{topo.objective}</div>
        </div>

        <div style={{ background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)', padding: 14, flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>Uppgifter</div>
            <div style={{ fontSize: 10, color: completed === topo.tasks.length ? 'var(--green)' : 'var(--text-dim)' }}>
              {completed}/{topo.tasks.length}
            </div>
          </div>
          {topo.tasks.map((task, i) => (
            <div key={i} onClick={() => toggleTask(i)} style={{
              display: 'flex', gap: 9, padding: '8px 10px', marginBottom: 7,
              background: done[i] ? '#00e67608' : 'var(--bg-surface)', borderRadius: 6,
              borderLeft: `2px solid ${done[i] ? 'var(--green)' : i === 0 && completed === 0 ? 'var(--cyan)' : 'var(--border)'}`,
              cursor: 'pointer',
            }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                background: done[i] ? 'var(--green)' : 'transparent',
                border: `1px solid ${done[i] ? 'var(--green)' : 'var(--border)'}`,
                color: done[i] ? '#060a14' : 'var(--text-dim)',
                fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {done[i] ? '✓' : i + 1}
              </span>
              <span style={{
                fontSize: 10.5, color: done[i] ? 'var(--text-dim)' : 'var(--text)',
                lineHeight: 1.55, textDecoration: done[i] ? 'line-through' : 'none',
              }}>
                {task}
              </span>
            </div>
          ))}
          {completed === topo.tasks.length && topo.tasks.length > 0 && (
            <div style={{
              marginTop: 8, padding: '10px', borderRadius: 6,
              background: '#00e67614', border: '1px solid #00e67640',
              fontSize: 11, color: 'var(--green)', textAlign: 'center', fontWeight: 600,
            }}>
              Labb klar!
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}
