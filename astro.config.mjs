// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://starias-projects.github.io',
  base: '',
  integrations: [react()],
})
