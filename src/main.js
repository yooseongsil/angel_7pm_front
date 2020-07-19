import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'moment/locale/ko'
import './plugins/validate/index'
import dotenv from 'dotenv'
import instance from './api'
dotenv.config()

Vue.prototype.$http = instance

// router guard
router.beforeEach((to, from, next) => {
  store.commit('setUserInfo')
  const isLogin = store.state.userInfo
  if (isLogin) {
    instance.defaults.headers.common.Authorization = `jwt ${store.state.userInfo.token}`
  }
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !isLogin) {
    next('signIn')
  } else if (!requiresAuth && isLogin) {
    next('/')
  } else {
    next()
  }
})

// baseURL 기본값
// develop , production baseURL
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://localhost:8000'
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = process.env.VUE_APP_PRODUCTION_SERVER_URL
// }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
