"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";
import { DOMAINS } from "@/lib/types";
import type { AppProgress } from "@/lib/types";
import { STUDY_PHASES, phaseProgress, recommendedPhase, isPhaseUnlocked } from "@/lib/studypath";
import { PHASE_CHECKLISTS } from "@/data/phasechecklist";
import { getChecked, toggleChecked, canUnlockItem } from "@/lib/checklistprogress";

const EMPTY: AppProgress = { domains: {}, activities: [], streak: 0, lastActiveDate: "", studyTimeSeconds: 0, xp: 0 };

function domainLabel(id: string): string {
  return DOMAINS.find((d) => d.id === id)?.label ?? id;
}

export default function StudyPathPage() {
  const [progress, setProgress] = useState<AppProgress>(EMPTY);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    setProgress(getProgress());
    setChecked(getChecked());
  }, []);

  const recommended = recommendedPhase(progress);

  function handleToggle(id: string) {
    setChecked(toggleChecked(id));
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Studieväg</span>
        <span style={{ width: 1, height: 16, background: "var(--border)" }} />
        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>CCNA 200-301 · 4 faser</span>
      </header>
      <p style={{ fontSize: 11.5, color: "var(--text-dim)", maxWidth: 620, lineHeight: 1.7, marginBottom: 24 }}>
        Följ faserna i ordning. Slutför varje fas med minst 70% rätt i quizet
        innan du går vidare — labchecklistorna hjälper dig att träna praktiska
        färdigheter innan du testas.
      </p>

      <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 14 }}>
        {STUDY_PHASES.map((phase, i) => {
          const pr = phaseProgress(progress, phase);
          const unlocked = isPhaseUnlocked(phase, progress);
          const isRecommended = phase.id === recommended.id && unlocked;
          const done = pr.answered > 0 && pr.pct >= 70;
          const barColor = pr.pct >= 70 ? "var(--green)" : pr.pct >= 50 ? "var(--cyan)" : "var(--red)";
          const phaseChecklist = PHASE_CHECKLISTS.filter((item) => item.phase === phase.num);
          const checkedCount = phaseChecklist.filter((item) => checked.includes(item.id)).length;

          return (
            <div
              key={phase.id}
              className="nf-card"
              style={{
                position: "relative",
                border: `1px solid ${!unlocked ? "var(--border)" : isRecommended ? phase.accent : "var(--border)"}`,
                boxShadow: isRecommended ? `0 0 18px ${phase.accent}22` : "none",
                opacity: !unlocked ? 0.6 : 1,
              }}
            >
              {/* Connector line between phases */}
              {i < STUDY_PHASES.length - 1 && (
                <div style={{
                  position: "absolute", left: 34, bottom: -14, width: 2, height: 14,
                  background: "var(--border)",
                }} />
              )}

              {/* Lock banner */}
              {!unlocked && (
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 12px", marginBottom: 14,
                  background: "#ffb02010", border: "1px solid #ffb02030",
                  borderRadius: 6, fontSize: 11, color: "#ffb020",
                }}>
                  <span>🔒</span>
                  <div>
                    <span style={{ fontWeight: 600 }}>Låst — </span>
                    slutför Fas {phase.num - 1} med minst 70% rätt i quizet för att låsa upp.
                    {i > 0 && (() => {
                      const prevPhase = STUDY_PHASES[i - 1];
                      const prevPr = phaseProgress(progress, prevPhase);
                      return (
                        <span style={{ marginLeft: 6, color: "var(--text-dim)" }}>
                          (nuvarande: {prevPr.pct}%)
                        </span>
                      );
                    })()}
                  </div>
                </div>
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
                    {!unlocked && (
                      <span style={{
                        fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 10,
                        background: "#ffb02018", color: "#ffb020", letterSpacing: 0.5,
                        textTransform: "uppercase",
                      }}>
                        🔒 Låst
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
                    {/* 70% marker */}
                    <div style={{ position: "relative", height: 10 }}>
                      <div style={{
                        position: "absolute", left: "70%", top: 2,
                        width: 1, height: 6, background: "var(--text-dim)", opacity: 0.5,
                      }} />
                      <span style={{
                        position: "absolute", left: "70%", top: 2,
                        fontSize: 8, color: "var(--text-dim)", transform: "translateX(-50%)",
                        marginTop: 6,
                      }}>70%</span>
                    </div>
                  </div>

                  {/* Lab-checklista */}
                  <div style={{ marginTop: 18 }}>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      marginBottom: 8,
                    }}>
                      <span style={{ fontSize: 10, color: "var(--cyan)", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600 }}>
                        Lab-checklista
                      </span>
                      <span style={{ fontSize: 9, color: checkedCount === phaseChecklist.length && phaseChecklist.length > 0 ? "var(--green)" : "var(--text-dim)" }}>
                        {checkedCount}/{phaseChecklist.length} klara
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {phaseChecklist.map((item, itemIndex) => {
                        const isDone = checked.includes(item.id);
                        const itemUnlocked = unlocked && canUnlockItem(phase.num, itemIndex, checked);
                        const isLocked = !itemUnlocked;

                        return (
                          <div
                            key={item.id}
                            style={{
                              display: "flex", alignItems: "flex-start", gap: 8,
                              padding: "6px 8px", borderRadius: 5,
                              background: isDone ? "#00e67608" : isLocked ? "var(--bg-base)" : "var(--bg-elevated)",
                              border: `1px solid ${isDone ? "#00e67620" : isLocked ? "var(--border)" : "var(--border)"}`,
                              opacity: isLocked ? 0.45 : 1,
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              disabled={isLocked || Boolean(item.labId)}
                              onChange={() => !isLocked && !item.labId && handleToggle(item.id)}
                              style={{ marginTop: 1, accentColor: "var(--green)", cursor: isLocked || item.labId ? "default" : "pointer", flexShrink: 0 }}
                            />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <span style={{
                                fontSize: 10.5, color: isDone ? "var(--text-dim)" : isLocked ? "var(--text-dim)" : "var(--text)",
                                textDecoration: isDone ? "line-through" : "none", lineHeight: 1.5,
                                display: "block",
                              }}>
                                {isLocked ? "🔒 " : ""}{item.text}
                              </span>
                              {item.labId && !isLocked && (
                                <Link
                                  href={`/topologier?lab=${item.labId}`}
                                  style={{
                                    display: "inline-block", marginTop: 4,
                                    fontSize: 9.5, color: isDone ? "var(--green)" : "var(--cyan)",
                                    textDecoration: "none",
                                    padding: "2px 8px", borderRadius: 3,
                                    border: `1px solid ${isDone ? "var(--green)" : "var(--cyan)"}30`,
                                    background: isDone ? "#00e67608" : "#00e5ff08",
                                  }}
                                >
                                  {isDone ? "✓ Klar" : "Öppna lab →"}
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Knappar */}
                  <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                    <Link
                      href={unlocked ? `/quiz?domain=${phase.domains[0]}` : "#"}
                      className="nf-btn-secondary"
                      style={{
                        fontSize: 11, display: "inline-block", textDecoration: "none",
                        opacity: unlocked ? 1 : 0.4, pointerEvents: unlocked ? "auto" : "none",
                      }}
                    >
                      Starta quiz ▶
                    </Link>
                    <Link
                      href={unlocked ? "/topologier" : "#"}
                      style={{
                        fontSize: 11, display: "inline-block", textDecoration: "none",
                        padding: "6px 12px", borderRadius: 5,
                        border: "1px solid var(--border)", color: "var(--text-dim)",
                        opacity: unlocked ? 1 : 0.4, pointerEvents: unlocked ? "auto" : "none",
                      }}
                    >
                      Topologi-labs ◈
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
