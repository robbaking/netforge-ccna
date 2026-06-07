"use client";
import Link from "next/link";
import type { Question } from "@/lib/types";

interface Props {
  questions: Question[];
  answers: (number | null)[];
  correct: number;
  elapsed: number;
  onRestart: () => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export default function QuizResults({ questions, answers, correct, elapsed, onRestart }: Props) {
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 60;
  const color = pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--cyan)" : "var(--red)";
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {/* Score card */}
      <div className="nf-card" style={{ textAlign: "center", marginBottom: 16, padding: "32px 20px" }}>
        <div style={{ position: "relative", width: 130, height: 130, margin: "0 auto 16px" }}>
          <svg width={130} height={130} viewBox="0 0 130 130" style={{ transform: "rotate(-90deg)" }}>
            <circle cx={65} cy={65} r={r} fill="none" stroke="#2a406030" strokeWidth={9} />
            <circle cx={65} cy={65} r={r} fill="none" stroke={color} strokeWidth={9}
              strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 8px ${color}50)`, transition: "stroke-dashoffset 1s ease-out" }}
            />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "var(--text)" }}>{pct}<span style={{ fontSize: 14, color: "var(--text-dim)" }}>%</span></span>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color, marginBottom: 6 }}>
          {pct >= 70 ? "Utmärkt!" : pct >= 50 ? "Godkänt" : "Fortsätt träna"}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-dim)" }}>
          {correct} av {total} rätt · {formatTime(elapsed)}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 20 }}>
          <button onClick={onRestart} className="nf-btn-primary">Nytt quiz</button>
          <Link href="/dashboard"><button className="nf-btn-secondary">Dashboard</button></Link>
        </div>
      </div>

      {/* Question review */}
      <div className="nf-card">
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
          Genomgång av svar
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {questions.map((q, i) => {
            const ans = answers[i];
            const ok = ans === q.correct;
            return (
              <div key={q.id} style={{
                padding: "12px 14px",
                background: ok ? "#00e67608" : "#ff4c6a08",
                border: `1px solid ${ok ? "#00e67620" : "#ff4c6a20"}`,
                borderRadius: 6,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 12, color: ok ? "var(--green)" : "var(--red)", flexShrink: 0, marginTop: 1 }}>
                    {ok ? "✓" : "✗"}
                  </span>
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--text)", marginBottom: 4 }}>{q.question}</div>
                    {!ok && (
                      <div style={{ fontSize: 10, color: "var(--text-dim)" }}>
                        Ditt svar: <span style={{ color: "var(--red)" }}>{ans !== null ? q.options[ans] : "—"}</span>
                        {" · "}
                        Rätt: <span style={{ color: "var(--green)" }}>{q.options[q.correct]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
