<template>
  <div class="outline-page">
    <h5>网站概要</h5>
    <Divider />
    <p :style="{margin: '16px'}">共有文章：{{ articleTotal }}</p>
    <p :style="{margin: '16px'}">共有分类：{{ categoryTotal }}</p>
    <h3 :style="{margin: '32px 0 16px'}">点击下面的链接快速开始:</h3>
    <p>
      <Button type="primary" @click="clickToWriteArticle">撰写新文章</Button>
      <Button type="warning" @click="clickToOptionGeneral" :style="{marginLeft: '16px'}">系统设置</Button>
    </p>
    <Divider />
    <Row>
      <Col :xs="24" :md="12">
        <Card class="outline-card">
          <h4 slot="title">
            <Icon type="md-browsers" />
            最新发布文章
          </h4>
          <p v-for="article in articleNewList" :key="article.id"><Time :time="article.created" /><Divider type="vertical"/><a @click="clickAticle(article.id)">{{ article.title }}</a></p>
        </Card>
      </Col>
      <Col :xs="24" :md="12">
        <Card class="outline-card">
          <h4 slot="title">
            <Icon type="ios-flame" />
            最热门文章
          </h4>
          <p v-for="article in articleHotList" :key="article.id"><TimeContainer :time="article.created" /><a @click="clickAticle(article.id)"><Divider type="vertical"/>{{ article.title }}</a></p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import TimeContainer from '../../others/TimeContainer'
export default {
  name: 'OutlinePage',
  components: {TimeContainer},
  data () {
    return {
      articleTotal: 0,
      categoryTotal: 0,
      articleHotList: [],
      articleNewList: []
    }
  },
  methods: {
    loadHotArticleList: function () {
      let uri = this.$api.apiInfo.articles.uri
      let params = {
        page: 1,
        size: 10,
        sortByDesc: 'traffic'
      }
      this.$api.get(uri, params, response => {
        this.articleHotList = response.data.data.data
      })
    },
    loadNewArticleList: function () {
      let uri = this.$api.apiInfo.articles.uri
      let params = {
        page: 1,
        size: 10,
        sortByDesc: 'created'
      }
      this.$api.get(uri, params, response => {
        this.articleNewList = response.data.data.data
      })
    },
    loadArticleTotal: function () {
      let uri = this.$api.apiInfo.articles.totalUri
      let params = {
      }
      this.$api.get(uri, params, response => {
        this.articleTotal = response.data.data
      })
    },
    loadCategoryTotal: function () {
      let uri = this.$api.apiInfo.categories.totalUri
      let params = {
      }
      this.$api.get(uri, params, response => {
        this.categoryTotal = response.data.data
      })
    },
    clickAticle: function (articleId) {
      this.$router.push({name: 'Article', params: {articleId: articleId.toString()}})
    },
    clickToWriteArticle: function () {
      this.$router.push({name: 'WriteArticle'})
    },
    clickToOptionGeneral: function () {
      this.$router.push({name: 'OptionGeneral'})
    }
  },
  mounted () {
    this.loadHotArticleList()
    this.loadNewArticleList()
    this.loadArticleTotal()
    this.loadCategoryTotal()
  }
}
</script>

<style lang="scss">
.outline-page {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  .outline-card {
    margin: 16px;
    p {
      padding-top: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
}
@media screen and (max-width: 767px) {
  .outline-page {
    padding: 0 12px;
  }
}
</style>
