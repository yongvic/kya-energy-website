import { Locale } from "./i18n.config";
import { i18n } from "./i18n.config";

// Determines the current locale from the URL pathname
export function getCurrentLocale(pathname: string): Locale {
  if (!pathname) return i18n.defaultLocale;
  const segments = pathname.split("/");
  return i18n.locales.find((l) => l === segments[1]) || i18n.defaultLocale;
}

export function redirectedPathName(pathname: string, locale: Locale): string {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
}

// Helper to get flag image URL from a reliable CDN
export function getFlagUrl(locale: string): string {
  // Use 'gb' for the United Kingdom flag for the 'en' locale
  const countryCode = locale === "en" ? "gb" : locale;
  return `https://hatscripts.github.io/circle-flags/flags/${countryCode}.svg`;
}
