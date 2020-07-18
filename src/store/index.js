import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'http://localhost:8000',
    userInfo: null
  },
  mutations: {
    setUserInfo: function (state, payload) {
      if (state.userInfo) {
        state.userInfo = payload
      } else {
        state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getHost: function (state) {
      return state.host
    },
    getUserInfo: function (state) {
      return state.userInfo
    }
  }
})
