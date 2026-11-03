# Writing spec for bulldogfrances.com guides (EN + ES)

Read this whole file before writing. Repo root: /home/claude/bulldogfrances. Do NOT run git, do NOT touch src/, public/ or files outside the folders you are assigned (plus your own ledger file).

## Audience and goals
- English edition targets US owners (primary market). Spanish edition: neutral Spanish for Latin America, US Hispanics and Spain. Use "tú" (Elige, Revisa, Lleva), NEVER voseo (no "tenés", "podés", "mirá", "fijate", "llevalo").
- Every page is written natively for its audience. When adapting an article from the other language, re-structure for that language's search intent and keywords; do not translate sentence by sentence. Units: Spanish uses kg/°C first; English uses lb/°F first (with metric in parentheses where useful).
- Tone: clear, warm, practical, no fluff, no hype. Short paragraphs. No made-up anecdotes, testimonials, stats or quotes.

## Facts and sources (most important rule)
- Every number, study result or clinical claim must come from a source you can cite. Reuse facts from these verified ledgers first:
  - editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/SOURCES_VERIFIED.md
  - editorial/es/guias/SOURCES_VERIFIED.md (big research notes incl. URLs)
  - the source lists at the bottom of existing ARTICLE.html files
- If you need a new fact, verify it on a page you actually load with WebFetch (Bash has no internet). Prefer Merck/MSD Vet Manual, VCA, vet schools (Cornell, UC Davis, RVC, Cambridge), AAHA, WSAVA, AVSAB, AVMA, ACVO, OFA, UC Davis VGL, CAPC, ESCCAP, RSPCA/PDSA/Royal Kennel Club, CDC/USDA, peer-reviewed papers (abstracts OK). Avoid blogs, breeder sites and pet-food marketing. PubMed/PMC often show a captcha; try the journal site, DOAJ, AGRIS or a university repository.
- Respect each ledger's "not verified / do not cite" notes. If you cannot verify something, leave it out or phrase it as general guidance without numbers.
- Log every NEW fact you verified in your ledger file (path given in your task): one line each with fact, source title, publisher/date, URL.
- Each article gets a note that it is not vet-reviewed (the template adds it automatically; do not add your own).

## Keywords
- For each article pick a primary keyword and 4-6 secondaries for ITS language from real search signals. Use Google autocomplete via WebFetch: https://suggestqueries.google.com/complete/search?client=firefox&hl=es&q=QUERY (or hl=en). Space requests out; it rate-limits. editorial/es/KEYWORDS.md already has research for 19 topics (ES and EN keywords + FAQ questions) — reuse it when your topic is there.
- Put the primary keyword in the title, in the first paragraph and in at least one H2. Use secondaries naturally in H2s/FAQ. FAQ questions should be real questions people type.
- Also record the other language's equivalent keyword in meta (keywordEn for ES pages, keywordEs for EN pages).

## Files per article
Folder: editorial/es/guias/<slug>/ (Spanish) or editorial/en/guides/<slug>/ (English). Use exactly the slug assigned in your task. Two files:

### ARTICLE.html
Model it on editorial/es/guias/tos-de-las-perreras/ARTICLE.html (read it). Structure:
```
<!-- one-line editorial note: date 2026-11-03, source article adapted (if any), primary keyword, caveats -->
<article lang="es" class="es-guide">   (English: <article lang="en-US" class="en-guide">)
<p>Intro paragraph (2-4 sentences, contains the primary keyword, answers the main question fast).</p>
<aside class="key-takeaways"><p><strong>Lo esencial</strong></p><ul> 3-5 bullets with <sup><a href="#ref-N">[N]</a></sup> </ul></aside>   (English heading: "Key takeaways")
<nav aria-label="En esta guía"><p class="mpf-toc-title">En esta guía</p><ul> links to each H2 id </ul></nav>   (English: "In this guide")
<section><h2 id="kebab-id">...</h2> ... </section>   x 5-7 sections; use <ul>, <ol>, <table> where they help
<section><h2 id="fuentes">Fuentes</h2><ol class="references"><li id="ref-1">Author. <a href="URL" rel="nofollow noopener">Title</a>. Publisher, date.</li>...</ol></section>   (English: id="sources", "Sources")
</article>
```
- Do NOT put an H1 or an FAQ section in the HTML: the template renders the H1 from meta.title and the FAQ from meta.faq.
- Length: 1,000-1,600 words of body text. Every [N] must match a ref id. Every href="#..." must exist.
- Internal links: 3-6 links to other pages of the SAME language, using the URL map below. Only link to URLs in the map (they will all exist). Spanish pages may link to an English page only if no Spanish version exists in the map, and then add hreflang="en".
- Safety: say clearly when something is an emergency (go to the vet now). Never give drug doses.

### meta.json
```
{
  "title": "Page H1, keyword first, 50-70 chars",
  "seoTitle": "<title> text, keyword first, max 56 chars (site name is appended)",
  "description": "Meta description, 120-158 chars, contains the primary keyword",
  "category": "one of: health, nutrition, training, puppies, breed-characteristics, genetics, daily-care",
  "primaryKeyword": "...",
  "secondaryKeywords": ["...", "..."],
  "keywordEn": "... (ES pages)"  /  "keywordEs": "... (EN pages)",
  "lastReviewed": "2026-11-03",
  "status": "REVISED_DRAFT_SOURCED",
  "related": ["slugs of 2-4 same-language guides from the map"],
  "enUrl": "/en/... (ES pages, when an English version exists in the map)"  /  "esUrl": "/es/... (EN pages, when a Spanish version exists in the map)",
  "faq": [ {"q": "real question", "a": "2-3 sentence answer consistent with the article, no new unsourced numbers"} ]  (4-5 items)
}
```
Validate JSON (python3 -m json.tool) before finishing.

## URL map (all pages that will exist; category is the 2nd URL segment)
English (existing):
/en/breed-characteristics/french-bulldog-with-longer-snout/ · /en/genetics/merle-french-bulldog-health-risks/ · /en/genetics/white-french-bulldog-deafness/ · /en/genetics/fluffy-french-bulldog-health/ · /en/genetics/blue-french-bulldog-hair-loss/ · /en/genetics/french-bulldog-breeder-health-tests/ · /en/puppies/french-bulldog-puppy-paperwork/ · /en/puppies/french-bulldog-puppy-health-checklist/ · /en/health/french-bulldog-noisy-breathing/ · /en/genetics/double-merle-french-bulldog/ · /en/nutrition/french-bulldog-diarrhea/ · /en/health/french-bulldog-vomiting/ · /en/daily-care/french-bulldog-tail-pocket/ · /en/daily-care/french-bulldog-heat-safety/ · /en/health/french-bulldog-back-pain-weak-legs/ · /en/breed-characteristics/mini-french-bulldog-health/ · /en/daily-care/french-bulldog-dry-nose/ · /en/health/french-bulldog-red-eyes/ · /en/health/french-bulldog-first-heat-care/ · /en/genetics/pregnant-french-bulldog-care/ · /en/daily-care/senior-french-bulldog-care/ · /en/breed-characteristics/french-bulldog-human-allergies/ · /en/training/french-bulldog-aggression-behavior/ · /en/training/french-bulldog-crying-whining/
/en/nutrition/how-much-should-a-french-bulldog-eat/ · /en/nutrition/best-food-for-french-bulldogs/ · /en/nutrition/french-bulldog-food-allergies/ · /en/nutrition/safe-treats-for-french-bulldogs/

English (new, being written now):
/en/health/demodectic-mange-in-dogs/ · /en/health/ear-mites-in-dogs/ · /en/health/fleas-on-dogs/ · /en/health/kennel-cough-in-dogs/ · /en/health/distemper-in-dogs/ · /en/health/blindness-in-dogs/ · /en/daily-care/how-much-do-french-bulldogs-sleep/ · /en/daily-care/french-bulldog-stairs/ · /en/daily-care/how-often-should-a-dog-poop/ · /en/nutrition/french-bulldog-too-skinny/ · /en/training/can-french-bulldogs-be-left-alone/ · /en/training/how-to-train-a-french-bulldog/ · /en/puppies/how-to-potty-train-a-french-bulldog/ · /en/puppies/puppy-socialization/ · /en/daily-care/how-often-to-bathe-a-french-bulldog/ · /en/puppies/french-bulldog-puppy-care/ · /en/training/food-aggression-in-dogs/ · /en/daily-care/flying-with-a-french-bulldog/ · /en/breed-characteristics/french-bulldog-temperament/
/en/genetics/pied-french-bulldog/ · /en/genetics/blue-eyed-french-bulldog/ · /en/nutrition/french-bulldog-farts/ · /en/daily-care/french-bulldog-shedding/ · /en/health/overweight-french-bulldog/ · /en/breed-characteristics/frenchton/ · /en/breed-characteristics/french-bulldog-lifespan/ · /en/health/french-bulldog-tail-spine/ · /en/health/french-bulldog-going-blind/

Spanish (existing):
/es/health/sarna-demodecica-perros/ · /es/health/acaros-en-los-oidos-perros/ · /es/health/pulgas-en-perros/ · /es/health/tos-de-las-perreras/ · /es/health/moquillo-canino/ · /es/health/ceguera-en-perros/ · /es/daily-care/cuantas-horas-duerme-bulldog-frances/ · /es/daily-care/bulldog-frances-escaleras/ · /es/daily-care/cuantas-veces-hace-caca-un-perro/ · /es/nutrition/bulldog-frances-flaco/ · /es/training/bulldog-frances-solo-en-casa/ · /es/training/como-educar-bulldog-frances/ · /es/puppies/ensenar-cachorro-hacer-sus-necesidades/ · /es/puppies/socializacion-del-cachorro/ · /es/daily-care/cada-cuanto-banar-bulldog-frances/ · /es/puppies/cuidados-cachorro-bulldog-frances/ · /es/training/perro-agresivo-con-la-comida/ · /es/daily-care/bulldog-frances-viajar-en-avion/ · /es/breed-characteristics/caracter-bulldog-frances/
/es/nutrition/how-much-should-a-french-bulldog-eat/ · /es/nutrition/best-food-for-french-bulldogs/ · /es/nutrition/french-bulldog-food-allergies/ · /es/nutrition/safe-treats-for-french-bulldogs/

Spanish (new, being written now):
/es/breed-characteristics/bulldog-frances-hocico-largo/ · /es/genetics/bulldog-frances-merle/ · /es/genetics/bulldog-frances-blanco-sordera/ · /es/genetics/bulldog-frances-fluffy/ · /es/genetics/bulldog-frances-azul-caida-de-pelo/ · /es/genetics/pruebas-de-salud-criador-bulldog-frances/ · /es/puppies/papeles-cachorro-bulldog-frances/ · /es/puppies/revision-salud-cachorro-bulldog-frances/ · /es/health/bulldog-frances-ronca-respira-mal/ · /es/genetics/bulldog-frances-doble-merle/ · /es/nutrition/diarrea-bulldog-frances/ · /es/health/bulldog-frances-vomita/ · /es/daily-care/bulldog-frances-bolsillo-de-la-cola/ · /es/daily-care/bulldog-frances-calor-golpe-de-calor/ · /es/health/bulldog-frances-hernia-discal/ · /es/breed-characteristics/bulldog-frances-mini/ · /es/daily-care/bulldog-frances-nariz-seca/ · /es/health/bulldog-frances-ojos-rojos/ · /es/health/primer-celo-bulldog-frances/ · /es/genetics/bulldog-frances-embarazada/ · /es/daily-care/bulldog-frances-anciano/ · /es/breed-characteristics/bulldog-frances-hipoalergenico/ · /es/training/bulldog-frances-agresivo/ · /es/training/bulldog-frances-llora/
/es/genetics/bulldog-frances-pied/ · /es/genetics/bulldog-frances-ojos-azules/ · /es/nutrition/bulldog-frances-gases/ · /es/daily-care/bulldog-frances-muda-de-pelo/ · /es/health/bulldog-frances-sobrepeso/ · /es/breed-characteristics/frenchton/ · /es/breed-characteristics/esperanza-de-vida-bulldog-frances/ · /es/health/bulldog-frances-cola-columna/ · /es/health/bulldog-frances-se-queda-ciego/

Pairs (same topic in the other language) are listed in the same position in "new" lists above and in your task.

## Before you finish
- Re-read each article once for: unsourced numbers, broken [N]/#ids, links outside the map, voseo (Spanish), word count.
- Report back: the folders written, any fact you could not verify and left out, and anything the editor should double-check.

## Where the source articles are
- Existing English guides (to adapt into Spanish): editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/<en-slug>/ARTICLE.html (+ meta.json, and its COLLECTION_INDEX.json has keyword volumes).
- Existing Spanish guides (to adapt into English): editorial/es/guias/<es-slug>/ARTICLE.html + meta.json.
- Read the source article and its cited sources; reuse verified facts, but restructure for the target language's searches.
