import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  devtools: { enabled: false },

  modules: ["@nuxt/fonts", "@nuxt/icon"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Is this project dead?",
      meta: [
        {
          name: "description",
          content:
            "Answering the world's most annoying question in open source",
        },
        {
          name: "og:title",
          content: "Is this project dead?",
        },
        {
          name: "og:description",
          content:
            "Answering the world's most annoying question in open source",
        },
        {
          name: "og:image",
          content: "https://isthisprojectdead.com/ogimage.jpg",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  icon: {
    mode: "svg",
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
});
