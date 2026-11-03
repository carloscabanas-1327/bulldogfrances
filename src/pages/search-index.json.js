import { categories, guides, guideTitle, guideUrl, nutritionArticles } from '../data/frenchBulldogGuides.js';
// Index for the site-wide search button (public/search.js).
const esCats = { health:'Salud', nutrition:'Alimentación', training:'Educación y conducta', puppies:'Cachorros', 'breed-characteristics':'Características de la raza', genetics:'Genética y reproducción', 'daily-care':'Cuidados cotidianos' };
export function GET() {
  const items = [];
  categories.forEach(c => {
    items.push({ lang: 'en', title: c.label, category: 'Category', url: '/en/' + c.slug + '/' });
    items.push({ lang: 'es', title: esCats[c.slug] || c.label, category: 'Categoría', url: '/es/' + c.slug + '/' });
  });
  nutritionArticles.forEach(a => {
    items.push({ lang: 'en', title: a.en, category: 'Nutrition', summary: a.descEn, url: '/en/nutrition/' + a.slug + '/' });
    items.push({ lang: 'es', title: a.es, category: 'Alimentación', summary: a.descEs, url: '/es/nutrition/' + a.slug + '/' });
  });
  guides.forEach(g => items.push({ lang: 'en', title: guideTitle(g.folder), category: (categories.find(c => c.slug === g.category) || {}).label, keywords: g.seed_keyword_original || '', url: guideUrl(g) }));
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
