"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";
import { DOMAINS } from "@/lib/types";
import type { AppProgress } from "@/lib/types";
import { STUDY_PHASES, phaseProgress, recommendedPhase } from "@/lib/studypath";

const EMPTY: AppProgress = { domains: {}, activities: [], streak: 0, lastActiveDate: "", studyTimeSeconds: 0, xp: 0 };

function domainLabel(id: string): string {
  return DOMAINS.find((d) => d.id === id)?.label ?? id;
}

export default function StudyPathPage() {
  const [progress, setProgress] = useState<AppProgress>(EMPTY);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const recommended = recommendedPhase(progress);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Studieväg</span>
        <span style={{ width: 1, height: 16, background: "var(--border)" }} />
        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>CCNA 200-301 · 4 faser</span>
      </header>
      <p style={{ fontSize: 11.5, color: "var(--text-dim)", maxWidth: 620, lineHeight: 1.7, marginBottom: 24 }}>
        Följ faserna i ordning. Varje fas bygger på den föregående — börja med
        den fas som är markerad som rekommenderad och jobba dig nedåt.
      </p>

      <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 14 }}>
        {STUDY_PHASES.map((phase, i) => {
          const pr = phaseProgress(progress, phase);
          const isRecommended = phase.id === recommended.id;
          const done = pr.answered > 0 && pr.pct >= 70;
          const barColor = pr.pct >= 70 ? "var(--green)" : pr.pct >= 50 ? "var(--cyan)" : "var(--red)";

          return (
            <div
              key={phase.id}
              className="nf-card"
              style={{
                position: "relative",
                border: `1px solid ${isRecommended ? phase.accent : "var(--border)"}`,
                boxShadow: isRecommended ? `0 0 18px ${phase.accent}22` : "none",
              }}
            >
              {/* Connector line between phases */}
              {i < STUDY_PHASES.length - 1 && (
                <div style={{
                  position: "absolute", left: 34, bottom: -14, width: 2, height: 14,
                  background: "var(--border)",
                }} />
              )}

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                {/* Number badge */}
                <div style={{
                  flexShrink: 0, width: 38, height: 38, borderRadius: "50%",
                  background: `${phase.accent}14`, border: `1px solid ${phase.accent}`,
                  color: phase.accent, fontSize: 15, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {done ? "✓" : phase.num}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
                      Fas {phase.num}: {phase.label}
                    </span>
                    {isRecommended && (
                      <span style={{
                        fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 10,
                        background: `${phase.accent}18`, color: phase.accent, letterSpacing: 0.5,
                        textTransform: "uppercase",
                      }}>
                        Rekommenderad nästa
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4, lineHeight: 1.6 }}>
                    {phase.description}
                  </div>

                  {/* Domains covered */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                    {phase.domains.map((d) => (
                      <span key={d} style={{
                        fontSize: 9.5, padding: "2px 8px", borderRadius: 4,
                        background: "var(--bg-elevated)", border: "1px solid var(--border)",
                        color: "var(--text-dim)",
                      }}>
                        {domainLabel(d)}
                      </span>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div style={{ marginTop: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 10, color: "var(--text-dim)" }}>
                        {pr.answered} besvarade · {pr.totalQuestions} frågor i fasen
                      </span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: barColor }}>
                        {pr.pct}% rätt
                      </span>
                    </div>
                    <div className="glow-bar-track">
                      <div
                        className="glow-bar-fill"
                        style={{
                          width: `${pr.pct}%`,
                          background: `linear-gradient(90deg, ${barColor}, ${barColor}cc)`,
                          boxShadow: `0 0 12px ${barColor}50`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Start quiz */}
                  <div style={{ marginTop: 14 }}>
                    <Link
                      href={`/quiz?domain=${phase.domains[0]}`}
                      className="nf-btn-secondary"
                      style={{ fontSize: 11, display: "inline-block", textDecoration: "none" }}
                    >
                      Starta quiz för denna fas ▶
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
