# Frågeimport-guide: NotebookLM → ccna_questions.json

Denna guide förklarar hur du konverterar frågor genererade av NotebookLM (från Ciscos officiella 200-301-PDF) till appens JSON-format.

---

## JSON-format

Varje fråga i `data/ccna_questions.json` följer denna struktur:

```json
{
  "id": "na-013",
  "domain": "network-access",
  "difficulty": "normal",
  "question": "Vilka två lägen bildar en LACP EtherChannel?",
  "options": [
    "Active – Active",
    "Active – Passive",
    "Passive – Passive",
    "Desirable – Desirable"
  ],
  "correct": 1,
  "explanation": "LACP kräver att minst en sida är Active. Active–Active och Active–Passive bildar EtherChannel. Passive–Passive fungerar inte eftersom ingen initierar förhandlingen.",
  "source": "notebooklm"
}
```

---

## Fältbeskrivning

| Fält | Typ | Regler |
|---|---|---|
| `id` | string | Domänprefix + löpnummer: `nf-014`, `na-013`, osv. Se prefix-tabell nedan |
| `domain` | Domain | En av de 6 domänerna. Se domäntabell nedan |
| `difficulty` | string | `"easy"`, `"normal"` eller `"hard"`. Se svårighetsdefinitioner |
| `question` | string | Frågan på **svenska**. Avsluta inte med radbrytning |
| `options` | string[] | Exakt **4** svarsalternativ, på svenska |
| `correct` | number | **Nollbaserat index** (0 = första alternativet, 1 = andra, osv.) |
| `explanation` | string | Förklaring på svenska, 1–3 meningar. Förklara **varför** rätt svar är rätt |
| `source` | string (valfritt) | `"notebooklm"`, `"cisco-pdf"` eller `"manual"` |

---

## ID-prefix per domän

| Domän | Prefix | Exempel |
|---|---|---|
| network-fundamentals | `nf-` | `nf-014`, `nf-015` |
| network-access | `na-` | `na-013`, `na-014` |
| ip-connectivity | `ic-` | `ic-013`, `ic-014` |
| ip-services | `is-` | `is-012`, `is-013` |
| security-fundamentals | `sf-` | `sf-012`, `sf-013` |
| automation-programmability | `ap-` | `ap-012`, `ap-013` |

**Hitta nästa lediga nummer:** Sök efter det senaste ID:t för domänen i `data/ccna_questions.json` och räkna upp med 1.

---

## Domänvärden (exakta strängar)

```
"network-fundamentals"
"network-access"
"ip-connectivity"
"ip-services"
"security-fundamentals"
"automation-programmability"
```

---

## Svårighetsdefinitioner

| Nivå | Beskrivning | Exempel |
|---|---|---|
| `"easy"` | Faktafråga — definitioner, begrepp, förkortningar | "Vad står TCP för?" |
| `"normal"` | Tillämpningsfråga — välj rätt konfiguration, tolka ett scenario | "En host med IP 10.0.0.50/26 — vilket är nätverksadressen?" |
| `"hard"` | Felsökning eller analys — vad är fel, varför fungerar inte detta | "OSPF-grannarna fastnar i EXSTART — vilken parameter är felkonfigurerad?" |

---

## Konverteringsexempel: NotebookLM → JSON

### NotebookLM-utdata (engelska)
```
Question: Which command verifies OSPF neighbor adjacencies?
A) show ip route ospf
B) show ip ospf neighbor
C) show ip ospf database
D) debug ip ospf events
Answer: B
```

### Konverterat till appens format (svenska)
```json
{
  "id": "ic-013",
  "domain": "ip-connectivity",
  "difficulty": "easy",
  "question": "Vilket kommando verifierar OSPF-grannskap (neighbor adjacencies)?",
  "options": [
    "show ip route ospf",
    "show ip ospf neighbor",
    "show ip ospf database",
    "debug ip ospf events"
  ],
  "correct": 1,
  "explanation": "show ip ospf neighbor visar alla OSPF-grannar, deras tillstånd (Full, 2-Way, etc.), Router ID och det gränssnitt de är nåbara via.",
  "source": "notebooklm"
}
```

**Viktigt:** `correct: 1` eftersom "show ip ospf neighbor" är det **andra** alternativet (index börjar på 0).

---

## Vilka ämnen att prioritera

Baserat på Cisco 200-301 v1.1-blueprinten — fokusera på ämnen med hög examenvikt:

### IP Connectivity (25%) — prioritet 1
- Longest prefix match och routingtabellen (3.1–3.2)
- OSPFv2: grannskap, DR/BDR, Router ID (3.4)
- Statisk routing och floating static (3.3)

### Network Fundamentals (20%) — prioritet 2
- IPv6-adresstyper: unicast, link-local, EUI-64 (1.8–1.9)
- TCP vs UDP (1.5)
- Switching-koncept: MAC-tabell, frame flooding (1.13)

### Network Access (20%) — prioritet 3
- STP: PortFast, BPDU Guard, Root Guard (2.5)
- EtherChannel: LACP-lägen (2.4)
- VLANs och InterVLAN-routing (2.1)

### Security Fundamentals (15%) — prioritet 4
- ACL: placering, implicit deny, standard vs extended (5.6)
- Layer 2-säkerhet: DHCP Snooping, DAI, Port Security (5.7)

---

## Steg-för-steg workflow

1. **Generera frågor i NotebookLM** — be om frågor för ett specifikt Cisco blueprint-objektiv (t.ex. "skapa 5 flervalsfrågor om OSPF DR/BDR-val baserat på avsnitt 3.4")
2. **Översätt till svenska** — fråga och svarsalternativ ska vara på svenska
3. **Identifiera domain och difficulty** — använd tabellerna ovan
4. **Hitta nästa lediga id** — kolla sista ID:t för domänen i `data/ccna_questions.json`
5. **Lägg till i JSON-filen** — klistra in det nya objektet i `questions`-arrayen
6. **Kontrollera `correct`-index** — räkna från 0, inte 1

---

## Vanliga misstag

- **`correct: 2` när svaret är det tredje alternativet** — korrekt, index 2 = tredje
- **Engelska i `question` eller `options`** — alltid svenska
- **Färre än 4 alternativ** — appen kräver exakt 4
- **Saknar `explanation`** — förklaringen är viktigare än frågan för inlärning
- **Duplicerat ID** — kolla att id:t inte redan finns i filen
