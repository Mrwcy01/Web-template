import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'lib-flexible'
import '@/permission' // permission control
// 引入iconfont
// import './assets/iconfont/iconfont.css'
// svg  iconfont
// import './assets/iconfont/iconfont'
// 引入 swiper 样式
// import '../node_modules/swiper/dist/css/swiper.css'

// 基础样式 引入
import('./assets/css/base.css')
// 阻止启动生产消息
Vue.config.productionTip = false

// vant UI
import 'vant/lib/index.css'

// 移动端调试工具 log日志 网络请求  dom
import Vconsole from 'vconsole'
new Vconsole()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
