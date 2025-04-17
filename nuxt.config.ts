// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, // шинэ plugin
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-17',
})