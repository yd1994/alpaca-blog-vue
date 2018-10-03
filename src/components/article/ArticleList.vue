<template>
  <div id="article-list">
    <h5>{{ listTitle }}</h5>
    <Divider />
    <ArticleInfoCard v-for="article in articleList" :key="article.id" :article="article"></ArticleInfoCard>
    <SpinContainer :noMore="noMore" :loading="loading" @on-loading="loadMoreArticleList"></SpinContainer>
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
      page: this.$api.default.articles.request.params.default_page,
      size: this.$api.default.articles.request.params.default_size,
      noMore: false,
      loading: false,
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
        uri = this.$api.default.articles.uri
      } else {
        uri = this.$api.default.categories.uri + this.category.id.toString() + this.$api.default.articles.uri
      }
      let params = {
        page: this.page,
        size: this.size
      }
      this.$api.get(uri, params, response => {
        this.noMore = false
        if (response.data === undefined) {
          return
        }
        if (response.data.length === 0) {
          this.noMore = true
        }
        this.loading = true
        response.data.forEach(article => {
          this.articleList.push(article)
          this.loading = false
        })
      })
    },
    loadMoreArticleList: function () {
      this.page = this.page + 1
      this.loadArticleList()
    }
  },
  mounted () {
    if (this.listType === LIST_TYPE.HOME) {
      this.loadArticleList()
    }
  },
  watch: {
    category (newValue) {
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
