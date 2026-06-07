"use client";
import { useEffect, useState } from "react";
import { calculateSubnet, randomSubnetQuestion } from "@/lib/subnet";
import type { SubnetResult } from "@/lib/subnet";

type Field = "network" | "broadcast" | "hosts" | "mask";

const FIELDS: { key: Field; label: string; placeholder: string }[] = [
  { key: "network", label: "Nätverksadress", placeholder: "t.ex. 192.168.1.0" },
  { key: "broadcast", label: "Broadcast", placeholder: "t.ex. 192.168.1.255" },
  { key: "hosts", label: "Antal användbara värdar", placeholder: "t.ex. 254" },
  { key: "mask", label: "Subnätmask", placeholder: "t.ex. 255.255.255.0" },
];

export default function SubnetTrainer() {
  const [question, setQuestion] = useState<{ ip: string; cidr: number } | null>(null);
  const [answers, setAnswers] = useState<Partial<Record<Field, string>>>({});
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState<Record<Field, boolean>>({} as Record<Field, boolean>);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answer, setAnswer] = useState<SubnetResult | null>(null);

  useEffect(() => { newQuestion(); }, []);

  function newQuestion() {
    const q = randomSubnetQuestion();
    setQuestion(q);
    setAnswers({});
    setRevealed(false);
    setCorrect({} as Record<Field, boolean>);
    setAnswer(calculateSubnet(q.ip, q.cidr));
  }

  function check() {
    if (!answer || !question) return;
    const c: Record<Field, boolean> = {
      network: answers.network?.trim() === answer.network,
      broadcast: answers.broadcast?.trim() === answer.broadcast,
      hosts: answers.hosts?.trim() === String(answer.hosts),
      mask: answers.mask?.trim() === answer.mask,
    };
    setCorrect(c);
    setRevealed(true);
    const numCorrect = Object.values(c).filter(Boolean).length;
    setScore(s => ({ correct: s.correct + numCorrect, total: s.total + 4 }));
  }

  const inputStyle = (field: Field): React.CSSProperties => {
    const base: React.CSSProperties = {
      background: "var(--bg-elevated)", borderRadius: 6, padding: "8px 12px",
      color: "var(--text)", fontSize: 12, fontFamily: "'JetBrains Mono', monospace",
      outline: "none", flex: 1, transition: "border-color 0.2s",
    };
    if (!revealed) return { ...base, border: "1px solid var(--border)" };
    return {
      ...base,
      border: `1px solid ${correct[field] ? "var(--green)" : "var(--red)"}`,
      background: correct[field] ? "#00e67608" : "#ff4c6a08",
    };
  };

  return (
    <div style={{ maxWidth: 580, margin: "0 auto" }}>
      {/* Score */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
        <div style={{
          padding: "6px 14px", borderRadius: 6,
          background: "var(--bg-surface)", border: "1px solid var(--border)",
          fontSize: 11, color: "var(--text-dim)",
        }}>
          Poäng: <span style={{ color: "var(--cyan)", fontWeight: 600 }}>{score.correct}</span> / {score.total}
        </div>
      </div>

      {/* Question */}
      {question && (
        <div className="nf-card" style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>
            Beräkna subnätinformation
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "var(--cyan)", letterSpacing: 1 }}>
            {question.ip}/{question.cidr}
          </div>
        </div>
      )}

      {/* Input fields */}
      <div className="nf-card" style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label style={{ fontSize: 10, color: "var(--text-dim)", display: "block", marginBottom: 5 }}>{f.label}</label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="text" disabled={revealed}
                  value={answers[f.key] ?? ""}
                  onChange={(e) => setAnswers(a => ({ ...a, [f.key]: e.target.value }))}
                  onKeyDown={(e) => e.key === "Enter" && !revealed && check()}
                  placeholder={f.placeholder}
                  style={inputStyle(f.key)}
                />
                {revealed && (
                  <span style={{ fontSize: 11, color: correct[f.key] ? "var(--green)" : "var(--red)", flexShrink: 0 }}>
                    {correct[f.key] ? "✓" : `✗ ${answer?.[f.key === "hosts" ? "hosts" : f.key]}`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        {!revealed ? (
          <button className="nf-btn-primary" onClick={check} style={{ flex: 1, padding: "10px" }}>
            Kontrollera svar
          </button>
        ) : (
          <button className="nf-btn-primary" onClick={newQuestion} style={{ flex: 1, padding: "10px" }}>
            Nästa fråga →
          </button>
        )}
      </div>
    </div>
  );
}
