"use client";

interface Props {
  pct: number;
  size?: number;
  stroke?: number;
}

export default function ScoreRing({ pct, size = 150, stroke = 9 }: Props) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  return (
    <div className="nf-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2 }}>
        Overall Score
      </div>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#7c4dff" />
            </linearGradient>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2a406030" strokeWidth={stroke} />
          <circle
            cx={size / 2} cy={size / 2} r={r} fill="none"
            stroke="url(#ringGrad)" strokeWidth={stroke}
            strokeDasharray={circ} strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px #00e5ff40)", transition: "stroke-dashoffset 0.8s ease-out" }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: 36, fontWeight: 700, color: "var(--text)" }}>
            {pct}<span style={{ fontSize: 14, color: "var(--text-dim)" }}>%</span>
          </span>
          <span style={{ fontSize: 8, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginTop: 2 }}>Readiness</span>
        </div>
      </div>
      <div style={{
        padding: "5px 14px", borderRadius: 20,
        background: "#00e5ff10", border: "1px solid #00e5ff20",
        fontSize: 9, color: "var(--cyan)",
      }}>Mål: 85%</div>
    </div>
  );
}
