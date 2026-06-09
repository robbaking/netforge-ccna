# Code review — NetForge (2026-06-09)

Omfattning: `app/`, `components/`, `lib/`, `data/`, `docs/` och konfigurationsfiler.
Kraven: NOA -- endast rapport, inga kodändringar.

## Sammanfattning

Appen är i grunden välstrukturerad (feature-mappar, tydliga lib-filer) och
TypeScript-syntaxen går igenom (`tsc --noEmit`). De största sårbarheterna är
inline-stylingens mängd, en stor "monolith"-fil i `lib/topology.ts`,
inkonsekventa typer, och bristande åtkomstdetaljer (a11y). Prestandan är
akademisk bra för nuvarande data, men väldigt lätt att försämra när
frågebanken växer från 51 till 100+.

---

## Hög prio

### 1. Separera `lib/topology.ts` (888 rader, monolith)
- **Nu:** En fil med 3 roller: auto-layout, IOS/IOS-XE config-generering och
  scenario-generatorer (OSPF Hub/Spoke, Chain, STP, VLAN m.m.).
- **Risk:** Varje byte i layoutalgoritmen riskerar att krascha config-generering
  och tvärtom. Refaktoring är självklar men nu blockeras av storleken.
- **Förslag:** Dela upp i minst tre moduler:
  - `lib/topology/layout.ts` — `layout()`, `resolveRow()`, `spreadEven()`.
  - `lib/topology/config.ts` — `getDeviceConfig()` + device-renderare.
  - `lib/topology/scenarios.ts` — alla `gen*()`-funktioner + exports.
- **Fördel:** Möjliggör tester per modul och minskar cognitive load.

### 2. Jämk typkonsistens: `Difficulty`-enumereringen
- **Nu:** `types.ts` har `"easy" | "normal" | "hard"` (angl.), `topology.ts`
  har `"Lätt" | "Medel" | "Svår"` (svensk), och `xp.ts` använder `Difficulty`
  från `types.ts`. `quizdb.ts`/`progress.ts` lagrar svenska svårighetsgrader i
  `QuizAnswerDetail` men använder `xpForCorrect()` som förväntar sig den engelska
  `Difficulty`.
- **Risk:** Då `QuizAnswerDetail.difficulty` används i `xpForCorrect()`,
  kommer svenska difficulty-värden aldrig att matcha och alltid returnera
  `correctNormal=-value`. Dvs streak-multiplicering och XP-beräkning är felaktig
  vid svenska tecken i topologier eller framtida användning.
- **Förslag:** Välj EN konvention. Rekommendation: håll svensk UI, men i
  datalagret en intern `"easy" | "normal" | "hard"` (eller `1|2|3`). Mappa UI-
  texten via ett lager. Se även `docs/UI_DESIGN.md` för beslutsstöd.

### 3. Normalisera default-värden i `AppProgress`
- **Nu:** `getProgress()` returnerar default vid saknad data, men vid läsning
  används ofta `p.xp ?? 0`, `p.streak ?? 0` etc. på 5+ ställen.
- **Risk:** Nya fält som läggs till (`studyTimeSeconds`, nya achievements)
  glömmer `?? 0` någonstans och får `undefined`-värden.
- **Förslag:** Implementera en ensureDefaults()-funktion eller skapa
  `mergeWithDefaults(raw): AppProgress`. Alternativt använd Zod/validering så
  corrupted localStorage inte tvingar en hard reset.

### 4. Tillgänglighet (a11y) — låg kostnad, hög vinst
- **Nu:** Sidomenyn använder icon-only länkar med endast `title`-attribut.
  Inga `<aria-label>`. Quizz-knapparna saknar `type="button"`. Inputfält saknar
  `id`/`htmlFor`-koppling (labels är visuella men inte programmatiska).
- **Rekommendation:**
  - Lägg till `aria-label` på Sidebar-länkar.
  - Lägg till `<label htmlFor="...">` + `id` på alla text-/nummerinputs.
  - Sätt `type="button"` på varje icke-submit-knapp.
  - Fokusindikator: lägg till en global `:focus-visible`-stil i `globals.css`
    (cyan outline).

### 5. `localStorage`-versionering + felhantering
- **Nu:** Om schema ändras (nya fält) kraschar inte `JSON.parse`, men gamla
  saved-states tvingar till default. Det finns ingen tydlig "migrera-från-v1"
  logik.
- **Risk:** Tyst datatap vid uppgradering. Användaren ser bara "tomt"
  dashboard.
- **Förslag:** Lägg till en version-nyckel i localStorage (t.ex.
  `netforge_progress_v`), och en `migrate(v, raw)`-switch så användardata följer
  med vid förändringar av `AppProgress`.

---

## Medium prio

### 6. Dela upp upprepade inline-style-blockar (PageShell / primitives)
- **Nu:** Varje `*/page.tsx` upprepar `minHeight:"100vh", background:"var(--bg-base)", padding:22`.
  Knappar och kort kopieras mellan `QuizPage`, `SubnetCalc`, `ProvPage` m.fl.
- **Förslag:** Skapa små primitives:
  - `components/layout/PageShell.tsx` — wrapper med padding/background.
  - `components/ui/Button.tsx` och `Card.tsx` — tokeniserade varianter.
  Det minskar duplication och gör temabyteggen lättare.

### 7. Optimera `lib/quizdb.ts` och IndexedDB-åtkomst
- **Nu:** Varje `openDb()`-anrop öppnar en ny connection (inget cachelagring).
  `getWrongQuestionIds(limit)` hämtar 100 attempt`s bara för att filtrera
  unika fel-ID:n.
- **Förslag:**
  - Cacha DB-instansen i module-scope (`let dbPromise: Promise<IDBDatabase> | null`).
  - Låt `saveAttempt` returnera ett resolved promise snabbare (watchers)
    eller skriv batch-helper för bulk uppdateringar.
  - Eftersom det bara är 103 frågor totalt kan man överväga att ersätta
    IndexedDB med enkel localStorage-lista för attempts några månader.

### 8. Memoize frågefiltret + indexera per domän
- **Nu:** `getQuestions()` kopierar hela `allQuestions`-arrayen (51 element)
  och genererar en ny slumptalstabell varje gång.
- **Förslag:** När banken växer till 100+ byt till enkla index: {}
  `{ [domain]: Question[] }`. Shuffle bara resultatet, inte hela originalet.
  Utöka `getQuestions` med `useMemo` i QuizPage om det behövs (för att undvika
  onödig filter vid render).

### 9. Förbättra tangentbords-Navigation i quizzen
- **Nu:** `QuizCard` lyssnar på `keydown` globalt, med `question` och `chosen`
  som dependencies vilket skapar en ny listener på varje ny fråga (vilket är
  rimligt), men när man "reveal":at är enter-knappen kopplad till
  `onAnswer(chosen)` som triggar nästa fråga utan att först sätta fokus på
  nästa knapp.
- **Förslag:**
  - Använd `useRef` + stabil handler för att minimera re-binding.
  - Vid reveal, flytta fokus till "Nästa fråga →"-knappen (`element.focus()`)
    så skärmläsare och tangentbordsanvändare får en tydlig åtkomstpunkt.
  - Erbjud en "hoppa till nästa"-kortkommando (t.ex. `Enter`/Space) i reveal-
    läget, men visa det tydligt.

### 10. Tydligare felhantering i subnetting
- **Nu:** `SubnetCalc` visar ett rött meddelande vid fel, men `SubnetTrainer`
  visar endast gröna/röda rutor utan tydlig summan av fel i ett enda ställe.
- **Förslag:** Lägg till en liten sammanfattningsrad med "3/4 rätt" + färgad
  procent i `SubnetTrainer` så användaren inte behöver räkna själv.
- **Dessutom:** CIDR-nummer accepterar `Number(e.target.value)` utan gränser;
  en användare kan skriva `-5` eller `99`. Lägg till `min={0} max={32}` plus
  JS-validering (redan gjort i `calculateSubnet`, men UI:n ska förhindra
  onödig skick).

### 11. Exportera konstanter för "mystika tal"
- **Nu:** Magic numbers finns på flera ställen:
  - `DashboardPage`: `marginBottom: 22`
  - `SubnetTrainer`: `+4` i total poäng, `i + 24` för trunkportar, `i + 1` för
    accessportar (kopplat till layoutordning i `topology.ts`).
  - `xp.ts`: "500 * (level - 1) ** 2" utan förklaring.
- **Förslag:** Flytta dessa till `const` med namn i respektive fil (t.ex.
  `PADDING`, `PORT_OFFSET_ACCESS`, `XP_CURVE_FACTOR`). Förklara kurvan i
  `xp.ts` kommentar.

---

## Låg prio

### 12. Städa upp oanvänd dependency
- **Nu:** `@xyflow/react` är i `package.json` men jag hittade ingen import i
  koden som faktiskt använder det (kan ligga i en del jag inte läst, t.ex.
  `TopologyPage.tsx` med zoom/pan).
- **Om oanvänt:** Ta bort för mindre bundle. Om det används framöver: notera
  att Next.js 15 + React 19 är kompatibelt med @xyflow v12.11, men inchecka
  en arbetsyta där det faktiskt är monterat.

### 13. Lägg till formattering/pre-commit
- **Nu:** `npm run lint` finns men det finns inget lint/format-script explicit
  callat i de granskade filernas stil (t.ex. saknas radbrytningar runt vissa
  operatorer).
- **Förslag:** Lägg till `prettier` + Husky för enhetlig stil, särskilt med
  tanke på den stora mängden inline-style-objekt.

### 14. Dokumentera `topology.ts` layout-konstanter
- **Nu:** `X_MIN`, `X_MAX`, `Y0`, `Y1`, `GAP_WIDE` etc. är väl namngivna men
  saknar en karta över viewBox och avsedda dimensioner.
- **Förslag:** Lägg till en header-kommentar med viewBox-koordinater
  (`720×430`), förklaring av TIER-typer och hur `DEVICE_SIZES` kopplar till
  `TopoSvg`-rendering.

### 15. Överväg `data/ccna_questions.json`-splitning
- **Nu:** Alla 51 frågor i en JSON på ca 90KB. När bankenDubbla/ Trippelas med
  100+ frågor bör överväga:
  - Dela per domän i `data/questions/<domain>.json` och lazy-loada vid quizstart
    (`dynamic(() => import('@/data/questions/...'))`).
  - Alternativt generera en `.ts` fil med `export const QUESTIONS = [...] as
    const[]` via ett script, vilket ger typstöd och mindre parse-kostnad.
- **Rekommendation:** Vänta tills banken > 100 frågor; nu är JSON acceptabelt.

### 16. Loggning/telemetri? (valfritt, framtida)
- **Nu:** Ingen loggning vid localStorage-korruption eller IndexedDB-fel. Om
  något går fel ser användaren bara ett tomt dashboard.
- **Förslag:** Lägg till en `reportError()`-funktion (t.ex. till en fil i
  `docs/debug/`) som skriver fel till en dev-only-konsol och en
  `lastError`-slice i localStorage för senare felsökning. Ej säkerhetskrita
  — inget skickas externt.

---

## Snabba sökord (finder-list)

| Sökväg | Problem | Rekommendation |
| --- | --- | --- |
| `QuizCard.tsx` | `useEffect` deps: `[question, revealed, chosen]` orsakar upp till 3x re-bind per fråga | Använd `useRef` för handler + stabil `useCallback` |
| `DashboardPage.tsx` | `setInterval(() => setProgress(getProgress()), 5000)` | Ersätt med StorageEvent eller manual refresh + animation-frame |
| `lib/quizdb.ts` | Ingen connection cache | Cacha IDB-connection i module scope |
| `lib/progress.ts` | `JSON.parse` utan schema-validering | Lägg till version + Zod-schema vid läsning |
| `Sidebar.tsx` | Icon-only länkar | `aria-label` |
| `SubnetCalc.tsx` | Input utan `id`/`htmlFor` | Lägg till `id`-koppling |
| `lib/topology.ts` | 888 rader i en fil | Dela upp i 3 moduler |

---

## Slutsats

Appen är en välgjord studieplattform med tydlig vision. De viktigaste
förbättringarna är:
1. (Hög) Dela upp `lib/topology.ts`
2. (Hög) Jämk `Difficulty`-typerna
3. (Hög) Normalisera `AppProgress` defaults + versionera localStorage
4. (Hög) Lättillgängliga knappar/länkar och fokusindikatorer

Efter detta ligger fundamentet för en stabilare vidareutveckling vid 100+
frågor och eventuellSupabase-backend (som påpekas i README).
