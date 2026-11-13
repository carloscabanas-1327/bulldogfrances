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
| Datos estructurados y hreflang | **Implementación inspeccionada, no validada en HTML renderizado** | Plantilla Astro incluye Article y BreadcrumbList, canonical, OG y hreflang. Se contrastaron los **28 pares de metadatos EN/ES de `editorial/en/guides`** en ambos sentidos, con slug y categoría coincidentes; restan verificación integral del resto y validación en HTML/renderizador |
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

## Segunda pasada: nueve revisiones clínicas focalizadas (2026-11-12)

La rama apilada `audit/seo2-clinical-infectious-2026-11-12` añade inspección de afirmaciones y correcciones documentales a **nueve artículos EN**: distemper, kennel cough, blindness, french-bulldog-going-blind, food allergies, pregnancy, first heat, blue-eyed French Bulldog y Frenchton. El registro pasó a **254 fuentes** (F250–F254). Los textos de seis guías y tres páginas adicionales se contrastaron en sus referencias numeradas y metadatos. **En total, 19 de las 56 páginas fueron trabajadas sustantivamente en tandas, pero ninguna obtiene aprobación clínica profesional o de despliegue solo por eso.** Quedan **37 páginas sin la misma revisión individual sustantiva documentada**. El inventario estructural 56/56 sigue completado. Ver `docs/AUDITORIA_SEO2_EN_CLINICA_2026-11-12.md` y matriz CSV actualizada.

## Tercera pasada: seis revisiones de piel, parásitos, conducta y peso (2026-11-12)

La rama apilada `audit/seo2-parasites-behavior-weight-2026-11-12` añade **seis revisiones individuales**: demodicosis, ácaros auriculares, pulgas, protección de recursos/food aggression, sobrepeso y bajo peso. La matriz de 56 páginas marca el trabajo con `targeted_clinical_review_QA_pending`. El registro documental incorpora **F255 (FDA, isoxazolinas)** y **F256 (AAHA, conducta)**, y acumula **256 fuentes**. Se comprobaron títulos, metas, seis aperturas y referencias internas de estos seis archivos. **Total acumulado de artículos trabajados sustantivamente: 25/56. Restantes: 31/56**, sin contar como revisión clínica profesional ni QA de compilación/publicación. Detalle: `docs/AUDITORIA_SEO2_EN_PARASITOS_CONDUCTA_PESO_2026-11-12.md`.

## Pruebas de aceptación para declarar terminado (todavía no superadas)

- Confirmar palabra clave y SERP para cada intención, sin canibalización y sin reclamar métricas no consultadas.
- Revisar **afirmación por afirmación** las 18 filas aún marcadas como `anchor_integrity_only`; conciliar 10 revisiones históricas no identificadas por ese campo antes de determinar el saldo real; registrar cita exacta en registro de fuentes.
- Resolver las **23 imágenes** ausentes y las 4 externas de nutrición con validación de propiedad/relevancia.
- Ejecutar `npm run build` en un checkout de la rama, revisar 56 rutas, `robots.txt`, `sitemap.xml`, JSON-LD, hreflang recíproco, consola del navegador y presentación móvil.
- Verificar que Cloudflare Pages sirve el commit esperado. Comparar 404, CWV, GSC (indexación, consultas, impresiones y CTR), sin afirmar subida de tráfico previa a datos reales.
- Fusionar los PR en orden **solo** si se autoriza y la compilación pasa. `main` y el sitio público no se han modificado en esta fase.

Este documento cierra **el censo técnico y la normalización de metadatos**, no la auditoría médica y visual integral. La tabla de 56 filas y el script `scripts/audit-en-56.mjs` permiten continuar sin repetir el trabajo ya efectuado.

## Cuarta tanda: seis revisiones de neurología, calor, respiración, merle y compra responsable (2026-11-12)

La rama `audit/seo4-six-clinical-breed-guides-2026-11-12`, apilada sobre SEO3 PR #36, revisa seis guías aún pendientes con 30 correcciones de precisión y seguridad; se documentan en `docs/AUDITORIA_SEO4_EN_SEIS_GUIAS_CLINICAS_2026-11-12.md`. Progreso acumulado **34/56** con revisión individual focalizada; **22/56** pendientes. Registro de fuentes permanece en **256**; ninguna aprobación clínica ni de publicación implícita.

## Quinta tanda: seis guías de genética, pelajes y conformación (2026-11-12)

La rama `audit/seo5-genetics-coats-conformation-six-2026-11-12`, apilada sobre PR #37, incorpora **63 sustituciones editoriales** en seis artículos pendientes (61 sustantivas y dos ajustes de apertura SEO). Afecta a pérdida de pelo azul, pelaje fluffy, hocico más largo, merle, mini y sordera asociada al manto blanco. F204 registra un uso nuevo y F257 documenta una nueva fuente de UC Davis (registro **257**). Informe: `docs/AUDITORIA_SEO5_EN_GENETICA_PELAJES_CONFORMACION_2026-11-12.md`.

**Control de consistencia pendiente:** 40/56 revisiones individuales según el acumulado histórico (16 pendientes), pero la marca específica de la matriz muestra **30/56** `targeted_claims_checked` y **26/56** `anchor_integrity_only`; se deben localizar las 10 revisiones históricas no marcadas antes de equiparar ambas cifras. Ninguna de estas sumas constituye aprobación clínica, QA técnica ni autorización de publicación.

## Sexta tanda: ocho guías de conducta, entrenamiento y cuidados iniciales (2026-11-12)

La rama `audit/seo6-behavior-puppies-eight-2026-11-12`, apilada sobre SEO5 PR #38, incorpora **75 correcciones HTML focalizadas** en ocho artículos (separación, temperamento, potty training, adiestramiento, socialización, cuidados de cachorros, agresividad y llanto), **17 FAQ** actualizadas y fechas `lastReviewed` en ocho metadatos. Dos fuentes nuevas exactas, **F258 ASPCA Separation Anxiety** y **F259 American Humane Housetraining**, elevan el registro a **259**. Informe: `docs/AUDITORIA_SEO6_EN_CONDUCTA_CACHORROS_OCHO_2026-11-12.md`.

Progreso histórico declarado **48/56** (8 nominalmente pendientes) no equivale a suma del campo operativo: la matriz identifica ahora **38/56** `targeted_claims_checked` y **18/56** `anchor_integrity_only`. Persisten diez revisiones históricas por conciliar documentalmente. Sin build Astro, GSC, QA visual, revisión veterinaria profesional ni fusión/publicación.
