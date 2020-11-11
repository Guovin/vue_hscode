import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/css/global.css'
import NProgress from 'nprogress'
Vue.config.productionTip = false

// 绑定axios默认访问地址
axios.defaults.baseURL = 'https://hscode.vip/api/'
// axios挂载到http原型对象上使用
Vue.prototype.$http = axios

// 发起request请求时展示进度条 Nprogress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  NProgress.start()
  return config // 在最后必须return config
})
// 接收到response时隐藏进度条 Nprogress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

new Vue({
  router,
  render: hs => hs(App)
}).$mount('#app')
