import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/scss/main.scss'

import Default from "./layouts/Default.vue"
import MainLayout from "./layouts/MainLayout.vue"

Vue.component("default-layout", Default)
Vue.component("main-layout", MainLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.config.productionTip = false

