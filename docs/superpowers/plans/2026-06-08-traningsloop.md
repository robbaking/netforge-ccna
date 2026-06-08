# Träningsloopen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn quiz into a real training loop — answer → see explanation → click Nästa (no auto-jump), earn XP/levels from 0, save every attempt to IndexedDB, surface learning resources for missed questions, and add a "repetera felsvar" mode.

**Architecture:** Pure XP math in `lib/xp.ts`; XP counter stored in the existing localStorage `AppProgress`; append-only quiz history in a thin IndexedDB wrapper `lib/quizdb.ts`. UI changes in the quiz components and a dashboard XP card. No new dependencies, no backend.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, localStorage, IndexedDB. Inline styles + CSS variables, existing `nf-card`/`glow-bar`/`nf-btn-*` classes.

Spec: `docs/superpowers/specs/2026-06-08-traningsloop-design.md`.

---

## Testing note (read first)

No test runner (no Jest/Vitest). Verification uses:
- **Pure logic** (`lib/xp.ts`): ad-hoc `npx tsx` assertion script that exits non-zero on failure.
- **Types:** `npx tsc --noEmit` after every task (safe while `npm run dev` runs — does NOT touch `.next/`).
- **UI/runtime:** `curl` for 200s + manual browser checks.

**Never run `npm run build` while `npm run dev` is running** — it corrupts `.next/`. If you see `Cannot find module './XXX.js'`: stop dev → delete `.next/` → restart dev.

This is a git repo (`origin` = robbaking/netforge-ccna, branch `master`). Commit after each task.

---

## File Structure

| File | Responsibility |
|---|---|
| `lib/xp.ts` | **Create.** XP constants + pure `levelFromXp`/`xpForLevel`/`xpProgress`. |
| `lib/quizdb.ts` | **Create.** IndexedDB wrapper for the `attempts` store. |
| `components/dashboard/XpCard.tsx` | **Create.** Level + XP + progress bar card. |
| `lib/types.ts` | **Modify.** Add `xp` to `AppProgress`; add `QuizAttempt`. |
| `lib/progress.ts` | **Modify.** Default `xp`, normalize on read, `addXp()`, award XP in `recordQuizResult`. |
| `lib/questions.ts` | **Modify.** `getQuestionsByIds()`. |
| `components/quiz/QuizCard.tsx` | **Modify.** Remove auto-advance; Nästa button; Enter/Space. |
| `components/quiz/QuizPage.tsx` | **Modify.** `isLast`, save attempt, `startRepeat()`, QuizState domain/difficulty. |
| `components/quiz/QuizResults.tsx` | **Modify.** Resources per missed domain + repeat button. |
| `components/quiz/QuizConfig.tsx` | **Modify.** "Repetera felsvar" button (`onStartRepeat`). |
| `components/dashboard/DashboardPage.tsx` | **Modify.** Render `XpCard`. |
| `components/subnetting/SubnetTrainer.tsx` | **Modify.** Award subnetting XP. |
| `components/topology/TopologyPage.tsx` | **Modify.** Award topology-lab XP. |

---

## Task 1: XP logic module

**Files:**
- Create: `lib/xp.ts`
- Test (ad-hoc): `lib/xp.check.mts` (temporary, deleted in Step 4)

- [ ] **Step 1: Write `lib/xp.ts`**

```typescript
// XP-konstanter och nivåkurva. Ren logik, ingen DOM — testbar.

export const XP = {
  correctAnswer: 10,   // per rätt svar i quiz
  quizComplete: 50,    // per avklarad quiz
  subnettingRound: 30, // per kontrollerad subnetting-runda
  topologyLab: 40,     // per topologi-labb markerad klar
} as const;

// Nivå från XP (kvadratisk kurva). Lvl 1: 0–99, Lvl 2: 100–399, Lvl 3: 400–899 …
export function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 100)) + 1;
}

// Kumulativ XP vid en nivås start.
export function xpForLevel(level: number): number {
  return (level - 1) ** 2 * 100;
}

export interface XpProgress {
  level: number;
  intoLevel: number; // XP in i nuvarande nivå
  needed: number;    // XP som krävs för att klara nuvarande nivå
  pct: number;       // 0–100 mot nästa nivå
}

export function xpProgress(xp: number): XpProgress {
  const level = levelFromXp(xp);
  const start = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const intoLevel = Math.max(0, xp) - start;
  const needed = next - start;
  return { level, intoLevel, needed, pct: Math.round((intoLevel / needed) * 100) };
}
```

- [ ] **Step 2: Write `lib/xp.check.mts`**

```typescript
import { XP, levelFromXp, xpForLevel, xpProgress } from "./xp";

function assert(cond: boolean, msg: string) {
  if (!cond) { console.error("FAIL:", msg); process.exit(1); }
}

assert(levelFromXp(0) === 1, "0 -> lvl1");
assert(levelFromXp(99) === 1, "99 -> lvl1");
assert(levelFromXp(100) === 2, "100 -> lvl2");
assert(levelFromXp(399) === 2, "399 -> lvl2");
assert(levelFromXp(400) === 3, "400 -> lvl3");
assert(levelFromXp(900) === 4, "900 -> lvl4");

assert(xpForLevel(1) === 0, "lvl1 starts 0");
assert(xpForLevel(2) === 100, "lvl2 starts 100");
assert(xpForLevel(3) === 400, "lvl3 starts 400");

const a = xpProgress(0);
assert(a.level === 1 && a.intoLevel === 0 && a.needed === 100 && a.pct === 0, "xpProgress(0)");
const b = xpProgress(150);
assert(b.level === 2 && b.intoLevel === 50 && b.needed === 300 && b.pct === 17, "xpProgress(150)");

assert(XP.correctAnswer === 10 && XP.quizComplete === 50, "constants");

console.log("ALL XP CHECKS PASSED");
```

- [ ] **Step 3: Run it (expect pass)**

Run: `cd ccna-app && npx tsx lib/xp.check.mts`
Expected: `ALL XP CHECKS PASSED` (exit 0). If `FAIL: ...`, fix `lib/xp.ts` and re-run.

- [ ] **Step 4: Delete the temp script + typecheck**

Run: `cd ccna-app && rm lib/xp.check.mts && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
cd ccna-app && git add lib/xp.ts && git commit -m "feat(xp): add XP constants + level curve (pure logic)"
```

---

## Task 2: Wire XP into types + progress

**Files:**
- Modify: `lib/types.ts`
- Modify: `lib/progress.ts`

- [ ] **Step 1: Add `xp` to `AppProgress`**

In `lib/types.ts`, change:
```typescript
export interface AppProgress {
  domains: Partial<Record<Domain, DomainProgress>>;
  activities: Activity[];
  streak: number;
  lastActiveDate: string;
  studyTimeSeconds: number;
}
```
to (add the `xp` line):
```typescript
export interface AppProgress {
  domains: Partial<Record<Domain, DomainProgress>>;
  activities: Activity[];
  streak: number;
  lastActiveDate: string;
  studyTimeSeconds: number;
  xp: number;
}
```

- [ ] **Step 2: Default + normalize + award in `lib/progress.ts`**

(a) Add the import at the top, under the existing `import type` line:
```typescript
import { XP } from "./xp";
```

(b) Normalize reads so old saved data without `xp` gets defaults. Replace:
```typescript
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    return JSON.parse(raw) as AppProgress;
```
with:
```typescript
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<AppProgress>;
    return { ...defaultProgress(), ...parsed };
```

(c) Add `xp: 0` to `defaultProgress()`. Replace:
```typescript
  return {
    domains: {},
    activities: [],
    streak: 0,
    lastActiveDate: "",
    studyTimeSeconds: 0,
  };
```
with:
```typescript
  return {
    domains: {},
    activities: [],
    streak: 0,
    lastActiveDate: "",
    studyTimeSeconds: 0,
    xp: 0,
  };
```

(d) Award quiz XP. In `recordQuizResult`, immediately BEFORE the final `saveProgress(p);`, add:
```typescript
  p.xp = (p.xp ?? 0) + correct * XP.correctAnswer + XP.quizComplete;
```

(e) Add an `addXp` helper. After the `addStudyTime` function, add:
```typescript
export function addXp(amount: number): void {
  const p = getProgress();
  p.xp = (p.xp ?? 0) + amount;
  saveProgress(p);
}
```

- [ ] **Step 3: Typecheck**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd ccna-app && git add lib/types.ts lib/progress.ts && git commit -m "feat(xp): store xp in AppProgress, award on quiz, add addXp()"
```

---

## Task 3: Dashboard XP/level card

**Files:**
- Create: `components/dashboard/XpCard.tsx`
- Modify: `components/dashboard/DashboardPage.tsx`

- [ ] **Step 1: Write `components/dashboard/XpCard.tsx`**

```tsx
"use client";
import { xpProgress } from "@/lib/xp";

export default function XpCard({ xp }: { xp: number }) {
  const { level, intoLevel, needed, pct } = xpProgress(xp);
  return (
    <div className="nf-card" style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        width: 64, height: 64, borderRadius: "50%", flexShrink: 0,
        background: "linear-gradient(135deg, #00e5ff20, #7c4dff20)", border: "1px solid #00e5ff30",
      }}>
        <span style={{ fontSize: 9, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1 }}>Nivå</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: "var(--cyan)" }}>{level}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: "var(--text)", fontWeight: 600 }}>★ {xp} XP</span>
          <span style={{ fontSize: 10, color: "var(--text-dim)" }}>{intoLevel}/{needed} till nivå {level + 1}</span>
        </div>
        <div className="glow-bar-track">
          <div className="glow-bar-fill" style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            boxShadow: "0 0 12px #00e5ff50",
          }} />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Render it in `DashboardPage.tsx`**

(a) Add the import after `import QuickActions from "./QuickActions";`:
```typescript
import XpCard from "./XpCard";
```

(b) Insert the card between the stats row and the Score+Domains row. Find:
```tsx
          ))}
        </div>

        {/* Score + Domains row */}
```
and replace with:
```tsx
          ))}
        </div>

        {/* XP / level */}
        <div style={{ marginBottom: 14 }}>
          <XpCard xp={p.xp ?? 0} />
        </div>

        {/* Score + Domains row */}
```

- [ ] **Step 3: Typecheck**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd ccna-app && git add components/dashboard/XpCard.tsx components/dashboard/DashboardPage.tsx && git commit -m "feat(xp): dashboard level + XP progress card"
```

---

## Task 4: Quiz UX — no auto-advance, manual Nästa

**Files:**
- Modify: `components/quiz/QuizCard.tsx`
- Modify: `components/quiz/QuizPage.tsx`

- [ ] **Step 1: `QuizCard` — add `isLast` prop**

In `components/quiz/QuizCard.tsx`, change:
```typescript
interface Props {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (idx: number) => void;
}
```
to:
```typescript
interface Props {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (idx: number) => void;
  isLast: boolean;
}
```
and the signature:
```typescript
export default function QuizCard({ question, selectedAnswer, onAnswer }: Props) {
```
to:
```typescript
export default function QuizCard({ question, onAnswer, isLast }: Props) {
```
(`selectedAnswer` is unused after this change — removing it from the destructure avoids an unused-var lint.)

- [ ] **Step 2: `QuizCard` — remove auto-advance, add `handleNext`**

Replace:
```typescript
  function handlePick(idx: number) {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
    setTimeout(() => onAnswer(idx), 700);
  }
```
with:
```typescript
  function handlePick(idx: number) {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
  }

  function handleNext() {
    if (chosen === null) return;
    onAnswer(chosen);
  }
```

- [ ] **Step 3: `QuizCard` — keyboard: A–D to pick, Enter/Space to continue**

Replace:
```typescript
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const idx = KEYS.indexOf(e.key.toLowerCase());
      if (idx >= 0 && idx < question.options.length && !revealed) {
        handlePick(idx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [question, revealed]);
```
with:
```typescript
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!revealed) {
        const idx = KEYS.indexOf(e.key.toLowerCase());
        if (idx >= 0 && idx < question.options.length) handlePick(idx);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [question, revealed, chosen]);
```

- [ ] **Step 4: `QuizCard` — add the Nästa button after the explanation**

Find the closing of the explanation block followed by the keyframes style:
```tsx
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
```
Replace with:
```tsx
        </div>
      )}

      {revealed && (
        <button onClick={handleNext} className="nf-btn-primary"
          style={{ marginTop: 14, width: "100%", padding: "12px", fontSize: 12 }}>
          {isLast ? "Se resultat →" : "Nästa fråga →"}  <span style={{ opacity: 0.6, fontSize: 10 }}>(Enter)</span>
        </button>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
```

- [ ] **Step 5: `QuizPage` — pass `isLast`, drop the 800ms delay**

In `components/quiz/QuizPage.tsx`, replace the `handleAnswer` function:
```typescript
  function handleAnswer(idx: number) {
    if (!quiz) return;
    const updated = [...quiz.answers];
    updated[quiz.current] = idx;
    if (quiz.current + 1 >= quiz.questions.length) {
      // Last question answered — wait for next tick then go to results
      setQuiz({ ...quiz, answers: updated });
      setTimeout(() => {
        const correct = updated.filter((a, i) => a === quiz.questions[i].correct).length;
        const dom = quiz.questions[0].domain;
        recordQuizResult(dom, correct, quiz.questions.length);
        setPhase("results");
      }, 800);
    } else {
      setQuiz({ ...quiz, answers: updated, current: quiz.current + 1 });
    }
  }
```
with:
```typescript
  function handleAnswer(idx: number) {
    if (!quiz) return;
    const updated = [...quiz.answers];
    updated[quiz.current] = idx;
    if (quiz.current + 1 >= quiz.questions.length) {
      const correct = updated.filter((a, i) => a === quiz.questions[i].correct).length;
      recordQuizResult(quiz.questions[0].domain, correct, quiz.questions.length);
      setQuiz({ ...quiz, answers: updated });
      setPhase("results");
    } else {
      setQuiz({ ...quiz, answers: updated, current: quiz.current + 1 });
    }
  }
```

- [ ] **Step 6: `QuizPage` — pass `isLast` to `QuizCard`**

Replace:
```tsx
        <QuizCard
          question={quiz.questions[quiz.current]}
          selectedAnswer={quiz.answers[quiz.current]}
          onAnswer={handleAnswer}
        />
```
with:
```tsx
        <QuizCard
          question={quiz.questions[quiz.current]}
          selectedAnswer={quiz.answers[quiz.current]}
          onAnswer={handleAnswer}
          isLast={quiz.current + 1 >= quiz.questions.length}
        />
```

- [ ] **Step 7: Typecheck + runtime**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.
Then (dev server running) `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/quiz` → `200`.

- [ ] **Step 8: Manual check**

Open `/quiz`, start a quiz. Pick an answer → colors + explanation appear and **stay** (no jump). A "Nästa fråga →" button shows; Enter advances. Last question button says "Se resultat →".

- [ ] **Step 9: Commit**

```bash
cd ccna-app && git add components/quiz/QuizCard.tsx components/quiz/QuizPage.tsx && git commit -m "feat(quiz): manual Nästa step, keep explanation, no auto-advance"
```

---

## Task 5: Quiz attempt history (IndexedDB)

**Files:**
- Modify: `lib/types.ts`
- Create: `lib/quizdb.ts`
- Modify: `lib/questions.ts`
- Modify: `components/quiz/QuizPage.tsx`

- [ ] **Step 1: Add `QuizAttempt` to `lib/types.ts`**

Append at the end of `lib/types.ts`:
```typescript
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

- [ ] **Step 2: Write `lib/quizdb.ts`**

```typescript
"use client";
import type { QuizAttempt } from "./types";

const DB_NAME = "netforge";
const STORE = "attempts";

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
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

export async function saveAttempt(a: QuizAttempt): Promise<void> {
  if (typeof indexedDB === "undefined") return;
  const db = await open();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(a);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export async function getAttempts(limit = 50): Promise<QuizAttempt[]> {
  if (typeof indexedDB === "undefined") return [];
  const db = await open();
  const all = await new Promise<QuizAttempt[]>((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result as QuizAttempt[]);
    req.onerror = () => reject(req.error);
  });
  db.close();
  return all.sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

// Unika fråge-id som svarats fel på, senaste först.
export async function getWrongQuestionIds(limit = 30): Promise<string[]> {
  const attempts = await getAttempts(100);
  const ids: string[] = [];
  for (const a of attempts) {
    for (const r of a.results) {
      if (!r.correct && !ids.includes(r.questionId)) {
        ids.push(r.questionId);
        if (ids.length >= limit) return ids;
      }
    }
  }
  return ids;
}
```

- [ ] **Step 3: `getQuestionsByIds` in `lib/questions.ts`**

Append at the end of `lib/questions.ts`:
```typescript
export function getQuestionsByIds(ids: string[]): Question[] {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  return ids
    .map((id) => byId.get(id))
    .filter((q): q is Question => q !== undefined);
}
```

- [ ] **Step 4: `QuizPage` — record domain/difficulty + save attempt**

(a) Imports — replace:
```typescript
import { getQuestions } from "@/lib/questions";
import { recordQuizResult } from "@/lib/progress";
import { DOMAINS } from "@/lib/types";
import type { Question, Domain, Difficulty } from "@/lib/types";
```
with:
```typescript
import { getQuestions } from "@/lib/questions";
import { recordQuizResult } from "@/lib/progress";
import { saveAttempt } from "@/lib/quizdb";
import { DOMAINS } from "@/lib/types";
import type { Question, Domain, Difficulty, QuizAttempt } from "@/lib/types";
```

(b) Extend `QuizState` — replace:
```typescript
interface QuizState {
  questions: Question[];
  current: number;
  answers: (number | null)[];
  startTime: number;
}
```
with:
```typescript
interface QuizState {
  questions: Question[];
  current: number;
  answers: (number | null)[];
  startTime: number;
  domain: Domain | "all";
  difficulty: Difficulty | "all";
}
```

(c) `startQuiz` — record domain/difficulty. Replace:
```typescript
  function startQuiz(domain: Domain | "all", count: number, difficulty: Difficulty | "all") {
    const qs = getQuestions({ domain, count, difficulty });
    if (!qs.length) return;
    setQuiz({ questions: qs, current: 0, answers: new Array(qs.length).fill(null), startTime: Date.now() });
    setPhase("quiz");
  }
```
with:
```typescript
  function startQuiz(domain: Domain | "all", count: number, difficulty: Difficulty | "all") {
    const qs = getQuestions({ domain, count, difficulty });
    if (!qs.length) return;
    setQuiz({ questions: qs, current: 0, answers: new Array(qs.length).fill(null), startTime: Date.now(), domain, difficulty });
    setPhase("quiz");
  }
```

(d) Save the attempt at quiz end. In `handleAnswer` (the version from Task 4), inside the `if (quiz.current + 1 >= quiz.questions.length)` branch, immediately AFTER the `recordQuizResult(...)` line, add:
```typescript
      const attempt: QuizAttempt = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        domain: quiz.domain,
        difficulty: quiz.difficulty,
        total: quiz.questions.length,
        correct,
        results: quiz.questions.map((q, i) => ({
          questionId: q.id,
          chosen: updated[i],
          correct: updated[i] === q.correct,
        })),
      };
      void saveAttempt(attempt);
```

- [ ] **Step 5: Typecheck**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 6: Manual check**

Finish a quiz. In DevTools → Application → IndexedDB → `netforge` → `attempts`, confirm a record exists with `results[]`.

- [ ] **Step 7: Commit**

```bash
cd ccna-app && git add lib/types.ts lib/quizdb.ts lib/questions.ts components/quiz/QuizPage.tsx && git commit -m "feat(quiz): save attempts to IndexedDB + getQuestionsByIds"
```

---

## Task 6: Results resources + "repetera felsvar"

**Files:**
- Modify: `components/quiz/QuizResults.tsx`
- Modify: `components/quiz/QuizConfig.tsx`
- Modify: `components/quiz/QuizPage.tsx`

- [ ] **Step 1: `QuizResults` — props + resources import**

In `components/quiz/QuizResults.tsx`:

(a) Add the resources import after the existing imports:
```typescript
import { resources } from "@/data/resources";
```

(b) Add `onRepeat` to `Props`:
```typescript
interface Props {
  questions: Question[];
  answers: (number | null)[];
  correct: number;
  elapsed: number;
  onRestart: () => void;
  onRepeat?: () => void;
}
```
and the signature:
```typescript
export default function QuizResults({ questions, answers, correct, elapsed, onRestart, onRepeat }: Props) {
```

- [ ] **Step 2: `QuizResults` — compute misses + render resources card**

Just AFTER the `const offset = circ * (1 - pct / 100);` line, add:
```typescript
  const missedDomains = [
    ...new Set(questions.filter((q, i) => answers[i] !== q.correct).map((q) => q.domain)),
  ];
```

Then, between the Score card's closing `</div>` and the `{/* Question review */}` block, insert:
```tsx
      {/* Learning resources for missed questions */}
      {missedDomains.length > 0 && (
        <div className="nf-card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2 }}>
              📚 Läranderesurser för dina felsvar
            </span>
            {onRepeat && (
              <button onClick={onRepeat} className="nf-btn-secondary" style={{ fontSize: 10 }}>
                Repetera felsvar →
              </button>
            )}
          </div>
          {missedDomains.map((d) => {
            const vids = resources.filter((r) => r.domain === d);
            return (
              <div key={d} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: "var(--cyan)", fontWeight: 600, marginBottom: 6 }}>
                  {d.replace(/-/g, " ")}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {vids.map((v) => (
                    <a key={v.id} href={v.videoUrl} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 10.5, color: "var(--text-dim)", textDecoration: "none", display: "flex", gap: 8 }}>
                      <span style={{ color: "var(--purple)", flexShrink: 0 }}>▶</span>
                      <span><span style={{ color: "var(--text)" }}>{v.topic}</span> — {v.description}</span>
                    </a>
                  ))}
                  {vids.length === 0 && (
                    <span style={{ fontSize: 10, color: "var(--muted)" }}>Inga videor för denna domän ännu.</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
```

- [ ] **Step 3: `QuizConfig` — optional "Repetera felsvar" button**

In `components/quiz/QuizConfig.tsx`:

(a) Props + signature — replace:
```typescript
interface Props {
  onStart: (domain: Domain | "all", count: number, difficulty: Difficulty | "all") => void;
  initialDomain?: Domain | "all";
}
```
with:
```typescript
interface Props {
  onStart: (domain: Domain | "all", count: number, difficulty: Difficulty | "all") => void;
  initialDomain?: Domain | "all";
  onStartRepeat?: () => void;
}
```
and:
```typescript
export default function QuizConfig({ onStart, initialDomain = "all" }: Props) {
```
with:
```typescript
export default function QuizConfig({ onStart, initialDomain = "all", onStartRepeat }: Props) {
```

(b) Add the button next to "STARTA QUIZ". Replace:
```tsx
        <button className="nf-btn-primary" style={{ padding: "10px 28px", fontSize: 12 }} onClick={() => onStart(domain, count, difficulty)}>
          STARTA QUIZ ▶
        </button>
```
with:
```tsx
        <div style={{ display: "flex", gap: 10 }}>
          {onStartRepeat && (
            <button className="nf-btn-secondary" style={{ padding: "10px 18px", fontSize: 11 }} onClick={onStartRepeat}>
              Repetera felsvar
            </button>
          )}
          <button className="nf-btn-primary" style={{ padding: "10px 28px", fontSize: 12 }} onClick={() => onStart(domain, count, difficulty)}>
            STARTA QUIZ ▶
          </button>
        </div>
```

- [ ] **Step 4: `QuizPage` — `startRepeat()` + wire props**

In `components/quiz/QuizPage.tsx`:

(a) Imports — replace:
```typescript
import { getQuestions } from "@/lib/questions";
```
with:
```typescript
import { getQuestions, getQuestionsByIds } from "@/lib/questions";
```
and replace:
```typescript
import { saveAttempt } from "@/lib/quizdb";
```
with:
```typescript
import { saveAttempt, getWrongQuestionIds } from "@/lib/quizdb";
```

(b) Add `startRepeat` right after `startQuiz`:
```typescript
  async function startRepeat() {
    const ids = await getWrongQuestionIds(20);
    const qs = getQuestionsByIds(ids);
    if (!qs.length) {
      alert("Inga felsvar sparade än — gör ett quiz först!");
      return;
    }
    setQuiz({ questions: qs, current: 0, answers: new Array(qs.length).fill(null), startTime: Date.now(), domain: "all", difficulty: "all" });
    setPhase("quiz");
  }
```

(c) Pass to `QuizConfig` — replace:
```tsx
        <QuizConfig onStart={startQuiz} initialDomain={initialDomain} />
```
with:
```tsx
        <QuizConfig onStart={startQuiz} initialDomain={initialDomain} onStartRepeat={startRepeat} />
```

(d) Pass to `QuizResults` — replace:
```tsx
        <QuizResults
          questions={quiz.questions}
          answers={quiz.answers}
          correct={correct}
          elapsed={Math.round((Date.now() - quiz.startTime) / 1000)}
          onRestart={restart}
        />
```
with:
```tsx
        <QuizResults
          questions={quiz.questions}
          answers={quiz.answers}
          correct={correct}
          elapsed={Math.round((Date.now() - quiz.startTime) / 1000)}
          onRestart={restart}
          onRepeat={startRepeat}
        />
```

- [ ] **Step 5: Typecheck + runtime**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.
Then `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/quiz` → `200`.

- [ ] **Step 6: Manual check**

Finish a quiz with at least one wrong answer → results show a "📚 Läranderesurser"-card grouped by missed domain with video links + "Repetera felsvar →". The config screen also shows a "Repetera felsvar" button; clicking it (after a wrong answer exists) builds a quiz of previously-missed questions. With no history it alerts "Inga felsvar sparade än".

- [ ] **Step 7: Commit**

```bash
cd ccna-app && git add components/quiz/QuizResults.tsx components/quiz/QuizConfig.tsx components/quiz/QuizPage.tsx && git commit -m "feat(quiz): post-quiz resources for misses + repetera-felsvar mode"
```

---

## Task 7: XP from subnetting + topology labs

**Files:**
- Modify: `components/subnetting/SubnetTrainer.tsx`
- Modify: `components/topology/TopologyPage.tsx`

- [ ] **Step 1: Subnetting XP**

In `components/subnetting/SubnetTrainer.tsx`:

(a) Add imports after the existing `import type { SubnetResult } ...` line:
```typescript
import { addXp } from "@/lib/progress";
import { XP } from "@/lib/xp";
```

(b) In `check()`, immediately AFTER `setScore(s => ({ correct: s.correct + numCorrect, total: s.total + 4 }));`, add:
```typescript
    addXp(XP.subnettingRound);
```

- [ ] **Step 2: Topology-lab XP**

In `components/topology/TopologyPage.tsx`:

(a) Add imports after the existing topology imports near the top (after `import LabDocument from "./LabDocument";`):
```typescript
import { addXp } from "@/lib/progress";
import { XP } from "@/lib/xp";
```

(b) Add a one-time award guard. Just after the line `const [view, setView]             = useState<'diagram' | 'lab'>('diagram')`, add:
```typescript
  const labAwarded = useRef(false)
```
(`useRef` is already imported in this file.)

(c) Reset the guard on generate. In `generate`, change:
```typescript
  const generate = useCallback(() => {
    setTopo(generateTopology(protocol, difficulty))
    setDone([]); setSelected(null)
  }, [protocol, difficulty])
```
to:
```typescript
  const generate = useCallback(() => {
    setTopo(generateTopology(protocol, difficulty))
    setDone([]); setSelected(null)
    labAwarded.current = false
  }, [protocol, difficulty])
```

(d) Award when all tasks complete. Replace:
```typescript
  const toggleTask = (i: number) => setDone(prev => {
    const next = [...prev]; next[i] = !next[i]; return next
  })
```
with:
```typescript
  const toggleTask = (i: number) => setDone(prev => {
    const next = [...prev]; next[i] = !next[i]
    const doneCount = next.filter(Boolean).length
    if (doneCount === topo.tasks.length && topo.tasks.length > 0 && !labAwarded.current) {
      labAwarded.current = true
      addXp(XP.topologyLab)
    }
    return next
  })
```

- [ ] **Step 3: Typecheck**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 4: Manual check**

Subnetting: answer a round → click Kontrollera → dashboard XP rises by 30.
Topology: mark all tasks of one lab done → dashboard XP rises by 40 once (not again on re-toggle until "Generera ny").

- [ ] **Step 5: Commit**

```bash
cd ccna-app && git add components/subnetting/SubnetTrainer.tsx components/topology/TopologyPage.tsx && git commit -m "feat(xp): award XP for subnetting rounds and completed topology labs"
```

---

## Task 8: Final verification

- [ ] **Step 1: Full typecheck**

Run: `cd ccna-app && npx tsc --noEmit`
Expected: no output.

- [ ] **Step 2: Runtime smoke** (dev server running)

```bash
for u in /quiz /dashboard /subnetting /topologier; do \
  printf "%s -> " "$u"; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3000$u"; done
```
Expected: all `200`.

- [ ] **Step 3: End-to-end walkthrough**

1. `/quiz` → answer a question → explanation stays, Nästa works (Enter too), last says "Se resultat →".
2. Finish with ≥1 wrong → results show 📚 resources per missed domain + "Repetera felsvar →".
3. `/dashboard` → XP increased, level bar moved.
4. DevTools → IndexedDB → `netforge/attempts` → attempt saved.
5. Back on `/quiz` config → "Repetera felsvar" builds a quiz from missed questions.

- [ ] **Step 4: Push**

```bash
cd ccna-app && git push origin master
```

---

## Self-review (by plan author)

- **Spec coverage:** Part 1 quiz-UX → Task 4. Part 2 results resources + repeat → Task 6. Part 3 XP/levels → Tasks 1–3 (+ Task 7 for subnetting/topology sources). Part 4 history + repetera-felsvar → Tasks 5–6. ✅
- **Placeholder scan:** none — every step has full code/commands.
- **Type/name consistency:** `XP`, `levelFromXp`, `xpForLevel`, `xpProgress`/`XpProgress` consistent across `lib/xp.ts`, `XpCard`, Task 7. `QuizAttempt` shape identical in `lib/types.ts`, `lib/quizdb.ts`, and the `QuizPage` builder. `saveAttempt`/`getWrongQuestionIds`/`getQuestionsByIds` names match between definition and call sites. `onRepeat` (QuizResults) and `onStartRepeat` (QuizConfig) are distinct and wired to the same `startRepeat`. `isLast` prop added in QuizCard and passed in QuizPage. ✅
