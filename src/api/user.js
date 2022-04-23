import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/verify',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/login/account-auth',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
