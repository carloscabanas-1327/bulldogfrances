# BULLDOGFRANCES.COM — AUDITORÍA TÉCNICA Y SEO PREPUBLICACIÓN
**Fecha:** 13 de noviembre de 2026. **Base:** `audit/seo-es3-remaining-forty-2026-11-12` (PR #44). **Rama:** `audit/technical-seo-prepublish-2026-11-13`.

## Semántica de resultados

- **Verificado en código:** inspeccionado directamente en la rama; no equivale a HTTP, renderizado o despliegue comprobado.
- **Corrección aplicada:** guardada únicamente en la rama de este PR, no en producción.
- **Pendiente de ejecución:** necesita un entorno donde compilar Astro o consultar Cloudflare/GSC.
- **Bloqueo editorial/comercial:** requiere información y aprobación del propietario o documentación externa.

## Inventario estático y SEO encontrado en el repositorio

| Área | Evidencia verificada en archivos | Resultado |
|---|---|---|
| Framework y despliegue | Astro ^5, `output: 'static'`, `trailingSlash: 'always'`, `site: https://www.bulldogfrances.com` | Configuración coherente, **build aún no ejecutado** |
| Contenido | 24 artículos EN importados + 28 guías EN adicionales + 4 nutricionales EN; 52 guías ES + 4 nutricionales ES | **56 EN + 56 ES en archivos**; publicación efectiva pendiente de build/crawl |
| Rutas | Raíz bilingüe, dos portadas, categorías, páginas auxiliares, artículos y búsquedas | Se esperan **151 rutas HTML** (incluye 2 páginas de búsqueda noindex), sin contar 404; confirmar tras build |
| Canonical | `src/components/Seo.astro` deriva la URL absoluta a partir de `SITE + path` | Arquitectura correcta; falta verificar su salida HTML real |
| Idiomas | `Seo.astro` usa `en-US` y `es`, condicionado a alternates; sitemap construye pares | Diseño recíproco previsto; **no se ha validado recíprocamente cada par renderizado** |
| Sitemap | `src/pages/sitemap.xml.js` construye rutas por idioma y pares; búsquedas excluidas | Se esperan **149 URL canónicas**; comprobar XML y ausencia de huérfanas tras build |
| Robots e indexación | `src/pages/robots.txt.js` anuncia el sitemap; `INDEXABLE = true` en `src/data/site.js` | **Alerta de lanzamiento**: contenido indexable mientras quedan bloqueos |
| Pruebas pages.dev | `public/_headers` declara `X-Robots-Tag: noindex` por host exacto y preview | Sintaxis compatible con Cloudflare; falta verificar encabezados HTTP recibidos |
| SEO social | `Seo.astro` genera Open Graph y Twitter; `public/og-default.jpg`, `apple-touch-icon.png`, héroes y banderas existen en repo | Presencia de archivos verificada; calidad, peso y derechos pendientes |
| Datos estructurados | `Article`, `BreadcrumbList`, y otras piezas JSON-LD generadas por páginas | Revisar parseo y URL mediante salida renderizada, sin prometer rich results |
| Migración Blogger | **133 reglas** en `public/_redirects`: ninguna sin destino o código incorrecto al analizar su estructura, sin fuentes duplicadas | Sintaxis **sin incidencia**; validez semántica de cada destino pendiente |
| Fuentes bibliográficas | Registro editorial con 266 fuentes y controles previos de referencias | Cobertura documental **no** equivale a nueva comprobación completa de destinos y afirmaciones |

## Hallazgos con riesgo de lanzamiento

**P0 — Aprobación y cumplimiento no cerrados**

1. `INDEXABLE = true` aunque las páginas `/en/about/`, `/es/about/`, políticas de privacidad y términos consignan que faltan identidad legal del responsable, un correo de contacto verificado y/o datos regulatorios. Se necesita información real y validación legal según jurisdicciones; **no inventar nombres, domicilios ni datos de contacto**. Las páginas están escritas como provisionales. **No se cambió INDEXABLE** para no afectar la estrategia del sitio sin decisión del propietario.
2. No se ha certificado el servidor público `https://www.bulldogfrances.com`, su redirección no-www → www, ni que las páginas tengan código HTTP 200 en Cloudflare. El acceso de inspección al dominio público no aportó una respuesta verificable en esta sesión.
3. No se pudo efectuar `npm ci` ni `npm run build` en el entorno actual porque el repositorio accesible mediante el conector no se pudo montar completo con dependencias. No se simulan resultados.

**P1 — Problemas editoriales y enlaces**

4. Las plantillas publicaban indiscriminadamente «Fuentes verificadas» o «Sources checked» sin acreditar auditoría completa de **cada** enlace y afirmación. Se sustituyó esa declaración por «Referencias documentales incluidas» y aviso de comprobación pendiente en las plantillas de guías ES, guías EN y nutrición.
5. Las tarjetas de nutrición etiquetaban artículos desarrollados como «vista editorial de prueba» o «artículos de muestra». Se cambió el rótulo por «guías» sin presentar esos textos como aprobados clínicamente.
6. En `public/_redirects`, **3 reglas dinámicas** (todas las antiguas entradas con fecha; etiquetas y páginas antiguas genéricas) envían visitantes a `/es/` independientemente del tema. Aunque son sintácticamente válidas, esos desvíos podrían ser redirecciones poco relevantes para Google. Se conservaron por cautela: **decidir caso por caso** si existe un artículo equivalente y redirigir a él, o permitir un 404/410 cuando ya no haya sustituto. No redirigir a portada por sistema.
7. Las imágenes principales de nutrición recibieron `width=1200` y `height=800` en el HTML para reservar espacio según los parámetros de su servicio externo. Siguen pendientes origen/licencia y disponibilidad efectiva, así como reducir dependencias de terceros.

**P1 — Validación técnica y multimedia faltante**

8. Se había detectado falta del campo `image` en metadatos de varias guías: **no** implica que el HTML final carezca de ilustración. La auditoría visual requiere contrastar ruta, pertinencia clínica, derechos, ALT, tamaño, formato, LCP/CLS y recorte móvil. La directiva `IMAGENES_USA_v1.0_PROPUESTA` sigue siendo una propuesta pendiente de aprobación, no un permiso para generar recursos clínicos artificiales.
9. La fuente `src/pages/[lang]/search/index.astro` emite `noindex` correctamente en código y sus dos rutas no aparecen en sitemap; el validador respeta esa exclusión. Confirmar en HTML generado.
10. Keyword Planner **no se ha consultado** por idioma/región; no afirmar posición, demanda ni potencial de tráfico sin datos. GSC/Cloudflare y métricas móviles sin lecturas en esta fase.

## Cambios en esta rama (sin afectar main)

- `src/pages/es/[category]/[slug].astro`: descripción fiel del alcance de comprobaciones editoriales.
- `src/pages/en/[category]/[slug].astro`: equivalente inglés.
- `src/pages/[lang]/nutrition/[article]/index.astro`: aviso documental honesto, rótulo «guía de alimentación» y dimensiones explícitas del hero.
- `src/pages/[lang]/[slug]/index.astro`: rótulo de categoría nutricional sin «artículos de muestra».
- `scripts/audit-technical-seo.mjs`: lector **solo lectura** del `dist/` producido por Astro; valida rutas, duplicados, canonical autorreferente, `hreflang`, JSON-LD parseable, sitemap, robots, imágenes internas, reglas de redirección y enlaces internos sujetos a revisión. Las respuestas HTTP 404 reales requieren una prueba separada contra Cloudflare. Los avisos no son aprobación automática de enlaces externos.
- `.github/workflows/technical-seo-audit.yml`: CI de PR con Node 22, `npm ci`, `npm run build`, script de auditoría. **No contiene pasos de despliegue, publicación ni merge.**

## Pruebas por ejecutar y condiciones para liberar

1. GitHub Actions debe ejecutar **build y auditoría** sobre el PR y conservar logs. Si falla: corregir la causa, no ocultar el bloqueo rebajando las pruebas.
2. Revisar una muestra representativa en navegador móvil y escritorio: portada raíz bilingüe, portada EN, portada ES, artículo clínico en cada idioma, nutrición, paginación y búsqueda. Obtener Lighthouse/Core Web Vitals y capturas de recortes.
3. Confirmar con respuestas HTTP reales: HTTP → HTTPS, no-www → www, 301 históricos de Blogger, errores 404, encabezado `X-Robots-Tag` en pages.dev, `robots.txt`, `sitemap.xml`, canonicals y noindex de búsquedas.
4. Exportar el reporte de auditoría de enlaces internos y verificar manualmente los **destinos documentales exactos** que respaldan afirmaciones de seguridad clínica. No confundir enlace HTTP 200 con pertinencia documental.
5. Inventario multimedia completo con licencias documentadas y consentimiento cuando corresponda; verificar formato/altura/anchura y fuentes de Unsplash.
6. Completar identidad legal, privacidad/contacto y estado de afiliación real, sin afirmar alianzas comerciales inexistentes.
7. Analizar Keyword Planner por mercado español, GSC y estrategia EN-US; las modificaciones editoriales no son garantías de ranking.
8. Solo después de corregir fallas, obtener autorización expresa para fusionar cadena de PR y publicar.

**Resultado actual:** se han realizado correcciones seguras en rama, y se ha incorporado un mecanismo para pruebas reales, pero **la auditoría técnica renderizada y el sitio público no están certificados**. Mantener PR en borrador y sin fusión.

## Documentación de referencia

- Cloudflare Pages, _Redirects_: https://developers.cloudflare.com/pages/configuration/redirects/ (sintaxis, reglas dinámicas y precedencia).
- Cloudflare Pages, _Headers_: https://developers.cloudflare.com/pages/configuration/headers/ (reglas de host absolutas permitidas).
- Google Search Central, _Localized versions_: https://developers.google.com/search/docs/specialty/international/localized-versions (autorreferencias, reciprocidad y códigos).
- Google Search Central, _Canonical URLs_: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls (canonical por idioma, URL absolutas).
- Google Search Central, _Structured data policies_: https://developers.google.com/search/docs/appearance/structured-data/sd-policies (no garantiza resultados enriquecidos).
