"use client";

interface DomainData {
  id: string;
  label: string;
  weight: string;
  pct: number;
}

interface Props {
  domains: DomainData[];
}

function getColor(pct: number): string {
  if (pct >= 70) return "var(--green)";
  if (pct >= 50) return "var(--cyan)";
  return "var(--red)";
}

export default function DomainProgress({ domains }: Props) {
  return (
    <div className="nf-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2 }}>Exam Domains</span>
        <span style={{ fontSize: 9, color: "var(--muted)" }}>CCNA 200-301</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {domains.map((d) => {
          const color = getColor(d.pct);
          return (
            <div key={d.id}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 11.5, color: "var(--text)" }}>
                  {d.label}{" "}
                  <span style={{ color: "var(--muted)", fontSize: 10 }}>({d.weight})</span>
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color }}>{d.pct}%</span>
              </div>
              <div className="glow-bar-track">
                <div
                  className="glow-bar-fill"
                  style={{
                    width: `${d.pct}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                    boxShadow: `0 0 12px ${color}50, 0 0 4px ${color}30`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
