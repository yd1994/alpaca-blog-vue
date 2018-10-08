<template>
  <div class="article-management">
    <h5>文章管理</h5>
    <Divider />
    <Row type="flex" justify="end">
      <Col span="8" :style="{textAlign: 'right'}">
        <Button type="success" @click="clickAddArticle">新增</Button>
        <Button type="primary" @click="reloadAll">刷新</Button>
      </Col>
    </Row>
    <div class="article-management-search">
      <Row type="flex" justify="end" :gutter="2">
        <Col :xs="12" :sm="5">
          <Input v-model="search.text" size="small" placeholder="输入标题" />
        </Col>
        <Col :xs="6" :sm="3">
          <Select v-model="search.categoryId" size="small">
            <Option value="0">不选</Option>
            <Option v-for="category in categoryList" :value="category.id" :key="category.id">{{ category.name }}</Option>
          </Select>
        </Col>
        <Col :xs="4" :sm="2">
          <Button size="small" @click="clickSearch"><Icon type="md-search" />筛选</Button>
        </Col>
      </Row>
    </div>
    <ArticleManagementCard v-for="article in articleList" :key="article.id" :article="article"
                           @data-change="reloadArticleList"/>
    <Page :total="articleListTotal" :style="{textAlign: 'center'}" :simple="pageSimple" show-total @on-change="changePage" />
  </div>
</template>

<script>
import ArticleManagementCard from './ArticleManagementCard'
export default {
  name: 'ArticleManagement',
  components: {ArticleManagementCard},
  data () {
    return {
      articleListType: '已发布',
      search: {
        text: '',
        categoryId: ''
      },
      articlePage: {
        page: this.$api.apiInfo.articles.request.params.page,
        size: this.$api.apiInfo.articles.request.params.size
      },
      articleList: [],
      articleListTotal: 0,
      categoryPage: {
        page: this.$api.apiInfo.categories.request.params.page,
        size: this.$api.apiInfo.categories.request.params.size
      },
      categoryList: []
    }
  },
  computed: {
    pageSimple: function () {
      return this.$store.state.screenWidth <= 767
    }
  },
  methods: {
    clickSearch: function () {
      this.reloadArticleList()
    },
    clickAddArticle: function () {
      this.$router.push({name: 'WriteArticle'})
    },
    changePage: function (page) {
      this.articlePage.page = page
    },
    loadArticleList: function () {
      let uri = this.$api.apiInfo.articles.uri
      let params = {
        page: this.articlePage.page,
        size: this.articlePage.size,
        sortByDesc: 'created'
      }
      if (this.search.text !== '') {
        params.view = this.search.text
      }
      if (this.search.categoryId !== '' && this.search.categoryId !== '0') {
        params.categoryId = this.search.categoryId
      }
      this.$api.get(uri, params, response => {
        this.articleList = response.data.data
        this.articleListTotal = response.data.total
      })
    },
    reloadArticleList: function () {
      this.loadArticleList()
    },
    loadCategoryList: function () {
      let uri = this.$api.apiInfo.categories.uri
      let params = {
        page: this.categoryPage.page,
        size: this.categoryPage.size
      }
      this.$api.get(uri, params, response => {
        this.categoryList = response.data.data
      })
    },
    reloadAll: function () {
      this.loadArticleList()
      this.loadCategoryList()
    }
  },
  mounted () {
    this.loadArticleList()
    this.loadCategoryList()
  },
  watch: {
    articleListType: function () {
      this.$Message.info({content: 'select: ' + this.articleListType})
    }
  }
}
</script>

<style lang="scss">
.article-management {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  .article-management-search {
    margin: 24px 0 12px;
  }
}
@media screen and (max-width: 767px) {
  .article-management {
    padding: 0 12px;
  }
}
</style>
