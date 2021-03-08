import axios from 'axios'
import config from '../config/index'

// 创建axios实例
const service = axios.create({
    baseURL: config.baseUrl, // api的base_url
    timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        // 自定义配置
        return config
    },
    error => {
        // 处理一些请求出错的情况
        Promise.reject(error)
    }
)

// response拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        // 这里处理一些response出错时的逻辑
        return Promise.reject(error)
    }
)

export default service