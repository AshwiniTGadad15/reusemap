# ReUseMap

**Give Things a Second Life.**

ReUseMap is a community-powered reuse and donation platform concept. This repository currently contains **Milestone 1: the responsive public frontend foundation**. Listings are sample demo data; account, listing, request and handover actions are not connected to a backend.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Milestone 1 pages

- Home: hero, sample featured items, category links, how it works, community and reuse messaging.
- Explore: in-memory sample listings with text search, category and locality filters.
- Item details: sample listing information and an approximate locality notice.
- Log in and register: accessible interface and client-side required-field checks. Submitting does not send or store information.
- About: the product purpose and principles.

The site labels the sample content and any unconnected actions. Photos are loaded from Unsplash URLs and require an internet connection.

## Project structure

```text
src/
  components/
    common/
    items/
    layout/
  data/
  pages/
  types/
  App.tsx
  index.css
  main.tsx
```

React, TypeScript, Vite, Tailwind CSS, React Router and Lucide React are configured. The design uses a small set of custom CSS components alongside Tailwind utilities.

## Next milestone

Milestone 2 will connect Supabase authentication and profiles, add database migrations and Row Level Security policies, and document environment setup. No Supabase credentials are needed for the current frontend preview.
