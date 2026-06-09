"use client";
import { useEffect, useState } from "react";

interface Props {
  totalSeconds: number;
  onExpire: () => void;
}

export default function ProvTimer({ totalSeconds, onExpire }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) { clearInterval(id); onExpire(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;
  const timeStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  const pct = remaining / totalSeconds;
  const color = pct > 0.25 ? "var(--green)" : pct > 0.1 ? "#ffb020" : "var(--red)";

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "6px 14px", borderRadius: 6,
      background: "var(--bg-elevated)", border: `1px solid ${color}30`,
    }}>
      <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1 }}>Tid kvar</span>
      <span style={{ fontSize: 14, fontWeight: 700, color, fontFamily: "'JetBrains Mono', monospace" }}>
        {timeStr}
      </span>
    </div>
  );
}
