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
