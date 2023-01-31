// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/app.scss"],

  modules: [
    // https://nuxt-graphql-client.web.app/
    "nuxt-graphql-client"
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}?access_token=${process.env.CTF_CDA_ACCESS_TOKEN}`
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/_variables.sass"'
        }
      }
    },
    define: {
      "process.env.DEBUG": false
    }
  },

  build: {
    transpile: ["gsap"]
  }
});
