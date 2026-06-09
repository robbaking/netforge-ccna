# Core Progression System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the full core progression redesign: XP overhaul, score fix, quiz/prov separation, sequential lab locking with config-paste verification, and quiz-to-resources linking.

**Architecture:** XP and progress logic lives in `lib/` and is shared by quiz, prov, studypath, and topology. Lab verification is a pure function in `lib/labverify.ts` that each lab defines its own checks for. The studypath's sequential locking reads from the existing `checklistprogress.ts` store.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · localStorage · no test framework → verify with `npx tsc --noEmit` + manual browser check

---

## File Map

**Modified:**
- `lib/xp.ts` — new curve, rewards, difficulty XP, streak multiplier, level titles
- `lib/progress.ts` — add `finishQuiz`, remove XP from `recordQuizResult`
- `lib/types.ts` — add `DOMAIN_WEIGHTS`
- `lib/checklistprogress.ts` — add `canUnlockItem`
- `lib/labprogress.ts` — re-export for checklist sync (verify only)
- `data/labcatalog.ts` — add `VerificationCheck` type + `verificationChecks` on every lab + new `vlan-basic` lab
- `data/phasechecklist.ts` — add `labId` and `verificationTarget` to `ChecklistItem`
- `components/dashboard/DashboardPage.tsx` — weighted `calcOverall`
- `components/quiz/QuizPage.tsx` — use `finishQuiz` instead of per-domain loop
- `components/quiz/QuizCard.tsx` — add 📚 link in wrong-answer explanation
- `components/studyvag/StudyPathPage.tsx` — sequential locking + "Öppna lab →" buttons
- `components/topology/LabCard.tsx` — add verification panel
- `components/layout/Sidebar.tsx` — add Prov nav item
- `components/resurser/ResurserPage.tsx` — accept `?domain=` query param

**Created:**
- `lib/labverify.ts` — `verifyConfig(input, checks)` pure function
- `app/prov/page.tsx` — thin route wrapper
- `components/prov/ProvPage.tsx` — state machine (intro → exam → results)
- `components/prov/ProvTimer.tsx` — 120-min countdown
- `components/prov/ProvResults.tsx` — domain breakdown + question review

---

## Task 1: Rewrite lib/xp.ts

**Files:**
- Modify: `lib/xp.ts`

- [ ] **Replace the entire file** with the new XP system:

```typescript
// lib/xp.ts
import type { Difficulty } from "@/lib/types";

export const XP = {
  correctEasy: 5,
  correctNormal: 10,
  correctHard: 20,
  quizComplete: 50,
  perfectQuizBonus: 100,
  labComplete: 75,
  provComplete: 200,
  subnettingRound: 15,
} as const;

export function xpForCorrect(difficulty: Difficulty): number {
  if (difficulty === "easy") return XP.correctEasy;
  if (difficulty === "hard") return XP.correctHard;
  return XP.correctNormal;
}

export function xpForLevel(level: number): number {
  return 500 * (level - 1) ** 2;
}

export function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 500)) + 1;
}

export function streakMultiplier(streak: number): number {
  return 1 + Math.min(streak * 0.1, 0.5);
}

const LEVEL_TITLE_THRESHOLDS: [number, string][] = [
  [50, "CCNA Master"],
  [40, "CCNA Expert"],
  [35, "CCNA Specialist"],
  [30, "CCNA Kandidat"],
  [25, "Senior Nätverkare"],
  [20, "Junior CCNA"],
  [15, "Nätverkare"],
  [10, "Tekniker"],
  [5, "Elev"],
  [1, "Nybörjare"],
];

export function getLevelTitle(level: number): string {
  for (const [threshold, title] of LEVEL_TITLE_THRESHOLDS) {
    if (level >= threshold) return title;
  }
  return "Nybörjare";
}

export function xpProgress(xp: number): {
  level: number;
  intoLevel: number;
  needed: number;
  pct: number;
  title: string;
} {
  const level = levelFromXp(xp);
  const start = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const intoLevel = xp - start;
  const needed = next - start;
  return {
    level,
    intoLevel,
    needed,
    pct: Math.round((intoLevel / needed) * 100),
    title: getLevelTitle(level),
  };
}
```

- [ ] **Verify types:**
```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Commit:**
```bash
git add lib/xp.ts
git commit -m "feat(xp): new level curve 500*(n-1)^2, difficulty-based rewards, streak multiplier, level titles"
```

---

## Task 2: Add DOMAIN_WEIGHTS to lib/types.ts

**Files:**
- Modify: `lib/types.ts`

- [ ] **Add after the `DOMAINS` array** (after line 16):

```typescript
export const DOMAIN_WEIGHTS: Record<Domain, number> = {
  "network-fundamentals":      0.20,
  "network-access":            0.20,
  "ip-connectivity":           0.25,
  "ip-services":               0.10,
  "security-fundamentals":     0.15,
  "automation-programmability": 0.10,
};
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add lib/types.ts
git commit -m "feat(types): add DOMAIN_WEIGHTS for CCNA 200-301 exam weighting"
```

---

## Task 3: Fix lib/progress.ts — add finishQuiz, clean up recordQuizResult

**Files:**
- Modify: `lib/progress.ts`

- [ ] **Replace the entire file** (the key changes: `recordQuizResult` no longer awards XP or updates activity/streak; new `finishQuiz` does all of that once per quiz):

```typescript
"use client";
import { XP, streakMultiplier, xpForCorrect } from "./xp";
import type { AppProgress, Domain, Activity, Difficulty } from "./types";

const KEY = "netforge_progress";

export function getProgress(): AppProgress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    return JSON.parse(raw) as AppProgress;
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: AppProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function recordQuizResult(
  domain: Domain,
  correct: number,
  total: number
): void {
  const p = getProgress();
  const existing = p.domains[domain] ?? { answered: 0, correct: 0, lastStudied: "" };
  p.domains[domain] = {
    answered: existing.answered + total,
    correct: existing.correct + correct,
    lastStudied: new Date().toISOString(),
  };
  saveProgress(p);
}

export interface QuizAnswerDetail {
  difficulty: Difficulty;
  correct: boolean;
}

export function finishQuiz(
  domainResults: Map<Domain, { correct: number; total: number }>,
  answers: QuizAnswerDetail[],
  allCorrect: number,
  allTotal: number
): void {
  const p = getProgress();

  // Update per-domain stats (all in one read-modify-write)
  domainResults.forEach((stats, domain) => {
    const existing = p.domains[domain] ?? { answered: 0, correct: 0, lastStudied: "" };
    p.domains[domain] = {
      answered: existing.answered + stats.total,
      correct: existing.correct + stats.correct,
      lastStudied: new Date().toISOString(),
    };
  });

  // XP: sum difficulty-based XP for correct answers + flat completion bonus
  const xpFromAnswers = answers.reduce(
    (sum, a) => sum + (a.correct ? xpForCorrect(a.difficulty) : 0),
    0
  );
  const perfectBonus = allCorrect === allTotal && allTotal > 0 ? XP.perfectQuizBonus : 0;
  const mult = streakMultiplier(p.streak ?? 0);
  const earned = Math.round((xpFromAnswers + XP.quizComplete + perfectBonus) * mult);
  p.xp = (p.xp ?? 0) + earned;

  // Single activity entry
  const domainList = [...domainResults.keys()]
    .map(d => d.replace(/-/g, " "))
    .join(", ");
  const act: Activity = {
    type: "quiz",
    text: `Quiz · ${domainList}`,
    result: `${allCorrect}/${allTotal}`,
    good: allTotal > 0 && allCorrect / allTotal >= 0.6,
    time: new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }),
  };
  p.activities = [act, ...p.activities].slice(0, 20);

  // Streak
  const today = new Date().toDateString();
  if (p.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = p.lastActiveDate === yesterday ? (p.streak ?? 0) + 1 : 1;
    p.lastActiveDate = today;
  }

  saveProgress(p);
}

export function addStudyTime(seconds: number): void {
  const p = getProgress();
  p.studyTimeSeconds = (p.studyTimeSeconds ?? 0) + seconds;
  saveProgress(p);
}

export function addXp(amount: number): void {
  const p = getProgress();
  p.xp = (p.xp ?? 0) + amount;
  saveProgress(p);
}

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

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add lib/progress.ts
git commit -m "fix(progress): finishQuiz awards XP once per quiz with difficulty weighting; recordQuizResult is now domain-only"
```

---

## Task 4: Update QuizPage.tsx to use finishQuiz

**Files:**
- Modify: `components/quiz/QuizPage.tsx`

- [ ] **Add import** for `finishQuiz` and `QuizAnswerDetail` (replace the existing `recordQuizResult` import):

Find line:
```typescript
import { recordQuizResult } from "@/lib/progress";
```
Replace with:
```typescript
import { finishQuiz } from "@/lib/progress";
import type { QuizAnswerDetail } from "@/lib/progress";
```

- [ ] **Replace the quiz-completion block** inside `handleAnswer`. Find this block (starting at line ~72):

```typescript
      // Group by domain so mixed quizzes update each domain's progress correctly
      const domainResults = new Map<Domain, { correct: number; total: number }>();
      finalQuiz.questions.forEach((q, i) => {
        const prev = domainResults.get(q.domain) ?? { correct: 0, total: 0 };
        domainResults.set(q.domain, {
          correct: prev.correct + (updated[i] === q.correct ? 1 : 0),
          total: prev.total + 1,
        });
      });
      domainResults.forEach((stats, dom) => recordQuizResult(dom, stats.correct, stats.total));
```

Replace with:

```typescript
      // Group by domain
      const domainResults = new Map<Domain, { correct: number; total: number }>();
      const answerDetails: QuizAnswerDetail[] = finalQuiz.questions.map((q, i) => ({
        difficulty: q.difficulty,
        correct: updated[i] === q.correct,
      }));
      finalQuiz.questions.forEach((q, i) => {
        const prev = domainResults.get(q.domain) ?? { correct: 0, total: 0 };
        domainResults.set(q.domain, {
          correct: prev.correct + (updated[i] === q.correct ? 1 : 0),
          total: prev.total + 1,
        });
      });
      finishQuiz(domainResults, answerDetails, correct, finalQuiz.questions.length);
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add components/quiz/QuizPage.tsx
git commit -m "fix(quiz): use finishQuiz to prevent XP double-counting on multi-domain quizzes"
```

---

## Task 5: Fix calcOverall in DashboardPage.tsx

**Files:**
- Modify: `components/dashboard/DashboardPage.tsx`

- [ ] **Add import** for `DOMAIN_WEIGHTS` at the top. Find:
```typescript
import { DOMAINS } from "@/lib/types";
import type { AppProgress } from "@/lib/types";
```
Replace with:
```typescript
import { DOMAINS, DOMAIN_WEIGHTS } from "@/lib/types";
import type { AppProgress, Domain } from "@/lib/types";
```

- [ ] **Replace `calcOverall`** (lines 26–32):

```typescript
function calcOverall(progress: AppProgress): number {
  const entries = Object.entries(progress.domains) as [Domain, { answered: number; correct: number }][];
  if (!entries.length) return 0;

  let weightedSum = 0;
  let totalWeight = 0;
  for (const [domainId, stats] of entries) {
    if (!stats || stats.answered === 0) continue;
    const weight = DOMAIN_WEIGHTS[domainId] ?? 1 / 6;
    const pct = stats.correct / stats.answered;
    weightedSum += pct * weight;
    totalWeight += weight;
  }
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : 0;
}
```

- [ ] **Also update the `xpData` display** to show level title. Find the line with `xpProgress(p.xp ?? 0)` and wherever `xpData` is rendered, ensure the title is accessible. The `xpProgress` function now returns `title` — use it anywhere the XP card renders the level (e.g., add `{xpData.title}` next to the level number in the dashboard JSX).

- [ ] **Verify:**
```bash
npx tsc --noEmit
npm run dev
```
Open `/dashboard` → check that overall score shows a weighted % and level shows title like "Nybörjare".

- [ ] **Commit:**
```bash
git add components/dashboard/DashboardPage.tsx
git commit -m "fix(dashboard): weighted CCNA domain score + level title display"
```

---

## Task 6: Create lib/labverify.ts

**Files:**
- Create: `lib/labverify.ts`

- [ ] **Create the file:**

```typescript
// lib/labverify.ts
export interface VerificationCheck {
  id: string;
  description: string;
  pattern: string;   // regex string — compiled with flags "im"
  required: boolean;
  hint?: string;
}

export interface VerificationResult {
  check: VerificationCheck;
  passed: boolean;
}

export function verifyConfig(
  input: string,
  checks: VerificationCheck[]
): VerificationResult[] {
  return checks.map(check => {
    try {
      const regex = new RegExp(check.pattern, "im");
      return { check, passed: regex.test(input) };
    } catch {
      return { check, passed: false };
    }
  });
}

export function isVerified(results: VerificationResult[]): boolean {
  return results.every(r => !r.check.required || r.passed);
}
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add lib/labverify.ts
git commit -m "feat(labverify): pure config verification engine with regex checks"
```

---

## Task 7: Add verificationChecks to data/labcatalog.ts

**Files:**
- Modify: `data/labcatalog.ts`

- [ ] **Add import** at the top of the file:

```typescript
import type { VerificationCheck } from "@/lib/labverify";
```

- [ ] **Update `LabEntry` interface** to include the optional field:

```typescript
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
  verificationChecks?: VerificationCheck[];
}
```

- [ ] **Add `verificationChecks` to each lab.** Add the `verificationChecks` property to each entry in `LAB_CATALOG`:

**`static-routes-basic`** and **`static-routes-advanced`:**
```typescript
verificationChecks: [
  { id: "ip-route", description: "Statisk route konfigurerad", pattern: "ip route \\d+\\.\\d+\\.\\d+\\.\\d+", required: true, hint: "Lägg till: ip route <dest> <mask> <next-hop>" },
  { id: "ip-addr", description: "IP-adress på interface", pattern: "ip address \\d+\\.\\d+\\.\\d+\\.\\d+", required: true, hint: "Lägg till ip address på rätt interface" },
  { id: "no-shut", description: "Interface aktiverat", pattern: "no shutdown", required: true, hint: "Glöm inte no shutdown" },
],
```

**`vlans-roas`** and **`vlans-l3switch`:**
```typescript
verificationChecks: [
  { id: "vlan-db", description: "VLAN skapat i databasen", pattern: "vlan \\d+", required: true, hint: "Skapa VLAN med: vlan <id>" },
  { id: "sw-mode", description: "Port-mode konfigurerad", pattern: "switchport mode (access|trunk)", required: true, hint: "switchport mode access eller trunk" },
  { id: "encap", description: "Dot1Q encapsulation", pattern: "encapsulation dot1[Qq]", required: false, hint: "Krävs på router sub-interfaces för ROAS" },
],
```

**`stp-triangle`** and **`stp-square`** — klistra `show spanning-tree`:
```typescript
verificationChecks: [
  { id: "root-id", description: "Root bridge synlig i output", pattern: "Root ID", required: true, hint: "Kör show spanning-tree och klistra in output" },
  { id: "bridge-id", description: "Bridge ID synlig", pattern: "Bridge ID", required: true, hint: "Verifiera att du ser Bridge ID-raden" },
],
```

**`rstp`:**
```typescript
verificationChecks: [
  { id: "root-id", description: "Root bridge synlig", pattern: "Root ID", required: true },
  { id: "rstp-mode", description: "RSTP-läge aktivt", pattern: "rapid-pvst|rstp", required: false, hint: "spanning-tree mode rapid-pvst" },
],
```

**`ospf-single`** och **`ospf-multi`:**
```typescript
verificationChecks: [
  { id: "ospf-proc", description: "OSPF-process konfigurerad", pattern: "router ospf \\d+", required: true, hint: "router ospf <process-id>" },
  { id: "network-stmt", description: "Network statement finns", pattern: "network .+area", required: true, hint: "network <ip> <wildcard> area <id>" },
  { id: "neighbor", description: "OSPF-grannskap FULL", pattern: "FULL", required: false, hint: "Klistra in 'show ip ospf neighbor' för att se FULL-state" },
],
```

**`eigrp-hub`:**
```typescript
verificationChecks: [
  { id: "eigrp-as", description: "EIGRP AS konfigurerat", pattern: "router eigrp \\d+", required: true, hint: "router eigrp <AS-nummer>" },
  { id: "network", description: "Network statement konfigurerat", pattern: "network \\d+\\.\\d+\\.\\d+\\.\\d+", required: true },
  { id: "no-auto", description: "Auto-summary inaktiverat", pattern: "no auto-summary", required: false, hint: "Rekommenderas i moderna nät" },
],
```

**`acl-standard`**, **`acl-extended`**, **`acl-extended-hard`:**
```typescript
verificationChecks: [
  { id: "acl-def", description: "ACL definierad", pattern: "(ip access-list|access-list \\d+)", required: true, hint: "ip access-list extended <namn> eller access-list <nr>" },
  { id: "acl-rule", description: "permit/deny-regel konfigurerad", pattern: "(permit|deny) (ip|tcp|udp|icmp)", required: true },
  { id: "acl-applied", description: "ACL applicerad på interface", pattern: "ip access-group .+(in|out)", required: true, hint: "ip access-group <namn> in/out under interface" },
],
```

**`nat-overload`** — klistra `show ip nat translations`:
```typescript
verificationChecks: [
  { id: "nat-trans", description: "Aktiv NAT-translation hittad", pattern: "Inside global", required: true, hint: "Klistra in output från 'show ip nat translations'" },
  { id: "pat", description: "PAT (port-baserad NAT)", pattern: ":\\d+", required: false, hint: "PAT-translations visar port-nummer" },
],
```

- [ ] **Add new lab `vlan-basic`** — insert before `vlans-roas` in the Fas 2 section:

```typescript
{
  id: "vlan-basic",
  phase: 2,
  jeremyDay: 16,
  title: "VLANs — Grundkonfiguration",
  protocol: "VLANs",
  difficulty: "Lätt",
  domain: "network-access",
  description: "Skapa VLAN och konfigurera access-portar på en switch. Första steget i switch-konfiguration — förstå skillnaden mellan VLAN-databas och port-tilldelning.",
  generatorKey: "vlan-roas-latt",
  tasksOverride: [
    "Skapa VLAN 10 och VLAN 20 i switch-databasen (vlan 10, name SALES)",
    "Tilldela access-portar till respektive VLAN (switchport mode access + switchport access vlan)",
    "Verifiera VLAN-databasen: show vlan brief",
    "Verifiera port-tilldelning: show interfaces switchport",
  ],
  verificationChecks: [
    { id: "vlan-db", description: "VLAN skapat", pattern: "vlan \\d+", required: true, hint: "vlan <id> i global config" },
    { id: "sw-access", description: "Access-port konfigurerad", pattern: "switchport mode access", required: true },
    { id: "sw-vlan", description: "VLAN tilldelat till port", pattern: "switchport access vlan \\d+", required: true },
  ],
},
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add data/labcatalog.ts
git commit -m "feat(labs): add verificationChecks to all 14 labs + new vlan-basic lab"
```

---

## Task 8: Update data/phasechecklist.ts with labId links

**Files:**
- Modify: `data/phasechecklist.ts`

- [ ] **Replace the entire file:**

```typescript
export interface ChecklistItem {
  id: string;
  phase: number;
  text: string;
  labId?: string;
  verificationTarget?: "running-config" | "show-spanning-tree" | "show-ip-nat-translations";
}

export const PHASE_CHECKLISTS: ChecklistItem[] = [
  // Fas 1 — Grunderna
  { id: "f1-cli",    phase: 1, text: "Öva Cisco IOS CLI — hostname, enable, configure terminal" },
  { id: "f1-ipv4",   phase: 1, text: "Konfigurera IPv4-adresser på router-interface", labId: "static-routes-basic", verificationTarget: "running-config" },
  { id: "f1-static", phase: 1, text: "Statisk routing med ip route och default route (0.0.0.0/0)", labId: "static-routes-advanced", verificationTarget: "running-config" },

  // Fas 2 — Switchning
  { id: "f2-vlan",   phase: 2, text: "Skapa VLAN och konfigurera access- och trunk-portar", labId: "vlan-basic", verificationTarget: "running-config" },
  { id: "f2-stp",    phase: 2, text: "Identifiera root bridge och blocked port med show spanning-tree", labId: "stp-triangle", verificationTarget: "show-spanning-tree" },
  { id: "f2-ethch",  phase: 2, text: "EtherChannel med LACP (Active/Passive) — show etherchannel summary" },

  // Fas 3 — Routing
  { id: "f3-ospf",   phase: 3, text: "OSPF Single-Area — verifiera grannskap med show ip ospf neighbor", labId: "ospf-single", verificationTarget: "running-config" },
  { id: "f3-multi",  phase: 3, text: "OSPF Multi-Area med ABR — show ip route ospf på alla routrar", labId: "ospf-multi", verificationTarget: "running-config" },
  { id: "f3-hsrp",   phase: 3, text: "HSRP aktiv/standby — verifiera virtual IP och failover" },

  // Fas 4 — Säkerhet & Automation
  { id: "f4-acl",    phase: 4, text: "Extended ACL — blockera trafik och verifiera med show access-lists", labId: "acl-extended", verificationTarget: "running-config" },
  { id: "f4-nat",    phase: 4, text: "NAT Overload (PAT) — verifiera show ip nat translations", labId: "nat-overload", verificationTarget: "show-ip-nat-translations" },
  { id: "f4-ssh",    phase: 4, text: "Konfigurera SSH (version 2, domain-name, crypto key generate rsa)" },
];
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add data/phasechecklist.ts
git commit -m "feat(checklist): add labId links and verificationTarget to checklist items"
```

---

## Task 9: Add sequential lock logic to lib/checklistprogress.ts

**Files:**
- Modify: `lib/checklistprogress.ts`

- [ ] **Replace the entire file:**

```typescript
"use client";
import { PHASE_CHECKLISTS } from "@/data/phasechecklist";

const KEY = "netforge_checklist";

export function getChecked(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function setChecked(ids: string[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(ids));
  }
}

export function toggleChecked(id: string): string[] {
  const checked = getChecked();
  const next = checked.includes(id)
    ? checked.filter(x => x !== id)
    : [...checked, id];
  setChecked(next);
  return next;
}

export function markLabChecked(id: string): string[] {
  const checked = getChecked();
  if (checked.includes(id)) return checked;
  const next = [...checked, id];
  setChecked(next);
  return next;
}

export function isItemChecked(id: string, checked: string[]): boolean {
  return checked.includes(id);
}

// Returns true if the item at itemIndex (0-based within its phase) is available to work on.
// Item 0 is always available if the phase itself is unlocked.
// Item N requires item N-1 to be checked.
export function canUnlockItem(
  phase: number,
  itemIndex: number,
  checked: string[]
): boolean {
  if (itemIndex === 0) return true;
  const phaseItems = PHASE_CHECKLISTS.filter(item => item.phase === phase);
  const prev = phaseItems[itemIndex - 1];
  return prev ? checked.includes(prev.id) : true;
}
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add lib/checklistprogress.ts
git commit -m "feat(checklist): add canUnlockItem for sequential lab locking + markLabChecked"
```

---

## Task 10: Update StudyPathPage.tsx for sequential locking + lab links

**Files:**
- Modify: `components/studyvag/StudyPathPage.tsx`

- [ ] **Add import** for `canUnlockItem` and `markLabChecked`, and import `ChecklistItem`:

Find:
```typescript
import { getChecked, toggleChecked } from "@/lib/checklistprogress";
```
Replace with:
```typescript
import { getChecked, toggleChecked, canUnlockItem } from "@/lib/checklistprogress";
```

- [ ] **Replace the `Lab-checklista` section** (the entire `{phaseChecklist.map(...)` block, lines ~200–229) with this new version that adds sequential locking and lab links:

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
  {phaseChecklist.map((item, itemIndex) => {
    const isDone = checked.includes(item.id);
    const itemUnlocked = unlocked && canUnlockItem(phase.num, itemIndex, checked);
    const isLocked = !itemUnlocked;

    return (
      <div
        key={item.id}
        style={{
          display: "flex", alignItems: "flex-start", gap: 8,
          padding: "6px 8px", borderRadius: 5,
          background: isDone ? "#00e67608" : isLocked ? "var(--bg-base)" : "var(--bg-elevated)",
          border: `1px solid ${isDone ? "#00e67620" : isLocked ? "var(--border)" : "var(--border)"}`,
          opacity: isLocked ? 0.45 : 1,
        }}
      >
        <input
          type="checkbox"
          checked={isDone}
          disabled={isLocked || Boolean(item.labId)}
          onChange={() => !isLocked && !item.labId && handleToggle(item.id)}
          style={{ marginTop: 1, accentColor: "var(--green)", cursor: isLocked || item.labId ? "default" : "pointer", flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{
            fontSize: 10.5, color: isDone ? "var(--text-dim)" : isLocked ? "var(--text-dim)" : "var(--text)",
            textDecoration: isDone ? "line-through" : "none", lineHeight: 1.5,
            display: "block",
          }}>
            {isLocked ? "🔒 " : ""}{item.text}
          </span>
          {item.labId && !isLocked && (
            <Link
              href={`/topologier?lab=${item.labId}`}
              style={{
                display: "inline-block", marginTop: 4,
                fontSize: 9.5, color: isDone ? "var(--green)" : "var(--cyan)",
                textDecoration: "none",
                padding: "2px 8px", borderRadius: 3,
                border: `1px solid ${isDone ? "var(--green)" : "var(--cyan)"}30`,
                background: isDone ? "#00e67608" : "#00e5ff08",
              }}
            >
              {isDone ? "✓ Klar" : "Öppna lab →"}
            </Link>
          )}
        </div>
      </div>
    );
  })}
</div>
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
npm run dev
```
Open `/studyvag` → confirm Fas 1 item 2 is locked until item 1 is checked, and "Öppna lab →" link appears for linked items.

- [ ] **Commit:**
```bash
git add components/studyvag/StudyPathPage.tsx
git commit -m "feat(studyvag): sequential lab locking and lab links in checklist"
```

---

## Task 11: Add verification panel to LabCard.tsx

**Files:**
- Modify: `components/topology/LabCard.tsx`

- [ ] **Add imports** near the top of the file (after existing imports):

```typescript
import { verifyConfig, isVerified } from "@/lib/labverify";
import type { VerificationResult } from "@/lib/labverify";
import { markLabChecked } from "@/lib/checklistprogress";
import { PHASE_CHECKLISTS } from "@/data/phasechecklist";
import { addXp } from "@/lib/progress";
import { XP } from "@/lib/xp";
```

- [ ] **Add a `VerifyPanel` component** just above the main `LabCard` export (or in the same file after `FacitSection`):

```tsx
function VerifyPanel({ lab, onVerified }: { lab: LabEntry; onVerified: () => void }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<VerificationResult[] | null>(null);
  const [verified, setVerified] = useState(false);

  const checks = lab.verificationChecks;
  if (!checks || checks.length === 0) return null;

  const target = PHASE_CHECKLISTS.find(item => item.labId === lab.id);
  const placeholder =
    target?.verificationTarget === "show-spanning-tree"
      ? "Klistra in output från: show spanning-tree"
      : target?.verificationTarget === "show-ip-nat-translations"
      ? "Klistra in output från: show ip nat translations"
      : "Klistra in output från: show running-config";

  function runVerify() {
    const res = verifyConfig(input, checks!);
    setResults(res);
    if (isVerified(res) && !verified) {
      setVerified(true);
      if (target) markLabChecked(target.id);
      onVerified();
    }
  }

  return (
    <div style={{
      marginTop: 20, padding: "14px 16px", borderRadius: 8,
      background: "var(--bg-elevated)", border: "1px solid var(--border)",
    }}>
      <div style={{ fontSize: 10, color: "var(--cyan)", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, marginBottom: 10 }}>
        Verifiera lab
      </div>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        rows={6}
        style={{
          width: "100%", boxSizing: "border-box",
          background: "var(--bg-base)", border: "1px solid var(--border)",
          borderRadius: 6, padding: "10px 12px", resize: "vertical",
          fontSize: 11, color: "var(--text)", fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1.5, outline: "none",
        }}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
        <button
          onClick={runVerify}
          disabled={!input.trim()}
          className="nf-btn-primary"
          style={{ fontSize: 11, padding: "7px 16px", opacity: input.trim() ? 1 : 0.4 }}
        >
          Kör verifiering
        </button>
        {verified && (
          <span style={{ fontSize: 11, color: "var(--green)" }}>✓ Lab godkänd! +{XP.labComplete} XP</span>
        )}
      </div>

      {results && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 5 }}>
          {results.map(r => (
            <div key={r.check.id} style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              padding: "6px 10px", borderRadius: 5,
              background: r.passed ? "#00e67608" : r.check.required ? "#ff4c6a08" : "transparent",
              border: `1px solid ${r.passed ? "#00e67625" : r.check.required ? "#ff4c6a25" : "var(--border)"}`,
            }}>
              <span style={{ color: r.passed ? "var(--green)" : r.check.required ? "var(--red)" : "var(--text-dim)", fontSize: 12, flexShrink: 0 }}>
                {r.passed ? "✅" : r.check.required ? "❌" : "⚠️"}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: 10.5, color: "var(--text)" }}>{r.check.description}</span>
                {!r.passed && r.check.hint && (
                  <span style={{ display: "block", fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>
                    Hint: {r.check.hint}
                  </span>
                )}
              </div>
              {!r.check.required && (
                <span style={{ fontSize: 9, color: "var(--text-dim)", flexShrink: 0 }}>valfri</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Find where the main LabCard component renders tasks and facit**, and add `<VerifyPanel>` after the task list. Look for where `markLabDone` and the "Markera klar" button are rendered. Add the panel just before or after that section:

```tsx
<VerifyPanel
  lab={lab}
  onVerified={() => {
    if (!done) {
      markLabDone(lab.id);
      setDone(true);
      addXp(XP.labComplete);
    }
  }}
/>
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
npm run dev
```
Open a lab in `/topologier` → scroll down → confirm the verification textarea + button appear.

- [ ] **Commit:**
```bash
git add components/topology/LabCard.tsx
git commit -m "feat(topology): add config-paste verification panel with per-lab regex checks"
```

---

## Task 12: Create Prov components

**Files:**
- Create: `lib/prov.ts`
- Create: `components/prov/ProvTimer.tsx`
- Create: `components/prov/ProvResults.tsx`
- Create: `components/prov/ProvPage.tsx`

- [ ] **Create `lib/prov.ts`** — question selection for the exam:

```typescript
// lib/prov.ts
import { getQuestions } from "@/lib/questions";
import type { Domain, Question } from "@/lib/types";

const PROV_DISTRIBUTION: { domain: Domain; count: number }[] = [
  { domain: "network-fundamentals",      count: 21 },
  { domain: "network-access",            count: 21 },
  { domain: "ip-connectivity",           count: 26 },
  { domain: "ip-services",               count: 10 },
  { domain: "security-fundamentals",     count: 15 },
  { domain: "automation-programmability", count: 10 },
];

export function buildProvQuestions(): Question[] {
  const all: Question[] = [];
  for (const { domain, count } of PROV_DISTRIBUTION) {
    const qs = getQuestions({ domain, count, difficulty: "all" });
    all.push(...qs);
  }
  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

export const PROV_DURATION_SECONDS = 120 * 60; // 120 minutes
```

- [ ] **Create `components/prov/ProvTimer.tsx`:**

```tsx
"use client";
import { useEffect, useState } from "react";

interface Props {
  totalSeconds: number;
  onExpire: () => void;
}

export default function ProvTimer({ totalSeconds, onExpire }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) { clearInterval(id); onExpire(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  const timeStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  const pct = remaining / totalSeconds;
  const color = pct > 0.25 ? "var(--green)" : pct > 0.1 ? "#ffb020" : "var(--red)";

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "6px 14px", borderRadius: 6,
      background: "var(--bg-elevated)", border: `1px solid ${color}30`,
    }}>
      <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1 }}>Tid kvar</span>
      <span style={{ fontSize: 14, fontWeight: 700, color, fontFamily: "'JetBrains Mono', monospace" }}>
        {timeStr}
      </span>
    </div>
  );
}
```

- [ ] **Create `components/prov/ProvResults.tsx`:**

```tsx
"use client";
import type { Question } from "@/lib/types";
import { DOMAINS } from "@/lib/types";

interface Props {
  questions: Question[];
  answers: (number | null)[];
  onRetry: () => void;
}

export default function ProvResults({ questions, answers, onRetry }: Props) {
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 82; // CCNA passing score ~825/1000

  const domainStats = DOMAINS.map(d => {
    const qs = questions.map((q, i) => ({ q, a: answers[i] })).filter(x => x.q.domain === d.id);
    const dc = qs.filter(x => x.a === x.q.correct).length;
    return { ...d, correct: dc, total: qs.length, pct: qs.length ? Math.round(dc / qs.length * 100) : 0 };
  }).filter(d => d.total > 0);

  const scoreColor = passed ? "var(--green)" : pct >= 60 ? "var(--cyan)" : "var(--red)";

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: 24 }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          Provresultat
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: scoreColor, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
          {pct}%
        </div>
        <div style={{ fontSize: 12, color: scoreColor, marginTop: 8, fontWeight: 600 }}>
          {correct}/{total} rätt · {passed ? "✓ Godkänt (≥82%)" : "✗ Ej godkänt"}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
          Per domän
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {domainStats.map(d => {
            const dc = d.pct >= 70 ? "var(--green)" : d.pct >= 50 ? "var(--cyan)" : "var(--red)";
            return (
              <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 10.5, color: "var(--text)", width: 160, flexShrink: 0 }}>{d.label}</span>
                <div style={{ flex: 1, height: 6, background: "var(--bg-elevated)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${d.pct}%`, background: dc, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 10, color: dc, width: 50, textAlign: "right" }}>{d.pct}% ({d.correct}/{d.total})</span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={onRetry} className="nf-btn-secondary" style={{ fontSize: 11 }}>
          Gör om provet
        </button>
        <a href="/quiz" className="nf-btn-primary" style={{ fontSize: 11, textDecoration: "none", padding: "7px 16px", borderRadius: 5, display: "inline-block" }}>
          Träna svaga domäner →
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Create `components/prov/ProvPage.tsx`:**

```tsx
"use client";
import { useState } from "react";
import { buildProvQuestions, PROV_DURATION_SECONDS } from "@/lib/prov";
import type { Question } from "@/lib/types";
import ProvTimer from "./ProvTimer";
import ProvResults from "./ProvResults";
import { finishQuiz } from "@/lib/progress";
import type { QuizAnswerDetail } from "@/lib/progress";
import { XP } from "@/lib/xp";
import { addXp } from "@/lib/progress";
import type { Domain } from "@/lib/types";

type Phase = "intro" | "exam" | "results";

export default function ProvPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);

  function startExam() {
    const qs = buildProvQuestions();
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setExpired(false);
    setPhase("exam");
  }

  function handleNext() {
    if (selected === null) return;
    const updated = [...answers];
    updated[current] = selected;
    setAnswers(updated);
    setSelected(null);

    if (current + 1 >= questions.length) {
      submitExam(updated);
    } else {
      setCurrent(c => c + 1);
    }
  }

  function submitExam(finalAnswers: (number | null)[]) {
    const correct = finalAnswers.filter((a, i) => a === questions[i].correct).length;
    const domainResults = new Map<Domain, { correct: number; total: number }>();
    const answerDetails: QuizAnswerDetail[] = questions.map((q, i) => ({
      difficulty: q.difficulty,
      correct: finalAnswers[i] === q.correct,
    }));
    questions.forEach((q, i) => {
      const prev = domainResults.get(q.domain) ?? { correct: 0, total: 0 };
      domainResults.set(q.domain, {
        correct: prev.correct + (finalAnswers[i] === q.correct ? 1 : 0),
        total: prev.total + 1,
      });
    });
    finishQuiz(domainResults, answerDetails, correct, questions.length);
    addXp(XP.provComplete);
    setPhase("results");
  }

  function handleExpire() {
    setExpired(true);
    submitExam(answers);
  }

  if (phase === "intro") {
    return (
      <div style={{ maxWidth: 560, margin: "80px auto", padding: 24 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          CCNA 200-301 Simulering
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>Prov</h1>
        <p style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>
          103 frågor · 120 minuter · alla domäner<br />
          Ingen förklaring visas under provet. Du kan inte backa eller pausa.<br />
          Godkänt: ≥82% (som riktigt CCNA-prov).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28, padding: "14px 16px", borderRadius: 8, background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
          {[
            ["Network Fundamentals", "21 frågor (20%)"],
            ["Network Access", "21 frågor (20%)"],
            ["IP Connectivity", "26 frågor (25%)"],
            ["IP Services", "10 frågor (10%)"],
            ["Security Fundamentals", "15 frågor (15%)"],
            ["Automation & Prog.", "10 frågor (10%)"],
          ].map(([label, val]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "var(--text)" }}>{label}</span>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{val}</span>
            </div>
          ))}
        </div>
        <button onClick={startExam} className="nf-btn-primary" style={{ fontSize: 12, padding: "10px 28px" }}>
          Starta provet →
        </button>
      </div>
    );
  }

  if (phase === "results") {
    return <ProvResults questions={questions} answers={answers} onRetry={startExam} />;
  }

  // Exam phase
  const q = questions[current];
  const LABELS = ["A", "B", "C", "D"];

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>
          Fråga {current + 1} / {questions.length}
        </span>
        <ProvTimer totalSeconds={PROV_DURATION_SECONDS} onExpire={handleExpire} />
      </div>

      {expired && (
        <div style={{ padding: "8px 12px", borderRadius: 6, background: "#ff4c6a10", border: "1px solid #ff4c6a30", fontSize: 11, color: "var(--red)", marginBottom: 12 }}>
          Tiden är ute — provet avslutas automatiskt.
        </div>
      )}

      <div className="nf-card" style={{ marginBottom: 14 }}>
        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
          {q.question}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 18px",
              background: selected === idx ? "#00e5ff12" : "var(--bg-surface)",
              border: `1px solid ${selected === idx ? "var(--cyan)" : "var(--border)"}`,
              borderRadius: 8, cursor: "pointer",
              textAlign: "left", fontSize: 12.5, color: "var(--text)",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.15s",
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
              background: selected === idx ? "var(--cyan)" : "var(--bg-elevated)",
              border: `1px solid ${selected === idx ? "var(--cyan)" : "var(--border)"}`,
              color: selected === idx ? "var(--bg-base)" : "var(--text-dim)",
            }}>{LABELS[idx]}</span>
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="nf-btn-primary"
          style={{ fontSize: 11, padding: "8px 20px", opacity: selected !== null ? 1 : 0.4 }}
        >
          {current + 1 >= questions.length ? "Lämna in →" : "Nästa →"}
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
```

- [ ] **Commit:**
```bash
git add lib/prov.ts components/prov/ProvTimer.tsx components/prov/ProvResults.tsx components/prov/ProvPage.tsx
git commit -m "feat(prov): exam simulator with 103 questions, 120-min timer, locked navigation, domain results"
```

---

## Task 13: Add Prov route and sidebar link

**Files:**
- Create: `app/prov/page.tsx`
- Modify: `components/layout/Sidebar.tsx`

- [ ] **Create `app/prov/page.tsx`:**

```typescript
import ProvPage from "@/components/prov/ProvPage";

export default function Page() {
  return <ProvPage />;
}
```

- [ ] **Add Prov to sidebar.** In `components/layout/Sidebar.tsx`, find the `navItems` array and add the Prov entry after Quiz:

```typescript
const navItems = [
  { label: "Dashboard",  href: "/dashboard",  icon: "⊞" },
  { label: "Studieväg",  href: "/studyvag",   icon: "✦" },
  { label: "Topologier", href: "/topologier", icon: "◈" },
  { label: "Quiz",       href: "/quiz",       icon: "▤" },
  { label: "Prov",       href: "/prov",       icon: "📋" },
  { label: "Subnetting", href: "/subnetting", icon: "⊟" },
  { label: "Resurser",   href: "/resurser",   icon: "▶" },
];
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
npm run dev
```
Navigate to `/prov` → confirm intro screen shows. Click sidebar → confirm "📋" icon navigates to `/prov`.

- [ ] **Commit:**
```bash
git add app/prov/page.tsx components/layout/Sidebar.tsx
git commit -m "feat(prov): add /prov route and sidebar navigation link"
```

---

## Task 14: Quiz → Learning Resources link + domain param in ResurserPage

**Files:**
- Modify: `components/quiz/QuizCard.tsx`
- Modify: `components/resurser/ResurserPage.tsx`
- Modify: `app/resurser/page.tsx`

- [ ] **Add the 📚 link in `components/quiz/QuizCard.tsx`.** In the revealed explanation block, find the line showing `{question.explanation}` (around line 129) and add the link immediately after the explanation text and before the "Nästa fråga" button div:

```tsx
{/* After the explanation <div> and before the button div */}
{chosen !== question.correct && (
  <div style={{ marginBottom: 10 }}>
    <a
      href={`/resurser?domain=${question.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 10.5, color: "var(--cyan)",
        textDecoration: "none", padding: "4px 10px", borderRadius: 4,
        background: "#00e5ff08", border: "1px solid #00e5ff25",
      }}
    >
      📚 Se video om {question.domain.replace(/-/g, " ")} →
    </a>
  </div>
)}
```

Place this between the explanation `<div>` (line ~128–130) and the `<div style={{ display: "flex", justifyContent: "flex-end" }}>` button div (line ~131).

- [ ] **Update `app/resurser/page.tsx`** to pass the searchParam to the component. Replace the file:

```typescript
import ResurserPage from "@/components/resurser/ResurserPage";

interface Props {
  searchParams: Promise<{ domain?: string }>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  return <ResurserPage initialDomain={params.domain} />;
}
```

- [ ] **Update `components/resurser/ResurserPage.tsx`** to accept and use `initialDomain`. Find:

```typescript
export default function ResurserPage() {
  const [activeFilter, setActiveFilter] = useState<Domain | "all">("all");
```

Replace with:

```typescript
interface Props {
  initialDomain?: string;
}

export default function ResurserPage({ initialDomain }: Props) {
  const validDomain = initialDomain && ["network-fundamentals","network-access","ip-connectivity","ip-services","security-fundamentals","automation-programmability"].includes(initialDomain)
    ? initialDomain as Domain
    : "all";
  const [activeFilter, setActiveFilter] = useState<Domain | "all">(validDomain);
```

- [ ] **Verify:**
```bash
npx tsc --noEmit
npm run dev
```
Do a quiz → answer a question wrong → confirm 📚 link appears in explanation.  
Click the link → confirm it opens `/resurser` with the correct domain pre-filtered.

- [ ] **Commit:**
```bash
git add components/quiz/QuizCard.tsx components/resurser/ResurserPage.tsx app/resurser/page.tsx
git commit -m "feat(quiz): add learning resource link on wrong answer + domain param filter in resurser"
```

---

## Self-Review

**Spec coverage:**
- ✅ Feature 1 (score bug + CCNA weighting): Tasks 2, 3, 4, 5
- ✅ Feature 2 (Quiz/Prov separation): Tasks 12, 13
- ✅ Feature 3 (XP overhaul): Task 1
- ✅ Feature 4 (sequential labs): Tasks 8, 9, 10
- ✅ Feature 5 (lab verification): Tasks 6, 7, 11
- ✅ Feature 6 (quiz→resources link): Task 14
- ✅ New vlan-basic lab: Task 7

**Type consistency:**
- `QuizAnswerDetail` defined in Task 3 (`lib/progress.ts`) and used in Tasks 4 and 12 ✓
- `VerificationCheck` / `VerificationResult` defined in Task 6 (`lib/labverify.ts`) and used in Tasks 7 and 11 ✓
- `canUnlockItem` defined in Task 9 (`lib/checklistprogress.ts`) and used in Task 10 ✓
- `markLabChecked` defined in Task 9 and used in Task 11 ✓
- `XP.labComplete` used in Task 11 — defined in Task 1 ✓
- `finishQuiz` signature: `(Map<Domain, {correct,total}>, QuizAnswerDetail[], number, number)` — consistent across Tasks 3, 4, 12 ✓
- `xpProgress` now returns `title` field (Task 1) — Task 5 uses it in dashboard ✓
