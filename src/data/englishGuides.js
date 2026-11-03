// Additional English-edition guides (written for the English audience, paired with
// Spanish guides where one exists). Each lives in editorial/en/guides/<slug>/ with
// ARTICLE.html and meta.json: {title, seoTitle, description, category, primaryKeyword,
// secondaryKeywords, keywordEs, lastReviewed, status, faq:[{q,a}], related, esUrl}.
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';

const root = join(process.cwd(), 'editorial/en/guides');

export const enGuides = existsSync(root)
  ? readdirSync(root, {withFileTypes:true})
      .filter(d => d.isDirectory() && existsSync(join(root, d.name, 'meta.json')))
      .map(d => ({slug:d.name, ...JSON.parse(readFileSync(join(root, d.name, 'meta.json'), 'utf8'))}))
      .sort((a, b) => a.title.localeCompare(b.title, 'en'))
  : [];

export const enGuideUrl = g => '/en/' + g.category + '/' + g.slug + '/';
export const enGuideHtml = g => readFileSync(join(root, g.slug, 'ARTICLE.html'), 'utf8');
