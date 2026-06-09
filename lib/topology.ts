export type DeviceType = 'router' | 'switchL2' | 'switchL3' | 'firewall' | 'server' | 'pc' | 'cloud'
export type Protocol = 'OSPF' | 'EIGRP' | 'STP' | 'VLANs' | 'ACLs' | 'NAT'
export type Difficulty = 'Lätt' | 'Medel' | 'Svår'

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
  protocol: Protocol
  difficulty: Difficulty
  domain: string
  objective: string
  tasks: string[]
  devices: TopoDevice[]
  links: TopoLink[]
}

export const PROTOCOLS: Protocol[] = ['OSPF', 'EIGRP', 'STP', 'VLANs', 'ACLs', 'NAT']

// ─── Helpers ─────────────────────────────────────────────────────────────────

function r(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function wan() {
  const b = r(0, 30); const c = r(1, 60) * 4
  return { net: `10.${b}.${c}.0/30`, h1: `10.${b}.${c}.1`, h2: `10.${b}.${c}.2` }
}

function lan(n = 0) {
  const x = r(1, 99) + n
  return { net: `192.168.${x}.0/24`, h: (h: number) => `192.168.${x}.${h}` }
}

// ─── Auto-layout ─────────────────────────────────────────────────────────────

const TYPE_TIER: Record<DeviceType, number> = {
  cloud: 0, firewall: 1, router: 2, switchL3: 3, switchL2: 4, server: 5, pc: 5,
}

type UnlaidDevice = Omit<TopoDevice, 'x' | 'y'>

const X_MIN = 80, X_MAX = 640      // horisontell marginal i viewBox 720
const Y0 = 60, Y1 = 370
// Minsta horisontella avstånd mellan noder. Routrar/moln/L3 har breda
// IP- och nät-etiketter och behöver mer luft än PCs/switchar.
const GAP_WIDE = 160               // rader med router / firewall / L3-switch / moln
const GAP_NARROW = 100             // rader med bara switchar / PCs / servrar

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

function rowGap(row: UnlaidDevice[]): number {
  const wide = row.some(d =>
    d.type === 'router' || d.type === 'firewall' || d.type === 'switchL3' || d.type === 'cloud')
  return wide ? GAP_WIDE : GAP_NARROW
}

// Sprid `count` noder jämnt över hela [X_MIN, X_MAX] (används för ankar-tiern).
function spreadEven(count: number): number[] {
  if (count <= 0) return []
  if (count === 1) return [(X_MIN + X_MAX) / 2]
  const step = (X_MAX - X_MIN) / (count - 1)
  return Array.from({ length: count }, (_, i) => Math.round(X_MIN + i * step))
}

// Givet sorterade önske-positioner (`wants`), separera överlapp med `gap` och
// passa in raden i [X_MIN, X_MAX]. Komprimerar proportionellt om den blir för
// bred, annars skiftas den mot sitt medel-x utan att gå utanför kanterna.
function resolveRow(wants: number[], gap: number): number[] {
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
    const s = avail / span                 // komprimera proportionellt
    for (let k = 0; k < n; k++) xs[k] = X_MIN + (xs[k] - xs[0]) * s
  } else {
    const wantMean = wants.reduce((a, b) => a + b, 0) / n
    const placedMean = xs.reduce((a, b) => a + b, 0) / n
    const shift = clamp(wantMean - placedMean, X_MIN - xs[0], X_MAX - xs[n - 1])
    for (let k = 0; k < n; k++) xs[k] += shift
  }
  return xs.map(Math.round)
}

// Barycenter-baserad lagerlayout (förenklad Sugiyama):
// översta tiern sprids jämnt över hela bredden; lägre tiers placeras under
// sina föräldrar, separeras vid överlapp och re-centreras kring sitt medel-x.
function layout(devs: UnlaidDevice[], links: TopoLink[]): TopoDevice[] {
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
      // Ankar-tier: jämn spridning över hela bredden.
      const xs = spreadEven(row.length)
      row.forEach((d, j) => place(d, xs[j], y))
      return
    }

    // Önskat x = medel av föräldrarnas x (anslutna noder i tier ovanför).
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

// ─── Config generation ───────────────────────────────────────────────────────

export function getDeviceConfig(device: TopoDevice, topo: Topology): string {
  const links = topo.links.filter(l => l.from === device.id || l.to === device.id)

  // ── Router ────────────────────────────────────────────────────────────────
  if (device.type === 'router') {
    const lines = [`hostname ${device.label}`, '!']

    links.forEach((l, i) => {
      const peer = topo.devices.find(d => d.id === (l.from === device.id ? l.to : l.from))
      lines.push(`interface GigabitEthernet0/${i}`)
      if (peer) lines.push(` description To-${peer.label}`)

      if (l.networkLabel) {
        const net = l.networkLabel.replace('/30', '')
        const host = l.from === device.id
          ? net.replace(/\d+$/, '1')
          : net.replace(/\d+$/, '2')
        lines.push(` ip address ${host} 255.255.255.252`)
      } else if (device.lanIp) {
        lines.push(` ip address ${device.lanIp} 255.255.255.0`)
      }
      lines.push(` no shutdown`, '!')
    })

    // Protocol block
    if (topo.protocol === 'OSPF') {
      lines.push('router ospf 1')
      if (device.lanIp) {
        const lanNet = device.lanIp.replace(/\.\d+$/, '.0')
        lines.push(` network ${lanNet} 0.0.0.255 area 0`)
      }
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          const area = l.area ? l.area.replace('Area ', '') : '0'
          lines.push(` network ${net} 0.0.0.3 area ${area}`)
        }
      })
      lines.push('!', '! --- Verifiering ---')
      lines.push('! show ip ospf neighbor')
      lines.push('! show ip route ospf')
      lines.push('! show ip ospf interface brief')
    } else if (topo.protocol === 'EIGRP') {
      lines.push('router eigrp 100', ' no auto-summary')
      if (device.lanIp) {
        const lanNet = device.lanIp.replace(/\.\d+$/, '.0')
        lines.push(` network ${lanNet} 0.0.0.255`)
      }
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          lines.push(` network ${net} 0.0.0.3`)
        }
      })
      lines.push('!', '! --- Verifiering ---')
      lines.push('! show ip eigrp neighbors')
      lines.push('! show ip route eigrp')
    } else if (topo.protocol === 'NAT') {
      const outsideIdx = links.findIndex(l => l.area === 'Outside' || l.networkLabel)
      const insideIdx  = links.findIndex(l => l.area === 'Inside'  || !l.networkLabel)
      lines.push(
        '! NAT Overload (PAT)',
        `interface GigabitEthernet0/${outsideIdx >= 0 ? outsideIdx : 0}`,
        ` ip nat outside`,
        `!`,
        `interface GigabitEthernet0/${insideIdx >= 0 ? insideIdx : 1}`,
        ` ip nat inside`,
        `!`,
        `access-list 1 permit ${device.lanIp ? device.lanIp.replace(/\.\d+$/, '.0') : '192.168.0.0'} 0.0.0.255`,
        `!`,
        `ip nat inside source list 1 interface GigabitEthernet0/${outsideIdx >= 0 ? outsideIdx : 0} overload`,
        `!`, '! --- Verifiering ---',
        '! show ip nat translations',
        '! show ip nat statistics',
      )
    } else if (topo.protocol === 'ACLs' && device.label.includes('ACL')) {
      lines.push(
        '! Extended ACL — anpassa IP till scenariot',
        'ip access-list extended FILTER',
        ` deny ip host <käll-IP> host <dest-IP>`,
        ' permit ip any any',
        '!',
        'interface GigabitEthernet0/0',
        ' ip access-group FILTER in',
        '!', '! --- Verifiering ---',
        '! show access-lists',
        '! show ip interface GigabitEthernet0/0',
      )
    } else if (topo.protocol === 'VLANs') {
      // Router-on-a-stick sub-interfaces
      const trunkLink = links.find(l => l.area === 'Trunk')
      if (trunkLink) {
        const trunkIdx = links.indexOf(trunkLink)
        lines.push(
          `interface GigabitEthernet0/${trunkIdx}`,
          ` no ip address`,
          ` no shutdown`,
          `!`,
          `interface GigabitEthernet0/${trunkIdx}.10`,
          ` encapsulation dot1Q 10`,
          ` ip address ${device.ip ?? '192.168.10.1'} 255.255.255.0`,
          `!`,
          `interface GigabitEthernet0/${trunkIdx}.20`,
          ` encapsulation dot1Q 20`,
          ` ip address ${device.lanIp ?? '192.168.20.1'} 255.255.255.0`,
          `!`, '! --- Verifiering ---',
          '! show ip route',
          '! show interfaces GigabitEthernet0/0.10',
        )
      }
    }
    return lines.join('\n')
  }

  // ── Switch L2 / L3 ───────────────────────────────────────────────────────
  if (device.type === 'switchL2' || device.type === 'switchL3') {
    const lines = [`hostname ${device.label}`, '!']

    if (topo.protocol === 'STP') {
      if (device.label.includes('Root')) {
        lines.push('spanning-tree vlan 1 priority 4096', '!')
      } else {
        lines.push('! STP körs automatiskt — standardprioritet 32768', '!')
      }
      lines.push('! --- Verifiering ---')
      lines.push('! show spanning-tree')
      lines.push('! show spanning-tree vlan 1 detail')
    } else if (topo.protocol === 'VLANs') {
      lines.push('vlan 10', ' name VLAN_10', '!', 'vlan 20', ' name VLAN_20', '!')
      if (device.type === 'switchL3') {
        lines.push('ip routing', '!')
        if (device.ip) {
          lines.push(
            'interface Vlan10',
            ` ip address ${device.ip} 255.255.255.0`,
            ' no shutdown', '!',
          )
        }
        if (device.lanIp) {
          lines.push(
            'interface Vlan20',
            ` ip address ${device.lanIp} 255.255.255.0`,
            ' no shutdown', '!',
          )
        }
      }
      // Trunk ports (uplink)
      const trunkLinks = links.filter(l => l.area === 'Trunk')
      trunkLinks.forEach((_l, i) => {
        lines.push(
          `interface GigabitEthernet0/${i + 24}`,
          ` switchport mode trunk`,
          ` switchport trunk allowed vlan 10,20`,
          `!`,
        )
      })
      // Access ports (hosts)
      const hostLinks = links.filter(l => {
        if (l.area === 'Trunk') return false
        const peerId = l.from === device.id ? l.to : l.from
        const peer = topo.devices.find(d => d.id === peerId)
        return peer?.type === 'pc' || peer?.type === 'server'
      })
      hostLinks.forEach((l, i) => {
        const vlan = l.area?.includes('20') ? 20 : 10
        lines.push(
          `interface GigabitEthernet0/${i + 1}`,
          ` switchport mode access`,
          ` switchport access vlan ${vlan}`,
          ` spanning-tree portfast`,
          `!`,
        )
      })
      lines.push('! --- Verifiering ---')
      lines.push('! show vlan brief')
      lines.push('! show interfaces trunk')
    } else if (device.type === 'switchL3' && device.ip) {
      lines.push('ip routing', '!')
      lines.push('interface Vlan1', ` ip address ${device.ip} 255.255.255.0`, ' no shutdown', '!')
    }
    return lines.join('\n')
  }

  // ── PC / Server ────────────────────────────────────────────────────────────
  if (device.type === 'pc' || device.type === 'server') {
    const ipParts = (device.ip ?? '').split('.')
    const gw = ipParts.length === 4 ? `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.1` : '<gateway>'
    return [
      `! ${device.label} — Statisk IP (Packet Tracer)`,
      `!`,
      `! Desktop > IP Configuration > Static`,
      `! IP Address  : ${device.ip ?? '<Se topologi>'}`,
      `! Subnet Mask : 255.255.255.0`,
      `! Default GW  : ${gw}`,
      `! DNS Server  : (valfritt)`,
      `!`,
      `! Verifiera anslutning:`,
      `! ping ${gw}`,
    ].join('\n')
  }

  // ── Firewall ───────────────────────────────────────────────────────────────
  if (device.type === 'firewall') {
    return [
      `hostname ${device.label}`, '!',
      'interface GigabitEthernet0/0',
      ' nameif outside', ' security-level 0',
      ' ip address dhcp setroute', ' no shutdown', '!',
      'interface GigabitEthernet0/1',
      ' nameif inside', ' security-level 100',
      ` ip address ${device.ip ?? '10.0.0.254'} 255.255.255.252`,
      ' no shutdown', '!',
      'access-list OUTSIDE extended permit ip any any',
      'access-group OUTSIDE in interface outside',
      '!', '! --- Verifiering ---',
      '! show interface ip brief',
    ].join('\n')
  }

  // ── Cloud / ISP ────────────────────────────────────────────────────────────
  if (device.type === 'cloud') {
    return [
      `! ${device.label} — Extern nod (ISP/Internet)`,
      `!`,
      `! I Packet Tracer: använd ett Cloud-objekt`,
      `! eller en Router som simulerar ISP`,
      `! Ingen konfiguration krävs`,
    ].join('\n')
  }

  return `! ${device.label}\n! Ingen konfiguration krävs`
}

// ─── OSPF Variant A: Hub-Spoke ────────────────────────────────────────────────

function genOSPF_HubSpoke(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [
      { id: 'cloud', type: 'cloud'    as DeviceType, label: 'ISP' },
      { id: 'fw',    type: 'firewall' as DeviceType, label: 'FW-1' },
    ] : []),
    { id: 'r3', type: 'router' as DeviceType, label: 'R3', ip: w01.h1, lanIp: undefined },
    { id: 'r1', type: 'router' as DeviceType, label: 'R1', ip: w01.h2, lanIp: l1.h(1) },
    { id: 'r2', type: 'router' as DeviceType, label: 'R2', ip: w02.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2' },
    { id: 'pc1', type: 'pc'      as DeviceType, label: 'PC-A', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'      as DeviceType, label: 'PC-B', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'      as DeviceType, label: 'PC-C', ip: l2.h(10) },
    { id: 'srv', type: 'server'  as DeviceType, label: 'SRV-1', ip: l2.h(50) },
  ]

  const area2 = adv ? 'Area 1' : 'Area 0'
  const links: TopoLink[] = [
    ...(adv ? [{ from: 'cloud', to: 'fw' }, { from: 'fw', to: 'r3' }] : []),
    { from: 'r3', to: 'r1', networkLabel: w01.net, area: 'Area 0', color: '#00e5ff' },
    { from: 'r3', to: 'r2', networkLabel: w02.net, area: area2, color: adv ? '#7c4dff' : '#00e5ff' },
    { from: 'r1', to: 'sw1' },
    { from: 'r2', to: 'sw2' },
    { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
    { from: 'sw2', to: 'pc3' }, { from: 'sw2', to: 'srv' },
  ]

  const label = adv ? 'Multi-Area' : 'Single-Area'
  return {
    id: crypto.randomUUID(),
    scenario: `OSPF ${label} (Hub-Spoke)`,
    protocol: 'OSPF', difficulty, domain: 'IP Connectivity',
    objective: `OSPF ${label}: R3 är hub, kopplar till R1 och R2. ${adv ? 'R3↔R1 Area 0, R3↔R2 Area 1.' : 'Alla i Area 0.'} Verifiera PC-A → SRV-1.`,
    tasks: [
      'Konfigurera IP-adresser på alla router-interface',
      'Aktivera OSPF process 1 på R1, R2 och R3',
      adv ? 'R3↔R1 Area 0 — R3↔R2 Area 1 (R3 = ABR)' : 'Alla interface i Area 0',
      'Verifiera: show ip ospf neighbor',
      `Ping PC-A (${l1.h(10)}) → SRV-1 (${l2.h(50)})`,
      ...(adv ? ['Kontrollera: show ip route ospf'] : []),
    ],
    devices: layout(devs, links), links,
  }
}

// ─── OSPF Variant B: Chain ────────────────────────────────────────────────────

function genOSPF_Chain(difficulty: Difficulty): Topology {
  const w12 = wan(); const w23 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'cloud', type: 'cloud' as DeviceType, label: 'ISP' }] : []),
    { id: 'r1', type: 'router' as DeviceType, label: 'R1', ip: w12.h1, lanIp: l1.h(1) },
    { id: 'r2', type: 'router' as DeviceType, label: 'R2', ip: w12.h2 },
    { id: 'r3', type: 'router' as DeviceType, label: 'R3', ip: w23.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2' },
    { id: 'pc1', type: 'pc'     as DeviceType, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'     as DeviceType, label: 'PC-2', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'     as DeviceType, label: 'PC-3', ip: l2.h(10) },
    { id: 'srv', type: 'server' as DeviceType, label: 'SRV-1', ip: l2.h(50) },
  ]

  const links: TopoLink[] = [
    ...(adv ? [{ from: 'cloud', to: 'r1' }] : []),
    { from: 'r1', to: 'r2', networkLabel: w12.net, area: 'Area 0', color: '#00e5ff' },
    { from: 'r2', to: 'r3', networkLabel: w23.net, area: adv ? 'Area 1' : 'Area 0', color: adv ? '#7c4dff' : '#00e5ff' },
    { from: 'r1', to: 'sw1' },
    { from: 'r3', to: 'sw2' },
    { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
    { from: 'sw2', to: 'pc3' }, { from: 'sw2', to: 'srv' },
  ]

  const label = adv ? 'Multi-Area' : 'Single-Area'
  return {
    id: crypto.randomUUID(),
    scenario: `OSPF ${label} (Kedja)`,
    protocol: 'OSPF', difficulty, domain: 'IP Connectivity',
    objective: `OSPF ${label} i kedja R1→R2→R3. ${adv ? 'R1↔R2 Area 0, R2↔R3 Area 1. R2 = ABR.' : 'Alla i Area 0.'} Verifiera PC-1 → SRV-1.`,
    tasks: [
      'Konfigurera IP-adresser på alla router-interface',
      'Aktivera OSPF process 1 på R1, R2 och R3',
      adv ? 'R1↔R2 Area 0 — R2↔R3 Area 1 (R2 = ABR)' : 'Alla interface i Area 0',
      'Verifiera: show ip ospf neighbor',
      `Ping PC-1 (${l1.h(10)}) → SRV-1 (${l2.h(50)})`,
    ],
    devices: layout(devs, links), links,
  }
}

function genOSPF(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genOSPF_HubSpoke(difficulty) : genOSPF_Chain(difficulty)
}

// ─── EIGRP ───────────────────────────────────────────────────────────────────

function genEIGRP(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty === 'Svår'
  const numSpokes = difficulty === 'Lätt' ? 2 : r(2, 3)

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'cloud', type: 'cloud' as DeviceType, label: 'ISP' }] : []),
    { id: 'r1', type: 'router' as DeviceType, label: 'R1 (Hub)', ip: w01.h1 },
    { id: 'r2', type: 'router' as DeviceType, label: 'R2', ip: w01.h2, lanIp: l1.h(1) },
    { id: 'r3', type: 'router' as DeviceType, label: 'R3', ip: w02.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2' },
    { id: 'pc1', type: 'pc'      as DeviceType, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'      as DeviceType, label: 'PC-2', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'      as DeviceType, label: 'PC-3', ip: l2.h(10) },
    { id: 'srv', type: 'server'  as DeviceType, label: 'SRV', ip: l2.h(50) },
  ]

  const links: TopoLink[] = [
    ...(adv ? [{ from: 'cloud', to: 'r1' }] : []),
    { from: 'r1', to: 'r2', networkLabel: w01.net },
    { from: 'r1', to: 'r3', networkLabel: w02.net },
    { from: 'r2', to: 'sw1' }, { from: 'r3', to: 'sw2' },
    { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
    { from: 'sw2', to: 'pc3' }, { from: 'sw2', to: 'srv' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'EIGRP Hub-and-Spoke',
    protocol: 'EIGRP', difficulty, domain: 'IP Connectivity',
    objective: 'EIGRP AS 100 — R1 är hub, R2 och R3 är spokes. Verifiera grannskap och full konnektion.',
    tasks: [
      'Konfigurera IP-adresser på alla interface',
      'Aktivera EIGRP AS 100 på R1, R2 och R3',
      'Annonsera alla nät med network-kommandot',
      'Verifiera: show ip eigrp neighbors',
      `Ping PC-1 (${l1.h(10)}) → SRV (${l2.h(50)})`,
    ],
    devices: layout(devs, links), links,
  }
}

// ─── STP Variant A: Triangel ──────────────────────────────────────────────────

function genSTP_Triangle(difficulty: Difficulty): Topology {
  const l = lan(0)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1 (Root)', tier: 0 },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2', tier: 1 },
    { id: 'sw3', type: 'switchL2' as DeviceType, label: 'SW-3', tier: 1 },
    ...(adv ? [{ id: 'sw4', type: 'switchL2' as DeviceType, label: 'SW-4', tier: 2 }] : []),
    { id: 'pc1', type: 'pc' as DeviceType, label: 'PC-1', tier: adv ? 3 : 2, ip: l.h(10) },
    { id: 'pc2', type: 'pc' as DeviceType, label: 'PC-2', tier: adv ? 3 : 2, ip: l.h(11) },
    { id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', tier: adv ? 3 : 2, ip: l.h(20) },
    { id: 'pc4', type: 'pc' as DeviceType, label: 'PC-4', tier: adv ? 3 : 2, ip: l.h(21) },
  ]

  const links: TopoLink[] = [
    { from: 'sw1', to: 'sw2', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw1', to: 'sw3', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw2', to: 'sw3', area: 'Blocked',   color: '#ff4c6a' },
    ...(adv ? [
      { from: 'sw2', to: 'sw4', color: '#00e5ff' },
      { from: 'sw4', to: 'pc3' }, { from: 'sw4', to: 'pc4' },
    ] : [
      { from: 'sw3', to: 'pc3' }, { from: 'sw3', to: 'pc4' },
    ]),
    { from: 'sw2', to: 'pc1' }, { from: 'sw2', to: 'pc2' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'STP Triangel',
    protocol: 'STP', difficulty, domain: 'Network Access',
    objective: 'STP-triangel: SW-1 är root bridge. Identifiera root ports och blocked port (SW-2 ↔ SW-3).',
    tasks: [
      'spanning-tree vlan 1 priority 4096 på SW-1',
      'Verifiera: show spanning-tree',
      'Identifiera root port på SW-2 och SW-3',
      'Identifiera blocked port (SW-2 ↔ SW-3)',
      'Verifiera konnektion: PC-1 ping PC-3',
    ],
    devices: layout(devs, links), links,
  }
}

// ─── STP Variant B: Kvadrat ───────────────────────────────────────────────────

function genSTP_Square(difficulty: Difficulty): Topology {
  const l = lan(0)

  const devs: UnlaidDevice[] = [
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1 (Root)', tier: 0 },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2', tier: 1 },
    { id: 'sw3', type: 'switchL2' as DeviceType, label: 'SW-3', tier: 1 },
    { id: 'sw4', type: 'switchL2' as DeviceType, label: 'SW-4', tier: 2 },
    { id: 'pc1', type: 'pc' as DeviceType, label: 'PC-1', tier: 3, ip: l.h(10) },
    { id: 'pc2', type: 'pc' as DeviceType, label: 'PC-2', tier: 3, ip: l.h(11) },
    { id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', tier: 3, ip: l.h(20) },
    { id: 'pc4', type: 'pc' as DeviceType, label: 'PC-4', tier: 3, ip: l.h(21) },
  ]

  const links: TopoLink[] = [
    { from: 'sw1', to: 'sw2', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw1', to: 'sw3', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw2', to: 'sw4', color: '#00e5ff' },
    { from: 'sw3', to: 'sw4', area: 'Blocked', color: '#ff4c6a' },
    { from: 'sw2', to: 'pc1' }, { from: 'sw2', to: 'pc2' },
    { from: 'sw4', to: 'pc3' }, { from: 'sw4', to: 'pc4' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'STP Kvadrat',
    protocol: 'STP', difficulty, domain: 'Network Access',
    objective: 'STP-kvadrat: SW-1 är root. Identifiera root ports på SW-2, SW-3 och SW-4. Blocked port = SW-3 → SW-4.',
    tasks: [
      'spanning-tree vlan 1 priority 4096 på SW-1',
      'Verifiera: show spanning-tree vlan 1',
      'Identifiera root port på SW-2, SW-3 och SW-4',
      'Blocked port: SW-3 → SW-4 (Alternate Port)',
      'Verifiera konnektion: PC-1 ping PC-3',
    ],
    devices: layout(devs, links), links,
  }
}

function genSTP(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genSTP_Triangle(difficulty) : genSTP_Square(difficulty)
}

// ─── VLAN Variant A: L3-Switch central ────────────────────────────────────────

function genVLAN_L3Switch(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'r1', type: 'router' as DeviceType, label: 'R1', ip: v10.h(1), lanIp: v20.h(1) }] : []),
    { id: 'dsw', type: 'switchL3' as DeviceType, label: 'DSW-1', ip: v10.h(1), lanIp: v20.h(1) },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'ASW-1' },
    { id: 'sw3', type: 'switchL2' as DeviceType, label: 'ASW-2' },
    { id: 'pc1', type: 'pc'       as DeviceType, label: 'PC-1 (V10)', ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as DeviceType, label: 'PC-2 (V10)', ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as DeviceType, label: 'PC-3 (V20)', ip: v20.h(10) },
    { id: 'srv', type: 'server'   as DeviceType, label: 'SRV (V20)',  ip: v20.h(50) },
  ]

  const links: TopoLink[] = [
    ...(adv ? [{ from: 'r1', to: 'dsw', area: 'Trunk', color: '#00e5ff' }] : []),
    { from: 'dsw', to: 'sw2', area: 'Trunk', color: '#00e5ff' },
    { from: 'dsw', to: 'sw3', area: 'Trunk', color: '#00e5ff' },
    { from: 'sw2', to: 'pc1', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw2', to: 'pc2', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw3', to: 'pc3', area: 'VLAN 20', color: '#7c4dff' },
    { from: 'sw3', to: 'srv', area: 'VLAN 20', color: '#7c4dff' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'Inter-VLAN — L3-Switch',
    protocol: 'VLANs', difficulty, domain: 'Network Access',
    objective: `VLAN 10 (${v10.net}) och VLAN 20 (${v20.net}). Inter-VLAN routing via L3-switch (ip routing + SVIs).`,
    tasks: [
      'Skapa VLAN 10 och VLAN 20 på alla switchar',
      'Konfigurera trunk-portar DSW-1 ↔ ASW',
      'Access-portar: PC-1/PC-2 → VLAN 10, PC-3/SRV → VLAN 20',
      'ip routing + interface Vlan10/Vlan20 på DSW-1',
      `Ping inter-VLAN: PC-1 (${v10.h(10)}) → PC-3 (${v20.h(10)})`,
    ],
    devices: layout(devs, links), links,
  }
}

// ─── VLAN Variant B: Router-on-a-Stick ────────────────────────────────────────

function genVLAN_RouterOnAStick(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)

  const devs: UnlaidDevice[] = [
    { id: 'r1',  type: 'router'   as DeviceType, label: 'R1', ip: v10.h(1), lanIp: v20.h(1) },
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1 (Trunk)' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2' },
    { id: 'sw3', type: 'switchL2' as DeviceType, label: 'SW-3' },
    { id: 'pc1', type: 'pc'       as DeviceType, label: 'PC-1 (V10)', ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as DeviceType, label: 'PC-2 (V10)', ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as DeviceType, label: 'PC-3 (V20)', ip: v20.h(10) },
    { id: 'srv', type: 'server'   as DeviceType, label: 'SRV (V20)',  ip: v20.h(50) },
  ]

  const links: TopoLink[] = [
    { from: 'r1',  to: 'sw1', area: 'Trunk', color: '#00e5ff' },
    { from: 'sw1', to: 'sw2', area: 'Trunk', color: '#00e5ff' },
    { from: 'sw1', to: 'sw3', area: 'Trunk', color: '#00e5ff' },
    { from: 'sw2', to: 'pc1', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw2', to: 'pc2', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw3', to: 'pc3', area: 'VLAN 20', color: '#7c4dff' },
    { from: 'sw3', to: 'srv', area: 'VLAN 20', color: '#7c4dff' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'Inter-VLAN — Router-on-a-Stick',
    protocol: 'VLANs', difficulty, domain: 'Network Access',
    objective: `VLAN 10 (${v10.net}) och VLAN 20 (${v20.net}). Inter-VLAN routing via R1 sub-interfaces (dot1Q).`,
    tasks: [
      'Skapa VLAN 10 och VLAN 20 på SW-1, SW-2 och SW-3',
      'Trunk-port: SW-1 → R1 (G0/0)',
      'R1: konfigurera G0/0.10 (dot1Q 10) och G0/0.20 (dot1Q 20)',
      'Access-portar: PC-1/PC-2 → VLAN 10, PC-3/SRV → VLAN 20',
      `Ping inter-VLAN: PC-1 (${v10.h(10)}) → PC-3 (${v20.h(10)})`,
    ],
    devices: layout(devs, links), links,
  }
}

function genVLAN(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genVLAN_L3Switch(difficulty) : genVLAN_RouterOnAStick(difficulty)
}

// ─── NAT ─────────────────────────────────────────────────────────────────────

function genNAT(difficulty: Difficulty): Topology {
  const inside = lan(0); const outside = wan()
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'cloud', type: 'cloud'    as DeviceType, label: 'Internet' },
    ...(adv ? [{ id: 'fw', type: 'firewall' as DeviceType, label: 'FW' }] : []),
    { id: 'r1',  type: 'router',   label: 'R1 (NAT)', ip: outside.h1, lanIp: inside.h(1) } as UnlaidDevice,
    { id: 'sw1', type: 'switchL2', label: 'SW-1' } as UnlaidDevice,
    { id: 'pc1', type: 'pc',       label: 'PC-1', ip: inside.h(10) } as UnlaidDevice,
    { id: 'pc2', type: 'pc',       label: 'PC-2', ip: inside.h(11) } as UnlaidDevice,
    ...(adv
      ? [{ id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', ip: inside.h(12) }]
      : [{ id: 'srv', type: 'server' as DeviceType, label: 'SRV', ip: inside.h(50) }]
    ),
  ]

  const links: TopoLink[] = [
    { from: 'cloud', to: adv ? 'fw' : 'r1', area: 'Outside', color: '#6888aa' },
    ...(adv ? [{ from: 'fw', to: 'r1' }] : []),
    { from: 'r1', to: 'sw1', area: 'Inside', color: '#00e676' },
    { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
    { from: 'sw1', to: adv ? 'pc3' : 'srv' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'NAT Overload (PAT)',
    protocol: 'NAT', difficulty, domain: 'IP Services',
    objective: `NAT Overload (PAT) på R1. Inside (${inside.net}) NATas till outside-interface (${outside.h1}).`,
    tasks: [
      'ip nat inside på G0/0 (inre interface)',
      'ip nat outside på G0/1 (yttre interface)',
      `access-list 1 permit ${inside.net.replace('/24', '')} 0.0.0.255`,
      'ip nat inside source list 1 interface G0/1 overload',
      'Verifiera: show ip nat translations',
    ],
    devices: layout(devs, links), links,
  }
}

// ─── ACL ─────────────────────────────────────────────────────────────────────

function genACL(difficulty: Difficulty): Topology {
  const w = wan(); const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'r1',  type: 'router',   label: 'R1', ip: w.h1, lanIp: l1.h(1) } as UnlaidDevice,
    { id: 'r2',  type: 'router',   label: 'R2 (ACL)', ip: w.h2, lanIp: l2.h(1) } as UnlaidDevice,
    { id: 'sw1', type: 'switchL2', label: 'SW-1' } as UnlaidDevice,
    { id: 'sw2', type: 'switchL2', label: 'SW-2' } as UnlaidDevice,
    { id: 'pc1', type: 'pc',       label: 'PC-1', ip: l1.h(10) } as UnlaidDevice,
    { id: 'pc2', type: 'pc',       label: 'PC-2 (Block)', ip: l1.h(11) } as UnlaidDevice,
    { id: 'srv', type: 'server',   label: 'SRV', ip: l2.h(50) } as UnlaidDevice,
    ...(adv ? [{ id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', ip: l2.h(20) }] : []),
  ]

  const links: TopoLink[] = [
    { from: 'r1', to: 'r2', networkLabel: w.net },
    { from: 'r1', to: 'sw1' }, { from: 'r2', to: 'sw2' },
    { from: 'sw1', to: 'pc1' },
    { from: 'sw1', to: 'pc2', area: 'DENY', color: '#ff4c6a' },
    { from: 'sw2', to: 'srv' },
    ...(adv ? [{ from: 'sw2', to: 'pc3' }] : []),
  ]

  return {
    id: crypto.randomUUID(), scenario: 'Extended ACL',
    protocol: 'ACLs', difficulty, domain: 'Security Fundamentals',
    objective: `Extended ACL på R2 blockerar PC-2 (${l1.h(11)}) → SRV (${l2.h(50)}). Övrig trafik tillåts.`,
    tasks: [
      'Skapa Extended ACL 100 på R2',
      `deny ip host ${l1.h(11)} host ${l2.h(50)}`,
      'permit ip any any',
      'Applicera ACL inbound på R2 G0/0',
      `Verifiera: PC-1 kan pinga SRV — PC-2 kan INTE`,
    ],
    devices: layout(devs, links), links,
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function generateTopology(protocol: Protocol, difficulty: Difficulty): Topology {
  switch (protocol) {
    case 'OSPF':  return genOSPF(difficulty)
    case 'EIGRP': return genEIGRP(difficulty)
    case 'STP':   return genSTP(difficulty)
    case 'VLANs': return genVLAN(difficulty)
    case 'NAT':   return genNAT(difficulty)
    case 'ACLs':  return genACL(difficulty)
  }
}

export type GeneratorKey =
  | 'ospf-chain-latt' | 'ospf-chain-medel'
  | 'ospf-hubspoke-medel' | 'ospf-hubspoke-svar'
  | 'eigrp-medel'
  | 'stp-triangle-latt' | 'stp-square-medel' | 'stp-square-svar'
  | 'vlan-roas-latt' | 'vlan-l3-medel'
  | 'acl-latt' | 'acl-medel' | 'acl-svar'
  | 'nat-medel'

export function generateByKey(key: GeneratorKey): Topology {
  switch (key) {
    case 'ospf-chain-latt':      return genOSPF_Chain('Lätt')
    case 'ospf-chain-medel':     return genOSPF_Chain('Medel')
    case 'ospf-hubspoke-medel':  return genOSPF_HubSpoke('Medel')
    case 'ospf-hubspoke-svar':   return genOSPF_HubSpoke('Svår')
    case 'eigrp-medel':          return genEIGRP('Medel')
    case 'stp-triangle-latt':    return genSTP_Triangle('Lätt')
    case 'stp-square-medel':     return genSTP_Square('Medel')
    case 'stp-square-svar':      return genSTP_Square('Svår')
    case 'vlan-roas-latt':       return genVLAN_RouterOnAStick('Lätt')
    case 'vlan-l3-medel':        return genVLAN_L3Switch('Medel')
    case 'acl-latt':             return genACL('Lätt')
    case 'acl-medel':            return genACL('Medel')
    case 'acl-svar':             return genACL('Svår')
    case 'nat-medel':            return genNAT('Medel')
  }
}
