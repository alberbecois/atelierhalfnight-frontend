// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  debug: true,
  modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
    display: 'swap',
    families: {
      'Crimson Text': {
        wght: [400, 600, 700],
        ital: [400, 600, 700]
      },
      'Poppins': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  }],"@nuxt/content", "@nuxt/image"],
  app: {
    head: {
      title: 'Atelier Halfnight',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/images/Moon.svg' }]
    }
  }
})