# Deployment Guide

## Production build

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
```

The deployable static output is written to `dist/`.

## Runtime requirements

- Node.js 24 LTS at build time
- pnpm 10
- No runtime environment variables are required

The contact form posts to Formspree, and analytics IDs are configured in the site source.

## Vercel

Use the standard Astro static-site settings:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`

`vercel.json` preserves legacy product redirects and redirects the apex hostname to `www`.

## Other static hosts

Deploy the contents of `dist/`. `public/_redirects` supplies equivalent redirects for hosts that support Netlify-style redirect rules. `public/products/index.html` remains as a static fallback for the retired product route.

## Post-deployment checks

- Confirm the canonical host is `https://www.glowsalonwestclay.com/`.
- Confirm `/products/` redirects to `/services/`.
- Confirm `/sitemap-index.xml`, `/robots.txt`, and a representative social image return successfully.
- Check the homepage, a service page, a blog article, the team page, and contact form on desktop and mobile.
- Verify there is one header, one main landmark, one footer, and one `<h1>` per page.

## Sitemap maintenance

Non-blog routes use `SITE_LAST_UPDATED` from `src/config/constants.ts`. Blog articles use `modifiedDate` or `publishedDate` from `src/data/blog.ts`. Update those values only for meaningful content changes.
