<template>
  <div id="about-page">
    <h5>关于</h5>
    <Divider />
    <Row>
      <Col :xs="12" :md="8">
        <img :style="{width: '128px', height: '128px'}" src="../../assets/头像.png"/>
      </Col>
      <Col :xs="12" :md="16">
        <h3>Join</h3>
        <p>computer loser</p>
      </Col>
    </Row>
    <p>关于66666666666666666666666</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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
