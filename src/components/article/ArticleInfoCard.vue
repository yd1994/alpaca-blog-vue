<template>
  <div id="article-info-card">
    <Card :bordered="false" dis-hover>
      <h4 slot="title"><a @click="clickArticle" >{{ article.title }}</a></h4>
      <p>{{ article.content }}</p>
      <p><small><a @click="clickCategory">{{ article.category.name }}</a><Divider type="vertical"/>{{ article.time }}</small></p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfoCard',
  props: {
    article: {
      type: Object
    }
  },
  methods: {
    clickArticle: function () {
      this.$router.push({name: 'Article', params: {articleId: this.article.id}})
    },
    clickCategory: function () {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: this.article.category.id}})
    }
  }
}
</script>

<style scoped>
#article-info-card {
  margin: 10px 0;
}
</style>
