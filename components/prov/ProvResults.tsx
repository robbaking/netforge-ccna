"use client";
import type { Question } from "@/lib/types";
import { DOMAINS } from "@/lib/types";

interface Props {
  questions: Question[];
  answers: (number | null)[];
  onRetry: () => void;
}

export default function ProvResults({ questions, answers, onRetry }: Props) {
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 82; // CCNA passing score ~825/1000

  const domainStats = DOMAINS.map(d => {
    const qs = questions.map((q, i) => ({ q, a: answers[i] })).filter(x => x.q.domain === d.id);
    const dc = qs.filter(x => x.a === x.q.correct).length;
    return { ...d, correct: dc, total: qs.length, pct: qs.length ? Math.round(dc / qs.length * 100) : 0 };
  }).filter(d => d.total > 0);

  const scoreColor = passed ? "var(--green)" : pct >= 60 ? "var(--cyan)" : "var(--red)";

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: 24 }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          Provresultat
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: scoreColor, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
          {pct}%
        </div>
        <div style={{ fontSize: 12, color: scoreColor, marginTop: 8, fontWeight: 600 }}>
          {correct}/{total} rätt · {passed ? "✓ Godkänt (≥82%)" : "✗ Ej godkänt"}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
          Per domän
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {domainStats.map(d => {
            const dc = d.pct >= 70 ? "var(--green)" : d.pct >= 50 ? "var(--cyan)" : "var(--red)";
            return (
              <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 10.5, color: "var(--text)", width: 160, flexShrink: 0 }}>{d.label}</span>
                <div style={{ flex: 1, height: 6, background: "var(--bg-elevated)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${d.pct}%`, background: dc, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 10, color: dc, width: 50, textAlign: "right" }}>{d.pct}% ({d.correct}/{d.total})</span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={onRetry} className="nf-btn-secondary" style={{ fontSize: 11 }}>
          Gör om provet
        </button>
        <a href="/quiz" className="nf-btn-primary" style={{ fontSize: 11, textDecoration: "none", padding: "7px 16px", borderRadius: 5, display: "inline-block" }}>
          Träna svaga domäner →
        </a>
      </div>
    </div>
  );
}
