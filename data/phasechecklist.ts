export interface ChecklistItem {
  id: string;
  phase: number;
  text: string;
}

export const PHASE_CHECKLISTS: ChecklistItem[] = [
  // Fas 1 — Grunderna
  { id: "f1-cli",    phase: 1, text: "Öva Cisco IOS CLI — hostname, enable, configure terminal" },
  { id: "f1-ipv4",   phase: 1, text: "Konfigurera IPv4-adresser på router-interface (ip address + no shutdown)" },
  { id: "f1-static", phase: 1, text: "Statisk routing med ip route och default route (0.0.0.0/0)" },

  // Fas 2 — Switchning
  { id: "f2-vlan",   phase: 2, text: "Skapa VLAN och konfigurera access- och trunk-portar" },
  { id: "f2-stp",    phase: 2, text: "Identifiera root bridge, root ports och blocked port med show spanning-tree" },
  { id: "f2-ethch",  phase: 2, text: "EtherChannel med LACP (Active/Passive) — show etherchannel summary" },

  // Fas 3 — Routing
  { id: "f3-ospf",   phase: 3, text: "OSPF Single-Area — verifiera grannskap med show ip ospf neighbor" },
  { id: "f3-multi",  phase: 3, text: "OSPF Multi-Area med ABR — show ip route ospf på alla routrar" },
  { id: "f3-hsrp",   phase: 3, text: "HSRP aktiv/standby — verifiera virtual IP och failover" },

  // Fas 4 — Säkerhet & Automation
  { id: "f4-acl",    phase: 4, text: "Extended ACL — blockera specifik trafik och verifiera med show access-lists" },
  { id: "f4-nat",    phase: 4, text: "NAT Overload (PAT) med inside/outside — verifiera show ip nat translations" },
  { id: "f4-ssh",    phase: 4, text: "Konfigurera SSH (version 2, domain-name, crypto key generate rsa)" },
];
