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
