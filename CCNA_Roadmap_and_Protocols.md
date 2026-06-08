# CCNA Roadmap & Nätverksalgoritmer: Protokollscenarier

Denna Markdown-fil fungerar som en strukturerad roadmap och studieguide för CCNA. Den innehåller algoritmer, beslutsträd och felsökningsscenarier för de viktigaste nätverksprotokollen som testas på CCNA-examen.

---

## 🗺️ CCNA Roadmap: Steg för Steg-Metod

För att bemästra CCNA-materialet bör du följa denna logiska inlärningsväg:

```
[Fas 1: Grunderna] -> [Fas 2: Switchning] -> [Fas 3: Routing] -> [Fas 4: Säkerhet & Automation]
   (IP, Subnetting)      (VLAN, STP, EtherC)     (OSPF, Statisk)       (ACL, NAT, Python/JSON)
```

1. **Fas 1: Nätverksgrunder & IP-adressering**
   * Förstå OSI- och TCP/IP-modellerna.
   * **Subnetting (Kritiskt):** Kunna räkna ut subnät, mask och giltiga host-adresser på under 30 sekunder.
2. **Fas 2: Switching-teknologier (Lager 2)**
   * VLAN, Trunking (802.1Q) och DTP.
   * Spanning Tree Protocol (STP/RSTP) – val av Root Bridge och portroller.
   * EtherChannel (PAGP, LACP och Statisk).
3. **Fas 3: Routing-teknologier (Lager 3)**
   * IPv4 och IPv6 Routing-koncept (Administrative Distance, Metric).
   * OSPFv2 (Single-Area och Multi-Area grannskap).
   * First Hop Redundancy Protocols (FHRP / HSRP).
4. **Fas 4: IP-tjänster, Säkerhet & Automation**
   * ACL (Standard och Extended), NAT (Static, Dynamic, PAT).
   * Enhetssäkerhet (SSH, Port Security, DHCP Snooping).
   * Automation (SDA, DNA Center, REST API, JSON, Ansible/Puppet/Chef).

---

## 🛠️ Övergripande Algoritm för Paketleverans (Lager 2 till Lager 3)

När en host skickar ett paket till en annan host, följer enheterna denna interna algoritm:

```
                  [Destinationen i samma subnät?]
                             /         \
                         JA /           \ NEJ
                           /             \
    [Sök i ARP-tabellen efter Host-IP]   [Sök i ARP-tabellen efter Default Gateway-IP]
                 |                                      |
         (Hittades?)                                (Hittades?)
           /     \                                    /     \
       JA /       \ NEJ                           JA /       \ NEJ
         /         \                                /         \
[Kapsla in L2    [Skicka ARP-               [Kapsla in L2    [Skicka ARP-
 Frame med MAC]   Request]                   Frame med MAC]   Request]
```

---

## 🔬 Protokollscenarier & Beslutsträd

### 1. Spanning Tree Protocol (STP / RSTP)
**Scenario:** Switcharna startar upp och måste förhindra loopar i nätverket genom att välja en Root Bridge och sätta portroller.

#### Algoritm / Beslutsprocess:
1. **Välj Root Bridge:**
   * Lägst **Bridge ID (BID)** vinner.
   * $BID = Priority (2	ext{ bytes}) + MAC	ext{-adress (6 bytes)}$.
   * Om default-prioritet (32768) är densamma, vinner den switch som har **lägst MAC-adress**.
2. **Välj Root Ports (RP):**
   * Varje *icke-Root* switch måste välja **en** Root Port.
   * Baseras på lägst **Root Path Cost** till Root Bridge.
   * Om cost är lika: Välj grannens lägsta BID.
   * Om grannens BID är lika: Välj grannens lägsta Port ID (t.ex. Fa0/1 vinner över Fa0/2).
3. **Välj Designated Ports (DP):**
   * Varje länk/segment måste ha **en** Designated Port.
   * Den port på segmentet som har lägst Root Path Cost blir DP.
   * Alla portar på Root Bridge är automatiskt DP.
4. **Blockera resterande portar (Alternate/Backup Port):**
   * Alla portar som varken är RP eller DP sätts i **Blocking state** (STP) eller **Alternate state** (RSTP).

---

### 2. OSPFv2 (Open Shortest Path First)
**Scenario:** Två routrar är kopplade på samma segment och försöker bilda ett grannskap (Neighbor Adjacency).

#### Algoritm för Grannskapsstatus (State Machine):
1. **Down:** Inga Hello-paket har tagits emot.
2. **Init:** Router A tar emot ett Hello-paket från Router B, men A:s Router ID syns inte i paketet än.
3. **2-Way:** Routrarna ser sina egna Router ID i varandras Hello-paket. **Krav för CCNA:** Här sker valet av DR (Designated Router) och BDR (Backup DR) på multi-access-nätverk (Ethernet).
4. **ExStart:** Routrarna bestämmer vem som är Master/Slave för att initiera DBD (Database Description) utbytet baserat på högst Router ID.
5. **Exchange:** Routrarna byter DBD-paket som beskriver deras länkstatustabeller.
6. **Loading:** Routrarna skickar LSRs (Link State Requests) och tar emot LSUs (Link State Updates) för att ladda ner saknad information.
7. **Full:** Databaserna är helt synkroniserade. OSPF-grannskapet är fullständigt etablerat.

#### Felsökningsscenario: Varför fastnar OSPF i `2-Way` eller `Init`?
* **Fastnat i 2-Way:** Detta är *normalt* på ett Ethernet-segment mellan två "DROTHER"-routrar (routrar som varken är DR eller BDR). De ska bara nå 2-Way med varandra.
* **Fastnat i Init / Kommer inte till 2-Way:** Kontrollera följande parametrar som **MÅSTE matcha**:
  1. Subnät och nätmask.
  2. Hello och Dead Timers (Default: 10s Hello, 40s Dead på Ethernet).
  3. Area ID.
  4. Autentisering (lösenord).
  5. MTU (Maximum Transmission Unit) – om MTU diffar fastnar de oftast i *ExStart/Exchange*.
  6. Stub Area-flaggor.

---

### 3. EtherChannel (LACP & PAgP)
**Scenario:** Du ska bunta ihop flera fysiska länkar till en logisk länk för att öka bandbredden och ge redundans.

#### Beslutstabell för Konfiguration:

| Protokoll | Läge på Switch 1 | Läge på Switch 2 | Resultat (Formas EtherChannel?) |
| :--- | :--- | :--- | :--- |
| **LACP (IEEE)** | Active | Active | **JA** (Båda letar aktivt) |
| **LACP (IEEE)** | Active | Passive | **JA** (Switch 1 initierar, Switch 2 svarar) |
| **LACP (IEEE)** | Passive | Passive | **NEJ** (Ingen initierar förhandlingen) |
| **PAgP (Cisco)**| Desirable | Desirable | **JA** (Båda letar aktivt) |
| **PAgP (Cisco)**| Desirable | Auto | **JA** (Switch 1 initierar) |
| **PAgP (Cisco)**| Auto | Auto | **NEJ** (Ingen initierar) |
| **Statisk** | On | On | **JA** (Ingen förhandling, tvingad) |
| **Mix** | On | Active / Desirable| **NEJ** (Felaktig konfiguration/missmatch) |

---

### 4. IP Routing-beslut (Hur routern väljer väg)
**Scenario:** En router tar emot ett paket med en specifik destinations-IP. Routern har flera rutter i sin routingtabell som kan matcha.

#### Algoritm / Prioriteringsordning:
1. **Längsta Matchning (Longest Prefix Match):** Routern väljer alltid den rutt som har den mest specifika nätmasken (längst prefix).
   * *Exempel:* Om målet är `192.168.1.5` och routern har rutter till `192.168.1.0/24` och `192.168.1.0/26`, väljs **/26** eftersom den är mer specifik.
2. **Administrativt Avstånd (Administrative Distance - AD):** Om prefixlängden är exakt densamma, men rutterna har lärt sig via olika protokoll, väljs det protokoll med **lägst AD**.
   * Direktansluten (Connected): 0
   * Statisk rutt (Static): 1
   * OSPF: 110
   * RIP: 120
3. **Metric:** Om både prefixlängd och AD är exakt desamma (t.ex. två rutter via OSPF till samma nätverk), väljs rutten med **lägst Metric (Cost)**.
4. **Equal-Cost Multi-Path (ECMP):** Om prefix, AD och Metric är identiska, kommer routern att dela på lasten (Load Balancing) över båda vägarna.

---

### 5. Access Control Lists (ACL)
**Scenario:** Ett paket passerar ett gränssnitt där en ACL är applicerad (Inbound eller Outbound).

#### Algoritm / Exekveringsordning:
1. Paketet matchas mot raderna i ACL-listan **uppifrån och ner (Top-Down)** baserat på sekvensnummer.
2. Så fort en rad **matchar** (antingen `permit` eller `deny`), appliceras regeln direkt, och routern **slutar leta** vidare i listan.
3. Om paketet når slutet av listan utan att ha matchat en enda rad, blockeras det av den osynliga regeln: **Implicit Deny Any** (`deny ip any any`).

---

## 🚀 Snabbreferens för CCNA Kommandon (Felsökning)

Använd dessa kommandon i CLI för att verifiera algoritmerna ovan:

* **STP:** `show spanning-tree` eller `show spanning-tree vlan <id>`
* **OSPF:** `show ip ospf neighbor` och `show ip ospf database`
* **EtherChannel:** `show etherchannel summary`
* **Routing:** `show ip route`
* **ACL:** `show access-lists`
