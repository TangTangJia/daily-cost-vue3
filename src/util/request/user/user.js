import { GET, DELETE } from '../http'

const user = {
  // 获取用户信息
  getUserInfo: () => GET('/external/account/me'),
  // 退出登录
  loginOut: () => DELETE('/external/authenticate/authorization')
}

export default user
