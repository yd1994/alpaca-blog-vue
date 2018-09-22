<template>
<div id="category-page">
  <h5>分类</h5>
  <Divider />
  <div class="category-box" v-for="category in categoryList" :key="category.id">
    <h4><a @click="clickTitle(category.id)">{{ category.name }}</a></h4>
    <p><small>{{ category.descript }}</small></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      categoryList: [
        {
          id: 1,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 2,
          name: '随笔',
          descript: '点点滴滴'
        },
        {
          id: 3,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 4,
          name: '随笔',
          descript: '点点滴滴'
        },
        {
          id: 5,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 6,
          name: '随笔',
          descript: '点点滴滴'
        }
      ]
    }
  },
  methods: {
    clickTitle: function (categoryId) {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: categoryId}})
    }
  }
}
</script>

<style lang="scss">
#category-page {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
  .category-box {
    margin: 0 32px;
    padding: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
}
@media screen and (max-width: 767px) {
  #category-page {
  }
}
</style>
