# DEBUG — kända problem & felsökning

Spårar buggar och layout-problem i NetForge. Uppdatera när något hittas eller löses.

## Verktyg

- **`/debug`** — stresstest-sida (ej i sidomenyn, nås via URL `localhost:3000/debug`).
  Genererar N topologier per protokoll i ett rutnät och flaggar layout-problem
  med röd ram. Klicka **"Generera om alla"** för nya slumpningar.
- Detektorn (`detectIssues()` i `components/debug/DebugPage.tsx`) flaggar:
  - enhet utanför viewBox `720×430`,
  - IP-label som klipps mot nedre kanten,
  - två enheter närmare än 50px (överlapp).

---

## Öppna problem

- [ ] **STP Kvadrat — diagonal blockerad länk** (`genSTP_Square`): länken
  SW-3 → SW-4 går diagonalt över host-raden och kan visuellt korsa en PC-länk.
  Kosmetiskt, inte felaktigt. Repro: `/debug` → filter STP → generera om flera ggr.
- [ ] **Många hosts på samma tier**: när 4 PCs ligger på samma tier kan MIN_GAP (92px)
  pressa raden mot marginalerna. Kontrollera att inget klipps i `/debug`.

## Lösta problem

- [x] IP-adresser ritades ovanför enheten istället för under — flyttade text till
  `y = size + 14` i `TopoSvg.tsx`.
- [x] Horisontella länkar låg rakt över enhetsikoner — ersatte `<line>` med
  kurvad `<path>` (kvadratisk Bézier) för samma-tier-länkar.
- [x] "GENERERA NY" gav alltid samma struktur — lade till strukturvarianter per
  protokoll (`genOSPF_HubSpoke`/`_Chain`, `genSTP_Triangle`/`_Square`,
  `genVLAN_L3Switch`/`_RouterOnAStick`).
- [x] Naiv layout spred barn-noder över hela bredden → korsande länkar. Bytte till
  barycenter-baserad lagerlayout i `layout()` (`lib/topology.ts`).

---

## Repro-mall

```
### <kort titel>
- Sida/route:
- Protokoll + svårighet:
- Steg: 1) ... 2) ...
- Förväntat:
- Faktiskt:
```
