// https://nuxt.com/docs/api/configuration/nuxt-config
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
        // Path to your custom CSS, ensuring your Tailwind CSS configurations are loaded
        '~/assets/css/main.css',
    ],
    colorMode: {
        preference: 'dark'
    },
    app: {
        head: {
            title: 'Lefteris Charteros',
            meta: [
                {
                    key: 'title',
                    property: 'og:title',
                    content: 'Lefteris Charteros',
                },
                {
                    name: 'description',
                    content: 'Lefteris Charteros Personal Website',
                },
                {
                    property: 'og:type',
                    content: 'Website',
                },
                {
                    name: 'image',
                    property: 'og:image',
                    content: 'https://charteros.github.io/website_thumbnail.png',
                },
                {
                    name: 'description',
                    property: 'og:description',
                    content: 'Lefteris Charteros Personal Website',
                },
                {
                    name: 'author',
                    content: 'Lefteris Charteros',
                },
            //     add favicon
                {
                    name: 'favicon',
                    href: 'favicon.ico',
                }
            ],
        },
    }
})
