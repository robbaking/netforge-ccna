"use client";
import type { Activity } from "@/lib/types";

interface Props {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: Props) {
  const items = activities.length > 0 ? activities.slice(0, 6) : [
    { text: "Välkommen till NetForge!", result: "👋", good: true, time: "Nu" },
    { text: "Starta ett quiz för att komma igång", result: "→", good: true, time: "" },
  ];

  return (
    <div className="nf-card" style={{ flex: 1 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2 }}>Aktivitet</span>
        <span style={{ fontSize: 9, color: "var(--cyan)" }}>{activities.length} sessioner</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((ac, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 12px", background: "var(--bg-elevated)", borderRadius: 6,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
              background: ac.good ? "var(--green)" : "var(--red)",
              boxShadow: ac.good ? "0 0 6px #00e67650" : "0 0 6px #ff4c6a50",
            }} />
            {ac.time && (
              <span style={{ fontSize: 10, color: "var(--muted)", flexShrink: 0 }}>{ac.time}</span>
            )}
            <span style={{ fontSize: 11, color: "var(--text)", flex: 1 }}>{ac.text}</span>
            <span style={{
              fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4,
              background: ac.good ? "#00e67612" : "#ff4c6a12",
              color: ac.good ? "var(--green)" : "var(--red)",
            }}>{ac.result}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
