import "server-only";
import type { Locale } from "@/lib/i18n.config";
import type Type from "@/dictionaries/dictionaries.type";

const dictionaries = {
  "en": import("@/dictionaries/en/en.json").then((module) => module.default),
  "fr": import("@/dictionaries/fr/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Type> => {
  const dictionary: Type = await dictionaries[locale];
  return dictionary;
};
