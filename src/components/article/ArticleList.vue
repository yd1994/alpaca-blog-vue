<template>
  <div id="article-list">
    <h5>{{ listTitle }}</h5>
    <Divider />
    <ArticleInfoCard v-for="article in articleList" :key="article.id" :article="article"></ArticleInfoCard>
  </div>
</template>

<script>
import ArticleInfoCard from './ArticleInfoCard'
const LIST_TYPE = {
  HOME: 'home',
  CATEGORY: 'category'
}
export default {
  name: 'ArticleList',
  props: {
    listType: {
      type: String,
      default: LIST_TYPE.HOME
    },
    meta: {
      type: Object
    }
  },
  data () {
    return {
      articleList: [
        {
          id: '1',
          title: 'How to stop data centres from gobbling up the world’s electricity',
          content: 'Upload your latest holiday photos to Facebook, and there’s a chance they’ll end up stored in Prineville, Oregon, a small town where the firm has built three giant data centres and is planning two more. Inside these vast factories, bigger than aircraft carriers, tens of thousands of circuit boards are racked row upon row, stretching down windowless halls so long that staff ride through the corridors on scooters.',
          category: {
            id: '1',
            name: '默认分类',
            description: ''
          },
          time: '3天前'
        },
        {
          id: '2',
          title: 'How to stop data centres from gobbling up the world’s electricity',
          content: 'Upload your latest holiday photos to Facebook, and there’s a chance they’ll end up stored in Prineville, Oregon, a small town where the firm has built three giant data centres and is planning two more. Inside these vast factories, bigger than aircraft carriers, tens of thousands of circuit boards are racked row upon row, stretching down windowless halls so long that staff ride through the corridors on scooters.',
          category: {
            id: '1',
            name: '默认分类',
            description: ''
          },
          time: '3天前'
        }
      ]
    }
  },
  computed: {
    listTitle: function () {
      return this.listType === LIST_TYPE.HOME ? '最新文章' : this.meta.name
    }
  },
  components: {
    ArticleInfoCard
  }
}
</script>

<style lang="scss">
  #article-list {
    padding: 0 16px;
  }
</style>
