export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Patty',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'patty friend and community' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-png', href: '/patty-icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: 'https://api.pattycommunity.com',
    // baseURL: 'http://localhost:9999',
  },

  auth: {
    strategies: {
      local: {
        cookie: {
          prefix: 'patty_',
        },
        user: {
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token',
            credentials: true,
          },
          user: {
            url: '/me',
            method: 'get',
          },
          logout: false,
        },
        token: {
          required: true,
          type: 'Bearer',
          global: true,
        },
      },
    },
    redirect: {
      login: '/login',
      home: '/',
    },
  },

  router: {
    middleware: ['auth'],
  },
};
