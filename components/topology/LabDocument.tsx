"use client"
import { useState } from "react"
import { getDeviceConfig } from "@/lib/topology"
import type { Topology } from "@/lib/topology"
import { TopoSvg } from "./TopoSvg"

// Lab-dokument: en ren, scrollbar presentation av en topologi i samma anda som
// klassiska Packet Tracer-labbar (Introduktion → Diagram → Instruktioner → Lösning).
// Stylad i NetForge Cyber Blue-temat.

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 15, fontWeight: 700, color: 'var(--cyan)', margin: '0 0 12px',
      paddingBottom: 6, borderBottom: '1px solid var(--border)',
      letterSpacing: 0.3,
    }}>
      {children}
    </h2>
  )
}

function ConfigBlock({ caption, config, copied, onCopy }: {
  caption: string; config: string; copied: boolean; onCopy: () => void
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text)', fontWeight: 600 }}>{caption}</span>
        <button onClick={onCopy} style={{
          padding: '2px 9px', borderRadius: 3, fontSize: 9, cursor: 'pointer',
          background: copied ? '#00e67618' : 'transparent',
          border: `1px solid ${copied ? 'var(--green)' : 'var(--border)'}`,
          color: copied ? 'var(--green)' : 'var(--text-dim)',
          fontFamily: "'JetBrains Mono', monospace",
        }}>{copied ? '✓ Kopierad' : '⎘ Kopiera'}</button>
      </div>
      <pre style={{
        margin: 0, padding: '12px 14px', borderRadius: 6,
        fontSize: 11, lineHeight: 1.6, color: 'var(--text)',
        fontFamily: "'JetBrains Mono', monospace",
        background: 'var(--bg-base)', border: '1px solid var(--border)',
        overflowX: 'auto',
      }}>{config}</pre>
    </div>
  )
}

export default function LabDocument({ topo }: { topo: Topology }) {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(key: string, text: string) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  const fullConfig = topo.devices
    .map(d => `! ===== ${d.label} (${d.type}) =====\n${getDeviceConfig(d, topo)}`)
    .join('\n\n')

  return (
    <div style={{
      height: '100%', overflowY: 'auto', background: 'var(--bg-surface)',
      border: '1px solid var(--border)', borderRadius: 10,
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 34px 60px' }}>

        {/* Titel */}
        <div style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 10, color: 'var(--purple)', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>
            Packet Tracer-lab · {topo.domain}
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', margin: '4px 0 0' }}>
            {topo.scenario}
          </h1>
          <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 4 }}>
            {topo.protocol} · Svårighet: {topo.difficulty} · {topo.devices.length} enheter · {topo.links.length} länkar
          </div>
        </div>

        {/* Introduktion */}
        <section style={{ marginTop: 28 }}>
          <SectionHeading>Introduktion</SectionHeading>
          <p style={{ fontSize: 12.5, lineHeight: 1.75, color: 'var(--text)', margin: 0 }}>
            {topo.objective}
          </p>
        </section>

        {/* Nätverksdiagram */}
        <section style={{ marginTop: 28 }}>
          <SectionHeading>Nätverksdiagram</SectionHeading>
          <div style={{
            background: 'var(--bg-base)', border: '1px solid var(--border)', borderRadius: 8,
            padding: 8, aspectRatio: '720 / 430',
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}>
            <TopoSvg topo={topo} />
          </div>
        </section>

        {/* Lab-instruktioner */}
        <section style={{ marginTop: 28 }}>
          <SectionHeading>Lab-instruktioner</SectionHeading>
          <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', counterReset: 'step' }}>
            {topo.tasks.map((task, i) => (
              <li key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '9px 0', borderBottom: i < topo.tasks.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                  background: '#00e5ff14', border: '1px solid var(--cyan)', color: 'var(--cyan)',
                  fontSize: 11, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{i + 1}</span>
                <span style={{ fontSize: 12.5, lineHeight: 1.65, color: 'var(--text)', paddingTop: 1 }}>{task}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Lab-lösning */}
        <section style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, paddingBottom: 6, borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--green)', margin: 0, letterSpacing: 0.3 }}>
              Lab-lösning
            </h2>
            <button onClick={() => copy('all', fullConfig)} style={{
              padding: '5px 12px', borderRadius: 5, fontSize: 10, cursor: 'pointer',
              background: copied === 'all' ? '#00e67618' : 'transparent',
              border: `1px solid ${copied === 'all' ? 'var(--green)' : 'var(--border)'}`,
              color: copied === 'all' ? 'var(--green)' : 'var(--text-dim)',
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
            }}>{copied === 'all' ? '✓ Allt kopierat' : '⎘ Kopiera all konfig'}</button>
          </div>
          <p style={{ fontSize: 11, color: 'var(--text-dim)', margin: '0 0 16px', lineHeight: 1.6 }}>
            Komplett Cisco IOS-konfiguration per enhet. Verifieringskommandon finns sist i varje block.
          </p>
          {topo.devices.map(d => (
            <ConfigBlock
              key={d.id}
              caption={`Konfigurera ${d.label}${d.ip ? `  (${d.ip})` : ''}`}
              config={getDeviceConfig(d, topo)}
              copied={copied === d.id}
              onCopy={() => copy(d.id, getDeviceConfig(d, topo))}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
