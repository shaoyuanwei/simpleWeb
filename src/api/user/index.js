import request from '@/utils/request'
import config from '@/config/index'

// 登录
const service = {
    login(data) {
        console.log(data);
        return request({
            url: config.baseURL + '/login',
            method: 'post',
            data
        })
    },
    // 获取用户信息
    getUserInfo() {
        return request({
            url: config.baseURL + '/userinfo',
            method: 'get'
        })
    }
}

export default service