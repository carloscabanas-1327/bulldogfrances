import { SITE } from '../data/site.js';
import { categories, guides, guideUrl, nutritionArticles } from '../data/frenchBulldogGuides.js';
import { esGuides, esGuideUrl } from '../data/spanishGuides.js';
import { enGuides, enGuideUrl } from '../data/englishGuides.js';

// Match HTML hreflang: en-US / es, reciprocal and self-referential.
// x-default points only to the actual bilingual language selector at the root.
const pages = ['about','contact','directory','affiliate-disclosure','privacy','terms','editorial-policy','history','news-around-the-world','store'];
export function GET() {
  const entries = [];
  const pair = (en, es, fallback = null) => {
    entries.push({loc:en,alt:{'en-US':en,es},xd:fallback});
    entries.push({loc:es,alt:{'en-US':en,es},xd:fallback});
  };
  entries.push({loc:'/',alt:{'en-US':'/en/',es:'/es/'},xd:'/'});
  pair('/en/','/es/','/');
  categories.forEach(c => pair('/en/'+c.slug+'/','/es/'+c.slug+'/'));
  pages.forEach(p => pair('/en/'+p+'/','/es/'+p+'/'));
  nutritionArticles.forEach(a => pair('/en/nutrition/'+a.slug+'/','/es/nutrition/'+a.slug+'/'));

  const enPages = [...guides.map(guideUrl), ...enGuides.map(enGuideUrl)];
  const esPages = esGuides.map(esGuideUrl);
  const esSet = new Set(esPages);
  const enSet = new Set(enPages);
  const counterparts = new Map();
  esGuides.forEach(g => { if (g.enUrl && enSet.has(g.enUrl)) counterparts.set(g.enUrl, esGuideUrl(g)); });
  enGuides.forEach(g => { if (g.esUrl && esSet.has(g.esUrl)) counterparts.set(enGuideUrl(g), g.esUrl); });
  const pairedEs = new Set();
  enPages.forEach(u => {
    const es = counterparts.get(u);
    if (es && esSet.has(es)) { pair(u,es); pairedEs.add(es); }
    else entries.push({loc:u});
  });
  esPages.forEach(u => { if (!pairedEs.has(u)) entries.push({loc:u}); });

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    entries.map(e => '<url><loc>'+SITE+e.loc+'</loc>'+
      (e.alt ? Object.entries(e.alt).map(([l,u]) =>
        '<xhtml:link rel="alternate" hreflang="'+l+'" href="'+SITE+u+'"/>').join('') : '')+
      (e.xd ? '<xhtml:link rel="alternate" hreflang="x-default" href="'+SITE+e.xd+'"/>' : '')+
      '</url>').join('\n')+'\n</urlset>\n';
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
