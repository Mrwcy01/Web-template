import getData from './data'
export default {
  // 存储 token
  LOGIN(state, data) {
    state.token = data // 状态管理中存储
    window.localStorage.setItem('token', data) // 本地存储
  },
  GET_USER_INFO(state, data) {
    state.userInfo = data // 状态管理中存储
    window.localStorage.setItem('userInfo', data) // 本地存储
  }
}
