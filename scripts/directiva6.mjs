// Directive 6 (README_FIRST v1.02): how every page looks in Google. Runs after
// scripts/social-images.mjs on the built site (see package.json "build"):
//   1. <link rel="image_src"> = the page's og:image (1200x630, same image as when shared);
//   2. JSON-LD: WebPage.primaryImageOfPage = that same og:image, and every Article gets
//      three 1200px crops of its main image (16:9, 4:3, 1:1) as `image`;
//   3. main image (first <img> after the H1, before the first H2) loads eagerly with
//      fetchpriority="high";
//   4. data-nosnippet on what is not content (header/menu, footer, breadcrumbs).
// Fails the build if a page has no og:image or an article image can't be cropped.
import { readFile, writeFile, readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import sharp from 'sharp';

const SITE = 'https://bulldogfrances.com';
const OUT = 'images/share';
const CROPS = { '16x9': [1200, 675], '4x3': [1200, 900], '1x1': [1200, 1200] };
const dist = join(process.cwd(), process.argv[2] || 'dist');

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'go') yield* htmlFiles(p); }
    else if (e.name.endsWith('.html')) yield p;
  }
}
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const metaContent = (html, prop) => (html.match(new RegExp(`<meta (?:property|name)="${prop}" content="([^"]*)"`)) || [])[1];
const isArticle = n => /^(Article|BlogPosting|NewsArticle)$/.test([].concat(n['@type'])[0] || '');
const isWebPage = n => /^(WebPage|CollectionPage|AboutPage|ContactPage|SearchResultsPage|FAQPage)$/.test([].concat(n['@type'])[0] || '');

const made = new Map();
async function crops(src) {
  if (made.has(src)) return made.get(src);
  if (!src.startsWith(SITE + '/')) throw new Error(`image not on ${SITE}: ${src}`);
  const path = decodeURIComponent(src.slice(SITE.length).split(/[?#]/)[0]);
  const file = join(dist, path);
  await stat(file);
  const base = path.replace(/^\//, '').replace(/\.[a-z0-9]+$/i, '').replace(/[^a-zA-Z0-9-]+/g, '-');
  const urls = [];
  for (const [tag, [w, h]] of Object.entries(CROPS)) {
    const name = `${base}-${tag}.jpg`;
    await sharp(file).resize(w, h, { fit: 'cover', position: sharp.strategy.attention })
      .jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(join(dist, OUT, name));
    urls.push(`${SITE}/${OUT}/${name}`);
  }
  made.set(src, urls);
  return urls;
}

const errors = [];
let pages = 0, articles = 0, heroes = 0;
const lastmod = new Map(); // canonical URL -> dateModified (sitemap lastmod = dateModified, D6 point 11)
await mkdir(join(dist, OUT), { recursive: true });
for await (const file of htmlFiles(dist)) {
  const page = '/' + relative(dist, file).split(sep).join('/');
  let html = await readFile(file, 'utf8');
  if (!/<head[\s>]/i.test(html)) continue;
  const og = metaContent(html, 'og:image');
  if (!og) { errors.push(`${page}: no og:image`); continue; }
  pages++;

  // 1. image_src next to og:image
  html = html.replace(/<link rel="image_src"[^>]*>/g, '');
  html = html.replace(/(<meta property="og:image" content="[^"]*">)/, `$1<link rel="image_src" href="${attr(og)}">`);

  // 2. JSON-LD images
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const m of scripts) {
    let data;
    try { data = JSON.parse(m[1]); } catch { errors.push(`${page}: invalid JSON-LD`); continue; }
    const graph = data['@graph'] || [data];
    for (const n of graph) {
      if (isWebPage(n) && n.primaryImageOfPage) n.primaryImageOfPage = { '@type': 'ImageObject', url: og, width: 1200, height: 630 };
      if (isArticle(n) && n.url && (n.dateModified || n.datePublished)) lastmod.set(n.url, n.dateModified || n.datePublished);
      if (isArticle(n)) {
        const main = [].concat(n.image || [])[0];
        const src = typeof main === 'string' ? main : main?.url;
        if (!src) { errors.push(`${page}: Article without image`); continue; }
        try { n.image = await crops(src); articles++; } catch (e) { errors.push(`${page}: ${e.message}`); }
      }
    }
    const json = JSON.stringify(data).replace(/</g, '\\u003c');
    html = html.replace(m[0], `<script type="application/ld+json">${json}</script>`);
  }

  // 3. main image: eager + fetchpriority=high
  const h1 = html.search(/<\/h1>/i);
  if (h1 !== -1) {
    const rest = html.slice(h1);
    // first real photo: skip SVG icons/flags and images narrower than 300px
    const img = [...rest.matchAll(/<img\b[^>]*>/gi)].find(m => !/\.svg["?#]/i.test(m[0]) && !(+((m[0].match(/\swidth="(\d+)"/) || [])[1] || 999) < 300));
    const h2 = rest.search(/<h2[\s>]/i);
    if (img && (h2 === -1 || img.index < h2)) {
      let tag = img[0].replace(/\s+loading="lazy"/i, '').replace(/\s+fetchpriority="[^"]*"/i, '');
      tag = tag.replace(/^<img\b/i, '<img fetchpriority="high"');
      html = html.slice(0, h1) + rest.slice(0, img.index) + tag + rest.slice(img.index + img[0].length);
      heroes++;
    }
  }

  // 4. data-nosnippet on non-content
  html = html.replace(/<(header|footer)\b(?![^>]*data-nosnippet)/g, '<$1 data-nosnippet');
  html = html.replace(/<(p|nav|div|ol)\b((?![^>]*data-nosnippet)[^>]*class="[^"]*\b(?:crumbs|breadcrumbs?|eyebrow)\b[^"]*")/g, '<$1 data-nosnippet$2');

  await writeFile(file, html);
}
// sitemap.xml: <lastmod> = the article's dateModified
try {
  const sm = join(dist, 'sitemap.xml');
  let xml = await readFile(sm, 'utf8');
  let n = 0;
  xml = xml.replace(/<url><loc>([^<]+)<\/loc>/g, (m, loc) => { const d = lastmod.get(loc); if (!d) return m; n++; return `${m}<lastmod>${d}</lastmod>`; });
  await writeFile(sm, xml);
  console.log(`[directiva6] sitemap: lastmod on ${n} article URLs`);
} catch (e) { errors.push('sitemap.xml: ' + e.message); }
if (errors.length) { console.error(`[directiva6] failed (${errors.length}):\n  ` + errors.join('\n  ')); process.exit(1); }
console.log(`[directiva6] OK: ${pages} pages, ${articles} articles with 16:9/4:3/1:1 images (${made.size} images, ${made.size * 3} crops), ${heroes} main images with fetchpriority=high`);
