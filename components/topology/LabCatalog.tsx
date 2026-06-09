"use client";
import { useState, useEffect } from "react";
import { LAB_CATALOG } from "@/data/labcatalog";
import { STUDY_PHASES, isPhaseUnlocked } from "@/lib/studypath";
import { getLabProgress } from "@/lib/labprogress";
import { getProgress } from "@/lib/progress";

const PHASE_ACCENTS: Record<number, string> = {
  1: "#00e5ff",
  2: "#7c4dff",
  3: "#00e676",
  4: "#ffb020",
};

const DIFFICULTY_COLOR: Record<string, string> = {
  Lätt: "var(--green)",
  Medel: "var(--cyan)",
  Svår: "var(--red)",
};

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function LabCatalog({ selectedId, onSelect }: Props) {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [unlockedPhases, setUnlockedPhases] = useState<Set<number>>(new Set([1]));
  const [completedLabs, setCompletedLabs] = useState<Set<string>>(new Set());

  useEffect(() => {
    const progress = getProgress();
    const unlocked = new Set<number>([1]);
    STUDY_PHASES.forEach((phase) => {
      if (isPhaseUnlocked(phase, progress)) unlocked.add(phase.num);
    });
    setUnlockedPhases(unlocked);
    setCompletedLabs(new Set(getLabProgress().completed));
  }, []);

  // Switch to phase of selected lab when it changes externally
  useEffect(() => {
    if (selectedId) {
      const lab = LAB_CATALOG.find((l) => l.id === selectedId);
      if (lab) setActivePhase(lab.phase);
    }
  }, [selectedId]);

  const phaseLabs = LAB_CATALOG.filter((l) => l.phase === activePhase);
  const phaseLabel = STUDY_PHASES.find((p) => p.num === activePhase)?.label ?? `Fas ${activePhase}`;

  return (
    <div style={{
      width: 260,
      flexShrink: 0,
      background: "var(--bg-surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
    }}>
      {/* Header */}
      <div style={{ padding: "16px 14px 12px", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
          Lab-katalog
        </div>
        <div style={{ fontSize: 9.5, color: "var(--text-dim)" }}>
          Jeremy's IT Lab · 63-dagars CCNA
        </div>
      </div>

      {/* Phase tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        {([1, 2, 3, 4] as const).map((ph) => {
          const isActive = activePhase === ph;
          const isUnlocked = unlockedPhases.has(ph);
          const accent = PHASE_ACCENTS[ph];
          return (
            <button
              key={ph}
              onClick={() => setActivePhase(ph)}
              style={{
                flex: 1,
                padding: "9px 0",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 0.3,
                border: "none",
                borderBottom: isActive ? `2px solid ${accent}` : "2px solid transparent",
                background: "none",
                cursor: "pointer",
                color: isActive ? accent : "var(--text-dim)",
                fontFamily: "'JetBrains Mono', monospace",
                opacity: isUnlocked ? 1 : 0.45,
              }}
            >
              {isUnlocked ? `Fas ${ph}` : `🔒 ${ph}`}
            </button>
          );
        })}
      </div>

      {/* Lock notice */}
      {!unlockedPhases.has(activePhase) && (
        <div style={{
          margin: "10px 10px 0",
          padding: "8px 10px",
          borderRadius: 6,
          background: "#ffb02010",
          border: "1px solid #ffb02030",
          fontSize: 9.5,
          color: "#ffb020",
          lineHeight: 1.6,
          flexShrink: 0,
        }}>
          🔒 Låst — Slutför Fas {activePhase - 1} med ≥ 70% i quizet.
        </div>
      )}

      {/* Phase heading */}
      <div style={{ padding: "10px 14px 4px", flexShrink: 0 }}>
        <span style={{
          fontSize: 9,
          color: PHASE_ACCENTS[activePhase],
          textTransform: "uppercase",
          letterSpacing: 1.5,
          fontWeight: 600,
        }}>
          {phaseLabel}
        </span>
      </div>

      {/* Lab list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "4px 8px 12px" }}>
        {phaseLabs.map((lab) => {
          const isActive = selectedId === lab.id;
          const isDone = completedLabs.has(lab.id);
          const isUnlocked = unlockedPhases.has(lab.phase);
          const accent = PHASE_ACCENTS[lab.phase];
          const diffColor = DIFFICULTY_COLOR[lab.difficulty];

          return (
            <button
              key={lab.id}
              onClick={() => onSelect(lab.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "9px 10px",
                borderRadius: 6,
                marginBottom: 4,
                border: `1px solid ${isActive ? accent : "var(--border)"}`,
                background: isActive ? `${accent}12` : "transparent",
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
                opacity: isUnlocked ? 1 : 0.5,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                <span style={{
                  fontSize: 10,
                  flexShrink: 0,
                  marginTop: 1,
                  color: isDone ? "var(--green)" : "var(--text-dim)",
                }}>
                  {isDone ? "✓" : "○"}
                </span>
                <span style={{
                  fontSize: 10.5,
                  color: isActive ? accent : "var(--text)",
                  lineHeight: 1.4,
                  flex: 1,
                }}>
                  {lab.title}
                </span>
                <span style={{
                  fontSize: 8,
                  fontWeight: 700,
                  color: diffColor,
                  flexShrink: 0,
                  letterSpacing: 0.3,
                  marginTop: 2,
                }}>
                  {lab.difficulty}
                </span>
              </div>
              <div style={{ fontSize: 9, color: "var(--text-dim)", marginTop: 3, marginLeft: 16 }}>
                Day {lab.jeremyDay}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
