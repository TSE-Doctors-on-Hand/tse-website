// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/content',
        '@pinia/nuxt',
        'nuxt-primevue'
    ],
    primevue: {
        cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
        components: {
            exclude: ["Editor", "Chart"]
        }
    },
    css: ["primevue/resources/themes/lara-light-indigo/theme.css"]

})

