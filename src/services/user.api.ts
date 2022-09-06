// 导入axios实例
import httpRequest from '@/request/index'

// 获取验证码
export function getCaptcha() {
  return httpRequest({
    url: '/api/user/code',
    method: 'get',
  })
}