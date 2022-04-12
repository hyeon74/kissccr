import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxtsrc',
    title: 'nuxtsrc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/firebase',
    '@/plugins/etc',
    '@/plugins/moment',
    '@/plugins/persistedState'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
    'vuetify-dialog/nuxt',
  ],

  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],

  router: {
    middleware: ['auth']
  },

  firebase: {
    // REQUIRED: Official config for firebase.initializeApp(config):
    config: {
      apiKey: process.env.VUE_APP_apiKey,
      authDomain: process.env.VUE_APP_authDomain,
      databaseURL: process.env.VUE_APP_databaseURL,
      projectId: process.env.VUE_APP_projectId,
      storageBucket: process.env.VUE_APP_storageBucket,
      messagingSenderId: process.env.VUE_APP_messagingSenderId,
      appId: process.env.VUE_APP_appId,
      measurementId: process.env.VUE_APP_measurementId,
      
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      torage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    dir: '../public'
  }

}
