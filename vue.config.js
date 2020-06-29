module.exports = {
    transpileDependencies: ['vuetify'],
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = process.env.APP_TITLE
            return args
        })
    },
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: process.env.DEV_PORT
    }
}
