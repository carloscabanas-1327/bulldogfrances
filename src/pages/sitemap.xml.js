import { SITE } from '../data/site.js';
import { categories, guides, guideUrl, nutritionArticles } from '../data/frenchBulldogGuides.js';
import { esGuides, esGuideUrl } from '../data/spanishGuides.js';
import { enGuides, enGuideUrl } from '../data/englishGuides.js';
// Sitemap with hreflang pairs where both language versions exist.
const pages = ['about','contact','directory','affiliate-disclosure','privacy','terms','editorial-policy','history','news-around-the-world','store'];
export function GET() {
  const entries = [];
  const pair = (en, es) => { entries.push({ loc: en, alt: { en, es } }); entries.push({ loc: es, alt: { en, es } }); };
  // Root is the bilingual language gateway (x-default); each edition has its own home.
  entries.push({ loc: '/', alt: { en: '/en/', es: '/es/' }, xd: '/' });
  pair('/en/', '/es/');
  categories.forEach(c => pair('/en/' + c.slug + '/', '/es/' + c.slug + '/'));
  pages.forEach(p => pair('/en/' + p + '/', '/es/' + p + '/'));
  nutritionArticles.forEach(a => pair('/en/nutrition/' + a.slug + '/', '/es/nutrition/' + a.slug + '/'));
  // Guides: pair EN and ES versions when both exist (enUrl in ES meta or esUrl in EN meta).
  const enPages = [...guides.map(g => guideUrl(g)), ...enGuides.map(g => enGuideUrl(g))];
  const esPages = esGuides.map(g => esGuideUrl(g));
  const pairs = new Map();
  esGuides.forEach(g => { if (g.enUrl) pairs.set(g.enUrl, esGuideUrl(g)); });
  enGuides.forEach(g => { if (g.esUrl) pairs.set(enGuideUrl(g), g.esUrl); });
  const pairedEs = new Set(pairs.values());
  enPages.forEach(u => pairs.has(u) ? pair(u, pairs.get(u)) : entries.push({ loc: u }));
  esPages.forEach(u => { if (!pairedEs.has(u)) entries.push({ loc: u }); });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.map(e => `<url><loc>${SITE}${e.loc}</loc>` + (e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : '') + (e.alt ? Object.entries(e.alt).map(([l, u]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${u}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${e.xd || (e.loc === '/en/' || e.loc === '/es/' ? '/' : e.alt.en)}"/>` : '') + `</url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
