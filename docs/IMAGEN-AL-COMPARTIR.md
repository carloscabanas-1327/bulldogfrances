# Imagen al compartir (regla permanente de Carlos, 20/11/2026)

Cuando se comparte cualquier página de bulldogfrances.com (WhatsApp, Facebook, X, LinkedIn, Telegram, etc.), la vista previa del enlace debe mostrar **siempre la imagen del propio artículo**. Solo si la página no tiene imagen propia se usa la **imagen general** del sitio.

## Cómo funciona

1. `src/components/Seo.astro` pone `og:image` con la imagen que le pasa cada página (la imagen principal del artículo: `meta.socialImage`/`meta.image` en EN, `guide.image` en ES, el héroe en nutrición). Si la página no pasa ninguna, usa la general de su idioma:
   - EN: `public/images/social/og-default-en.jpg`
   - ES: `public/images/social/og-default-es.jpg`
   - Portada bilingüe `/`: `public/og-default.jpg`
2. Al terminar el build, `scripts/social-images.mjs` (integración de Astro, registrada en `astro.config.mjs`):
   - crea una copia JPEG de 1200×630 (menos de 300 KB, lo que WhatsApp exige) de cada imagen en `/images/share/`;
   - las fotos verticales o cuadradas se muestran enteras sobre un fondo desenfocado de la misma foto (para no cortar la cara del perro); las anchas se recortan desde el centro;
   - reescribe `og:image`, `og:image:secure_url`, `og:image:type`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image` y `twitter:image:alt` (con `twitter:card=summary_large_image`);
   - **hace fallar el build** si una página no tiene `og:image`, si el archivo de la imagen no existe, si la imagen no es del dominio del sitio, o si un artículo (`og:type=article`) quedó con la imagen general.
3. Los botones de compartir (Facebook, WhatsApp, X, Pinterest, correo, copiar enlace) comparten la URL de la página, así que la red lee esas etiquetas y muestra la imagen del artículo.

## Al publicar un artículo nuevo

Basta con darle su imagen principal en los metadatos (`image`, `imageAlt`). La copia para compartir se genera sola. Si falta, el build no publica.

`/go/` (sistema ANUNCIANTES) nunca se lee ni se modifica.

Las imágenes generales se regeneran con `python3 scripts/social/make-default-og.py` (parte de la portada bilingüe).

Después de publicar, si una red muestra una vista previa vieja, se puede forzar la relectura en https://developers.facebook.com/tools/debug/ (Facebook/WhatsApp).
