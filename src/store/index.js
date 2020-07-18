import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'http://localhost:8000',
    userInfo: {}
  },
  mutations: {
    setUserInfo: function (state, payload) {
      state.userInfo = payload
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
