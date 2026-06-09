# Debugrapport — NetForge (CCNA-app)

## Sammanfattning
Jag har granskat kärnfilerna i `ccna-app` och identifierat 9 konkreta fel/riskområden som kan leda till krasch, felaktigt beteende eller otillförlitlighet i produktion.

---

## 1. `components/quiz/QuizCard.tsx` — rad 40
**Problem:** `useEffect`-dependency innehåller `chosen`, vilket gör att effekten körs om och om igen varje gång användaren klickar ett alternativ, innan `handlePick` hinner uppdatera state.
```tsx
}, [question, revealed, chosen]);
```
**Risk:** Keyboard-listeners kan stacka, orsaka dubbelhantering av tangenttryck eller onödig re-rendering. Kan också leda till att en gammal listener refererar till en stargt `chosen`-värde.

---

## 2. `app/quiz/page.tsx` — rad 61-63
**Problem:** `startRepeatWrong` är async, men callback `onRepeatWrong(count)` (från `QuizConfig`) förväntar sig ett `Promise` när den egentligen kallas med `count: number`, inte `ids`. `QuizPageInner` returnerar inget värde från `startRepeatWrong`, men `getWrongQuestionIds` är en async funktion som returnerar ett promise. Parent-komponenten `QuizConfig`-knappen är hooked till `startRepeatWrong(count)` vilket innebär att funktionen *sker* returnera innan ids är klara, och `setState` körs med potentiellt empty array.
```tsx
async function startRepeatWrong(count: number) {
  const ids = await getWrongQuestionIds(count);
  if (!ids.length) return;
  startQuiz("all", count, "all", ids);
}
```
**Risk:** Om användaren klickar snabbt kan `setPhase("quiz")` och `setQuiz({...})` köras med inga frågor eller med en delay som känns som att knappen "hänger".

---

## 3. `lib/progress.ts` — rad 85-90
**Problem:** Streak-logiken jämför endast med `yesterday` baserat på `Date.now() - 86400000`. Om användaren ändrar systemtid eller är i en tidszon där midnatt skiljer sig drastiskt, kan streak räknas fel eller återställas oväntat. Innan dess också saknar den hantering av ogiltigt `lastActiveDate`-värde.
```ts
const yesterday = new Date(Date.now() - 86400000).toDateString();
p.streak = p.lastActiveDate === yesterday ? (p.streak ?? 0) + 1 : 1;
```
**Risk:** Produktionsstreak kan gå förlorad eller räknas fel utan användaren förstår varför.

---

## 4. `components/quiz/QuizPage.tsx` — rad 66-108
**Problem:** `handleAnswer` anropar `finishQuiz`, `saveAttempt`, och sen `setPhase("results")` utan try/catch eller punkt-för-punkt Hantering. Om någon av dessa funktioner kastar (t.ex. localStorage-full, IndexedDB-fel), kommer komponenten att krascha eller fastna i ett `quiz`-tillstånd där inget visas.
```tsx
finishQuiz(domainResults, answerDetails, correct, finalQuiz.questions.length);
const attempt: QuizAttempt = { ... };
saveAttempt(attempt);
setPhase("results");
```
**Risk:** Ohanterade exceptions i quiz-slutet kan lämna användaren utan resultatsida eller med en vit skärm.

---

## 5. `components/dashboard/DashboardPage.tsx` — rad 44-48
**Problem:** `useEffect` med tom dependency kör en `setInterval` var 5:e sekund som läser localStorage. Detta är onödig och kan orsaka prestandaproblem på långsikt, särskilt om användaren har många aktiviteter. Inget fel i sig, men en designmässig risk.
```tsx
useEffect(() => {
  setProgress(getProgress());
  const id = setInterval(() => setProgress(getProgress()), 5000);
  return () => clearInterval(id);
}, []);
```

---

## 6. `components/subnetting/SubnetCalc.tsx` — rad 59-63
**Problem:** CIDR-input accepterar text, men `Number("abc")` blir `NaN`. Även om `calculateSubnet` returnerar `null` för `NaN`, så sparas `cidr`-state till `NaN` vilket kan leda till konstiga gränser i input-fältet. Reacts `type="number"` med `min`/`max` accepterar `NaN` utan varning.
```tsx
onChange={(e) => setCidr(Number(e.target.value))}
```
**Risk:** Användaren kan Mata in ogiltiga värden som ser ok ut men gör att beräkningen Misslyckas eller att UI beter sig oväntat.

---

## 7. `lib/topology.ts` — svepande null/undefined-säkerhet
**Problem:** I `getDeviceConfig` finns flera ställen där optional-fält (`device.lanIp`, `device.ip`) används utan att alltid ha en fallback. Särskilt för switchar och routrar där `lanIp` kan vara undefined. Exempel på rad 273 och 277:
```ts
lines.push(` ip address ${device.ip ?? '192.168.10.1'} 255.255.255.0`);
lines.push(` ip address ${device.lanIp ?? '192.168.20.1'} 255.255.255.0`);
```
Även om `??` används här, saknas det i andra delar (t.ex. rad 190 där raw `device.lanIp` används). Vidare kan `calculateSubnet` eller genereringen av nät krascha om IP-adresser är ofullständiga.

---

## 8. `components/subnetting/SubnetTrainer.tsx` — rad 45
**Problem:** Vid varje rättning adderas poäng, men om användaren klickar `check()` flera gånger (utan att `newQuestion` körts) kommer `correct` och `total` att adderas om och om igen, eftersom ingen `disabled`-flagga eller annan skydd finns.
```ts
setScore(s => ({ correct: s.correct + numCorrect, total: s.total + 4 }));
```
**Risk:** Användaren kan "spamma" check-knappen och få orimligt många poäng utan att göra rätt.

---

## 9. `lib/quizdb.ts` — rad 57-70
**Problem:** `getWrongQuestionIds` laddar alla försök med `getAttempts(100)` varje gång den anropas. Om det finns många försök blir detta långsamt. Det saknas också hantering för att `results` kan vara saknas eller vara tomt i ett `QuizAttempt`.
**Risk:** UI kan frysa vid fetching av fel-ID:n, och om `attempt.results` saknas kastas ett undantag.

---

## Övriga observationer
- Flertal komponenter saknar felgränser (error boundaries) kring `localStorage` och `IndexedDB`-åtkomst.
- `QuizPage.tsx` kollar inte om `quiz.questions` är tomt innan rendering, vilket kan leda till en vit skärm vid felaktig query-parameter.
- `SubnetCalc.tsx` visar aldrig ett tydligt felstate om IP är tomt vid beräkning — den borde validera input fält.

---
Rapport genererad: 2025-06-09
