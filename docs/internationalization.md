# Internationalization (i18n) Guide

This guide explains how the internationalization (i18n) system is configured in this project and how to add support for a new language.

## How it Works

Our i18n strategy is built around the Next.js App Router's dynamic routes.

1.  **Middleware (`middleware.ts`)**: When a user visits the site, the middleware detects their preferred language from browser settings. It then redirects them to the appropriate language-specific path (e.g., `/` -> `/en`).
2.  **Dynamic Route (`src/app/[lang]`)**: All pages are located within this dynamic route, which captures the language code from the URL.
3.  **Translations (`src/translations`)**: Content is stored in simple JSON files, one for each language.
4.  **Dictionary Loader (`src/lib/get-dictionary.ts`)**: A server-side function loads the correct JSON dictionary based on the `lang` parameter from the URL.

## How to Add a New Language

Let's say you want to add support for **Spanish (`es`)**.

### Step 1: Update the i18n Configuration

Open `src/lib/i18n.config.ts` and add the new language code to the `locales` array.

```typescript
// src/lib/i18n.config.ts

export const i18n = {
  defaultLocale: "fr",
  locales: ["en", "fr", "es"], // Add "es" here
} as const;

export type Locale = (typeof i18n)["locales"][number];
```

### Step 2: Create the New Translation File

Create a new JSON file for the new language in the `src/translations/` directory.

1.  Create the file `src/translations/es.json`.
2.  Copy the content from `en.json` or `fr.json` and translate all the values into Spanish.

Example `src/translations/es.json`:
```json
{
  "navigation": {
    "home": "Inicio",
    "about": "Sobre Nosotros",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "hero": {
    "title": "Pioneros en Soluciones de Energía Sostenible",
    "subtitle": "Únase a nosotros para construir un futuro más limpio y brillante para todos.",
    "cta": "Programar una Consulta"
  }
}
```

> [!NOTE]
>
> The json file format is located in src/translations/translations.definition.ts file.

### Step 3: Update the Dictionary Loader

Open `src/lib/get-translation.ts` and add an entry for the new language in the `translations` object.

```typescript
// src/lib/get-dictionary.ts

import "server-only";
import type { Locale } from "@/lib/i18n.config";

const translations = {
  en: () => import("@/translations/en.json").then((module) => module.default),
  fr: () => import("@/translations/fr.json").then((module) => module.default),
  es: () => import("@/translations/es.json").then((module) => module.default), // Add this line
};

export const getTranslation = async (locale: Locale) => {
  return translation[locale]();
};
```

That's it! The `generateStaticParams` function in the root layout will automatically detect the new language and pre-render all pages for the `/es` route during the next build.
