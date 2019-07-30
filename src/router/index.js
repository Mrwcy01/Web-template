import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '../views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

export default router
