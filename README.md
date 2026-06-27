# Glow Salon & Spa

Static marketing site for Glow Salon & Spa in Carmel, Indiana.

## Stack

- Astro 7 with strict TypeScript
- Astro Assets for responsive image optimization
- Partytown for third-party analytics
- Vercel Analytics
- `@astrojs/sitemap` for sitemap generation
- Component-scoped CSS

The site is intentionally Astro-first and ships no UI framework or hydrated client components.

## Requirements

- Node.js 24 LTS (see `.nvmrc`; Astro 7 requires Node.js 22.12 or newer)
- pnpm 10

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

`pnpm lint` runs Astro's strict TypeScript and template checks. `pnpm build` creates the static production site in `dist/`.

## Project structure

```text
src/
├── assets/            # Source images processed by Astro
├── components/        # Presentational and section components
│   ├── blog/
│   ├── buttons/
│   ├── salon-services/
│   ├── SEO/
│   └── service-pricing/
├── config/            # Business and site-wide constants
├── data/              # Blog, FAQ, review, and team data
├── layouts/           # Shared document layout and site chrome
├── pages/             # File-based routes
├── styles/            # Shared service-page styles
└── utils/             # SEO and structured-data helpers
```

## Content maintenance

- Business details, booking links, navigation, and the site-wide sitemap edit date live in `src/config/constants.ts`.
- Blog metadata lives in `src/data/blog.ts`. Blog sitemap dates use each post's `modifiedDate`, falling back to `publishedDate`.
- Team display data and images live in `src/data/team.ts`; the same data generates team structured data.
- Service FAQs live in `src/data/faqs.ts`.
- Review content and aggregate review details live in `src/data/reviews.ts` and `src/config/constants.ts`.

When making a meaningful non-blog site update, update `SITE_LAST_UPDATED` in `src/config/constants.ts`. For a revised blog article, set its `modifiedDate` instead.

## SEO and deployment

- `src/layouts/Layout.astro` owns canonical, Open Graph, Twitter, and shared local-business metadata.
- Page-specific structured data is composed through `src/components/SEO/StructuredData.astro`.
- `astro.config.mjs` generates route-specific sitemap metadata.
- `public/robots.txt` points crawlers to `/sitemap-index.xml`.
- `vercel.json` and `public/_redirects` preserve the legacy `/products` redirect and canonical `www` hostname.

Before deployment, run:

```bash
pnpm lint && pnpm build
```
