// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Crash course Nuxt",
    },
  },
  alias: {
    // "@": "/<srcDir>",
    assets: "/<RootDir>assets",
  },

  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", "@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: true,
});
