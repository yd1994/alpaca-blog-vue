<template>
  <div id="home">
    <Row>
      <Col :xs="{ span: 24}" :sm="{ span: 16}">
        <ArticleList></ArticleList>
      </Col>
      <Col :xs="{ span: 24}" :sm="{ span: 8}">
        <About></About>
      </Col>
    </Row>
  </div>
</template>

<script>
import ArticleList from './article/ArticleList'
import About from './about/About'
import Posts from './others/Posts'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ArticleList,
    About,
    Posts
  }
}
</script>

<style lang="scss">
  #home {
    margin: 0 auto;
    max-width: 1024px;
  }
  @media screen and (max-width: 767px) {
    #home {
    }
  }
</style>
