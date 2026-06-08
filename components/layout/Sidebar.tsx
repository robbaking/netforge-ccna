"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard",  href: "/dashboard",  icon: "⊞" },
  { label: "Studieväg",  href: "/studyvag",   icon: "✦" },
  { label: "Topologier", href: "/topologier", icon: "◈" },
  { label: "Quiz",       href: "/quiz",       icon: "▤" },
  { label: "Subnetting", href: "/subnetting", icon: "⊟" },
  { label: "Resurser",   href: "/resurser",   icon: "▶" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: 68,
      background: "var(--bg-surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0",
      flexShrink: 0,
      zIndex: 10,
      height: "100vh",
    }}>
      {/* Logo */}
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: "linear-gradient(135deg, #00e5ff20, #7c4dff20)",
        border: "1px solid #00e5ff30",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800, color: "var(--cyan)",
        marginBottom: 28, flexShrink: 0,
        fontFamily: "'JetBrains Mono', monospace",
      }}>NF</div>

      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link key={item.href} href={item.href} title={item.label} style={{ textDecoration: "none" }}>
              <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "13px 0",
                color: active ? "var(--cyan)" : "var(--text-dim)",
                background: active ? "#00e5ff10" : "transparent",
                borderLeft: active ? "2px solid var(--cyan)" : "2px solid transparent",
                fontSize: 17,
                cursor: "pointer",
                transition: "color 0.15s, background 0.15s",
              }}>
                {item.icon}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User avatar */}
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: "linear-gradient(135deg, #00e5ff30, #7c4dff30)",
        border: "1px solid #00e5ff25",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, color: "var(--cyan)", fontWeight: 600,
        fontFamily: "'JetBrains Mono', monospace",
      }}>R</div>
    </aside>
  );
}
