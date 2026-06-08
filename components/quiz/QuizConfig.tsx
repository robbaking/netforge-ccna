"use client";
import { useState } from "react";
import { DOMAINS } from "@/lib/types";
import type { Domain, Difficulty } from "@/lib/types";

interface Props {
  onStart: (domain: Domain | "all", count: number, difficulty: Difficulty | "all") => void;
  initialDomain?: Domain | "all";
}

const COUNT_OPTIONS = [10, 25, 50];
const DIFFICULTY_OPTIONS: { value: Difficulty | "all"; label: string }[] = [
  { value: "all", label: "Alla nivåer" },
  { value: "easy", label: "Lätt" },
  { value: "normal", label: "Normal" },
  { value: "hard", label: "Svår" },
];

export default function QuizConfig({ onStart, initialDomain = "all" }: Props) {
  const [domain, setDomain] = useState<Domain | "all">(initialDomain);
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  const selectStyle = (active: boolean, accent = "var(--cyan)"): React.CSSProperties => ({
    padding: "8px 16px", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: active ? 600 : 400,
    background: active ? `${accent}15` : "var(--bg-elevated)",
    border: `1px solid ${active ? accent : "var(--border)"}`,
    color: active ? accent : "var(--text-dim)",
    transition: "all 0.15s",
    fontFamily: "'JetBrains Mono', monospace",
  });

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <div className="nf-card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          Välj domän
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button style={selectStyle(domain === "all")} onClick={() => setDomain("all")}>Alla domäner</button>
          {DOMAINS.map((d) => (
            <button key={d.id} style={selectStyle(domain === d.id)} onClick={() => setDomain(d.id)}>
              {d.label} <span style={{ opacity: 0.5, fontSize: 10 }}>{d.weight}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div className="nf-card">
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
            Antal frågor
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {COUNT_OPTIONS.map((n) => (
              <button key={n} style={selectStyle(count === n)} onClick={() => setCount(n)}>{n}</button>
            ))}
          </div>
        </div>
        <div className="nf-card">
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
            Svårighetsgrad
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {DIFFICULTY_OPTIONS.map((d) => (
              <button key={d.value} style={selectStyle(difficulty === d.value)} onClick={() => setDifficulty(d.value)}>
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="nf-card" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "linear-gradient(135deg, #00e5ff08, #7c4dff08)",
        border: "1px solid #00e5ff20",
      }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Klar att börja?</div>
          <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 4 }}>
            {count} frågor · {domain === "all" ? "Alla domäner" : DOMAINS.find(d => d.id === domain)?.label} · {
              difficulty === "all" ? "Alla nivåer" : DIFFICULTY_OPTIONS.find(d => d.value === difficulty)?.label
            }
          </div>
        </div>
        <button className="nf-btn-primary" style={{ padding: "10px 28px", fontSize: 12 }} onClick={() => onStart(domain, count, difficulty)}>
          STARTA QUIZ ▶
        </button>
      </div>
    </div>
  );
}
