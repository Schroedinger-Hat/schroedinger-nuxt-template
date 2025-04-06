import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxt/icon',
    'nuxt-svgo',
  ],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    defaultImport: 'component',
  },
  shadcn: {
    prefix: 'SC',
    componentDir: './app/components/ui',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2024-07-13',
})

