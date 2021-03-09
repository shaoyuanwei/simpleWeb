import {createApp} from 'vue'
import ElementPlus from 'element-plus'
// import uView from "uview-ui"
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(ElementPlus)
// app.use(uView)
app.use(store).use(router).mount('#app')
