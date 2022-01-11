import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import request from './network/request'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
