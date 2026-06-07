"use client"
const TEXT = '#c8e0ff'
const BG   = '#111a30'

interface IconProps { size?: number; color?: string; label?: string }

export function RouterIcon({ size = 56, color = '#00e5ff', label }: IconProps) {
  const id = `rg${color.replace('#','')}`
  return (
    <g>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <ellipse cx={size/2} cy={size*0.35} rx={size*0.35} ry={size*0.12}
        fill={`url(#${id})`} stroke={color} strokeWidth="1.5" />
      <path d={`M ${size*0.15},${size*0.35} L ${size*0.15},${size*0.55} A ${size*0.35},${size*0.12} 0 0 0 ${size*0.85},${size*0.55} L ${size*0.85},${size*0.35}`}
        fill={`url(#${id})`} stroke={color} strokeWidth="1.5" />
      <ellipse cx={size/2} cy={size*0.55} rx={size*0.35} ry={size*0.12}
        fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />
      <path d={`M ${size*0.5},${size*0.45} L ${size*0.2},${size*0.2}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.2},${size*0.2} ${size*0.28},${size*0.22} ${size*0.22},${size*0.28}`} fill={color}/>
      <path d={`M ${size*0.8},${size*0.2} L ${size*0.5},${size*0.45}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.5},${size*0.45} ${size*0.58},${size*0.4} ${size*0.55},${size*0.5}`} fill={color}/>
      <path d={`M ${size*0.2},${size*0.75} L ${size*0.5},${size*0.55}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.5},${size*0.55} ${size*0.42},${size*0.55} ${size*0.46},${size*0.62}`} fill={color}/>
      <path d={`M ${size*0.5},${size*0.55} L ${size*0.8},${size*0.75}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.8},${size*0.75} ${size*0.72},${size*0.74} ${size*0.78},${size*0.68}`} fill={color}/>
      {label && <text x={size/2} y={size*0.95} textAnchor="middle" fill={TEXT} fontSize={size*0.13} fontFamily="JetBrains Mono,monospace" fontWeight="600">{label}</text>}
    </g>
  )
}

export function SwitchL2Icon({ size = 60, color = '#7c4dff', label }: IconProps) {
  const id = `sw2${color.replace('#','')}`
  return (
    <g>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect x={size*0.1} y={size*0.3} width={size*0.8} height={size*0.32} rx="2"
        fill={`url(#${id})`} stroke={color} strokeWidth="1.5"/>
      <path d={`M ${size*0.2},${size*0.4} L ${size*0.75},${size*0.4}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.75},${size*0.4} ${size*0.69},${size*0.37} ${size*0.69},${size*0.43}`} fill={color}/>
      <path d={`M ${size*0.8},${size*0.46} L ${size*0.25},${size*0.46}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.25},${size*0.46} ${size*0.31},${size*0.43} ${size*0.31},${size*0.49}`} fill={color}/>
      <path d={`M ${size*0.2},${size*0.54} L ${size*0.75},${size*0.54}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.75},${size*0.54} ${size*0.69},${size*0.51} ${size*0.69},${size*0.57}`} fill={color}/>
      <path d={`M ${size*0.8},${size*0.6} L ${size*0.25},${size*0.6}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.25},${size*0.6} ${size*0.31},${size*0.57} ${size*0.31},${size*0.63}`} fill={color}/>
      {label && <text x={size/2} y={size*0.88} textAnchor="middle" fill={TEXT} fontSize={size*0.13} fontFamily="JetBrains Mono,monospace" fontWeight="600">{label}</text>}
    </g>
  )
}

export function SwitchL3Icon({ size = 60, color = '#00e5ff', label }: IconProps) {
  const id = `sw3${color.replace('#','')}`
  return (
    <g>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect x={size*0.1} y={size*0.3} width={size*0.8} height={size*0.32} rx="2"
        fill={`url(#${id})`} stroke={color} strokeWidth="1.5"/>
      <path d={`M ${size*0.2},${size*0.4} L ${size*0.75},${size*0.4}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.75},${size*0.4} ${size*0.69},${size*0.37} ${size*0.69},${size*0.43}`} fill={color}/>
      <path d={`M ${size*0.8},${size*0.52} L ${size*0.25},${size*0.52}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.25},${size*0.52} ${size*0.31},${size*0.49} ${size*0.31},${size*0.55}`} fill={color}/>
      <path d={`M ${size*0.35},${size*0.6} L ${size*0.35},${size*0.45}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.35},${size*0.45} ${size*0.32},${size*0.5} ${size*0.38},${size*0.5}`} fill={color}/>
      <path d={`M ${size*0.65},${size*0.45} L ${size*0.65},${size*0.6}`} stroke={color} strokeWidth="1.5" fill="none"/>
      <polygon points={`${size*0.65},${size*0.6} ${size*0.62},${size*0.55} ${size*0.68},${size*0.55}`} fill={color}/>
      <rect x={size*0.76} y={size*0.22} width={size*0.2} height={size*0.14} rx="2" fill={BG} stroke={color} strokeWidth="1"/>
      <text x={size*0.86} y={size*0.33} textAnchor="middle" fill={color} fontSize={size*0.1} fontFamily="JetBrains Mono,monospace" fontWeight="700">L3</text>
      {label && <text x={size/2} y={size*0.88} textAnchor="middle" fill={TEXT} fontSize={size*0.13} fontFamily="JetBrains Mono,monospace" fontWeight="600">{label}</text>}
    </g>
  )
}

export function PCIcon({ size = 44, color = '#6888aa', label }: IconProps) {
  return (
    <g>
      <rect x={size*0.15} y={size*0.2} width={size*0.7} height={size*0.45} rx="1" fill={BG} stroke={color} strokeWidth="1.3"/>
      <rect x={size*0.22} y={size*0.27} width={size*0.56} height={size*0.3} rx="0.5" fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.5"/>
      <path d={`M ${size*0.35},${size*0.65} L ${size*0.3},${size*0.78} L ${size*0.7},${size*0.78} L ${size*0.65},${size*0.65}`}
        fill="none" stroke={color} strokeWidth="1.3"/>
      <line x1={size*0.25} y1={size*0.78} x2={size*0.75} y2={size*0.78} stroke={color} strokeWidth="1.3"/>
      {label && <text x={size/2} y={size*0.97} textAnchor="middle" fill={TEXT} fontSize={size*0.16} fontFamily="JetBrains Mono,monospace" fontWeight="500">{label}</text>}
    </g>
  )
}

export function ServerIcon({ size = 52, color = '#7c4dff', label }: IconProps) {
  return (
    <g>
      <rect x={size*0.25} y={size*0.12} width={size*0.5} height={size*0.7} rx="2" fill={BG} stroke={color} strokeWidth="1.5"/>
      {[0.25, 0.4, 0.55].map((y, i) => (
        <g key={i}>
          <line x1={size*0.3} y1={size*y} x2={size*0.7} y2={size*y} stroke={color} strokeWidth="0.8" strokeOpacity="0.5"/>
          <circle cx={size*0.34} cy={size*y} r={size*0.018} fill="#00e5ff"/>
        </g>
      ))}
      <circle cx={size*0.62} cy={size*0.72} r={size*0.025} fill="#00e5ff"/>
      {label && <text x={size/2} y={size*0.97} textAnchor="middle" fill={TEXT} fontSize={size*0.13} fontFamily="JetBrains Mono,monospace" fontWeight="500">{label}</text>}
    </g>
  )
}

export function FirewallIcon({ size = 56, color = '#ff4c6a', label }: IconProps) {
  return (
    <g>
      <rect x={size*0.15} y={size*0.25} width={size*0.7} height={size*0.45} rx="2" fill={BG} stroke={color} strokeWidth="1.5"/>
      <line x1={size*0.15} y1={size*0.4}  x2={size*0.85} y2={size*0.4}  stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.15} y1={size*0.55} x2={size*0.85} y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.4}  y1={size*0.25} x2={size*0.4}  y2={size*0.4}  stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.6}  y1={size*0.25} x2={size*0.6}  y2={size*0.4}  stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.3}  y1={size*0.4}  x2={size*0.3}  y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.5}  y1={size*0.4}  x2={size*0.5}  y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.7}  y1={size*0.4}  x2={size*0.7}  y2={size*0.55} stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.4}  y1={size*0.55} x2={size*0.4}  y2={size*0.7}  stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1={size*0.6}  y1={size*0.55} x2={size*0.6}  y2={size*0.7}  stroke={color} strokeWidth="0.8" strokeOpacity="0.6"/>
      {label && <text x={size/2} y={size*0.94} textAnchor="middle" fill={TEXT} fontSize={size*0.14} fontFamily="JetBrains Mono,monospace" fontWeight="600">{label}</text>}
    </g>
  )
}

export function CloudIcon({ size = 76, color = '#6888aa', label }: IconProps) {
  return (
    <g>
      <path d={`M ${size*0.25},${size*0.58}
        C ${size*0.1},${size*0.58} ${size*0.1},${size*0.38} ${size*0.25},${size*0.38}
        C ${size*0.25},${size*0.22} ${size*0.45},${size*0.22} ${size*0.5},${size*0.32}
        C ${size*0.55},${size*0.22} ${size*0.75},${size*0.24} ${size*0.78},${size*0.4}
        C ${size*0.92},${size*0.42} ${size*0.92},${size*0.62} ${size*0.78},${size*0.62}
        L ${size*0.25},${size*0.62} Z`}
        fill={BG} stroke={color} strokeWidth="1.5"/>
      {label && <text x={size/2} y={size*0.8} textAnchor="middle" fill={TEXT} fontSize={size*0.11} fontFamily="JetBrains Mono,monospace" fontWeight="500">{label}</text>}
    </g>
  )
}
