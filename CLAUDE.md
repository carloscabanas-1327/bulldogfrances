# Instrucciones para Claude

## Search Console todos los días (Directiva 5, orden de Carlos 19/11/2026)

Antes de cualquier otro trabajo, cada día: leé el informe de hoy en GitLab `carlos-proyectos/search-console`, archivo `bulldogfrances.com/ULTIMO.md` (sin clave), hacé sus "Tareas de hoy", anotá en la memoria qué corregiste y, después de publicar, sumá las URLs cambiadas a `bulldogfrances.com/PEDIDOS.txt` de ese repo. Paso a paso completo: [docs/SEARCH-CONSOLE-DIARIO.md](docs/SEARCH-CONSOLE-DIARIO.md). Desde la nube https://bulldogfrances.com/sc/ da 403: es normal, usá GitLab.


## Clave privada de ANUNCIANTES (D-43, 20/11/2026)

`/go/README_FIRST`, `/go/README`, los archivos internos de `/go/` (`_mapa.json`, `_convertir.mjs`, etc.), `/kp/README` y `/sc/README` se leen siempre con la cabecera `x-go-clave` (o `?clave=`), tomando la clave del archivo `.anunciantes/clave-go`. El repo es público: esa carpeta está en `.gitignore` y la clave nunca se sube ni va en `public/`, `dist/` o HTML. Si falta el archivo, sacala de los archivos del proyecto (`.anunciantes/clave-go`). Detalle y ayudante: [docs/CLAVE-ANUNCIANTES.md](docs/CLAVE-ANUNCIANTES.md), `node scripts/leer-anunciantes.mjs go/README_FIRST`.

## Noticias: dos fuentes (órdenes de Carlos del 18/11 y 21/11/2026)

El sitio no busca noticias por su cuenta. Fuentes: (A) las fichas de `carloscabanas-1327/news-mypetsfamily`, carpetas `reparto/bulldog-en/` y `reparto/bulldog-es/` (solo lectura); (B) desde el 21/11/2026, las novedades que ANUNCIANTES deja cada hora en https://bulldogfrances.com/go/_vet/nuevas.md (o `.json`; instrucciones en `/go/_vet`), con la cabecera `x-go-clave`. Leé B una vez por día con `?desde=<último "hallado">`; esa hora queda en `/mnt/project-files/noticias/vet-ultimo-hallado.txt` de los archivos del proyecto. Cada novedad es solo una FUENTE: leé la nota original completa, escribí con tus palabras, citá el medio con su enlace (los estudios, con DOI) y no copies textos ni fotos. Ignorá lo que no sea del tema del sitio. Antes de publicar: doble auditoría (Directiva 8) y OK de Carlos.
