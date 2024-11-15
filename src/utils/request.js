import axios from 'axios' //引入axios

const baseURL = 'http://localhost:8080' //项目访问的地址和前缀

//创建一个新的axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 20000, //设置超时时间，超过该时间就不会发起请求
})

// 请求拦截器，在发送请求前要做的事，例如设置请求头，统一的请求参数等
service.interceptors.request.use(
  (config) => {
    config.headers = {}
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器，对请求后等到响应的数据进行处理
service.interceptors.response.use(
  (response) => {
    // 请求成功处理
    console.log('请求成功', response)
    return response
  },
  (error) => {
    // 请求失败处理
    console.log('请求失败', error)
  }
)

// 对外暴露
export default service
