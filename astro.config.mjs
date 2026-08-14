import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your final Netlify/custom domain when deploying.
export default defineConfig({
  site: 'https://naylaargia.netlify.app',
  integrations: [tailwind()],
});
