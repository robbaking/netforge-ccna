# Topology v2 — Lab-katalog Design Spec

**Datum:** 2026-06-09  
**Status:** Godkänd för implementation

---

## Syfte

Ersätt den slumpmässiga topologi-generatorn med en kurerad lab-katalog baserad på
Jeremy's IT Lab 63-dagarskurs. Labs är fas-låsta (kan ej hoppa mellan faser),
har ett examens-inspirerat kort-UI, och återanvänder befintliga generators och
SVG-rendering utan att skriva om dem.

---

## Bakgrund

Nuvarande topologi-sida:
- Genererar slumpmässiga topologier per protokoll (OSPF/EIGRP/STP/VLANs/ACLs/NAT)
- Panelerna (Uppgifter/Facit/Hjälp) är oklara att navigera
- Ingen koppling till studievägens faser
- Ingen progression eller fas-låsning

Ny vision:
- Kurerad lab-katalog (Jeremy IT Lab Day-kopplad)
- Lab-kort UI inspirerat av examensuppgiftsformat
- Fas-låsning kopplad till quiz-progress i studievägen
- Bevarar befintliga generators och SVG-rendering

---

## Datamodell

### `data/labcatalog.ts` (ny)

```typescript
export interface LabEntry {
  id: string              // t.ex. "ospf-single-area"
  phase: 1 | 2 | 3 | 4
  jeremyDay: number       // referens till Jeremy's IT Lab Day
  title: string           // visas i lab-kortet
  protocol: Protocol      // matchar befintlig typ
  difficulty: Difficulty  // 'Lätt' | 'Medel' | 'Svår'
  domain: Domain
  description: string     // kort scenariobeskrivning (visas under SVG)
  tasksOverride?: string[] // om satt: ersätter generatorns tasks (används för Fas 1 static-routes)
}
```

Statisk katalog med 14 labs:

| id | Fas | Day | Titel | Protokoll | Svårighet |
|----|-----|-----|-------|-----------|-----------|
| static-routes-basic | 1 | 11 | Statisk Routing — Grundläggande | OSPF* | Lätt |
| static-routes-advanced | 1 | 11 | Statisk Routing — Felsökning | OSPF* | Medel |
| vlans-roas | 2 | 16-17 | VLANs — Router-on-a-Stick | VLANs | Lätt |
| vlans-l3switch | 2 | 18 | VLANs — L3-Switch (Inter-VLAN) | VLANs | Medel |
| stp-triangle | 2 | 20 | STP — Analysera Spanning Tree | STP | Lätt |
| stp-square | 2 | 21 | STP — Konfigurera Root Bridge | STP | Medel |
| rstp | 2 | 22 | Rapid STP (RSTP) | STP | Svår |
| ospf-single | 3 | 26 | OSPF Single-Area | OSPF | Lätt |
| ospf-multi | 3 | 27-28 | OSPF Multi-Area (ABR) | OSPF | Medel |
| eigrp-hub | 3 | 25 | EIGRP Hub-and-Spoke | EIGRP | Medel |
| acl-standard | 4 | 34 | Standard ACL | ACLs | Lätt |
| acl-extended | 4 | 35 | Extended ACL — Blockera trafik | ACLs | Medel |
| acl-extended-hard | 4 | 35 | Extended ACL — Multi-regel | ACLs | Svår |
| nat-overload | 4 | 44-45 | NAT Overload (PAT) | NAT | Medel |

*Fas 1 labs: `static-routes-basic/advanced` använder genOSPF_Chain('Lätt'/'Medel')
 men med statisk routing-inriktade tasks och scenario-text (protokoll-generatorn
 genererar topologin, tasks-texten är specifik för statisk routing).

### Generator-mappning

Befintliga generators i `lib/topology.ts` återanvänds via en lookup:

```typescript
// lib/topology.ts — ny export
export type GeneratorKey =
  | 'ospf-chain-latt' | 'ospf-chain-medel'
  | 'ospf-hubspoke-medel' | 'ospf-hubspoke-svar'
  | 'eigrp-medel'
  | 'stp-triangle-latt' | 'stp-square-medel' | 'stp-square-svar'
  | 'vlan-roas-latt' | 'vlan-l3-medel'
  | 'acl-latt' | 'acl-medel' | 'acl-svar'
  | 'nat-medel'

export function generateByKey(key: GeneratorKey): Topology { ... }
```

Fas 1-labs har egna task-texter definierade i `data/labcatalog.ts`
(scenario + tasks override), men generator-topologin (IP-adresser, enheter)
kommer från `genOSPF_Chain`.

### `lib/labprogress.ts` (ny)

localStorage-nyckel: `netforge_lab_progress`

```typescript
interface LabProgressStore {
  completed: string[]   // lab-id:n som markerats klara
}

export function getLabProgress(): LabProgressStore
export function markLabDone(labId: string): void      // XP via addXp(50)
export function isLabDone(labId: string): boolean
```

Första gången ett lab markeras klart: `addXp(50)`.  
Redan klara labs: ingen ytterligare XP (idempotent).

---

## Fas-låsning

Fas-progress hämtas från `lib/studypath.ts` (`phaseProgress`):

```
Fas 1: alltid öppen
Fas 2: öppen om Fas 1 pct >= 70 (quiz-score)
Fas 3: öppen om Fas 2 pct >= 70
Fas 4: öppen om Fas 3 pct >= 70
```

Lås-kontroll: `isPhaseUnlocked(phase, progress): boolean` — ny funktion i `lib/studypath.ts`.

Locked labs visas i listan men är klickbara — visar en lock-banner i lab-kortet:
> "🔒 Lås upp Fas X — Klara Fas [X-1] med minst 70% i quizet."

---

## Komponent-arkitektur

### Nya filer

```
components/topology/
  LabCatalog.tsx          Vänster panel: fas-flikar + lab-lista
  LabCard.tsx             Höger/center: lab-kort (SVG + uppgifter + facit)
```

### Ändrade filer

```
components/topology/TopologyPage.tsx   Ersätts med ny layout
lib/topology.ts                        + generateByKey() export
lib/studypath.ts                       + isPhaseUnlocked()
lib/labprogress.ts                     Ny fil
data/labcatalog.ts                     Ny fil
lib/types.ts                           Ingen ändring
lib/progress.ts                        Ingen ändring (addXp finns redan)
```

### Bevaras oförändrade

```
components/topology/TopoSvg.tsx        Ingen ändring
components/topology/CiscoIcons.tsx     Ingen ändring
components/topology/LabDocument.tsx    Ingen ändring (Lab-vy behålls som alternativ)
```

---

## Sidlayout (TopologyPage.tsx)

```
display: flex; height: 100%

┌── LabCatalog (260px, shrink: 0) ──┬── LabCard (flex: 1) ────────────────┐
│  [Fas 1] [Fas 2] [Fas 3] [Fas 4]  │  ┌─ Header ───────────────────────┐ │
│  ──────────────────────────────── │  │  Fas 2 · Day 16 · Network Access│ │
│  ✓ Statisk routing                │  │  VLANs — Router-on-a-Stick      │ │
│  ✓ Statisk routing (adv)          │  │  [Medel]                        │ │
│  ──────── Fas 2 ─────────         │  └─────────────────────────────────┘ │
│  → VLANs — RoaS              ←    │                                      │
│    VLANs — L3-Switch              │  SVG-topologi (zoom/pan)             │
│    STP Triangel                   │  ─────────────────────────────────── │
│    STP Kvadrat                    │  Scenariobeskrivning...               │
│    Rapid STP                      │  ─────────────────────────────────── │
│  ──────── Fas 3 🔒 ───────         │  Implementera följande:              │
│  [Låst — kräver Fas 2 ≥ 70%]     │  1. Skapa VLAN 10 och 20...          │
│                                   │  2. Konfigurera trunk...             │
└───────────────────────────────────│  3. Sub-interfaces G0/0.10...        │
                                    │  4. Verifiera: ping                  │
                                    │  ─────────────────────────────────── │
                                    │  [⟳ Generera ny subnät]              │
                                    │  [⎘ Kopiera uppgiftstext]            │
                                    │  [▾ Visa facit]   [✓ Lab klar]       │
                                    └──────────────────────────────────────┘
```

---

## LabCard — UI-detaljer

### Header
```
Kategori-chip (liten text): "Fas 2 · Day 16 · Network Access"
Titel (18px medium):        "VLANs — Router-on-a-Stick"
Badge (höger):              [Medel]   (färg: --cyan för Lätt, --purple för Medel, --red för Svår)
```

### Topologi-sektion
- `<TopoSvg>` med zoom/pan bevaras (identisk med nuvarande)
- Under SVG: "Figur 1. [description med subnät inlagda]"

### Uppgiftslista
```
Implementera följande:
1. Skapa VLAN 10 och VLAN 20 på alla switchar
2. ...
```
Numrerade `<li>` med `font-size: 14px`, `line-height: 1.7` (matchar inspiration).

### Knappar
- `[⎘ Kopiera uppgiftstext]` — kopierar scenario + uppgiftslista som plain text
- `[▾ Visa facit]` — expanderar FacitPanel (befintlig komponent lyfts ur TopologyPage)
- `[✓ Lab klar]` / `[✓ Klar!]` — markerar lab som done, visar grön bekräftelse

### Lock-banner (fas-låsta labs)
```
🔒  Den här labben är låst.
    Slutför Fas 2 med minst 70% i quizet för att låsa upp.
```

---

## Kopierings-funktion

`copyTask()` genererar plain text:

```
VLANs — Router-on-a-Stick (Fas 2 · Jeremy Day 16)

Nätverk: VLAN 10 = 192.168.X.0/24, VLAN 20 = 192.168.Y.0/24

Implementera följande:
1. Skapa VLAN 10 och VLAN 20 på alla switchar
2. Konfigurera trunk-port: SW-1 → R1
3. R1: sub-interfaces G0/0.10 (dot1Q 10) och G0/0.20 (dot1Q 20)
4. Access-portar: PC-1/PC-2 → VLAN 10, PC-3/SRV → VLAN 20
5. Verifiera: ping inter-VLAN PC-1 → PC-3
```

---

## XP-integration

`markLabDone(labId)` i `lib/labprogress.ts` anropar `addXp(50)` första gången.  
Redan klara labs: `addXp` anropas ej (idempotent check mot `completed`-array).

---

## Ej i scope för denna spec

- EtherChannel, HSRP, IPv6-labs (kräver nya generators → framtida session)
- Dashboard redesign, XP-kurva, Exam vs Quiz separation → egna specs
- Sekvensiell upplåsning inom fas (lab 1 → lab 2 → ...) — fas-låsning räcker för nu

---

## Typkontroll

`npx tsc --noEmit` ska passera utan fel efter implementation.
