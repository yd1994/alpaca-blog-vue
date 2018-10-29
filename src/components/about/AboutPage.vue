<template>
  <div id="about-page">
    <h5>关于</h5>
    <Divider />
    <Row>
      <Col :xs="12" :md="8">
        <img :style="{width: '128px', height: '128px'}" src="../../assets/alpaca.png"/>
      </Col>
      <Col :xs="12" :md="16">
        <h3>{{ personalName }}</h3>
        <p>{{ personalEmail }}</p>
      </Col>
    </Row>
    <Card>
      <p slot="title">简介</p>
      <p>{{ personalContent }}</p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  computed: {
    personalName: function () {
      return this.$store.state.sysInformation.personalName.value
    },
    personalEmail: function () {
      return this.$store.state.sysInformation.personalEmail.value
    },
    personalContent: function () {
      return this.$store.state.sysInformation.personalContent.value
    }
  }
}
</script>

<style lang="scss">
#about-page {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
}
@media screen and (max-width: 767px) {
  #about-page {
  }
}
</style>
