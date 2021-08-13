import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import session from './modules/session'


Vue.use(Vuex)

export default new Vuex.Store({
  //plugins: [IdbPlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { app, session
  }
})
