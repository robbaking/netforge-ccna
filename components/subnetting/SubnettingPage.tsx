"use client";
import { useState } from "react";
import SubnetCalc from "./SubnetCalc";
import SubnetTrainer from "./SubnetTrainer";

type Tab = "calc" | "trainer";

export default function SubnettingPage() {
  const [tab, setTab] = useState<Tab>("calc");

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: active ? 600 : 400,
    background: active ? "#00e5ff15" : "var(--bg-elevated)",
    border: `1px solid ${active ? "var(--cyan)" : "var(--border)"}`,
    color: active ? "var(--cyan)" : "var(--text-dim)",
    transition: "all 0.15s",
    fontFamily: "'JetBrains Mono', monospace",
  });

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-base)", padding: 22 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text)" }}>Subnetting</span>
          <span style={{ width: 1, height: 16, background: "var(--border)" }} />
          <span style={{ fontSize: 11, color: "var(--text-dim)" }}>IP / CIDR-kalkylator</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={tabStyle(tab === "calc")} onClick={() => setTab("calc")}>⊟ Kalkylator</button>
          <button style={tabStyle(tab === "trainer")} onClick={() => setTab("trainer")}>▤ Träning</button>
        </div>
      </header>
      {tab === "calc" ? <SubnetCalc /> : <SubnetTrainer />}
    </div>
  );
}
