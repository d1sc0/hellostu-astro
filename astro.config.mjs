import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { astroImageTools } from 'astro-imagetools';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://hellostu.xyz',
  integrations: [mdx(), astroImageTools, icon()]
});