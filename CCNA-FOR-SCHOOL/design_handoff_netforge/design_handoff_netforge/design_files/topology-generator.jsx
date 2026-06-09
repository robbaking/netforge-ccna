/* Variant C — Topology Generator Page */
/* Uses cisco-icons.jsx for device symbols, matches variant-c (Cyan Tech) aesthetic */

const TopologyGenerator = () => {
  const { CiscoRouter, CiscoSwitchL2, CiscoSwitchL3, CiscoPC, CiscoServer, CiscoFirewall, CiscoCloud, CiscoAP } = window.CiscoIcons;
  const c = window.tcg;

  const navItems = [
    { id: 'dash', label: 'Dashboard', icon: '◆' },
    { id: 'topo', label: 'Topologier', icon: '◈', active: true },
    { id: 'quiz', label: 'Quiz / Prov', icon: '◉' },
    { id: 'miss', label: 'Missar', icon: '✕' },
    { id: 'sub', label: 'Subnetting', icon: '▦' },
    { id: 'res', label: 'Resurser', icon: '▶' },
  ];

  // Currently-selected scenario data
  const scenario = {
    name: 'OSPF Multi-Area',
    difficulty: 'Medel',
    domain: 'IP Connectivity',
    objective: 'Konfigurera OSPF mellan tre routrar i två områden. Sätt upp distribution-switchen som L3 och verifiera grannarfullskap.',
    tasks: [
      'Konfigurera IP-adresser på alla R-interface',
      'Aktivera OSPF process 1 på alla routrar',
      'Lägg R1 & R2 i Area 0, R3 i Area 10',
      'Verifiera neighbor-status med `show ip ospf neighbor`',
      'Pinga PC-A från PC-B genom hela nätet',
    ],
  };

  // Device list with positions (relative to canvas 720×420)
  const devices = [
    { id: 'cloud', type: 'cloud', label: 'ISP', x: 360, y: 30, ip: '203.0.113.0/30' },
    { id: 'fw',    type: 'firewall', label: 'FW-1', x: 360, y: 95 },
    { id: 'r1',    type: 'router', label: 'R1', x: 180, y: 175, ip: '10.1.0.1' },
    { id: 'r2',    type: 'router', label: 'R2', x: 540, y: 175, ip: '10.1.0.2' },
    { id: 'r3',    type: 'router', label: 'R3', x: 360, y: 175, ip: '10.1.0.3' },
    { id: 'sw1',   type: 'switchL3', label: 'DSW-1', x: 180, y: 275, ip: '192.168.10.1' },
    { id: 'sw2',   type: 'switchL2', label: 'ASW-1', x: 540, y: 275 },
    { id: 'pc1',   type: 'pc', label: 'PC-A', x: 100, y: 365, ip: '192.168.10.10' },
    { id: 'pc2',   type: 'pc', label: 'PC-B', x: 260, y: 365, ip: '192.168.10.11' },
    { id: 'pc3',   type: 'pc', label: 'PC-C', x: 460, y: 365, ip: '192.168.20.10' },
    { id: 'srv',   type: 'server', label: 'SRV-1', x: 620, y: 365, ip: '192.168.20.50' },
  ];

  // Links between devices [from, to, networkLabel, area]
  const links = [
    ['cloud', 'fw', '', null],
    ['fw', 'r3', '', null],
    ['r3', 'r1', '10.0.13.0/30', 'Area 0'],
    ['r3', 'r2', '10.0.23.0/30', 'Area 10'],
    ['r1', 'sw1', '', null],
    ['r2', 'sw2', '', null],
    ['sw1', 'pc1', '', null],
    ['sw1', 'pc2', '', null],
    ['sw2', 'pc3', '', null],
    ['sw2', 'srv', '', null],
  ];

  const findDev = id => devices.find(d => d.id === id);

  const renderDevice = (d) => {
    const sizes = { router: 56, switchL2: 60, switchL3: 60, pc: 44, server: 52, firewall: 56, cloud: 76, ap: 44 };
    const size = sizes[d.type] || 56;
    const cx = d.x, cy = d.y;
    return (
      <g key={d.id} transform={`translate(${cx - size/2}, ${cy - size/2})`}>
        {d.type === 'router' && <CiscoRouter size={size} label={d.label} />}
        {d.type === 'switchL2' && <CiscoSwitchL2 size={size} label={d.label} />}
        {d.type === 'switchL3' && <CiscoSwitchL3 size={size} label={d.label} />}
        {d.type === 'pc' && <CiscoPC size={size} label={d.label} />}
        {d.type === 'server' && <CiscoServer size={size} label={d.label} />}
        {d.type === 'firewall' && <CiscoFirewall size={size} label={d.label} />}
        {d.type === 'cloud' && <CiscoCloud size={size} label={d.label} />}
        {d.type === 'ap' && <CiscoAP size={size} label={d.label} />}
        {d.ip && (
          <text x={size/2} y={-4} textAnchor="middle"
            fill={c.cyan} fontSize="9" fontFamily="'JetBrains Mono', monospace">
            {d.ip}
          </text>
        )}
      </g>
    );
  };

  const s = {
    root: { display: 'flex', width: '100%', height: '100%', background: c.bg, fontFamily: "'JetBrains Mono', monospace", color: c.text, fontSize: 12, overflow: 'hidden' },
    sidebar: { width: 56, background: c.surface, borderRight: `1px solid ${c.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 6, flexShrink: 0 },
    sideIcon: (active) => ({
      width: 36, height: 36, borderRadius: 8,
      background: active ? c.cyanGlow : 'transparent',
      border: active ? `1px solid ${c.cyan}44` : '1px solid transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: active ? c.cyan : c.text, fontSize: 14, cursor: 'pointer',
    }),
    panel: { width: 240, background: c.surface, borderRight: `1px solid ${c.border}`, padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0, overflow: 'auto' },
    main: { flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
    title: { fontSize: 22, color: c.white, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" },
    subtitle: { fontSize: 11, color: c.text, marginTop: 4 },
    cardTitle: { fontSize: 9, color: c.cyan, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, fontWeight: 600 },
    btnPrimary: { padding: '10px 16px', background: c.cyan, color: c.bg, border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, cursor: 'pointer', boxShadow: `0 0 14px ${c.cyan}55`, fontFamily: "'JetBrains Mono', monospace" },
    btnSecondary: { padding: '10px 14px', background: 'transparent', color: c.textBright, border: `1px solid ${c.border}`, borderRadius: 6, fontSize: 11, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" },
    chip: (active) => ({
      padding: '6px 10px', borderRadius: 4, fontSize: 10,
      border: `1px solid ${active ? c.cyan : c.border}`,
      background: active ? c.cyanGlow : 'transparent',
      color: active ? c.cyan : c.textBright,
      cursor: 'pointer',
    }),
    select: {
      width: '100%', padding: '8px 10px', background: c.surfaceAlt,
      border: `1px solid ${c.border}`, borderRadius: 4, color: c.textBright,
      fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
    },
  };

  const protocols = ['OSPF', 'EIGRP', 'STP', 'VLANs', 'ACLs', 'NAT'];
  const sizes = ['Small (2-3)', 'Medium (5-7)', 'Large (8+)'];
  const difficulties = ['Lätt', 'Medel', 'Svår'];

  return (
    <div style={s.root}>
      {/* Sidebar — icon nav */}
      <nav style={s.sidebar}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: `linear-gradient(135deg, ${c.cyan}, ${c.purple})`, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff', fontWeight: 700 }}>N</div>
        {navItems.map((n) => (
          <div key={n.id} style={s.sideIcon(n.active)} title={n.label}>{n.icon}</div>
        ))}
      </nav>

      {/* Generator config panel */}
      <aside style={s.panel}>
        <div>
          <div style={{ fontSize: 14, color: c.white, fontWeight: 700, marginBottom: 2 }}>Generator</div>
          <div style={{ fontSize: 10, color: c.text }}>Konfigurera & generera labb</div>
        </div>

        {/* Protocol selector */}
        <div>
          <div style={s.cardTitle}>Protokoll / Ämne</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {protocols.map((p, i) => (
              <div key={p} style={s.chip(i === 0)}>{p}</div>
            ))}
          </div>
        </div>

        {/* Topology size */}
        <div>
          <div style={s.cardTitle}>Storlek</div>
          <select style={s.select} defaultValue="Medium (5-7)">
            {sizes.map(sz => <option key={sz}>{sz}</option>)}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <div style={s.cardTitle}>Svårighetsgrad</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {difficulties.map((d, i) => (
              <div key={d} style={{ ...s.chip(i === 1), flex: 1, textAlign: 'center' }}>{d}</div>
            ))}
          </div>
        </div>

        {/* Include devices */}
        <div>
          <div style={s.cardTitle}>Inkludera enheter</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { name: 'Router', checked: true, color: c.cyan },
              { name: 'L3 Switch', checked: true, color: c.cyan },
              { name: 'L2 Switch', checked: true, color: c.purple },
              { name: 'Firewall', checked: true, color: c.red },
              { name: 'Server', checked: true, color: c.purple },
              { name: 'PC / Host', checked: true, color: c.text },
              { name: 'Access Point', checked: false, color: c.yellow },
            ].map(d => (
              <label key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 11, color: d.checked ? c.textBright : c.text }}>
                <span style={{
                  width: 14, height: 14, borderRadius: 3,
                  border: `1px solid ${d.checked ? d.color : c.border}`,
                  background: d.checked ? `${d.color}33` : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, color: d.color,
                }}>{d.checked ? '✓' : ''}</span>
                {d.name}
              </label>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button style={{ ...s.btnPrimary, marginTop: 'auto' }}>⟳ GENERERA NY</button>
        <button style={s.btnSecondary}>↓ Exportera .pkt</button>
      </aside>

      {/* Main canvas + scenario info */}
      <main style={s.main}>
        {/* Header */}
        <div style={s.header}>
          <div>
            <div style={s.title}>Topologi-generator</div>
            <div style={s.subtitle}>Scenario · {scenario.name} · {scenario.difficulty} · {scenario.domain}</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={s.btnSecondary}>📋 Kopiera konfig</button>
            <button style={s.btnSecondary}>📜 Visa lösning</button>
            <button style={s.btnPrimary}>▶ STARTA LABB</button>
          </div>
        </div>

        {/* Main content: canvas + task panel */}
        <div style={{ display: 'flex', gap: 14, flex: 1, minHeight: 0 }}>
          {/* Topology canvas */}
          <div style={{
            flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10,
            position: 'relative', overflow: 'hidden',
            backgroundImage: `linear-gradient(${c.border} 1px, transparent 1px), linear-gradient(90deg, ${c.border} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '-1px -1px',
          }}>
            {/* Canvas toolbar */}
            <div style={{
              position: 'absolute', top: 12, left: 12, right: 12,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              zIndex: 2, pointerEvents: 'none',
            }}>
              <div style={{
                background: `${c.bg}cc`, padding: '4px 10px', borderRadius: 4,
                border: `1px solid ${c.border}`, fontSize: 10, color: c.cyan,
                fontWeight: 600, letterSpacing: 1,
              }}>
                ◈ TOPOLOGY · {devices.length} ENHETER · {links.length} LÄNKAR
              </div>
              <div style={{
                background: `${c.bg}cc`, padding: '4px 10px', borderRadius: 4,
                border: `1px solid ${c.border}`, fontSize: 10, color: c.text,
                display: 'flex', gap: 12, alignItems: 'center',
              }}>
                <span>⊞ Snap</span>
                <span>⊕ Zoom</span>
                <span style={{ color: c.cyan }}>100%</span>
              </div>
            </div>

            {/* SVG topology */}
            <svg viewBox="0 0 720 420" style={{ width: '100%', height: '100%', display: 'block' }}>
              {/* Links */}
              {links.map(([from, to, netLabel, area], i) => {
                const f = findDev(from), t = findDev(to);
                if (!f || !t) return null;
                const midX = (f.x + t.x) / 2;
                const midY = (f.y + t.y) / 2;
                const linkColor = area === 'Area 0' ? c.cyan : area === 'Area 10' ? c.purple : c.text;
                return (
                  <g key={i}>
                    <line x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                      stroke={linkColor} strokeWidth="1.5" strokeOpacity={area ? 0.8 : 0.4} />
                    {netLabel && (
                      <g transform={`translate(${midX}, ${midY})`}>
                        <rect x="-46" y="-16" width="92" height="22" rx="3"
                          fill={c.bg} stroke={linkColor} strokeWidth="1" strokeOpacity="0.6" />
                        <text x="0" y="-4" textAnchor="middle"
                          fill={linkColor} fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
                          {netLabel}
                        </text>
                        {area && (
                          <text x="0" y="3" textAnchor="middle"
                            fill={linkColor} fontSize="7" fontFamily="'JetBrains Mono', monospace" opacity="0.7">
                            {area}
                          </text>
                        )}
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Devices */}
              {devices.map(renderDevice)}
            </svg>

            {/* Legend */}
            <div style={{
              position: 'absolute', bottom: 12, left: 12,
              background: `${c.bg}dd`, border: `1px solid ${c.border}`,
              borderRadius: 6, padding: '8px 12px', fontSize: 9,
              display: 'flex', gap: 14, alignItems: 'center',
            }}>
              <span style={{ color: c.text, letterSpacing: 1, textTransform: 'uppercase' }}>OSPF Areas:</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 14, height: 2, background: c.cyan }} /> <span style={{ color: c.cyan }}>Area 0</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 14, height: 2, background: c.purple }} /> <span style={{ color: c.purple }}>Area 10</span>
              </span>
            </div>
          </div>

          {/* Right side: scenario tasks + device legend */}
          <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 14, flexShrink: 0 }}>
            {/* Objective */}
            <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: 16 }}>
              <div style={s.cardTitle}>Mål</div>
              <div style={{ fontSize: 11, color: c.textBright, lineHeight: 1.6 }}>
                {scenario.objective}
              </div>
            </div>

            {/* Task list */}
            <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: 16, flex: 1, minHeight: 0, overflow: 'auto' }}>
              <div style={s.cardTitle}>Uppgifter</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {scenario.tasks.map((t, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10, padding: '8px 10px',
                    background: c.surfaceAlt, borderRadius: 6,
                    borderLeft: `2px solid ${i === 0 ? c.cyan : c.border}`,
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: i === 0 ? c.cyan : 'transparent',
                      border: `1px solid ${i === 0 ? c.cyan : c.border}`,
                      color: i === 0 ? c.bg : c.text,
                      fontSize: 10, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: 11, color: c.textBright, lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device legend */}
            <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: 16 }}>
              <div style={s.cardTitle}>Cisco-symboler</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { key: 'r', name: 'Router', el: <CiscoRouter size={36} /> },
                  { key: 'l3', name: 'L3 Switch', el: <CiscoSwitchL3 size={36} /> },
                  { key: 'l2', name: 'L2 Switch', el: <CiscoSwitchL2 size={36} /> },
                  { key: 'fw', name: 'Firewall', el: <CiscoFirewall size={36} /> },
                ].map(d => (
                  <div key={d.key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="40" height="40" viewBox="0 0 40 40">{d.el}</svg>
                    <span style={{ fontSize: 10, color: c.textBright }}>{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

window.TopologyGenerator = TopologyGenerator;
