// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/font_3454956_2feo3spfiou.css",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
});
