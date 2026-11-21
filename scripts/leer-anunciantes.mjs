// Lee una dirección interna de ANUNCIANTES (/go/, /kp/, /sc/) con la clave privada (D-43).
// Uso: node scripts/leer-anunciantes.mjs go/README_FIRST
// La clave sale de GO_CLAVE o del archivo .anunciantes/clave-go (fuera de git, nunca en public/ ni dist/).
import { readFileSync } from "node:fs";

export function leerClave() {
  if (process.env.GO_CLAVE) return process.env.GO_CLAVE.trim();
  try {
    return readFileSync(new URL("../.anunciantes/clave-go", import.meta.url), "utf8").trim();
  } catch {
    throw new Error("Falta la clave: creá .anunciantes/clave-go (ver docs/CLAVE-ANUNCIANTES.md) o definí GO_CLAVE.");
  }
}

export async function leerAnunciantes(ruta) {
  const url = `https://bulldogfrances.com/${ruta.replace(/^\/+/, "")}`;
  const res = await fetch(url, { headers: { "x-go-clave": leerClave() } });
  if (!res.ok) throw new Error(`${url} respondió ${res.status}`);
  return res.text();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const ruta = process.argv[2];
  if (!ruta) {
    console.error("Uso: node scripts/leer-anunciantes.mjs go/README_FIRST");
    process.exit(1);
  }
  process.stdout.write(await leerAnunciantes(ruta));
}
