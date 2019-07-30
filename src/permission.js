import router from './router'
import store from './store'
import { Toast } from 'vant'
// 页面刷新时，重新赋值 token
if (window.localStorage.getItem('token')) {
  store.commit('LOGIN', window.localStorage.getItem('token'))
}
// 路由守卫 路由跳转新页面回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
// 路由守卫
router.beforeEach(async(to, from, next) => {
  // 检查是否登录
  if (store.state.token !== '') {
    // 检查是否 加载个人信息
    if (store.state.headimg === null || store.state.headimg === 'null') {
      await store.dispatch('getUser')
    }
  }
  // 设置限制路由,检查是否有权限访问 未登录状态 跳首页
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.token === null || store.state.token === 'null' || store.state.token === '') {
      Toast.fail('请先登录')
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
