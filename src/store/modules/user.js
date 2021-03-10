import { setToken, getToken } from '@/utils/auth'
import api from '@/api/user'

const user = {
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        // 登录
        Login( { commit }, userInfo) {
            return new Promise((resolve, reject) => {
                api.login(userInfo).then(res => {
                    console.log(res);
                    if (res.code === 200) {
                        setToken(res.data)
                        commit('SET_TOKEN', res.data)
                        this.$router.push("/")
                    }
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default user