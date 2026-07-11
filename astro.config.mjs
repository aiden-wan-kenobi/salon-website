import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { SITE_LAST_UPDATED } from './src/config/constants';
import { blogPosts } from './src/data/blog';

const blogLastModified = new Map(
  blogPosts.map((post) => [
    `/blog/${post.slug}`,
    post.modifiedDate ?? post.publishedDate,
  ]),
);
const latestBlogDate = blogPosts.reduce(
  (latest, post) =>
    (post.modifiedDate ?? post.publishedDate) > latest
      ? (post.modifiedDate ?? post.publishedDate)
      : latest,
  '',
);

function toSitemapDate(date) {
  return new Date(`${date}T00:00:00.000Z`).toISOString();
}

export default defineConfig({
  site: 'https://glowsalonwestclay.com/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '');
        const lastModified =
          blogLastModified.get(path) ??
          (path === '/blog' ? latestBlogDate : SITE_LAST_UPDATED);

        if (path === '' || path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/services/hair-gallery') || path.startsWith('/services/bridal-gallery')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/services')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/blog/') && path !== '/blog') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path === '/blog' || path === '/team' || path === '/contact') {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        item.lastmod = toSitemapDate(lastModified);

        return item;
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
