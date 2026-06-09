// Helpers + layout for topology generators

export type DeviceType = 'router' | 'switchL2' | 'switchL3' | 'firewall' | 'server' | 'pc' | 'cloud'

export interface TopoDevice {
  id: string
  type: DeviceType
  label: string
  tier?: number
  x: number
  y: number
  ip?: string      // primary IP shown in SVG (WAN for routers, LAN for PCs/servers)
  lanIp?: string   // router/L3-switch LAN interface IP (used for config gen, not SVG)
}

export interface TopoLink {
  from: string
  to: string
  networkLabel?: string
  area?: string
  color?: string
}

export interface Topology {
  id: string
  scenario: string
  protocol: string
  difficulty: string
  domain: string
  objective: string
  tasks: string[]
  devices: TopoDevice[]
  links: TopoLink[]
}

export type UnlaidDevice = Omit<TopoDevice, 'x' | 'y'>

export type Protocol = 'OSPF' | 'EIGRP' | 'STP' | 'VLANs' | 'ACLs' | 'NAT'
export type Difficulty = 'Lätt' | 'Medel' | 'Svår'

const X_MIN = 80, X_MAX = 640
const Y0 = 60, Y1 = 370
const GAP_WIDE = 160
const GAP_NARROW = 100
const TYPE_TIER: Record<DeviceType, number> = {
  cloud: 0, firewall: 1, router: 2, switchL3: 3, switchL2: 4, server: 5, pc: 5,
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

export function r(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function wan() {
  const b = r(0, 30); const c = r(1, 60) * 4
  return { net: `10.${b}.${c}.0/30`, h1: `10.${b}.${c}.1`, h2: `10.${b}.${c}.2` }
}

export function lan(n = 0) {
  const x = r(1, 99) + n
  return { net: `192.168.${x}.0/24`, h: (h: number) => `192.168.${x}.${h}` }
}

function rowGap(row: UnlaidDevice[]): number {
  const wide = row.some(d =>
    d.type === 'router' || d.type === 'firewall' || d.type === 'switchL3' || d.type === 'cloud')
  return wide ? GAP_WIDE : GAP_NARROW
}

export function spreadEven(count: number): number[] {
  if (count <= 0) return []
  if (count === 1) return [(X_MIN + X_MAX) / 2]
  const step = (X_MAX - X_MIN) / (count - 1)
  return Array.from({ length: count }, (_, i) => Math.round(X_MIN + i * step))
}

export function resolveRow(wants: number[], gap: number): number[] {
  const n = wants.length
  if (n === 0) return []
  if (n === 1) return [Math.round(clamp(wants[0], X_MIN, X_MAX))]

  const xs = [...wants]
  for (let k = 1; k < n; k++) {
    if (xs[k] < xs[k - 1] + gap) xs[k] = xs[k - 1] + gap
  }

  const span = xs[n - 1] - xs[0]
  const avail = X_MAX - X_MIN
  if (span > avail) {
    const s = avail / span
    for (let k = 0; k < n; k++) xs[k] = X_MIN + (xs[k] - xs[0]) * s
  } else {
    const wantMean = wants.reduce((a, b) => a + b, 0) / n
    const placedMean = xs.reduce((a, b) => a + b, 0) / n
    const shift = clamp(wantMean - placedMean, X_MIN - xs[0], X_MAX - xs[n - 1])
    for (let k = 0; k < n; k++) xs[k] += shift
  }
  return xs.map(Math.round)
}

export function layout(devs: UnlaidDevice[], links: TopoLink[]): TopoDevice[] {
  const map = new Map<number, UnlaidDevice[]>()
  for (const d of devs) {
    const t = d.tier ?? TYPE_TIER[d.type]
    if (!map.has(t)) map.set(t, [])
    map.get(t)!.push(d)
  }

  const tiers = [...map.keys()].sort((a, b) => a - b)
  const n = tiers.length
  const yStep = n > 1 ? (Y1 - Y0) / (n - 1) : 0
  const xOf = new Map<string, number>()
  const result: TopoDevice[] = []

  tiers.forEach((tierKey, i) => {
    const row = map.get(tierKey)!
    const y = n > 1 ? Y0 + i * yStep : (Y0 + Y1) / 2
    const gap = rowGap(row)

    if (i === 0) {
      const xs = spreadEven(row.length)
      row.forEach((d, j) => place(d, xs[j], y))
      return
    }

    const order = row
      .map(d => {
        const parents = links
          .filter(l => l.from === d.id || l.to === d.id)
          .map(l => (l.from === d.id ? l.to : l.from))
          .map(pid => xOf.get(pid))
          .filter((x): x is number => x !== undefined)
        const want = parents.length
          ? parents.reduce((a, b) => a + b, 0) / parents.length
          : (X_MIN + X_MAX) / 2
        return { d, want }
      })
      .sort((a, b) => a.want - b.want)

    const xs = resolveRow(order.map(o => o.want), gap)
    order.forEach((o, k) => place(o.d, xs[k], y))
  })

  function place(d: UnlaidDevice, x: number, y: number) {
    const px = Math.round(x)
    xOf.set(d.id, px)
    result.push({ ...d, x: px, y: Math.round(y) })
  }

  return result
}
