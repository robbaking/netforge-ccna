# NetForge — Projektindex

En karta över alla dokument i projektet. Uppdatera den här filen när du lägger till nya docs.

---

## Projektdokument

| Fil | Beskrivning |
|-----|-------------|
| [`CLAUDE.md`](../../CLAUDE.md) | Regler och konventioner — stack, struktur, kodstil, kommandon |
| [`README.md`](../../README.md) | Projektöversikt, features, tech stack, hur man kör appen |
| [`200-301-CCNA-v1.1.md`](../../200-301-CCNA-v1.1.md) | Officiell Cisco CCNA-examenblueprinten (6 domäner) |
| [`CCNA_Roadmap_and_Protocols.md`](../../CCNA_Roadmap_and_Protocols.md) | Studieplan i 4 faser + nätverksalgoritmer (STP, OSPF, ARP) |

---

## Docs-mappen

| Fil | Beskrivning |
|-----|-------------|
| [`docs/DEBUG.md`](../DEBUG.md) | Kända buggar, layoutproblem, debug-verktyg och `/debug`-sidan |
| [`docs/QUESTION_IMPORT.md`](../QUESTION_IMPORT.md) | Format och guide för att importera quizfrågor till JSON |
| [`docs/ROADMAP.md`](../ROADMAP.md) | Utvecklingsplan — klart, pågår, planerat |
| [`docs/UI_DESIGN.md`](../UI_DESIGN.md) | Designsystem — färger (CSS-variabler), typografi, komponenter |
| [`docs/features/protocol-algoritmer.md`](../features/protocol-algoritmer.md) | Spec för algoritm-tränarfunktionen (`/algoritmer`-sidan) |

---

## Design Handoff

| Fil | Beskrivning |
|-----|-------------|
| [`CCNA-FOR-SCHOOL/design_handoff_netforge/README.md`](../../CCNA-FOR-SCHOOL/design_handoff_netforge/README.md) | Komplett UI-designhandoff — färgpalett, komponenter, alla 7 sidor |

---

## Superpowers — Specs & Planer

### Specs (design-dokument)
| Fil | Innehåll |
|-----|----------|
| [`docs/superpowers/specs/2026-06-08-traningsloop-design.md`](../superpowers/specs/2026-06-08-traningsloop-design.md) | Design för träningsloop — quiz-UX, XP/levels, historik |

### Planer (implementationsplaner)
| Fil | Innehåll |
|-----|----------|
| [`docs/superpowers/plans/2026-06-08-studyvag.md`](../superpowers/plans/2026-06-08-studyvag.md) | Plan för `/studyvag` — studiefaser med progress per fas |
| [`docs/superpowers/plans/2026-06-08-traningsloop.md`](../superpowers/plans/2026-06-08-traningsloop.md) | Plan för träningsloop — XP, historik i IndexedDB, resurser per fråga |

---

## Snabbkommandon

```bash
npm run dev          # Starta dev-server → localhost:3000
npm run build        # Produktionsbygge
npx tsc --noEmit     # Typkontroll utan att bygga
```

---

## Skills-guide

Se [`docs/hub/skills-guide.md`](./skills-guide.md) för en fullständig lista av alla Claude-skills och när man använder dem.
