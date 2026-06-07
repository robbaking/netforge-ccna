"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  onTick?: (seconds: number) => void;
}

export default function StudyTimer({ onTick }: Props) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickRef = useRef(0);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed((e) => e + 1);
        tickRef.current += 1;
        if (tickRef.current % 30 === 0 && onTick) {
          onTick(30);
        }
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const format = (s: number): string => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleToggle = () => {
    if (running && onTick && tickRef.current % 30 !== 0) {
      onTick(tickRef.current % 30);
    }
    setRunning((r) => !r);
  };

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
    tickRef.current = 0;
  };

  return (
    <div style={{
      padding: "14px 16px", borderRadius: 10,
      background: "linear-gradient(135deg, #00e5ff08, #7c4dff08)",
      border: "1px solid #00e5ff15",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div>
        <div style={{ fontSize: 10, color: "var(--text-dim)" }}>Study Timer</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>
          {format(elapsed)}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {elapsed > 0 && !running && (
          <button
            onClick={handleReset}
            className="nf-btn-secondary"
            style={{ fontSize: 10, padding: "8px 12px" }}
          >RESET</button>
        )}
        <button onClick={handleToggle} className="nf-btn-primary">
          {running ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}
