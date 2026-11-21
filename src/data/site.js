// Central site settings.
export const SITE = 'https://bulldogfrances.com';
// Keep false while the site is provisional. Set to true when the domain is
// connected and the content is approved: every page then becomes indexable.
export const INDEXABLE = true;
// The root (/) is a bilingual language gateway; each edition has its own home.
export const homeUrl = lang => (lang === 'es' ? '/es/' : '/en/');
// General share images (used only when a page has no image of its own).
// '/og-default.jpg' is the bilingual cover, for the root language gateway only.
export const DEFAULT_OG_IMAGE = '/og-default.jpg';
export const DEFAULT_OG_IMAGE_BY_LANG = { en: '/images/social/og-default-en.jpg', es: '/images/social/og-default-es.jpg' };
export const DEFAULT_OG_ALT = {
  en: 'French Bulldog lying on the floor, looking at the camera: BulldogFrances.com',
  es: 'Bulldog francés tumbado en el suelo mirando a cámara: BulldogFrances.com',
};
// First public, indexable date of every current article (launch, 2026-11-03).
// Used as schema.org datePublished; a new article should set its own meta.datePublished.
export const LAUNCH_DATE = '2026-11-03';
// Directive 6 (dates): one visible "Published" date (+ "Updated" only after a real
// content change), identical to schema.org datePublished/dateModified, ISO 8601 with
// the site's time zone (Argentina, UTC-3).
export const isoDate = d => (!d ? null : d.includes('T') ? d : d + 'T00:00:00-03:00');
export const dateLabel = (d, lang) => new Date(d.slice(0, 10) + 'T12:00:00Z')
  .toLocaleDateString(lang === 'es' ? 'es' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
