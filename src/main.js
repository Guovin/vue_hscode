import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/css/global.css'

Vue.config.productionTip = false

// 绑定axios默认访问地址
axios.defaults.baseURL = 'https://hscode.vip/api/'
// axios挂载到http原型对象上使用
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
