// NetForge — Terminal Green Dashboard Variant
// Classic hacker terminal aesthetic with ASCII elements and scanline effects

const TerminalDashboard = () => {
  const g = {
    bg: '#000000', surface: '#060d06', border: '#0a2a10',
    primary: '#00ff41', bright: '#40ff70', dim: '#00aa2a',
    muted: '#005522', veryDim: '#002a11', blue: '#4488ff',
  };
  const font = "'JetBrains Mono', monospace";

  const categories = [
    { name: 'Network Fundamentals', pct: 72, w: '20%' },
    { name: 'Network Access', pct: 58, w: '20%' },
    { name: 'IP Connectivity', pct: 45, w: '25%' },
    { name: 'IP Services', pct: 81, w: '10%' },
    { name: 'Security Fundamentals', pct: 63, w: '15%' },
    { name: 'Automation & Prog.', pct: 34, w: '10%' },
  ];

  const nav = [
    { s: '▣', l: 'dashboard', active: true },
    { s: '◈', l: 'topologier' },
    { s: '▤', l: 'quiz / prov' },
    { s: '✕', l: 'felanalys' },
    { s: '⊞', l: 'subnetting' },
    { s: '▶', l: 'resurser' },
    { s: '⚙', l: 'inställningar' },
  ];

  const bar = (pct, w = 24) => {
    const f = Math.round(pct / 100 * w);
    return '█'.repeat(f) + '░'.repeat(w - f);
  };

  const acts = [
    { t: '14:32', m: 'Quiz completed: Subnetting — 8/10', c: g.bright },
    { t: '13:15', m: 'Topology generated: OSPF Multi-Area', c: g.dim },
    { t: '11:48', m: 'Flashcards reviewed: 25 cards', c: g.dim },
    { t: '09:20', m: 'Quiz completed: VLANs — 6/10', c: '#ff6b6b' },
  ];

  const cmds = [
    { cmd: '$ quiz --random --timer 45m', desc: 'Starta slumpmässig quiz med timer' },
    { cmd: '$ topo --generate --protocol ospf', desc: 'Generera ny OSPF-topologi' },
    { cmd: '$ subnet --calc --interactive', desc: 'Öppna subnetting-kalkylatorn' },
  ];

  const weak = [
    { name: 'Automation & Prog.', pct: 34, tip: '→ Börja med REST API basics' },
    { name: 'IP Connectivity', pct: 45, tip: '→ Öva OSPF & EIGRP routing' },
  ];

  const cardStyle = {
    background: g.surface, border: `1px solid ${g.border}`, padding: 20,
  };

  const headerLine = (text) => (
    <div style={{ color: g.muted, fontSize: 10, marginBottom: 14, letterSpacing: 1 }}>
      ┌─ {text} {'─'.repeat(Math.max(0, 36 - text.length))}┐
    </div>
  );

  return (
    <div style={{
      width: 1440, height: 900, display: 'flex', background: g.bg,
      fontFamily: font, color: g.primary, fontSize: 12.5, position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`@keyframes termBlink{0%,100%{opacity:1}50%{opacity:0}}`}</style>

      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
        background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,65,0.015) 2px,rgba(0,255,65,0.015) 4px)',
      }} />

      {/* Sidebar */}
      <aside style={{
        width: 200, background: g.surface, borderRight: `1px solid ${g.border}`,
        display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0,
      }}>
        <div style={{ padding: '0 20px', marginBottom: 36 }}>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 3, color: g.primary }}>
            NETFORGE
          </div>
          <div style={{ fontSize: 9, color: g.muted, marginTop: 6 }}>v1.0.0 // ccna-prep-tool</div>
        </div>

        <nav style={{ flex: 1 }}>
          {nav.map((it, i) => (
            <div key={i} style={{
              padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10,
              background: it.active ? 'rgba(0,255,65,0.05)' : 'transparent',
              borderLeft: it.active ? `2px solid ${g.primary}` : '2px solid transparent',
              color: it.active ? g.primary : g.muted, fontSize: 12.5,
            }}>
              <span style={{ width: 14, textAlign: 'center', fontSize: 11 }}>{it.s}</span>
              <span>{it.active ? `> ${it.l}` : `  ${it.l}`}</span>
            </div>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: `1px solid ${g.border}` }}>
          <div style={{ color: g.muted, fontSize: 10 }}>╭── session ──╮</div>
          <div style={{ color: g.dim, fontSize: 10, padding: '3px 0' }}>│ user: admin</div>
          <div style={{ color: g.dim, fontSize: 10, padding: '3px 0' }}>│ streak: 12 days</div>
          <div style={{ color: g.dim, fontSize: 10, padding: '3px 0' }}>│ rank: #42</div>
          <div style={{ color: g.muted, fontSize: 10 }}>╰─────────────╯</div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header bar */}
        <header style={{
          padding: '14px 28px', borderBottom: `1px solid ${g.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <span style={{ color: g.dim }}>root@netforge</span>
            <span style={{ color: g.muted }}>:</span>
            <span style={{ color: g.blue }}>~/dashboard</span>
            <span style={{ color: g.primary }}>$ </span>
            <span style={{
              display: 'inline-block', width: 7, height: 15, background: g.primary,
              animation: 'termBlink 1s step-end infinite', verticalAlign: 'middle',
            }} />
          </div>
          <div style={{ color: g.muted, fontSize: 10 }}>
            2025-01-15 — CCNA 200-301 — Exam in 34 days
          </div>
        </header>

        {/* Content grid */}
        <div style={{
          flex: 1, padding: 22, display: 'grid',
          gridTemplateColumns: '260px 1fr 260px',
          gridTemplateRows: '1fr 1fr',
          gap: 16,
        }}>
          {/* CCNA Score */}
          <div style={{ ...cardStyle, gridRow: '1/2' }}>
            {headerLine('CCNA READINESS')}
            <div style={{ textAlign: 'center', padding: '12px 0 8px' }}>
              <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, color: g.primary }}>67%</div>
              <div style={{ color: g.dim, fontSize: 11, marginTop: 10 }}>
                [{bar(67, 20)}]
              </div>
              <div style={{ color: g.muted, fontSize: 10, marginTop: 12 }}>
                STATUS: TRAINING
              </div>
              <div style={{ color: g.muted, fontSize: 10, marginTop: 4 }}>
                TARGET: 85% → EXAM READY
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ ...cardStyle, gridRow: '2/3' }}>
            {headerLine('QUICK ACTIONS')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cmds.map((a, i) => (
                <div key={i} style={{
                  padding: '10px 12px', border: `1px solid ${g.border}`,
                  background: 'rgba(0,255,65,0.02)',
                }}>
                  <div style={{ color: g.primary, fontSize: 11.5, fontWeight: 500 }}>{a.cmd}</div>
                  <div style={{ color: g.muted, fontSize: 10, marginTop: 4 }}># {a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Domains */}
          <div style={{ ...cardStyle, gridColumn: '2/3', gridRow: '1/2' }}>
            {headerLine('EXAM DOMAINS')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {categories.map((cat, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '180px 1fr 44px',
                  alignItems: 'center', gap: 10,
                }}>
                  <span style={{ color: g.dim, fontSize: 11.5 }}>{cat.name}</span>
                  <span style={{
                    color: cat.pct >= 70 ? g.primary : cat.pct >= 50 ? g.dim : '#ff6b6b',
                    fontSize: 11,
                  }}>
                    [{bar(cat.pct, 28)}]
                  </span>
                  <span style={{ color: g.primary, textAlign: 'right', fontSize: 11.5 }}>{cat.pct}%</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16, padding: '8px 12px', background: 'rgba(0,255,65,0.03)',
              border: `1px dashed ${g.border}`, fontSize: 10, color: g.muted,
            }}>
              Weighted avg: 67% — Svagast: Automation (34%), IP Conn (45%)
            </div>
          </div>

          {/* Activity Log */}
          <div style={{ ...cardStyle, gridColumn: '2/3', gridRow: '2/3' }}>
            {headerLine('ACTIVITY LOG')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {acts.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: 11.5 }}>
                  <span style={{ color: g.muted, flexShrink: 0 }}>[{a.t}]</span>
                  <span style={{ color: a.c }}>{a.m}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16, borderTop: `1px solid ${g.border}`, paddingTop: 12,
              color: g.muted, fontSize: 10,
            }}>
              $ tail -f /var/log/activity.log | grep today → <span style={{ color: g.dim }}>4 entries</span>
            </div>
          </div>

          {/* Weak Areas */}
          <div style={{ ...cardStyle, gridRow: '1/3', gridColumn: '3/4' }}>
            {headerLine('WEAK AREAS')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {weak.map((w, i) => (
                <div key={i} style={{
                  padding: 12, border: `1px solid rgba(255,107,107,0.2)`,
                  background: 'rgba(255,107,107,0.03)',
                }}>
                  <div style={{ color: '#ff6b6b', fontSize: 11.5, fontWeight: 600 }}>
                    ⚠ {w.name}
                  </div>
                  <div style={{ color: '#ff6b6b', fontSize: 10, marginTop: 4, opacity: 0.7 }}>
                    [{bar(w.pct, 18)}] {w.pct}%
                  </div>
                  <div style={{ color: g.dim, fontSize: 10, marginTop: 8 }}>{w.tip}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, borderTop: `1px solid ${g.border}`, paddingTop: 16 }}>
              <div style={{ color: g.muted, fontSize: 10, marginBottom: 10 }}>
                ┌─ STUDY TIMER ─┐
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 600, color: g.primary }}>00:00</div>
                <div style={{ color: g.muted, fontSize: 10, marginTop: 6 }}>
                  $ timer --start
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, borderTop: `1px solid ${g.border}`, paddingTop: 16 }}>
              <div style={{ color: g.muted, fontSize: 10, marginBottom: 10 }}>
                ┌─ NEXT UP ─────┐
              </div>
              <div style={{ color: g.dim, fontSize: 10, lineHeight: 1.6 }}>
                → Quiz: OSPF Concepts<br />
                → Lab: STP Config<br />
                → Review: ACL Rules
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

window.TerminalDashboard = TerminalDashboard;
