"use client";
import { useEffect, useState } from "react";
import type { Question } from "@/lib/types";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (idx: number) => void;
  isLast: boolean;
}

const KEYS = ["a", "b", "c", "d"];
const LABELS = ["A", "B", "C", "D"];

export default function QuizCard({ question, selectedAnswer, onAnswer, isLast }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState<number | null>(null);

  useEffect(() => {
    setRevealed(false);
    setChosen(null);
  }, [question.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (revealed) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (chosen !== null) onAnswer(chosen);
        }
        return;
      }
      const idx = KEYS.indexOf(e.key.toLowerCase());
      if (idx >= 0 && idx < question.options.length) {
        handlePick(idx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [question, revealed, chosen]);

  function handlePick(idx: number) {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
  }

  function handleNext() {
    if (chosen !== null) onAnswer(chosen);
  }

  function getOptionClass(idx: number): string {
    if (!revealed) return chosen === idx ? "answer-selected" : "";
    if (idx === question.correct) return "answer-correct";
    if (idx === chosen && idx !== question.correct) return "answer-wrong";
    return "";
  }

  const diffColor =
    question.difficulty === "easy"
      ? "var(--green)"
      : question.difficulty === "hard"
      ? "var(--red)"
      : "var(--cyan)";

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div className="nf-card" style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{
            fontSize: 9, padding: "3px 8px", borderRadius: 4,
            textTransform: "uppercase", letterSpacing: 1,
            background: `${diffColor}15`, color: diffColor, border: `1px solid ${diffColor}30`,
          }}>{question.difficulty}</span>
          <span style={{ fontSize: 9, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1 }}>
            {question.domain.replace(/-/g, " ")}
          </span>
          <span style={{ fontSize: 9, color: "var(--muted)", marginLeft: "auto" }}>
            {revealed ? "Enter / Space → nästa" : "Tangentbord: A B C D"}
          </span>
        </div>
        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontWeight: 500 }}>
          {question.question}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handlePick(idx)}
            className={getOptionClass(idx)}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 18px",
              background: "var(--bg-surface)", border: "1px solid var(--border)",
              borderRadius: 8, cursor: revealed ? "default" : "pointer",
              textAlign: "left", fontSize: 12.5, color: "var(--text)",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.2s",
            }}
          >
            <span style={{
              width: 28, height: 28, borderRadius: 6, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
              background: "var(--bg-elevated)", border: "1px solid var(--border)",
              color: "var(--text-dim)",
            }}>{LABELS[idx]}</span>
            {opt}
          </button>
        ))}
      </div>

      {revealed && (
        <div style={{
          padding: "14px 16px", borderRadius: 8,
          background: chosen === question.correct ? "#00e67608" : "#ff4c6a08",
          border: `1px solid ${chosen === question.correct ? "#00e67620" : "#ff4c6a20"}`,
          animation: "fadeIn 0.3s ease-out",
        }}>
          <div style={{
            fontSize: 10, fontWeight: 600, marginBottom: 6,
            color: chosen === question.correct ? "var(--green)" : "var(--red)",
          }}>
            {chosen === question.correct ? "✓ Rätt!" : "✗ Fel"} — Förklaring
          </div>
          <div style={{ fontSize: 11.5, color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 14 }}>
            {question.explanation}
          </div>
          {chosen !== question.correct && (
            <div style={{ marginBottom: 10 }}>
              <a
                href={`/resurser?domain=${question.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 10.5, color: "var(--cyan)",
                  textDecoration: "none", padding: "4px 10px", borderRadius: 4,
                  background: "#00e5ff08", border: "1px solid #00e5ff25",
                }}
              >
                📚 Se video om {question.domain.replace(/-/g, " ")} →
              </a>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleNext}
              className="nf-btn-primary"
              style={{ fontSize: 11, padding: "8px 20px" }}
            >
              {isLast ? "Se resultat →" : "Nästa fråga →"}
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
