<template>
  <div id="category-article-list-page">
    <Row>
      <Col :xs="24" :sm="16">
        <ArticleList listType="category" :category="category"></ArticleList>
      </Col>
      <Col :xs="24" :sm="8">
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
  components: {ArticleList, CategorySimpleList},
  props: {
    categoryId: {
      type: String
    }
  },
  data () {
    return {
      category: {}
    }
  },
  methods: {
    loadCategory: function () {
      let uri = this.$api.apiInfo.categories.uri + this.categoryId
      let params = {
      }
      this.$api.get(uri, params, response => {
        this.category = response.data.data
      })
    }
  },
  mounted () {
    this.loadCategory()
  },
  watch: {
    categoryId: function () {
      this.loadCategory()
    }
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
