<template>
  <div id="about">
    <Card :bordered="screenWidth < 768" dis-hover>
      <h5 slot="title">关于博主</h5>
      <p><Avatar shape="square" icon="ios-person" size="large" /><strong :style="{marginLeft: '16px'}">Join</strong></p>
      <p>computer loser</p>
      <p><router-link to="about">了解更多</router-link></p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (screenWidth) {
      this.screenWidth = screenWidth
    }
  }
}
</script>

<style lang="scss">
  #about {
    padding: 0 16px;
    margin-bottom: 64px;
  }
  @media screen and (max-width: 767px) {
    #about {
      padding: 16px;
      margin-bottom: 16px;
    }
  }
</style>
