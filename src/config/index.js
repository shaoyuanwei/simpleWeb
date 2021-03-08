const modeUrlObj = {
    // 生产环境
    'production': {
        baseURL: 'http://localhost:8082/',
        authBaseURL: ''
    },
    // 开发环境
    'development': {
        baseURL: 'http://localhost:8081/',
        authBaseURL: ''
    },
    // 测试环境
    'test': {
        baseURL: 'http://locahost:8083/',
        authBaseURL: ''
    }
}

export default modeUrlObj[process.env.NODE_ENV]