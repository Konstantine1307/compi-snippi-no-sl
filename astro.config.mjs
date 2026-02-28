import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import liveCode from 'astro-live-code';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://compoguide.netlify.app/',
  integrations: [mdx(), liveCode({ layout: '/src/layouts/LiveCodeLayout.astro' }), alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});