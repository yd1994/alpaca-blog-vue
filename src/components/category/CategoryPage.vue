<template>
<div id="category-page">
  <h5>分类</h5>
  <Divider />
  <div class="category-box" v-for="category in categoryList" :key="category.id">
    <h4><a @click="clickTitle(category.id)">{{ category.name }}</a></h4>
    <p><small>{{ category.description }}</small></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      categoryList: [],
      page: this.$api.apiInfo.categories.request.params.page,
      size: this.$api.apiInfo.categories.request.params.size
    }
  },
  methods: {
    clickTitle: function (categoryId) {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: categoryId.toString()}})
    },
    loadCategoryList: function () {
      let uri = this.$api.apiInfo.categories.uri
      let params = {
        page: this.page,
        size: this.size
      }
      this.$api.get(uri, params, response => {
        response.data.data.data.forEach(category => {
          this.categoryList.push(category)
        })
      })
    }
  },
  mounted () {
    this.loadCategoryList()
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
    padding: 12px 12px 12px 36px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
}
@media screen and (max-width: 767px) {
  #category-page {
  }
}
</style>
