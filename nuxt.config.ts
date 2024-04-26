// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: '/_nuxt/public/rem.js' }],
      link: [{ href: '/_nuxt/public/reset.css', type: 'text/css', rel: 'stylesheet' }]
    }
  },

  devtools: { enabled: true }
})
