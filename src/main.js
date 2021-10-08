import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'

import App from './App.vue'

// Mao: it must be named as 'router' when import
import router from './mao-router'

Vue.config.productionTip = true // false
Vue.prototype.$http = Axios.create({
  baseUrl: "https://www.maojianwei.com/resources/",
  timeout: 3000
})

Vue.use(ElementUI)


new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
