
export default {
  login(state) {
    // 模拟数据
    setTimeout(function(){
      state.commit('LOGIN', 'asdsadsaddasdasdasdadas')
    },1000)
  },
  getUser(state) {
    // 模拟数据
    var data = {
      userInfo: {
        nickname: '测试昵称' // 昵称
      },
      token: '', // 登录态
      headimg: null, // 头像
    }
    setTimeout(function(){
      state.commit('GET_USER_INFO',data) 
    } ,1000)
  }
}
