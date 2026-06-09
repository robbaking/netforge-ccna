# Träningsloopen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gör quiz till en riktig träningsloop — svara → reflektera → nästa, XP/nivåer från 0, resurser per felsvar, och IndexedDB-historik för att repetera fel.

**Architecture:** Ren logik i `lib/` (xp.ts, quizdb.ts), typändringar i `lib/types.ts`, sedan UI-lager (QuizCard, QuizPage, QuizResults, QuizConfig, Dashboard). Ingen backend — localStorage för XP/räknare, IndexedDB för quiz-historik.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · inline CSS + CSS-variabler (`--cyan`, `--purple`, `--green`, `--red`, `--bg-base`, `--bg-surface`, `--bg-elevated`, `--border`, `--text`, `--text-dim`) · JetBrains Mono · `npx tsc --noEmit` för typkontroll

> **Backend-beslut (2026-06-08):** Supabase (auth + PostgreSQL) är bekräftat som nästa stora steg — men det kommer i en **separat spec** efter att Träningsloopen är klar. All kod i den här planen är designad för att fungera offline och kräver inga ändringar när Supabase läggs till senare.

---

## Filöversikt

| Fil | Åtgärd |
|---|---|
| `lib/xp.ts` | **Ny** — XP-konstanter + `levelFromXp` / `xpForLevel` / `xpProgress` |
| `lib/quizdb.ts` | **Ny** — IndexedDB-wrapper för `attempts` object store |
| `lib/types.ts` | Lägg `xp: number` i `AppProgress`; lägg `QuizAttempt` interface |
| `lib/progress.ts` | Lägg `addXp(amount)`; anropa `addXp` i `recordQuizResult` |
| `lib/questions.ts` | Lägg `getQuestionsByIds(ids: string[]): Question[]` |
| `components/quiz/QuizCard.tsx` | Ta bort `setTimeout`-auto-hopp; lägg Nästa-knapp; Enter/Space efter avslöjande |
| `components/quiz/QuizPage.tsx` | Ta bort `setTimeout` vid sista fråga; spara `QuizAttempt` i IndexedDB; repetera-felsvar-läge |
| `components/quiz/QuizResults.tsx` | Visa resurser per feldomän; "Repetera felsvar →"-knapp |
| `components/quiz/QuizConfig.tsx` | Lägg "Repetera felsvar"-val som startar quiz från historik |
| `components/dashboard/DashboardPage.tsx` | Lägg XP/nivå-kort med progressbar |

---

## Task 1: XP-logik (`lib/xp.ts`)

**Files:**
- Create: `ccna-app/lib/xp.ts`
- Create (temp, raderas efteråt): `ccna-app/lib/xp.test.ts`

- [ ] **Steg 1: Skapa assertion-skript**

Skapa `ccna-app/lib/xp.test.ts`:

```typescript
import { levelFromXp, xpForLevel, xpProgress } from "./xp";

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(`FAIL: ${msg}`);
  console.log(`PASS: ${msg}`);
}

assert(levelFromXp(0) === 1, "0 XP → nivå 1");
assert(levelFromXp(99) === 1, "99 XP → nivå 1");
assert(levelFromXp(100) === 2, "100 XP → nivå 2");
assert(levelFromXp(399) === 2, "399 XP → nivå 2");
assert(levelFromXp(400) === 3, "400 XP → nivå 3");
assert(levelFromXp(899) === 3, "899 XP → nivå 3");
assert(levelFromXp(900) === 4, "900 XP → nivå 4");

assert(xpForLevel(1) === 0, "nivå 1 startar vid 0 XP");
assert(xpForLevel(2) === 100, "nivå 2 startar vid 100 XP");
assert(xpForLevel(3) === 400, "nivå 3 startar vid 400 XP");
assert(xpForLevel(4) === 900, "nivå 4 startar vid 900 XP");

const p = xpProgress(250);
assert(p.level === 2, "250 XP → nivå 2");
assert(p.intoLevel === 150, "250 XP → 150 in i nivå 2 (start=100)");
assert(p.needed === 300, "nivå 2→3 kräver 300 XP");
assert(p.pct === 50, "250 XP → 50% igenom nivå 2");

console.log("Alla XP-tester godkända!");
```

- [ ] **Steg 2: Kör skriptet — förvänta FAIL**

```
cd ccna-app && npx tsx lib/xp.test.ts
```

Förväntat: `Error: Cannot find module './xp'`

- [ ] **Steg 3: Skapa `lib/xp.ts`**

```typescript
export const XP = {
  correctAnswer: 10,
  quizComplete: 50,
  subnettingRound: 30,
  topologyLab: 40,
} as const;

export function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 100)) + 1;
}

export function xpForLevel(level: number): number {
  return (level - 1) ** 2 * 100;
}

export function xpProgress(xp: number): {
  level: number;
  intoLevel: number;
  needed: number;
  pct: number;
} {
  const level = levelFromXp(xp);
  const start = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const intoLevel = xp - start;
  const needed = next - start;
  return { level, intoLevel, needed, pct: Math.round((intoLevel / needed) * 100) };
}
```

- [ ] **Steg 4: Kör skriptet — förvänta PASS**

```
cd ccna-app && npx tsx lib/xp.test.ts
```

Förväntat: `Alla XP-tester godkända!`

- [ ] **Steg 5: Ta bort testfilen**

```
del ccna-app\lib\xp.test.ts
```

- [ ] **Steg 6: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata (inga fel)

- [ ] **Steg 7: Commit**

```
git add ccna-app/lib/xp.ts
git commit -m "feat: add XP constants and level curve (lib/xp.ts)"
```

---

## Task 2: Typuppdateringar (`lib/types.ts`)

**Files:**
- Modify: `ccna-app/lib/types.ts`

Nuläge i `AppProgress`: `{ domains, activities, streak, lastActiveDate, studyTimeSeconds }` — saknar `xp`. Nuläge i filen: inget `QuizAttempt`.

- [ ] **Steg 1: Lägg `xp` i `AppProgress` och ny `QuizAttempt`**

Öppna `ccna-app/lib/types.ts`. Ersätt `AppProgress`-interfacet och lägg `QuizAttempt` efter det:

```typescript
export interface AppProgress {
  domains: Partial<Record<Domain, DomainProgress>>;
  activities: Activity[];
  streak: number;
  lastActiveDate: string;
  studyTimeSeconds: number;
  xp: number;
}

export interface QuizAttempt {
  id: string;
  date: string;
  domain: Domain | "all";
  difficulty: Difficulty | "all";
  total: number;
  correct: number;
  results: { questionId: string; chosen: number | null; correct: boolean }[];
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ett fel om `xp` saknas i `defaultProgress()` i `lib/progress.ts` — fixas i Task 3.

- [ ] **Steg 3: Commit**

```
git add ccna-app/lib/types.ts
git commit -m "feat: add xp to AppProgress and QuizAttempt type"
```

---

## Task 3: XP i progress (`lib/progress.ts`)

**Files:**
- Modify: `ccna-app/lib/progress.ts`

Nuläge: `defaultProgress()` returnerar objekt utan `xp`; `recordQuizResult` delar inte ut XP.

- [ ] **Steg 1: Uppdatera `lib/progress.ts`**

Lägg `import { XP } from "./xp";` på rad 2 (efter `"use client";`).

Ersätt `defaultProgress()`:

```typescript
function defaultProgress(): AppProgress {
  return {
    domains: {},
    activities: [],
    streak: 0,
    lastActiveDate: "",
    studyTimeSeconds: 0,
    xp: 0,
  };
}
```

I `recordQuizResult`, lägg dessa rader direkt efter `p.activities = [act, ...p.activities].slice(0, 20);`:

```typescript
  const earned = correct * XP.correctAnswer + XP.quizComplete;
  p.xp = (p.xp ?? 0) + earned;
```

Lägg ny funktion efter `addStudyTime`:

```typescript
export function addXp(amount: number): void {
  const p = getProgress();
  p.xp = (p.xp ?? 0) + amount;
  saveProgress(p);
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

- [ ] **Steg 3: Commit**

```
git add ccna-app/lib/progress.ts
git commit -m "feat: add addXp() and award XP in recordQuizResult"
```

---

## Task 4: Fråguppslagning (`lib/questions.ts`)

**Files:**
- Modify: `ccna-app/lib/questions.ts`

- [ ] **Steg 1: Lägg `getQuestionsByIds` sist i `lib/questions.ts`**

```typescript
export function getQuestionsByIds(ids: string[]): Question[] {
  const idSet = new Set(ids);
  return allQuestions.filter((q) => idSet.has(q.id));
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

- [ ] **Steg 3: Commit**

```
git add ccna-app/lib/questions.ts
git commit -m "feat: add getQuestionsByIds to lib/questions.ts"
```

---

## Task 5: IndexedDB-wrapper (`lib/quizdb.ts`)

**Files:**
- Create: `ccna-app/lib/quizdb.ts`

IndexedDB är asynkron och callback-baserad. DB-namn: `netforge`, object store: `attempts`, keyPath: `id`, index på `date`.

- [ ] **Steg 1: Skapa `lib/quizdb.ts`**

```typescript
import type { QuizAttempt } from "./types";

const DB_NAME = "netforge";
const STORE = "attempts";
const VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB not available"));
      return;
    }
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("date", "date");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveAttempt(attempt: QuizAttempt): Promise<void> {
  if (typeof indexedDB === "undefined") return;
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(attempt);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAttempts(limit = 50): Promise<QuizAttempt[]> {
  if (typeof indexedDB === "undefined") return [];
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).index("date").openCursor(null, "prev");
    const results: QuizAttempt[] = [];
    req.onsuccess = () => {
      const cursor = req.result;
      if (cursor && results.length < limit) {
        results.push(cursor.value as QuizAttempt);
        cursor.continue();
      } else {
        resolve(results);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

export async function getWrongQuestionIds(limit = 30): Promise<string[]> {
  const attempts = await getAttempts(100);
  const seen = new Set<string>();
  const ids: string[] = [];
  for (const attempt of attempts) {
    for (const r of attempt.results) {
      if (!r.correct && !seen.has(r.questionId) && ids.length < limit) {
        seen.add(r.questionId);
        ids.push(r.questionId);
      }
    }
  }
  return ids;
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

- [ ] **Steg 3: Commit**

```
git add ccna-app/lib/quizdb.ts
git commit -m "feat: add IndexedDB wrapper for quiz attempts (lib/quizdb.ts)"
```

---

## Task 6: QuizCard — ta bort auto-hopp, lägg Nästa-knapp

**Files:**
- Modify: `ccna-app/components/quiz/QuizCard.tsx`

Nuläge: `handlePick` anropar `setTimeout(() => onAnswer(idx), 700)`. Ny prop `isLast: boolean` styr knapptext. `onAnswer` anropas inte förrän användaren klickar Nästa.

- [ ] **Steg 1: Ersätt hela `QuizCard.tsx`**

```typescript
"use client";
import { useEffect, useState } from "react";
import type { Question } from "@/lib/types";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (idx: number) => void;
  isLast: boolean;
}

const KEYS = ["a", "b", "c", "d"];
const LABELS = ["A", "B", "C", "D"];

export default function QuizCard({ question, selectedAnswer, onAnswer, isLast }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState<number | null>(null);

  useEffect(() => {
    setRevealed(false);
    setChosen(null);
  }, [question.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (revealed) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (chosen !== null) onAnswer(chosen);
        }
        return;
      }
      const idx = KEYS.indexOf(e.key.toLowerCase());
      if (idx >= 0 && idx < question.options.length) {
        handlePick(idx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [question, revealed, chosen]);

  function handlePick(idx: number) {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
  }

  function handleNext() {
    if (chosen !== null) onAnswer(chosen);
  }

  function getOptionClass(idx: number): string {
    if (!revealed) return chosen === idx ? "answer-selected" : "";
    if (idx === question.correct) return "answer-correct";
    if (idx === chosen && idx !== question.correct) return "answer-wrong";
    return "";
  }

  const diffColor =
    question.difficulty === "easy"
      ? "var(--green)"
      : question.difficulty === "hard"
      ? "var(--red)"
      : "var(--cyan)";

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div className="nf-card" style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{
            fontSize: 9, padding: "3px 8px", borderRadius: 4,
            textTransform: "uppercase", letterSpacing: 1,
            background: `${diffColor}15`, color: diffColor, border: `1px solid ${diffColor}30`,
          }}>{question.difficulty}</span>
          <span style={{ fontSize: 9, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1 }}>
            {question.domain.replace(/-/g, " ")}
          </span>
          <span style={{ fontSize: 9, color: "var(--muted)", marginLeft: "auto" }}>
            {revealed ? "Enter / Space → nästa" : "Tangentbord: A B C D"}
          </span>
        </div>
        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
          {question.question}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handlePick(idx)}
            className={getOptionClass(idx)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 18px",
              background: "var(--bg-surface)", border: "1px solid var(--border)",
              borderRadius: 8, cursor: revealed ? "default" : "pointer",
              textAlign: "left", fontSize: 12.5, color: "var(--text)",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.2s",
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
              background: "var(--bg-elevated)", border: "1px solid var(--border)",
              color: "var(--text-dim)",
            }}>{LABELS[idx]}</span>
            {opt}
          </button>
        ))}
      </div>

      {revealed && (
        <div style={{
          padding: "14px 16px", borderRadius: 8,
          background: chosen === question.correct ? "#00e67608" : "#ff4c6a08",
          border: `1px solid ${chosen === question.correct ? "#00e67620" : "#ff4c6a20"}`,
          animation: "fadeIn 0.3s ease-out",
        }}>
          <div style={{
            fontSize: 10, fontWeight: 600, marginBottom: 6,
            color: chosen === question.correct ? "var(--green)" : "var(--red)",
          }}>
            {chosen === question.correct ? "✓ Rätt!" : "✗ Fel"} — Förklaring
          </div>
          <div style={{ fontSize: 11.5, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 14 }}>
            {question.explanation}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleNext}
              className="nf-btn-primary"
              style={{ fontSize: 11, padding: "8px 20px" }}
            >
              {isLast ? "Se resultat →" : "Nästa fråga →"}
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: fel om `isLast`-prop saknas i `QuizPage.tsx` — fixas i Task 7.

- [ ] **Steg 3: Commit**

```
git add ccna-app/components/quiz/QuizCard.tsx
git commit -m "feat: quiz card stays on answer, adds Nästa-knapp and Enter/Space nav"
```

---

## Task 7: QuizPage — ta bort setTimeout, spara QuizAttempt, repetera-läge

**Files:**
- Modify: `ccna-app/components/quiz/QuizPage.tsx`

Nuläge: `handleAnswer` har `setTimeout` 800 ms vid sista frågan. `QuizCard` får ny `isLast`-prop. Ingen `QuizAttempt` sparas. `onRepeatWrong` skickas ned till `QuizConfig` och `QuizResults`.

- [ ] **Steg 1: Ersätt hela `QuizPage.tsx`**

```typescript
"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import QuizConfig from "./QuizConfig";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";
import { getQuestions, getQuestionsByIds } from "@/lib/questions";
import { recordQuizResult } from "@/lib/progress";
import { saveAttempt, getWrongQuestionIds } from "@/lib/quizdb";
import { DOMAINS } from "@/lib/types";
import type { Question, Domain, Difficulty, QuizAttempt } from "@/lib/types";

type Phase = "config" | "quiz" | "results";

interface QuizState {
  questions: Question[];
  current: number;
  answers: (number | null)[];
  startTime: number;
}

function QuizPageInner() {
  const params = useSearchParams();
  const domainParam = params.get("domain");
  const initialDomain: Domain | "all" =
    domainParam && DOMAINS.some((d) => d.id === domainParam)
      ? (domainParam as Domain)
      : "all";

  const [phase, setPhase] = useState<Phase>("config");
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [configDomain, setConfigDomain] = useState<Domain | "all">(initialDomain);
  const [configDifficulty, setConfigDifficulty] = useState<Difficulty | "all">("all");

  function startQuiz(
    domain: Domain | "all",
    count: number,
    difficulty: Difficulty | "all",
    fromWrongIds?: string[]
  ) {
    let qs: Question[];
    if (fromWrongIds && fromWrongIds.length > 0) {
      qs = getQuestionsByIds(fromWrongIds).slice(0, count);
    } else {
      qs = getQuestions({ domain, count, difficulty });
    }
    if (!qs.length) return;
    setConfigDomain(domain);
    setConfigDifficulty(difficulty);
    setQuiz({
      questions: qs,
      current: 0,
      answers: new Array(qs.length).fill(null),
      startTime: Date.now(),
    });
    setPhase("quiz");
  }

  async function startRepeatWrong(count: number) {
    const ids = await getWrongQuestionIds(count);
    if (!ids.length) return;
    startQuiz("all", count, "all", ids);
  }

  function handleAnswer(idx: number) {
    if (!quiz) return;
    const updated = [...quiz.answers];
    updated[quiz.current] = idx;
    if (quiz.current + 1 >= quiz.questions.length) {
      const finalQuiz = { ...quiz, answers: updated };
      setQuiz(finalQuiz);
      const correct = updated.filter((a, i) => a === finalQuiz.questions[i].correct).length;
      const dom = finalQuiz.questions[0].domain;
      recordQuizResult(dom, correct, finalQuiz.questions.length);

      const attempt: QuizAttempt = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        domain: configDomain,
        difficulty: configDifficulty,
        total: finalQuiz.questions.length,
        correct,
        results: finalQuiz.questions.map((q, i) => ({
          questionId: q.id,
          chosen: updated[i],
          correct: updated[i] === q.correct,
        })),
      };
      saveAttempt(attempt);
      setPhase("results");
    } else {
      setQuiz({ ...quiz, answers: updated, current: quiz.current + 1 });
    }
  }

  function restart() {
    setQuiz(null);
    setPhase("config");
  }

  if (phase === "config") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Quiz / Prov</span>
          <span style={{ width: 1, height: 16, background: "var(--border)" }} />
          <span style={{ fontSize: 11, color: "var(--text-dim)" }}>CCNA 200-301</span>
        </header>
        <QuizConfig
          onStart={startQuiz}
          onRepeatWrong={startRepeatWrong}
          initialDomain={initialDomain}
        />
      </div>
    );
  }

  if (phase === "quiz" && quiz) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Quiz</span>
            <span style={{ fontSize: 11, color: "var(--text-dim)" }}>
              {quiz.current + 1} / {quiz.questions.length}
            </span>
          </div>
          <button onClick={restart} className="nf-btn-secondary" style={{ fontSize: 10 }}>Avbryt</button>
        </div>
        <div className="glow-bar-track" style={{ marginBottom: 24, height: 3 }}>
          <div className="glow-bar-fill" style={{
            width: `${(quiz.current / quiz.questions.length) * 100}%`,
            background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            boxShadow: "0 0 8px #00e5ff40",
          }} />
        </div>
        <QuizCard
          question={quiz.questions[quiz.current]}
          selectedAnswer={quiz.answers[quiz.current]}
          onAnswer={handleAnswer}
          isLast={quiz.current + 1 === quiz.questions.length}
        />
      </div>
    );
  }

  if (phase === "results" && quiz) {
    const correct = quiz.answers.filter((a, i) => a === quiz.questions[i].correct).length;
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <QuizResults
          questions={quiz.questions}
          answers={quiz.answers}
          correct={correct}
          elapsed={Math.round((Date.now() - quiz.startTime) / 1000)}
          onRestart={restart}
          onRepeatWrong={startRepeatWrong}
        />
      </div>
    );
  }

  return null;
}

export default function QuizPage() {
  return (
    <Suspense fallback={null}>
      <QuizPageInner />
    </Suspense>
  );
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: fel om `onRepeatWrong` saknas i `QuizConfig` och `QuizResults` — fixas i Task 8 och 9.

- [ ] **Steg 3: Commit**

```
git add ccna-app/components/quiz/QuizPage.tsx
git commit -m "feat: save QuizAttempt to IndexedDB, remove setTimeout, add repeat-wrong mode"
```

---

## Task 8: QuizConfig — lägg "Repetera felsvar"-val

**Files:**
- Modify: `ccna-app/components/quiz/QuizConfig.tsx`

Ny prop `onRepeatWrong: (count: number) => void`.

- [ ] **Steg 1: Ersätt hela `QuizConfig.tsx`**

```typescript
"use client";
import { useState } from "react";
import { DOMAINS } from "@/lib/types";
import type { Domain, Difficulty } from "@/lib/types";

interface Props {
  onStart: (domain: Domain | "all", count: number, difficulty: Difficulty | "all") => void;
  onRepeatWrong: (count: number) => void;
  initialDomain?: Domain | "all";
}

const COUNT_OPTIONS = [10, 25, 50];
const DIFFICULTY_OPTIONS: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "Alla nivåer" },
  { value: "easy", label: "Lätt" },
  { value: "normal", label: "Normal" },
  { value: "hard", label: "Svår" },
];

export default function QuizConfig({ onStart, onRepeatWrong, initialDomain = "all" }: Props) {
  const [domain, setDomain] = useState<Domain | "all">(initialDomain);
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const selectStyle = (active: boolean, accent = "var(--cyan)"): React.CSSProperties => ({
    padding: "8px 16px", borderRadius: 6, cursor: "pointer", fontSize: 11,
    fontWeight: active ? 600 : 400,
    background: active ? `${accent}15` : "var(--bg-elevated)",
    border: `1px solid ${active ? accent : "var(--border)"}`,
    color: active ? accent : "var(--text-dim)",
    transition: "all 0.15s",
    fontFamily: "'JetBrains Mono', monospace",
  });

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <div className="nf-card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          Välj domän
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button style={selectStyle(domain === "all")} onClick={() => setDomain("all")}>Alla domäner</button>
          {DOMAINS.map((d) => (
            <button key={d.id} style={selectStyle(domain === d.id)} onClick={() => setDomain(d.id)}>
              {d.label} <span style={{ opacity: 0.5, fontSize: 10 }}>{d.weight}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div className="nf-card">
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
            Antal frågor
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {COUNT_OPTIONS.map((n) => (
              <button key={n} style={selectStyle(count === n)} onClick={() => setCount(n)}>{n}</button>
            ))}
          </div>
        </div>
        <div className="nf-card">
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
            Svårighetsgrad
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {DIFFICULTY_OPTIONS.map((d) => (
              <button key={d.value} style={selectStyle(difficulty === d.value)} onClick={() => setDifficulty(d.value)}>
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div className="nf-card" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "linear-gradient(135deg, #00e5ff08, #7c4dff08)",
          border: "1px solid #00e5ff20",
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Klar att börja?</div>
            <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 4 }}>
              {count} frågor · {domain === "all" ? "Alla domäner" : DOMAINS.find((d) => d.id === domain)?.label} ·{" "}
              {difficulty === "all" ? "Alla nivåer" : DIFFICULTY_OPTIONS.find((d) => d.value === difficulty)?.label}
            </div>
          </div>
          <button
            className="nf-btn-primary"
            style={{ padding: "10px 28px", fontSize: 12 }}
            onClick={() => onStart(domain, count, difficulty)}
          >
            STARTA QUIZ ▶
          </button>
        </div>

        <div className="nf-card" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#ff4c6a08", border: "1px solid #ff4c6a20",
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Repetera felsvar</div>
            <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 4 }}>
              Bygg ett quiz av dina senaste felsvar
            </div>
          </div>
          <button
            className="nf-btn-secondary"
            style={{ padding: "10px 22px", fontSize: 12, borderColor: "#ff4c6a40", color: "var(--red)" }}
            onClick={() => onRepeatWrong(count)}
          >
            REPETERA ↺
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: fel om `onRepeatWrong` saknas i `QuizResults` — fixas i Task 9.

- [ ] **Steg 3: Commit**

```
git add ccna-app/components/quiz/QuizConfig.tsx
git commit -m "feat: add repeat-wrong-answers option to QuizConfig"
```

---

## Task 9: QuizResults — resurser per feldomän + repetera-knapp

**Files:**
- Modify: `ccna-app/components/quiz/QuizResults.tsx`

Ny prop `onRepeatWrong: (count: number) => void`. Resurser importeras från `@/data/resources`.

- [ ] **Steg 1: Ersätt hela `QuizResults.tsx`**

```typescript
"use client";
import Link from "next/link";
import type { Question, Domain } from "@/lib/types";
import { resources } from "@/data/resources";

interface Props {
  questions: Question[];
  answers: (number | null)[];
  correct: number;
  elapsed: number;
  onRestart: () => void;
  onRepeatWrong: (count: number) => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export default function QuizResults({
  questions, answers, correct, elapsed, onRestart, onRepeatWrong,
}: Props) {
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const color = pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--cyan)" : "var(--red)";
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  const wrongQuestions = questions.filter((q, i) => answers[i] !== q.correct);
  const wrongDomains = [...new Set(wrongQuestions.map((q) => q.domain))] as Domain[];
  const resourcesByDomain = wrongDomains.reduce<Record<string, typeof resources>>((acc, domain) => {
    acc[domain] = resources.filter((r) => r.domain === domain);
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {/* Score card */}
      <div className="nf-card" style={{ textAlign: "center", marginBottom: 16, padding: "32px 20px" }}>
        <div style={{ position: "relative", width: 130, height: 130, margin: "0 auto 16px" }}>
          <svg width={130} height={130} viewBox="0 0 130 130" style={{ transform: "rotate(-90deg)" }}>
            <circle cx={65} cy={65} r={r} fill="none" stroke="#2a406030" strokeWidth={9} />
            <circle cx={65} cy={65} r={r} fill="none" stroke={color} strokeWidth={9}
              strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 8px ${color}50)`, transition: "stroke-dashoffset 1s ease-out" }}
            />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text)" }}>
              {pct}<span style={{ fontSize: 14, color: "var(--text-dim)" }}>%</span>
            </span>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color, marginBottom: 6 }}>
          {pct >= 70 ? "Utmärkt!" : pct >= 50 ? "Godkänt" : "Fortsätt träna"}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-dim)" }}>
          {correct} av {total} rätt · {formatTime(elapsed)}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 20 }}>
          <button onClick={onRestart} className="nf-btn-primary">Nytt quiz</button>
          <Link href="/dashboard"><button className="nf-btn-secondary">Dashboard</button></Link>
        </div>
        {wrongQuestions.length > 0 && (
          <div style={{ marginTop: 14 }}>
            <button
              onClick={() => onRepeatWrong(wrongQuestions.length)}
              className="nf-btn-secondary"
              style={{ borderColor: "#ff4c6a40", color: "var(--red)", fontSize: 11 }}
            >
              Repetera felsvar ({wrongQuestions.length} frågor) ↺
            </button>
          </div>
        )}
      </div>

      {/* Learning resources */}
      {wrongDomains.length > 0 && (
        <div className="nf-card" style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
            📚 Lär dig mer — svaga domäner denna quiz
          </div>
          <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 14 }}>
            Svaga domäner: {wrongDomains.map((d) => d.replace(/-/g, " ")).join(", ")}
          </div>
          {wrongDomains.map((domain) => (
            <div key={domain} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "var(--cyan)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                {domain.replace(/-/g, " ")}
              </div>
              {resourcesByDomain[domain]?.length ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {resourcesByDomain[domain].map((res) => (
                    <a
                      key={res.id}
                      href={res.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 12px", borderRadius: 6,
                        background: "var(--bg-elevated)", border: "1px solid var(--border)",
                        textDecoration: "none", color: "var(--text)", fontSize: 11.5,
                      }}
                    >
                      <span style={{ color: "var(--red)", fontSize: 14 }}>▶</span>
                      <div>
                        <div style={{ fontWeight: 500 }}>{res.topic}</div>
                        <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>{res.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: 11, color: "var(--text-dim)" }}>Inga resurser hittades.</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Question review */}
      <div className="nf-card">
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
          Genomgång av svar
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {questions.map((q, i) => {
            const ans = answers[i];
            const ok = ans === q.correct;
            return (
              <div key={q.id} style={{
                padding: "12px 14px",
                background: ok ? "#00e67608" : "#ff4c6a08",
                border: `1px solid ${ok ? "#00e67620" : "#ff4c6a20"}`,
                borderRadius: 6,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 12, color: ok ? "var(--green)" : "var(--red)", flexShrink: 0, marginTop: 1 }}>
                    {ok ? "✓" : "✗"}
                  </span>
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--text)", marginBottom: 4 }}>{q.question}</div>
                    {!ok && (
                      <div style={{ fontSize: 10, color: "var(--text-dim)" }}>
                        Ditt svar: <span style={{ color: "var(--red)" }}>{ans !== null ? q.options[ans] : "—"}</span>
                        {" · "}
                        Rätt: <span style={{ color: "var(--green)" }}>{q.options[q.correct]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Steg 2: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

- [ ] **Steg 3: Commit**

```
git add ccna-app/components/quiz/QuizResults.tsx
git commit -m "feat: show learning resources and repeat-wrong button in QuizResults"
```

---

## Task 10: Dashboard — XP/nivå-kort

**Files:**
- Modify: `ccna-app/components/dashboard/DashboardPage.tsx`

- [ ] **Steg 1: Lägg import av `xpProgress` i `DashboardPage.tsx`**

Lägg efter de befintliga importerna:

```typescript
import { xpProgress } from "@/lib/xp";
```

- [ ] **Steg 2: Lägg `xpData`-variabel**

Lägg efter `const weakAreas = ...`:

```typescript
  const xpData = xpProgress(p.xp ?? 0);
```

- [ ] **Steg 3: Lägg XP-kortet i JSX**

Infoga detta block direkt efter stängning av stats-raden `</div>` (efter de tre stats-korten) och *före* Score + Domains-raden:

```tsx
        {/* XP & Nivå */}
        <div className="nf-card" style={{ marginBottom: 14, padding: "16px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                ★ {p.xp ?? 0} XP
              </span>
              <span style={{
                fontSize: 9, padding: "2px 8px", borderRadius: 10,
                background: "#7c4dff20", border: "1px solid #7c4dff40", color: "var(--purple)",
                fontWeight: 600, textTransform: "uppercase", letterSpacing: 1,
              }}>
                Nivå {xpData.level}
              </span>
            </div>
            <span style={{ fontSize: 10, color: "var(--text-dim)" }}>
              {xpData.intoLevel} / {xpData.needed} XP till nästa nivå
            </span>
          </div>
          <div style={{ height: 4, borderRadius: 2, background: "var(--bg-elevated)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <div style={{
              width: `${xpData.pct}%`,
              height: "100%",
              background: "linear-gradient(90deg, var(--purple), var(--cyan))",
              boxShadow: "0 0 8px #7c4dff40",
              transition: "width 0.8s ease-out",
              borderRadius: 2,
            }} />
          </div>
        </div>
```

- [ ] **Steg 4: Typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

- [ ] **Steg 5: Commit**

```
git add ccna-app/components/dashboard/DashboardPage.tsx
git commit -m "feat: add XP/level progress card to dashboard"
```

---

## Task 11: Manuell verifiering

- [ ] **Steg 1: Starta dev-server**

```
cd ccna-app && npm run dev
```

Öppna `http://localhost:3000/quiz`

- [ ] **Steg 2: Verifiera Quiz-UX**

1. Välj ett svar → färg + förklaring stannar kvar (inget auto-hopp)
2. Knapp visar "Nästa fråga →" (eller "Se resultat →" på sista)
3. Tryck Enter/Space → hoppar vidare
4. Tryck A/B/C/D → väljer svar

- [ ] **Steg 3: Verifiera XP och IndexedDB**

1. Avsluta en quiz
2. DevTools → Application → IndexedDB → netforge → attempts → kontrollera att ett försök finns
3. Dashboard → XP-baren visas och värdet ökat

- [ ] **Steg 4: Verifiera resurser i resultat**

1. Svara fel på några frågor
2. Resultatsidan visar rätt domäns videoresurser under "📚 Lär dig mer"
3. "Repetera felsvar"-knappen startar ny quiz med de felsvarade frågorna

- [ ] **Steg 5: Verifiera QuizConfig repetera**

1. Gå till `/quiz`
2. Klicka "REPETERA ↺" — om historik finns startar quiz

- [ ] **Steg 6: Slutlig typkontroll**

```
cd ccna-app && npx tsc --noEmit
```

Förväntat: ingen utdata

---

## Specgranskning

| Krav | Task |
|---|---|
| Ta bort `setTimeout(onAnswer, 700)` i QuizCard | Task 6 |
| Nästa-knapp under förklaring | Task 6 |
| "Se resultat →" på sista frågan | Task 6 |
| Enter/Space fortsätter efter avslöjande | Task 6 |
| A–D väljer svar före avslöjande | Task 6 |
| `QuizCard` anropar inte `onAnswer` förrän Nästa klickas | Task 6 |
| Resurser per feldomän i QuizResults | Task 9 |
| Gruppera per domän (ingen videodublett) | Task 9 |
| "Repetera felsvar →"-knapp i resultat | Task 9 |
| `xp: number` i `AppProgress` | Task 2 |
| `lib/xp.ts` med konstanter + nivåkurva | Task 1 |
| `addXp()` i `lib/progress.ts` | Task 3 |
| XP delas ut i `recordQuizResult` | Task 3 |
| Dashboard XP/nivå-kort med progressbar | Task 10 |
| `lib/quizdb.ts` IndexedDB-wrapper | Task 5 |
| `QuizAttempt`-interface i `lib/types.ts` | Task 2 |
| `saveAttempt` vid quizslut i QuizPage | Task 7 |
| `getWrongQuestionIds` | Task 5 |
| `getQuestionsByIds` i `lib/questions.ts` | Task 4 |
| "Repetera felsvar"-val i QuizConfig | Task 8 |
| Server-säker (no-op om `indexedDB === undefined`) | Task 5 |
