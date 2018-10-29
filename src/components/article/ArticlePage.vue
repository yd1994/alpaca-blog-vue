<template>
  <div id="article-page">
    <Breadcrumb>
      <BreadcrumbItem to="/" target="首页">首页</BreadcrumbItem>
      <BreadcrumbItem v-if="article.category != undefined" :to="toCategoryUri"
                      target="article.category.name">{{ article.category.name }}</BreadcrumbItem>
      <BreadcrumbItem>{{ article.title }}</BreadcrumbItem>
    </Breadcrumb>
    <Divider />
    <h2>{{ article.title }}</h2>
    <p>
      <small>
        <Time v-if="article.created != undefined" :time="article.created" />
        <Divider type="vertical"/>
        <a v-if="article.category != undefined" @click="clickCategory">{{ article.category.name }}</a>
        <Divider type="vertical"/>
        <span v-if="article.traffic != undefined" @click="clickCategory">阅读量：{{ article.traffic }}</span>
      </small>
    </p>
    <div class="article-page-content">
      <mavon-editor v-model="article.content"
                    :toolbarsFlag="false"
                    :editable="false"
                    :subfield="false"
                    defaultOpen="preview"/>
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'ArticlePage',
  components: {mavonEditor},
  props: {
    articleId: {
      type: String
    }
  },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    toCategoryUri: function () {
      if (this.article.category === undefined) {
        return ''
      } else {
        return '/categories/' + this.article.category.id + '/articles'
      }
    }
  },
  methods: {
    clickCategory: function () {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: this.article.category.id.toString()}})
    },
    loadArticle: function () {
      let uri = this.$api.apiInfo.articles.uri + this.articleId
      let params = {}
      this.$api.get(uri, params, response => {
        this.article = response.data
      })
    }
  },
  mounted () {
    this.loadArticle()
  }
}
</script>

<style lang="scss">
#article-page {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
  h2 {
    padding: 4px 0px;
  }
  .article-page-content {
    padding: 48px 0;
  }
}
</style>
