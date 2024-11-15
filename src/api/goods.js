// 引入封装的request.js文件
import request from '@/utils/request'

// 查询-get类型
export function dataDisplayList(data) {
  return request({
    url: '/dataDisplay/list',
    method: 'get',
    params: data,
  })
}

// 新增-post类型
export function getGoods(data) {
  return request({
    url: '/goods/login',
    method: 'post',
    data,
  })
}

// 删除-delete类型
export function dataDisplayDelete(id) {
  return request({
    url: `/dataDisplay/delete/${id}`,
    method: 'delete',
  })
}
