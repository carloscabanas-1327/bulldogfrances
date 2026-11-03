import { SITE } from '../data/site.js';
import { categories, guides, guideUrl, nutritionArticles } from '../data/frenchBulldogGuides.js';
import { esGuides, esGuideUrl } from '../data/spanishGuides.js';
// Sitemap with hreflang pairs where both language versions exist.
const pages = ['about','contact','directory','affiliate-disclosure','privacy','terms','editorial-policy','history','news-around-the-world','store'];
export function GET() {
  const entries = [];
  const pair = (en, es) => { entries.push({ loc: en, alt: { en, es } }); entries.push({ loc: es, alt: { en, es } }); };
  pair('/', '/es/');
  categories.forEach(c => pair('/en/' + c.slug + '/', '/es/' + c.slug + '/'));
  pages.forEach(p => pair('/en/' + p + '/', '/es/' + p + '/'));
  nutritionArticles.forEach(a => pair('/en/nutrition/' + a.slug + '/', '/es/nutrition/' + a.slug + '/'));
  guides.forEach(g => entries.push({ loc: guideUrl(g) }));
  esGuides.forEach(g => g.enUrl ? pair(g.enUrl, esGuideUrl(g)) : entries.push({ loc: esGuideUrl(g), lastmod: g.lastReviewed }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.map(e => `<url><loc>${SITE}${e.loc}</loc>` + (e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : '') + (e.alt ? Object.entries(e.alt).map(([l, u]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${u}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${e.alt.en}"/>` : '') + `</url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
