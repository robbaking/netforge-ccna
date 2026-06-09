"use client";

import { useState } from "react";
import { resources, VideoResource } from "@/data/resources";
import { Domain, DOMAINS } from "@/lib/types";

const DOMAIN_COLORS: Record<Domain, string> = {
  "network-fundamentals":     "var(--cyan)",
  "network-access":           "#7c4dff",
  "ip-connectivity":          "#00e676",
  "ip-services":              "#ff9800",
  "security-fundamentals":    "var(--red)",
  "automation-programmability":"#00b0ff",
};

const DOMAIN_LABELS: Record<Domain, string> = {
  "network-fundamentals":     "Net Fund.",
  "network-access":           "Net Access",
  "ip-connectivity":          "IP Connect.",
  "ip-services":              "IP Services",
  "security-fundamentals":    "Security",
  "automation-programmability":"Automation",
};

interface Props {
  initialDomain?: string;
}

export default function ResurserPage({ initialDomain }: Props) {
  const validDomain = initialDomain && ["network-fundamentals","network-access","ip-connectivity","ip-services","security-fundamentals","automation-programmability"].includes(initialDomain)
    ? initialDomain as Domain
    : "all";
  const [activeFilter, setActiveFilter] = useState<Domain | "all">(validDomain);

  const filtered = activeFilter === "all"
    ? resources
    : resources.filter((r) => r.domain === activeFilter);

  const linkedCount = resources.filter((r) => r.videoUrl !== "").length;

  return (
    <div style={{ marginLeft: 68, padding: 24, minHeight: "100vh", position: "relative" }}>
      {/* Ambient glows */}
      <div style={{
        position: "fixed", top: -100, right: -100, width: 600, height: 600,
        background: "radial-gradient(circle, #00e5ff08, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", bottom: -100, left: -50, width: 500, height: 500,
        background: "radial-gradient(circle, #7c4dff06, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{ marginBottom: 24, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
              Läranderesurser
            </h1>
            <p style={{ fontSize: 11, color: "var(--text-dim)" }}>
              Jeremy's IT Lab · CCNA 200-301
            </p>
          </div>
          <div style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "6px 14px",
            fontSize: 11,
            color: linkedCount > 0 ? "var(--cyan)" : "var(--muted)",
          }}>
            {linkedCount} / {resources.length} videos länkade
          </div>
        </div>
      </div>

      {/* Domain filter */}
      <div style={{
        display: "flex", gap: 8, flexWrap: "wrap",
        marginBottom: 24, position: "relative", zIndex: 1,
      }}>
        <button
          onClick={() => setActiveFilter("all")}
          style={{
            padding: "5px 14px",
            borderRadius: 20,
            fontSize: 10,
            fontWeight: 600,
            fontFamily: "'JetBrains Mono', monospace",
            cursor: "pointer",
            border: "1px solid",
            transition: "all 0.15s",
            borderColor: activeFilter === "all" ? "var(--cyan)" : "var(--border)",
            background: activeFilter === "all" ? "#00e5ff15" : "var(--bg-elevated)",
            color: activeFilter === "all" ? "var(--cyan)" : "var(--text-dim)",
          }}
        >
          ALL
        </button>
        {DOMAINS.map((d) => {
          const active = activeFilter === d.id;
          const color = DOMAIN_COLORS[d.id];
          return (
            <button
              key={d.id}
              onClick={() => setActiveFilter(d.id)}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                fontSize: 10,
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                cursor: "pointer",
                border: "1px solid",
                transition: "all 0.15s",
                borderColor: active ? color : "var(--border)",
                background: active ? `${color}18` : "var(--bg-elevated)",
                color: active ? color : "var(--text-dim)",
              }}
            >
              {d.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Resource grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 14,
        position: "relative",
        zIndex: 1,
      }}>
        {filtered.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: VideoResource }) {
  const color = DOMAIN_COLORS[resource.domain];
  const hasUrl = resource.videoUrl !== "";

  return (
    <div className="nf-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Top row: exam ref + domain badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontSize: 9,
          fontWeight: 700,
          color: "var(--cyan)",
          background: "var(--cyan-glow)",
          border: "1px solid #00e5ff25",
          borderRadius: 4,
          padding: "2px 7px",
          letterSpacing: 1,
        }}>
          {resource.examRef}
        </span>
        <span style={{
          fontSize: 9,
          color: color,
          background: `${color}15`,
          border: `1px solid ${color}30`,
          borderRadius: 4,
          padding: "2px 7px",
          letterSpacing: 0.5,
        }}>
          {DOMAIN_LABELS[resource.domain]}
        </span>
      </div>

      {/* Topic name */}
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.4 }}>
        {resource.topic}
      </div>

      {/* Description */}
      <div style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5, flex: 1 }}>
        {resource.description}
      </div>

      {/* CTA button */}
      {hasUrl ? (
        <a
          href={resource.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="nf-btn-primary" style={{ width: "100%", textAlign: "center" }}>
            Se video ▶
          </button>
        </a>
      ) : (
        <button
          disabled
          style={{
            width: "100%",
            padding: "8px 20px",
            background: "var(--bg-elevated)",
            color: "var(--muted)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            fontWeight: 600,
            border: "1px solid var(--border)",
            borderRadius: 6,
            cursor: "not-allowed",
          }}
        >
          Länk saknas
        </button>
      )}
    </div>
  );
}
