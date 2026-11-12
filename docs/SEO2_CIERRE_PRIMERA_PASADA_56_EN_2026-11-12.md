# BULLDOGFRANCES.COM — SEO2 English: cierre de primera pasada y puertas de publicación

**Fecha:** 12 noviembre 2026. **Alcance:** 56 páginas inglesas existentes (52 guías + 4 nutricionales). **Rama:** `audit/seo2-56-english-census-2026-11-12`. Documento de QA, **no certifica que el sitio publicado esté validado**.

## Resultado por dimensión

| Dimensión | Estado | Evidencia / limitación |
|---|---|---|
| Inventario | **Completado a nivel de repositorio** | 56 páginas identificadas con ruta real en `docs/SEO2_MATRIZ_56_EN_2026-11-12.csv` |
| Título SEO con marca | **Metadatos normalizados** | 56 títulos siguiendo umbral editorial interno de 56 caracteres incluyendo ` | BulldogFrances.com`, sin alterar H1 ni URL; no es límite impuesto por Google |
| Metadescripciones | **Metadatos normalizados** | 56 descripciones en rango interno 120–158; no hay garantía de que Google use esos snippets |
| Keyword principal declarada | **Completado como hipótesis editorial** | Las 56 páginas tienen campo; solo un subconjunto tiene volumen comprobado por Google Ads |
| Keyword Planner US/en | **Parcial, datos reales** | Primer lote de 20 términos completado mediante [job 17983286262](https://gitlab.com/carlos-proyectos/keywords-planner-repo/-/jobs/17983286262): 18 cifras estimadas, 2 sin dato; segundo lote no atribuido, ya que otros pipelines concurrentes procesaron consultas diferentes |
| Referencias numeradas | **Integridad estructural revisada** | 52 HTML de guías sin llamadas `#ref-N` huérfanas; 56 páginas con al menos un uso en registro de fuentes; 248 fuentes distintas en registro, ≈388 usos EN. Esto NO prueba veracidad individual de cada afirmación ni disponibilidad de cada enlace |
| Entradillas | **Revisión de forma; algunas reescritas** | Se acortaron los inicios extensos detectados, sin sustituir datos científicos; las recomendaciones clínicas de 46 páginas restantes no fueron reevaluadas una a una |
| Enlaces internos | **Rutas contrastadas en el código** | No se observaron slugs /en/ inexistentes en enlaces textuales de las 28 guías `editorial/en/guides`; faltan pruebas de enlaces publicados y redirecciones |
| Datos estructurados | **Implementación inspeccionada, no validada con Google** | Plantilla Astro incluye Article y BreadcrumbList, canonical, OG y hreflang cuando hay par confirmado; falta prueba de build/render/validator |
| Imágenes | **Incompleto** | 29 guías con imagen principal local, 23 sin hero. Las 4 de nutrición enlazan Unsplash remoto, pendientes de relevancia, derechos y control de carga |
| Riesgo sanitario YMYL | **Incompleto** | Faltan revisión sustantiva y validación veterinaria profesional para las 46 páginas que solo tenían censo estructural |
| Compilación / visual móvil / Cloudflare / GSC | **Sin validación final** | No ejecutar GitHub Actions; falta build Astro, prueba móvil, 404 externos, imágenes, datos estructurados, estado real de indexación |
| Publicación / merge | **Bloqueados** | Conservar en borrador los PR #30, #31, #32 y el PR de este censo hasta QA. No fusiones automáticas |

## Fotos aún ausentes — 23 guías

**Guías EN originales (15)**: `blindness-in-dogs`, `blue-eyed-french-bulldog`, `demodectic-mange-in-dogs`, `distemper-in-dogs`, `ear-mites-in-dogs`, `fleas-on-dogs`, `flying-with-a-french-bulldog`, `food-aggression-in-dogs`, `french-bulldog-going-blind`, `french-bulldog-tail-spine`, `french-bulldog-too-skinny`, `frenchton`, `how-to-potty-train-a-french-bulldog`, `kennel-cough-in-dogs`, `overweight-french-bulldog`.

**Guías importadas (8)**: `double-merle-french-bulldog`, `fluffy-french-bulldog-health`, `french-bulldog-first-heat-care`, `french-bulldog-with-longer-snout`, `mini-french-bulldog-health`, `pregnant-french-bulldog-care`, `senior-french-bulldog-care`, `white-french-bulldog-deafness`.

No completar con imágenes ornamentales irrelevantes; para neurología, ojos, infecciones y anatomía, no producir «radiografías» ficticias ni escenas que simulen una lesión real. Cada imagen necesita revisión editorial, procedencia, licencia/derechos, ALT, dimensión, compresión y aprobación visual.

## Alertas de prioridad comercial y editorial

1. **Frenchton** (14.800 búsquedas mensuales Google Ads estimadas US/en): intención potencial amplia y competencia SERP aún no medida; página existente con énfasis en diferencias frente a dos razas braquicéfalas y límites de evidencia.
2. **Temperament** (1.900), **blue eyed French Bulldog** (1.000), **cherry eye** (880), **shedding** (720): revisar imágenes, posibles solapamientos y autoridad de fuentes antes de cambios clínicos.
3. **Allergies** (720): intención ambigua entre alergia del perro y personas al perro. Mantener separados `french-bulldog-food-allergies` y `french-bulldog-human-allergies`.
4. **Viajes aéreos**: se actualizaron redacciones y fuentes American/Delta; las políticas, dimensiones, rutas, tarifas y CDC cambian. Revisar con operador en cada fecha de viaje.
5. **Oftalmología, enfermedades infecciosas, embarazo y neurología**: requieren revisión de urgencias y fuentes específicas antes del visto bueno final.
6. **Datos de KP** son estimaciones de Google Ads por coincidencia de términos, no visitas orgánicas ni dificultad de SEO; «sin dato» no implica cero.

## Pruebas de aceptación para declarar terminado (todavía no superadas)

- Confirmar palabra clave y SERP para cada intención, sin canibalización y sin reclamar métricas no consultadas.
- Revisar **afirmación por afirmación** cada una de las 46 páginas con solo censo de forma; registrar cita exacta en registro de fuentes.
- Resolver las **23 imágenes** ausentes y las 4 externas de nutrición con validación de propiedad/relevancia.
- Ejecutar `npm run build` en un checkout de la rama, revisar 56 rutas, `robots.txt`, `sitemap.xml`, JSON-LD, hreflang recíproco, consola del navegador y presentación móvil.
- Verificar que Cloudflare Pages sirve el commit esperado. Comparar 404, CWV, GSC (indexación, consultas, impresiones y CTR), sin afirmar subida de tráfico previa a datos reales.
- Fusionar los PR en orden **solo** si se autoriza y la compilación pasa. `main` y el sitio público no se han modificado en esta fase.

Este documento cierra **el censo técnico y la normalización de metadatos**, no la auditoría médica y visual integral. La tabla de 56 filas y el script `scripts/audit-en-56.mjs` permiten continuar sin repetir el trabajo ya efectuado.
