"use client";
import { useState } from "react";
import { buildProvQuestions, PROV_DURATION_SECONDS } from "@/lib/prov";
import type { Question, Domain } from "@/lib/types";
import ProvTimer from "./ProvTimer";
import ProvResults from "./ProvResults";
import { finishQuiz, addXp } from "@/lib/progress";
import type { QuizAnswerDetail } from "@/lib/progress";
import { XP } from "@/lib/xp";

type Phase = "intro" | "exam" | "results";

export default function ProvPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [expired, setExpired] = useState(false);

  function startExam() {
    const qs = buildProvQuestions();
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setExpired(false);
    setPhase("exam");
  }

  function handleNext() {
    if (selected === null) return;
    const updated = [...answers];
    updated[current] = selected;
    setAnswers(updated);
    setSelected(null);

    if (current + 1 >= questions.length) {
      submitExam(updated);
    } else {
      setCurrent(c => c + 1);
    }
  }

  function submitExam(finalAnswers: (number | null)[]) {
    const correct = finalAnswers.filter((a, i) => a === questions[i].correct).length;
    const domainResults = new Map<Domain, { correct: number; total: number }>();
    const answerDetails: QuizAnswerDetail[] = questions.map((q, i) => ({
      difficulty: q.difficulty,
      correct: finalAnswers[i] === q.correct,
    }));
    questions.forEach((q, i) => {
      const prev = domainResults.get(q.domain) ?? { correct: 0, total: 0 };
      domainResults.set(q.domain, {
        correct: prev.correct + (finalAnswers[i] === q.correct ? 1 : 0),
        total: prev.total + 1,
      });
    });
    finishQuiz(domainResults, answerDetails, correct, questions.length);
    addXp(XP.provComplete);
    setPhase("results");
  }

  function handleExpire() {
    setExpired(true);
    submitExam(answers);
  }

  if (phase === "intro") {
    return (
      <div style={{ maxWidth: 560, margin: "80px auto", padding: 24 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          CCNA 200-301 Simulering
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>Prov</h1>
        <p style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 24 }}>
          103 frågor · 120 minuter · alla domäner<br />
          Ingen förklaring visas under provet. Du kan inte backa eller pausa.<br />
          Godkänt: ≥82% (som riktigt CCNA-prov).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28, padding: "14px 16px", borderRadius: 8, background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
          {[
            ["Network Fundamentals", "21 frågor (20%)"],
            ["Network Access", "21 frågor (20%)"],
            ["IP Connectivity", "26 frågor (25%)"],
            ["IP Services", "10 frågor (10%)"],
            ["Security Fundamentals", "15 frågor (15%)"],
            ["Automation & Prog.", "10 frågor (10%)"],
          ].map(([label, val]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "var(--text)" }}>{label}</span>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{val}</span>
            </div>
          ))}
        </div>
        <button onClick={startExam} className="nf-btn-primary" style={{ fontSize: 12, padding: "10px 28px" }}>
          Starta provet →
        </button>
      </div>
    );
  }

  if (phase === "results") {
    return <ProvResults questions={questions} answers={answers} onRetry={startExam} />;
  }

  // Exam phase
  const q = questions[current];
  const LABELS = ["A", "B", "C", "D"];

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>
          Fråga {current + 1} / {questions.length}
        </span>
        <ProvTimer totalSeconds={PROV_DURATION_SECONDS} onExpire={handleExpire} />
      </div>

      {expired && (
        <div style={{ padding: "8px 12px", borderRadius: 6, background: "#ff4c6a10", border: "1px solid #ff4c6a30", fontSize: 11, color: "var(--red)", marginBottom: 12 }}>
          Tiden är ute — provet avslutas automatiskt.
        </div>
      )}

      <div className="nf-card" style={{ marginBottom: 14 }}>
        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
          {q.question}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 18px",
              background: selected === idx ? "#00e5ff12" : "var(--bg-surface)",
              border: `1px solid ${selected === idx ? "var(--cyan)" : "var(--border)"}`,
              borderRadius: 8, cursor: "pointer",
              textAlign: "left", fontSize: 12.5, color: "var(--text)",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.15s",
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
              background: selected === idx ? "var(--cyan)" : "var(--bg-elevated)",
              border: `1px solid ${selected === idx ? "var(--cyan)" : "var(--border)"}`,
              color: selected === idx ? "var(--bg-base)" : "var(--text-dim)",
            }}>{LABELS[idx]}</span>
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="nf-btn-primary"
          style={{ fontSize: 11, padding: "8px 20px", opacity: selected !== null ? 1 : 0.4 }}
        >
          {current + 1 >= questions.length ? "Lämna in →" : "Nästa →"}
        </button>
      </div>
    </div>
  );
}
