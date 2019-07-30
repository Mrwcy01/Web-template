import request from '@/utils/request'

/** 账号登录 */
export const loginByAccount = (data) => request({
  url: '/pcgc/login',
  method: 'POST',
  data
})