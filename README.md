# StoryScapeAi
Web story roleplay with Ai

---

## Project status
This repository was previously an empty project stub. I created an initial Phase 1 scaffold to establish a clean, maintainable foundation for StoryScapeAI.

This scaffold implements a minimal Next.js (App Router) + TypeScript + Tailwind CSS layout, a Prisma schema for PostgreSQL, basic reusable UI components, environment guidance, and developer scripts necessary to continue development.

The scaffold intentionally keeps functionality small and non-opinionated so the application can be implemented incrementally in Phase 2.

### Quick start (developer)
1. Copy environment example and set real values:

   cp .env.example .env

2. Install dependencies (node 18+ recommended):

   npm install

3. Generate Prisma client (if you have DATABASE_URL set):

   npx prisma generate

4. Run development server:

   npm run dev

5. Run type checks:

   npm run typecheck

---

## What I added in Phase 1
- Next.js + TypeScript App Router scaffold (app/ layout and page)
- Tailwind CSS configuration and global styles
- Minimal reusable components (NavBar, Footer, Button)
- Prisma schema (PostgreSQL) and Prisma client helper
- .env.example describing required environment variables
- .gitignore to avoid committing secrets or build artifacts
- Basic package.json with scripts for development, build, and Prisma
- Project documentation for Phase 1 (docs/PHASE1.md)

---

## Planned Phase 2 (high level)
- Implement authentication (NextAuth or custom) and account management
- Create database migrations and seed scripts
- Implement Create Character workflow and Definition stage
- Character Chat backend and AI provider integration
- World creation UI and World Director orchestration
- Multilingual i18n setup and translation resources
- Tests for critical features and accessibility checks

---

For full Phase 1 details, see docs/PHASE1.md
