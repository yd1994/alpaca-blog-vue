import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screenWidth: 0
  },
  mutations: {
    changeScreenWidth (state, screenWidth) {
      state.screenWidth = screenWidth
    }
  }
})

export default store
