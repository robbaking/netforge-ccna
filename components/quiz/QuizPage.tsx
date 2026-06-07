"use client";
import { useState } from "react";
import QuizConfig from "./QuizConfig";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";
import { getQuestions } from "@/lib/questions";
import { recordQuizResult } from "@/lib/progress";
import type { Question, Domain, Difficulty } from "@/lib/types";

type Phase = "config" | "quiz" | "results";

interface QuizState {
  questions: Question[];
  current: number;
  answers: (number | null)[];
  startTime: number;
}

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("config");
  const [quiz, setQuiz] = useState<QuizState | null>(null);

  function startQuiz(domain: Domain | "all", count: number, difficulty: Difficulty | "all") {
    const qs = getQuestions({ domain, count, difficulty });
    if (!qs.length) return;
    setQuiz({ questions: qs, current: 0, answers: new Array(qs.length).fill(null), startTime: Date.now() });
    setPhase("quiz");
  }

  function handleAnswer(idx: number) {
    if (!quiz) return;
    const updated = [...quiz.answers];
    updated[quiz.current] = idx;
    if (quiz.current + 1 >= quiz.questions.length) {
      // Last question answered — wait for next tick then go to results
      setQuiz({ ...quiz, answers: updated });
      setTimeout(() => {
        const correct = updated.filter((a, i) => a === quiz.questions[i].correct).length;
        const dom = quiz.questions[0].domain;
        recordQuizResult(dom, correct, quiz.questions.length);
        setPhase("results");
      }, 800);
    } else {
      setQuiz({ ...quiz, answers: updated, current: quiz.current + 1 });
    }
  }

  function restart() {
    setQuiz(null);
    setPhase("config");
  }

  if (phase === "config") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Quiz / Prov</span>
          <span style={{ width: 1, height: 16, background: "var(--border)" }} />
          <span style={{ fontSize: 11, color: "var(--text-dim)" }}>CCNA 200-301</span>
        </header>
        <QuizConfig onStart={startQuiz} />
      </div>
    );
  }

  if (phase === "quiz" && quiz) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Quiz</span>
            <span style={{ fontSize: 11, color: "var(--text-dim)" }}>
              {quiz.current + 1} / {quiz.questions.length}
            </span>
          </div>
          <button onClick={restart} className="nf-btn-secondary" style={{ fontSize: 10 }}>Avbryt</button>
        </div>
        {/* Progress bar */}
        <div className="glow-bar-track" style={{ marginBottom: 24, height: 3 }}>
          <div className="glow-bar-fill" style={{
            width: `${((quiz.current) / quiz.questions.length) * 100}%`,
            background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            boxShadow: "0 0 8px #00e5ff40",
          }} />
        </div>
        <QuizCard
          question={quiz.questions[quiz.current]}
          selectedAnswer={quiz.answers[quiz.current]}
          onAnswer={handleAnswer}
        />
      </div>
    );
  }

  if (phase === "results" && quiz) {
    const correct = quiz.answers.filter((a, i) => a === quiz.questions[i].correct).length;
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
        <QuizResults
          questions={quiz.questions}
          answers={quiz.answers}
          correct={correct}
          elapsed={Math.round((Date.now() - quiz.startTime) / 1000)}
          onRestart={restart}
        />
      </div>
    );
  }

  return null;
}
