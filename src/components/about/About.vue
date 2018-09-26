<template>
  <div id="about">
    <Card :bordered="bordered" dis-hover>
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
    }
  },
  computed: {
    bordered: function () {
      return this.$store.state.screenWidth < 767
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
