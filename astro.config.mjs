import { defineConfig } from 'astro/config';
import socialImages from './scripts/social-images.mjs';
export default defineConfig({ site: 'https://www.bulldogfrances.com', output: 'static', trailingSlash: 'always', integrations: [socialImages()] });
