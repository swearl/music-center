const Dotenv = require('dotenv-webpack');

module.exports = {
  pwa: {
    name: process.env.APP_TITLE,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env.APP_TITLE;
      return args;
    });
  },
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  devServer: {
    port: process.env.DEV_PORT,
    proxy: {
      '/api': {
        target: process.env.SOCKET_SERVER,
        changeOrigin: true,
      },
    },
  },
};
