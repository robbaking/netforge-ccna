"use client";
import { PHASE_CHECKLISTS } from "@/data/phasechecklist";

const KEY = "netforge_checklist";

export function getChecked(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function setChecked(ids: string[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(ids));
  }
}

export function toggleChecked(id: string): string[] {
  const checked = getChecked();
  const next = checked.includes(id)
    ? checked.filter(x => x !== id)
    : [...checked, id];
  setChecked(next);
  return next;
}

export function markLabChecked(id: string): string[] {
  const checked = getChecked();
  if (checked.includes(id)) return checked;
  const next = [...checked, id];
  setChecked(next);
  return next;
}

export function isItemChecked(id: string, checked: string[]): boolean {
  return checked.includes(id);
}

// Returns true if the item at itemIndex (0-based within its phase) is available to work on.
// Item 0 is always available if the phase itself is unlocked.
// Item N requires item N-1 to be checked.
export function canUnlockItem(
  phase: number,
  itemIndex: number,
  checked: string[]
): boolean {
  if (itemIndex === 0) return true;
  const phaseItems = PHASE_CHECKLISTS.filter(item => item.phase === phase);
  const prev = phaseItems[itemIndex - 1];
  return prev ? checked.includes(prev.id) : true;
}
