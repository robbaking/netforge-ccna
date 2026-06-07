"use client";
import { useState } from "react";
import { calculateSubnet } from "@/lib/subnet";
import type { SubnetResult } from "@/lib/subnet";

export default function SubnetCalc() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);
  const [result, setResult] = useState<SubnetResult | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const r = calculateSubnet(ip, cidr);
    if (!r) {
      setError("Ogiltig IP-adress eller CIDR. Kontrollera inmatningen.");
      setResult(null);
    } else {
      setResult(r);
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--bg-elevated)", border: "1px solid var(--border)",
    borderRadius: 6, padding: "10px 14px", color: "var(--text)", fontSize: 12,
    fontFamily: "'JetBrains Mono', monospace", outline: "none",
    transition: "border-color 0.15s",
  };

  const rows: { label: string; value: string; accent?: string }[] = result ? [
    { label: "Nätverksadress", value: `${result.network}/${result.cidr}`, accent: "var(--cyan)" },
    { label: "Broadcast", value: result.broadcast },
    { label: "Första användbara", value: result.firstHost, accent: "var(--green)" },
    { label: "Sista användbara", value: result.lastHost, accent: "var(--green)" },
    { label: "Antal värdar", value: result.hosts.toLocaleString("sv-SE") },
    { label: "Subnätmask", value: result.mask },
    { label: "Mask (binär)", value: result.maskBinary },
    { label: "Wildcard mask", value: result.wildcard },
  ] : [];

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div className="nf-card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          Ange IP-adress och prefix
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 10, color: "var(--text-dim)", display: "block", marginBottom: 6 }}>IP-adress</label>
            <input
              type="text" value={ip} onChange={(e) => setIp(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              style={{ ...inputStyle, width: "100%" }}
              placeholder="192.168.1.0"
            />
          </div>
          <div style={{ width: 90 }}>
            <label style={{ fontSize: 10, color: "var(--text-dim)", display: "block", marginBottom: 6 }}>CIDR (/)</label>
            <input
              type="number" value={cidr} min={0} max={32}
              onChange={(e) => setCidr(Number(e.target.value))}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              style={{ ...inputStyle, width: "100%" }}
            />
          </div>
          <button className="nf-btn-primary" onClick={calculate} style={{ padding: "10px 20px", whiteSpace: "nowrap" }}>
            Beräkna
          </button>
        </div>
        {error && (
          <div style={{ marginTop: 10, fontSize: 11, color: "var(--red)" }}>{error}</div>
        )}
      </div>

      {result && (
        <div className="nf-card">
          <div style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
            Resultat — {ip}/{cidr}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {rows.map((row, i) => (
              <div key={row.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 0",
                borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{row.label}</span>
                <span style={{
                  fontSize: 12, fontWeight: 600,
                  color: row.accent ?? "var(--text)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!result && !error && (
        <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-dim)", fontSize: 11 }}>
          Ange en IP-adress och klicka <span style={{ color: "var(--cyan)" }}>Beräkna</span>
        </div>
      )}
    </div>
  );
}
