import type { Protocol, Difficulty, GeneratorKey } from "@/lib/topology";
import type { Domain } from "@/lib/types";

export interface LabEntry {
  id: string;
  phase: 1 | 2 | 3 | 4;
  jeremyDay: number | string;
  title: string;
  protocol: Protocol;
  difficulty: Difficulty;
  domain: Domain;
  description: string;
  generatorKey: GeneratorKey;
  tasksOverride?: string[];
}

export const LAB_CATALOG: LabEntry[] = [
  // ── Fas 1 — Grunderna (Jeremy Day 11) ──────────────────────────────────────
  {
    id: "static-routes-basic",
    phase: 1,
    jeremyDay: 11,
    title: "Statisk Routing — Grundläggande",
    protocol: "OSPF",
    difficulty: "Lätt",
    domain: "ip-connectivity",
    description:
      "Konfigurera statisk routing för att koppla ihop två LAN via en kedja av routrar. Inga dynamiska routingprotokoll — varje nätverk anges manuellt.",
    generatorKey: "ospf-chain-latt",
    tasksOverride: [
      "Konfigurera IP-adresser på alla router-interface (ip address + no shutdown)",
      "Lägg till statiska routes: ip route <destination> <mask> <next-hop>",
      "Konfigurera default route (0.0.0.0 0.0.0.0 <next-hop>) mot internet",
      "Verifiera routingtabellen: show ip route",
      "Testa konnektion: ping PC-1 → SRV-1",
    ],
  },
  {
    id: "static-routes-advanced",
    phase: 1,
    jeremyDay: 11,
    title: "Statisk Routing — Felsökning",
    protocol: "OSPF",
    difficulty: "Medel",
    domain: "ip-connectivity",
    description:
      "Statisk routing med floating static routes som backup. Öva felsökning när en länk går ner.",
    generatorKey: "ospf-chain-medel",
    tasksOverride: [
      "Konfigurera primär statisk route (administrative distance 1)",
      "Lägg till floating static route (AD 5) som backup-path",
      "Felsök: kontrollera att alla interface är upp med show ip interface brief",
      "Verifiera routingtabellen: show ip route — kontrollera AD och metric",
      "Simulera failover: no shutdown / shutdown på ett interface och verifiera backup-routen",
    ],
  },

  // ── Fas 2 — Switchning (Jeremy Day 16–22) ──────────────────────────────────
  {
    id: "vlans-roas",
    phase: 2,
    jeremyDay: "16–17",
    title: "VLANs — Router-on-a-Stick",
    protocol: "VLANs",
    difficulty: "Lätt",
    domain: "network-access",
    description:
      "Inter-VLAN routing via sub-interfaces (dot1Q encapsulation) på R1. VLAN 10 och VLAN 20 routas av en router kopplad till en trunk-port.",
    generatorKey: "vlan-roas-latt",
  },
  {
    id: "vlans-l3switch",
    phase: 2,
    jeremyDay: 18,
    title: "VLANs — L3-Switch Inter-VLAN",
    protocol: "VLANs",
    difficulty: "Medel",
    domain: "network-access",
    description:
      "Inter-VLAN routing med L3-switch och SVIs (Switched Virtual Interfaces). Mer skalbar lösning än Router-on-a-Stick — används i moderna nätverk.",
    generatorKey: "vlan-l3-medel",
  },
  {
    id: "stp-triangle",
    phase: 2,
    jeremyDay: 20,
    title: "STP — Analysera Spanning Tree",
    protocol: "STP",
    difficulty: "Lätt",
    domain: "network-access",
    description:
      "Analysera Spanning Tree Protocol i en triangeltopologi. Identifiera root bridge, root ports och blocked port för att förhindra loop.",
    generatorKey: "stp-triangle-latt",
  },
  {
    id: "stp-square",
    phase: 2,
    jeremyDay: 21,
    title: "STP — Konfigurera Root Bridge",
    protocol: "STP",
    difficulty: "Medel",
    domain: "network-access",
    description:
      "Konfigurera önskad root bridge med spanning-tree priority. Analysera STP-konvergering i en kvadrattopologi med fyra switchar.",
    generatorKey: "stp-square-medel",
  },
  {
    id: "rstp",
    phase: 2,
    jeremyDay: 22,
    title: "Rapid STP (RSTP)",
    protocol: "STP",
    difficulty: "Svår",
    domain: "network-access",
    description:
      "Rapid Spanning Tree Protocol — snabbare konvergering än klassisk STP. Identifiera portroller (Root, Designated, Alternate, Backup) och portlägen (Discarding, Learning, Forwarding).",
    generatorKey: "stp-square-svar",
  },

  // ── Fas 3 — Routing (Jeremy Day 25–28) ─────────────────────────────────────
  {
    id: "ospf-single",
    phase: 3,
    jeremyDay: 26,
    title: "OSPF Single-Area",
    protocol: "OSPF",
    difficulty: "Lätt",
    domain: "ip-connectivity",
    description:
      "OSPF process 1 med alla routrar i Area 0. Verifiera grannskap med show ip ospf neighbor och kontrollera att alla nät annonseras korrekt.",
    generatorKey: "ospf-chain-latt",
  },
  {
    id: "ospf-multi",
    phase: 3,
    jeremyDay: "27–28",
    title: "OSPF Multi-Area (ABR)",
    protocol: "OSPF",
    difficulty: "Medel",
    domain: "ip-connectivity",
    description:
      "OSPF Multi-Area med Area 0 (backbone) och Area 1. ABR-routern kopplar de två områdena och redistribuerar inter-area LSAer.",
    generatorKey: "ospf-hubspoke-medel",
  },
  {
    id: "eigrp-hub",
    phase: 3,
    jeremyDay: 25,
    title: "EIGRP Hub-and-Spoke",
    protocol: "EIGRP",
    difficulty: "Medel",
    domain: "ip-connectivity",
    description:
      "EIGRP AS 100 i hub-and-spoke topologi. R1 är hub och annonserar nät till spoke-routrarna. Verifiera grannskap och EIGRP-routes.",
    generatorKey: "eigrp-medel",
  },

  // ── Fas 4 — Säkerhet & Automation (Jeremy Day 34–45) ───────────────────────
  {
    id: "acl-standard",
    phase: 4,
    jeremyDay: 34,
    title: "Standard ACL",
    protocol: "ACLs",
    difficulty: "Lätt",
    domain: "security-fundamentals",
    description:
      "Standard ACL filtrerar trafik baserat på source-IP. Appliceras nära destinationen. Enkel att konfigurera men erbjuder begränsad kontroll.",
    generatorKey: "acl-latt",
  },
  {
    id: "acl-extended",
    phase: 4,
    jeremyDay: 35,
    title: "Extended ACL — Blockera trafik",
    protocol: "ACLs",
    difficulty: "Medel",
    domain: "security-fundamentals",
    description:
      "Extended ACL matchar på source-IP, destination-IP och protokoll. Appliceras nära källan för effektivare filtrering.",
    generatorKey: "acl-medel",
  },
  {
    id: "acl-extended-hard",
    phase: 4,
    jeremyDay: 35,
    title: "Extended ACL — Multi-regel",
    protocol: "ACLs",
    difficulty: "Svår",
    domain: "security-fundamentals",
    description:
      "Komplex ACL-policy med flera permit/deny-regler för specifika hosts och subnät. Ordningen på reglerna är avgörande.",
    generatorKey: "acl-svar",
  },
  {
    id: "nat-overload",
    phase: 4,
    jeremyDay: "44–45",
    title: "NAT Overload (PAT)",
    protocol: "NAT",
    difficulty: "Medel",
    domain: "ip-services",
    description:
      "NAT Overload (Port Address Translation) delar en publik IP-adress bland alla inside-enheter. Används i hemmanätverk och företag.",
    generatorKey: "nat-medel",
  },
];
