# Clave privada de ANUNCIANTES (D-43, 20/11/2026)

Pedido de Carlos: lo interno de `/go/`, `/kp/` y `/sc/` no queda a la vista del público. bulldogfrances.com lo lee con su propia clave.

## Dónde está la clave

- Archivo: `.anunciantes/clave-go` (la clave sola en una línea).
- **Este repositorio es público**, así que la carpeta `.anunciantes/` está en `.gitignore` y la clave **nunca** se sube a GitHub. Tampoco puede ir en `public/`, `dist/`, ningún HTML ni ningún script del navegador.
- Copias de donde sacarla para crear el archivo:
  - archivos del proyecto de Claude: `.anunciantes/clave-go`;
  - PC de Carlos: `C:\Users\ccaba\Downloads\BULLDOGFRANCES-COM\.anunciantes\clave-go`.

## Qué se lee con la clave

Toda lectura de estas direcciones manda la cabecera `x-go-clave: <clave>` (también sirve `?clave=<clave>`):

- https://bulldogfrances.com/go/README_FIRST y https://bulldogfrances.com/go/README
- https://bulldogfrances.com/go/_mapa.json, `_cupones.json`, `_novedades.json`, `_convertir.mjs`, `_ver/<slug>`, `_prueba`
- https://bulldogfrances.com/kp/README y https://bulldogfrances.com/sc/README

```sh
curl -H "x-go-clave: $(cat .anunciantes/clave-go)" https://bulldogfrances.com/go/README_FIRST
# o con el ayudante del repo:
node scripts/leer-anunciantes.mjs go/README_FIRST
```

Cada lectura con clave queda registrada en ANUNCIANTES. Hoy esas direcciones siguen abiertas; cuando se cierren, sin clave responden "No encontrado". Los enlaces `/go/<slug>`, el aviso de cookies y los recuadros no cambian.

## Build

El build actual (`astro build` + `scripts/social-images.mjs`) no lee nada de `/go/`, `/kp/` ni `/sc/`. Si algún día usa `convertirHTML`: leer la clave del archivo, bajar `_convertir.mjs` con la cabecera y llamar `cargarMapa("bulldogfrances.com", clave)`. En Cloudflare Pages la clave iría como variable de entorno secreta (por ejemplo `GO_CLAVE`), nunca en el repo; `scripts/leer-anunciantes.mjs` ya acepta esa variable.

Nunca crear ni tocar nada bajo `/go/` (ver [AVISO-ANUNCIANTES-GO.md](AVISO-ANUNCIANTES-GO.md)).
