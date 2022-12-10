import request from "@/utils/request"

export function test() {
  return request({
    url: '/posts',
    method: 'get'
  })
}
export function test1() {
  return request({
    url: '/API/hlx_get_key.php',
    method: 'POST',
    params: '苹果核'
  })
}