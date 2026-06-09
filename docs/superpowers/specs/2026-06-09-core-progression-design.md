# Design: Core Progression System — Grupp B
**Datum:** 2026-06-09  
**Scope:** Overall score fix · Quiz/Prov separation · XP-system · Studieväg med sekventiella labs · Lab-verifiering · Quiz→resurser-länk

---

## Context

NetForge är en CCNA 200-301-studieplattform med quiz, topologi-labs och studieväg. Dessa förbättringar gör kärnprogressionen mer meningsfull: scoren ska vara korrekt och CCNA-viktad, XP ska kännas som ett spel (svårt att levela), prov ska simulera den riktiga tentan, och lab-checklistan ska tvingas i ordning med faktisk config-verifiering.

---

## Feature 1: Overall Score — Buggfix + CCNA-viktning

### Problem
`recordQuizResult` anropas en gång per domän i en `forEach`-loop. Varje anrop lägger till `XP.quizComplete` (50 XP), vilket ger 2–6× för mycket XP på blandade quizar. Dessutom räknar `calcOverall` ett rakt genomsnitt istället för CCNA-viktade domäner.

### Fix
**`lib/progress.ts` — `recordQuizResult`:**
- Ta bort XP-beräkning från funktionen
- Lägg till ny funktion `finishQuiz(domainResults, totalCorrect, totalQuestions)` som hanterar XP-bonus en enda gång

**`components/dashboard/DashboardPage.tsx` — `calcOverall`:**
- Byt till viktad beräkning baserat på `DOMAIN_WEIGHTS` från `lib/types.ts`:
  ```
  Network Fundamentals: 20%  
  Network Access: 20%  
  IP Connectivity: 25%  
  IP Services: 10%  
  Security Fundamentals: 15%  
  Automation & Programmability: 10%
  ```
- Formel: `Σ(domän_pct × domän_vikt) / Σ(domän_vikt för besvarade domäner)`

**`components/quiz/QuizPage.tsx`:**
- Ersätt `domainResults.forEach(recordQuizResult)` med ett anrop till `finishQuiz(domainResults, correct, total)`

---

## Feature 2: Quiz vs Prov Separation

### Quiz (befintlig `/quiz`) — oförändrad
Övningsläge: valfria domäner, valfri svårighetsgrad, förklaring visas direkt efter varje svar.

### Prov (ny `/prov` route)
Tentamenssimulering som matchar CCNA 200-301:

| Parameter | Värde |
|---|---|
| Frågor | 103 (slumpade, viktade per domän) |
| Tid | 120 minuter nedräkning |
| Navigering | Låst — kan inte backa, kan inte pausa |
| Feedback | Ingen förklaring under provet |
| Resultat | Full domänuppdelning + genomgång efteråt |
| XP | 200 XP vid avslutning |

**Frågefördelning (103 frågor, viktat efter CCNA-examen):**
- Network Fundamentals: 21 frågor (20%)
- Network Access: 21 frågor (20%)
- IP Connectivity: 26 frågor (25%)
- IP Services: 10 frågor (10%)
- Security Fundamentals: 15 frågor (15%)
- Automation & Programmability: 10 frågor (10%)

**Nya filer:**
- `app/prov/page.tsx` — tunn route-sida
- `components/prov/ProvPage.tsx` — state machine (intro → prov → resultat)
- `components/prov/ProvTimer.tsx` — nedräkningstimer, varnar vid <10 min
- `components/prov/ProvResults.tsx` — detaljerad genomgång med domänpoäng och rätt/fel per fråga

**Sidebar:** Ny nav-länk `/prov` med tentamen-ikon, placeras under `/quiz`.

---

## Feature 3: XP-system (spel-känsla)

### Ny nivåkurva
```typescript
// lib/xp.ts
export function xpForLevel(level: number): number {
  return 500 * (level - 1) ** 2;
}
export function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(xp / 500)) + 1;
}
```

**Progression:**
| Nivå | XP krävs | Ca. antal 10-frågor-quizar |
|---|---|---|
| 2 | 500 | 3–4 |
| 5 | 8 000 | ~53 |
| 10 | 40 500 | ~270 |
| 25 | 288 000 | ~1 900 |
| 50 | 1 200 500 | ~8 000 |

### Nya XP-belöningar
```typescript
// lib/xp.ts
export const XP = {
  correctEasy: 5,
  correctNormal: 10,
  correctHard: 20,
  quizComplete: 50,        // en gång per quiz (inte per domän)
  perfectQuizBonus: 100,   // +100 om 100% rätt
  labComplete: 75,
  provComplete: 200,
  subnettingRound: 15,
} as const;

// Streak-multiplikator: +10% per consecutive day, max +50%
export function streakMultiplier(streak: number): number {
  return 1 + Math.min(streak * 0.1, 0.5);
}
```

**Ändring i `lib/questions.ts` eller `lib/types.ts`:** Difficulty-fältet på frågor används nu för XP-beräkning.  
`lib/xp.ts`: lägg till `xpForCorrect(difficulty: Difficulty): number`.

### Nivåtitlar (10 st)
```typescript
export const LEVEL_TITLES: Record<number, string> = {
  1:  "Nybörjare",
  5:  "Elev",
  10: "Tekniker",
  15: "Nätverkare",
  20: "Junior CCNA",
  25: "Senior Nätverkare",
  30: "CCNA Kandidat",
  35: "CCNA Specialist",
  40: "CCNA Expert",
  50: "CCNA Master",
};
// getLevelTitle(level) returnerar närmaste lägre titel
```

---

## Feature 4: Studieväg — Sekventiella Labs

### Sekventiell låsning
Checklist-items inom en fas låses sekventiellt: item N är låst tills item N-1 är verifierad.  
Fas N-labs låses tills fas N-1-labs är alla klara OCH fas N-1-quiz ≥70% (quiz-låset finns redan).

### Koppling checklist → topologi-lab
`data/phasechecklist.ts` — `ChecklistItem` utökas:
```typescript
export interface ChecklistItem {
  id: string;
  phase: number;
  text: string;
  labId?: string;         // länk till labcatalog.ts
  verificationTarget?: "running-config" | "show-ip-route" | "show-ip-nat" | "show-spanning-tree";
}
```

**Mappning (befintliga labs):**
| Checklist-item | labId | verificationTarget |
|---|---|---|
| f1-ipv4 | `static-routes-basic` | `running-config` |
| f1-static | `static-routes-troubleshoot` | `running-config` |
| f2-vlan | `vlan-basic` (nytt) | `running-config` |
| f2-stp | `stp-triangle` | `show-spanning-tree` |
| f3-ospf | `ospf-chain-latt` | `running-config` |
| f3-multi | `ospf-multiarea-latt` | `running-config` |
| f4-acl | `acl-extended` | `running-config` |
| f4-nat | `nat-basic` | `show-ip-nat` |

Items utan `labId` (f1-cli, f2-ethch, f3-hsrp, f4-ssh) → self-check manuell bock.

### UI i Studievägen
- Lab-items med `labId` visar "Öppna lab →" knapp (navigerar till `/topologier?lab=<labId>`)
- Verifiering-knapp visas när man är i topologi-vyn för labben: "Verifiera lab ✓"
- Låsta items visas gråade med hänglås-ikon

---

## Feature 5: Lab-verifiering (Config-klistring)

### Datamodell
```typescript
// data/labcatalog.ts — utöka LabEntry
export interface VerificationCheck {
  id: string;
  description: string;      // visas för användaren
  pattern: string;          // regex som string (kompileras runtime)
  required: boolean;        // måste passa för godkänt
  hint?: string;            // visas om checken misslyckas
}

// LabEntry utökas med:
verificationChecks?: VerificationCheck[];
```

### Per-lab verifieringscheckar (urval)

**Static routing (`static-routes-basic`):**
```
✓ ip route \d+\.\d+\.\d+\.\d+\s+\d+\.\d+\.\d+\.\d+  (required) "Statisk route konfigurerad"
✓ ip address \d+\.\d+\.\d+\.\d+                       (required) "IP-adress satt på interface"
✓ no shutdown                                          (required) "Interface aktiverat"
```

**OSPF (`ospf-chain-latt`):**
```
✓ router ospf \d+                                      (required) "OSPF-process startad"
✓ network .+area \d+                                   (required) "Network statement konfigurerat"
✓ neighbor .+FULL                                      (optional) "OSPF-grannskap FULL"
```

**EIGRP (`eigrp-*`):**
```
✓ router eigrp \d+                                     (required) "EIGRP AS konfigurerat"
✓ network \d+\.\d+\.\d+\.\d+                          (required) "Network statement"
✓ no auto-summary                                      (optional) "Auto-summary inaktiverat"
```

**VLANs (`vlan-basic`):**
```
✓ vlan \d+                                             (required) "VLAN skapat"
✓ switchport mode (access|trunk)                       (required) "Port-mode konfigurerad"
✓ switchport access vlan \d+                           (optional) "Access VLAN tilldelat"
```

**STP — klistra `show spanning-tree` (`stp-triangle`):**
```
✓ Root ID                                              (required) "Root bridge synlig"
✓ This bridge is the root|Port.*Desg                   (optional) "Root bridge eller Designated port"
```

**NAT — klistra `show ip nat translations` (`nat-basic`):**
```
✓ Inside global .+ Inside local                        (required) "Aktiv NAT-translation hittad"
✓ \d+\.\d+\.\d+\.\d+:\d+                             (optional) "PAT (port-baserad NAT)"
```

**ACL (`acl-extended`):**
```
✓ (ip access-list|access-list \d+)                    (required) "ACL definierad"
✓ ip access-group .+(in|out)                          (required) "ACL applicerad på interface"
✓ (permit|deny) (ip|tcp|udp)                          (required) "ACL-regel konfigurerad"
```

### Verifieringsflöde (UI)

1. Användaren öppnar lab i topologi-vyn
2. Genomför labben i Packet Tracer / GNS3
3. Klickar "Verifiera lab" → textarea öppnas
4. Klistrar in relevant show-output
5. Systemet kör alla regex-checkar, visar:
   - ✅ Grön rad för varje passerad check + beskrivning
   - ❌ Röd rad för misslyckad + hint-text
6. Om alla `required`-checkar passerar → lab markeras klar, XP delas ut
7. Resultatet sparas i `lib/labprogress.ts` (befintlig)

**Ny fil:** `lib/labverify.ts` — exporterar `verifyConfig(input: string, checks: VerificationCheck[]): VerificationResult[]`

---

## Feature 6: Quiz → Läranderesurser-länk

**`components/quiz/QuizCard.tsx`:**  
I förklarings-sektionen (visas efter fel svar) lägg till:
```
📚 Se video om [domännamn] →
```
Klick navigerar till `/resurser?domain=<question.domain>`.

**`app/resurser/page.tsx` / `components/resurser/ResurserPage.tsx`:**  
Acceptera `?domain=` query-param för att pre-filtrera domän vid sidladdning.

---

## Verifiering (end-to-end)

1. **Score-fix:** Gör ett blandad-domän quiz → kontrollera att dashboard visar viktat CCNA-snitt, inte dubblerad XP
2. **Prov:** Navigera till `/prov` → starta → kontrollera timer + locked nav → fullföll → se resultat med domänuppdelning
3. **XP-kurva:** Kontrollera med `npm run dev` att nivåprogress-bar uppdateras korrekt, nivå 2 kräver ~500 XP
4. **Studieväg:** Fas 1 item 1 låst tills bockas av, item 2 låst tills item 1 klar, fas 2 låst tills fas 1 klar + quiz ≥70%
5. **Lab-verifiering:** Öppna `static-routes-basic` → klistra in dummy running-config med "ip route" → system visar ✅
6. **Quiz→resurser:** Svara fel på fråga → förklaringen visar 📚-länk → klick öppnar `/resurser` filtrerat på domänen
