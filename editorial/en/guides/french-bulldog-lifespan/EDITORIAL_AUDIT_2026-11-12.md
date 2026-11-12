# Auditoría editorial EN — French Bulldog Lifespan — 2026-11-12

## Intención y SEO
- Destino: `/en/breed-characteristics/french-bulldog-lifespan/`.
- Palabra principal: `french bulldog lifespan`, **12,100 búsquedas mensuales estimadas** para US/en según consulta a Google Ads Keyword Planner del 2026-11-12. Esta cifra **no es tráfico esperado ni dificultad SEO**.
- Intención: ¿cuánto viven los bulldogs franceses?, ¿por qué difieren los estudios de 4.53 y 9.8 años?, ¿cómo proteger su salud?
- Título SEO: `French Bulldog Lifespan: How Long Do Frenchies Live?` (52 caracteres).
- Meta descripción: 145 caracteres, abre con la palabra clave.
- Conservar la ruta/slug; el titular resuelve la pregunta y la introducción no afirma una esperanza de vida específica en EE. UU.

## Evidencia verificada
1. **McMillan et al., Scientific Reports, 2024** — <https://doi.org/10.1038/s41598-023-50458-w>. 584,734 perros británicos; supervivencia mediana 12.5 años en conjunto y 9.8 años en bulldog francés. Datos por raza en [tabla oficial de Dogs Trust](https://www.dogstrust.org.uk/downloads/life-expectancy-breeds-table-2024.pdf), p. 1: 11,821 registros de bulldog francés, de los cuales 2,495 figuran fallecidos; IC95% 9.4–10.1 años. Estas cifras poblacionales no se trasladan sin más a un individuo o a EE. UU.
2. **Teng et al., Scientific Reports, 2022** — <https://doi.org/10.1038/s41598-022-10341-6>. Estimación 4.53 años para esperanza de vida al nacimiento, derivada de metodología distinta y muestra de 232 bulldogs franceses. Los autores advierten sesgo por edad y rápido crecimiento de popularidad.
3. **O'Neill et al., Canine Genetics and Epidemiology, 2018** — <https://doi.org/10.1186/s40575-018-0057-9>. De 98 muertes, 84 con causa conocida; los grupos cerebral y medular fueron los más frecuentes en esa muestra. **No generalizar porcentajes a todas las poblaciones.**
4. **Salt et al., Journal of Veterinary Internal Medicine, 2019** — <https://doi.org/10.1111/jvim.15367>. Incluyó 50,787 perros castrados de 12 razas norteamericanas y halló asociación de sobrepeso con menor duración de vida. **No incluyó bulldogs franceses**; no prueba beneficio causal específico para ellos.
5. **Hall et al., Scientific Reports, 2020** — <https://doi.org/10.1038/s41598-020-66015-8>. 395 episodios incidentes de enfermedad relacionada con calor, 56 mortales (14.18 %) en 2016, Reino Unido; no extrapolar esa letalidad a todo contexto.
6. **O'Neill et al., Canine Medicine and Genetics, 2021** — <https://doi.org/10.1186/s40575-021-00112-3>. OR ajustada BOAS 30.89 y trastornos medulares OR ajustada 3.00; no convertir OR a riesgo individual.
- McMillan 2024 tuvo una corrección editorial posterior (16 abril 2024), relativa a la leyenda de la Figura 3 del perro salchicha miniatura; no cambia las cifras 9.8/12.5 usadas en esta guía.

## Imagen y trazabilidad
- Portada: `/images/hero/french-bulldog-lifespan-mature-ai.webp` (1672×941 píxeles, WebP calidad 88, 233,884 bytes). Ilustración IA, no fotografía documental. Se indica claramente en pie y ALT.
- Infografía interior original: `/images/figures/french-bulldog-lifespan-uk-2024.svg`, conserva cita al estudio McMillan.
- La portada tiene carga `eager` y `fetchpriority=high`; la infografía secundaria usa `lazy`.
- Procedencia y condiciones en `data/imagenes/registro.json`, image_id `french-bulldog-lifespan-mature-garden-ai`.
- La misma portada se asignó a `meta.image` para Open Graph/Twitter, `Article.image`, imagen social y descripción alternativa. No confundir el artículo con el contenido sintético de la foto.

## Comprobaciones en la rama
- Verificados en GitHub el archivo WebP y el SVG, así como las rutas referidas por el HTML.
- Enlaces de navegación/citas: 27 anclas internas resueltas; 6 bibliografías numeradas sin duplicados.
- Título y descripción dentro de límites editoriales; palabra principal en título, primer párrafo y encabezado H2.
- El componente `Seo.astro` admite el imageALT, dimensiones y tipo; pies de imagen centrados, grises y en cursiva por `public/article.css`.
- **Sin revisión clínica de un veterinario**. **Sin compilación Astro ni confirmación de despliegue Cloudflare en esta auditoría**. No atribuir aumentos de tráfico ni Core Web Vitals sin medición.

## Estado
Revisión editorial, científica y visual completada a nivel de archivos. Validación en sitio publicado y evaluación de resultados Search Console pendientes.
