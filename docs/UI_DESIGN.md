# NetForge — UI Design System

Referensdokument för appens visuella identitet. Alla nya sidor och komponenter ska följa detta system exakt. Avvikelser kräver motivering.

---

## Tema: NetForge Cyber Blue

Mörkt, cyberpunk-inspirerat gränssnitt med cyan och lila som primära accentfärger. Känslan är ett professionellt nätverksövervakningsverktyg — inte en studieapp med barnvänlig design.

---

## Färgpalett

Dessa variabler är definierade i `app/globals.css` och ska alltid användas via CSS-variablerna, aldrig som hårdkodade hex-värden i komponenter.

### Bakgrunder
| Variabel | Hex | Användning |
|---|---|---|
| `--bg-base` | `#060a14` | Sidans grundfärg (html/body) |
| `--bg-surface` | `#0c1222` | Kortbakgrund (`.nf-card`) |
| `--bg-elevated` | `#111a30` | Interaktiva ytor, hover-states |

### Kanter
| Variabel | Hex | Användning |
|---|---|---|
| `--border` | `#162040` | Standard kortkant |
| `--border-hi` | `#1e2d55` | Aktiv/fokuserad kant |

### Accentfärger
| Variabel | Hex | Användning |
|---|---|---|
| `--cyan` | `#00e5ff` | Primär accent, aktiva states, primary buttons |
| `--cyan-dim` | `#0097a7` | Nedtonad cyan, disabled |
| `--cyan-glow` | `#00e5ff30` | Transparens för glow-effekter |
| `--purple` | `#7c4dff` | Sekundär accent, gradienter |
| `--purple-dim` | `#5c35cc` | Nedtonad lila |

### Text
| Variabel | Hex | Användning |
|---|---|---|
| `--text` | `#c8e0ff` | Primär text |
| `--text-dim` | `#6888aa` | Sekundär text, labels, metadata |
| `--muted` | `#2a4060` | Mycket nedtonat, hintttext |

### Status
| Variabel | Hex | Användning |
|---|---|---|
| `--green` | `#00e676` | Rätt svar, success, ≥70% progress |
| `--red` | `#ff4c6a` | Fel svar, varning, <50% progress |
| `--cyan` | `--cyan` | Neutral/medel, 50–69% progress |

**Progress-färglogik** (se `DomainProgress.tsx`):
```
≥ 70%  → var(--green)
≥ 50%  → var(--cyan)
< 50%  → var(--red)
```

---

## Typografi

**Font:** JetBrains Mono (Google Fonts, importeras i `globals.css`)  
**Fallback:** `monospace`  
**Smoothing:** `-webkit-font-smoothing: antialiased`

### Storleksskala
| Användning | Storlek | Vikt | Övrigt |
|---|---|---|---|
| Sidtitlar / Stora siffror | 18–24px | 600–700 | |
| Score-ring display | 38px | 700 | |
| Kortrubriker (labels) | 10px | 500 | uppercase, letter-spacing: 2px |
| Brödtext | 12–13px | 400 | |
| Liten metadata | 10–11px | 400 | color: var(--text-dim) |
| Knappar | 11px | 600 | uppercase |

---

## Komponentbibliotek

Alla dessa klasser är definierade i `app/globals.css`. Nya komponenter ska bygga på dessa — inte uppfinna egna varianter.

### `.nf-card`
Standardkort. Används för alla innehållsblock.
```css
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 10px;
padding: 20px;
```

### `.nf-btn-primary`
Primär handlingsknapp (cyan→lila gradient).
```css
padding: 8px 20px;
background: linear-gradient(135deg, var(--cyan), var(--purple));
color: #fff;
font-size: 11px; font-weight: 600;
border-radius: 6px;
```
Hover: `opacity: 0.9; transform: translateY(-1px)`

### `.nf-btn-secondary`
Sekundär knapp (mörk med kant).
```css
background: var(--bg-elevated);
color: var(--text-dim);
border: 1px solid var(--border);
border-radius: 6px;
```
Hover: `border-color: var(--cyan); color: var(--cyan)`

### `.glow-bar-track` / `.glow-bar-fill`
Progress-bars med glow-effekt.
```css
/* track */
height: 5px; background: #2a406040; border-radius: 5px;
/* fill */
height: 100%; border-radius: 5px; transition: width 0.6s ease-out;
/* fill box-shadow för glow: */
box-shadow: 0 0 12px {color}50, 0 0 4px {color}30;
```

### Quiz answer-states
```css
.answer-correct  { background: #00e67612; border-color: #00e676; color: #00e676; }
.answer-wrong    { background: #ff4c6a12; border-color: #ff4c6a; color: #ff4c6a; }
.answer-selected { background: #00e5ff10; border-color: var(--cyan); color: var(--cyan); }
```

---

## Layout-regler

### Sidebar
- **Bredd:** 68px (fast, ikon-only)
- **Bakgrund:** `var(--bg-surface)` med border-right: `var(--border)`
- **Aktiv ikon:** cyan-färgad med glow-bakgrund

### Sidinnehåll
- **Margin-left:** 68px (sidebar-bredd)
- **Padding:** 24px runt om
- **Max-width på innehåll:** ingen hårdkodad begränsning, men grid/flex-layout

### Kortgrid
- Typisk 2–4 kolumner beroende på kortbredd
- Gap: 16px
- Aldrig hårdkodad pixel-bredd på kort — använd `flex: 1` eller grid-kolumner

### Ambient glow (bakgrundseffekter)
Varje sida ska ha dessa subtila ljuseffekter (se dashboard):
```css
/* Övre höger: cyan */
position: fixed; top: -100px; right: -100px;
width: 600px; height: 600px;
background: radial-gradient(circle, #00e5ff08, transparent 70%);
pointer-events: none;

/* Nedre vänster: lila */
position: fixed; bottom: -100px; left: -50px;
width: 500px; height: 500px;
background: radial-gradient(circle, #7c4dff06, transparent 70%);
pointer-events: none;
```

---

## Kortrubriks-mönster

Varje kort ska ha en konsekvent rubrik-rad:
```tsx
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
  <span style={{ fontSize: 10, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 2 }}>
    RUBRIK HÄR
  </span>
  <span style={{ fontSize: 9, color: "var(--muted)" }}>
    metadata / badge
  </span>
</div>
```

---

## Nya sidors struktur

Alla nya sidor ska följa detta mönster (se `components/dashboard/DashboardPage.tsx` som referens):

```tsx
"use client";

export default function NyaSidan() {
  return (
    <div style={{ marginLeft: 68, padding: 24, minHeight: "100vh", position: "relative" }}>
      {/* Ambient glows */}
      <div style={{ position: "fixed", top: -100, right: -100, width: 600, height: 600,
        background: "radial-gradient(circle, #00e5ff08, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: -100, left: -50, width: 500, height: 500,
        background: "radial-gradient(circle, #7c4dff06, transparent 70%)", pointerEvents: "none" }} />

      {/* Sidtitel */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>Sidtitel</h1>
        <p style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>Beskrivning</p>
      </div>

      {/* Innehåll */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <div className="nf-card">
          {/* kortinnehåll */}
        </div>
      </div>
    </div>
  );
}
```

---

## Vad man INTE ska göra

- **Inte** använda Tailwind-utility-klasser för layout/färger — appen använder CSS-variabler via inline styles
- **Inte** importera externa komponentbibliotek (MUI, Chakra, Shadcn, etc.) — allt byggs med `.nf-card`, `.nf-btn-*` och inline styles
- **Inte** hårdkoda hex-värden i komponentfiler — använd alltid `var(--cyan)`, `var(--text)` etc.
- **Inte** använda serif eller sans-serif fonter — JetBrains Mono överallt
- **Inte** lägga till `border-radius` > 10px (undantag: pills/badges med 20px)
- **Inte** använda ljusa bakgrunder eller vit text — behåll det mörka temat

---

## Designvarianter (referens)

Tre designvarianter finns i `CCNA-FOR-SCHOOL/design_handoff_netforge/design_files/`:
- `variant-cyber.jsx` — **Primär (används i appen)** — Cyber Blue
- `variant-amber.jsx` — Amber Console (bärnstens-/retro-terminal)
- `variant-terminal.jsx` — Terminal Green (monokrom hacker-estetik)

Appen implementerar enbart Cyber Blue. De andra varianterna är referens för eventuell temaväxling i framtiden.
