"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import QuizConfig from "./QuizConfig";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";
import { getQuestions, getQuestionsByIds } from "@/lib/questions";
import { recordQuizResult } from "@/lib/progress";
import { saveAttempt, getWrongQuestionIds } from "@/lib/quizdb";
import { DOMAINS } from "@/lib/types";
import type { Question, Domain, Difficulty, QuizAttempt } from "@/lib/types";

type Phase = "config" | "quiz" | "results";

interface QuizState {
  questions: Question[];
  current: number;
  answers: (number | null)[];
  startTime: number;
}

function QuizPageInner() {
  const params = useSearchParams();
  const domainParam = params.get("domain");
  const initialDomain: Domain | "all" =
    domainParam && DOMAINS.some((d) => d.id === domainParam)
      ? (domainParam as Domain)
      : "all";

  const [phase, setPhase] = useState<Phase>("config");
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [configDomain, setConfigDomain] = useState<Domain | "all">(initialDomain);
  const [configDifficulty, setConfigDifficulty] = useState<Difficulty | "all">("all");

  function startQuiz(
    domain: Domain | "all",
    count: number,
    difficulty: Difficulty | "all",
    fromWrongIds?: string[]
  ) {
    let qs: Question[];
    if (fromWrongIds && fromWrongIds.length > 0) {
      qs = getQuestionsByIds(fromWrongIds).slice(0, count);
    } else {
      qs = getQuestions({ domain, count, difficulty });
    }
    if (!qs.length) return;
    setConfigDomain(domain);
    setConfigDifficulty(difficulty);
    setQuiz({
      questions: qs,
      current: 0,
      answers: new Array(qs.length).fill(null),
      startTime: Date.now(),
    });
    setPhase("quiz");
  }

  async function startRepeatWrong(count: number) {
    const ids = await getWrongQuestionIds(count);
    if (!ids.length) return;
    startQuiz("all", count, "all", ids);
  }

  function handleAnswer(idx: number) {
    if (!quiz) return;
    const updated = [...quiz.answers];
    updated[quiz.current] = idx;
    if (quiz.current + 1 >= quiz.questions.length) {
      const finalQuiz = { ...quiz, answers: updated };
      setQuiz(finalQuiz);
      const correct = updated.filter((a, i) => a === finalQuiz.questions[i].correct).length;
      const dom = finalQuiz.questions[0].domain;
      recordQuizResult(dom, correct, finalQuiz.questions.length);

      const attempt: QuizAttempt = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        domain: configDomain,
        difficulty: configDifficulty,
        total: finalQuiz.questions.length,
        correct,
        results: finalQuiz.questions.map((q, i) => ({
          questionId: q.id,
          chosen: updated[i],
          correct: updated[i] === q.correct,
        })),
      };
      saveAttempt(attempt);
      setPhase("results");
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
        <QuizConfig
          onStart={startQuiz}
          onRepeatWrong={startRepeatWrong}
          initialDomain={initialDomain}
        />
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
        <div className="glow-bar-track" style={{ marginBottom: 24, height: 3 }}>
          <div className="glow-bar-fill" style={{
            width: `${(quiz.current / quiz.questions.length) * 100}%`,
            background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            boxShadow: "0 0 8px #00e5ff40",
          }} />
        </div>
        <QuizCard
          question={quiz.questions[quiz.current]}
          selectedAnswer={quiz.answers[quiz.current]}
          onAnswer={handleAnswer}
          isLast={quiz.current + 1 === quiz.questions.length}
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
          onRepeatWrong={startRepeatWrong}
        />
      </div>
    );
  }

  return null;
}

export default function QuizPage() {
  return (
    <Suspense fallback={null}>
      <QuizPageInner />
    </Suspense>
  );
}
