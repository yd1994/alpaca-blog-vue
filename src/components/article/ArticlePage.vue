<template>
  <div id="article-page">
    <h2>{{ article.title }}</h2>
    <p><small>{{ article.time }}<Divider type="vertical"/><a @click="clickCategory">{{ article.category.name }}</a></small></p>
    <div class="article-page-content">{{ article.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: {
    articleId: {
      type: String
    }
  },
  data () {
    return {
      article: {
        id: '1',
        title: 'How to stop data centres from gobbling up the world’s electricity',
        content: 'Upload your latest holiday photos to Facebook, and there’s a chance they’ll end up stored in Prineville, Oregon, a small town where the firm has built three giant data centres and is planning two more. Inside these vast factories, bigger than aircraft carriers, tens of thousands of circuit boards are racked row upon row, stretching down windowless halls so long that staff ride through the corridors on scooters.',
        category: {
          id: '1',
          name: '默认分类',
          description: ''
        },
        time: '3天前'
      }
    }
  },
  methods: {
    clickCategory: function () {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: this.article.category.id}})
    }
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
