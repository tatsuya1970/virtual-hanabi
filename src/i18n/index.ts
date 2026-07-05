import { en } from "./en";
import { ja } from "./ja";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { ja, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale };
