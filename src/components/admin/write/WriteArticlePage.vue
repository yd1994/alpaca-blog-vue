<template>
  <div class="write-article">
    <h5>撰写文章</h5>
    <Divider />
    <Card>
      <Form :model="article" :label-width="80">
        <FormItem label="标题">
          <Input v-model="article.title" placeholder="标题"/>
        </FormItem>
        <FormItem label="简介">
          <Input type="textarea" v-model="article.summary" placeholder="简介"/>
        </FormItem>
        <FormItem label="置顶">
          <i-switch v-model="article.top" />
        </FormItem>
        <FormItem label="分类">
          <Select v-model="article.category.id">
            <Option v-for="category in categoryList" :value="category.id" :key="category.id">{{ category.name }}</Option>
          </Select>
        </FormItem>
      </Form>
    </Card>
    <mavon-editor ref="mavonEditor" v-model="article.content"
                  :subfield="subfuelf" @imgAdd="imageAdd" />
    <Card dis-hover>
      <Button type="success" long @click="clickSaveButton">保存</Button>
    </Card>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'WriteArticle',
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      article: { title: '', summary: '', top: false, content: '', version: 0, category: { id: 0 } },
      categoryPage: {
        page: this.$api.apiInfo.categories.request.params.page,
        size: this.$api.apiInfo.categories.request.params.size
      },
      categoryList: []
    }
  },
  computed: {
    subfuelf: function () {
      return this.$store.state.screenWidth > 767
    }
  },
  methods: {
    imageAdd: function (pos, $file) {
      let formdata = new FormData()
      formdata.append('image', $file)
      let uri = this.$api.apiInfo.images.uri
      this.$api.post(uri, formdata, response => {
        console.info('imageAdd', response)
        let url = this.$api.apiInfo.baseUrl + this.$api.apiInfo.images.uri + response.data.data.toString()
        this.$refs.mavonEditor.$img2Url(pos, url)
      })
    },
    addArticle: function () {
      let uri = this.$api.apiInfo.articles.uri
      let params = {
        title: this.article.title,
        summary: this.article.summary,
        top: this.article.top,
        content: this.article.content,
        'category.id': this.article.category.id
      }
      this.$api.post(uri, params, response => {
        const _this = this
        const statusMethods = {
          method200: function () {
            _this.$router.push({ name: 'ArticleManagement' })
          }
        }
        this.utils.httpResponsePostProcessing(response, statusMethods)
      })
    },
    updateArticle: function () {
      let uri = this.$api.apiInfo.articles.uri + this.articleId
      let params = {
        title: this.article.title,
        summary: this.article.summary,
        top: this.article.top,
        content: this.article.content,
        version: this.article.version,
        'category.id': this.article.category.id
      }
      this.$api.put(uri, params, response => {
        const _this = this
        const statusMethods = {
          method200: function () {
            _this.$router.push({ name: 'ArticleManagement' })
          }
        }
        this.utils.httpResponsePostProcessing(response, statusMethods)
      })
    },
    clickSaveButton: function () {
      if (this.articleId === '') {
        this.addArticle()
      } else {
        this.updateArticle()
      }
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
    loadArticle: function (articleId) {
      let uri = this.$api.apiInfo.articles.uri + articleId
      let params = {
      }
      this.$api.get(uri, params, response => {
        let article = response.data
        console.info('loadArticle', article)
        this.article.title = article.title
        this.article.summary = article.summary
        this.article.top = article.top
        this.article.content = article.content
        this.article.version = article.version
        if (article.category !== undefined) {
          this.article.category.id = article.category.id
        }
      })
    }
  },
  components: {
    mavonEditor
  },
  mounted () {
    this.loadCategoryList()
    if (this.articleId !== '') {
      this.loadArticle(this.articleId)
    }
  },
  watch: {
    articleId: function (newArticleId) {
      if (newArticleId === '') {
        this.article.title = ''
        this.article.summary = ''
        this.article.top = false
        this.article.content = ''
        this.article.version = 0
        this.article.category.id = 0
      } else {
        this.loadArticle(newArticleId)
      }
    }
  }
}
</script>

<style lang="scss">
.write-article {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  .v-note-wrapper {
    z-index: auto;
  }
}
@media screen and (max-width: 767px) {
  .write-article {
    padding: 0 12px;
  }
}
</style>
