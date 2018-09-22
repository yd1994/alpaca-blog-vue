<template>
  <div id="posts">
    <h5>Post</h5>
    <Divider />
    <p><Avatar icon="ios-person" size="large" /><strong :style="{marginLeft: '10px'}">Join</strong></p>
    <p>默认分类</p>
  </div>
</template>

<script>
export default {
  name: 'Posts'
}
</script>

<style lang="scss">
#posts {
  padding: 16px 32px;
  margin-bottom: 32px;
}
@media screen and (max-width: 767px) {
  #about {
    padding: 16px 32px;
    margin-bottom: 16px;
  }
}
</style>
