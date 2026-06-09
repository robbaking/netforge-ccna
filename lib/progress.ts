"use client";
import { XP } from "./xp";
import type { AppProgress, Domain, Activity } from "./types";

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

  const act: Activity = {
    type: "quiz",
    text: `Quiz · ${domain.replace(/-/g, " ")}`,
    result: `${correct}/${total}`,
    good: correct / total >= 0.6,
    time: new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }),
  };
  p.activities = [act, ...p.activities].slice(0, 20);
  const earned = correct * XP.correctAnswer + XP.quizComplete;
  p.xp = (p.xp ?? 0) + earned;

  const today = new Date().toDateString();
  if (p.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = p.lastActiveDate === yesterday ? p.streak + 1 : 1;
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
