const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/panel/' : '/';
// import { overrideSW } from './plugins/sw-generate';
const fs = require('fs');
const path = require('path');
export default {
  // router: {
  //   middleware: {
  //     '/profile': 'auth',
  //   },
  //   linkExactActiveClass: 'active',
  //   base: routerBase
  // },
  // loading: '~/components/LoadingBar.vue',
  // Global page headers: https://go.nuxtjs.dev/config-head
  css: [
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  head: {
    title: 'Allout',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'DESCRIOPTION' },
      { name: 'og:site_name', content: 'Allout' },
      { name: 'og:image', content: 'https://cdn.bitwave.tv/static/img/Bitwave_Banner.jpg', hid: 'og:image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/Modernize/css/styles.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/css/plugins/owl-carousel.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/js/extra-libs/jsgrid/jsgrid.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/js/extra-libs/jsgrid/jsgrid.min.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/js/extra-libs/jsgrid/jsgrid-theme.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/js/extra-libs/jsgrid/jsgrid-theme.min.css' },
      { rel: 'stylesheet', href: '/assets/Modernize/js/extra-libs/jsgrid/jsgrid.css' },
      { rel: 'stylesheet', href: '/assets/css/simplebar.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' },
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css', }
    ],
    script: [
      // Jquery
      { src: '/plugins/jquery/jquery.min.js', body: true },
      { src: '/plugins/datatables/jquery.dataTables.min.js', body: true },
      { src: '/assets/Modernize/js/app.min.js', body: true },
      { src: '/assets/Modernize/js/app.init.js', body: true },
      { src: '/assets/js/bootstrap.bundle.min.js', body: true },
      { src: '/assets/Modernize/vendor/simplebar/dist/simplebar.js', body: true },
      { src: '/assets/Modernize/js/sidebarmenu.js', body: true },
      { src: '/assets/Modernize/js/theme.js', body: true },
      { src: '/assets/js/owl.carousel.min.js', body: true },
      { src: '/assets/Modernize/js/dashboards/dashboard.js', body: true },
    ],
    bodyAttrs: {
      class: 'hold-transition sidebar-mini layout-fixed'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  plugins: [
    { src: '~/plugins/main.js', mode: 'client', },
    { src: '~/plugins/myUtils.js', ssr: false },
    // { src: '~/plugins/map', mode: 'client' },
    // { src: '~plugins/vue-print-nb.js', mode: 'client' },
    { src: "@/plugins/ckeditor.js", ssr: false },
    { src: '@/plugins/vue-html2pdf', mode: 'client' },
    // '@/plugins/gtag',
    '@/plugins/axios'
  ],
  components: true,
  buildModules: [
    // '@nuxtjs/pwa',
    '@nuxt/postcss8',
    '@nuxt/image',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/moment',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/color-mode'
  ],
  pwa: {
    workbox: {
      // workboxExtensions: '@/plugins/sw.js',
      // enabled: true, //should be off actually per workbox docs due to complications when used in prod
      importScripts: [
        '/offline.js',
      ],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: '/.*',
          handler: 'networkFirst',
          method: 'GET',
          strategyOptions: {
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
              purgeOnQuotaError: true,
            }
          },
        },
        {
          urlPattern: '^http?:\/\/localhost/([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)',
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'bitwave-api',
          },
        },
      ]
    },

    icon: {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },

    /*
  ** Manifest Module
  */
    manifest: {
      id: "?homescreen=1",
      name: 'AllOut Dashboard Panel',
      short_name: 'AllOut Dashboard Panel',
      description: "AllOut dashboard Panel Description",
      categories: ['Management', 'AllOut'],
      lang: 'en',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#ffff00',
    },

    meta: {
      appleStatusBarStyle: 'black-translucent',
      name: 'AllOut Dashboard Panel',
      description: "AllOut dashboard Panel Description",
      theme_color: '#ffff00',
      ogType: 'website',
      ogHost: 'http://localhost',
      twitterCard: 'summary_large_image',
      twitterSite: '@ApplicationPWA',
      // twitterCreator: '',
    },
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
  router: {
    linkActiveClass: 'bg-blue-test',
    linkExactActiveClass: 'bg-blue-test',
    // middleware: ['auth']
  },
  googleAnalytics: {
    id: 'G-1J0NP3PJ3X'
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-1J0NP3PJ3X'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'vue-social-sharing/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/proxy',
    // 'nuxt-time',
    ['nuxt-leaflet', { /* module options */ }],
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        name: 'English',
        flag: 'en.png',
        iso: 'en-US'
      },
      {
        code: 'fr',
        name: 'Français',
        flag: 'fr.png',
        iso: 'fr-FR'
      },
      {
        code: 'ar',
        name: 'العربية',
        flag: 'ar.png',
        iso: 'ar-dZ'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          'emailorusername': 'Username',
          'password': "Password",
          'remember': 'Remember me',
          'signin': 'Signin',
          'forget': 'Forget your password?'
        },
        fr: {
          'emailorusername': "nom d'utilisateur",
          'password': "Mot de passe"
        },
        ar: {
          welcome: 'مرحبا',
          overview: 'نظرة عامة'
        }
      }
    }
  },
  toast: {
    position: 'bottom-right',
    timeout: 500,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          timeout: 500
        }
      }
    ]
  },
  axios: {
    credentials: false,
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/base/': {
      target: 'http://185.192.97.21:8086/service/',
      pathRewrite: { '^/base/': '' },
      changeOrigin: true,
    },
    '/branch/': {
      target: 'http://185.192.97.21:8086/main/',
      pathRewrite: { '^/branch/': '' },
      changeOrigin: true,
    },
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: 'auth.'
        },
        token: {
          data: 'access_token',
          property: 'access_token',
          maxAge: 60 * 60 * 24 * 30,
          // global: true,
          // type: 'Bearer'
        },
        refreshToken: {
          prefix: 'refresh_token.',
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 4 * 5
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          login: { url: '/branch/api/master-admins/login', method: 'post' },
          refresh: { url: '/branch/api/master-admins/refresh/?format=web', method: 'post' },
          user: false,
          logout: { url: '/branch/api/master-admins/logout', method: 'post' }
        },
        tokenRequired: true,
        tokenType: 'JWT',
      }
    }
  },
  server:{
    host: "0.0.0.0"
  }

}
