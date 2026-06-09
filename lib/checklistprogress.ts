"use client";

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

export function toggleChecked(id: string): string[] {
  const checked = getChecked();
  const next = checked.includes(id)
    ? checked.filter((x) => x !== id)
    : [...checked, id];
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(next));
  }
  return next;
}

export function isItemChecked(id: string, checked: string[]): boolean {
  return checked.includes(id);
}
