# AUDITORÍA SEO 2 — EN: Heatstroke e IVDD
Fecha de revisión: 2026-11-12. Rama: `editorial/seo2-heat-ivdd-2026-11-12`.
Estado: **correcciones editoriales en borrador; no completo**. Sin publicación ni validación de Cloudflare.

## Alcance y KP
Se auditan 2 de los 56 artículos EN. El inventario de `main` antes de esta rama registra 28 con imagen declarada (incluye 4 externas de nutrición) y 28 sin imagen principal; la declaración no prueba la imagen visible en navegador. Para `french bulldog overheating`, el informe KP US/en de 2026-11-12 registra 110 búsquedas/mes. **No hay métrica KP verificada** en esta tanda para las frases exactas `french bulldog heatstroke` o `french bulldog back pain`. Las variantes propuestas son hipótesis editoriales sujetas a KP, no volúmenes inventados.

## 1. French Bulldogs and Heat: How to Prevent Heatstroke
Ruta: `editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/french-bulldog-heat-safety`.
URL editorial: `/en/daily-care/french-bulldog-heat-safety/`.
Veredicto: **Correcciones importantes (metadatos contradictorios y claridad de urgencia)**.

| Gravedad | Dónde | Hallazgo | Corrección |
|---|---|---|---|
| Alta | `meta.json.description` | Afirmaba unas 5 veces las odds de golpe de calor, pero la fuente Hall et al. 2020 y el artículo revisado informan aOR 6,49 frente a Labradores. | Eliminar la cifra inconsistente de la meta y describir riesgo relativo sin convertir odds en probabilidad individual. |
| Media | Sección de primeros auxilios | La instrucción de llamar al veterinario estaba después del enfriamiento. | Llamar al profesional mientras comienza el enfriamiento; transporte inmediato sin demora. |
| Baja | H2 signos | Intención de búsqueda poco explícita. | H2 orientado a signos de heatstroke; evitar rellenar de keywords. |
| Baja | H2 «80°F» | La edición US requiere equivalencia Celsius. | Añadido 27°C como aproximación. |
| Media | Imagen | Sin principal declarada ni verificada en `main`. | Pendiente generar/aprobar e incorporar WebP con derechos y alt. |

Fuentes:
- [1] Hall EJ et al. *Scientific Reports*. 2020. `https://doi.org/10.1038/s41598-020-66015-8`. **Contrastada anteriormente en la tabla científica; aOR 6,49 (French Bulldog vs Labrador).**
- [2] Cambridge BOAS, Recognition & Diagnosis. `https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis`. **Apertura directa no reconfirmada en esta tanda; revisar.**
- [3] Royal Veterinary College. *Cool first, transport second* (20 Jul 2023). `https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second`. **Verificada mediante contenido recuperado de la página.**
- [4] RVC. *How to Cool Hot Dogs* (PDF). **No se reabrió directamente en esta tanda. No marcar completamente verificada.**

## 2. French Bulldog Back Pain and Weak Back Legs: IVDD Signs and Care
Ruta: `editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/french-bulldog-back-pain-weak-legs`.
URL editorial: `/en/health/french-bulldog-back-pain-weak-legs/`.
Veredicto: **Problemas importantes (respaldo científico y consejos de manejo excesivamente específicos)**.

| Gravedad | Dónde | Hallazgo | Corrección |
|---|---|---|---|
| Alta | CDDY / genética | La prueba podía interpretarse como diagnóstico o predicción individual de IVDD. | Aclarado que identifica una variante de riesgo; no diagnostica la enfermedad ni pronostica síntomas. |
| Alta | Anatomía vertebral | Se citaba a una red de rescate («Fad Colors») para una afirmación clínica sobre hemivértebras. | Sustituida por una sección específica del *Merck Veterinary Manual* comprobada. |
| Media | Tratamiento | «Varias semanas» de confinamiento y recaída frecuente sin cita específica. | Dejar indicación de duración y movilidad al veterinario. |
| Media | Estudios | «Tres veces más» sin distinguir razón de odds ajustada de probabilidad. | Aclarada aOR 3,00 del estudio O’Neill et al. (tabla 3). |
| Media | SEO | Título renderizado extenso, sin `seoTitle` corto, ni keyword declarada. | `seoTitle` breve y keyword declarada como hipótesis a comprobar con KP. |
| Media | Imagen | No hay imagen principal declarada en `main`. | Pendiente de imagen específica con derechos. |

Fuentes:
- [1] Cornell Riney Canine Health Center. *Intervertebral disc disease*. `https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/intervertebral-disc-disease`. **Verificada directamente.**
- [2] O'Neill DG et al. *Canine Medicine and Genetics*. 2021;8:13. `https://doi.org/10.1186/s40575-021-00112-3`. **Verificada en tabla 3 del PDF científico (aOR 3,00; IC95% 1,94–4,64).**
- [3] University of California, Davis, Veterinary Genetics Laboratory. *Chondrodystrophy (CDDY and IVDD) and Chondrodysplasia (CDPA)*. `https://vgl.ucdavis.edu/test/cddy-cdpa`. **Verificada directamente; genotipo ≠ diagnóstico.**
- [4] Merck Veterinary Manual. *Congenital and Inherited Spinal Cord Disorders in Dogs and Cats*, «Congenital Vertebral Malformations». `https://www.merckvetmanual.com/nervous-system/congenital-and-inherited-anomalies-of-the-nervous-system-in-small-animals/congenital-and-inherited-spinal-cord-disorders-in-dogs-and-cats`. **Verificada directamente (revisada Mar 2026, actualizada Jul 2026).**
- [5] AKC DNA Resource Center. *French Bulldog DNA Tests*. `https://www.akc.org/breeder-programs/dna/dna-resource-center/akc-dna-health/breed-specific-dna-testing-recommendations/french-bulldog-dna-tests/`. **Registro interno de verificación previa; apertura no reconfirmada en esta tanda.**

## QA y bloqueos
- Modificados 4 archivos editoriales HTML/JSON y el registro `data/fuentes/registro.json` (2 fuentes nuevas: F241, F242).
- Conservados slugs, rutas canónicas, URLs entre idiomas y tipos de schema de la plantilla.
- La plantilla añade ` | BulldogFrances.com` (21 caracteres) al `seoTitle`: el título final, no solo el campo, se mantuvo por debajo de 56 caracteres en estos dos artículos.
- **Pendiente antes de fusionar:** dos imágenes principales pertinentes, validar WebP y dimensiones, incorporar en HTML y registro, comprobar respuestas de todos los enlaces, build Astro, vista móvil, despliegue Cloudflare, y KP exacto de ambas intenciones.
- No hay validación veterinaria profesional ni medición actual de Search Console, Core Web Vitals o tráfico orgánico. El PR no debe marcarse completo sin esos controles.
