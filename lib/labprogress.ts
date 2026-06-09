"use client";
import { addXp } from "./progress";

const KEY = "netforge_lab_progress";

interface LabProgressStore {
  completed: string[];
}

function getStore(): LabProgressStore {
  if (typeof window === "undefined") return { completed: [] };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LabProgressStore) : { completed: [] };
  } catch {
    return { completed: [] };
  }
}

function saveStore(store: LabProgressStore): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(store));
  }
}

export function getLabProgress(): LabProgressStore {
  return getStore();
}

export function markLabDone(labId: string): void {
  const store = getStore();
  if (!store.completed.includes(labId)) {
    store.completed.push(labId);
    saveStore(store);
    addXp(50);
  }
}

export function isLabDone(labId: string): boolean {
  return getStore().completed.includes(labId);
}
