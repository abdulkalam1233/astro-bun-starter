import tailwindIntegration from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindIntegration(), alpine()],
});
