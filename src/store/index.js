import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'
//import {convertAMPMto24h, convertTimestamp} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.initialState.sidebarActive = !state.initialState.sidebarActive;
    }
  },
  actions: {
    toggleSidebar: (context) => {
      context.commit('TOGGLE_SIDEBAR')
    }
  }
})
