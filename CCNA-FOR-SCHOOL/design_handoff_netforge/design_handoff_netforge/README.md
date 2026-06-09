# NetForge — Design Handoff för Claude Code

## Översikt
**NetForge** är en CCNA 200-301 studieapp med terminal/hacker-estetik. Användaren tränar på nätverkskonfiguration via topologi-labbar, quizzes, felanalys och en subnetting-kalkylator. Appen är byggd i **dark mode** med monospace-typografi genom hela UI:t.

> **OBS:** Filerna i `design_files/` är **HTML-designreferenser** — prototyper som visar hur det ska se ut och bete sig. Uppgiften är att **återskapa dessa designs i ditt projekt** med valfritt framework (t.ex. React + Next.js, Vue, SvelteKit) och med riktiga API-anrop och databas-logik. Kopiera inte HTML-filerna rakt av.

## Fidelitetsnivå
**Hög fidelitet (hi-fi)** — Pixel-exakta mockups med slutgiltiga färger, typografi, spacing och interaktioner. Återskapa UI:t noggrant med exakta värden från denna spec.

---

## Designsystem — Cyber Blue (primär)

### Färgpaletten
```
Bakgrund:        #060a14   (bg)
Yta / kort:      #0c1222   (surface)
Förhöjd yta:     #111a30   (surfaceHi)
Kant:            #162040   (border)
Förhöjd kant:    #1e2d55   (borderHi)

Cyan (primär):   #00e5ff
Cyan dim:        #0097a7
Cyan glow:       #00e5ff30
Lila (sekundär): #7c4dff
Lila dim:        #5c35cc

Text (huvud):    #c8e0ff
Text (dim):      #6888aa
Text (muted):    #2a4060

Röd (varning):   #ff4c6a
Grön (bra):      #00e676
Orange (misc):   #ff9800
```

### Typografi
- **Familj:** `JetBrains Mono` (Google Fonts) — används ÖVERALLT, inklusive löptext
- **Fallback:** `'Courier New', monospace`
- **Skala:**
  - Sidtitlar: 18px / weight 600
  - Kortrubriker: 10px / weight 500 / uppercase / letter-spacing: 2px
  - Brödtext: 12.5px / weight 400
  - Liten text / labels: 10–11px
  - Stats-siffror: 24px / weight 700
  - Score-ring siffra: 38px / weight 700

### Spacing
```
Sidmarginaler:  22–28px
Kortpadding:    20px
Kortradie:      10px (standard), 8px (liten), 6px (micro), 20px (pill)
Gap i grids:    14–16px
Gap i listor:   8–10px
```

### Kortkomponent (base)
```css
background:    #0c1222
border:        1px solid #162040
border-radius: 10px
padding:       20px
backdrop-filter: blur(10px)
```

### Glow-progressbar
```
Höjd: 5px
Bakgrund: #2a406040
Fill: linjär gradient (0°, färg → färg + cc)
Box-shadow: 0 0 12px färg50, 0 0 4px färg30
Radie: 5px
Färglogik:
  ≥ 70% → #00e676 (grön)
  ≥ 50% → #00e5ff (cyan)
  < 50% → #ff4c6a (röd)
```

### Bakgrundsglows (ambient light)
```
Övre höger: radial-gradient(circle, #00e5ff08 0%, transparent 70%), 600×600px, top:-200 right:-200
Nedre vänster: radial-gradient(circle, #7c4dff06 0%, transparent 70%), 500×500px, bottom:-300 left:-100
```

---

## Appsidor

### 1. Dashboard (`/`)
**Syfte:** Övergripande studieöversikt — score, framsteg per domän, snabbåtkomst, aktivitet och rekommendationer.

#### Layout: Sidebar (68px) + Main (flex: 1)

**Sidebar — ikonnavigation (68px bred)**
- Logo: 40×40px, border-radius 10, gradient-bakgrund `linear-gradient(135deg, cyan20, purple20)`, border `cyan30`, text "NF" 14px/800 i cyan
- Nav-ikoner (7 st, 12px × 68px klickyta, padding 12px 0):
  ```
  ⊞  Dashboard    (aktiv: cyan, border-left 2px cyan, bg cyan10)
  ◈  Topologier
  ▤  Quiz
  △  Felanalys
  ⊟  Subnetting
  ▶  Resurser
  ⚙  Config
  ```
  Inaktiva: textDim (#6888aa)
- Avatar längst ner: 34×34px cirkel, gradient-border, initialer

**Header-bar (14px 28px padding)**
- Vänster: "Dashboard" 16px/600 + vertikal separator + "CCNA 200-301" 11px/textDim
- Höger: sökruta (surfaceHi, border, borderRadius 6, "⌘K Sök...") + "34 dagar kvar"-badge (gradient bg cyan→purple, cyan text)

**Innehållsgrid: 4 kolumner × 3 rader, gap 14px**

*Rad 1 — Statistikruta (4 kort, 1 kolumn var):*
| Kort | Värde | Subtitle |
|---|---|---|
| Quizzes | 47 | genomförda |
| Topologier | 12 | labbar klara |
| Streak | 12 | dagar i rad |
| Tid idag | 2.4h | studietid |

Layout per kort: `display: flex; justify-content: space-between; align-items: center`
- Vänster: label 10px/uppercase/textDim + subtitle 9px/muted
- Höger: värde 24px/700/text

*Rad 2 kolumn 1 — Score Ring-kort:*
- SVG-ring: 150×150px, stroke 9px, `rotate(-90deg)`
- Gradient: `linear-gradient` id="ringGrad" cyan → purple
- Bakgrundsring: `#2a406030`
- Centrumtext: "67" 38px/700 + "%" 16px/textDim + "Readiness" 9px/uppercase/textDim/letter-spacing 2
- Glow: `drop-shadow(0 0 8px #00e5ff40)`
- Badge under ringen: "Mål: 85%" pill-form, cyan-bakgrund

*Rad 2 kolumn 2–4 — Exam Domains:*
6 rader med Glow-progressbar (se spec ovan):
```
Network Fundamentals   72%   (viktar 20%)
Network Access         58%   (viktar 20%)
IP Connectivity        45%   (viktar 25%)
IP Services            81%   (viktar 10%)
Security Fundamentals  63%   (viktar 15%)
Automation & Prog.     34%   (viktar 10%)
```

*Rad 3 kolumn 1–2 — Snabbstart:*
4 knappar i 2×2-grid:
```
▤  Starta Quiz      "Slumpmässig med timer"    accent: cyan
◈  Ny Topologi      "Generera labbtopologi"    accent: green
⊟  Subnetting       "Interaktiv kalkylator"    accent: purple
▶  Se Resurser      "Videos & guider"          accent: orange
```
Varje knapp: `display:flex; align-items:center; gap:12px`, ikon-box 36×36px border-radius 8.

**Fokusområden (under snabbstart, röd ton):**
```
background: #ff4c6a08
border: 1px solid #ff4c6a15
border-radius: 6px
padding: 12px 14px
```
Innehåll:
```
⚠ Fokusområden                        (röd, 10px, 600)
Automation & Prog. (34%) — Se video → (cyan länk)
IP Connectivity (45%) — Starta quiz → (cyan länk)
```

**Rekommenderat-sektion** *(från Variant B — Amber, inbyggd i aktivitetskortet)*
```
Rekommenderat:                         (muted text, 10px)
→ Öva Automation & Prog. (34%)
→ Se video: OSPF Basics
→ Quiz: IP Connectivity
```
Styling: `fontSize: 10px, color: textDim (#6888aa), lineHeight: 1.6` — pilarna `→` i cyan-färg om de är klickbara länkar.

*Rad 3 kolumn 3–4 — Aktivitetsfeed:*
5 rader:
```
● 14:32  Subnetting Quiz      [8/10]  ← grön dot + badge
● 13:15  OSPF Topology Lab    [Klar]  ← grön
● 11:48  25 Flashcards        [25]    ← grön
● 09:20  VLAN Quiz            [6/10]  ← röd
● 08:00  ACL Commands         [9/10]  ← grön
```
- Dot: 6×6px cirkel, glow `box-shadow: 0 0 6px färg50`
- Badge: 3px 8px padding, border-radius 4, bg `färg12`

**Study Timer (under aktivitetsfeed):**
```
background: linear-gradient(135deg, cyan08, purple08)
border: 1px solid #00e5ff15
border-radius: 8px
padding: 14px 16px
display: flex; justify-content: space-between
```
- Vänster: "Study Timer" 10px/textDim + "00:00.00" 22px/700/text
- Höger: START-knapp `linear-gradient(135deg, cyan, purple)`, vit text 11px/600

**Rank-display (från Variant A — Terminal, i sidebaren)**
Visa användarens rank i sidebaren/profilsektionen:
```
rank: #42
```
Placering: Under avatar eller i en session-panel längst ner i sidebaren.
Styling: `fontSize: 10px, color: textDim` — rank-siffran i cyan.

---

### 2. Topologi-generator (`/topologier`)
**Syfte:** Generera och visa nätverkstopologier för träning. Välj protokoll/scenario, generera en topologi, öva i Packet Tracer eller GNS3.

**Funktioner att implementera:**
- Välj träningsscenario (OSPF, EIGRP, STP, VLANs, ACLs, NAT, DHCP, BGP etc.)
- Generera topologi-diagram (SVG eller Canvas-baserat)
- Visa noder (Router, Switch, PC, Server) som klickbara element
- Visa IP-adresser per interface
- Exportera som bild eller PDF
- Genväg: "Öppna i Packet Tracer" (länk till .pkt-fil om möjligt)
- Lista över tidigare genererade topologier (sparas lokalt/i DB)

**Topologi-noder:**
```
Router  → rektangel med R-ikon, cyan border
Switch  → rektangel med S-ikon, grön border
PC      → rektangel med PC-ikon, textDim border
Server  → rektangel med S-ikon, lila border
```
Kopplingar: SVG-linjer, `stroke: #162040`, aktiv länk: cyan glow.

---

### 3. Quiz / Prov (`/quiz`)
**Syfte:** Flervalsfrågor inom alla CCNA 200-301-domäner, med timer och resultatsummering.

**CCNA 200-301 Domäner & viktning (exakt som Cisco-provet):**
```
1. Network Fundamentals       20%
2. Network Access             20%
3. IP Connectivity            25%
4. IP Services                10%
5. Security Fundamentals      15%
6. Automation & Programmability 10%
```

**Quiz-konfigurationsskärm:**
- Välj domän (eller "Alla")
- Antal frågor (10 / 25 / 50 / 102 — fullt prov)
- Timer: Ja/Nej — standard 90 min för 102 frågor (proportionell annars)
- Svårighetsgrad: Enkel / Normal / Svår

**Quiz-vy:**
- Fråga + 4 svarsalternativ (A/B/C/D)
- Timer i övre höger hörn
- Progress: "Fråga 12 av 50"
- Keyboard-genvägar: A/B/C/D eller 1/2/3/4
- Förklaring visas efter svar (rätt/fel + varför)

**Resultatskärm:**
- Totalpoäng + procentuell score
- Breakdown per domän
- Lista över missade frågor → länk till "Felanalys"
- Knapp: "Försök igen" / "Ny quiz"

---

### 4. Felanalys (`/felanalys`)
**Syfte:** Aggregera alla fel från quizzes, visa mönster och rekommendera träning.

**Funktioner:**
- Lista missade frågor grupperade per domän
- Visa hur många gånger samma fråga missats
- Filter: Domän, Datum, Antal missade gånger
- Knapp per fråga: "Träna denna" → startar quiz med liknande frågor
- Länk till resurs/video för ämnet

**Rekommendationer (som i Amber-variant):**
```
→ Öva Automation & Prog. (34%)   [Se video] [Starta quiz]
→ Se video: OSPF Basics          [Öppna →]
→ Quiz: IP Connectivity          [Starta →]
```

---

### 5. Subnetting-kalkylator (`/subnetting`)
**Syfte:** Interaktiv kalkylator för IP-adressering och subnetting-övningar.

**Funktioner:**
- Input: IP-adress + CIDR-prefix (ex. `192.168.1.0/24`)
- Output:
  - Network address
  - Broadcast address
  - Antal hosts (2^n - 2)
  - Subnet mask (decimal + binär)
  - Wildcard mask
  - Första/sista användbara host
- VLSM-läge: Dela upp ett nät i subnät med olika storlekar
- Träningsläge: Generera slumpmässig IP, användaren svarar — rätt/fel feedback
- Binärt omvandlingsverktyg

---

### 6. Resurser (`/resurser`)
**Syfte:** Länksamling till videos, guider och officiellt material för varje ämne.

**Struktur per ämne:**
- Ämnesnamn + CCNA-domän
- Länk till YouTube-video
- Länk till officiell Cisco-dokumentation
- Länk till Packet Tracer-labb (.pkt)
- Taggar: nybörjare / medel / avancerat

---

### 7. Inställningar / Config (`/config`)
**Syfte:** Användarprofil, notiser, export och appinställningar.

**Sektioner:**
- Profilinformation (namn, exam-datum)
- Notiser (daglig påminnelse)
- Data export/import
- Återställ progress

---

## Delad komponentbibliotek

### `<GlowBar pct color height>`
Se specifikation under Designsystem ovan.

### `<ScoreRing pct size stroke>`
SVG-ring med gradient, glow och centrumtext.

### `<StatCard label value subtitle>`
Enkelt stat-kort med label/subtitle vänster och stort värde höger.

### `<ActivityItem time label result good>`
Rad i aktivitetsfeed med färgad dot, tid, text och badge.

### `<QuickActionCard icon title subtitle accent>`
Snabbstarts-knapp med ikon-box, titel och subtitle.

### `<RecommendationList items>`
Lista med `→`-prefix och cyan klickbara länkar.
```
items: [
  { text: "Öva Automation & Prog. (34%)", action: "quiz", topic: "automation" },
  { text: "Se video: OSPF Basics",        action: "video", url: "..." },
  { text: "Quiz: IP Connectivity",        action: "quiz", topic: "ip-connectivity" },
]
```

### Sidebar nav-ikon
```
width:       68px
padding:     12px 0
border-left: 2px solid (cyan om aktiv, transparent annars)
background:  cyan10 om aktiv
color:       cyan (aktiv) | #6888aa (inaktiv)
font-size:   16px (ikonkaraktären)
```

---

## Interaktioner & animationer

| Element | Trigger | Animation |
|---|---|---|
| Hover på nav-ikon | hover | `color: #c8e0ff`, `background: rgba(255,255,255,0.03)` |
| Hover på kort | hover | `border-color: #1e2d55`, subtle glow |
| Hover på snabbstarts-knapp | hover | `background: surfaceHi + 10%`, `translateY(-1px)` |
| Score-ring | mount | SVG stroke-dashoffset animation, 800ms ease-out |
| Progressbar | mount | width från 0 → pct, 600ms ease-out |
| Aktivitetsdots | mount | fade-in staggered 50ms per rad |
| Timer | running | monospace siffror tickar, inga visuella glitchar |
| Quiz svar | click | grön/röd highlight, correct-answer visas, 300ms |

---

## State Management

### Global state (Zustand / Context rekommenderas):
```typescript
interface AppState {
  user: {
    name: string
    examDate: Date
    streak: number
    rank: number          // Visa som "#42" i sidebaren
  }
  progress: {
    [domain: string]: {
      questionsAnswered: number
      correctAnswers: number
      lastStudied: Date
    }
  }
  activities: Activity[]
  weakAreas: string[]     // domän-nycklar sorterade efter lägst %
  recommendations: Recommendation[]
}
```

### Lokal state per sida:
- **Quiz:** `currentQuestion`, `answers[]`, `timer`, `isComplete`
- **Topologi:** `selectedProtocol`, `generatedTopology`, `history[]`
- **Subnetting:** `inputIP`, `inputCIDR`, `result`, `practiceMode`
- **Study Timer:** `isRunning`, `elapsed` — **persistera i localStorage**

---

## Design-tokens som CSS Custom Properties
```css
:root {
  --bg:          #060a14;
  --surface:     #0c1222;
  --surface-hi:  #111a30;
  --border:      #162040;
  --border-hi:   #1e2d55;
  --cyan:        #00e5ff;
  --cyan-dim:    #0097a7;
  --purple:      #7c4dff;
  --text:        #c8e0ff;
  --text-dim:    #6888aa;
  --muted:       #2a4060;
  --red:         #ff4c6a;
  --green:       #00e676;
  --orange:      #ff9800;
  --font-mono:   'JetBrains Mono', 'Courier New', monospace;
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   20px;
}
```

---

## Designfiler (referens)
Alla HTML-referensfiler finns i `design_files/`:

| Fil | Innehåll |
|---|---|
| `NetForge Dashboard.html` | Alla 3 varianter i canvas — öppna och klicka för fullscreen |
| `variant-cyber.jsx` | **Primär** — Cyber Blue dashboard (React/JSX) |
| `variant-amber.jsx` | Sekundär — Amber Console (React/JSX, se Rekommenderat-widget) |
| `variant-terminal.jsx` | Referens — Terminal Green (React/JSX, se Rank-display i sidebar) |

> Öppna `NetForge Dashboard.html` i en webbläsare för att se alla tre varianter interaktivt. Klicka på en artboard för fullscreen.

---

## Specifika element att plocka från andra varianter

### Från Variant A (Terminal Green) — Rank-display
Visa i sidebaren (under nav, i session-panel):
```
rank: #42
```
Styling: monospace, liten text, ranknumret i `var(--cyan)`.

### Från Variant B (Amber Console) — Rekommenderat
Widget som visas i dashboard (i aktivitetskortet eller separat) och i felanalys:
```
Rekommenderat:
→ Öva Automation & Prog. (34%)
→ Se video: OSPF Basics
→ Quiz: IP Connectivity
```
Pilarna `→` är klickbara och navigerar till rätt sida/resurs.

---

## Tekniska rekommendationer

- **Framework:** React + Next.js (App Router) eller SvelteKit
- **Styling:** Tailwind CSS med custom design-tokens, eller CSS Modules
- **State:** Zustand för global state, React Query för data-fetching
- **Databas:** SQLite (lokal) eller Supabase (hosted) för quizresultat och progress
- **Typografi:** Google Fonts — JetBrains Mono
- **Topologi-ritning:** React Flow (`reactflow`) eller Cytoscape.js
- **Charts/Grafer:** Recharts eller Chart.js (för progressbars och score-ring)
- **Timer:** `useInterval`-hook med localStorage-persistens
