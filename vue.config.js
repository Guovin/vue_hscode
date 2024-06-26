module.exports = {
  chainWebpack: config => {
    //发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      //配置不打包项，使用CDN加载
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress'
      })
      // 新建一个isProd属性，处理不同环境的配置
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })


    })

    //开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 新建一个isProd属性，处理不同环境的配置
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })

    })
  }
}
