<template>
  <div id="index">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'index',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#index {
  margin: 0 auto;
  max-width: 1024px;
}
</style>
