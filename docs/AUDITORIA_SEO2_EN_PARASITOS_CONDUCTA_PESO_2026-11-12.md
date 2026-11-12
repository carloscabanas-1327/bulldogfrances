# AUDITORÍA SEO 2 — Inglés — Parásitos, conducta y condición corporal
**Fecha editorial:** 2026-11-12 · **Rama:** `audit/seo2-parasites-behavior-weight-2026-11-12` · **Estado:** revisión focalizada de contenido y fuentes, sin aprobación veterinaria profesional ni fusión/publicación.

## Alcance
Esta tanda revisa **seis** artículos ingleses ya existentes:
`demodectic-mange-in-dogs`, `ear-mites-in-dogs`, `fleas-on-dogs`, `food-aggression-in-dogs`, `overweight-french-bulldog` y `french-bulldog-too-skinny`.

Se conservaron URLs, H1, categorías y enlaces internos. Se revisaron afirmaciones de riesgo, consejo potencialmente peligroso, extrapolación de cohortes, primer párrafo de intención de búsqueda, FAQ, referencias numeradas y trazabilidad en `data/fuentes/registro.json`.

## Hallazgos y acciones comprobadas
| Artículo | Riesgo editorial detectado | Corrección |
|---|---|---|
| Demodectic Mange in Dogs | Se podía interpretar «cero casos adultos entre 295» como riesgo nulo para la raza; cronología rígida del inicio adulto; falta advertencia de isoxazolinas | Aclarar muestra y denominador; evaluar posibles enfermedades inmunosupresoras sin edad universal; FDA neurológica y uso extra-label descrito por Merck; diagnóstico/seguimiento veterinario |
| Ear Mites in Dogs | Parecía que una oreja con secreción oscura probaba ácaros; tratamiento universal para toda mascota sin valorar contacto; duración única del tratamiento; advertencia neurológica incompleta | Revisión otoscópica/microscopía; decidir tratamiento de animales en contacto; seguir etiqueta del producto; FDA original sobre isoxazolinas |
| Fleas on Dogs | Afirmación categórica de que no hay resistencia a insecticidas; pauta de pulverización doméstica repetida cada 7–10 días; productos como si todos fueran mensuales; toxicidad de permetrina para gatos | Eliminar afirmación no demostrada, evitar pauta pesticida universal; producto/especie/intervalo según etiqueta; alertas para cachorros, gatos y antecedentes neurológicos |
| Food Aggression in Dogs | Convertía «possessive» en el estándar FCI en prevalencia conductual de bulldogs; una guía casera para quitar el plato podría exponerse a mordeduras; estudio de refugio extrapolado al hogar | FCI no es estudio de prevalencia; priorizar gestión de espacios y evaluación por profesional; impedir ejercicios de retirar el plato en perros que ya gruñen/amenazan; AAHA + ASPCA |
| Overweight French Bulldog | Límites de peso de exposiciones confundibles con peso médico ideal; asociación en estudio del sueño tratada como pronóstico; experimento vitalicio en labradores extrapolado a French Bulldogs | Priorizar BCS y condición muscular; aclarar muestras y correlación; no prometer años ganados en otra raza ni dieta sin examen |
| French Bulldog Too Skinny | Ganancia semanal de cachorro calculada con una fórmula global presentable como objetivo individual; muestra de referencia de 73 perros con BOAS asumible como prevalencia de raza; riesgo de sobrediagnóstico | Utilizar curvas de crecimiento y vigilancia clínica; declarar sesgo de selección; distinguir pérdida real de peso, trastorno digestivo y condición corporal |

## Fuentes verificadas y exactas
- **F255 (fuente primaria regulatoria, reutilizada tres veces):** [U.S. Food and Drug Administration, Fact Sheet: Potential Adverse Events Associated with Isoxazoline Flea and Tick Products](https://www.fda.gov/animal-veterinary/animal-health-literacy/fact-sheet-pet-owners-and-veterinarians-about-potential-adverse-events-associated-isoxazoline-flea). Sección «Fast Facts» y «What should I know?». **No** se interpreta el aviso como tasa de incidencia o prueba de que sean inadecuadas para la mayoría de perros.
- **F256 (guía profesional de conducta):** [AAHA, Changing Behaviors](https://www.aaha.org/resources/2015-aaha-canine-and-feline-behavior-management-guidelines/changing-behaviors/). «Aversive techniques». Complementada con [ASPCA, Food Guarding](https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/food-guarding), particularmente sus precauciones para perros que ya amenazan y hogares con niños.
- **Fuentes ya presentes conservadas por afirmación:** [Merck, Mange in Dogs and Cats](https://www.merckvetmanual.com/integumentary-system/mange/mange-in-dogs-and-cats) (demodicosis y otodectes); [CAPC, Fleas](https://capcvet.org/guidelines/fleas/) (control y entorno); [Merck, Body Condition Score Scales](https://www.merckvetmanual.com/multimedia/table/body-condition-score-scales-for-dogs-and-cats) (interpretación de BCS). Las cifras de VetCompass y estudios de sueño se atribuyen a sus cohortes exactas, no a riesgo absoluto individual.
- Bibliografía interna: **256 fuentes** en `data/fuentes/registro.json`, incluidas F255 y F256. La cifra es inventario, **no** garantía de que todos los enlaces de las 256 estén vivos hoy.

## Controles ejecutados
Se recuperaron desde GitHub los seis `ARTICLE.html` y los seis `meta.json` modificados; comprobación de:
- títulos SEO con sufijo: **50–53** caracteres (umbral editorial interno máximo de 56);
- descripciones: **143–157** caracteres (umbral interno 120–158);
- primera oración: **26–137** caracteres y palabra clave primaria presente en primera entradilla;
- **0** referencias numéricas `#ref-N` sin definición `id=ref-N`;
- **0** identificadores bibliográficos duplicados en las seis páginas;
- etiquetas `lastReviewed=2026-11-12` significan revisión editorial de fuentes y texto, no revisión por un profesional sanitario.

## Estado general acumulado
- Inventario EN y normalización inicial: **56/56**.
- Revisión sustantiva documentada hasta PR #34: **19/56**.
- **Esta tanda: +6 = 25/56**, quedan **31** artículos sin revisión individual sustantiva del mismo nivel.
- Se mantienen las **23 guías sin imagen principal** y las cuatro imágenes de nutrición de alojamiento externo, a comprobar. Este PR no añade imágenes porque no se verificaron materiales clínicos con derechos y precisión suficientes.
- No se ejecutó el build Astro, validación de datos estructurados en HTML renderizado, accesibilidad/móvil, Core Web Vitals, Search Console o Cloudflare. No publicar.
- Los resultados KP previos siguen disponibles; **no se inventaron nuevas métricas** para esta tanda. Los títulos corregidos por intención no equivalen a volumen orgánico confirmado.

## Puerta de aprobación
Antes de fusionar: ejecutar `npm run build`, revisar enlaces exactos y JSON-LD renderizados, fotos/derechos y comprobar que las traducciones ES no queden contradictorias. Para afirmar «revisión veterinaria» se requiere un profesional habilitado, no solo documentación científica. El PR debe permanecer en borrador y apilado, sin fusión automática.
