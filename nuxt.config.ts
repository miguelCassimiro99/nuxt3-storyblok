// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, timeline: { enabled: true } },
  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss'],

  storyblok: {
    accessToken: 'McgtG0TUQWwtsl3oaj4bXAtt',
    apiOptions: {
      region: 'us',
    },
  },
})
