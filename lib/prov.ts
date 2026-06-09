// lib/prov.ts
import { getQuestions } from "@/lib/questions";
import type { Domain, Question } from "@/lib/types";

const PROV_DISTRIBUTION: { domain: Domain; count: number }[] = [
  { domain: "network-fundamentals",       count: 21 },
  { domain: "network-access",             count: 21 },
  { domain: "ip-connectivity",            count: 26 },
  { domain: "ip-services",               count: 10 },
  { domain: "security-fundamentals",      count: 15 },
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
