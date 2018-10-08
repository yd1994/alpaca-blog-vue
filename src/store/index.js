import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screenWidth: 0, // 浏览器宽度
    screenHeight: 0, // 浏览器高度
    sysInformation: {
      siteName: {},
      siteAddress: {},
      siteDescription: {},
      personalName: {},
      personalEmail: {}
    }
  },
  mutations: {
    changeScreenWidth (state, screenWidth) {
      state.screenWidth = screenWidth
    },
    changeScreenHeight (state, screenHeight) {
      state.screenHeight = screenHeight
    },
    changeSysInformation (state, sysInformation) {
      let name = sysInformation.name
      let arr = name.split('_')
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
      }
      name = arr.join('')
      state.sysInformation[name] = sysInformation
    }
  }
})

export default store
