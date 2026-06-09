// NetForge — Amber Console Dashboard Variant
// Warm retro terminal with amber tones, structured cards, CRT warmth

const AmberDashboard = () => {
  const a = {
    bg: '#0d0906', surface: '#161008', surfaceHi: '#1e160c',
    border: '#2a1e10', borderHi: '#3d2d18',
    primary: '#ffb000', bright: '#ffc940', dim: '#cc8800',
    muted: '#6b4d1a', veryDim: '#3d2d10', text: '#ffe0a0',
    red: '#ff6b4a', green: '#4aff7a',
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
    { l: 'Dashboard', active: true, d: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z' },
    { l: 'Topologier', d: 'M12 2a3 3 0 100 6 3 3 0 000-6zM4 16a3 3 0 100 6 3 3 0 000-6zm16 0a3 3 0 100 6 3 3 0 000-6zM12 8v5m-5.5 3.5L9 14m5.5 5.5L15 14' },
    { l: 'Quiz / Prov', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6m-6 4h6m-6 4h6m-6 4h3' },
    { l: 'Felanalys', d: 'M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16A2 2 0 005.07 19z' },
    { l: 'Subnetting', d: 'M4 5h16M4 9h16M4 13h10M4 17h6' },
    { l: 'Resurser', d: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { l: 'Inställningar', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  const acts = [
    { t: '14:32', m: 'Quiz completed: Subnetting', s: '8/10', good: true },
    { t: '13:15', m: 'Topology: OSPF Multi-Area', s: 'done', good: true },
    { t: '11:48', m: 'Flashcards: 25 reviewed', s: '25', good: true },
    { t: '09:20', m: 'Quiz completed: VLANs', s: '6/10', good: false },
  ];

  const NavIcon = ({ d, size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );

  const card = {
    background: a.surface, border: `1px solid ${a.border}`,
    borderRadius: 8, padding: 20,
  };

  const ProgressBar = ({ pct, color = a.primary, height = 6 }) => (
    <div style={{
      width: '100%', height, background: a.veryDim, borderRadius: height / 2, overflow: 'hidden',
    }}>
      <div style={{
        width: `${pct}%`, height: '100%', borderRadius: height / 2,
        background: `linear-gradient(90deg, ${color}, ${a.bright})`,
        boxShadow: `0 0 8px ${color}40`,
      }} />
    </div>
  );

  return (
    <div style={{
      width: 1440, height: 900, display: 'flex', background: a.bg,
      fontFamily: font, color: a.text, fontSize: 12.5, overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 230, background: a.surface, borderRight: `1px solid ${a.border}`,
        display: 'flex', flexDirection: 'column', flexShrink: 0,
      }}>
        {/* Profile */}
        <div style={{ padding: '24px 20px', borderBottom: `1px solid ${a.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: a.surfaceHi,
              border: `1px solid ${a.borderHi}`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: a.primary, fontSize: 16, fontWeight: 700,
            }}>NF</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: a.primary, letterSpacing: 1.5 }}>NETFORGE</div>
              <div style={{ fontSize: 9, color: a.muted, marginTop: 2 }}>CCNA Study Platform</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '12px 0' }}>
          {nav.map((it, i) => (
            <div key={i} style={{
              padding: '11px 20px', display: 'flex', alignItems: 'center', gap: 12,
              background: it.active ? `${a.primary}10` : 'transparent',
              borderRight: it.active ? `2px solid ${a.primary}` : '2px solid transparent',
              color: it.active ? a.primary : a.muted, fontSize: 12,
              transition: 'all 0.15s',
            }}>
              <NavIcon d={it.d} size={16} />
              <span style={{ fontWeight: it.active ? 600 : 400 }}>{it.l}</span>
            </div>
          ))}
        </nav>

        {/* Streak */}
        <div style={{ padding: '16px 20px', borderTop: `1px solid ${a.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: a.muted, fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Streak</span>
            <span style={{ color: a.primary, fontSize: 18, fontWeight: 700 }}>12<span style={{ fontSize: 10, color: a.dim }}> dagar</span></span>
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
            {[1,1,1,1,1,0,1,1,1,1,1,1,0,0].map((on, i) => (
              <div key={i} style={{
                flex: 1, height: 4, borderRadius: 2,
                background: on ? a.primary : a.veryDim,
                opacity: on ? 1 : 0.5,
              }} />
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          padding: '16px 28px', borderBottom: `1px solid ${a.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, color: a.text }}>
              Välkommen tillbaka
            </div>
            <div style={{ fontSize: 11, color: a.muted, marginTop: 2 }}>
              Onsdag, 15 januari 2025 — 34 dagar kvar till ditt prov
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', background: a.surfaceHi, border: `1px solid ${a.border}`,
            borderRadius: 6, color: a.muted, fontSize: 11,
          }}>
            <span style={{ opacity: 0.5 }}>⌘</span> Sök ämne eller kommando...
          </div>
        </header>

        {/* Dashboard Grid */}
        <div style={{ flex: 1, padding: 22, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto 1fr', gap: 16 }}>
          {/* Score Card */}
          <div style={{ ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 10, color: a.muted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
              CCNA Readiness
            </div>
            {/* Circular gauge */}
            <div style={{ position: 'relative', width: 130, height: 130 }}>
              <svg width={130} height={130} viewBox="0 0 130 130" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={65} cy={65} r={56} fill="none" stroke={a.veryDim} strokeWidth={8} />
                <circle cx={65} cy={65} r={56} fill="none" stroke={a.primary} strokeWidth={8}
                  strokeDasharray={`${67 / 100 * 352} 352`}
                  strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${a.primary}40)` }} />
              </svg>
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: a.primary }}>67</span>
                <span style={{ fontSize: 10, color: a.muted }}>procent</span>
              </div>
            </div>
            <div style={{ marginTop: 16, fontSize: 10, color: a.dim, textAlign: 'center' }}>
              Mål: 85% → Redo för prov
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ ...card, gridColumn: '2/4' }}>
            <div style={{ fontSize: 10, color: a.muted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
              Snabbstart
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[
                { title: 'Starta Quiz', sub: 'Slumpmässiga frågor med timer', icon: '▤', accent: a.primary },
                { title: 'Generera Topologi', sub: 'Ny labbtopologi att öva på', icon: '◈', accent: '#4aff7a' },
                { title: 'Subnetting', sub: 'Interaktiv kalkylator', icon: '⊞', accent: '#4ac8ff' },
              ].map((q, i) => (
                <div key={i} style={{
                  padding: 16, background: a.surfaceHi, border: `1px solid ${a.border}`,
                  borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${q.accent}12`, border: `1px solid ${q.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: q.accent, fontSize: 16,
                  }}>{q.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: a.text }}>{q.title}</div>
                  <div style={{ fontSize: 10, color: a.muted, lineHeight: 1.4 }}>{q.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div style={{ ...card, gridColumn: '1/3' }}>
            <div style={{ fontSize: 10, color: a.muted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>
              Exam Domains — CCNA 200-301
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {categories.map((cat, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 11.5, color: a.text }}>{cat.name} <span style={{ color: a.muted }}>({cat.w})</span></span>
                    <span style={{
                      fontSize: 11.5, fontWeight: 600,
                      color: cat.pct >= 70 ? a.green : cat.pct >= 50 ? a.primary : a.red,
                    }}>{cat.pct}%</span>
                  </div>
                  <ProgressBar
                    pct={cat.pct}
                    color={cat.pct >= 70 ? a.green : cat.pct >= 50 ? a.primary : a.red}
                    height={5}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Activity + Recommendations */}
          <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 10, color: a.muted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14 }}>
              Senaste aktivitet
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              {acts.map((ac, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 10px', background: a.surfaceHi, borderRadius: 4,
                  borderLeft: `2px solid ${ac.good ? a.green : a.red}`,
                }}>
                  <span style={{ fontSize: 10, color: a.muted, flexShrink: 0 }}>{ac.t}</span>
                  <span style={{ fontSize: 11, color: a.text, flex: 1 }}>{ac.m}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 600,
                    color: ac.good ? a.green : a.red,
                  }}>{ac.s}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${a.border}`, paddingTop: 12, marginTop: 12 }}>
              <div style={{ fontSize: 10, color: a.muted, marginBottom: 6 }}>Rekommenderat:</div>
              <div style={{ fontSize: 10, color: a.dim, lineHeight: 1.6 }}>
                → Öva Automation & Prog. (34%)<br />
                → Se video: OSPF Basics<br />
                → Quiz: IP Connectivity
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

window.AmberDashboard = AmberDashboard;
