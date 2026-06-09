# Handoff: Topologi-generator (Sida 2 av NetForge)

> **Komplement till `README.md`** — denna fil beskriver topologi-generator-sidan i detalj. Designsystem (färger, typografi, spacing) ärvs från huvuddokumentet.

## Översikt
Topologi-generatorn låter användaren generera **slumpmässiga nätverkstopologier** att öva på, baserat på vilket protokoll/ämne hen behöver träna. Varje topologi har ett scenario (mål + steg-för-steg-uppgifter) och visas med **Cisco-stilade enhets-symboler**.

**Användningsflöde:**
1. Användaren väljer protokoll (t.ex. OSPF), storlek, svårighetsgrad
2. Klickar "GENERERA NY" → en topologi ritas upp med slumpmässiga IP-adresser och scenario
3. Användaren konfigurerar topologin i Packet Tracer / GNS3 (eller framtida inbyggd terminal)
4. Markerar uppgifter som klara, får poäng när labbet är godkänt

---

## Screenshots
Se `screenshots/`:
- `topology-generator-full.png` — hela sidan (1440×900)
- `cisco-symbols.png` — alla 8 enhets-symboler i detalj

---

## Cisco-symboler (SVG-komponenter)

Alla symboler är ritade som SVG-komponenter i `design_files/cisco-icons.jsx`. De följer **klassisk Cisco-iconografi** men är stylade i Cyber Tech-paletten.

| Symbol | Komponent | Beskrivning | Färg |
|---|---|---|---|
| 🔵 Router | `<CiscoRouter>` | Cylinder/puck med 4 arrows (2 in, 2 ut) | `#06d6a0` (cyan) |
| 🟦 L3 Switch | `<CiscoSwitchL3>` | Box med horisontella + vertikala arrows + "L3"-badge | `#06d6a0` |
| 🟪 L2 Switch | `<CiscoSwitchL2>` | Box med 4 parallella arrows (alla samma riktning) | `#8b5cf6` (lila) |
| 🟥 Firewall | `<CiscoFirewall>` | Brick-wall pattern | `#f87171` (röd) |
| 🟪 Server | `<CiscoServer>` | Tall rack med slot-rader + LED | `#8b5cf6` |
| ⚪ PC / Host | `<CiscoPC>` | Monitor med stand | `#7a8ba3` (text) |
| ☁️ Cloud | `<CiscoCloud>` | Internet/ISP-moln | `#7a8ba3` |
| 🟡 Access Point | `<CiscoAP>` | Dome med signal-vågor | `#facc15` (gul) |

### Skillnaden mellan L2 och L3 Switch (viktigt!)
- **L2 Switch** = `<CiscoSwitchL2>` — alla arrows pekar horisontellt (parallella) → ren switching, ingen routing
- **L3 Switch / Multilayer** = `<CiscoSwitchL3>` — mixed arrows (horisontella + vertikala) + "L3"-badge → kan routa mellan VLANs

### Användning
```jsx
import { CiscoRouter, CiscoSwitchL3, CiscoSwitchL2, CiscoPC, CiscoServer, CiscoFirewall, CiscoCloud, CiscoAP } from './cisco-icons';

// Standard storlek 56-64px
<CiscoRouter size={64} label="R1" />
<CiscoSwitchL3 size={60} label="DSW-1" color="#06d6a0" />
<CiscoSwitchL2 size={60} label="ASW-1" />
<CiscoPC size={44} label="PC-A" />
```

**Props:** `size` (px), `color` (hex), `label` (text under enheten).

---

## Sidlayout (1440×900)

```
┌──────┬───────────┬─────────────────────────────────────┬───────────┐
│  56  │   240     │    Topology Canvas (flex)           │   280     │
│ Nav  │ Generator │                                     │  Sidebar  │
│      │  Config   │  ┌─────────────────────────────┐    │  (Tasks)  │
│      │           │  │   SVG Topology              │    │           │
│      │ Protokoll │  │   ┌─Cloud  ┐                │    │   Mål     │
│      │ Storlek   │  │   │ Firewall                │    │           │
│      │ Svårighet │  │   │ R1──R3──R2              │    │  Uppgifter│
│      │ Enheter   │  │   │  │      │               │    │  1, 2, 3..│
│      │           │  │   │  DSW-1  ASW-1           │    │           │
│      │ GENERERA  │  │   │  │      │               │    │  Symbol-  │
│      │ Exportera │  │   │ PC-A/B  PC-C/Server     │    │  legend   │
│      │           │  │   └─────────────────────────┘    │           │
└──────┴───────────┴─────────────────────────────────────┴───────────┘
```

### 1. Vänster sidonav (56px) — ikon-rail
Samma som dashboard — `◆ ◈ ◉ ✕ ▦ ▶` med "◈" (topologi) som aktiv.

### 2. Generator-config panel (240px)
**Sektioner uppifrån och ner:**

#### Header
```
Generator                    ← 14px / 700 / vit
Konfigurera & generera labb  ← 10px / muted
```

#### Protokoll / Ämne (chips)
6 chips i flex-wrap layout, en aktiv (cyan border + cyan glow background):
- OSPF ← aktiv
- EIGRP, STP, VLANs, ACLs, NAT

```css
chip { padding: 6px 10px; border-radius: 4px; font-size: 10px; }
chip.active { border: 1px solid #06d6a0; background: rgba(6,214,160,0.06); color: #06d6a0; }
chip { border: 1px solid #1a2640; color: #cdd9e5; }
```

#### Storlek (select dropdown)
```
< Medium (5-7) ▾ >
```
Options: Small (2-3) / Medium (5-7) / Large (8+)

#### Svårighetsgrad (3 chips i rad, flex 1)
`Lätt | Medel | Svår` — Medel aktiv

#### Inkludera enheter (checkboxar)
Lista med 7 checkboxes — varje rad har en färgad check-box:
```
[✓] Router        (cyan check)
[✓] L3 Switch     (cyan)
[✓] L2 Switch     (lila)
[✓] Firewall      (röd)
[✓] Server        (lila)
[✓] PC / Host     (text-grå)
[ ] Access Point  (gul, av-bockad)
```

Checkbox-stil:
```css
box { width: 14px; height: 14px; border-radius: 3px; border: 1px solid <färg>; background: rgba(<färg>, 0.2); }
```

#### Bottom buttons
- **GENERERA NY** — primary button: `background: #06d6a0; color: #080f1a; box-shadow: 0 0 14px rgba(6,214,160,0.55);`
- **↓ Exportera .pkt** — secondary: `border: 1px solid #1a2640; background: transparent`

---

### 3. Huvudkanvas (flex: 1)

#### Header (28px padding-top, padding 20-24)
```
Topologi-generator                                  [📋 Kopiera konfig] [📜 Visa lösning] [▶ STARTA LABB]
Scenario · OSPF Multi-Area · Medel · IP Connectivity
```
- Title: 22px / 700 / `Space Grotesk` / `#e8edf2`
- Subtitle: 11px / `#7a8ba3`
- Knappar höger: 2 sekundära + 1 primär

#### Canvas
- Bakgrund: grid `linear-gradient(#1a2640 1px, transparent 1px), linear-gradient(90deg, #1a2640 1px, transparent 1px)` med `background-size: 24px 24px`
- Border-radius: 10px, border: `1px solid #1a2640`
- Position: relative för att floating-element ska kunna positioneras absolut

**Top toolbar (absolute, top: 12px):**
- Vänster badge: `◈ TOPOLOGY · 11 ENHETER · 10 LÄNKAR` (cyan text)
- Höger badge: `⊞ Snap   ⊕ Zoom   100%` (text-färg, 100% i cyan)
- Båda har `background: rgba(8,15,26,0.8); border: 1px solid #1a2640; padding: 4px 10px;`

**SVG topology (viewBox 720×420):**
- Devices positioneras med absolute (x, y) koordinater
- Länkar ritas som `<line>` mellan device-positioner
- Färg på länk:
  - OSPF Area 0 → `#06d6a0` cyan
  - OSPF Area 10 → `#8b5cf6` lila
  - Standard → `#7a8ba3` opacity 0.4
- Network-labels (t.ex. `10.0.13.0/30`) renderas som små badges mitt på länken
- IP-adresser ovanför varje device i cyan

**Bottom legend (absolute, bottom: 12px, left: 12px):**
```
OSPF Areas:  ━━ Area 0 (cyan)     ━━ Area 10 (lila)
```

---

### 4. Höger sidopanel (280px)

#### Mål-kort
Kortrubrik: `MÅL` (10px / cyan / uppercase)
Brödtext: Scenario-beskrivning på 11px / `#cdd9e5`

#### Uppgifter-kort (flex: 1, scrollable)
Lista med numrerade uppgifter — den första är aktiv (cyan vänstermarkering + cyan numer-bubble):

```
┌────────────────────────────────────┐
│ ● 1  Konfigurera IP-adresser...    │ ← aktiv (cyan)
├────────────────────────────────────┤
│ ○ 2  Aktivera OSPF process 1...    │
├────────────────────────────────────┤
│ ○ 3  Lägg R1 & R2 i Area 0...      │
└────────────────────────────────────┘
```

Varje rad: `background: #111b2e; border-radius: 6px; border-left: 2px solid <färg>; padding: 8px 10px`
Bubble: 18×18px cirkel, aktiv = fylld cyan, inaktiv = bara border.

#### Symbol-legend (4 symboler i 2×2 grid)
Visa Cisco-symboler med namn i sidopanelen så användaren kan kolla vad varje symbol betyder.

---

## Data-modell

```typescript
interface Scenario {
  id: string
  name: string                  // t.ex. "OSPF Multi-Area"
  protocol: 'OSPF' | 'EIGRP' | 'STP' | 'VLANs' | 'ACLs' | 'NAT'
  difficulty: 'Lätt' | 'Medel' | 'Svår'
  domain: string                // CCNA-domän
  objective: string             // Mål-text
  tasks: string[]               // Lista av uppgifter
  devices: Device[]
  links: Link[]
}

interface Device {
  id: string                    // 'r1', 'sw1' etc.
  type: 'router' | 'switchL2' | 'switchL3' | 'pc' | 'server' | 'firewall' | 'cloud' | 'ap'
  label: string                 // 'R1', 'DSW-1' etc.
  x: number                     // canvas-position (SVG viewBox 720×420)
  y: number
  ip?: string                   // primär IP att visa
  config?: string               // Cisco IOS-konfiguration (för "Visa lösning")
}

interface Link {
  from: string                  // device id
  to: string                    // device id
  networkLabel?: string         // t.ex. "10.0.13.0/30"
  area?: string                 // "Area 0" / "Area 10" (OSPF)
  vlan?: number                 // VLAN-nummer (för VLAN-scenarier)
}
```

---

## Generator-logik (algoritm)

När användaren klickar "GENERERA NY":

1. **Välj scenario-template** baserat på vald protokoll + svårighetsgrad
2. **Slumpa enhetsantal** baserat på storlek
3. **Slumpa IP-subnät:**
   - Privata 10.x.x.x / 192.168.x.x / 172.16.x.x för LAN
   - Random /30 för WAN-länkar mellan routrar
4. **Placera enheter** i grid-layout (router-rad → switch-rad → host-rad)
5. **Generera länkar** enligt scenario-mönster:
   - OSPF: routrar i ring/mesh + switches och hosts
   - VLAN: en L3-switch som router-on-a-stick + L2-switches + hosts i olika VLANs
   - STP: 3+ switches kopplade i loop
6. **Generera uppgifter** från template med substituerade värden (IPs, VLAN-IDs etc.)
7. **Spara i state + localStorage** så användaren kan komma tillbaka till samma topologi

### Förslag på topologi-templates att implementera:

| Protokoll | Template-namn | Enheter |
|---|---|---|
| OSPF | Single-Area | 3 routrar i Area 0 |
| OSPF | Multi-Area | 3 routrar i 2 areas + L3-switch + L2 + PCs |
| EIGRP | Basic | 4 routrar med EIGRP AS 100 |
| STP | Loop Detection | 3 L2-switches kopplade i loop |
| VLANs | Router-on-a-stick | 1 router + 1 L2-switch + 4 PCs i olika VLANs |
| VLANs | Inter-VLAN Routing | 1 L3-switch + 2 L2-switches + 6 PCs |
| ACLs | Standard ACL | 2 routrar + 2 nät, blockera ett subnät |
| NAT | Static NAT | 1 router + ISP-cloud + intern host + extern server |

---

## Interaktioner

| Element | Trigger | Beteende |
|---|---|---|
| Generera-knapp | click | Slumpa ny topologi, fade-in animation 400ms |
| Protokoll-chip | click | Markera som aktiv, ändrar template-pool |
| Device på canvas | click | Visa popup med konfig-snippet för den enheten |
| Device på canvas | hover | Glow-effekt, visa tooltip med detaljer |
| Länk på canvas | hover | Visa nätverks-info + interface-namn |
| Uppgift i listan | click | Markera som klar, gå till nästa |
| Visa lösning | click | Modal med full Cisco IOS-konfig per device |
| Kopiera konfig | click | Kopiera all konfig till clipboard |
| Starta labb | click | Starta timer + navigera till labb-vy (eller exportera .pkt) |

---

## Tekniska detaljer

### Rendering
- **SVG** för topologin (skalbar, ger crisp ikoner i alla zoom-lägen)
- ViewBox `0 0 720 420` — devices positioneras inom detta koordinatsystem
- Sätt `width: 100%; height: 100%` på SVG så det skalar med container

### Animation av generering
```css
@keyframes deviceAppear {
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
}
.device { animation: deviceAppear 300ms ease-out backwards; }
.device:nth-child(n) { animation-delay: calc(n * 50ms); }
```

### Drag-and-drop (framtida)
För avancerad version: låt användaren själv lägga till och flytta enheter på canvasen med React Flow.

---

## Filer i denna handoff

| Fil | Beskrivning |
|---|---|
| `design_files/cisco-icons.jsx` | Alla 8 Cisco-symbolkomponenter (SVG) |
| `design_files/topology-generator.jsx` | Hela topologi-generator-sidan |
| `design_files/topology-test.html` | Standalone HTML att öppna i webbläsare för att se sidan |
| `design_files/cisco-symbols-preview.html` | Standalone HTML som visar alla symboler |
| `screenshots/topology-generator-full.png` | Hela sidan renderad (för referens i Claude Code) |
| `screenshots/cisco-symbols.png` | Alla symboler i detalj |

---

## Tips till Claude Code

1. **Bygg `<CiscoIcons>` som ett delat komponentbibliotek** — de används både i topologi-vyn, dashboard-mockups och i framtida labb-editor.
2. **Spara genererade topologier i localStorage** med en unik `id` så användaren kan komma tillbaka till samma topologi efter reload.
3. **För Cisco IOS-konfiguration:** generera config-stränger för varje device baserat på dess typ + position i topologin. Spara dessa så "Visa lösning" och "Kopiera konfig" fungerar.
4. **Lägg till keyboard shortcuts:** `G` för generera ny, `S` för starta labb, `?` för hjälp.
5. **Möjliga framtida features:**
   - Inbyggd Cisco IOS-emulator (terminal i appen där användaren kör `enable`, `configure terminal` etc.)
   - Quiz-läge: visa topologi, ställ fråga ("Vilken IP-adress har R1's interface mot R3?")
   - Export till riktig Packet Tracer .pkt-fil
