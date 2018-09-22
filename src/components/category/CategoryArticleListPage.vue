<template>
  <div id="category-article-list-page">
    <Row>
      <Col :xs="24" :md="16">
        <ArticleList listType="category" :meta="category"></ArticleList>
      </Col>
      <Col :xs="24" :md="8">
        <CategorySimpleList></CategorySimpleList>
      </Col>
    </Row>
  </div>
</template>

<script>
import ArticleList from '../article/ArticleList'
import CategorySimpleList from './CategorySimpleList'
export default {
  name: 'CategoryArticleListPage',
  props: {
    categoryId: {
      type: String
    }
  },
  data () {
    return {
      category: {
        id: '1',
        name: '默认分类'
      }
    }
  },
  components: {
    ArticleList,
    CategorySimpleList
  }
}
</script>

<style lang="scss">
#category-article-list-page {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
}
</style>
