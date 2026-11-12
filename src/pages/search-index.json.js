import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { categories, guides, guideTitle, guideUrl, guideHtmlPath, guideMeta, guideSummary, nutritionArticles } from '../data/frenchBulldogGuides.js';
import { esGuides, esGuideUrl, esGuideHtml, esCategoryLabels } from '../data/spanishGuides.js';
import { enGuides, enGuideUrl, enGuideHtml } from '../data/englishGuides.js';

// Built by Astro on Cloudflare Pages. Search covers actual article body content,
// section headings, metadata and FAQ (not just manually maintained titles).
const root = process.cwd();
const entities = {
  amp:'&', quot:'"', apos:"'", nbsp:' ', lt:'<', gt:'>',
  ndash:'–', mdash:'—', rsquo:'’', lsquo:'‘', ldquo:'“', rdquo:'”',
  aacute:'á', eacute:'é', iacute:'í', oacute:'ó', uacute:'ú', ntilde:'ñ',
  Aacute:'Á', Eacute:'É', Iacute:'Í', Oacute:'Ó', Uacute:'Ú', Ntilde:'Ñ'
};
function decodeEntities(text) {
  return String(text || '')
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (whole, code) => {
      const n = /^x/i.test(code) ? parseInt(code.slice(1), 16) : parseInt(code, 10);
      return Number.isInteger(n) && n >= 0 && n <= 0x10ffff ? String.fromCodePoint(n) : whole;
    })
    .replace(/&([a-z][a-z0-9]+);/gi, (whole, name) => entities[name] || whole);
}
function cleanText(html) {
  return decodeEntities(String(html || '')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<ol\b[^>]*class=["'][^"']*\breferences\b[^"']*["'][^>]*>[\s\S]*?<\/ol>/gi, ' ')
    .replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ').trim();
}
function headings(html) {
  return [...String(html || '').matchAll(/<h[2-3]\b[^>]*>([\s\S]*?)<\/h[2-3]>/gi)]
    .map(match => cleanText(match[1]))
    .filter(x => !/^(sources|sources and references|fuentes|fuentes y referencias)$/i.test(x))
    .join(' ');
}
function firstParagraph(html) {
  const m = String(html || '').match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
  return m ? cleanText(m[1]).slice(0, 250) : '';
}
function article({lang, url, title, category, summary, keywords, html, faq}) {
  const content = cleanText(html) + ' ' + (faq || []).map(f => f.q + ' ' + f.a).join(' ');
  return {
    lang, type:'article', url, title, category, summary: summary || firstParagraph(html),
    keywords: (keywords || []).filter(Boolean).join(' '),
    headings: headings(html),
    content: content.trim()
  };
}
function buildIndex() {
  const items = [];
  for (const c of categories) {
    items.push({lang:'en',type:'category',url:'/en/'+c.slug+'/',title:c.label,
      category:'Category',summary:c.description,keywords:'',headings:'',content:''});
    items.push({lang:'es',type:'category',url:'/es/'+c.slug+'/',title:esCategoryLabels[c.slug]||c.label,
      category:'Categoría',summary:'Guías de '+(esCategoryLabels[c.slug]||c.label).toLowerCase()+' del bulldog francés.',
      keywords:'',headings:'',content:''});
  }
  for (const g of guides) {
    const meta = guideMeta(g.folder);
    const html = readFileSync(join(root, guideHtmlPath(g.folder)), 'utf8');
    items.push(article({
      lang:'en',url:guideUrl(g),title:guideTitle(g.folder),category:categories.find(c => c.slug===g.category)?.label||g.category,
      summary:meta.description||guideSummary(html),
      keywords:[meta.primaryKeyword,...(meta.secondaryKeywords||[]),g.seed_keyword_original],
      html,faq:meta.faq
    }));
  }
  for (const g of enGuides) {
    items.push(article({
      lang:'en',url:enGuideUrl(g),title:g.title,category:categories.find(c=>c.slug===g.category)?.label||g.category,
      summary:g.description,keywords:[g.primaryKeyword,...(g.secondaryKeywords||[])],
      html:enGuideHtml(g),faq:g.faq
    }));
  }
  for (const g of esGuides) {
    items.push(article({
      lang:'es',url:esGuideUrl(g),title:g.title,category:esCategoryLabels[g.category]||g.category,
      summary:g.description,keywords:[g.primaryKeyword,...(g.secondaryKeywords||[])],
      html:esGuideHtml(g),faq:g.faq
    }));
  }
  for (const a of nutritionArticles) {
    const folder = join(root, 'editorial/nutrition', a.slug);
    const metaFile = join(folder, 'meta.json');
    const meta = existsSync(metaFile) ? JSON.parse(readFileSync(metaFile, 'utf8')) : {};
    for (const lang of ['en','es']) {
      const file = join(folder, 'ARTICLE.'+lang+'.html');
      const html = existsSync(file) ? readFileSync(file,'utf8') : '';
      const m = meta[lang] || {};
      items.push(article({
        lang,url:'/'+lang+'/nutrition/'+a.slug+'/',
        title:m.title||(lang==='en'?a.en:a.es),
        category:lang==='en'?'Nutrition':'Alimentación',
        summary:m.description||(lang==='en'?a.descEn:a.descEs),
        keywords:[m.primaryKeyword,...(m.secondaryKeywords||[])],
        html,faq:m.faq
      }));
    }
  }
  const seen = new Set();
  for (const item of items) {
    if (seen.has(item.url)) throw new Error('Duplicate search URL: '+item.url);
    seen.add(item.url);
  }
  for (const lang of ['en','es']) {
    const count = items.filter(x => x.lang===lang && x.type==='article').length;
    if (count < 56) throw new Error('Incomplete '+lang+' search index: '+count+' articles (minimum 56)');
  }
  return items;
}
export function GET() {
  const items = buildIndex();
  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type':'application/json; charset=utf-8',
      'Cache-Control':'public, max-age=300',
      'X-Robots-Tag':'noindex'
    }
  });
}
