export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    future: {
        compatibilityVersion: 4,
    },
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
        preference: 'dark'
    },
})
