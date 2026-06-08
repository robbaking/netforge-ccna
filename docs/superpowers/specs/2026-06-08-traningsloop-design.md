# Träningsloopen — Design (spec)

**Datum:** 2026-06-08
**Status:** Godkänd design, redo för implementationsplan
**Mål (en mening):** Gör quiz till en riktig träningsloop — svara → reflektera med förklaring → nästa, tjäna XP/nivåer från 0, och spara varje quizförsök så man kan repetera det man svarat fel på.

---

## Kontext

NetForge är en Next.js 15 / React 19 / TypeScript-app (körs i webbläsaren, ingen
backend). Idag:
- **Quiz** ([components/quiz/QuizCard.tsx](../../../components/quiz/QuizCard.tsx)) visar förklaringen men **auto-hoppar efter 700 ms** (`setTimeout(onAnswer, 700)`), så förklaringen bara blinkar förbi.
- **Poäng** ([lib/progress.ts](../../../lib/progress.ts)) lagrar bara `answered`/`correct` per domän i localStorage; dashboarden visar "readiness %" = correct÷answered. Det finns **inget XP/nivå-system**.
- **Resurser** ([data/resources.ts](../../../data/resources.ts)) har videor taggade per `domain` + `examRef`. Frågor har `domain` men inte `examRef`.
- **Quizförsök sparas inte** — man kan inte se historik eller repetera felsvar.

Den här specen täcker **Träningsloopen**: Quiz-UX + Resultat-resurser + XP/nivåer +
Quiz-historik. Prov-läge, topologi-omarbetning och hostad databas ligger i
*Roadmap / senare* sist i dokumentet.

## Låsta arkitekturbeslut

1. **Topologi förblir TypeScript.** Appen körs i webbläsaren; Python kan inte köra
   där utan en separat backend (latens, hosting, komplexitet) för noll vinst.
   Topologigenerering är deterministisk grafbyggnad, inte AI/ML. Vill vi ha
   snyggare auto-layout senare → ett JS-grafbibliotek (dagre/elkjs/react-flow),
   fortfarande i TS.
2. **Lagring:** lättviktiga räknare (XP) i **localStorage** (läses synkront överallt);
   append-only historik i **IndexedDB** (skalar, den "databas" som efterfrågades).
   Hostad DB (**Supabase**, gratis Postgres + auth) skjuts upp tills sync mellan
   enheter behövs (YAGNI).

---

## Del 1 — Quiz-UX: svara → reflektera → nästa

**Fil:** `components/quiz/QuizCard.tsx`, `components/quiz/QuizPage.tsx`

- Ta bort `setTimeout(() => onAnswer(idx), 700)` i `handlePick`. När man väljer ett
  svar: avslöja rätt/fel-färger + visa förklaringen (finns redan), men **stanna kvar**.
- Lägg en **"Nästa fråga →"**-knapp under förklaringen. På sista frågan står det
  **"Se resultat →"**. Klick anropar `onAnswer(chosen)` som registrerar svaret och
  går vidare (logiken som idag ligger i `QuizPage.handleAnswer`).
- Tangentbord: A–D väljer svar **före** avslöjande; **Enter** eller **Space**
  fortsätter **efter** avslöjande.
- `QuizCard` äger `revealed`/`chosen`-state (som idag) men anropar inte `onAnswer`
  förrän användaren klickar Nästa.

## Del 2 — Resultat med läranderesurser

**Fil:** `components/quiz/QuizResults.tsx`

- För varje **felsvarad** fråga: visa ett "📚 Lär dig mer"-block med resurser för
  frågans **domän** från `resources.ts` (`resources.filter(r => r.domain === q.domain)`).
- Gruppera per domän så samma video inte upprepas. Varje resurs = `topic` +
  länk (öppna `/resurser` filtrerat, eller `videoUrl` direkt).
- Lägg en summering: "Svaga domäner denna quiz: …" + en **"Repetera felsvar →"**-knapp
  som startar en quiz byggd av frågorna man svarade fel på (se Del 4).

## Del 3 — XP & nivåer

**Filer:** `lib/xp.ts` (ny, ren), `lib/types.ts`, `lib/progress.ts`, dashboard

- Utöka `AppProgress` med `xp: number` (default 0).
- **Poängvärden** (konstanter i `lib/xp.ts`, lätt att justera):
  ```ts
  export const XP = {
    correctAnswer: 10,   // per rätt svar i quiz
    quizComplete: 50,    // per avklarad quiz
    subnettingRound: 30, // per avklarad subnetting-övning
    topologyLab: 40,     // per topologi-labb markerad klar
  };
  ```
- **Nivåkurva** (kvadratisk, ren funktion):
  ```ts
  export function levelFromXp(xp: number): number {
    return Math.floor(Math.sqrt(Math.max(0, xp) / 100)) + 1;
  }
  export function xpForLevel(level: number): number { // kumulativ XP vid nivåns start
    return (level - 1) ** 2 * 100;
  }
  export function xpProgress(xp: number): {
    level: number; intoLevel: number; needed: number; pct: number;
  } {
    const level = levelFromXp(xp);
    const start = xpForLevel(level);
    const next = xpForLevel(level + 1);
    const intoLevel = xp - start;
    const needed = next - start;
    return { level, intoLevel, needed, pct: Math.round((intoLevel / needed) * 100) };
  }
  ```
  (Lvl 1: 0–99 XP, Lvl 2: 100–399, Lvl 3: 400–899, …)
- `lib/progress.ts`: lägg `addXp(amount)` och dela ut XP i `recordQuizResult`
  (correctAnswer × antal rätt + quizComplete). Subnetting/topologi anropar `addXp`
  vid sina respektive avklaranden (kan göras i ett uppföljande steg om tid saknas).
- **Dashboard:** nytt kort/rad "★ {xp} XP · Nivå {level}" med progressbar
  (`glow-bar`) som visar `intoLevel/needed`. Skilt från readiness-ringen.

## Del 4 — Quiz-historik (IndexedDB) + repetera felsvar

**Filer:** `lib/quizdb.ts` (ny), `lib/questions.ts`, `lib/types.ts`,
`components/quiz/QuizPage.tsx`, `components/quiz/QuizConfig.tsx`

- **Datamodell** (`lib/types.ts`):
  ```ts
  export interface QuizAttempt {
    id: string;                 // crypto.randomUUID()
    date: string;               // ISO
    domain: Domain | "all";
    difficulty: Difficulty | "all";
    total: number;
    correct: number;
    results: { questionId: string; chosen: number | null; correct: boolean }[];
  }
  ```
- **`lib/quizdb.ts`** — tunn IndexedDB-wrapper (inget beroende). DB `netforge`,
  object store `attempts` (keyPath `id`), index på `date`. Funktioner:
  - `saveAttempt(a: QuizAttempt): Promise<void>`
  - `getAttempts(limit?: number): Promise<QuizAttempt[]>` (nyaste först)
  - `getWrongQuestionIds(limit = 30): Promise<string[]>` (unika frågor man svarat fel på, senaste först)
  - Server-säker: alla funktioner no-op/`[]` om `typeof indexedDB === "undefined"`.
- **`lib/questions.ts`:** lägg `getQuestionsByIds(ids: string[]): Question[]`
  (slår upp frågor i `id`-ordning, hoppar saknade).
- **`QuizPage`:** vid quizslut, bygg ett `QuizAttempt` och `saveAttempt(...)`
  (vid sidan om befintlig `recordQuizResult`).
- **"Repetera felsvar"-läge:** `QuizConfig` får ett val (och resultatknappen i Del 2
  länkar hit). Det läser `getWrongQuestionIds()` → `getQuestionsByIds()` → startar
  en quiz med de frågorna. Om inga felsvar finns: visa ett vänligt meddelande.
- **Historik-*sida*** skjuts upp; dagens leverans är lagring + repetera-felsvar.

---

## Filöversikt

| Fil | Åtgärd |
|---|---|
| `lib/xp.ts` | **Ny** — XP-konstanter + `levelFromXp`/`xpForLevel`/`xpProgress` (ren) |
| `lib/quizdb.ts` | **Ny** — IndexedDB-wrapper för `attempts` |
| `lib/types.ts` | Lägg `xp` i `AppProgress`; lägg `QuizAttempt` |
| `lib/progress.ts` | `addXp()`, dela ut XP i `recordQuizResult` |
| `lib/questions.ts` | `getQuestionsByIds()` |
| `components/quiz/QuizCard.tsx` | Ta bort auto-hopp, lägg Nästa-knapp + Enter/Space |
| `components/quiz/QuizPage.tsx` | Spara `QuizAttempt`, "repetera felsvar"-läge |
| `components/quiz/QuizResults.tsx` | Resurser per felsvarad fråga + repetera-knapp |
| `components/quiz/QuizConfig.tsx` | "Repetera felsvar"-val |
| `components/dashboard/*` | XP/nivå-kort |

## Verifiering

- **Ren logik** (`lib/xp.ts`, nivåkurvan) via ad-hoc `npx tsx`-assertionsskript
  (repo saknar testrunner) — samma mönster som tidigare i projektet.
- `npx tsc --noEmit` rent efter varje steg (rör inte `.next/`).
- **Manuellt (dev-server):**
  1. Svara på en fråga → inget auto-hopp; förklaring kvar; "Nästa fråga →" fungerar; Enter fortsätter.
  2. Avsluta quiz → XP ökar, nivåbar rör sig på dashboarden.
  3. Försöket syns i IndexedDB (DevTools → Application → IndexedDB → netforge → attempts).
  4. Resultat visar resurser för felsvarade frågor.
  5. "Repetera felsvar" bygger en quiz av tidigare felsvarade frågor.

---

## Roadmap / senare (egna specar)

- **Prov-läge (`/prov`)** — skilt från quiz: ~100 frågor, 120 min timer, ingen
  feedback under provet, låst läge nära Cisco-känslan, full analys efter, 70%-gräns.
  Kräver fler frågor för att kännas realistiskt. (ROADMAP 3.1.)
- **Fler träningssätt** — flashcards/spaced repetition (ROADMAP 2.3),
  protokoll-algoritm-tränare (ROADMAP 2.1), topologi-labbar med validering.
- **Topologi-omarbetning** — kvar i TS: fler scenarier, ev. dagre/elkjs-layout,
  starkare labb→facit-koppling. **Inte** Python.
- **Hostad databas + konton** — Supabase (gratis Postgres + auth) när sync mellan
  enheter/konton behövs; migrera då localStorage+IndexedDB → Supabase. Alternativ:
  Neon, Turso.
