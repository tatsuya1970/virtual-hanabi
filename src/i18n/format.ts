import type { Locale } from "./types";

export function formatEdition(locale: Locale, n: number): string {
  return locale === "ja" ? `第${n}回` : `#${n}`;
}

export function formatParticipants(locale: Locale, n: number): string {
  return locale === "ja" ? `${n.toLocaleString("ja-JP")}名` : n.toLocaleString("en-US");
}

export function formatDaysLeft(locale: Locale, n: number): string {
  return locale === "ja" ? `あと${n}日` : `${n} day${n === 1 ? "" : "s"} left`;
}
