import { SITE, INDEXABLE } from '../data/site.js';
// While provisional, crawlers may read pages but every page carries noindex.
export function GET() {
  const body = INDEXABLE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`
    : `User-agent: *\nAllow: /\n\n# Provisional site: pages are marked noindex until launch.\nSitemap: ${SITE}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
