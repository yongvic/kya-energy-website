# KYA-Energy Group Next.js Website

<!-- Add a section to show total commits on the project and center it -->
<p align="center">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/georgesnoe/kya-energy">
</p>

This repository contains the Next.js frontend website for KYA-Energy Group. It is responsible for providing the user interface and interacting with the backend services.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/georgesnoe/kya-energy.git
   cd kya-energy/nextjs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
.
├── public/             # Static assets (images, fonts, etc.)
├── src/
│ ├── app/              # Next.js App Router (pages, layouts, etc.)
│ ├── components/       # Reusable UI components
│ ├── lib/              # Utility functions and helpers
│ ├── styles/           # CSS styles
│ └── utils/            # Global styles and Tailwind CSS configuration
│ └── types/            # TypeScript type definitions
├── .env.local.example  # Example environment variables
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project README
```

## Technologies Used

This project leverages the following key technologies:

- **Next.js**: A React framework for building production-ready applications with server-side rendering and static site generation capabilities.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed superset of JavaScript that enhances code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Next-Intl**: A library for internationalization (i18n) in Next.js applications.
- **React icons**: A collection of popular icon packs.

## Contributing

To contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/your-bug-name`.
- Make your changes.
- Commit your changes: `git commit -m "feat: Add your feature"` or `fix: Fix your bug`.
- Push to the branch: `git push origin feature/your-feature-name`.
- Open a pull request to the `main` branch.

## License

This project is licensed under the MIT License.
