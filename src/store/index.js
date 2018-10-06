import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screenWidth: 0, // 浏览器宽度
    screenHeight: 0 // 浏览器高度
  },
  mutations: {
    changeScreenWidth (state, screenWidth) {
      state.screenWidth = screenWidth
    },
    changeScreenHeight (state, screenHeight) {
      state.screenHeight = screenHeight
    }
  }
})

export default store
