import type { AppProgress, Domain } from "./types";
import { countByDomain } from "./questions";

export interface StudyPhase {
  id: string;
  num: number;
  label: string;
  description: string;
  domains: Domain[];
  accent: string; // hex literal (matches component accent style)
}

export const STUDY_PHASES: StudyPhase[] = [
  {
    id: "grunderna",
    num: 1,
    label: "Grunderna",
    description: "Nätverksgrunder, OSI/TCP-IP, IPv4/IPv6-adressering och subnetting.",
    domains: ["network-fundamentals"],
    accent: "#00e5ff",
  },
  {
    id: "switchning",
    num: 2,
    label: "Switchning",
    description: "VLAN, trunking (802.1Q), Spanning Tree och EtherChannel på Lager 2.",
    domains: ["network-access"],
    accent: "#7c4dff",
  },
  {
    id: "routing",
    num: 3,
    label: "Routing",
    description: "Statisk routing, OSPFv2, administrative distance/metric och FHRP/HSRP.",
    domains: ["ip-connectivity"],
    accent: "#00e676",
  },
  {
    id: "sakerhet-automation",
    num: 4,
    label: "Säkerhet & Automation",
    description: "ACL, NAT, enhetssäkerhet (SSH, port security) och nätverksautomation.",
    domains: ["ip-services", "security-fundamentals", "automation-programmability"],
    accent: "#ffb020",
  },
];

export interface PhaseProgressResult {
  answered: number;
  correct: number;
  pct: number;          // correct/answered i procent, 0 om inga svar
  totalQuestions: number; // antal frågor som finns i fasens domäner
}

// Aggregerar AppProgress för en fas domäner. Ren funktion — testbar.
export function phaseProgress(progress: AppProgress, phase: StudyPhase): PhaseProgressResult {
  let answered = 0;
  let correct = 0;
  for (const d of phase.domains) {
    const dp = progress.domains[d];
    if (dp) {
      answered += dp.answered;
      correct += dp.correct;
    }
  }
  const counts = countByDomain();
  const totalQuestions = phase.domains.reduce((s, d) => s + (counts[d] ?? 0), 0);
  const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  return { answered, correct, pct, totalQuestions };
}

// Första fasen som inte är "klar" (under 70% eller obesvarad). Annars sista fasen.
export function recommendedPhase(progress: AppProgress): StudyPhase {
  for (const phase of STUDY_PHASES) {
    const { answered, pct } = phaseProgress(progress, phase);
    if (answered === 0 || pct < 70) return phase;
  }
  return STUDY_PHASES[STUDY_PHASES.length - 1];
}
