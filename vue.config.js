const package = require('./package.json')

/**
 * 配置项
 */
const port = '9000'
const publicPath = '/single-app/main/'
const entry = './src/main.qiankun.js'

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? `http://localhost:${port}/` : publicPath,

  configureWebpack: config => {
    config.entry = entry
  },

  chainWebpack: async(config) => {
    config.devServer.set('port', port)
    config.output
            .library(package.name)
            .jsonpFunction(`webpackJsonp_${package.name}`)
    config.plugin('html')
          .tap(args => {
            delete args[0].minify
            return args
          })
  }
}