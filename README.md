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

## Visitor analytics

The `/api/visits` route counts visits per country (geo from Vercel's
`x-vercel-ip-country` header) and renders them on the world map in the
**Visitor Analytics** section.

- **Local dev:** uses an in-memory store (resets on restart; visits count as IN).
- **Production:** add the free **Upstash Redis** integration from the
  [Vercel Marketplace](https://vercel.com/marketplace/upstash) to your project.
  Keep the default env-var prefix (`KV`) when it asks — the code reads
  `KV_REST_API_URL`/`KV_REST_API_TOKEN` as well as the classic
  `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`, so either works. Without it, counts reset whenever
  the serverless function cold-starts.

Also set `NEXT_PUBLIC_SITE_URL` to your deployed URL for correct
canonical/OG/sitemap links.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js — no extra config needed. Click **Deploy**.

Alternatively, with the Vercel CLI:

```bash
npm i -g vercel
vercel
```
