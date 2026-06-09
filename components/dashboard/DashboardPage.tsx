"use client";
import { useEffect, useState } from "react";
import { getProgress, addStudyTime } from "@/lib/progress";
import { DOMAINS, DOMAIN_WEIGHTS } from "@/lib/types";
import type { AppProgress, Domain } from "@/lib/types";
import { xpProgress } from "@/lib/xp";
import ScoreRing from "./ScoreRing";
import DomainProgress from "./DomainProgress";
import ActivityFeed from "./ActivityFeed";
import StudyTimer from "./StudyTimer";
import QuickActions from "./QuickActions";

const STATS_LABELS = [
  { key: "quizzes", label: "Quizzes", sub: "genomförda" },
  { key: "streak", label: "Streak", sub: "dagar i rad" },
  { key: "studytime", label: "Tid totalt", sub: "studietid" },
];

function formatTime(secs: number): string {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  if (h > 0) return `${h}.${String(m).padStart(2, "0")}h`;
  return `${m}m`;
}

function calcOverall(progress: AppProgress): number {
  const entries = Object.entries(progress.domains) as [Domain, { answered: number; correct: number }][];
  if (!entries.length) return 0;
  let weightedSum = 0;
  let totalWeight = 0;
  for (const [domainId, stats] of entries) {
    if (!stats || stats.answered === 0) continue;
    const weight = DOMAIN_WEIGHTS[domainId] ?? 1 / 6;
    const pct = stats.correct / stats.answered;
    weightedSum += pct * weight;
    totalWeight += weight;
  }
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : 0;
}

export default function DashboardPage() {
  const [progress, setProgress] = useState<AppProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
    const id = setInterval(() => setProgress(getProgress()), 5000);
    return () => clearInterval(id);
  }, []);

  const p = progress ?? { domains: {}, activities: [], streak: 0, lastActiveDate: "", studyTimeSeconds: 0, xp: 0 };

  const totalQuizzes = Object.values(p.domains).reduce((s, d) => {
    const sessions = d.answered > 0 ? Math.ceil(d.answered / 10) : 0;
    return s + sessions;
  }, 0);

  const overall = calcOverall(p);

  const domainData = DOMAINS.map((d) => {
    const dp = p.domains[d.id];
    const pct = dp && dp.answered > 0 ? Math.round((dp.correct / dp.answered) * 100) : 0;
    return { ...d, pct };
  });

  const weakAreas = [...domainData].sort((a, b) => a.pct - b.pct).slice(0, 2).filter(d => d.pct < 70);
  const xpData = xpProgress(p.xp ?? 0);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
      {/* Background glows */}
      <div style={{
        position: "fixed", top: -200, right: -200, width: 600, height: 600,
        background: "radial-gradient(circle, #00e5ff08 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", bottom: -300, left: 0, width: 500, height: 500,
        background: "radial-gradient(circle, #7c4dff06 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 22, position: "relative", zIndex: 1,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Dashboard</span>
          <span style={{ width: 1, height: 16, background: "var(--border)" }} />
          <span style={{ fontSize: 11, color: "var(--text-dim)" }}>CCNA 200-301</span>
        </div>
        <div style={{
          padding: "7px 14px",
          background: "linear-gradient(135deg, #00e5ff20, #7c4dff20)",
          border: "1px solid #00e5ff30",
          borderRadius: 6, color: "var(--cyan)", fontSize: 11, fontWeight: 500,
        }}>
          Mål: 85%
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 14 }}>
          {[
            { label: "Quizzes", value: String(totalQuizzes), sub: "genomförda" },
            { label: "Streak", value: String(p.streak), sub: "dagar i rad" },
            { label: "Tid totalt", value: formatTime(p.studyTimeSeconds), sub: "studietid" },
          ].map((s) => (
            <div key={s.label} className="nf-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px" }}>
              <div>
                <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1.5 }}>{s.label}</div>
                <div style={{ fontSize: 9, color: "var(--muted)", marginTop: 2 }}>{s.sub}</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "var(--text)" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* XP & Nivå */}
        <div className="nf-card" style={{ marginBottom: 14, padding: "16px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                ★ {p.xp ?? 0} XP
              </span>
              <span style={{
                fontSize: 9, padding: "2px 8px", borderRadius: 10,
                background: "#7c4dff20", border: "1px solid #7c4dff40", color: "var(--purple)",
                fontWeight: 600, textTransform: "uppercase", letterSpacing: 1,
              }}>
                Nivå {xpData.level}
              </span>
              <span style={{ fontSize: 10, color: "var(--text-dim)" }}>{xpData.title}</span>
            </div>
            <span style={{ fontSize: 10, color: "var(--text-dim)" }}>
              {xpData.intoLevel} / {xpData.needed} XP till nästa nivå
            </span>
          </div>
          <div style={{ height: 4, borderRadius: 2, background: "var(--bg-elevated)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <div style={{
              width: `${xpData.pct}%`,
              height: "100%",
              background: "linear-gradient(90deg, var(--purple), var(--cyan))",
              boxShadow: "0 0 8px #7c4dff40",
              transition: "width 0.8s ease-out",
              borderRadius: 2,
            }} />
          </div>
        </div>

        {/* Score + Domains row */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 14, marginBottom: 14 }}>
          <ScoreRing pct={overall} />
          <DomainProgress domains={domainData} />
        </div>

        {/* Quick actions + Activity */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <QuickActions weakAreas={weakAreas} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <ActivityFeed activities={p.activities} />
            <StudyTimer onTick={(secs) => addStudyTime(secs)} />
          </div>
        </div>
      </div>
    </div>
  );
}
