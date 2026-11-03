// Central site settings.
export const SITE = 'https://www.bulldogfrances.com';
// Keep false while the site is provisional. Set to true when the domain is
// connected and the content is approved: every page then becomes indexable.
export const INDEXABLE = false;
// English is the primary edition and lives at the root; Spanish is secondary.
export const homeUrl = lang => (lang === 'es' ? '/es/' : '/');
export const DEFAULT_OG_IMAGE = '/og-default.jpg';
