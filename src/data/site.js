// Central site settings.
export const SITE = 'https://www.bulldogfrances.com';
// Keep false while the site is provisional. Set to true when the domain is
// connected and the content is approved: every page then becomes indexable.
export const INDEXABLE = true;
// The root (/) is a bilingual language gateway; each edition has its own home.
export const homeUrl = lang => (lang === 'es' ? '/es/' : '/en/');
export const DEFAULT_OG_IMAGE = '/og-default.jpg';
// First public, indexable date of every current article (launch, 2026-11-03).
// Used as schema.org datePublished; a new article should set its own meta.datePublished.
export const LAUNCH_DATE = '2026-11-03';
