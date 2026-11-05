// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://auptitgourmand.com',

  vite: {
    plugins: [tailwindcss()],
  },

  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },

  // Préchargement des pages au survol / focus des liens : navigation quasi instantanée.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // Images optimisées (AVIF/WebP, srcset responsive) via sharp.
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  // Polices auto-hébergées, sous-ensemble latin, avec polices de repli ajustées (anti-CLS).
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Oswald',
      cssVariable: '--font-oswald',
      fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/oswald-latin-wght-normal.woff2'], weight: '200 700', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/nunito-sans-latin-wght-normal.woff2'], weight: '200 1000', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Yellowtail',
      cssVariable: '--font-yellowtail',
      fallbacks: ['Brush Script MT', 'cursive'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/yellowtail-latin-400-normal.woff2'], weight: 400, style: 'normal' },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/mentions-legales'),
    }),
  ],
});
