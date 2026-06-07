export type DeviceType = 'router' | 'switchL2' | 'switchL3' | 'firewall' | 'server' | 'pc' | 'cloud'
export type Protocol = 'OSPF' | 'EIGRP' | 'STP' | 'VLANs' | 'ACLs' | 'NAT'
export type Difficulty = 'Lätt' | 'Medel' | 'Svår'

export interface TopoDevice {
  id: string
  type: DeviceType
  label: string
  tier?: number   // layout tier override; lower = higher on canvas
  x: number
  y: number
  ip?: string
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

function layout(devs: UnlaidDevice[]): TopoDevice[] {
  const map = new Map<number, UnlaidDevice[]>()
  for (const d of devs) {
    const t = d.tier ?? TYPE_TIER[d.type]
    if (!map.has(t)) map.set(t, [])
    map.get(t)!.push(d)
  }

  const tiers = [...map.keys()].sort((a, b) => a - b)
  const n = tiers.length
  const Y0 = 55, Y1 = 400
  const yStep = n > 1 ? (Y1 - Y0) / (n - 1) : 0

  const result: TopoDevice[] = []
  tiers.forEach((t, i) => {
    const row = map.get(t)!
    const y = n > 1 ? Y0 + i * yStep : (Y0 + Y1) / 2
    const count = row.length
    const xStep = count > 1 ? 560 / (count - 1) : 0
    const xStart = count === 1 ? 360 : 80
    row.forEach((d, j) => {
      result.push({ ...d, x: Math.round(xStart + j * xStep), y: Math.round(y) })
    })
  })
  return result
}

// ─── Config generation ───────────────────────────────────────────────────────

export function getDeviceConfig(device: TopoDevice, topo: Topology): string {
  const links = topo.links.filter(l => l.from === device.id || l.to === device.id)

  if (device.type === 'router') {
    const lines = [`hostname ${device.label}`, '!']
    links.forEach((l, i) => {
      const peer = topo.devices.find(d => d.id === (l.from === device.id ? l.to : l.from))
      lines.push(`interface GigabitEthernet0/${i}`)
      if (peer) lines.push(` description To-${peer.label}`)
      if (device.ip && i === 0) lines.push(` ip address ${device.ip} 255.255.255.252`)
      else if (l.networkLabel) {
        const net = l.networkLabel.replace('/30', '')
        const host = l.from === device.id ? net.replace(/\d+$/, '1') : net.replace(/\d+$/, '2')
        lines.push(` ip address ${host} 255.255.255.252`)
      }
      lines.push(` no shutdown`, '!')
    })
    if (topo.protocol === 'OSPF') {
      lines.push('router ospf 1')
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          const area = l.area ? l.area.replace('Area ', '') : '0'
          lines.push(` network ${net} 0.0.0.3 area ${area}`)
        }
      })
      lines.push('!')
    } else if (topo.protocol === 'EIGRP') {
      lines.push('router eigrp 100', ' no auto-summary')
      if (device.ip) {
        const base = device.ip.split('.').slice(0, 3).join('.')
        lines.push(` network ${base}.0 0.0.0.255`)
      }
      links.forEach(l => {
        if (l.networkLabel) {
          const net = l.networkLabel.split('/')[0]
          lines.push(` network ${net} 0.0.0.3`)
        }
      })
      lines.push('!')
    } else if (topo.protocol === 'NAT') {
      lines.push(
        'ip nat inside source list 1 interface GigabitEthernet0/1 overload',
        '!',
        'access-list 1 permit 192.168.0.0 0.0.255.255',
        '!',
      )
    } else if (topo.protocol === 'ACLs' && device.label.includes('ACL')) {
      lines.push(
        'ip access-list extended FILTER',
        ' remark Block specific traffic',
        ' deny ip <källa> host <destination>',
        ' permit ip any any',
        '!',
        'interface GigabitEthernet0/0',
        ' ip access-group FILTER in',
        '!',
      )
    }
    return lines.join('\n')
  }

  if (device.type === 'switchL2' || device.type === 'switchL3') {
    const lines = [`hostname ${device.label}`, '!']
    if (topo.protocol === 'STP' && device.label.includes('Root')) {
      lines.push('spanning-tree vlan 1 priority 4096', '!')
    } else if (topo.protocol === 'STP') {
      lines.push('! Verifiera: show spanning-tree', '!')
    } else if (topo.protocol === 'VLANs') {
      lines.push('vlan 10', ' name Sales', 'vlan 20', ' name IT', '!')
      if (device.type === 'switchL2') {
        lines.push(
          'interface GigabitEthernet0/1', ' switchport mode access', ' switchport access vlan 10', '!',
          'interface GigabitEthernet0/2', ' switchport mode access', ' switchport access vlan 20', '!',
          'interface GigabitEthernet0/24', ' switchport mode trunk', ' switchport trunk allowed vlan 10,20', '!',
        )
      } else {
        lines.push(
          'ip routing', '!',
          'interface Vlan10', ` ip address ${device.ip ?? '192.168.10.1'} 255.255.255.0`, ' no shutdown', '!',
          'interface GigabitEthernet0/24', ' switchport mode trunk', '!',
        )
      }
    } else if (device.type === 'switchL3') {
      lines.push('ip routing', '!',
        'interface Vlan1', ` ip address ${device.ip ?? '<IP>'} 255.255.255.0`, ' no shutdown', '!')
    }
    return lines.join('\n')
  }

  if (device.type === 'pc' || device.type === 'server') {
    return [
      `! ${device.label}`,
      `! IP-adress: ${device.ip ?? '<Se topologi>'}`,
      `! Standard-gateway: <routerns LAN-interface>`,
      `! Konfigurera statisk IP i OS eller DHCP`,
    ].join('\n')
  }

  if (device.type === 'firewall') {
    return [
      `hostname ${device.label}`, '!',
      'interface GigabitEthernet0/0 (outside)',
      ' nameif outside', ' security-level 0', ' no shutdown', '!',
      'interface GigabitEthernet0/1 (inside)',
      ' nameif inside', ' security-level 100', ' no shutdown', '!',
      'access-list OUTSIDE extended permit ip any any',
      'access-group OUTSIDE in interface outside',
    ].join('\n')
  }

  return `! ${device.label}\n! Ingen konfiguration krävs`
}

// ─── Generators ──────────────────────────────────────────────────────────────

function genOSPF(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [
      { id: 'cloud', type: 'cloud'    as DeviceType, label: 'ISP' },
      { id: 'fw',    type: 'firewall' as DeviceType, label: 'FW-1' },
    ] : []),
    { id: 'r3', type: 'router'   as DeviceType, label: 'R3', ip: w01.h1 },
    { id: 'r1', type: 'router'   as DeviceType, label: 'R1', ip: w01.h2 },
    { id: 'r2', type: 'router'   as DeviceType, label: 'R2', ip: w02.h2 },
    { id: 'sw1', type: 'switchL3' as DeviceType, label: 'DSW-1' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'ASW-1' },
    { id: 'pc1', type: 'pc'       as DeviceType, label: 'PC-A', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'       as DeviceType, label: 'PC-B', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'       as DeviceType, label: 'PC-C', ip: l2.h(10) },
    { id: 'srv', type: 'server'   as DeviceType, label: 'SRV-1', ip: l2.h(50) },
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
    id: crypto.randomUUID(), scenario: `OSPF ${label}`, protocol: 'OSPF', difficulty,
    domain: 'IP Connectivity',
    objective: `OSPF ${label} mellan R1, R2 och R3. ${adv ? 'R3 & R1 i Area 0 — R2 i Area 1.' : 'Alla nät i Area 0.'} Verifiera PC-A → SRV-1.`,
    tasks: [
      'Konfigurera IP på alla router-interface',
      'Aktivera OSPF process 1 på R1, R2 och R3',
      adv ? 'R3 & R1 Area 0 — R2 Area 1' : 'Alla interface i Area 0',
      'Verifiera: show ip ospf neighbor',
      `Ping PC-A (${l1.h(10)}) → SRV-1 (${l2.h(50)})`,
      ...(adv ? ['Kontrollera: show ip route ospf'] : []),
    ],
    devices: layout(devs), links,
  }
}

function genEIGRP(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty === 'Svår'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'cloud', type: 'cloud' as DeviceType, label: 'ISP' }] : []),
    { id: 'r1', type: 'router'   as DeviceType, label: 'R1 (Hub)', ip: w01.h1 },
    { id: 'r2', type: 'router'   as DeviceType, label: 'R2', ip: w01.h2 },
    { id: 'r3', type: 'router'   as DeviceType, label: 'R3', ip: w02.h2 },
    { id: 'sw1', type: 'switchL2' as DeviceType, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'SW-2' },
    { id: 'pc1', type: 'pc'       as DeviceType, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'       as DeviceType, label: 'PC-2', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'       as DeviceType, label: 'PC-3', ip: l2.h(10) },
    { id: 'srv', type: 'server'   as DeviceType, label: 'SRV',  ip: l2.h(50) },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'EIGRP Hub-and-Spoke', protocol: 'EIGRP', difficulty,
    domain: 'IP Connectivity',
    objective: 'EIGRP AS 100 — R1 är hub, R2 och R3 är spokes. Verifiera grannskap och full konnektion.',
    tasks: [
      'Konfigurera IP på alla interface',
      'Aktivera EIGRP AS 100 på R1, R2 och R3',
      'Annonsera alla nät med network-kommandot',
      'Verifiera: show ip eigrp neighbors',
      `Ping PC-1 (${l1.h(10)}) → SRV (${l2.h(50)})`,
    ],
    devices: layout(devs),
    links: [
      ...(adv ? [{ from: 'cloud', to: 'r1' }] : []),
      { from: 'r1', to: 'r2', networkLabel: w01.net },
      { from: 'r1', to: 'r3', networkLabel: w02.net },
      { from: 'r2', to: 'sw1' }, { from: 'r3', to: 'sw2' },
      { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
      { from: 'sw2', to: 'pc3' }, { from: 'sw2', to: 'srv' },
    ],
  }
}

function genSTP(difficulty: Difficulty): Topology {
  const l = lan(0)
  const adv = difficulty !== 'Lätt'

  // Tier override: root bridge at top, then other switches, then hosts
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
    id: crypto.randomUUID(), scenario: 'Spanning Tree Protocol', protocol: 'STP', difficulty,
    domain: 'Network Access',
    objective: 'Konfigurera STP — sätt SW-1 som root bridge. Identifiera root ports och blocked port på SW-2 ↔ SW-3.',
    tasks: [
      'spanning-tree vlan 1 priority 4096 på SW-1',
      'Verifiera: show spanning-tree',
      'Identifiera root port på SW-2 och SW-3',
      'Identifiera blocked port (SW-2 ↔ SW-3)',
      'Verifiera konnektion: PC-1 ping PC-3',
    ],
    devices: layout(devs), links,
  }
}

function genVLAN(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'r1', type: 'router' as DeviceType, label: 'R1', ip: v10.h(1) }] : []),
    { id: 'dsw', type: 'switchL3' as DeviceType, label: 'DSW (Trunk)', ip: adv ? undefined : v10.h(1) },
    { id: 'sw2', type: 'switchL2' as DeviceType, label: 'ASW-1' },
    { id: 'sw3', type: 'switchL2' as DeviceType, label: 'ASW-2' },
    { id: 'pc1', type: 'pc'       as DeviceType, label: 'PC-1 (V10)', ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as DeviceType, label: 'PC-2 (V10)', ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as DeviceType, label: 'PC-3 (V20)', ip: v20.h(10) },
    { id: 'srv', type: 'server'   as DeviceType, label: 'SRV (V20)',  ip: v20.h(50) },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'Inter-VLAN Routing', protocol: 'VLANs', difficulty,
    domain: 'Network Access',
    objective: `VLAN 10 (${v10.net}) och VLAN 20 (${v20.net}). Inter-VLAN routing ${adv ? 'via router-on-a-stick (R1)' : 'via L3-switch (DSW)'}.`,
    tasks: [
      'Skapa VLAN 10 och VLAN 20 på alla switchar',
      'Konfigurera trunk-portar DSW ↔ ASW',
      'Access-portar: PC-1/PC-2 → VLAN 10, PC-3/SRV → VLAN 20',
      adv ? 'Sub-interface R1: G0/0.10 och G0/0.20' : 'ip routing + interface Vlan10/Vlan20 på DSW',
      `Ping inter-VLAN: PC-1 (${v10.h(10)}) → PC-3 (${v20.h(10)})`,
    ],
    devices: layout(devs),
    links: [
      ...(adv ? [{ from: 'r1', to: 'dsw', area: 'Trunk', color: '#00e5ff' }] : []),
      { from: 'dsw', to: 'sw2', area: 'Trunk', color: '#00e5ff' },
      { from: 'dsw', to: 'sw3', area: 'Trunk', color: '#00e5ff' },
      { from: 'sw2', to: 'pc1', area: 'VLAN 10', color: '#00e676' },
      { from: 'sw2', to: 'pc2', area: 'VLAN 10', color: '#00e676' },
      { from: 'sw3', to: 'pc3', area: 'VLAN 20', color: '#7c4dff' },
      { from: 'sw3', to: 'srv', area: 'VLAN 20', color: '#7c4dff' },
    ],
  }
}

function genNAT(difficulty: Difficulty): Topology {
  const inside = lan(0); const outside = wan()
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'cloud', type: 'cloud'    as DeviceType, label: 'Internet' },
    ...(adv ? [{ id: 'fw', type: 'firewall' as DeviceType, label: 'FW' }] : []),
    { id: 'r1',  type: 'router',   label: 'R1 (NAT)', ip: outside.h1 } as UnlaidDevice,
    { id: 'sw1', type: 'switchL2', label: 'SW-1' } as UnlaidDevice,
    { id: 'pc1', type: 'pc',       label: 'PC-1', ip: inside.h(10) } as UnlaidDevice,
    { id: 'pc2', type: 'pc',       label: 'PC-2', ip: inside.h(11) } as UnlaidDevice,
    ...(adv
      ? [{ id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', ip: inside.h(12) }]
      : [{ id: 'srv', type: 'server' as DeviceType, label: 'SRV', ip: inside.h(50) }]
    ),
  ]

  return {
    id: crypto.randomUUID(), scenario: 'NAT Overload (PAT)', protocol: 'NAT', difficulty,
    domain: 'IP Services',
    objective: `NAT Overload (PAT) på R1. Inside (${inside.net}) NATas till outside-interface (${outside.h1}).`,
    tasks: [
      'ip nat inside på G0/0 (inre interface)',
      'ip nat outside på G0/1 (yttre interface)',
      `ACL för inside: permit ${inside.net}`,
      'ip nat inside source list ACL interface G0/1 overload',
      'Verifiera: show ip nat translations',
    ],
    devices: layout(devs),
    links: [
      { from: 'cloud', to: adv ? 'fw' : 'r1', area: 'Outside', color: '#6888aa' },
      ...(adv ? [{ from: 'fw', to: 'r1' }] : []),
      { from: 'r1', to: 'sw1', area: 'Inside', color: '#00e676' },
      { from: 'sw1', to: 'pc1' }, { from: 'sw1', to: 'pc2' },
      { from: 'sw1', to: adv ? 'pc3' : 'srv' },
    ],
  }
}

function genACL(difficulty: Difficulty): Topology {
  const w = wan(); const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'r1',  type: 'router',   label: 'R1', ip: w.h1 } as UnlaidDevice,
    { id: 'r2',  type: 'router',   label: 'R2 (ACL)', ip: w.h2 } as UnlaidDevice,
    { id: 'sw1', type: 'switchL2', label: 'SW-1' } as UnlaidDevice,
    { id: 'sw2', type: 'switchL2', label: 'SW-2' } as UnlaidDevice,
    { id: 'pc1', type: 'pc',       label: 'PC-1', ip: l1.h(10) } as UnlaidDevice,
    { id: 'pc2', type: 'pc',       label: 'PC-2 (Block)', ip: l1.h(11) } as UnlaidDevice,
    { id: 'srv', type: 'server',   label: 'SRV', ip: l2.h(50) } as UnlaidDevice,
    ...(adv ? [{ id: 'pc3', type: 'pc' as DeviceType, label: 'PC-3', ip: l2.h(20) }] : []),
  ]

  return {
    id: crypto.randomUUID(), scenario: 'Extended ACL', protocol: 'ACLs', difficulty,
    domain: 'Security Fundamentals',
    objective: `Extended ACL på R2 blockerar PC-2 (${l1.h(11)}) → SRV (${l2.h(50)}). Övrig trafik tillåts.`,
    tasks: [
      'Skapa Extended ACL 100 på R2',
      `deny ip host ${l1.h(11)} host ${l2.h(50)}`,
      'permit ip any any',
      'Applicera ACL inbound på R2 G0/0',
      `Verifiera: PC-1 kan pinga SRV — PC-2 kan INTE`,
    ],
    devices: layout(devs),
    links: [
      { from: 'r1', to: 'r2', networkLabel: w.net },
      { from: 'r1', to: 'sw1' }, { from: 'r2', to: 'sw2' },
      { from: 'sw1', to: 'pc1' },
      { from: 'sw1', to: 'pc2', area: 'DENY', color: '#ff4c6a' },
      { from: 'sw2', to: 'srv' },
      ...(adv ? [{ from: 'sw2', to: 'pc3' }] : []),
    ],
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
