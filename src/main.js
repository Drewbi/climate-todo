import Vue from 'vue'
import dotenv from 'dotenv'
import App from './App.vue'
import store from './store'

if (process.env.NODE_ENV === 'development') dotenv.config()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
