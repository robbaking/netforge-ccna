import type { Difficulty, UnlaidDevice, TopoLink, Protocol } from './layout'
import type { Topology } from './layout'
import { r, wan, lan, layout } from './layout'
import { getDeviceConfig } from './config'

export const PROTOCOLS: Protocol[] = ['OSPF', 'EIGRP', 'STP', 'VLANs', 'ACLs', 'NAT']
export type GeneratorKey = `protocol-${Protocol}-${Difficulty}`

const GENERATOR_MAP = new Map<string, (difficulty: Difficulty) => Topology>([
  ['protocol-OSPF-Lätt', genOSPF],
  ['protocol-OSPF-Medel', genOSPF],
  ['protocol-OSPF-Svår', genOSPF],
  ['protocol-EIGRP-Lätt', genEIGRP],
  ['protocol-EIGRP-Medel', genEIGRP],
  ['protocol-EIGRP-Svår', genEIGRP],
  ['protocol-STP-Lätt', genSTP],
  ['protocol-STP-Medel', genSTP],
  ['protocol-STP-Svår', genSTP],
  ['protocol-VLANs-Lätt', genVLAN],
  ['protocol-VLANs-Medel', genVLAN],
  ['protocol-VLANs-Svår', genVLAN],
  ['protocol-NAT-Lätt', genNAT],
  ['protocol-NAT-Medel', genNAT],
  ['protocol-NAT-Svår', genNAT],
  ['protocol-ACLs-Lätt', genACL],
  ['protocol-ACLs-Medel', genACL],
  ['protocol-ACLs-Svår', genACL],
])

export function generateTopology(protocol: Protocol, difficulty: Difficulty): Topology {
  const key = `protocol-${protocol}-${difficulty}`
  return generateByKey(key)
}

export function generateByKey(key: string): Topology {
  const fn = GENERATOR_MAP.get(key)
  if (!fn) throw new Error(`Unknown generator key: ${key}`)
  const difficulty = key.split('-').pop() as Difficulty
  return fn(difficulty)
}

// ─── OSPF Variant A: Hub-Spoke ────────────────────────────────────────────────

export function genOSPF_HubSpoke(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [
      { id: 'cloud', type: 'cloud'    as const, label: 'ISP' },
      { id: 'fw',    type: 'firewall' as const, label: 'FW-1' },
    ] : []),
    { id: 'r3', type: 'router' as const, label: 'R3', ip: w01.h1, lanIp: undefined },
    { id: 'r1', type: 'router' as const, label: 'R1', ip: w01.h2, lanIp: l1.h(1) },
    { id: 'r2', type: 'router' as const, label: 'R2', ip: w02.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2' },
    { id: 'pc1', type: 'pc'      as const, label: 'PC-A', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'      as const, label: 'PC-B', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'      as const, label: 'PC-C', ip: l2.h(10) },
    { id: 'srv', type: 'server'  as const, label: 'SRV-1', ip: l2.h(50) },
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

export function genOSPF_Chain(difficulty: Difficulty): Topology {
  const w12 = wan(); const w23 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'cloud', type: 'cloud' as const, label: 'ISP' }] : []),
    { id: 'r1', type: 'router' as const, label: 'R1', ip: w12.h1, lanIp: l1.h(1) },
    { id: 'r2', type: 'router' as const, label: 'R2', ip: w12.h2 },
    { id: 'r3', type: 'router' as const, label: 'R3', ip: w23.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2' },
    { id: 'pc1', type: 'pc'     as const, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'     as const, label: 'PC-2', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'     as const, label: 'PC-3', ip: l2.h(10) },
    { id: 'srv', type: 'server' as const, label: 'SRV-1', ip: l2.h(50) },
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

export function genOSPF(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genOSPF_HubSpoke(difficulty) : genOSPF_Chain(difficulty)
}

// ─── EIGRP ───────────────────────────────────────────────────────────────────

export function genEIGRP(difficulty: Difficulty): Topology {
  const w01 = wan(); const w02 = wan()
  const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty === 'Svår'
  const numSpokes = difficulty === 'Lätt' ? 2 : r(2, 3)

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'cloud', type: 'cloud' as const, label: 'ISP' }] : []),
    { id: 'r1', type: 'router' as const, label: 'R1 (Hub)', ip: w01.h1 },
    { id: 'r2', type: 'router' as const, label: 'R2', ip: w01.h2, lanIp: l1.h(1) },
    { id: 'r3', type: 'router' as const, label: 'R3', ip: w02.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2' },
    { id: 'pc1', type: 'pc'      as const, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'      as const, label: 'PC-2', ip: l1.h(11) },
    { id: 'pc3', type: 'pc'      as const, label: 'PC-3', ip: l2.h(10) },
    { id: 'srv', type: 'server'  as const, label: 'SRV', ip: l2.h(50) },
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

export function genSTP_Triangle(difficulty: Difficulty): Topology {
  const l = lan(0)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1 (Root)', tier: 0 },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2', tier: 1 },
    { id: 'sw3', type: 'switchL2' as const, label: 'SW-3', tier: 1 },
    ...(adv ? [{ id: 'sw4', type: 'switchL2' as const, label: 'SW-4', tier: 2 }] : []),
    { id: 'pc1', type: 'pc' as const, label: 'PC-1', tier: adv ? 3 : 2, ip: l.h(10) },
    { id: 'pc2', type: 'pc' as const, label: 'PC-2', tier: adv ? 3 : 2, ip: l.h(11) },
    { id: 'pc3', type: 'pc' as const, label: 'PC-3', tier: adv ? 3 : 2, ip: l.h(20) },
    { id: 'pc4', type: 'pc' as const, label: 'PC-4', tier: adv ? 3 : 2, ip: l.h(21) },
  ]

  const links: TopoLink[] = [
    { from: 'sw1', to: 'sw2', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw1', to: 'sw3', area: 'Root Port', color: '#00e5ff' },
    { from: 'sw2', to: 'sw3', area: 'Blocked',   color: '#ff4c6a' },
    ...(adv ?
      [
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

export function genSTP_Square(difficulty: Difficulty): Topology {
  const l = lan(0)

  const devs: UnlaidDevice[] = [
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1 (Root)', tier: 0 },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2', tier: 1 },
    { id: 'sw3', type: 'switchL2' as const, label: 'SW-3', tier: 1 },
    { id: 'sw4', type: 'switchL2' as const, label: 'SW-4', tier: 2 },
    { id: 'pc1', type: 'pc' as const, label: 'PC-1', tier: 3, ip: l.h(10) },
    { id: 'pc2', type: 'pc' as const, label: 'PC-2', tier: 3, ip: l.h(11) },
    { id: 'pc3', type: 'pc' as const, label: 'PC-3', tier: 3, ip: l.h(20) },
    { id: 'pc4', type: 'pc' as const, label: 'PC-4', tier: 3, ip: l.h(21) },
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

export function genSTP(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genSTP_Triangle(difficulty) : genSTP_Square(difficulty)
}

// ─── VLAN Variant A: L3-Switch central ────────────────────────────────────────

export function genVLAN_L3Switch(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    ...(adv ? [{ id: 'r1', type: 'router' as const, label: 'R1', ip: v10.h(1), lanIp: v20.h(1) }] : []),
    { id: 'dsw', type: 'switchL3' as const, label: 'DSW-1', ip: v10.h(1), lanIp: v20.h(1) },
    { id: 'sw2', type: 'switchL2' as const, label: 'ASW-1' },
    { id: 'sw3', type: 'switchL2' as const, label: 'ASW-2' },
    { id: 'pc1', type: 'pc'       as const, label: 'PC-1 (V10)', ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as const, label: 'PC-2 (V10)', ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as const, label: 'PC-3 (V20)', ip: v20.h(10) },
    { id: 'srv', type: 'server'   as const, label: 'SRV (V20)',  ip: v20.h(50) },
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

// ─── VLAN Variant 0: Basic switch only (access ports, no router) ─────────────

export function genVLAN_BasicSwitch(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)

  const devs: UnlaidDevice[] = [
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1', tier: 1 },
    { id: 'pc1', type: 'pc'       as const, label: 'PC-1 (V10)', tier: 2, ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as const, label: 'PC-2 (V10)', tier: 2, ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as const, label: 'PC-3 (V20)', tier: 2, ip: v20.h(10) },
    { id: 'pc4', type: 'pc'       as const, label: 'PC-4 (V20)', tier: 2, ip: v20.h(11) },
  ]

  const links: TopoLink[] = [
    { from: 'sw1', to: 'pc1', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw1', to: 'pc2', area: 'VLAN 10', color: '#00e676' },
    { from: 'sw1', to: 'pc3', area: 'VLAN 20', color: '#7c4dff' },
    { from: 'sw1', to: 'pc4', area: 'VLAN 20', color: '#7c4dff' },
  ]

  return {
    id: crypto.randomUUID(), scenario: 'VLAN Grundkonfiguration',
    protocol: 'VLANs', difficulty, domain: 'Network Access',
    objective: `Skapa VLAN 10 (${v10.net}) och VLAN 20 (${v20.net}) på SW-1. Tilldela access-portar.`,
    tasks: [
      'Skapa VLAN 10 (name SALES) och VLAN 20 (name HR) i switch-databasen',
      'Tilldela Fa0/1–Fa0/2 till VLAN 10 och Fa0/3–Fa0/4 till VLAN 20',
      'Aktivera PortFast på access-portarna',
      'Verifiera: show vlan brief och show interfaces switchport',
    ],
    devices: layout(devs, links), links,
  }
}

// ─── VLAN Variant B: Router-on-a-Stick ────────────────────────────────────────

export function genVLAN_RouterOnAStick(difficulty: Difficulty): Topology {
  const v10 = lan(0); const v20 = lan(1)

  const devs: UnlaidDevice[] = [
    { id: 'r1',  type: 'router'   as const, label: 'R1', ip: v10.h(1), lanIp: v20.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1 (Trunk)' },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2' },
    { id: 'sw3', type: 'switchL2' as const, label: 'SW-3' },
    { id: 'pc1', type: 'pc'       as const, label: 'PC-1 (V10)', ip: v10.h(10) },
    { id: 'pc2', type: 'pc'       as const, label: 'PC-2 (V10)', ip: v10.h(11) },
    { id: 'pc3', type: 'pc'       as const, label: 'PC-3 (V20)', ip: v20.h(10) },
    { id: 'srv', type: 'server'   as const, label: 'SRV (V20)',  ip: v20.h(50) },
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

export function genVLAN(difficulty: Difficulty): Topology {
  return r(0, 1) === 0 ? genVLAN_L3Switch(difficulty) : genVLAN_RouterOnAStick(difficulty)
}

// ─── NAT ─────────────────────────────────────────────────────────────────────

export function genNAT(difficulty: Difficulty): Topology {
  const inside = lan(0); const outside = wan()
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'cloud', type: 'cloud'    as const, label: 'Internet' },
    ...(adv ? [{ id: 'fw', type: 'firewall' as const, label: 'FW' }] : []),
    { id: 'r1',  type: 'router'   as const, label: 'R1 (NAT)', ip: outside.h1, lanIp: inside.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1' },
    { id: 'pc1', type: 'pc'       as const, label: 'PC-1', ip: inside.h(10) },
    { id: 'pc2', type: 'pc'       as const, label: 'PC-2', ip: inside.h(11) },
    ...(adv
      ? [{ id: 'pc3', type: 'pc' as const, label: 'PC-3', ip: inside.h(12) }]
      : [{ id: 'srv', type: 'server' as const, label: 'SRV', ip: inside.h(50) }]
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

export function genACL(difficulty: Difficulty): Topology {
  const w = wan(); const l1 = lan(0); const l2 = lan(1)
  const adv = difficulty !== 'Lätt'

  const devs: UnlaidDevice[] = [
    { id: 'r1',  type: 'router'   as const, label: 'R1', ip: w.h1, lanIp: l1.h(1) },
    { id: 'r2',  type: 'router'   as const, label: 'R2 (ACL)', ip: w.h2, lanIp: l2.h(1) },
    { id: 'sw1', type: 'switchL2' as const, label: 'SW-1' },
    { id: 'sw2', type: 'switchL2' as const, label: 'SW-2' },
    { id: 'pc1', type: 'pc'       as const, label: 'PC-1', ip: l1.h(10) },
    { id: 'pc2', type: 'pc'       as const, label: 'PC-2 (Block)', ip: l1.h(11) },
    { id: 'srv', type: 'server'   as const, label: 'SRV', ip: l2.h(50) },
    ...(adv ? [{ id: 'pc3', type: 'pc' as const, label: 'PC-3', ip: l2.h(20) }] : []),
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
