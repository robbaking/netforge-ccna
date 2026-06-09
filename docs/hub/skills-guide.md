# Skills-guide — Claude Superpowers

En referens för alla skills som används i NetForge-projektet. Skills aktiveras med `/skillnamn` i Claude Code.

---

## Inbyggda Superpowers Skills

### Startprocess
| Skill | Trigger | Syfte |
|-------|---------|-------|
| `using-superpowers` | Automatisk vid sessionsstart | Etablerar hur skills fungerar — körs alltid först |
| `brainstorming` | `/brainstorming` | Utforska idéer → design → spec innan kod skrivs |
| `writing-plans` | `/writing-plans` | Skriv detaljerad implementationsplan med steg och filsökvägar |

### Exekvering
| Skill | Trigger | Syfte |
|-------|---------|-------|
| `executing-plans` | `/executing-plans` | Ladda en plan och kör den med checkpoint-genomgångar |
| `subagent-driven-development` | Inom session | Kör plan-uppgifter med subagenter parallellt |
| `dispatching-parallel-agents` | När 2+ oberoende tasks | Dela upp arbete på flera agenter som jobbar samtidigt |

### Kvalitet & Granskning
| Skill | Trigger | Syfte |
|-------|---------|-------|
| `systematic-debugging` | `/systematic-debugging` | Hitta rotorsak INNAN fix — fyra faser: orsak → mönster → hypotes → fix |
| `test-driven-development` | `/tdd` | Skriv test → se det misslyckas → skriv minimal kod → refaktorera |
| `verification-before-completion` | Innan PR/merge | Kör verifiering och bekräfta output INNAN "klart" deklareras |
| `requesting-code-review` | Innan merge | Skicka kod på granskning via subagent |
| `receiving-code-review` | Vid mottagen review | Hantera granskningsfeedback med teknisk rigor |

### Avslutning & Deployment
| Skill | Trigger | Syfte |
|-------|---------|-------|
| `finishing-a-development-branch` | Implementering klar | Guidar merge/PR/cleanup av en färdig branch |
| `using-git-worktrees` | Ny feature-branch | Isolera feature-arbete i ett eget worktree |

### Meta
| Skill | Trigger | Syfte |
|-------|---------|-------|
| `writing-skills` | Skapa ny skill | Skapa eller redigera skills med test-driven approach |

---

## Externa Skills (installeras manuellt)

### find-skills
- **Källa:** `https://github.com/vercel-labs/skills`
- **Trigger:** `/find-skills`
- **Syfte:** Hitta relevanta skills baserat på uppgiften *(uppdatera beskrivning efter installation)*

### caveman
- **Källa:** `https://github.com/juliusbrussee/caveman`
- **Trigger:** `/caveman`
- **Syfte:** *(uppdatera beskrivning efter installation)*

---

## Hur man installerar en ny skill

```bash
# Via npx (externa plugins)
npx skills add <github-url> --skill <skillnamn>

# Kontrollera installerade skills
claude plugins list
```

> Uppdatera den här filen och [INDEX.md](./INDEX.md) när nya skills läggs till.

---

## Skillsystemets prioritetsordning

1. Användarens egna instruktioner (CLAUDE.md) — högst prioritet
2. Superpowers skills — override av standardbeteende
3. Standardsystemprompt — lägst prioritet
