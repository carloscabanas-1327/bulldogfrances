# Nutrition articles (sourced rewrite, 2026-11-03)

Full EN and ES versions of the 4 nutrition articles that currently live inline in
`src/pages/[lang]/nutrition/[article]/index.astro`. Each folder has
`ARTICLE.en.html`, `ARTICLE.es.html` and `meta.json` (title/description per language).

Not wired into the page yet, to avoid conflicting with the template changes in PR #2.
After PR #2 merges, the nutrition template should render these files instead of
the inline `enSections`/`esSections` arrays. Sources are logged in
`../importados-mypetsfamily/french-bulldog-owner-questions-20261028/SOURCES_VERIFIED.md`.
