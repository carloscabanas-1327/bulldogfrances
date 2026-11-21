# Adecuación de lo ya publicado a las directivas (Directiva 9)

Registro pedido por la Directiva 9 de README_FIRST (v1.00, 20/11/2026). Texto completo de las directivas 6 a 12: archivos del proyecto, `directivas/readme-first/`.

Revisión del 21/11/2026 sobre el build completo (151 páginas indexables: 114 artículos y 37 portadas, secciones y páginas legales). Carlos dio el OK el 21/11 para aplicar las Directivas 6, 9 y 11 sin la prueba previa en 2 páginas.

## Cómo se comprobó

Script sobre `dist/` después de `npm run build`, página por página:

- **H**: un solo H1 por página. (La revisión de los H2 contra las listas KP de la Directiva 1 no se repitió acá: está en las auditorías SEO del 12/11 y en el PR #58.)
- **Metadatos**: `<title>`, `meta description`, `canonical`, `og:title`, `og:description`, `og:url`, `og:type`, `twitter:card`, JSON-LD y `fb:app_id`.
- **og:image**: 1200×630 con `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image` e `image_src`.
- **Foto HERO**: imagen principal después del H1 y antes del primer H2, con `fetchpriority="high"`, sin `loading="lazy"`, y `max-image-preview:large` en la meta robots.

## Resultado por plantilla

| Página o plantilla | Páginas | H | Metadatos | og:image | Foto HERO | Qué se corrigió y con qué PR | Qué falta |
|---|---:|---|---|---|---|---|---|
| Artículo EN (`src/pages/en/[category]/[slug].astro`) | 53 | Sí | Sí | Sí | Sí (salvo tamaño, ver pendiente 2) | Fecha visible "Published/Updated" igual a `datePublished`/`dateModified` (ISO con zona horaria); avisos al final según el tema (D11); recortes 16:9, 4:3 y 1:1 en el JSON-LD; `primaryImageOfPage`; `image_src`; `fetchpriority`; `data-nosnippet`; robots completo; `lastmod` del sitemap igual a `dateModified`; 8 descripciones llevadas a 140-160 caracteres. PR de directivas 6, 9 y 11 | Título de Google distinto del H1 (punto 12): espera decisión de Carlos |
| Artículo ES (`src/pages/es/[category]/[slug].astro`) | 53 | Sí | Sí | Sí | Sí (salvo tamaño, ver pendiente 2) | Lo mismo; 11 descripciones llevadas a 140-160 caracteres | Lo mismo |
| Artículo de alimentación EN/ES (`src/pages/[lang]/nutrition/[article]/`) | 8 | Sí | Sí | Sí | Sí | Lo mismo (el aviso del final pasó a ser por tema); 1 descripción (EN y ES) | Lo mismo |
| Portadas `/`, `/en/`, `/es/` | 3 | Sí | Sí | Sí | No aplica | `WebSite` con `name` y `alternateName` (también en la raíz); `WebPage` con `primaryImageOfPage` | Descripciones fuera de 140-160 caracteres: van en el PR #58 |
| Secciones y páginas legales (`src/pages/[lang]/[slug]/index.astro`) | 34 | Sí | Sí | Sí | No (sin foto propia) | Como dice el punto 4b, muestran la foto de la portada al compartir y en el JSON-LD; `data-nosnippet` en menú, migas y pie | Descripciones fuera de 140-160 caracteres; esa plantilla la reescribe el PR #59, así que se ajustan después de fusionarlo para no pisarlo. No se agrega una foto visible: la regla de imágenes de Carlos no deja repetir fotos en el mismo idioma |

## Pendientes y choques con otras reglas

1. **Título igual al H1 (D6, punto 12)**: en 110 de 114 artículos el `<title>` usa el título corto para búsquedas (`seoTitle`) y el H1 el título largo. Se le preguntó a Carlos cuál usar.
2. **Imagen principal (D6, puntos 1.1 y 1.3)**: 31 artículos usan como imagen principal una de 16 fotos de menos de 1200 px de ancho (768 a 1147 px; por ejemplo `/images/photos/fawn-and-black-puppies.webp`, 768×821), así que sus recortes de 1200 px salen agrandados. El golpe de calor en español usa una historieta con texto (`comic-coche-calor-ai.webp`). Además, muchos artículos usan una infografía con texto, que en miniatura se lee poco. Cambiarlas por fotos más grandes es un cambio visible, foto por foto, y necesita el OK de Carlos.
3. **Descripciones de secciones, portadas y páginas legales**: 34 fuera de 140-160 caracteres, después de los PR #58 y #59.
4. **Avisos (D11)**: el tipo de aviso sale de la categoría y de palabras de la URL. Un artículo puede fijarlo a mano con `"notices": ["health","human","safety","legal"]` en su `meta.json` (`[]` = sin avisos, como el carácter del bulldog o el frenchton; `human` = alergias de personas). Se quitó la línea vieja "Última revisión… / Last reviewed…" que 30 artículos tenían dentro del texto, porque repetía el aviso y a veces mostraba otra fecha. Las advertencias urgentes siguen dentro del texto de cada artículo.
