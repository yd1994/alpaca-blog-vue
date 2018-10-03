<template>
  <div id="article-info-card">
    <Card :bordered="false" dis-hover :style="{maxHeight: '128px'}">
      <h4 slot="title"><a @click="clickArticle" >{{ article.title }}</a></h4>
      <p class="card-content">{{ article.content }}</p>
      <p><small>
        <a @click="clickCategory">{{ article.category.name }}</a>
        <Divider type="vertical"/>
        <Time :time="article.created" />
      </small></p>
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
  computed: {
  },
  methods: {
    clickArticle: function () {
      this.$router.push({name: 'Article', params: {articleId: this.article.id.toString()}})
    },
    clickCategory: function () {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: this.article.category.id.toString()}})
    }
  }
}
</script>

<style lang="scss">
#article-info-card {
  margin: 16px 0;
  .card-content {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
@media screen and (max-width: 767px) {
  #article-info-card {
    margin: 32px 0;
  }
}
</style>
