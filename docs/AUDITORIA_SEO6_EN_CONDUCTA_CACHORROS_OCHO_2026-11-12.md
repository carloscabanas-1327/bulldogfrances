# BULLDOGFRANCES.COM — AUDITORÍA SEO 6, 8 guías EN

**Fecha:** 12 de noviembre de 2026. **Rama:** `audit/seo6-behavior-puppies-eight-2026-11-12`, sobre PR #38. **Alcance:** ocho artículos que figuraban `anchor_integrity_only` antes de esta tanda. **Estado:** revisión focalizada documentada, no aprobación veterinaria profesional ni QA de publicación.

## Correcciones por página

| Página / slug | Correcciones al HTML | Hallazgo |
| --- | ---: | --- |
| `can-french-bulldogs-be-left-alone` | 9 + cita nueva | El umbral de cuatro horas proviene de recomendaciones generales de ONG británicas, no es una garantía de seguridad para todos los perros. Retiramos la inferencia de que superar una hora solo permite ausencias largas y la observación exclusivamente en los primeros 30-60 minutos. |
| `french-bulldog-temperament` | 9 | El estándar FCI es descriptivo: «possessive» no cuantifica protección de recursos. Diferencia aOR clínico de un pronóstico individual; seguridad con niños y convivencia con gatos no garantizada. |
| `how-to-potty-train-a-french-bulldog` | 11 + cita nueva | Regla hora/mes y tablas por edad son aproximaciones, no máximos médicos. Retirar recomendación de restringir agua por la noche, evitar interrupciones aversivas y corregir confusión entre lejía y amoníaco. |
| `how-to-train-a-french-bulldog` | 9 | Sesiones de 5-10 minutos como ejemplo no obligación; estudio de 92 perros no específico de Frenchie; no sobregeneralizar protección respiratoria por arnés; advertencia ante mordidas/guardia. |
| `puppy-socialization` | 9 | Los primeros tres meses son un periodo sensible, no cierre abrupto; estudio de 279 asistentes vacunados sin parvo no implica riesgo cero. Eliminar eslogan de muerte infantil fuera de contexto; clases, vacunas y exposición sin miedo. |
| `french-bulldog-puppy-care` | 9 | WSAVA 2024: vacunas básicas cada 2–4 semanas hasta 16+ semanas (18–20 si hay más riesgo) y revacunación 26+ semanas o serología. No imponer frecuencia de comidas, aseo de pliegues ni revisiones idénticas; quitar estadística de intoxicaciones innecesaria. |
| `french-bulldog-aggression-behavior` | 10 | O'Neill 2021: agresividad aOR 0,64 (IC 95%: 0,44–0,93) de **diagnósticos en expedientes británicos**, no probabilidad de mordedura individual. Reforzar barreras con niños, atención veterinaria y evitar castigar gruñidos o hacer intercambios con perros agresivos. |
| `french-bulldog-crying-whining` | 9 + cita nueva | No etiquetar todo llanto como demanda de atención ni normalizar dolor, disnea o angustia. Señales neurológicas urgentes y ansiedad por separación; no ignorar un animal angustiado. |

**Total:** 75 sustituciones de pasajes en HTML (72 planificadas + tres ajustes adicionales de seguridad); se añadieron citas numeradas en tres archivos reutilizando dos referencias documentales nuevas. Se actualizaron las ocho fichas `meta.json`, **17 respuestas FAQ existentes** en seis de ellas, y una descripción SEO de agresividad para evitar una afirmación demasiado amplia.

## Fuentes exactas y límites de interpretación

1. ASPCA, *Separation Anxiety*: https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/separation-anxiety — síntomas, diagnóstico diferencial, desensibilización gradual y ayuda profesional. **F258**, en `can-french-bulldogs-be-left-alone` ref. 13 y `french-bulldog-crying-whining` ref. 4. No diagnosticar angustia por la sola vocalización.
2. American Humane Society, *Housetraining Puppies & Dogs* (actualizada mayo 2026): https://www.americanhumane.org/public-education/housetraining-puppies-dogs/ — rutina, recompensa, accidentes sin castigo. **F259**, `how-to-potty-train-a-french-bulldog` ref. 12. Esta fuente **no** avala retirar agua para evitar accidentes.
3. AVSAB, *Humane Dog Training Position Statement* (2021): https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf — recomendación de entrenamiento sin aversivos. Posición reafirmada por la asociación en 2025: https://avsab.org/resources/position-statements/ .
4. AVSAB, *Puppy Socialization Position Statement*: https://avsab.org/wp-content/uploads/2024/12/Puppy-Socialization-Position-Statement-FINAL.pdf — primeros tres meses, exposición positiva, clases con requisitos de vacunas y desparasitación. No convierte un estudio seleccionado en estimación universal.
5. WSAVA, *2024 guidelines for the vaccination of dogs and cats*: https://doi.org/10.1111/jsap.13718 — esquema core y precauciones de socialización antes de completar la serie; mantener la elección de vacunas con el veterinario y según normativa aplicable.
6. O'Neill et al. (2021), *French Bulldogs differ to other dogs in the UK in propensity for many common disorders*: https://doi.org/10.1186/s40575-021-00112-3 — aOR agresividad 0,64; IC 0,44–0,93, ajustada por covariables; **no** prevalencia de mordeduras en el público de EE. UU.
7. AAHA, *Changing behaviors*: https://www.aaha.org/resources/2015-aaha-canine-and-feline-behavior-management-guidelines/changing-behaviors/ — método no aversivo y peligro de suprimir señales de agresión; directrices generales para la práctica veterinaria, no prevalencia específica de raza.

Se conservaron referencias bibliográficas preexistentes apropiadas en cada HTML. No se inventaron DOI, cifras de Keyword Planner ni nuevos estudios. El registro documental pasa de **257 a 259** fuentes con fichas exactas y usos vinculados.

## QA estático y restricciones

- Ocho slugs existentes conservados, sin renombrar ni alterar rutas de imágenes.
- Ocho `meta.json` parseados, campo `lastReviewed=2026-11-12` y FAQ armonizadas donde existían.
- `#ref-N` resuelve a `id=ref-N` en todas las ocho guías; sin IDs bibliográficos duplicados.
- Controles editoriales sobre la primera oración, título SEO incluyendo marca y longitud de metadescripción; cifras y límites son internos, **no reglas de Google**.
- Sin ejecución de Keyword Planner para estos ocho términos, compilación `npm run build`, pruebas de navegador móvil, Cloudflare, GSC, revisión de licencias de imágenes o validación veterinaria profesional.
- La revisión de afirmaciones importantes es **focalizada**, no un aval clínico línea por línea de todo el contenido heredado.

## Contador: discrepancia histórica pendiente

Antes de esta tanda el acumulado histórico declarado decía **40/56** artículos con revisión individual; sumando estas ocho páginas nuevas da **48/56 históricos (8 por revisar)**. Sin embargo, la matriz solo tenía 30 páginas con campo `targeted_claims_checked`; ahora tiene **38/56 con revisión individual marcada y 18/56 con `anchor_integrity_only`**. La diferencia de **10 páginas** continúa sin conciliar. **No equiparar 48/56 a certificación verificable de la matriz** hasta cotejar expedientes antiguos y corregir su marca documental con evidencia.

**Restricción de cambios:** PR borrador apilado sobre #38 y anteriores; no fusionar, desplegar o modificar `main` sin autorización humana y QA completo.
