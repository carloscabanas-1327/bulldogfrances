// Astro integration: share previews (WhatsApp, Facebook, X, LinkedIn, Telegram...).
//
// Permanent rule (Carlos, 2026-11-20): every page, when shared, must show the
// article's own image; only a page with no image of its own uses the general one.
//
// After the build it:
//   1. reads each page's og:image (set by src/components/Seo.astro),
//   2. makes a 1200x630 JPEG copy of that image in /images/share/ (WebP and very
//      large files are not shown by every app, WhatsApp above all),
//   3. points og:image / twitter:image at that copy, with width, height, type and alt,
//   4. FAILS the build if a page has no og:image, if the image file does not exist,
//      or if an article (og:type=article) falls back to the general image.
// /go/ belongs to the ANUNCIANTES system and is never read or written.
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { SITE } from '../src/data/site.js';

const W = 1200, H = 630;
const MAX_BYTES = 300 * 1024; // WhatsApp drops larger preview images
const OUT_DIR = 'images/share';
const GENERAL = ['/og-default.jpg', '/images/social/og-default-en.jpg', '/images/social/og-default-es.jpg'];
const OWN_ORIGINS = [SITE, 'https://bulldogfrances.com', 'https://www.bulldogfrances.com'];

async function htmlFiles(dir, root = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    const rel = relative(root, p).split(sep).join('/');
    if (rel === 'go' || rel.startsWith('go/')) continue;
    if (e.isDirectory()) out.push(...await htmlFiles(p, root));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const unattr = s => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const meta = (html, key) => {
  const m = html.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"\\s*/?>`));
  return m ? unattr(m[1]) : null;
};

async function makeJpeg(src, dest) {
  // Wide images (heroes, 16:9 infographics) lose only a thin top/bottom strip, so they
  // are cropped from the centre (keeps titles). Square and portrait photos would lose
  // the dog's face in a 1.9:1 crop, so the WHOLE photo is shown, centred on a blurred,
  // enlarged copy of itself.
  const base = await sharp(src).rotate().flatten({ background: '#ffffff' }).toBuffer();
  const { width = W, height = H } = await sharp(base).metadata();
  let canvas;
  if (width / height >= 1.5) {
    canvas = await sharp(base).resize(W, H, { fit: 'cover', position: 'centre' }).toBuffer();
  } else {
    const bg = await sharp(base).resize(W, H, { fit: 'cover' }).blur(30).modulate({ brightness: 0.85 }).toBuffer();
    const fg = await sharp(base).resize(W, H, { fit: 'inside' }).toBuffer();
    canvas = await sharp(bg).composite([{ input: fg, gravity: 'centre' }]).toBuffer();
  }
  for (const quality of [84, 76, 68, 60]) {
    const buf = await sharp(canvas).jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer();
    if (buf.length <= MAX_BYTES || quality === 60) { await writeFile(dest, buf); return buf.length; }
  }
}

export default function socialImages() {
  return {
    name: 'bulldogfrances-social-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        await mkdir(join(dist, OUT_DIR), { recursive: true });
        const made = new Map();
        const errors = [];
        let own = 0, general = 0;
        for (const file of await htmlFiles(dist)) {
          const page = '/' + relative(dist, file).split(sep).join('/');
          let html = await readFile(file, 'utf8');
          if (!/<head[\s>]/i.test(html)) continue; // redirect stubs etc.
          const og = meta(html, 'og:image');
          if (!og) { errors.push(`${page}: no og:image`); continue; }
          const origin = OWN_ORIGINS.find(o => og.startsWith(o + '/'));
          if (!origin) { errors.push(`${page}: og:image is not on ${SITE}: ${og}`); continue; }
          const srcPath = og.slice(origin.length).split(/[?#]/)[0];
          const isGeneral = GENERAL.includes(srcPath);
          if (isGeneral && meta(html, 'og:type') === 'article') {
            errors.push(`${page}: article without its own image (uses the general one)`);
          }
          const srcFile = join(dist, decodeURIComponent(srcPath));
          try { await stat(srcFile); } catch { errors.push(`${page}: og:image file missing: ${srcPath}`); continue; }
          let shareUrl = made.get(srcPath);
          if (!shareUrl) {
            const name = srcPath.replace(/^\//, '').replace(/\.[a-z0-9]+$/i, '').replace(/[^a-zA-Z0-9-]+/g, '-') + '.jpg';
            const bytes = await makeJpeg(srcFile, join(dist, OUT_DIR, name));
            if (bytes > MAX_BYTES) logger.warn(`${name} is ${Math.round(bytes / 1024)} KB (> 300 KB)`);
            shareUrl = `${SITE}/${OUT_DIR}/${name}`;
            made.set(srcPath, shareUrl);
          }
          isGeneral ? general++ : own++;
          const alt = meta(html, 'og:image:alt') || meta(html, 'og:title') || 'BulldogFrances.com';
          // Drop the old image tags and write one consistent block after og:url.
          html = html.replace(/<meta (?:property|name)="(?:og:image(?::[a-z_]+)?|twitter:image(?::alt)?)" content="[^"]*"\s*\/?>/g, '');
          const block = `<meta property="og:image" content="${attr(shareUrl)}">` +
            `<meta property="og:image:secure_url" content="${attr(shareUrl)}">` +
            `<meta property="og:image:type" content="image/jpeg">` +
            `<meta property="og:image:width" content="${W}">` +
            `<meta property="og:image:height" content="${H}">` +
            `<meta property="og:image:alt" content="${attr(alt)}">` +
            `<meta name="twitter:image" content="${attr(shareUrl)}">` +
            `<meta name="twitter:image:alt" content="${attr(alt)}">`;
          const at = html.match(/<meta property="og:url" content="[^"]*"\s*\/?>/);
          if (!at) { errors.push(`${page}: no og:url to anchor the image tags`); continue; }
          html = html.replace(at[0], at[0] + block);
          if (!/name="twitter:card" content="summary_large_image"/.test(html)) errors.push(`${page}: twitter:card is not summary_large_image`);
          await writeFile(file, html);
        }
        if (errors.length) {
          throw new Error(`Share image check failed (${errors.length}):\n  ` + errors.join('\n  '));
        }
        logger.info(`share images OK: ${own} pages with their own image, ${general} with the general one, ${made.size} JPEGs`);
      },
    },
  };
}
