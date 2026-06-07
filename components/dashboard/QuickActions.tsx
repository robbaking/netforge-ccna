"use client";
import Link from "next/link";

interface WeakArea {
  label: string;
  pct: number;
}

interface Props {
  weakAreas: WeakArea[];
}

const actions = [
  { t: "Starta Quiz", s: "Slumpmässig med timer", accent: "#00e5ff", icon: "▤", href: "/quiz" },
  { t: "Subnetting", s: "Interaktiv kalkylator", accent: "#7c4dff", icon: "⊟", href: "/subnetting" },
];

export default function QuickActions({ weakAreas }: Props) {
  return (
    <div className="nf-card">
      <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 14 }}>
        Snabbstart
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
        {actions.map((q) => (
          <Link key={q.href} href={q.href} style={{ textDecoration: "none" }}>
            <div style={{
              padding: 14, background: "var(--bg-elevated)", border: "1px solid var(--border)",
              borderRadius: 8, display: "flex", alignItems: "center", gap: 12,
              cursor: "pointer", transition: "border-color 0.15s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = q.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: `${q.accent}12`, border: `1px solid ${q.accent}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: q.accent, fontSize: 15,
              }}>{q.icon}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)" }}>{q.t}</div>
                <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>{q.s}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {weakAreas.length > 0 && (
        <div style={{
          padding: "12px 14px",
          background: "#ff4c6a08", border: "1px solid #ff4c6a15", borderRadius: 6,
        }}>
          <div style={{ fontSize: 10, color: "var(--red)", fontWeight: 600, marginBottom: 6 }}>
            ⚠ Fokusområden
          </div>
          <div style={{ fontSize: 10, color: "var(--text-dim)", lineHeight: 1.8 }}>
            {weakAreas.map((w, i) => (
              <div key={i}>
                {w.label} ({w.pct}%) —{" "}
                <Link href="/quiz" style={{ color: "var(--cyan)", textDecoration: "none" }}>
                  Starta quiz →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {weakAreas.length === 0 && (
        <div style={{
          padding: "12px 14px",
          background: "#00e67608", border: "1px solid #00e67615", borderRadius: 6,
          fontSize: 10, color: "var(--green)",
        }}>
          ✓ Inga svaga områden identifierade — fortsätt träna!
        </div>
      )}
    </div>
  );
}
