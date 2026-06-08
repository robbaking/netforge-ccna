"use client"
import { useState, useMemo } from "react"
import { generateTopology, PROTOCOLS } from "@/lib/topology"
import type { Topology, Protocol, Difficulty } from "@/lib/topology"
import { TopoSvg, DEVICE_SIZES } from "@/components/topology/TopoSvg"

const DIFFICULTIES: Difficulty[] = ['Lätt', 'Medel', 'Svår']
const VIEW_W = 720, VIEW_H = 430

// Hittar uppenbara layout-problem i en genererad topologi.
function detectIssues(topo: Topology): string[] {
  const issues: string[] = []
  const devs = topo.devices

  // 1. Enheter/IP-labels utanför viewBox
  for (const d of devs) {
    const half = (DEVICE_SIZES[d.type] ?? 52) / 2
    if (d.x - half < 0 || d.x + half > VIEW_W || d.y - half < 0) {
      issues.push(`${d.label} utanför kanten`)
    }
    // IP-label ritas vid y + size/2 + 14 → kontrollera nedre kanten
    if (d.ip && d.y + half + 16 > VIEW_H) {
      issues.push(`${d.label}: IP-label klipps`)
    }
  }

  // 2. Två enheter för nära varandra (överlapp)
  for (let i = 0; i < devs.length; i++) {
    for (let j = i + 1; j < devs.length; j++) {
      const a = devs[i], b = devs[j]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      if (dist < 50) issues.push(`${a.label} ↔ ${b.label} överlappar (${Math.round(dist)}px)`)
    }
  }

  return [...new Set(issues)]
}

function Cell({ topo }: { topo: Topology }) {
  const issues = detectIssues(topo)
  const bad = issues.length > 0
  return (
    <div style={{
      background: 'var(--bg-surface)', borderRadius: 8,
      border: `1px solid ${bad ? 'var(--red)' : 'var(--border)'}`,
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '6px 10px', borderBottom: '1px solid var(--border)',
        background: 'var(--bg-elevated)',
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text)' }}>{topo.scenario}</span>
        <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>
          {topo.devices.length}◈ · {topo.links.length}—
        </span>
      </div>
      <div style={{
        aspectRatio: '720 / 430', background: 'var(--bg-base)',
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}>
        <TopoSvg topo={topo} />
      </div>
      <div style={{
        padding: '5px 10px', fontSize: 9, minHeight: 20,
        color: bad ? 'var(--red)' : 'var(--green)',
        borderTop: '1px solid var(--border)', lineHeight: 1.5,
      }}>
        {bad ? `⚠ ${issues.join(' · ')}` : '✓ OK'}
      </div>
    </div>
  )
}

export default function DebugPage() {
  const [perProtocol, setPerProtocol] = useState(4)
  const [filter, setFilter] = useState<Protocol | 'all'>('all')
  const [seed, setSeed] = useState(0)

  // seed/perProtocol/filter ändras → regenerera
  const grid = useMemo(() => {
    const protocols = filter === 'all' ? PROTOCOLS : [filter]
    const rows: { protocol: Protocol; topos: Topology[] }[] = []
    for (const p of protocols) {
      const topos: Topology[] = []
      for (let i = 0; i < perProtocol; i++) {
        const diff = DIFFICULTIES[i % DIFFICULTIES.length]
        topos.push(generateTopology(p, diff))
      }
      rows.push({ protocol: p, topos })
    }
    return rows
  }, [filter, perProtocol, seed])

  const totalIssues = grid.reduce((s, row) =>
    s + row.topos.filter(t => detectIssues(t).length > 0).length, 0)

  return (
    <div style={{
      height: '100%', overflowY: 'auto', background: 'var(--bg-base)',
      fontFamily: "'JetBrains Mono', monospace", padding: '20px 24px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
            ⚙ Topologi-debug
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 3 }}>
            Stresstest av generatorn. Röd ram = upptäckt layout-problem.
            {' '}<span style={{ color: totalIssues ? 'var(--red)' : 'var(--green)' }}>
              {totalIssues} problem
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Protocol filter */}
          <select value={filter} onChange={e => setFilter(e.target.value as Protocol | 'all')} style={selectStyle}>
            <option value="all">Alla protokoll</option>
            {PROTOCOLS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          {/* Count */}
          <select value={perProtocol} onChange={e => setPerProtocol(Number(e.target.value))} style={selectStyle}>
            {[2, 4, 6, 8].map(n => <option key={n} value={n}>{n} per protokoll</option>)}
          </select>
          <button onClick={() => setSeed(s => s + 1)} style={{
            padding: '7px 14px', background: 'var(--cyan)', color: '#060a14',
            border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700,
            cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace",
          }}>⟳ Generera om alla</button>
        </div>
      </div>

      {/* Grid per protocol */}
      {grid.map(row => (
        <div key={row.protocol} style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: 'var(--cyan)', fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>
            {row.protocol}
          </div>
          <div style={{
            display: 'grid', gap: 12,
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          }}>
            {row.topos.map((t) => <Cell key={t.id} topo={t} />)}
          </div>
        </div>
      ))}
    </div>
  )
}

const selectStyle: React.CSSProperties = {
  padding: '6px 10px', borderRadius: 6, fontSize: 10,
  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
  color: 'var(--text)', fontFamily: "'JetBrains Mono', monospace", cursor: 'pointer',
}
