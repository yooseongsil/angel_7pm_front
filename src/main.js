import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import 'moment/locale/ko'
import './plugins/validate/index'

// baseURL 기본값
// develop , production baseURL
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8000'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.VUE_APP_PRODUCTION_SERVER_URL
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
