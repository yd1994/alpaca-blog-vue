<template>
  <div id="article-list">
    <h5>{{ listTitle }}</h5>
    <Divider />
    <ArticleInfoCard v-for="article in articleList" :key="article.id" :article="article"></ArticleInfoCard>
    <SpinContainer :noMore="noMore" @on-loading="loadMoreArticleList"></SpinContainer>
  </div>
</template>

<script>
import ArticleInfoCard from './ArticleInfoCard'
import SpinContainer from '../others/SpinContainer'
const LIST_TYPE = {
  HOME: 'home',
  CATEGORY: 'category'
}
export default {
  name: 'ArticleList',
  components: {ArticleInfoCard, SpinContainer},
  props: {
    listType: {
      type: String,
      default: LIST_TYPE.HOME
    },
    category: {
      type: Object
    }
  },
  data () {
    return {
      page: this.$api.apiInfo.articles.request.params.page,
      size: this.$api.apiInfo.articles.request.params.size,
      noMore: false,
      articleList: []
    }
  },
  computed: {
    listTitle: function () {
      return this.listType === LIST_TYPE.HOME ? '最新文章' : this.category.name
    }
  },
  methods: {
    loadArticleList: function () {
      let uri = ''
      if (this.listType === LIST_TYPE.HOME) {
        uri = this.$api.apiInfo.articles.uri
      } else {
        uri = this.$api.apiInfo.categories.uri + this.category.id.toString() + this.$api.apiInfo.articles.uri
      }
      let params = {
        page: this.page,
        size: this.size,
        sortByDesc: 'created,top'
      }
      this.noMore = false
      this.$api.get(uri, params, response => {
        setTimeout(() => {
          this.noMore = response.data.data.total <= this.articleList.length
        }, 500)
        response.data.data.data.forEach(article => {
          this.articleList.push(article)
        })
      })
    },
    initArticleList: function () {
      this.articleList.length = 0
      this.page = this.$api.apiInfo.articles.request.params.page
      this.size = this.$api.apiInfo.articles.request.params.size
    },
    loadMoreArticleList: function () {
      this.page = this.page + 1
      this.loadArticleList()
    },
    handleReachBottom: function () {
    }
  },
  mounted () {
    if (this.listType === LIST_TYPE.HOME) {
      this.loadArticleList()
    }
  },
  watch: {
    category () {
      this.initArticleList()
      this.loadArticleList()
    }
  }
}
</script>

<style lang="scss">
#article-list {
  padding: 0 16px;
}
@media screen and (max-width: 767px) {
  #article-list {
  }
}
</style>
