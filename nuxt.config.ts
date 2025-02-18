export default defineNuxtConfig({
  modules: [
    '@nuxthq/studio',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: [
    '~/assets/css/main.css',
  ],
  colorMode: {
    preference: 'dark',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-02-13',
  eslint: {
    config: {
      stylistic: true,
    },
  },

})
