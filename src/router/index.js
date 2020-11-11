import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
const Home = () =>
  import(/* webpackChunkName: "Home_Welcome" */ '../components/Home.vue')

// import Table from '../components/Table'
const Table = () =>
  import(/* webpackChunkName: "Home_Table" */ '../components/Table.vue')
// import Detail from '../components/Detail'
const Detail = () =>
  import(/* webpackChunkName: "Home_Detail" */ '../components/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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

export default router
