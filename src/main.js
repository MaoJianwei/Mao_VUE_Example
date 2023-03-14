import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'
import App from './App.vue'

import maoRouter from './mao-router'

const app = createApp(App);
app.config.globalProperties.$http = Axios.create({
    baseUrl: "https://www.maojianwei.com/resources/",
    timeout: 3000
})
app.use(ElementPlus, { size: 'large' })
app.use(maoRouter)
app.mount('#app')
