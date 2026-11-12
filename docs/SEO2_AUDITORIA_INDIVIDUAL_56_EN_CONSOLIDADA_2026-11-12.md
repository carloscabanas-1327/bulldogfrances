# SEO2 — AUDITORÍA PÁGINA POR PÁGINA — 56 ARTÍCULOS EN (2026-11-12)

**Alcance y lenguaje de calidad.** Se inspeccionaron íntegramente en el repositorio los metadatos, entradillas, H2, citas numeradas y atributos de imagen de 56 páginas inglesas: 28 guías editoriales EN, 24 guías importadas y cuatro artículos de nutrición. **Este documento certifica únicamente la pasada estructural y el registro de hallazgos, no una auditoría clínica profesional, una revisión de los 249 textos fuente uno a uno, ni la publicación en Cloudflare.** Los siete expedientes JSON enlazados desde el repositorio preservan los datos por artículo.

## Comprobaciones efectuadas

- **56 de 56** archivos fuente inspeccionados; **56 de 56** metadatos SEO dentro del umbral editorial de título completo de 56 caracteres y metadescripción de 120–158; ese umbral no es una norma de Google.
- **56 de 56** primera oración de 140 caracteres o menos después de las correcciones realizadas. Sin anclas bibliográficas huérfanas en las 52 guías.
- **389 de 389** URLs de referencias en los HTML coinciden por número con la URL canónica o URL anterior registrada en `data/fuentes/registro.json`. Esto **no** acredita las afirmaciones de contenido.
- **29** guías con imagen principal declarada y archivo local existente en GitHub (**28 imágenes únicas**); **23** guías sin portada; **4** páginas de nutrición usan imágenes externas de Unsplash.
- **26** artículos no tienen FAQ declarada; **13** no incluyen literalmente la frase exacta `primaryKeyword` en el primer párrafo. **Ni añadir FAQ ni repetir exact-match son requisitos automáticos de Google**: corresponde evaluar utilidad y naturalidad.
- 249 fuentes registradas después de incorporar la [FAQ CDC 2026](https://www.cdc.gov/importation/dogs/faqs.html) para la guía de vuelos; la ruta ES mantiene su registro histórico. Actualización científica puntual de Frenchton (DVL2 y BOAS) en esta rama.
- El intento de verificar cuatro URLs públicas con el navegador externo dio error de acceso, **no prueba caída del sitio**. No se ha ejecutado `npm run build` ni pruebas reales de páginas indexadas.

## Clasificación por artículo

| N.º | Slug | Título SEO (car.) | Descripción (car.) | Fuentes | Imagen | Prioridad editorial | Pendientes |
|---:|---|---:|---:|---:|---|---|---|
| 1 | `blindness-in-dogs` | 54 | 156 | 12 | No | ALTA | Falta imagen; Verificar evidencia |
| 2 | `blue-eyed-french-bulldog` | 52 | 155 | 12 | No | MEDIA | Falta imagen |
| 3 | `can-french-bulldogs-be-left-alone` | 55 | 149 | 12 | Sí | NORMAL | Estructura sin observaciones |
| 4 | `demodectic-mange-in-dogs` | 52 | 143 | 4 | No | MEDIA | Falta imagen; Verificar evidencia |
| 5 | `distemper-in-dogs` | 52 | 152 | 8 | No | ALTA | Falta imagen; Verificar evidencia |
| 6 | `ear-mites-in-dogs` | 52 | 148 | 6 | No | MEDIA | Falta imagen; Verificar evidencia |
| 7 | `fleas-on-dogs` | 53 | 143 | 8 | No | MEDIA | Falta imagen; Verificar evidencia |
| 8 | `flying-with-a-french-bulldog` | 49 | 158 | 18 | No | ALTA | Falta imagen; Políticas cambiantes |
| 9 | `food-aggression-in-dogs` | 50 | 147 | 7 | No | MEDIA | Falta imagen; Verificar evidencia |
| 10 | `french-bulldog-farts` | 49 | 153 | 5 | Sí | NORMAL | Estructura sin observaciones |
| 11 | `french-bulldog-going-blind` | 54 | 145 | 14 | No | ALTA | Falta imagen; Verificar evidencia |
| 12 | `french-bulldog-lifespan` | 55 | 145 | 6 | Sí | NORMAL | Verificar evidencia |
| 13 | `french-bulldog-puppy-care` | 52 | 149 | 16 | Sí | NORMAL | Verificar evidencia |
| 14 | `french-bulldog-shedding` | 50 | 157 | 10 | Sí | NORMAL | Estructura sin observaciones |
| 15 | `french-bulldog-stairs` | 56 | 148 | 9 | Sí | NORMAL | Verificar evidencia |
| 16 | `french-bulldog-tail-spine` | 56 | 154 | 9 | No | MEDIA | Falta imagen; Verificar evidencia |
| 17 | `french-bulldog-temperament` | 53 | 145 | 11 | Sí | NORMAL | Verificar evidencia |
| 18 | `french-bulldog-too-skinny` | 53 | 157 | 10 | No | MEDIA | Falta imagen; Verificar evidencia |
| 19 | `frenchton` | 52 | 151 | 11 | No | MEDIA | Falta imagen; Verificar evidencia |
| 20 | `how-much-do-french-bulldogs-sleep` | 55 | 149 | 7 | Sí | NORMAL | Estructura sin observaciones |
| 21 | `how-often-should-a-dog-poop` | 49 | 145 | 6 | Sí | NORMAL | Estructura sin observaciones |
| 22 | `how-often-to-bathe-a-french-bulldog` | 56 | 153 | 8 | Sí | NORMAL | Estructura sin observaciones |
| 23 | `how-to-potty-train-a-french-bulldog` | 56 | 149 | 11 | No | MEDIA | Falta imagen; Verificar evidencia |
| 24 | `how-to-train-a-french-bulldog` | 50 | 145 | 11 | Sí | NORMAL | Verificar evidencia |
| 25 | `kennel-cough-in-dogs` | 56 | 153 | 7 | No | MEDIA | Falta imagen; Verificar evidencia |
| 26 | `overweight-french-bulldog` | 53 | 151 | 14 | No | MEDIA | Falta imagen; Verificar evidencia |
| 27 | `pied-french-bulldog` | 56 | 138 | 10 | Sí | NORMAL | Estructura sin observaciones |
| 28 | `puppy-socialization` | 54 | 154 | 7 | Sí | NORMAL | Estructura sin observaciones |
| 29 | `blue-french-bulldog-hair-loss` | 50 | 154 | 4 | Sí | NORMAL | Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 30 | `double-merle-french-bulldog` | 54 | 134 | 3 | No | MEDIA | Falta imagen; Sin FAQ; Verificar evidencia |
| 31 | `fluffy-french-bulldog-health` | 50 | 147 | 4 | No | MEDIA | Falta imagen; Sin FAQ |
| 32 | `french-bulldog-aggression-behavior` | 52 | 122 | 3 | Sí | NORMAL | Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 33 | `french-bulldog-back-pain-weak-legs` | 52 | 140 | 5 | Sí | ALTA | Sin FAQ; Verificar evidencia |
| 34 | `french-bulldog-breeder-health-tests` | 56 | 158 | 13 | Sí | ALTA | Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 35 | `french-bulldog-crying-whining` | 48 | 157 | 3 | Sí | NORMAL | Keyword no literal en apertura; Sin FAQ |
| 36 | `french-bulldog-diarrhea` | 56 | 146 | 6 | Sí | ALTA | Sin FAQ; Verificar evidencia |
| 37 | `french-bulldog-dry-nose` | 52 | 136 | 2 | Sí | NORMAL | Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 38 | `french-bulldog-first-heat-care` | 53 | 144 | 2 | No | ALTA | Falta imagen; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 39 | `french-bulldog-heat-safety` | 53 | 145 | 4 | Sí | ALTA | Sin FAQ; Verificar evidencia |
| 40 | `french-bulldog-human-allergies` | 54 | 129 | 1 | Sí | NORMAL | Sin FAQ; Verificar evidencia |
| 41 | `french-bulldog-noisy-breathing` | 54 | 146 | 8 | Sí | ALTA | Sin FAQ; Verificar evidencia |
| 42 | `french-bulldog-puppy-health-checklist` | 54 | 134 | 5 | Sí | NORMAL | Sin FAQ; Verificar evidencia |
| 43 | `french-bulldog-puppy-paperwork` | 51 | 124 | 4 | Sí | NORMAL | Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 44 | `french-bulldog-red-eyes` | 52 | 155 | 6 | Sí | ALTA | Sin FAQ; Verificar evidencia |
| 45 | `french-bulldog-tail-pocket` | 53 | 150 | 3 | Sí | NORMAL | Estructura sin observaciones |
| 46 | `french-bulldog-vomiting` | 52 | 145 | 4 | Sí | ALTA | Verificar evidencia |
| 47 | `french-bulldog-with-longer-snout` | 54 | 123 | 4 | No | MEDIA | Falta imagen; Sin FAQ; Verificar evidencia |
| 48 | `merle-french-bulldog-health-risks` | 54 | 145 | 5 | Sí | NORMAL | Sin FAQ; Verificar evidencia |
| 49 | `mini-french-bulldog-health` | 54 | 128 | 5 | No | MEDIA | Falta imagen; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 50 | `pregnant-french-bulldog-care` | 50 | 141 | 3 | No | ALTA | Falta imagen; Sin FAQ; Verificar evidencia |
| 51 | `senior-french-bulldog-care` | 47 | 141 | 5 | No | MEDIA | Falta imagen; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 52 | `white-french-bulldog-deafness` | 50 | 143 | 4 | No | MEDIA | Falta imagen; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 53 | `how-much-should-a-french-bulldog-eat` | 54 | 148 | 5 | Externa | NORMAL | Imagen externa; Sin FAQ; Verificar evidencia |
| 54 | `best-food-for-french-bulldogs` | 50 | 148 | 4 | Externa | NORMAL | Imagen externa; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 55 | `french-bulldog-food-allergies` | 50 | 153 | 2 | Externa | ALTA | Imagen externa; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |
| 56 | `safe-treats-for-french-bulldogs` | 47 | 155 | 3 | Externa | NORMAL | Imagen externa; Keyword no literal en apertura; Sin FAQ; Verificar evidencia |

## Incidencias concretas

**Imagen duplicada poco pertinente.** `/images/photos/white-puppy-eye-patch.webp` se comparte entre `french-bulldog-puppy-paperwork` y `french-bulldog-red-eyes`. El segundo artículo aclara que la marca de pelaje oscura no es patología ocular. La aclaración evita engaño clínico, pero **la imagen no ilustra ojos rojos**. Debe sustituirse antes del cierre visual.

**Imágenes ausentes (23):** `blindness-in-dogs`, `blue-eyed-french-bulldog`, `demodectic-mange-in-dogs`, `distemper-in-dogs`, `ear-mites-in-dogs`, `fleas-on-dogs`, `flying-with-a-french-bulldog`, `food-aggression-in-dogs`, `french-bulldog-going-blind`, `french-bulldog-tail-spine`, `french-bulldog-too-skinny`, `frenchton`, `how-to-potty-train-a-french-bulldog`, `kennel-cough-in-dogs`, `overweight-french-bulldog`, `double-merle-french-bulldog`, `fluffy-french-bulldog-health`, `french-bulldog-first-heat-care`, `french-bulldog-with-longer-snout`, `mini-french-bulldog-health`, `pregnant-french-bulldog-care`, `senior-french-bulldog-care`, `white-french-bulldog-deafness`.

**Fuentes de alto riesgo.** Las referencias se corresponden con el registro, pero las afirmaciones relativas a urgencias oftalmológicas, discopatía, fármacos, parto, nutrición, seguridad aérea, enfermedades infecciosas y genética requieren verificación de texto fuente y, cuando corresponda, revisión veterinaria. No se les atribuye autorización médica implícita.

**Datos estructurados.** La plantilla genera `Article` y `BreadcrumbList`, metadatos canónicos, Open Graph y `hreflang` solo cuando existe contraparte. Las páginas sin foto no generan imagen representativa en el nodo Article. Google recomienda imagen accesible y representativa, fecha y autor bien identificados; no se inventa fecha de publicación ni autor humano para rellenar campos. Pendiente validar resultado renderizado en Google Rich Results Test.

**Indexación.** `INDEXABLE=true` en `src/data/site.js` y el sitemap incluye artículos con aviso editorial de borrador. No se ha cambiado automáticamente el indexado: hacerlo podría sacar de Google páginas que el usuario desea posicionar. Debe revisarse el estado real y resolver las páginas no aprobadas antes de abrir nuevas.

**Keyword Planner.** [Job 17983286262](https://gitlab.com/carlos-proyectos/keywords-planner-repo/-/jobs/17983286262): 20 términos consultados, 18 volúmenes US/en y 2 sin datos, sin caché. La segunda tanda fue sustituida en el repositorio compartido por solicitudes de otro proyecto: no se atribuyen sus resultados a BulldogFrances. Ads competition no mide la dificultad orgánica.

**Métricas SEO reales pendientes:** estado de indexación de cada ruta, impresiones, consultas, CTR, posición, Core Web Vitals, enlaces rotos en sitio público y QA móvil. Sin datos directos de Search Console no hay evidencia de aumento de tráfico.

## Correcciones verificadas después de la primera matriz

- Se contrastó la fuente original [Mansour et al., 2018](https://doi.org/10.1371/journal.pgen.1007850): el DVL2 homocigoto se observó en los **79 bulldogs franceses de la muestra**, no se puede asegurar para todos los individuos. La guía **Frenchton** y su FAQ ahora distinguen muestra, predicción individual y los riesgos BOAS. Se confirmó también el estudio [Tomlinson et al., 2024](https://doi.org/10.1371/journal.pone.0315411): **39/104** Boston Terriers grado 0 BOAS, comparados con datos anteriores de franceses; no mide Frenchtons.
- La guía **Flying With a French Bulldog** actualizó referencias de American y Delta y la FAQ de requisitos de ingreso al país según [CDC, 27 agosto 2026](https://www.cdc.gov/importation/dogs/faqs.html). Se eliminaron tarifas estáticas y generalizaciones sobre dimensiones de transportadoras.
- La plantilla Astro `src/pages/en/[category]/[slug].astro` distingue `lastReviewed` (revisión de fuentes, no falsificada) de `lastEdited` (corrección editorial sustantiva). El campo `dateModified` de Article JSON-LD usa la fecha más reciente **solo** cuando esa fecha consta y muestra `Last updated` en la página.
- Tras actualizar bibliografía y registro, se volvió a comprobar la correspondencia de las **389 referencias** y no hubo desajustes. Son **249 fuentes únicas registradas**, sin inferir de ello que todas las URLs hayan respondido hoy.
- En la revisión de búsquedas públicas, Google mostraba URLs ya indexadas con contenido **anterior** a las ramas de trabajo. No se ha confundido versión indexada con versión del PR.
- Documentación oficial de [Google Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article): recomienda URL de imagen representativa y fechas precisas; se exige no inventar autor ni fecha y no presentar ausencia de FAQ como fallo estructural de Google.

## Criterio de finalización

**Finalizado hoy:** censo y auditoría estructural individual de los 56 artículos, normalización de metadatos, control de correspondencia de 389 referencias y registro explícito de las incidencias por página.

**No finalizado:** aceptación clínica documental de cada afirmación, 23 portadas y cuatro fotografías externas, build y verificación en Cloudflare, enlaces externos vivos, Google Rich Results Test, Search Console y aprobación de publicación. Los PR #30–#32 están apilados y sin fusionar; este censo tiene rama y PR propios.

**Política:** no convertir una observación de SEO en una falsa autorización para publicar. `index,follow` solo es deseable en contenidos que cumplan los controles.
