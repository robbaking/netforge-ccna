// NetForge — Cyber Blue Dashboard Variant
// Modern dark theme with cyan + purple accents, glassmorphism, glow effects

const CyberDashboard = () => {
  const c = {
    bg: '#060a14', surface: '#0c1222', surfaceHi: '#111a30',
    border: '#162040', borderHi: '#1e2d55',
    cyan: '#00e5ff', cyanDim: '#0097a7', cyanGlow: '#00e5ff30',
    purple: '#7c4dff', purpleDim: '#5c35cc',
    text: '#c8e0ff', textDim: '#6888aa', muted: '#2a4060',
    red: '#ff4c6a', green: '#00e676',
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
    { l: 'Dashboard', active: true, icon: '⊞' },
    { l: 'Topologier', icon: '◈' },
    { l: 'Quiz', icon: '▤' },
    { l: 'Felanalys', icon: '△' },
    { l: 'Subnetting', icon: '⊟' },
    { l: 'Resurser', icon: '▶' },
    { l: 'Config', icon: '⚙' },
  ];

  const acts = [
    { t: '14:32', m: 'Subnetting Quiz', r: '8/10', good: true },
    { t: '13:15', m: 'OSPF Topology Lab', r: 'Klar', good: true },
    { t: '11:48', m: '25 Flashcards', r: '25', good: true },
    { t: '09:20', m: 'VLAN Quiz', r: '6/10', good: false },
    { t: '08:00', m: 'ACL Commands', r: '9/10', good: true },
  ];

  const stats = [
    { label: 'Quizzes', value: '47', sub: 'genomförda' },
    { label: 'Topologier', value: '12', sub: 'labbar klara' },
    { label: 'Streak', value: '12', sub: 'dagar i rad' },
    { label: 'Tid idag', value: '2.4h', sub: 'studietid' },
  ];

  const card = {
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 10,
    padding: 20,
    backdropFilter: 'blur(10px)',
  };

  const GlowBar = ({ pct, color = c.cyan, height = 5 }) => (
    <div style={{
      width: '100%', height, background: c.muted + '40', borderRadius: height,
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        width: `${pct}%`, height: '100%', borderRadius: height,
        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
        boxShadow: `0 0 12px ${color}50, 0 0 4px ${color}30`,
        position: 'relative',
      }} />
    </div>
  );

  const ScoreRing = ({ pct, size = 160, stroke = 10 }) => {
    const r = (size - stroke) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct / 100);
    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={c.cyan} />
              <stop offset="100%" stopColor={c.purple} />
            </linearGradient>
          </defs>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={c.muted + '30'} strokeWidth={stroke} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#ringGrad)" strokeWidth={stroke}
            strokeDasharray={circ} strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 8px ${c.cyan}40)` }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 38, fontWeight: 700, color: c.text }}>67<span style={{ fontSize: 16, color: c.textDim }}>%</span></span>
          <span style={{ fontSize: 9, color: c.textDim, textTransform: 'uppercase', letterSpacing: 2, marginTop: 2 }}>Readiness</span>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      width: 1440, height: 900, display: 'flex', background: c.bg,
      fontFamily: font, color: c.text, fontSize: 12.5, overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Subtle gradient glow in top-right */}
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 600, height: 600,
        background: `radial-gradient(circle, ${c.cyan}08 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -300, left: -100, width: 500, height: 500,
        background: `radial-gradient(circle, ${c.purple}06 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Narrow Icon Sidebar */}
      <aside style={{
        width: 68, background: c.surface, borderRight: `1px solid ${c.border}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px 0', flexShrink: 0, zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: `linear-gradient(135deg, ${c.cyan}20, ${c.purple}20)`,
          border: `1px solid ${c.cyan}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 800, color: c.cyan,
          marginBottom: 28,
        }}>NF</div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
          {nav.map((it, i) => (
            <div key={i} style={{
              width: '100%', display: 'flex', justifyContent: 'center', padding: '12px 0',
              color: it.active ? c.cyan : c.textDim,
              background: it.active ? `${c.cyan}10` : 'transparent',
              borderLeft: it.active ? `2px solid ${c.cyan}` : '2px solid transparent',
              fontSize: 16, position: 'relative',
            }}>
              {it.icon}
            </div>
          ))}
        </nav>

        {/* User avatar */}
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: `linear-gradient(135deg, ${c.cyan}30, ${c.purple}30)`,
          border: `1px solid ${c.cyan}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, color: c.cyan, fontWeight: 600,
        }}>A</div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', zIndex: 1 }}>
        {/* Header */}
        <header style={{
          padding: '14px 28px', borderBottom: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: c.text }}>Dashboard</span>
            <span style={{ width: 1, height: 16, background: c.border }} />
            <span style={{ fontSize: 11, color: c.textDim }}>CCNA 200-301</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              padding: '7px 14px', background: c.surfaceHi, border: `1px solid ${c.border}`,
              borderRadius: 6, color: c.textDim, fontSize: 11, display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ opacity: 0.4 }}>⌘K</span> Sök...
            </div>
            <div style={{
              padding: '7px 14px', background: `linear-gradient(135deg, ${c.cyan}20, ${c.purple}20)`,
              border: `1px solid ${c.cyan}30`, borderRadius: 6, color: c.cyan, fontSize: 11,
              fontWeight: 500,
            }}>
              34 dagar kvar
            </div>
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, padding: 22, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: 'auto auto 1fr', gap: 14 }}>
          {/* Stats Row */}
          {stats.map((s, i) => (
            <div key={i} style={{
              ...card, padding: '16px 18px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 10, color: c.textDim, textTransform: 'uppercase', letterSpacing: 1.5 }}>{s.label}</div>
                <div style={{ fontSize: 9, color: c.muted, marginTop: 2 }}>{s.sub}</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: c.text }}>{s.value}</div>
            </div>
          ))}

          {/* Score + Categories */}
          <div style={{
            ...card, gridColumn: '1/2', gridRow: '2/3',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <div style={{ fontSize: 10, color: c.textDim, textTransform: 'uppercase', letterSpacing: 2 }}>
              Overall Score
            </div>
            <ScoreRing pct={67} size={150} stroke={9} />
            <div style={{
              padding: '6px 16px', borderRadius: 20,
              background: `${c.cyan}10`, border: `1px solid ${c.cyan}20`,
              fontSize: 10, color: c.cyan,
            }}>Mål: 85%</div>
          </div>

          {/* Domains */}
          <div style={{ ...card, gridColumn: '2/5', gridRow: '2/3' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16,
            }}>
              <span style={{ fontSize: 10, color: c.textDim, textTransform: 'uppercase', letterSpacing: 2 }}>Exam Domains</span>
              <span style={{ fontSize: 9, color: c.muted }}>CCNA 200-301</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {categories.map((cat, i) => {
                const color = cat.pct >= 70 ? c.green : cat.pct >= 50 ? c.cyan : c.red;
                return (
                  <div key={i}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', marginBottom: 6,
                    }}>
                      <span style={{ fontSize: 11.5, color: c.text }}>
                        {cat.name} <span style={{ color: c.muted, fontSize: 10 }}>({cat.w})</span>
                      </span>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color }}>{cat.pct}%</span>
                    </div>
                    <GlowBar pct={cat.pct} color={color} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ ...card, gridColumn: '1/3', gridRow: '3/4' }}>
            <div style={{ fontSize: 10, color: c.textDim, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14 }}>
              Snabbstart
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { t: 'Starta Quiz', s: 'Slumpmässig med timer', accent: c.cyan, icon: '▤' },
                { t: 'Ny Topologi', s: 'Generera labbtopologi', accent: c.green, icon: '◈' },
                { t: 'Subnetting', s: 'Interaktiv kalkylator', accent: c.purple, icon: '⊟' },
                { t: 'Se Resurser', s: 'Videos & guider', accent: '#ff9800', icon: '▶' },
              ].map((q, i) => (
                <div key={i} style={{
                  padding: 14, background: c.surfaceHi, border: `1px solid ${c.border}`,
                  borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: `${q.accent}12`, border: `1px solid ${q.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: q.accent, fontSize: 15,
                  }}>{q.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: c.text }}>{q.t}</div>
                    <div style={{ fontSize: 10, color: c.textDim, marginTop: 2 }}>{q.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weak areas */}
            <div style={{ marginTop: 14, padding: '12px 14px', background: `${c.red}08`, border: `1px solid ${c.red}15`, borderRadius: 6 }}>
              <div style={{ fontSize: 10, color: c.red, fontWeight: 600, marginBottom: 6 }}>
                ⚠ Fokusområden
              </div>
              <div style={{ fontSize: 10, color: c.textDim, lineHeight: 1.6 }}>
                Automation & Prog. (34%) — <span style={{ color: c.cyan }}>Se video →</span><br />
                IP Connectivity (45%) — <span style={{ color: c.cyan }}>Starta quiz →</span>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div style={{ ...card, gridColumn: '3/5', gridRow: '3/4', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14,
            }}>
              <span style={{ fontSize: 10, color: c.textDim, textTransform: 'uppercase', letterSpacing: 2 }}>Aktivitet</span>
              <span style={{ fontSize: 9, color: c.cyan }}>Visa alla →</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {acts.map((ac, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 12px', background: c.surfaceHi, borderRadius: 6,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                    background: ac.good ? c.green : c.red,
                    boxShadow: `0 0 6px ${ac.good ? c.green : c.red}50`,
                  }} />
                  <span style={{ fontSize: 10, color: c.muted, flexShrink: 0 }}>{ac.t}</span>
                  <span style={{ fontSize: 11, color: c.text, flex: 1 }}>{ac.m}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 4,
                    background: ac.good ? `${c.green}12` : `${c.red}12`,
                    color: ac.good ? c.green : c.red,
                  }}>{ac.r}</span>
                </div>
              ))}
            </div>

            {/* Mini study timer */}
            <div style={{
              marginTop: 12, padding: '14px 16px', borderRadius: 8,
              background: `linear-gradient(135deg, ${c.cyan}08, ${c.purple}08)`,
              border: `1px solid ${c.cyan}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 10, color: c.textDim }}>Study Timer</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: c.text, marginTop: 4 }}>
                  00:00<span style={{ fontSize: 10, color: c.textDim }}>.00</span>
                </div>
              </div>
              <div style={{
                padding: '8px 20px', borderRadius: 6,
                background: `linear-gradient(135deg, ${c.cyan}, ${c.purple})`,
                color: '#fff', fontSize: 11, fontWeight: 600,
              }}>START</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

window.CyberDashboard = CyberDashboard;
