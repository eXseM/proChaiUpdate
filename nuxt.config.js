export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Прочай',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap'},
      { rel: "stylesheet", href: 'http://fonts.googleapis.com/css?family=Roboto'}
    ]
  },


  server:{
    host: '0.0.0.0',
    port: 3000
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '@/plugins.js',
    ssr: false,
  }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
