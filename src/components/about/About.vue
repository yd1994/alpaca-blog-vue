<template>
  <div id="about">
    <Card :bordered="bordered" dis-hover>
      <h5 slot="title">关于博主</h5>
      <p><img :style="{width: '64px', height: '64px'}" src="../../assets/alpaca.png"/><strong :style="{marginLeft: '16px'}">{{ personalName }}</strong></p>
      <p>{{ personalEmail }}</p>
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
    },
    personalName: function () {
      return this.$store.state.sysInformation.personalName.value
    },
    personalEmail: function () {
      return this.$store.state.sysInformation.personalEmail.value
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
