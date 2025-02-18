export default defineNuxtConfig({
  modules: [
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

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
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
