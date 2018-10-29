<template>
  <div id="article-info-card">
    <Card :bordered="false" dis-hover :style="{maxHeight: '128px'}">
      <h4 slot="title"><a @click="clickArticle" >{{ article.title }}</a></h4>
      <p class="card-content">{{ article.summary }}</p>
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
    font-size: 12px;
    height: 36px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    display: -moz-box;
    -moz-line-clamp: 3;
    -moz-box-orient: vertical;
  }
}
@media screen and (max-width: 767px) {
  #article-info-card {
    margin: 32px 0;
  }
}
</style>
