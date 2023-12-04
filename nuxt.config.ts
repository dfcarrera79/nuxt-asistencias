// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/css/app.scss"],
  ssr: true,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    [
      "nuxt-quasar-ui",
      {
        lang: "es",
        plugins: [
          "BottomSheet",
          "Dialog",
          "Loading",
          "LoadingBar",
          "Notify",
          "Dark",
        ],
        extras: {
          font: "roboto-font",
        },
        components: {
          defaults: {
            QBtn: {
              unelevated: true,
            },
          },
        },
      },
    ],
  ],
  imports: { dirs: ["/stores"] },
});
