# AUDITORÍA SEO 5 — genética, colores, conformación y salud (EN)

**Fecha:** 2026-11-12  
**Base:** rama `audit/seo4-six-clinical-breed-guides-2026-11-12` (PR #37)  
**Rama nueva:** `audit/seo5-genetics-coats-conformation-six-2026-11-12`  
**Estado:** revisión editorial focalizada, sin aprobación clínica profesional, sin merge, sin publicación.

## Alcance y método

Se eligieron seis guías que en la matriz tenían `anchor_integrity_only`. Se inspeccionó la redacción existente y se realizaron **61 sustituciones sustantivas de pasajes**, más **2 correcciones adicionales del inicio SEO de Merle** (63 sustituciones en total). Mantuvimos slugs, títulos declarados, imágenes existentes y su procedencia. Las seis fichas `meta.json` ahora indican revisión editorial 2026-11-12.

| Artículo | Sustituciones en primera pasada | Hallazgo / cambio sustentado |
| --- | ---: | --- |
| `blue-french-bulldog-hair-loss` | 8 | No existe una única variante D-Locus: UC Davis identifica d1, d2 y d3, y heterocigotos compuestos; genotipo dilute no prueba CDA. Diferenciar condición cosmética y foliculitis/infecciones secundarias. |
| `fluffy-french-bulldog-health` | 8 | FGF5 tiene varias variantes probadas, L4 se registra en French Bulldogs; no extrapolar salud BOAS ni salud general por el pelo. Evitar promesas de registro o frecuencias rígidas de cepillado sin fuente. |
| `french-bulldog-with-longer-snout` | 10 | Packer 2015: umbral CFR 0,5 observado **en la muestra multirracial**, no zona segura universal ni garantía de salud de la raza; descartar inferencia de mestizaje por longitud de hocico; salud respiratoria exige evaluación funcional. |
| `merle-french-bulldog-health-risks` | 8 + 2 aperturas | Complejidad de PMEL, tamaño de alelos y mosaicismo. Strain 2009: porcentajes de BAER provienen de muestra de 153 perros de **varias razas**, no tasas de bulldog francés. Retirar inferencia de riesgo individual «siete veces» y mejorar advertencias de cría. |
| `mini-french-bulldog-health` | 15 | Mini/micro/teacup son etiquetas no estandarizadas; ni certificados ni peso solo prueban ancestros o ausencia de patología. Retirar supuestos sin soporte sobre origen de ejemplares pequeños y sobre incidencia extra de anestesia y distocia en el subgrupo. |
| `white-french-bulldog-deafness` | 12 | Quitar afirmación «la mayoría de white Frenchies oye normalmente» sin prevalencia representativa; distinguir piebald, merle y pigmentación crema/blanca por dilución de feomelanina; BAER como prueba más definitiva, no deducción por pelaje. |

## Comprobaciones de fuentes exactas (consultadas 2026-11-12)

- **UC Davis Veterinary Genetics Laboratory, *Dilute (D Locus/Blue)*:** https://vgl.ucdavis.edu/test/dilute-dog — variantes MLPH d1, d2, d3. Ya figuraba como **F204** en registro; se añadió uso verificable en Blue Hair Loss ref. #5.
- **Merck Veterinary Manual, Moriello, *Hereditary Alopecia and Hypotrichosis in Animals***: https://www.merckvetmanual.com/integumentary-system/congenital-and-inherited-anomalies-of-the-integumentary-system/hereditary-alopecia-and-hypotrichosis-in-animals — CDA, inspección/biopsia y cuidado de infecciones secundarias. Ya figura en cada HTML pertinente.
- **UC Davis, *Coat Length*:** https://vgl.ucdavis.edu/test/coat-length-dog — FGF5, L4 y herencia recesiva. Reutiliza cita #1 de Fluffy.
- **UC Davis, *Merle*:** https://vgl.ucdavis.edu/test/merle — variantes PMEL complejas, resultados de mosaico y limitaciones; dos merle genéticos pueden presentar riesgos, no basta mirar el manto.
- **Strain et al. 2009, *Prevalence of Deafness in Dogs Heterozygous or Homozygous for the Merle Allele***: https://doi.org/10.1111/j.1939-1676.2008.0257.x — muestra multicasta de 153 perros, no tasa representativa de French Bulldogs; en el artículo original #2 de Merle y #4 de White.
- **Merck, *Deafness in Animals*:** https://www.merckvetmanual.com/ear-disorders/deafness/deafness-in-animals — asociación fenotípica con piebald/merle, unilateralidad y BAER.
- **UC Davis, *Intensity Dilution*:** https://vgl.ucdavis.edu/test/intensity-dog — variación de feomelanina a crema/blanco en French Bulldogs. **F257, fuente nueva**; uso en White Deafness ref. #5. No respalda prevalencia de sordera.
- **Packer et al. 2015, *Impact of Facial Conformation on Canine Health***: https://doi.org/10.1371/journal.pone.0137496 — estudio de 700 perros de diferentes razas y confirmación en 154 braquicéfalos; riesgo BOAS por relación longitud hocico/cráneo, pero sin universalizar umbral a toda la raza.
- **French Bull Dog Club of America, *Health Testing and Registries*:** https://frenchbulldogclub.org/health/testingregistries/ — exige hip, CAER, patella, cardiac para CHIC y recomienda RFGS; sin certificación de salud completa.
- **AKC, *Official Standard of the French Bulldog***: https://images.akc.org/pdf/breeds/standards/FrenchBulldog.pdf — documento de conformación 2018 (no norma clínica). Define peso máximo de exposición, colores admitidos, merle y largo de pelaje descalificatorios.

**Fuentes registradas:** **257** (antes 256): F257 nueva, F204 reutilizada; no registrar como revisada una fuente genérica no inspeccionada. Las afirmaciones sin tasas representativas se formularon como incertidumbre, no se sustituyeron por cifras inventadas.

## QA de código y SEO

- Las seis páginas conservan slugs originales y metadatos de imágenes. No se generaron fotos ni se alteraron derechos, alt ni rutas.
- Se comprobaron por código las referencias `#ref-N`, la existencia de sus IDs, la unicidad de IDs, sintaxis JSON y metadatos de revisión.
- Se mantuvieron títulos SEO y metas existentes. La primera oración de Merle se acortó hasta respetar umbral editorial interno.
- No se ejecutaron Keyword Planner, pruebas de SERP, build Astro, QA móvil, Cloudflare, GSC, datos estructurados renderizados, comprobación integral de links de las 56 páginas ni revisión veterinaria profesional.

## Advertencia de contabilidad de auditoría

El último resumen histórico describía **34/56** artículos revisados en profundidad antes de esta tanda. Sumando estas **seis páginas distintas**, el **total histórico declarado** sería **40/56** (16 restantes). **Pero la columna `lead_citations_checked` de la matriz anterior identificaba solo 24 `targeted_claims_checked`**; ahora identifica **30**, y otros **26** aún muestran `anchor_integrity_only`. Hay, por lo tanto, una **diferencia sin conciliar de 10** entre el total histórico declarado y el campo operativo de revisión. No tomar 40 como cantidad individualmente certificada por esa columna hasta localizar la trazabilidad precisa del primer grupo de diez.

## Bloqueos de publicación

- **No fusionar ni publicar.** PR apilado sobre #37 y todos sus predecesores.
- Resolver imágenes hero faltantes (incluidas estas páginas) y verificar derechos de las fotografías existentes.
- Revalidar todas las fuentes sensibles antes del pase clínico definitivo, pruebas Astro/JSON-LD/hreflang, vista móvil, Cloudflare y GSC.
- Conciliar contador histórico de auditorías en la matriz antes de declarar el lote completo.

**Resultado:** correcciones documentadas con fuentes y límites explícitos, no certificación final de medicina veterinaria ni del sitio.
