export type Domain =
  | "network-fundamentals"
  | "network-access"
  | "ip-connectivity"
  | "ip-services"
  | "security-fundamentals"
  | "automation-programmability";

export const DOMAINS: { id: Domain; label: string; weight: string }[] = [
  { id: "network-fundamentals", label: "Network Fundamentals", weight: "20%" },
  { id: "network-access", label: "Network Access", weight: "20%" },
  { id: "ip-connectivity", label: "IP Connectivity", weight: "25%" },
  { id: "ip-services", label: "IP Services", weight: "10%" },
  { id: "security-fundamentals", label: "Security Fundamentals", weight: "15%" },
  { id: "automation-programmability", label: "Automation & Prog.", weight: "10%" },
];

export type Difficulty = "easy" | "normal" | "hard";

export interface Question {
  id: string;
  domain: Domain;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface DomainProgress {
  answered: number;
  correct: number;
  lastStudied: string;
}

export interface Activity {
  type: "quiz" | "subnetting" | "study";
  text: string;
  result: string;
  good: boolean;
  time: string;
}

export interface AppProgress {
  domains: Partial<Record<Domain, DomainProgress>>;
  activities: Activity[];
  streak: number;
  lastActiveDate: string;
  studyTimeSeconds: number;
}
