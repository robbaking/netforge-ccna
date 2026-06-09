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
