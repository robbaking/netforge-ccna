# NetForge — Plan för kodförbättringar och vidareutveckling

> **Syfte:** Sammanfatta aktuellt tillstånd, identifiera risker, och ge en prioriterad färdig plan för nästa iterationscykel.
> **Baserat på:** `CLAUDE.md`, `README.md`, `docs/ROADMAP.md`, `docs/UI_DESIGN.md`, `debug-report.md`, `docs/CODE_REVIEW_2026-06-09.md`, och genomgång av `lib/`, `components/`, `app/`.
> **Senast granskad / uppdaterad:** 2026-06-09

---

## 1. Sammanfattning av nuvarande tillstånd

### Stack och arkitektur
- **Ramverk:** Next.js 15 (App Router) + React 19 + TypeScript.
- **Styling:** Inline-styles + CSS-variabler (`globals.css`). JetBrains Mono. Ingen Tailwind-färg (men Tailwind finns i devDeps).
- **Datapersistens:** `localStorage` (`netforge_progress`) + `IndexedDB` via `lib/quizdb.ts`.
- **Struktur:** Genomtänkt feature-fördelningsmönster — `app/<page>/page.tsx` + `components/<feature>/` + `lib/` + `data/`.

### Vad som fungerar bra
- **Tydlig visionsadress:** Mörkt cyber-blue tema med konsekventa färger och typografi (JetBrains Mono, `nf-card`, `nf-btn-*`).
- **Fungerande kärnflöden:** Dashboard, Quiz-motor, Subnetting och Topology-viewer är implementerade och testbara.
- **Frågedatabas i JSON:** Lättillgänglig, versionshanterbar, och importeras via ett tydligt interface (`lib/questions.ts`).
- **Inlärningsresurser som MD-filer:** `CCNA_Roadmap_and_Protocols.md`, `200-301-CCNA-v1.1.md`, `CCNA-STUDY-PDF/` ger ett rikt material att bygga features kring.
- **DEBUG-verktyg:** `/debug` + `debug-report.md` visar att felsökning och transparens är prioriterat.

### Kända problem som blockerar eller saktar utveckling
1. **`lib/topology.ts` är en monolith (~888 rader)** med layout, config-generering och scenario-logik i en fil. Risk för regression vid ändring.
2. **`Difficulty`-typ-inkonsekvens:** Datalagret använder svensk `"Lätt" | "Medel" | "Svår"`, medan `xp.ts` förväntar sig engelska `"easy" | "normal" | "hard"`. Detta gör XP-beräkning och streak-multiplicering felaktig i situationer där svenska värden propageras.
3. **`AppProgress` saknar robusta defaults och versionering:** Nya fält glöms ofta (`?? 0`), och schemaändringar kan ge tyst datatap.
4. **Korruptionskänslig IO:** `localStorage` och `IndexedDB` används utan validering, versionering eller felgränser.
5. **Återkommande inline-style-upprepning:** Varje sida återskapar PageShell-layout och knappstilar.
6. **Tillgänglighet (a11y):** Icon-only länkar utan `aria-label`, input-fält saknar labels, knappar saknar typer, fokusindikatorer saknas globalt.
7. **Prestanda vid 100+ frågor:** Ingen indexing, ingen caching av IDB-connections, och onödig re-binding av keyboard-listeners per fråga.

---

## 2. Problemområden och risker

### Teknisk skuld
| Risk | Beskrivning | Konsekvens |
|---|---|---|
| Monolith `topology.ts` | Ändringar i layout kraschar config eller tvärtom | Regression, lång QA-cykel |
| Mixed `Difficulty`-typer | XP och streak blir fel för svenska värden | Användare litar inte på statistik |
| Ingen default-normalisering | Nya fält blir `undefined` | Dashboard/UI-visning kraschar |
| Ingen localStorage-version | Uppgradering = tyst datatap | Användare ser tomt dashboard |

### Dataintegritet och felhantering
- `QuizPage.tsx` avslutar quiz utan try/catch => vit skärm vid localStorage/IDB-fel.
- `SubnetCalc.tsx` accepterar `NaN` i CIDR => konstiga boundaries.
- `SubnetTrainer.tsx` låter användaren spamma "Kontrollera" => poängförändring utan ny fråga.
- `getWrongQuestionIds()` öppnar nya IDB-connections varje anrop utan caching.

### Användarupplevelse
- Ingen strukturerad studieväg (roadmap finns bara i MD-fil, ej i appen).
- CLI-kommandon saknas som sökbar referens.
- Endast 78–103 frågor (beroende på källa); README/ROADMAP är inkonsekventa i numrering.
- Tangentbordsnavigering i quizzen är bräcklig: Enter-leder till nästa fråga utan fokusöverföring.

### Underhållbarhet
- Inga enhetliga primitives (PageShell, Button, Card) => duplication och driftkostnad.
- Inga pre-commit-hooks (format/lint) => inkonsekvent stil i inline-style-objekt.
- Stora magic numbers utan namn eller kommentarer.

---

## 3. Prioriterade förbättringsområden

### 🟥 Hög prio (fixa först — stabiliserar grunden)

- **H1. separera `lib/topology.ts` i moduler**  
  `topology/layout.ts`, `topology/config.ts`, `topology/scenarios.ts`.  
  Minskar regressionrisk, möjliggör tester, och sänker cognitive load.

- **H2. Jämk `Difficulty`-typer till en intern konvention**  
  Inför en internt `"easy" | "normal" | "hard"` (eller `1|2|3`) i `lib/` och mappa svensk UI-text via ett lager (`DifficultyLabel.ts`/`difficultyLabels`).  
  Rätta `xp.ts` och `progress.ts` att alltid använda den interna representationen.

- **H3. Normalisera `AppProgress` defaults + versionshantering**  
  Implementera `ensureDefaults()` eller `mergeWithDefaults()`. Lägg till `netforge_progress_v` i localStorage och en `migrate()`-switch.  
  Konsekvens: inga fler `undefined`-värden, säkra uppgraderingar.

- **H4. Lägg till felgränser och robust IO**  
  - `localStorage` => wrapper med schema-validering (minimum: version + `JSON.parse` try/catch).
  - `IndexedDB` => module-scope cache för `quizdb.ts`.
  - `QuizPage.tsx` => try/catch runt `finishQuiz`/`saveAttempt` och fallback till resultatsida även vid IO-fel.

- **H5. Tillgänglighets-genomgång (a11y)**  
  - `aria-label` på sidebar-länkar.
  - `<label htmlFor>` + `id` på inputs.
  - `type="button"` på interaktiva knappar.
  - Global `:focus-visible`-stil (cyan outline) i `globals.css`.

- **H6. Städa upp oanvänd/kandiderad dependency**  
  Avgör om `@xyflow/react` faktiskt används. Om ej => ta bort. Om ja => dokumentera varför och när det monterades.

### 🟧 Medel prio (förbättrar kvalitén och skalbarheten)

- **M1. Skapa UI-primitives**  
  `components/layout/PageShell.tsx`, `components/ui/Button.tsx`, `components/ui/NFCard.tsx`.  
  Minskar duplication, standardiserar temabyteggen.

- **M2. Indexera frågor per domän + memoize filter**  
  Bygg `{ [domain]: Question[] }` vid import. `getQuestions()` returnerar redan shufflade resultat, inte originalet. Overhead är låg även vid 100+ frågor, men blir viktigt vid 300+.

- **M3. Förbättra subnetting-validering och feedback**  
  - CIDR-input: `min={0} max={32}` + JS-validering.
  - `SubnetTrainer`: sammanfattningsrad ("3/4 rätt") och disable "Kontrollera" när redan rättat.

- **M4. Studieväg-sida (`/studyvag`)**  
  Baserat på `CCNA_Roadmap_and_Protocols.md` 4-fas-roadmap. Kopplar till befintlig progress via `recordQuizResult`/domän-data. Ger nyttjare en tydlig first-time experience.

- **M5. CLI-kommandoreferens (`/commands`)**  
  Sökbar tabell över vanliga IOS-kommandon. Direkt extrahering från MD-filen => liten engineering-kostnad, högt användarvärde under studier.

- **M6. Exportera och dokumentera "magic numbers"**  
  Flytta tal som `500 * (level - 1) ** 2`, `+4` i score, `marginBottom: 22` till namngivna konstanter med förklaring.

### 🟩 Låg prio (viktigt men låg bränsle i nära frames)

- **L1. Lägg till Prettier + Husky**  
  Standardisera inline-style-format och radbrytningar.

- **L2. Loggningsfunktion (dev-only)**  
  `reportError()` som sparar till `localStorage` (`lastError`) och konsolen. Ingen extern telemetri.

- **L3. Överväg question-bank-splitning**  
  Vänta tills banken >100 frågor. Då dela per domän i `data/questions/<domain>.json` och lazy-loada.

- **L4. Överväg Zod eller valideringslager**  
  För `AppProgress` och eventuell API-respons. Ger tydligt schema och automatisk default-merge.

---

## 4. Idé- och feature-förslag

### Snabba wins (< 1 dag vardera)
- **Quick actions i dashboard:** Länkar till `/studyvag` och `/commands`.
- **Progress-export/import:** JSON-baserad backup av `netforge_progress` (handy vid reinstall).
- **Keyboard-hint i quiz:** Visa kortkommando (A–D + Enter) visuellt, inte bara i text.
- **Theme-toggles (framtida):** Amber Console / Terminal Green (redan skisserade i `CCNA-FOR-SCHOOL/design_handoff_netforge/`). Kräver egentlig temalagring.

### Kärnfeatures (enligt ROADMAP + denna plan)
- **Fler frågor:** Mål ≥ 150, prioritera network-access och ip-connectivity.
- **Protokollalgoritm-trainer (`/algoritmer`):** STP, OSPF, Routing, ACL-moduler se `docs/features/protocol-algoritmer.md`.
- **Spaced repetition:** SM-2-variant i `lib/questions.ts` + nytt quiz-läge "Repetition".
- **Simulerad provexamen (`/provexamen`):** 120 min, 120+ frågor, låst läge, 70%-gräns.
- **IPv6-utbyggnad:** Frågor + kalkylator + algoritm-moduler.
- **EtherChannel-trainer:** Del av `/algoritmer` eller eget flöde.

### Avancerat / långsiktigt
- **Supabase-backend** (cross-device progress) — som ROADMAP föreslår.
- **Topology-lab med validering:** Kompletta IOS-templates + checklista + parser för `show`-output.
- **Pac/embbedded Cisco Packet Tracer-länkar** i topologierna.

---

## 5. Färdig implementationsplan (detaljerad checklista)

> Format: färdigt att lägga i `docs/`. Varje rad är testbar och kan avslutas med checkbox.

### Fas 0 — Stabilisering (innan nya features)
- [ ] **H1:** Dela upp `lib/topology.ts` i:
  - `lib/topology/layout.ts` — `layout()`, `resolveRow()`, `spreadEven()`
  - `lib/topology/config.ts` — `getDeviceConfig()` + device-renderare
  - `lib/topology/scenarios.ts` — alla `gen*()`-funktioner + exports
  - Verifiera att `getDeviceConfig` och alla scenariotests fungerar efter flytt.
- [ ] **H2:** Inför intern `Difficulty`-konvention i `lib/types.ts` (t.ex. `type Difficulty = "easy" | "normal" | "hard"`).
  - Uppdatera `xp.ts` att använda den interna typen.
  - Skapa `lib/difficultyLabels.ts` med svenska mappningar till UI.
  - Migrera `progress.ts`/`quizdb.ts` att lagra/spara den interna typen. UI-mappning sker först i render.
- [ ] **H3:** Implementera default-normalisering:
  - Lägg till `function ensureDefaults(p: Partial<AppProgress>): AppProgress` i `lib/progress.ts`.
  - Sätt `const STORAGE_VERSION = 1;` och `KEY = "netforge_progress_v2"`.
  - Lägg till `migrate(v, raw)` som kallas vid läsning.
  - Testa "uppgradera" från befintlig localStorage utan dataförlust.
- [ ] **H4-a:** (localStorage) Byt `getProgress()`/`saveProgress()` till wrapper med schema-validering och version.
- [ ] **H4-b:** (IndexedDB) Cacha DB-instans i module-scope i `lib/quizdb.ts`.
- [ ] **H4-c:** (`QuizPage.tsx`) Lägg till try/catch runt quiz-avslut med dev-loggning. Fallback till resultatsida med pending-state.
- [ ] **H5-a:** (`components/layout/Sidebar.tsx`) `aria-label` på varje `<a>`/`<button>`.
- [ ] **H5-b:** Global `:focus-visible` i `app/globals.css` (cyan outline 2px).
- [ ] **H5-c:** Input-fält i quiz och subnetting: lägg till `id` + `<label htmlFor>`.
- [ ] **H6:** Kolla `@xyflow/react`-användning. Avlägsna eller dokumentera.

### Fas 1 — Snabba wins och nytt användarvärde
- [ ] **M1:** Skapa `components/layout/PageShell.tsx` och `components/ui/NFCard.tsx`. Migrera 1–2 sidor (t.ex. `/resurser`) till nya primitives.
- [ ] **M3-a:** (`components/subnetting/SubnetCalc.tsx`) `min={0} max={32}` + JS-validering.
- [ ] **M3-b:** (`components/subnetting/SubnetTrainer.tsx`) Lägg till score-sammanfattningsrad och disable check-knapp vid redan rättad fråga.
- [ ] **M6:** Dokumentera och namnge magic numbers (XP-kurva, padding, port-offsets) med förklaring i respektive fil.
- [ ] **M4:** Studieväg-sida (`app/studyvag/page.tsx` + `components/studyvag/StudyPathPage.tsx`):
  - 4 faser från `CCNA_Roadmap_and_Protocols.md`
  - Per-fas: domäner, klarade frågor, rekommenderad nästa handling
  - Knapp: "Starta quiz för denna fas"
- [ ] **M5:** CLI-kommandor (`app/commands/page.tsx` + `components/commands/CommandsPage.tsx`):
  - Sökbar lista över kommandon grupperade per protokoll
  - Extrahera från `CCNA_Roadmap_and_Protocols.md`

### Fas 2 — Kärnfunktioner (enligt ROADMAP prioritering)
- [ ] **Frågedatabas:**expandera till 150+ frågor (prioritera network-access, ip-connectivity).
- [ ] **M2:** Indexera frågor per domän i `lib/questions.ts`. Verifiera prestanda vid 150+ frågor.
- [ ] **Protokollalgoritm-trainer (`/algoritmer`):** STP, OSPF, Routing, ACL-moduler enligt `docs/features/protocol-algoritmer.md`.
- [ ] **Spaced repetition:** Implementera enkelt SM-2-lager i `lib/questions.ts`. Nytt läge i `QuizConfig.tsx`.
- [ ] **EtherChannel:** Modul i `/algoritmer` eller eget flöde under `/subnetting`.

### Fas 3 — Avancerat
- [ ] **Simulerad provexamen (`/provexamen`):** Tidsgräns, låst läge, full analys.
- [ ] **IPv6-utbyggnad:** Frågor, subnetting, algoritmer.
- [ ] **Topology-lab med validering:** Mallar + checklista + output-parser.
- [ ] **Supabase integration (valfritt):** Cross-device progress.

---

## 6. Test- och kvalitetskrav

- `npx tsc --noEmit` ska vara rent efter varje fas.
- `npm run build` ska gå igenom.
- Manuella scenarion per fas:
  - Öppna `/dashboard`, verifiera att streak/XP inte ändras oförklarligt (Difficulty-fix).
  - Ladda lokalStorage, rensa den, verifiera att standardsatser laddas korrekt.
  - Kör quiz med 10 frågor, verifiera progress + resultat utan vit skärm vid simulerat IO-fel.
  - Testa tangentbordsnavigering i quiz (A–D + Enter) och verifiera fokusflytt.
- Vid varje fas: uppdatera `docs/ROADMAP.md` med slutförda punkter.

---

## 7. Risk och trade-off-analys

| Beslut | Risk | Mitigering |
|---|---|---|
| Dela upp `topology.ts` | Temporärt merge-konflikt | Gör i en dedikerad PR med review |
| Byt `Difficulty`-representation | Kräver migration av befintlig data | Skriv `migrate()` som mappar gamla svenska värden till interna |
| Lägg till versionering i localStorage | Ny nyckel = tomt state vid första load | Auto-migrera från gammal key om ny saknas |
| Lägg till Zod/validering | Ny dependency | Väg mot L4-pris, kan vänta till senare fas |

---

## 8. Slutsats och nästa steg

1. **Börja med Fas 0 (stabilisering).** Utan rättad `Difficulty`-typ och versionshantering blir vidareutvecklingen osäker.
2. **Efter Fas 0, gå till Fas 1** med studieväg, CLI, och fler frågor för omedelbart användarvärde.
3. **Senare Fas 2+** enligt `ROADMAP.md` för unika, differentierande features.

> **Mål:** Efter denna plan är appen redo att hantera 150+ frågor, ökad trafik, och eventuell backend utan attRegression eller användarförlust.
