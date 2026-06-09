import type { QuizAttempt } from "./types";

const DB_NAME = "netforge";
const STORE = "attempts";
const VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB not available"));
      return;
    }
    const req = indexedDB.open(DB_NAME, VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("date", "date");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveAttempt(attempt: QuizAttempt): Promise<void> {
  if (typeof indexedDB === "undefined") return;
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(attempt);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAttempts(limit = 50): Promise<QuizAttempt[]> {
  if (typeof indexedDB === "undefined") return [];
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).index("date").openCursor(null, "prev");
    const results: QuizAttempt[] = [];
    req.onsuccess = () => {
      const cursor = req.result;
      if (cursor && results.length < limit) {
        results.push(cursor.value as QuizAttempt);
        cursor.continue();
      } else {
        resolve(results);
      }
    };
    req.onerror = () => reject(req.error);
  });
}

export async function getWrongQuestionIds(limit = 30): Promise<string[]> {
  const attempts = await getAttempts(100);
  const seen = new Set<string>();
  const ids: string[] = [];
  for (const attempt of attempts) {
    for (const r of attempt.results) {
      if (!r.correct && !seen.has(r.questionId) && ids.length < limit) {
        seen.add(r.questionId);
        ids.push(r.questionId);
      }
    }
  }
  return ids;
}
