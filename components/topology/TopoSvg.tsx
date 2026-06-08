import type { Topology, TopoDevice } from "@/lib/topology"
import { RouterIcon, SwitchL2Icon, SwitchL3Icon, PCIcon, ServerIcon, FirewallIcon, CloudIcon } from "./CiscoIcons"

export const DEVICE_SIZES: Record<string, number> = {
  router: 52, switchL2: 56, switchL3: 56, pc: 42, server: 50, firewall: 52, cloud: 72,
}

export function DeviceIcon({ device }: { device: TopoDevice }) {
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

// Ren, props-driven SVG-rendering av en topologi. Används både av den
// interaktiva canvasen (med zoom/pan-wrapper) och av debug-rutnätet (statiskt).
export function TopoSvg({
  topo, onSelect, svgStyle,
}: {
  topo: Topology
  onSelect?: (d: TopoDevice) => void
  svgStyle?: React.CSSProperties
}) {
  const devMap = Object.fromEntries(topo.devices.map(d => [d.id, d]))

  return (
    <svg viewBox="0 0 720 430" style={{ width: '100%', height: '100%', display: 'block', ...svgStyle }}>
      {topo.links.map((link, i) => {
        const f = devMap[link.from]; const t = devMap[link.to]
        if (!f || !t) return null
        const mx = (f.x + t.x) / 2; const my = (f.y + t.y) / 2
        const lc = link.color ?? '#2a3a5c'
        const sameLevel = Math.abs(f.y - t.y) < 40
        const dx = Math.abs(t.x - f.x)
        const arcOffset = sameLevel ? Math.min(dx * 0.18, 48) : 0
        const pathD = sameLevel
          ? `M ${f.x},${f.y} Q ${mx},${my + arcOffset} ${t.x},${t.y}`
          : `M ${f.x},${f.y} L ${t.x},${t.y}`
        const labelX = mx
        const labelY = sameLevel ? f.y + arcOffset * 0.5 : my

        return (
          <g key={i}>
            <path d={pathD} fill="none"
              stroke={lc} strokeWidth="1.5" strokeOpacity={link.area ? 0.85 : 0.45} />
            {link.networkLabel && (
              <g transform={`translate(${labelX},${labelY})`}>
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
              <g transform={`translate(${labelX},${labelY})`}>
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

      {topo.devices.map(d => {
        const size = DEVICE_SIZES[d.type] ?? 52
        return (
          <g key={d.id} data-device="1"
            transform={`translate(${d.x - size / 2},${d.y - size / 2})`}
            onClick={onSelect ? () => onSelect(d) : undefined}
            style={{ cursor: onSelect ? 'pointer' : 'default' }}>
            <rect x="0" y="0" width={size} height={size} fill="transparent" />
            <DeviceIcon device={d} />
            {d.ip && (
              <text x={size / 2} y={size + 14} textAnchor="middle"
                fill="#00e5ff" fontSize="8.5" fontFamily="JetBrains Mono,monospace">
                {d.ip}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
