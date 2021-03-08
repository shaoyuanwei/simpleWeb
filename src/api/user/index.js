import request from '@/utils/request'

// 登录
const service = {
    login(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    },
    // 获取用户信息
    getUserInfo() {
        return request({
            url: '/userinfo',
            method: 'get'
        })
    }
}

export default service