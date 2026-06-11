# Fauzan Ejaz — Portfolio

A Next.js (App Router) portfolio site built from the resume of Fauzan Ejaz, Data Scientist.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**

## Project structure

```
app/
  layout.tsx        Root layout + metadata (reads from resume data)
  page.tsx          Assembles all sections in order
  globals.css       Tailwind + base styles
components/          Presentational sections (Hero, About, Skills, ...)
  Section.tsx        Shared section wrapper
lib/
  resume-data.ts    SINGLE SOURCE OF TRUTH for all content
```

> **Design note:** All content lives in `lib/resume-data.ts`. Components only
> read from it. When the new UI design is ready, rebuild the components against
> the same data shape — no content changes required.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js — no extra config needed. Click **Deploy**.

Alternatively, with the Vercel CLI:

```bash
npm i -g vercel
vercel
```
