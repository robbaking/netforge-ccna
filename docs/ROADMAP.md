# NetForge — Utvecklingsroadmap

Denna fil är den auktoritativa checklistan för vad som ska byggas, i vilken ordning, och varför. Uppdatera den när features är klara eller prioriteringar ändras.

---

## Vad som redan är byggt

| Feature | Sida | Status | Kommentar |
|---|---|---|---|
| Dashboard med progress-overview | `/dashboard` | ✅ Klar | ScoreRing, DomainProgress, ActivityFeed, StudyTimer |
| Quiz-motor | `/quiz` | ✅ Klar | 3-fas (config → quiz → resultat), keyboard-shortcuts, förklaringar |
| Subnetting-kalkylator | `/subnetting` | ✅ Klar | Kalkylator + övningsläge med slumpmässiga frågor |
| Topology-viewer | `/topologier` | ✅ Klar | Strukturvarianter per protokoll, Facit- + Hjälp-flikar, komplett IOS-konfig per enhet, barycenter-layout |
| Topologi-debug | `/debug` | ✅ Klar | Stresstest-rutnät + layout-problemdetektor (ej i sidomenyn) |
| 78 quiz-frågor (6 domäner) | `data/ccna_questions.json` | ✅ Klar | Se fördelning nedan |

**Nuvarande frågefördelning (78 st):**
- network-fundamentals: 15
- network-access: 14
- ip-connectivity: 14
- ip-services: 12
- security-fundamentals: 12
- automation-programmability: 11

---

## Fas 1 — Snabba wins
> Högt värde, låg komplexitet. Gör dessa först.

### 1.1 Utöka frågedatabasen till ~150+ frågor
- **Varför:** CCNA 200-301-examen testar bred täckning. 70 frågor är för få för seriös tentaförberedelse. Appen tappar värde om användaren ser samma frågor igen och igen.
- **Mål:** ~25 frågor per domän (150 totalt)
- **Fil:** `data/ccna_questions.json`
- **Prioriterade domäner att fylla på:** network-access (VLAN, STP, EtherChannel), ip-connectivity (OSPF, routing)
- [ ] Lägg till 15+ frågor för network-access
- [ ] Lägg till 15+ frågor för ip-connectivity
- [ ] Lägg till 10+ frågor för varje övrig domän
- [ ] Validera att förklaringarna (`explanation`) är korrekta

---

### 1.2 CLI-kommandoreferens-sida (`/commands`)
- **Varför:** `CCNA_Roadmap_and_Protocols.md` innehåller en snabbreferens för felsökningskommandon som inte finns någonstans i appen. Det är precis den typ av information man vill ha snabb tillgång till under studier.
- **Sida:** `app/commands/page.tsx`
- **Komponenter:** `components/commands/CommandsPage.tsx`
- **Innehåll:**
  - Sökbar tabell/lista med Cisco IOS-kommandon
  - Grupperade per protokoll: STP, OSPF, EtherChannel, Routing, ACL, DHCP, SSH
  - Varje rad: kommando + vad det visar + exempel-output-format
- [ ] Skapa sidan och komponenten
- [ ] Lägg till kommandon från MD-filen
- [ ] Lägg till sök-/filterfunktion
- [ ] Länka från dashboard-quickactions

---

### 1.3 Studyväg-sida (`/studyvag`)
- **Varför:** Appen saknar struktur för *hur* man studerar. En ny användare vet inte var man ska börja. MD-filens 4-fas-roadmap ger exakt detta — men den lever bara som en textfil, inte i appen.
- **Sida:** `app/studyvag/page.tsx`
- **Komponenter:** `components/studyvag/StudyPathPage.tsx`
- **Innehåll:**
  - Visuell representation av de 4 faserna (Grunderna → Switchning → Routing → Säkerhet/Automation)
  - Varje fas visar: vilka domäner den täcker, hur många frågor du klarat, rekommenderad nästa åtgärd
  - Progress baseras på befintlig `AppProgress` från localStorage
  - Klicka på en fas → quiz filtrerat på den fasens domäner
- [ ] Skapa sidan och komponenten
- [ ] Mappa CCNA-faser till quiz-domäner
- [ ] Visa fasspecifik progress från befintlig progress-data
- [ ] Lägg till "Starta quiz för denna fas"-knapp

---

## Fas 2 — Kärnfunktioner
> Medel komplexitet. Dessa definierar appens unikhet.

### 2.1 Protokollalgoritm-trainer (`/algoritmer`)
- **Varför:** Den rikaste oanvända innehållet i projektet. `CCNA_Roadmap_and_Protocols.md` innehåller detaljerade beslutsträd för STP, OSPF, IP-routing och ACL — exakt de algoritmer som testas på CCNA-examen. En interaktiv trainer är mycket mer effektiv än att bara läsa.
- **Sida:** `app/algoritmer/page.tsx`
- **Komponenter:** `components/algoritmer/`
- **4 moduler:**
  1. **STP-beslutsträd** — Välj Root Bridge, sätt portroller
  2. **OSPF-tillståndsmaskin** — Diagnostisera varför grannskap fastnat
  3. **IP-routing** — Longest prefix match, AD, metric
  4. **ACL-flöde** — Top-down matching, implicit deny
- **UX per modul:** Scenario presenteras → användaren fattar beslut vid varje nod → grön/röd feedback → förklaring visas
- **Koppling till progress:** Rätt svar ökar `domain`-score för relevant domän
- Se `docs/features/protocol-algoritmer.md` för detaljerad spec
- [ ] Skapa sidstruktur och navigation
- [ ] Implementera STP-modul
- [ ] Implementera OSPF-modul
- [ ] Implementera Routing-modul
- [ ] Implementera ACL-modul
- [ ] Koppla till progress-systemet

---

### 2.2 EtherChannel-konfigurationstrainer
- **Varför:** EtherChannel är ett klassiskt CCNA-ämne där studenter förväxlar LACP/PAgP-lägen. MD-filen har en perfekt beslutstabell (Active/Passive/Desirable/Auto/On) som lämpar sig för en interaktiv trainer.
- **Placering:** Del av `/algoritmer`-sidan (under network-access-modulen) eller eget flöde under `/subnetting` (protokollövningar)
- **Format:** Visa Switch 1-läge, fråga vilket Switch 2-läge som krävs för att EtherChannel ska formas
- [ ] Implementera som modul i algoritmer-sidan

---

### 2.3 Spaced repetition för quiz
- **Varför:** Nuvarande quiz väljer frågor slumpmässigt. Spaced repetition (visa frågor du svarat fel på oftare) är bevisat mer effektivt för memorering.
- **Fil att ändra:** `lib/questions.ts`, `lib/progress.ts`, `lib/types.ts`
- **Logik:** Varje fråga får en `nextReview: Date` och `easeFactor` baserat på rätt/fel svar
- **UI:** Nytt quiz-läge "Repetition" i `QuizConfig.tsx` vid sidan om nuvarande slump-läge
- [ ] Utöka `AppProgress`-typen med per-fråga-historik
- [ ] Implementera SM-2-algoritm (eller förenklad variant) i `lib/questions.ts`
- [ ] Lägg till repetitionsläge i quiz-konfigurationen

---

## Fas 3 — Avancerat
> Hög komplexitet. Planera separat innan implementation.

### 3.1 Simulerad provexamen
- **Varför:** Verklig CCNA-examen är ~120 frågor på 120 minuter. Studenter behöver öva under realistiska förhållanden.
- **Format:** Låst läge (ingen feedback under pågående prov), tidsgräns 120 min, full resultatanalys efteråt
- [ ] Skapa `/provexamen`-sida
- [ ] Implementera tidsgräns och frågeslumpning
- [ ] Blockera förklaringar tills provet är klart
- [ ] Jämför resultat mot CCNA-godkäntgräns (70%)

---

### 3.2 IPv6-sektion
- **Varför:** CCNA 200-301 testar IPv6. Nuvarande frågedatabas saknar IPv6-frågor.
- **Scope:** Adressering, prefix-notation, NDP (Neighbor Discovery Protocol), dual-stack
- [ ] Lägg till IPv6-frågor i `data/ccna_questions.json`
- [ ] Utöka subnetting-kalkylatorn med IPv6-stöd
- [ ] Lägg till IPv6 i protokollalgoritm-trainern

---

### 3.3 Förbättrad topology-lab
- **Varför:** Nuvarande topology-viewer genererar skelettig IOS-konfig. En riktig labbmiljö kräver fullständig konfiguration + validering.
- **Scope:** Kompletta Cisco IOS-konfigurationsmallar per scenario, checklista för uppgifter med valideringslogik
- [ ] Skriv fullständiga IOS-konfig-templates för OSPF, VLAN, ACL, NAT
- [ ] Implementera uppgiftsvalidering (parser för show-output-liknande format)

---

## Prioriteringsordning (kort)

```
1. Fler frågor (1.1) — omedelbart värde för befintliga användare
2. Studyväg-sida (1.3) — ger struktur, enkelt att bygga
3. CLI-kommandon (1.2) — snabb win, direkt från MD-fil
4. Protokollalgoritm-trainer (2.1) — unikt värde, kräver planering
5. Spaced repetition (2.3) — förbättrar kvarhållning
6. EtherChannel-trainer (2.2) — del av 2.1
7. Provexamen (3.1) — kräver fler frågor (1.1) först
8. IPv6 (3.2) — viktigt men brett scope
9. Topology-lab (3.3) — störst scope, lägst ROI kortsiktigt
```
