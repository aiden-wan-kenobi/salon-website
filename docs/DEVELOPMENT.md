# Development Guide

## Architecture

The site is a static Astro 7 project written in strict TypeScript. Pages compose server-rendered `.astro` components and component-scoped CSS; there are no hydrated UI-framework components.

The root `Layout.astro` owns the document metadata, header, main landmark, and footer. Route pages should focus on page-specific content and data composition.

Shared data boundaries:

- `src/config/constants.ts` — business details, navigation, and the site edit date
- `src/data/blog.ts` — blog metadata and safe post lookup
- `src/data/team.ts` — team display and structured-data metadata
- `src/data/faqs.ts` — service FAQ content
- `src/data/reviews.ts` — review content

## Local development

Requirements:

- Node.js 24 LTS (see `.nvmrc`)
- pnpm 10

```bash
pnpm install
pnpm dev
```

Before submitting changes:

```bash
pnpm lint
pnpm build
```

## Adding content

### Pages

Create route files in `src/pages/` and wrap content in `Layout.astro`. Do not add `Header` or `Footer` directly; the root layout supplies them.

Each indexable page needs a unique title, description, one `<h1>`, and logical heading order. Add breadcrumbs and page-specific structured data where useful.

### Blog posts

1. Add the post metadata to `src/data/blog.ts`.
2. Create the matching route in `src/pages/blog/`.
3. Read metadata with `getBlogPost(slug)`.
4. Pass it to the shared layout with `<BlogPostLayout {...post}>`.
5. Set `modifiedDate` when meaningfully revising an existing article.

### Site-wide updates

Update `SITE_LAST_UPDATED` in `src/config/constants.ts` after a meaningful change to shared or non-blog content. This value feeds sitemap `lastmod` entries.

### Components and styling

- Prefer pure `.astro` components with typed props.
- Keep route orchestration in pages and shared presentation in components.
- Use the existing component-scoped CSS and variables from `Layout.astro`.
- Avoid client hydration unless interaction cannot be handled with semantic HTML.
- Import content images from `src/assets/` so Astro can optimize them.

## Contact form

The contact form posts directly to Formspree. Its form ID lives in `BUSINESS_INFO`; no local email service or server endpoint is used.

## Astro 7 notes

- The Rust compiler requires valid, fully closed markup.
- Astro 7 uses JSX-style whitespace compression, so intentional spaces between adjacent inline elements must be explicit.
- `src/fetch.ts` is reserved for advanced routing.
- The project uses no Markdown plugins, container renderers, experimental flags, or custom Vite plugins.
