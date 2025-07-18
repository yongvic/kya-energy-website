# Project Structure

This document provides a high-level overview of the key files and folders in the Kya Energy website project. Understanding this structure is essential for efficient development.

```
/
├── docs/              # Project documentation files
├── public/            # Static assets (images, fonts, etc.)
├── src/               # Main application source code
│   ├── app/           # Next.js App Router directory
│   │   └── [lang]/    # Dynamic route for internationalization
│   │       ├── layout.tsx # Main layout for each language
│   │       └── page.tsx   # Homepage for each language
│   ├── components/    # Reusable React components
│   ├── translations/  # JSON translation files (en.json, fr.json)
│   ├── lib/           # Core logic, utilities, and configurations
│   │   ├── get-translation.ts # Function to load translations
│   │   └── i18n.config.ts    # i18n configuration
│   └── styles/        # Global styles
│       └── globals.css  # Main global stylesheet
├── .gitignore         # Files and folders to be ignored by Git
├── eslint.config.mjs  # ESLint configuration
├── middleware.ts      # Next.js middleware for i18n redirection
├── next.config.ts     # Next.js configuration
├── package.json       # Project metadata and dependencies
├── postcss.config.mjs # PostCSS configuration
├── README.md          # Top-level project README
└── tsconfig.json      # TypeScript configuration
```

## Key Directories Explained

*   **`src/app/[lang]`**: This is the heart of the Next.js application. The `[lang]` dynamic route is crucial for our internationalization strategy. All new pages should be created within this directory structure.

*   **`src/components`**: Contains all reusable UI components (e.g., `Button`, `Header`, `Footer`). Components here should be generic and not tied to a specific page.

*   **`src/lib`**: A crucial folder for housing core business logic, utility functions, and configuration loaders. The internationalization setup (`i18n.config.ts` and `get-translation.ts`) lives here.

*   **`src/translations`**: Holds the JSON files for each supported language. To add a new translation, you would add a new key-value pair to each file here.

*   **`public`**: For static assets that don't need to be processed by the build pipeline, such as favicons, images, or SVG icons.

*   **`docs`**: Contains all project documentation.
