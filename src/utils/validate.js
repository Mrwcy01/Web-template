/** password */
export function isValidPass(str) {
  const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,20}$/
  return reg.test(str)
}

/** 短信验证码 */
export function isValidCode(str) {
  const reg = /^\d{6}$/
  return reg.test(str)
}

/* phone */
export function isvalidPhoneNum(str) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}

/* nickname */
export function isvalidNickname(str) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]{2,12}$/
  return reg.test(str)
}
