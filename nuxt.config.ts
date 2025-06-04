import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon'],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Is this project dead?",
    },
  },
  
  icon: {
    mode: "css",
    cssLayer: "base",
  },

  fonts: {
    families: [
      {
        name: "Switzer",
        provider: "fontshare",
        weights: [200, 300],
      },
      {
        name: "Cabinet Grotesk",
        provider: "fontshare",
        weights: [200, 900],
      },
    ],
  },
})