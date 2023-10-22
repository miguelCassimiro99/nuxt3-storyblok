// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true, timeline: { enabled: true } },
  modules: ['@storyblok/nuxt', '@nuxtjs/tailwindcss'],

  storyblok: {
    accessToken: `${process.env.STORYBLOK_API_KEY}`,
    apiOptions: {
      region: 'us',
    },
  },
})
