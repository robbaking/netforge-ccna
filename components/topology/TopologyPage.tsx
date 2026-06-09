"use client";
import { useState, useEffect } from "react";
import { LAB_CATALOG } from "@/data/labcatalog";
import { STUDY_PHASES, isPhaseUnlocked } from "@/lib/studypath";
import { getProgress } from "@/lib/progress";
import LabCatalog from "./LabCatalog";
import LabCard from "./LabCard";

export default function TopologyPage() {
  const [selectedLabId, setSelectedLabId] = useState<string>("static-routes-basic");
  const [unlockedPhases, setUnlockedPhases] = useState<Set<number>>(new Set([1]));

  useEffect(() => {
    const progress = getProgress();
    const unlocked = new Set<number>([1]);
    STUDY_PHASES.forEach((phase) => {
      if (isPhaseUnlocked(phase, progress)) unlocked.add(phase.num);
    });
    setUnlockedPhases(unlocked);
  }, []);

  const selectedLab = LAB_CATALOG.find(l => l.id === selectedLabId) ?? LAB_CATALOG[0];
  const isUnlocked = unlockedPhases.has(selectedLab.phase);

  return (
    <div style={{
      display: "flex",
      height: "100%",
      minHeight: 0,
      background: "var(--bg-base)",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      <LabCatalog selectedId={selectedLabId} onSelect={setSelectedLabId} />
      <LabCard key={selectedLabId} lab={selectedLab} isUnlocked={isUnlocked} />
    </div>
  );
}
