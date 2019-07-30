import axios from 'axios'
import store from '@/store'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'url',
  timeout: 5000 // 请求延迟
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers['pctoken'] = localStorage.getItem('token')
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  // 自定义 code 标识请求状态
  response => {
    const res = response.data
    // code 2001 means not login
    if (res.code === 2001 || res.code === -1) {
      store.commit('logout')
      // location.reload()
    }
    return res
  },
  // 通过 XMLHttpRequest 对象状态码标识
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)
export default service
