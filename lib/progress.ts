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
