# AGENTS.md - Guidelines for Agentic Coding Agents

This file provides instructions for AI agents (like yourself) working in the `manual-do-calouro` repository. It covers build, lint, test commands, code style guidelines, and project conventions.

## 📋 Table of Contents
1. [Development Commands](#development-commands)
2. [Code Style Guidelines](#code-style-guidelines)
3. [TypeScript/JavaScript Specifics](#typescriptjavascript-specifics)
4. [Naming Conventions](#naming-conventions)
5. [Imports & Dependencies](#imports--dependencies)
6. [Error Handling](#error-handling)
7. [Testing Guidelines](#testing-guidelines)
8. [Git Commit Conventions](#git-commit-conventions)
9. [Additional Notes](#additional-notes)

---

## 🛠️ Development Commands

### Build Commands
- **Development server**: `npm run dev`  
  Starts Next.js development server with hot reload.
- **Production build**: `npm run build`  
  Generates optimized production build and creates `.nojekyll` file for GitHub Pages.
- **Start production**: `npm run start`  
  Runs the built application in production mode.
- **Compress assets**: `npm run compress`  
  Executes `compress.js` to compress assets (likely for deployment).
- **Post-build**: `npm run postbuild`  
  Runs after build: generates sitemap via `next-sitemap` and processes with `planktos`.

### Testing
No explicit test scripts are defined in `package.json`.  
If you add tests, consider using Jest or Vitest and add a script like:
```json
"test": "vitest run"
```
or
```json
"test": "jest"
```

### Linting
No lint script is defined. To add linting, consider installing ESLint and Prettier:
```bash
npm install --save-dev eslint prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Then add to `package.json`:
```json
"lint": "eslint . --ext .ts,.tsx,.js,.jsx"
```

### Formatting
No formatter is configured. To enable consistent formatting, add Prettier:
```bash
npm install --save-dev prettier
```
Create `.prettierrc` and add:
```json
"format": "prettier --write ."
```

---

## 🎨 Code Style Guidelines

### General Principles
- Keep code readable and maintainable.
- Prefer explicit over implicit.
- Avoid magic numbers/constants; define them as named constants.
- Follow the existing patterns in the codebase.

### TypeScript/JavaScript Specifics
- Use TypeScript for all new files (`.ts` or `.tsx`).
- Enable strict type checking where possible (see `tsconfig.json`).
- Prefer interfaces over types for object shapes; use types for unions, tuples, etc.
- Avoid `any` type; if necessary, comment why.
- Use `const` for variables that don’t reassign; `let` for reassignment; avoid `var`.
- Prefer arrow functions for callbacks and inline functions.
- Use template literals for string concatenation.
- Always specify return types for exported functions.

### Imports & Dependencies
- Order imports: 
  1. Built-in Node modules (if any)
  2. External libraries (e.g., `react`, `next`)
  3. Internal project modules (relative paths)
- Within each group, sort alphabetically.
- Use path aliases if configured (none currently; consider adding `@/` in `tsconfig`).
- Avoid importing barrels (`index.ts`) unless necessary.
- Prefer named imports over default when importing multiple items from same module.
- Example:
  ```ts
  import React from 'react';
  import Link from 'next/link';
  import { giscus } from '@giscus/react';
  import { useTheme } from '@/hooks/useTheme';
  ```

### Formatting
- Indentation: 2 spaces (standard for TypeScript/JavaScript in this repo).
- Line length: Aim for ≤ 100 characters; wrap gracefully.
- Trailing commas: Use in multi-line objects/arrays for easier diffs.
- Semicolons: Optional but be consistent; current codebase uses them sparingly (follow existing files).
- Quotes: Prefer single quotes (`'`) for strings; use backticks only for template literals.
- Braces: Place opening brace on same line as statement (K&R style).
  ```ts
  if (condition) {
    // body
  }
  ```
- Empty lines: Separate logical sections; one blank line between imports, between function definitions, etc.

### Naming Conventions
- **Files & folders**: `kebab-case` (e.g., `header-component.tsx`).
- **Components**: `PascalCase` (e.g., `Header.tsx`).
- **Functions & variables**: `camelCase`.
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_ITEMS`).
- **Types & interfaces**: `PascalCase` (e.g., `UserProps`).
- **Enum members**: `UPPER_SNAKE_CASE`.
- **Acronyms**: Treat as words (e.g., `XMLHttpRequest` → `xmlHttpRequest`; `URL` → `url` or `Url` depending on context; follow existing usage).

### Error Handling
- Prefer TypeScript’s type system to catch errors at compile time.
- For runtime errors, use `try/catch` where appropriate.
- In Next.js API routes or server components, return appropriate HTTP status codes.
- Avoid `console.error` in production; use logging library if needed.
- When throwing errors, instantiate `Error` with descriptive message.
- Handle promises with `.catch()` or `try/await`.

### Comments & Documentation
- Use JSDoc for exported functions and components.
- Write clear, concise comments explaining *why*, not *what*.
- Keep comments up-to-date; remove stale comments.
- Use `// TODO:` for future work; include ticket or context if possible.

---

## 🧪 Testing Guidelines
Currently no tests exist. When adding tests:
- Place tests alongside source files with `.test.ts` or `.test.tsx` suffix, or in a `__tests__` folder.
- Use descriptive test names: `should do X when Y`.
- Follow Arrange-Act-Assert pattern.
- Mock external dependencies (APIs, modules) where appropriate.
- Aim for meaningful coverage; prioritize critical paths.
- If using React Testing Library, prefer querying by role, label text, etc.

Example:
```tsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders welcome message', () => {
  render(<MyComponent />);
  const welcome = screen.getByRole('heading', { name: /welcome/i });
  expect(welcome).toBeInTheDocument();
});
```

---

## 📦 Git Commit Conventions
Although no formal convention is enforced, we recommend adopting [Conventional Commits](https://www.conventionalcommits.org/):
- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation changes
- `style`: formatting, missing semicolons, etc.
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: performance improvement
- `test`: adding or correcting tests
- `chore`: build process, tooling changes
- Format: `type(scope): description`
- Keep subject line ≤ 50 characters; body wrapped at 72 chars.
- Example: `feat(header): add dark mode toggle`

---

## 📂 Project Structure Overview
- `pages/`: Next.js pages (routes).
- `components/`: Reusable React components (consider creating this folder if missing).
- `public/`: Static assets.
- `styles/`: CSS or CSS-in-JS (if any).
- `docs/`: Output directory for GitHub Pages (generated by build).
- `sitemaps/`: Generated sitemap files.
- `target/`: Possibly build artifacts (check `.gitignore`).

---

## 🔧 Additional Notes
- The site is deployed to Vercel; GitHub Pages is used as a fallback via `.nojekyll`.
- Ensure any new dependency is added to `package.json` and installed.
- When modifying `next.config.js`, verify it doesn’t break PWA or sitemap generation.
- The `compress.js` script should be reviewed if you add new asset types.
- Keep `README.md` updated with major changes.

---
*This document is intended to evolve with the project. Update it as conventions change.*