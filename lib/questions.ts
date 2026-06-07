import type { Question, Domain, Difficulty } from "./types";
import rawData from "@/data/ccna_questions.json";

const allQuestions: Question[] = (rawData as { questions: Question[] }).questions;

export function getQuestions(opts?: {
  domain?: Domain | "all";
  difficulty?: Difficulty | "all";
  count?: number;
}): Question[] {
  let qs = [...allQuestions];

  if (opts?.domain && opts.domain !== "all") {
    qs = qs.filter((q) => q.domain === opts.domain);
  }
  if (opts?.difficulty && opts.difficulty !== "all") {
    qs = qs.filter((q) => q.difficulty === opts.difficulty);
  }

  // Shuffle
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }

  if (opts?.count) {
    qs = qs.slice(0, opts.count);
  }

  return qs;
}

export function countByDomain(): Record<Domain, number> {
  const counts = {} as Record<Domain, number>;
  for (const q of allQuestions) {
    counts[q.domain] = (counts[q.domain] ?? 0) + 1;
  }
  return counts;
}
