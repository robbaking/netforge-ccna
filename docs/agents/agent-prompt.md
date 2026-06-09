# NetForge — Agentprompt för fortsatt utveckling

> kör denna prompt i en ny Hermes-session för att återhämta hela projektet fortsättningsvis.
>Om du använder `/agents` eller `delegate_task`, fyll i kontexten från denna fil och välj lämpliga toolsets.

## Snabbfakta
- **Katalog:** `C:\Users\Robin\Desktop\github project homelab\ccna-app`
- **Tech:** Next.js 15, React 19, TypeScript, CSS-variabler, JetBrains Mono
- **Problem:** Överlapp i topologier (patchen i `TopoSvg.tsx` är på plats), Difficulty-typer, localStorage-versionering
- **Senast uppdaterad:** 2026-06-09

## Aktuellt tillstånd
- `lib/topology.ts` är uppdelad i moduler (`layout.ts`, `config.ts`, `scenarios.ts`, `index.ts`).
- `docs/code_improvements_plan.md` är uppdaterad med datum och steg.
- `docs/CODE_REVIEW_2026-06-09.md` och `debug-report.md` är verifierade, men ännu inte uppdaterade med nya observationer från senaste topologiverifieringen.

## Vad som är klart
- [x] Debug/Code review/plan dokumenterad
- [x] Visual overlap patchad i `TopoSvg.tsx`
- [x] Lokala skills installerade: `karpathy-guidelines`, `systematic-debugging`, `test-driven-development`

## Nästa steg enligt planen (gör i ordning)
1. Verifiera varje generatorKey i `lib/topology` — inga IP-konflikter, inga överlapp, inga brutna länkar.
2. Om fel finns: korrigera layout/IP generellt i generatorerna.
3. Normalisera `Difficulty`-typer till en intern enhetlig sträng, mappa svensk UI-text i ett eget lager.
4. Lägg till localStorage-versionering + defaults i `lib/progress.ts`.
5. Bygg UI-primitives (`PageShell`, `Button`, `NFCard`) och börja migrera sidor.
6. Åtgärda a11y-problem.
7. Subnetting-validering + score-rad i `SubnetTrainer`.
8. Studieväg + CLI-kommandoreferens enligt `docs/features/protocol-algoritmer.md`.
9. Spaced repetition + frågeindexering.
10. Ytterligare features enligt `docs/code_improvements_plan.md`.

## prompts för agents
Kopiera och klistra in följande som task.byta riktlinjer och context efter behov.

### Prompt A — Full verifiering + nya förbättringar
Använd denna för en helhetsgenomgång (gemen-session/delegation/agent).

```
Du är en senior fullstack-utvecklare i NetForge-projektet (CCNA studieplattform, Next.js 15 + React 19).
Katalog: C:\Users\Robin\Desktop\github project homelab\ccna-app

Dina huvuduppgifter:
1. Gör en komplett verifiering av alla topologigenererare i lib/topology: ingen IP-konflikt, ingen överlapp, inga brutna länkar.
2. Gör en fullständig audit av dokumenten docs/code_improvements_plan.md, docs/CODE_REVIEW_2026-06-09.md, debug-report.md — se till att de stämmer överens med nuvarande kod.
3. Gör en ny sammanfattande plan (ny md-fil) med alla hittade problem och förslag.
4. Börja verifiera och uppdatera steg efter docs/code_improvements_plan.md.

Krav:
- Använd befintliga verktyg och befintliga filer; skapa inga onödiga nya filer.
- Varje steg ska verifieras med verktyg (ls/cat/npm run/build/tsc) innan du påstår att det är färdigt.
- Använd svenska där det passar.
```

### Prompt B — Bara topovalidering + generator-fix
Använd när du vill fokusera endast på topologiproblemen så att du snabbt kan köra `/topology` eller testa.

```
Fokusera enbart på topologiverktyget i C:\Users\Robin\Desktop\github project homelab\ccna-app\lib\topology.
Kör en fullständig verifiering av alla generatorKeys: inga IP-konflikter, inga överlappande enheter, inga saknade länkar.
Om fel hittas: gör minimala korrigeringar i generatorerna, uppdatera sedan docs/debug-report.md och docs/CODE_REVIEW_2026-06-09.md.
Krav på verifiering: skriv ett litet skript och kör det via terminalen för att bevisa att inga konflikter längre finns i någon generator.
```

### Prompt C — Bara dokumentationsgenomgång
Använd när du vill ha en sammanfattande plan baserad på alla tidigare dokument.

```
Läs följande filer i C:\Users\Robin\Desktop\github project homelab\ccna-app och gör en helt ny sammanfattande plan i docs/PLAN_<datum>.md:
- docs/code_improvements_plan.md
- docs/CODE_REVIEW_2026-06-09.md
- debug-report.md

Krav:
- Inga kodändringar, endast dokument.
- Planen ska vara lättläst med korta rubriker och konkreta nästa steg.
- Lista också vilka delar som redan är klara och vilka som behöver arbete.
```

## Exempel på delegation med denna prompt i en ny session
```js
delegate_task({
  goal: "Utför hela projektplan A: topovalidering + audit + ny plan.",
  context: `Du är i projektet NetForge (CCNA studieplattform) i C:\Users\Robin\Desktop\github project homelab\ccna-app. Löpande arbetskatalog är projekt-roten. Det finns en tidigare patch i TopoSvg.tsx som fixar overlap. Använd existerande verktyg och kod. Krav på verifiering: tsc --noEmit, npm run build, och validera varje generator.`,
  toolsets: ["terminal", "file"]
})
```

## Användbara korta kommandon i terminalen
```bash
cd 'C:\Users\Robin\Desktop\github project homelab\ccna-app'
npx tsc --noEmit
npm run build            # eller next build
git status               # kontrollera ändringar
```

## Noteringar
- Använd alltid svenska där det passar, men behåll kodtermer på engelska.
- Verifiera alltid verktygsutdata innan du rapporterar klart.
- Om ett steg misslyckas: lägg till det i TODO och försök igen med mindre scope.
