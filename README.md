# NetForge

**CCNA 200-301 Study Platform** — A personal study tool built to prepare for the Cisco CCNA exam.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

---

## About

I built NetForge because I was preparing for the CCNA exam and wanted something more than a flashcard app. Most existing tools felt generic — I wanted a tool that felt mine, with a design I actually enjoyed using.

The result is a dark terminal-aesthetic dashboard that tracks your progress across all six CCNA exam domains, lets you quiz yourself with real exam-style questions, and includes a subnetting calculator for the part of CCNA that trips most people up.

---

## Features

### Dashboard
- Overall score ring with per-domain breakdown
- Study streak tracker and total study time
- Activity feed showing recent quiz sessions
- Built-in study timer that saves time to progress history
- Quick-start cards highlighting your weakest domains

### Quiz
- 51 CCNA 200-301 questions across all six exam domains
- Filter by domain, difficulty (easy / normal / hard), and question count (10 / 25 / 50)
- Keyboard shortcuts: press **A / B / C / D** to answer
- Instant feedback with explanations after each answer
- Full review screen when quiz is complete
- Progress saved to localStorage — no account needed

### Subnetting
- **Calculator**: Enter any IP + CIDR prefix to get network address, broadcast, first/last host, host count, subnet mask, binary mask, and wildcard mask
- **Trainer**: Random subnetting challenges — you fill in the blanks and check your answers

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Font | JetBrains Mono (Google Fonts) |
| Data | JSON question bank |
| Storage | localStorage (no backend required) |

**Design**: Cyber Blue dark theme — deep navy backgrounds (`#060a14`), cyan accents (`#00e5ff`), purple highlights (`#7c4dff`).

---

## Getting Started

```bash
git clone https://github.com/robbaking/netforge-ccna.git
cd netforge-ccna
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
ccna-app/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard page
│   ├── quiz/               # Quiz page
│   └── subnetting/         # Subnetting calculator page
├── components/
│   ├── dashboard/          # ScoreRing, DomainProgress, StudyTimer, ActivityFeed
│   ├── quiz/               # QuizConfig, QuizCard, QuizResults
│   └── subnetting/         # SubnetCalc, SubnetTrainer
├── lib/
│   ├── questions.ts        # Question filtering and shuffling
│   ├── progress.ts         # localStorage read/write helpers
│   └── subnet.ts           # Bitwise subnet calculations
└── data/
    └── ccna_questions.json # Question database
```

---

## CCNA 200-301 Exam Domains

| Domain | Weight |
|---|---|
| Network Fundamentals | 20% |
| Network Access | 20% |
| IP Connectivity | 25% |
| IP Services | 10% |
| Security Fundamentals | 15% |
| Automation & Programmability | 10% |

Questions are tagged per domain so you can focus on the areas where you need the most practice.

---

## Roadmap

- [ ] More questions (expanding from 51 toward 100+)
- [ ] Network topology visualizer
- [ ] Supabase backend for cross-device progress sync
- [ ] Timed exam mode (120 minutes, 103 questions)

---

## License

MIT — free to use, fork, and adapt.
