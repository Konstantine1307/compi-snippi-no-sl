import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import liveCode from 'astro-live-code';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://compoguide.netlify.app/',
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), liveCode({ layout: '/src/layouts/LiveCodeLayout.astro' }), alpinejs()],
});