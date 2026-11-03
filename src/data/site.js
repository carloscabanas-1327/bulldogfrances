// Central site settings.
export const SITE = 'https://www.bulldogfrances.com';
// Keep false while the site is provisional. Set to true when the domain is
// connected and the content is approved: every page then becomes indexable.
export const INDEXABLE = true;
// The root (/) is a bilingual language gateway; each edition has its own home.
export const homeUrl = lang => (lang === 'es' ? '/es/' : '/en/');
export const DEFAULT_OG_IMAGE = '/og-default.jpg';
