<template>
  <div id="app">
    <router-view/>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {Header, Footer},
  data () {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight
    }
  },
  methods: {
    init: function () {
      this.initSysInformation()
    },
    initSysInformation: function () {
      let siteNameUri = this.$api.apiInfo.sysInformation.siteName.uri
      this.$api.get(siteNameUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
      })
      let siteAddressUri = this.$api.apiInfo.sysInformation.siteAddress.uri
      this.$api.get(siteAddressUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
      })
      let siteDescriptionUri = this.$api.apiInfo.sysInformation.siteDescription.uri
      this.$api.get(siteDescriptionUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.consoleSiteDescription(response.data.value)
      })
      let personalNameUri = this.$api.apiInfo.sysInformation.personalName.uri
      this.$api.get(personalNameUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
      })
      let personalEmail = this.$api.apiInfo.sysInformation.personalEmail.uri
      this.$api.get(personalEmail, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
      })
    },
    consoleSiteDescription: function (siteDescription) {
      console.info(siteDescription)
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        window.screenHeight = document.body.clientHeight
        that.screenWidth = window.screenWidth
        that.screenHeight = window.clientHeight
      })()
    }
    this.init()
  },
  watch: {
    screenWidth (screenWidth) {
      this.$store.commit('changeScreenWidth', screenWidth)
    },
    screenHeight (screenHeight) {
      this.$store.commit('changeScreenHeight', screenHeight)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 360px;
}
</style>
