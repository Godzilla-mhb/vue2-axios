const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 项目部署的基本路径，默认 "/"
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // 项目打包的根目录，默认 "dist"
  outputDir: 'dist',

  // 项目打包的静态资源存放目录，默认 ""
  assetsDir: '',

  // 项目打包的index.html输出路径，默认 "index.html"
  indexPath: 'index.html',

  // 多页应用配置参数，默认 undefined
  pages: undefined,

  // 开发环境 eslint 异常信息提示位置，默认 "default" 在浏览器窗口提示，为 true 在控制台提示
  lintOnSave: 'default',

  // 项目打包是否生成js的 source map 调试包，默认 true，生产部署设置为false
  productionSourceMap: false,

  // css 配置
  css: {
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中、生产环境下默认 true，开发环境下默认 false
    extract: true,

    // 是否开启 css 的 source map 调试，默认 false
    sourceMap: false,

    // 配置css的loader选项：css-loader、postcss-loader、less-loader、sass-loader，stylus-loader，默认 {}
    loaderOptions: {},
  },

  // devServer 支持 webpack-dev-server 所有选项
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    hot: true,
    https: false,
    proxy: {
      '/goods': {
        target: 'http://192.168.0.104:9000/', // 后端服务域名
        secure: false, // 是否支持 https，默认 false
        ws: true, // 是否支持 websocket
        changeOrigin: true, // 是否支持跨域
        pathRewrite: {
          '^/goods': '/', // 路径片段重写
        },
      },
      '/otherapi': {
        target: 'http://localhost:3001', // 后端服务域名
        secure: false, // 是否支持 https，默认 false
        ws: true, // 是否支持 websocket
        changeOrigin: true, // 是否支持跨域
        pathRewrite: {
          '^/': '/', // 路径片段重写
        },
      },
    },
  },
  // 插件配置选项
  pluginOptions: {
    foo: {
      // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    },
  },
  // babel-loader 是否处理 node_modules 中的依赖包，处理哪些依赖包，参数类型: boolean | Array<string | RegExp>
  transpileDependencies: true,
})
