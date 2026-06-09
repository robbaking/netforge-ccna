/* Variant C: Topology Generator — Cisco-style network device icons */
/* Matches the Cyan Tech aesthetic from variant-c.jsx */

const tcg = {
  bg: '#080f1a', surface: '#0d1525', surfaceAlt: '#111b2e',
  border: '#1a2640', cyan: '#06d6a0', cyanDim: '#04856a',
  cyanGlow: 'rgba(6,214,160,0.06)', purple: '#8b5cf6',
  text: '#7a8ba3', textBright: '#cdd9e5', white: '#e8edf2',
  red: '#f87171', yellow: '#facc15', orange: '#fb923c',
};

// ============================================================
// CISCO-STYLE NETWORK DEVICE ICONS (SVG)
// Referenced from Cisco's official iconography
// ============================================================

const CiscoRouter = ({ size = 64, color = tcg.cyan, label }) => (
  <g>
    {/* Cisco router: cylindrical puck with 4 arrows (2 in, 2 out) */}
    <defs>
      <linearGradient id={`router-grad-${color.replace('#','')}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {/* Cylinder top ellipse */}
    <ellipse cx={size/2} cy={size*0.35} rx={size*0.35} ry={size*0.12}
      fill={`url(#router-grad-${color.replace('#','')})`} stroke={color} strokeWidth="1.5" />
    {/* Cylinder body */}
    <path d={`M ${size*0.15},${size*0.35} L ${size*0.15},${size*0.55} A ${size*0.35},${size*0.12} 0 0 0 ${size*0.85},${size*0.55} L ${size*0.85},${size*0.35}`}
      fill={`url(#router-grad-${color.replace('#','')})`} stroke={color} strokeWidth="1.5" />
    <ellipse cx={size/2} cy={size*0.55} rx={size*0.35} ry={size*0.12}
      fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />
    {/* 4 arrows — 2 pointing in, 2 pointing out (Cisco router signature) */}
    {/* Top-left arrow OUT */}
    <path d={`M ${size*0.5},${size*0.45} L ${size*0.2},${size*0.2}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.2},${size*0.2} ${size*0.28},${size*0.22} ${size*0.22},${size*0.28}`} fill={color} />
    {/* Top-right arrow IN */}
    <path d={`M ${size*0.8},${size*0.2} L ${size*0.5},${size*0.45}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.5},${size*0.45} ${size*0.58},${size*0.4} ${size*0.55},${size*0.5}`} fill={color} />
    {/* Bottom-left arrow IN */}
    <path d={`M ${size*0.2},${size*0.75} L ${size*0.5},${size*0.55}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.5},${size*0.55} ${size*0.42},${size*0.55} ${size*0.46},${size*0.62}`} fill={color} />
    {/* Bottom-right arrow OUT */}
    <path d={`M ${size*0.5},${size*0.55} L ${size*0.8},${size*0.75}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.8},${size*0.75} ${size*0.72},${size*0.74} ${size*0.78},${size*0.68}`} fill={color} />
    {label && (
      <text x={size/2} y={size*0.92} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.13} fontFamily="'JetBrains Mono', monospace" fontWeight="600">
        {label}
      </text>
    )}
  </g>
);

const CiscoSwitchL2 = ({ size = 64, color = tcg.purple, label }) => (
  <g>
    {/* Layer 2 Switch: Rectangular box with 4 parallel arrows */}
    <defs>
      <linearGradient id={`sw2-grad-${color.replace('#','')}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.25" />
        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {/* Box body */}
    <rect x={size*0.1} y={size*0.3} width={size*0.8} height={size*0.32} rx="2"
      fill={`url(#sw2-grad-${color.replace('#','')})`} stroke={color} strokeWidth="1.5" />
    {/* 4 horizontal arrows (all parallel — defining feature of L2 switch) */}
    {/* Top row: two arrows */}
    <path d={`M ${size*0.2},${size*0.4} L ${size*0.75},${size*0.4}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.75},${size*0.4} ${size*0.69},${size*0.37} ${size*0.69},${size*0.43}`} fill={color} />
    <path d={`M ${size*0.8},${size*0.46} L ${size*0.25},${size*0.46}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.25},${size*0.46} ${size*0.31},${size*0.43} ${size*0.31},${size*0.49}`} fill={color} />
    {/* Bottom row: two arrows */}
    <path d={`M ${size*0.2},${size*0.54} L ${size*0.75},${size*0.54}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.75},${size*0.54} ${size*0.69},${size*0.51} ${size*0.69},${size*0.57}`} fill={color} />
    <path d={`M ${size*0.8},${size*0.6} L ${size*0.25},${size*0.6}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.25},${size*0.6} ${size*0.31},${size*0.57} ${size*0.31},${size*0.63}`} fill={color} />
    {label && (
      <text x={size/2} y={size*0.85} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.13} fontFamily="'JetBrains Mono', monospace" fontWeight="600">
        {label}
      </text>
    )}
  </g>
);

const CiscoSwitchL3 = ({ size = 64, color = tcg.cyan, label }) => (
  <g>
    {/* Layer 3 Switch (Multilayer): Box with 4 arrows in mixed directions
        (combines router + switch capability) */}
    <defs>
      <linearGradient id={`sw3-grad-${color.replace('#','')}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.25" />
        <stop offset="100%" stopColor={color} stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect x={size*0.1} y={size*0.3} width={size*0.8} height={size*0.32} rx="2"
      fill={`url(#sw3-grad-${color.replace('#','')})`} stroke={color} strokeWidth="1.5" />
    {/* Horizontal arrows (switch behavior) */}
    <path d={`M ${size*0.2},${size*0.4} L ${size*0.75},${size*0.4}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.75},${size*0.4} ${size*0.69},${size*0.37} ${size*0.69},${size*0.43}`} fill={color} />
    <path d={`M ${size*0.8},${size*0.52} L ${size*0.25},${size*0.52}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.25},${size*0.52} ${size*0.31},${size*0.49} ${size*0.31},${size*0.55}`} fill={color} />
    {/* Vertical-ish (routing behavior) — diagonal up/down arrows */}
    <path d={`M ${size*0.35},${size*0.6} L ${size*0.35},${size*0.45}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.35},${size*0.45} ${size*0.32},${size*0.5} ${size*0.38},${size*0.5}`} fill={color} />
    <path d={`M ${size*0.65},${size*0.45} L ${size*0.65},${size*0.6}`} stroke={color} strokeWidth="1.5" fill="none" />
    <polygon points={`${size*0.65},${size*0.6} ${size*0.62},${size*0.55} ${size*0.68},${size*0.55}`} fill={color} />
    {/* L3 badge */}
    <rect x={size*0.78} y={size*0.22} width={size*0.18} height={size*0.13} rx="2"
      fill={tcg.bg} stroke={color} strokeWidth="1" />
    <text x={size*0.87} y={size*0.32} textAnchor="middle"
      fill={color} fontSize={size*0.1} fontFamily="'JetBrains Mono', monospace" fontWeight="700">L3</text>
    {label && (
      <text x={size/2} y={size*0.85} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.13} fontFamily="'JetBrains Mono', monospace" fontWeight="600">
        {label}
      </text>
    )}
  </g>
);

const CiscoPC = ({ size = 48, color = tcg.text, label }) => (
  <g>
    {/* PC/Workstation: monitor + base */}
    <rect x={size*0.15} y={size*0.2} width={size*0.7} height={size*0.45} rx="1"
      fill={tcg.surfaceAlt} stroke={color} strokeWidth="1.3" />
    {/* Screen inner */}
    <rect x={size*0.22} y={size*0.27} width={size*0.56} height={size*0.3} rx="0.5"
      fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
    {/* Stand */}
    <path d={`M ${size*0.35},${size*0.65} L ${size*0.3},${size*0.78} L ${size*0.7},${size*0.78} L ${size*0.65},${size*0.65}`}
      fill="none" stroke={color} strokeWidth="1.3" />
    <line x1={size*0.25} y1={size*0.78} x2={size*0.75} y2={size*0.78} stroke={color} strokeWidth="1.3" />
    {label && (
      <text x={size/2} y={size*0.97} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.16} fontFamily="'JetBrains Mono', monospace" fontWeight="500">
        {label}
      </text>
    )}
  </g>
);

const CiscoServer = ({ size = 56, color = tcg.purple, label }) => (
  <g>
    {/* Server: tall rectangle with horizontal slots */}
    <rect x={size*0.25} y={size*0.12} width={size*0.5} height={size*0.7} rx="2"
      fill={tcg.surfaceAlt} stroke={color} strokeWidth="1.5" />
    {/* Slot lines */}
    {[0.25, 0.4, 0.55].map((y, i) => (
      <g key={i}>
        <line x1={size*0.3} y1={size*y} x2={size*0.7} y2={size*y} stroke={color} strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx={size*0.34} cy={size*y} r={size*0.018} fill={tcg.cyan} />
      </g>
    ))}
    {/* Status LED */}
    <circle cx={size*0.62} cy={size*0.72} r={size*0.025} fill={tcg.cyan} />
    {label && (
      <text x={size/2} y={size*0.95} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.13} fontFamily="'JetBrains Mono', monospace" fontWeight="500">
        {label}
      </text>
    )}
  </g>
);

const CiscoFirewall = ({ size = 56, color = tcg.red, label }) => (
  <g>
    {/* Firewall: brick wall pattern */}
    <rect x={size*0.15} y={size*0.25} width={size*0.7} height={size*0.45} rx="2"
      fill={tcg.surfaceAlt} stroke={color} strokeWidth="1.5" />
    {/* Brick rows */}
    <line x1={size*0.15} y1={size*0.4} x2={size*0.85} y2={size*0.4} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.15} y1={size*0.55} x2={size*0.85} y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    {/* Vertical brick separators (offset between rows) */}
    <line x1={size*0.4} y1={size*0.25} x2={size*0.4} y2={size*0.4} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.6} y1={size*0.25} x2={size*0.6} y2={size*0.4} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.3} y1={size*0.4} x2={size*0.3} y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.5} y1={size*0.4} x2={size*0.5} y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.7} y1={size*0.4} x2={size*0.7} y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.4} y1={size*0.55} x2={size*0.4} y2={size*0.7} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1={size*0.6} y1={size*0.55} x2={size*0.6} y2={size*0.7} stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
    {label && (
      <text x={size/2} y={size*0.92} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.14} fontFamily="'JetBrains Mono', monospace" fontWeight="600">
        {label}
      </text>
    )}
  </g>
);

const CiscoCloud = ({ size = 80, color = tcg.text, label }) => (
  <g>
    {/* Cloud (internet) */}
    <path d={`M ${size*0.25},${size*0.55}
              C ${size*0.1},${size*0.55} ${size*0.1},${size*0.35} ${size*0.25},${size*0.35}
              C ${size*0.25},${size*0.2} ${size*0.45},${size*0.2} ${size*0.5},${size*0.3}
              C ${size*0.55},${size*0.2} ${size*0.75},${size*0.22} ${size*0.78},${size*0.38}
              C ${size*0.92},${size*0.4} ${size*0.92},${size*0.6} ${size*0.78},${size*0.6}
              L ${size*0.25},${size*0.6} Z`}
      fill={tcg.surfaceAlt} stroke={color} strokeWidth="1.5" />
    {label && (
      <text x={size/2} y={size*0.78} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.11} fontFamily="'JetBrains Mono', monospace" fontWeight="500">
        {label}
      </text>
    )}
  </g>
);

const CiscoAP = ({ size = 48, color = tcg.yellow, label }) => (
  <g>
    {/* Access Point: dome with signal waves */}
    <path d={`M ${size*0.2},${size*0.6} A ${size*0.3},${size*0.3} 0 0 1 ${size*0.8},${size*0.6} Z`}
      fill={tcg.surfaceAlt} stroke={color} strokeWidth="1.5" />
    <line x1={size*0.15} y1={size*0.6} x2={size*0.85} y2={size*0.6} stroke={color} strokeWidth="1.5" />
    {/* Signal waves */}
    <path d={`M ${size*0.3},${size*0.35} A ${size*0.2},${size*0.2} 0 0 1 ${size*0.7},${size*0.35}`}
      fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
    <path d={`M ${size*0.4},${size*0.25} A ${size*0.1},${size*0.1} 0 0 1 ${size*0.6},${size*0.25}`}
      fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
    {label && (
      <text x={size/2} y={size*0.85} textAnchor="middle"
        fill={tcg.textBright} fontSize={size*0.16} fontFamily="'JetBrains Mono', monospace" fontWeight="500">
        {label}
      </text>
    )}
  </g>
);

window.CiscoIcons = { CiscoRouter, CiscoSwitchL2, CiscoSwitchL3, CiscoPC, CiscoServer, CiscoFirewall, CiscoCloud, CiscoAP };
window.tcg = tcg;
