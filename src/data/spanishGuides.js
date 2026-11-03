// Spanish-edition guides written for the Spanish audience (not translations).
// Each guide lives in editorial/es/guias/<slug>/ with ARTICLE.html and meta.json:
// {title, seoTitle, description, category, primaryKeyword, secondaryKeywords,
//  keywordEn, lastReviewed, status, faq:[{q,a}], oldUrls:[...]}
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';

export const ES_GUIDES_DIR = 'editorial/es/guias';
const root = join(process.cwd(), ES_GUIDES_DIR);

export const esCategoryLabels = {
  health:'Salud', nutrition:'Alimentación', training:'Educación y conducta', puppies:'Cachorros',
  'breed-characteristics':'Características de la raza', genetics:'Genética y reproducción', 'daily-care':'Cuidados cotidianos'
};

export const esGuides = existsSync(root)
  ? readdirSync(root, {withFileTypes:true})
      .filter(d => d.isDirectory() && existsSync(join(root, d.name, 'meta.json')))
      .map(d => ({slug:d.name, ...JSON.parse(readFileSync(join(root, d.name, 'meta.json'), 'utf8'))}))
      .sort((a, b) => a.title.localeCompare(b.title, 'es'))
  : [];

export const esGuideUrl = g => '/es/' + g.category + '/' + g.slug + '/';
export const esGuideHtml = g => readFileSync(join(root, g.slug, 'ARTICLE.html'), 'utf8');
