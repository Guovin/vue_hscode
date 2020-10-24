import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Table from '../components/Table'
import Detail from '../components/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: '/table',
      component: Table
    }, {
      path: '/detail',
      component: Detail
    }]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
