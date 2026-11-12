// Shared search engine: one static index for both site search interfaces.
// Pure client-side search, no external calls or tracking. Built by Cloudflare Pages.
const INDEX_URL = '/search-index.json';
let pendingIndex = null;

export function normalizeText(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}

export async function loadSearchIndex() {
  if (!pendingIndex) {
    pendingIndex = fetch(INDEX_URL, { cache: 'default' })
      .then(response => {
        if (!response.ok) throw new Error('Search index HTTP ' + response.status);
        return response.json();
      })
      .then(items => {
        if (!Array.isArray(items) || !items.some(x => x.lang === 'en') || !items.some(x => x.lang === 'es')) {
          throw new Error('Search index missing languages');
        }
        return items;
      })
      .catch(error => { pendingIndex = null; throw error; });
  }
  return pendingIndex;
}

function snippet(item, tokens) {
  const summary = String(item.summary || '');
  const content = String(item.content || '');
  let text = summary;
  let pos = -1;
  const tryFind = s => {
    const normalized = normalizeText(s);
    for (const word of tokens) {
      const index = normalized.indexOf(word);
      if (index !== -1 && (pos === -1 || index < pos)) pos = index;
    }
  };
  tryFind(summary);
  if (pos === -1) {
    text = content || summary;
    tryFind(text);
  }
  if (pos === -1) return (summary || content).slice(0, 230);
  const start = Math.max(0, pos - 75);
  const end = Math.min(text.length, Math.max(pos + 120, start + 230));
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
}

export function searchCatalog(items, query, language) {
  const lang = language === 'es' ? 'es' : 'en';
  const phrase = normalizeText(String(query || '').slice(0, 180));
  const terms = [...new Set(phrase.split(/\s+/).filter(x => x.length > 0))].slice(0, 12);
  if (!terms.length) return [];
  const matches = [];
  for (const item of items) {
    if (item.lang !== lang) continue;
    const title = normalizeText(item.title);
    const keywords = normalizeText(item.keywords);
    const summary = normalizeText(item.summary);
    const headings = normalizeText(item.headings);
    const body = normalizeText(item.content);
    const category = normalizeText(item.category);
    const all = title + ' ' + keywords + ' ' + summary + ' ' + headings + ' ' + body + ' ' + category;
    if (!terms.every(word => all.includes(word))) continue;
    let score = title.includes(phrase) ? 75 : 0;
    if (keywords.includes(phrase)) score += 35;
    for (const word of terms) {
      if (title.includes(word)) score += 22;
      if (keywords.includes(word)) score += 15;
      if (summary.includes(word)) score += 10;
      if (headings.includes(word)) score += 7;
      if (category.includes(word)) score += 3;
      if (body.includes(word)) score += 2;
    }
    if (item.type === 'article') score += 2;
    matches.push({ item, score, excerpt: snippet(item, terms) });
  }
  return matches.sort((a, b) => b.score - a.score || String(a.item.title).localeCompare(String(b.item.title), lang));
}
