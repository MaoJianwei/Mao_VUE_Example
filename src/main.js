import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios.create({
  baseUrl: "https://www.maojianwei.com/resources/",
  timeout: 3000
})

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
