# Feature Spec: Protokollalgoritm-trainer (`/algoritmer`)

## Varför den här featuren

`CCNA_Roadmap_and_Protocols.md` innehåller de rikaste pedagogiska content i projektet — detaljerade beslutsträd och algoritmer för STP, OSPF, IP-routing och ACL. Dessa algoritmer är exakt vad som testas på CCNA-examen, men de lever just nu bara som text i en markdown-fil.

En interaktiv trainer är fundamentalt mer effektiv än att läsa. Studenten tvingas fatta beslut, inte bara känna igen information. Felmatchning → omedelbar feedback → förklaring bygger djupare förståelse än passivt läsande.

---

## Scope

En ny sida `/algoritmer` med fyra interaktiva moduler baserade direkt på innehållet i `CCNA_Roadmap_and_Protocols.md`:

1. **STP-beslutsträd** — Välj Root Bridge och sätt portroller
2. **OSPF-tillståndsmaskin** — Diagnostisera varför ett grannskap fastnat
3. **IP-routing** — Longest prefix match, Administrative Distance, Metric
4. **ACL-flöde** — Top-down matching och implicit deny

---

## Filer att skapa

```
app/algoritmer/page.tsx                         — Next.js-sida
components/algoritmer/AlgoritmerPage.tsx        — Sidstruktur + modulval
components/algoritmer/ModulSTP.tsx              — STP-modul
components/algoritmer/ModulOSPF.tsx             — OSPF-modul
components/algoritmer/ModulRouting.tsx          — IP routing-modul
components/algoritmer/ModulACL.tsx              — ACL-modul
components/algoritmer/ScenarioCard.tsx          — Delad komponent: scenario + beslutssteg
```

---

## UX-flöde per modul

```
[Modulval] → [Scenario presenteras] → [Beslutspunkt] → [Rätt/fel feedback] → [Förklaring] → [Nästa steg / Nytt scenario]
```

### ScenarioCard-komponentens struktur
Varje steg i ett beslutsträd visas som ett kort:
- **Header:** Scenario-kontext (t.ex. "Switch A: Priority 32768, MAC aa:bb:cc:dd:ee:01")
- **Fråga:** Den specifika beslutspunkten (t.ex. "Vilket är det korrektaste BID-värdet?")
- **Alternativ:** 2–4 knappar med möjliga svar
- **After answer:** Grön/röd feedback + förklaringstext från MD-filen
- **Navigation:** "Nästa steg" eller "Nytt scenario"

---

## Modul 1: STP-beslutsträd

**Baserat på:** Avsnitt "Spanning Tree Protocol (STP / RSTP)" i `CCNA_Roadmap_and_Protocols.md`

### Scenario-format
Generera slumpmässiga STP-topologier med 3–4 switchar. Varje switch har:
- Slumpmässig Priority (32768 / 28672 / 24576 etc.)
- Slumpmässig MAC-adress
- Länkar med konfigurerbara kostnader

### Frågor som tränas
1. **Root Bridge-val** — "Vilken switch blir Root Bridge?" (lägst BID = lägst Priority, vid lika: lägst MAC)
2. **Root Port** — "Vilken port på Switch B är Root Port?" (lägst Root Path Cost, sedan grannens BID)
3. **Designated Port** — "Vilken port på segmentet AB är Designated Port?"
4. **Blockering** — "Vilken port sätts i Blocking state?"

### Poäng
- Rätt svar: +1 till domain `network-access`
- Felaktigt svar: visa förklaring utan poäng

---

## Modul 2: OSPF-tillståndsmaskin

**Baserat på:** Avsnitt "OSPFv2 (Open Shortest Path First)" i `CCNA_Roadmap_and_Protocols.md`

### Scenario-format
Presentera ett felsökningsscenario: "Router A och Router B är kopplade via Ethernet. `show ip ospf neighbor` visar att grannen är i INIT-state efter 2 minuter. Vad är sannolikt fel?"

### Frågor som tränas
1. **Normala övergångar** — Vad är nästa state efter Init?
2. **Felsökning fastnat i Init** — Vilket av följande KAN orsaka att grannskapet fastnar i Init? (Area ID mismatch, Hello-timer mismatch, MTU mismatch)
3. **2-Way är normalt** — Sant/falskt: Två DROther-routrar ska bara nå 2-Way med varandra
4. **DR/BDR-val** — "Router A har Router ID 2.2.2.2, Router B har 1.1.1.1. Vem blir DR?" (högst RID → DR)
5. **ExStart-felsökning** — Grannar fastnar i ExStart/Exchange — vilken parameter kontrolleras? (MTU)

### Tillståndsdiagrram
Visa OSPF state machine visuellt under scenariet:
```
Down → Init → 2-Way → ExStart → Exchange → Loading → Full
```
Markera nuvarande state i cyan, genomgångna i grönt.

---

## Modul 3: IP-routing-algoritm

**Baserat på:** Avsnitt "IP Routing-beslut" i `CCNA_Roadmap_and_Protocols.md`

### Scenario-format
Visa en routingtabell och ett inkommande paket. Fråga vilken rutt som väljs.

### Frågor som tränas
1. **Longest prefix match** — "Routern har rutter till 192.168.1.0/24 och 192.168.1.0/26. Paketet är till 192.168.1.50. Vilken rutt väljs?"
2. **Administrative Distance** — "Routern har en statisk rutt (AD=1) och en OSPF-rutt (AD=110) till samma prefix. Vilken väljs?"
3. **AD-tabell** — "Vilket AD-värde har OSPF?" (svarsalternativ: 90 / 110 / 120 / 1)
4. **ECMP** — "Två OSPF-rutter har identiskt prefix, AD och cost. Vad händer?" (Load balancing)
5. **Default route** — "Inget prefix matchar. Vad krävs för att paketet inte droppas?"

### AD-referenstabell (visas som hint)
| Protokoll | AD |
|---|---|
| Connected | 0 |
| Static | 1 |
| OSPF | 110 |
| RIP | 120 |

---

## Modul 4: ACL-flöde

**Baserat på:** Avsnitt "Access Control Lists (ACL)" i `CCNA_Roadmap_and_Protocols.md`

### Scenario-format
Visa en ACL-lista med numrerade rader. Fråga vad som händer med ett specifikt paket.

### Exempelscenario
```
ACL 101:
10  permit tcp 192.168.1.0 0.0.0.255 any eq 80
20  deny   ip  192.168.1.50 0.0.0.0 any
30  permit ip  any any
```
"Paket från 192.168.1.50 till 8.8.8.8 på TCP port 80. Vad händer?"

### Frågor som tränas
1. **Top-down matching** — Vilken rad matchar först?
2. **Implicit deny** — "ACL-listan slutar med `permit ip any any`. Vad händer med ett paket som inte matchar?" (Implicit deny FINNS INTE om explicit permit any finns)
3. **Inbound vs outbound** — "ACL appliceras inbound på Gi0/0. Filtreras trafik in till routern eller ut?"
4. **Standard vs extended** — "Standard ACL kan filtrera på?" (Bara source IP)
5. **Placeringsregel** — "Standard ACL bör placeras nära...?" (destinationen)

---

## Progress-integration

Rätt svar i algoritm-modulerna uppdaterar `AppProgress` via samma mekanism som quiz:

| Modul | Domain |
|---|---|
| STP | `network-access` |
| OSPF | `ip-connectivity` |
| IP routing | `ip-connectivity` |
| ACL | `security-fundamentals` |

Anropa `updateDomainProgress(domain, correct, total)` från `lib/progress.ts`.

---

## Navigation

Lägg till `/algoritmer` i sidebaren med en lämplig ikon (t.ex. ett beslutsträd-ikon eller "⚡"). Ikonen ska följa samma mönster som befintliga nav-items i layout-komponenten.

---

## Prioritet

Hög. Denna feature är den tydligaste differentieringen mot generiska CCNA-quizappar. Se `docs/ROADMAP.md` under Fas 2.1.
