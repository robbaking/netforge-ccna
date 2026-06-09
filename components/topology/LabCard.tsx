"use client";
import { useState, useEffect, useRef } from "react";
import { generateByKey, getDeviceConfig } from "@/lib/topology";
import type { Topology, TopoDevice } from "@/lib/topology";
import type { LabEntry } from "@/data/labcatalog";
import { markLabDone, isLabDone } from "@/lib/labprogress";
import { TopoSvg } from "./TopoSvg";
import { verifyConfig, isVerified } from "@/lib/labverify";
import type { VerificationResult } from "@/lib/labverify";
import { markLabChecked } from "@/lib/checklistprogress";
import { PHASE_CHECKLISTS } from "@/data/phasechecklist";
import { addXp } from "@/lib/progress";
import { XP } from "@/lib/xp";

const DIFFICULTY_COLOR: Record<string, string> = {
  Lätt: "var(--green)",
  Medel: "var(--cyan)",
  Svår: "var(--red)",
};

const PHASE_ACCENTS: Record<number, string> = {
  1: "#00e5ff",
  2: "#7c4dff",
  3: "#00e676",
  4: "#ffb020",
};

const DOMAIN_LABELS: Record<string, string> = {
  "network-fundamentals": "Network Fundamentals",
  "network-access": "Network Access",
  "ip-connectivity": "IP Connectivity",
  "ip-services": "IP Services",
  "security-fundamentals": "Security Fundamentals",
  "automation-programmability": "Automation & Prog.",
};

// ─── Zoom/pan SVG canvas ──────────────────────────────────────────────────────

function TopoCanvas({ topo, onSelect }: { topo: Topology; onSelect: (d: TopoDevice) => void }) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => { setZoom(1); setPan({ x: 0, y: 0 }); }, [topo.id]);

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    setZoom(z => Math.min(2.5, Math.max(0.4, z - e.deltaY * 0.001)));
  }
  function onMouseDown(e: React.MouseEvent) {
    if ((e.target as Element).closest("[data-device]")) return;
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPan(p => ({ x: p.x + dx, y: p.y + dy }));
  }
  function onMouseUp() { dragging.current = false; }

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden", cursor: "grab", userSelect: "none" }}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <TopoSvg
        topo={topo}
        onSelect={onSelect}
        svgStyle={{
          transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          transformOrigin: "center center",
          transition: dragging.current ? "none" : "transform 0.05s",
        }}
      />
      <div style={{
        position: "absolute", bottom: 8, right: 8,
        background: "#060a1488", border: "1px solid var(--border)",
        borderRadius: 4, padding: "3px 8px", fontSize: 9, color: "var(--text-dim)",
        pointerEvents: "none",
      }}>
        {Math.round(zoom * 100)}% · scroll=zoom · drag=pan
      </div>
    </div>
  );
}

// ─── Device config modal ──────────────────────────────────────────────────────

function ConfigModal({ device, topo, onClose }: { device: TopoDevice; topo: Topology; onClose: () => void }) {
  const config = getDeviceConfig(device, topo);
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(config);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div
      style={{ position: "absolute", inset: 0, background: "#060a14bb", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={onClose}
    >
      <div
        style={{ width: 520, maxHeight: "80%", background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", display: "flex", flexDirection: "column" }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{device.label}</span>
            <span style={{ marginLeft: 10, fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase" }}>{device.type}</span>
            {device.ip && <span style={{ marginLeft: 8, fontSize: 10, color: "var(--cyan)" }}>{device.ip}</span>}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={copy}
              style={{ padding: "4px 10px", borderRadius: 4, fontSize: 10, cursor: "pointer", background: copied ? "#00e67620" : "transparent", border: `1px solid ${copied ? "var(--green)" : "var(--border)"}`, color: copied ? "var(--green)" : "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {copied ? "✓ Kopierad" : "⎘ Kopiera"}
            </button>
            <button
              onClick={onClose}
              style={{ padding: "4px 8px", borderRadius: 4, fontSize: 11, cursor: "pointer", background: "transparent", border: "1px solid var(--border)", color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              ✕
            </button>
          </div>
        </div>
        <pre style={{ margin: 0, padding: "16px", overflowY: "auto", fontSize: 11.5, lineHeight: 1.65, color: "var(--text)", fontFamily: "'JetBrains Mono', monospace", background: "var(--bg-base)" }}>
          {config}
        </pre>
      </div>
    </div>
  );
}

// ─── Facit section ────────────────────────────────────────────────────────────

function FacitSection({ topo }: { topo: Topology }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copyConfig(deviceId: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(deviceId);
    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {topo.devices.map(device => {
        const config = getDeviceConfig(device, topo);
        const isCopied = copiedId === device.id;
        return (
          <div key={device.id} style={{ background: "var(--bg-elevated)", borderRadius: 8, border: "1px solid var(--border)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid var(--border)", background: "var(--bg-surface)" }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text)" }}>{device.label}</span>
                <span style={{ marginLeft: 8, fontSize: 9, color: "var(--text-dim)", textTransform: "uppercase" }}>{device.type}</span>
                {device.ip && <span style={{ marginLeft: 6, fontSize: 9, color: "var(--cyan)" }}>{device.ip}</span>}
              </div>
              <button
                onClick={() => copyConfig(device.id, config)}
                style={{ padding: "3px 8px", borderRadius: 3, fontSize: 9, cursor: "pointer", background: isCopied ? "#00e67618" : "transparent", border: `1px solid ${isCopied ? "var(--green)" : "var(--border)"}`, color: isCopied ? "var(--green)" : "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {isCopied ? "✓" : "⎘"}
              </button>
            </div>
            <pre style={{ margin: 0, padding: "10px 12px", fontSize: 9.5, lineHeight: 1.6, color: "var(--text)", fontFamily: "'JetBrains Mono', monospace", background: "var(--bg-base)", overflowX: "auto" }}>
              {config}
            </pre>
          </div>
        );
      })}
    </div>
  );
}

// ─── Verification panel ───────────────────────────────────────────────────────

function VerifyPanel({ lab, onVerified }: { lab: LabEntry; onVerified: () => void }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<VerificationResult[] | null>(null);
  const [verified, setVerified] = useState(false);

  const checks = lab.verificationChecks;
  if (!checks || checks.length === 0) return null;

  const target = PHASE_CHECKLISTS.find(item => item.labId === lab.id);
  const placeholder =
    target?.verificationTarget === "show-spanning-tree"
      ? "Klistra in output från: show spanning-tree"
      : target?.verificationTarget === "show-ip-nat-translations"
      ? "Klistra in output från: show ip nat translations"
      : "Klistra in output från: show running-config";

  function runVerify() {
    const res = verifyConfig(input, checks!);
    setResults(res);
    if (isVerified(res) && !verified) {
      setVerified(true);
      if (target) markLabChecked(target.id);
      onVerified();
    }
  }

  return (
    <div style={{
      marginTop: 20, padding: "14px 16px", borderRadius: 8,
      background: "var(--bg-elevated)", border: "1px solid var(--border)",
    }}>
      <div style={{ fontSize: 10, color: "var(--cyan)", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600, marginBottom: 10 }}>
        Verifiera lab
      </div>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        rows={6}
        style={{
          width: "100%", boxSizing: "border-box",
          background: "var(--bg-base)", border: "1px solid var(--border)",
          borderRadius: 6, padding: "10px 12px", resize: "vertical",
          fontSize: 11, color: "var(--text)", fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1.5, outline: "none",
        }}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
        <button
          onClick={runVerify}
          disabled={!input.trim()}
          className="nf-btn-primary"
          style={{ fontSize: 11, padding: "7px 16px", opacity: input.trim() ? 1 : 0.4 }}
        >
          Kör verifiering
        </button>
        {verified && (
          <span style={{ fontSize: 11, color: "var(--green)" }}>✓ Lab godkänd! +{XP.labComplete} XP</span>
        )}
      </div>

      {results && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 5 }}>
          {results.map(r => (
            <div key={r.check.id} style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              padding: "6px 10px", borderRadius: 5,
              background: r.passed ? "#00e67608" : r.check.required ? "#ff4c6a08" : "transparent",
              border: `1px solid ${r.passed ? "#00e67625" : r.check.required ? "#ff4c6a25" : "var(--border)"}`,
            }}>
              <span style={{ color: r.passed ? "var(--green)" : r.check.required ? "var(--red)" : "var(--text-dim)", fontSize: 12, flexShrink: 0 }}>
                {r.passed ? "✅" : r.check.required ? "❌" : "⚠️"}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: 10.5, color: "var(--text)" }}>{r.check.description}</span>
                {!r.passed && r.check.hint && (
                  <span style={{ display: "block", fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>
                    Hint: {r.check.hint}
                  </span>
                )}
              </div>
              {!r.check.required && (
                <span style={{ fontSize: 9, color: "var(--text-dim)", flexShrink: 0 }}>valfri</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main LabCard ─────────────────────────────────────────────────────────────

interface Props {
  lab: LabEntry;
  isUnlocked: boolean;
}

export default function LabCard({ lab, isUnlocked }: Props) {
  const [topo, setTopo] = useState<Topology>(() => generateByKey(lab.generatorKey));
  const [tasksDone, setTasksDone] = useState<boolean[]>([]);
  const [showFacit, setShowFacit] = useState(false);
  const [labDone, setLabDone] = useState(false);
  const [doneBanner, setDoneBanner] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<TopoDevice | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLabDone(isLabDone(lab.id));
  }, [lab.id]);

  const tasks = lab.tasksOverride ?? topo.tasks;
  const completedTasks = tasksDone.filter(Boolean).length;
  const accent = PHASE_ACCENTS[lab.phase];
  const diffColor = DIFFICULTY_COLOR[lab.difficulty];
  const domainLabel = DOMAIN_LABELS[lab.domain] ?? lab.domain;

  function regenerate() {
    setTopo(generateByKey(lab.generatorKey));
    setTasksDone([]);
    setSelectedDevice(null);
  }

  function toggleTask(i: number) {
    setTasksDone(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  function copyTask() {
    const text = [
      `${lab.title} (Fas ${lab.phase} · Jeremy Day ${lab.jeremyDay})`,
      "",
      lab.description,
      "",
      "Implementera följande:",
      ...tasks.map((t, i) => `${i + 1}. ${t}`),
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleLabDone() {
    if (!labDone) {
      markLabDone(lab.id);
      setLabDone(true);
      setDoneBanner(true);
      setTimeout(() => setDoneBanner(false), 3000);
    }
  }

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      minHeight: 0,
      overflowY: "auto",
      background: "var(--bg-base)",
    }}>
      {/* Header */}
      <div style={{
        padding: "16px 24px",
        borderBottom: "1px solid var(--border)",
        flexShrink: 0,
        background: "var(--bg-surface)",
      }}>
        <p style={{
          margin: "0 0 6px",
          fontSize: 11,
          color: "var(--text-dim)",
          fontWeight: 500,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
        }}>
          Fas {lab.phase} · Day {lab.jeremyDay} · {domainLabel}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ margin: 0, fontSize: 18, fontWeight: 500, color: "var(--text)" }}>
            {lab.title}
          </p>
          <span style={{
            fontSize: 12,
            fontWeight: 500,
            padding: "4px 14px",
            borderRadius: 6,
            background: `${diffColor}18`,
            color: diffColor,
            border: `1px solid ${diffColor}40`,
            flexShrink: 0,
          }}>
            {lab.difficulty}
          </span>
        </div>
      </div>

      {/* Lock banner */}
      {!isUnlocked && (
        <div style={{
          margin: "16px 24px 0",
          padding: "12px 16px",
          borderRadius: 8,
          background: "#ffb02010",
          border: "1px solid #ffb02030",
          fontSize: 11,
          color: "#ffb020",
          lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 700 }}>🔒 Låst — </span>
          Slutför Fas {lab.phase - 1} med minst 70% i quizet för att låsa upp.
        </div>
      )}

      {/* Done banner */}
      {doneBanner && (
        <div style={{
          margin: "12px 24px 0",
          padding: "10px 16px",
          borderRadius: 8,
          background: "#00e67614",
          border: "1px solid #00e67640",
          fontSize: 11,
          color: "var(--green)",
          fontWeight: 600,
          textAlign: "center",
        }}>
          ✓ Lab markerad som klar! +50 XP
        </div>
      )}

      <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* SVG topology */}
        <div>
          <div style={{
            height: 300,
            background: "var(--bg-surface)",
            borderRadius: 10,
            border: "1px solid var(--border)",
            overflow: "hidden",
            position: "relative",
            backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}>
            <TopoCanvas topo={topo} onSelect={setSelectedDevice} />
            {selectedDevice && (
              <ConfigModal
                device={selectedDevice}
                topo={topo}
                onClose={() => setSelectedDevice(null)}
              />
            )}
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 12, color: "var(--text-dim)", lineHeight: 1.65 }}>
            <span style={{ fontWeight: 500 }}>Figur 1.</span>{" "}
            {lab.description}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "var(--border)" }} />

        {/* Task list */}
        <div>
          <p style={{ margin: "0 0 1.25rem", fontSize: 13, fontWeight: 500, color: "var(--text)" }}>
            Implementera följande:
          </p>
          <ol style={{
            margin: 0,
            paddingLeft: "1.25rem",
            fontSize: 14,
            color: "var(--text)",
            lineHeight: 1.7,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}>
            {tasks.map((task, i) => (
              <li
                key={i}
                onClick={() => isUnlocked && toggleTask(i)}
                style={{
                  cursor: isUnlocked ? "pointer" : "default",
                  color: tasksDone[i] ? "var(--text-dim)" : "var(--text)",
                  textDecoration: tasksDone[i] ? "line-through" : "none",
                }}
              >
                {task}
              </li>
            ))}
          </ol>
          {completedTasks > 0 && completedTasks < tasks.length && (
            <p style={{ margin: "10px 0 0", fontSize: 10, color: "var(--text-dim)" }}>
              {completedTasks}/{tasks.length} uppgifter klara
            </p>
          )}
          {completedTasks === tasks.length && tasks.length > 0 && (
            <div style={{
              marginTop: 12,
              padding: "8px 12px",
              borderRadius: 6,
              background: "#00e67610",
              border: "1px solid #00e67630",
              fontSize: 11,
              color: "var(--green)",
              fontWeight: 600,
            }}>
              ✓ Alla uppgifter klara — markera labbet som klar!
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "var(--border)" }} />

        {/* Action buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button
            onClick={regenerate}
            style={{
              padding: "8px 14px",
              borderRadius: 5,
              fontSize: 11,
              cursor: "pointer",
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text-dim)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            ⟳ Generera ny subnät
          </button>

          <button
            onClick={copyTask}
            style={{
              padding: "8px 14px",
              borderRadius: 5,
              fontSize: 11,
              cursor: "pointer",
              border: `1px solid ${copied ? "var(--green)" : "var(--border)"}`,
              background: copied ? "#00e67610" : "transparent",
              color: copied ? "var(--green)" : "var(--text-dim)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {copied ? "✓ Kopierad!" : "⎘ Kopiera uppgiftstext"}
          </button>

          <button
            onClick={() => setShowFacit(v => !v)}
            style={{
              padding: "8px 14px",
              borderRadius: 5,
              fontSize: 11,
              cursor: "pointer",
              border: "1px solid var(--border)",
              background: showFacit ? "#00e5ff08" : "transparent",
              color: showFacit ? "var(--cyan)" : "var(--text-dim)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {showFacit ? "▲ Dölj facit" : "▾ Visa facit"}
          </button>

          {isUnlocked && (
            <button
              onClick={handleLabDone}
              style={{
                padding: "8px 14px",
                borderRadius: 5,
                fontSize: 11,
                cursor: labDone ? "default" : "pointer",
                border: `1px solid ${labDone ? "var(--green)" : accent}`,
                background: labDone ? "#00e67610" : `${accent}18`,
                color: labDone ? "var(--green)" : accent,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
              }}
            >
              {labDone ? "✓ Klar!" : "✓ Lab klar"}
            </button>
          )}
        </div>

        {/* Verification panel */}
        <VerifyPanel
          lab={lab}
          onVerified={() => {
            if (!labDone) {
              markLabDone(lab.id);
              setLabDone(true);
              setDoneBanner(true);
              setTimeout(() => setDoneBanner(false), 3000);
              addXp(XP.labComplete);
            }
          }}
        />

        {/* Expandable facit */}
        {showFacit && (
          <div>
            <p style={{ margin: "0 0 12px", fontSize: 10, color: "var(--text-dim)", lineHeight: 1.6 }}>
              Komplett IOS-konfig för alla enheter. Kopiera och klistra in direkt i Packet Tracer.
            </p>
            <FacitSection topo={topo} />
          </div>
        )}
      </div>
    </div>
  );
}
