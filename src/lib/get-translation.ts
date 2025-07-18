import "server-only";
import type { Locale } from "@/lib/i18n.config";
import type TranslationsType from "@/translations/translations.definition";

const translations = {
  "en": import("@/translations/en.json").then((module) => module.default),
  "fr": import("@/translations/fr.json").then((module) => module.default),
};

export const getTranslation = async (locale: Locale): Promise<TranslationsType> => {
  const translation: TranslationsType = await translations[locale];
  return translation;
};
