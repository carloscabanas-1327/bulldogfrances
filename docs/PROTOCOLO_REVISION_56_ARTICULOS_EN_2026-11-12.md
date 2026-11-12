# Revisión de los 56 artículos EN: inventario visual y protocolo
**Fecha:** 2026-11-12. **Estado:** inventario preliminar de evidencias, NO auditoría terminada.

## Inventario confirmado
- 28 guías bajo `editorial/en/guides/` y 24 guías bajo `editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/` (52 guías).
- 4 artículos adicionales de nutrición en `src/pages/[lang]/nutrition/[article]/index.astro` (56 páginas EN en total): `how-much-should-a-french-bulldog-eat`, `best-food-for-french-bulldogs`, `french-bulldog-food-allergies`, `safe-treats-for-french-bulldogs`.
- `data/imagenes/registro.json` documenta **20 imágenes**; hay **19/52 guías** con una asignación explícita en ese registro y **33/52** sin ella. **No deducir que carecen de imagen:** puede haber HTML o metadatos con imagen aún no incorporada al registro.
- Las cuatro páginas de nutrición usan URLs externas de Unsplash en su plantilla y requieren investigación de relevancia, derechos/atribución, rendimiento y reemplazo cuando corresponda.
- El PR #17 se fusionó en `main` con commit `149bdae5e71e2a1f8c1518a66d0216cfc20695da`.

## Criterios obligatorios para cada corrección sucesiva
**I. Keywords e intención.** Consultar KP US/en; distinguir volumen mensual de competencia publicitaria y dificultad orgánica. Elegir palabra principal respaldada, resolver la intención en el título y primer párrafo, dar respuesta práctica inmediatamente. Aplicar variantes a H2 solo de manera natural. Comprobar canibalización.

**II. Fuentes y medicina.** Revisar fuente exacta de cada dato clínico/numérico; DOI para investigación, páginas específicas de colegios veterinarios, universidades y fuentes primarias. Registrar el nexo afirmación-fuente y el estado de verificación. Vancouver y citas próximas. No afirmar revisión profesional inexistente; no dar tratamientos individualizados o dosis. Señalar urgencias claramente.

**III. SEO técnico.** Revisar título SEO (límite editorial 56 caracteres), meta descripción (120 a 158), ruta, canonical, enlace a contraparte si existe, Article y BreadcrumbList. Autoría y dateModified solo si corresponden con trabajo acreditado. **FAQ visibles son útiles; FAQ rich results de Google se retiraron en mayo de 2026** y no justifican implantar FAQPage para buscarlos. Evitar añadir MedicalWebPage/HealthTopicContent por automatismo o como promesa de ranking. Validar JSON-LD con pruebas actuales.

**IV. Imágenes.** Una imagen principal pertinente para cada artículo, de preferencia propia con derechos probados o generada con IA y debidamente registrada. En salud no inventar rasgos diagnósticos. La escena debe ser anatómicamente posible y aportar al tema, no una foto decorativa repetida. Verificar archivo físico, WebP/AVIF si corresponde, ancho y alto, proporciones y peso. Texto ALT describe con precisión lo visible: nunca llenar de keywords. La foto principal visible no usa lazy; las secundarias fuera de pantalla sí pueden usarlo. Para cada imagen: `image_id`, `web_file`, `master_file`, `source_type`, `rights_status`, `alt_en`, `width`, `height`, `articulos`, `review_status`.

**V. Experiencia y medición.** Jerarquía H2-H3, tabla legible en móvil, botón de búsqueda útil en urgencias, enlaces internos EN->EN, sin ruido publicitario. LCP, CLS, INP y tráfico solo tras mediciones reales de campo o laboratorio: no asumir buenas métricas por diseño minimalista. No afirmar que E-E-A-T sea una puntuación o que schema garantice rankings.

**VI. Cierre verificable.** Para declarar terminado un artículo exigir: contenido revisado, cada fuente comprobada, KW investigada, revisión de enlaces y seguridad, imagen publicada con derechos, atributos, meta y QA técnico. Si faltan ítems, mantener estado pendiente y anotar la causa. No cambiar sin pruebas los 56 artículos en una sola operación.

## Inventario y asignaciones comprobadas en registro
| Slug | Origen | Imagen asociada al registro | Revisión de calidad |
|---|---|---|---|
| `blindness-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `blue-eyed-french-bulldog` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `can-french-bulldogs-be-left-alone` | english-guides | /images/photos/pied-puppy-cushion.webp | Pendiente: contenido, citas, HTML, imagen física |
| `demodectic-mange-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `distemper-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `ear-mites-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `fleas-on-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `flying-with-a-french-bulldog` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `food-aggression-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-farts` | english-guides | /images/photos/black-puppy-teddy.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-going-blind` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-lifespan` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-puppy-care` | english-guides | /images/photos/fawn-and-black-puppies.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-shedding` | english-guides | /images/photos/pied-blue-puppy-plush.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-stairs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-tail-spine` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-temperament` | english-guides | /images/photos/kids-and-frenchie-ai.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-too-skinny` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `frenchton` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `how-much-do-french-bulldogs-sleep` | english-guides | /images/photos/pied-puppy-resting.webp | Pendiente: contenido, citas, HTML, imagen física |
| `how-often-should-a-dog-poop` | english-guides | /images/photos/merle-puppy-pink-collar.webp | Pendiente: contenido, citas, HTML, imagen física |
| `how-often-to-bathe-a-french-bulldog` | english-guides | /images/photos/white-puppy-blue-collar.webp | Pendiente: contenido, citas, HTML, imagen física |
| `how-to-potty-train-a-french-bulldog` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `how-to-train-a-french-bulldog` | english-guides | /images/photos/pied-puppy-portrait.webp | Pendiente: contenido, citas, HTML, imagen física |
| `kennel-cough-in-dogs` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `overweight-french-bulldog` | english-guides | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `pied-french-bulldog` | english-guides | /images/photos/pied-puppy-sweater.webp | Pendiente: contenido, citas, HTML, imagen física |
| `puppy-socialization` | english-guides | /images/photos/puppies-together.webp | Pendiente: contenido, citas, HTML, imagen física |
| `blue-french-bulldog-hair-loss` | imported | /images/photos/blue-puppy-sitting.webp | Pendiente: contenido, citas, HTML, imagen física |
| `double-merle-french-bulldog` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `fluffy-french-bulldog-health` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-aggression-behavior` | imported | /images/photos/black-puppy-lying.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-back-pain-weak-legs` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-breeder-health-tests` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-crying-whining` | imported | /images/photos/puppy-in-hands.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-diarrhea` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-dry-nose` | imported | /images/photos/white-puppy-black-ears.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-first-heat-care` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-heat-safety` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-human-allergies` | imported | /images/photos/black-puppy-blue-collar.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-noisy-breathing` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-puppy-health-checklist` | imported | /images/photos/brindle-puppy-sitting.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-puppy-paperwork` | imported | /images/photos/white-puppy-eye-patch.webp | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-red-eyes` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-tail-pocket` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-vomiting` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `french-bulldog-with-longer-snout` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `merle-french-bulldog-health-risks` | imported | /images/photos/merle-puppy.webp | Pendiente: contenido, citas, HTML, imagen física |
| `mini-french-bulldog-health` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `pregnant-french-bulldog-care` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `senior-french-bulldog-care` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |
| `white-french-bulldog-deafness` | imported | Sin asignación en el registro | Pendiente: contenido, citas, HTML, imagen física |

## Nutrición (plantilla distinta)
| Slug | Imagen actual de plantilla | Estado |
|---|---|---|
| `how-much-should-a-french-bulldog-eat` | Imagen remota de Unsplash | Revisión de derechos, precisión y SEO pendiente |
| `best-food-for-french-bulldogs` | Imagen remota de Unsplash | Revisión de derechos, precisión y SEO pendiente |
| `french-bulldog-food-allergies` | Imagen remota de Unsplash | Revisión de derechos, precisión y SEO pendiente |
| `safe-treats-for-french-bulldogs` | Imagen remota de Unsplash | Revisión de derechos, precisión y SEO pendiente |

## Prioridades inmediatas
1. `french-bulldog-lifespan`: 12.100 búsquedas mensuales US/en según consulta directa KP de 12 nov 2026. Revisar evidencia de 9,8 años vs 4,53 años, redacción y gráfico/foto adecuada.
2. `french-bulldog-noisy-breathing`: mejora de texto fusionada; pendiente comprobar imagen clínica/editorial y la carga real en navegador.
3. `french-bulldog-heat-safety`, `french-bulldog-back-pain-weak-legs`: alta sensibilidad médica, imágenes precisas y alertas de urgencia.
4. Nutrición: evaluar la plantilla aparte, reemplazo de imágenes externas cuando no se pueda documentar calidad, derechos y pertinencia.

> Estado: auditoría preliminar basada en inventarios y registro documental. **No afirma que se hayan abierto los 56 ARTICLE.html, verificado 56 juegos de referencias, ni medido PageSpeed.**
