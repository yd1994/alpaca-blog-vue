<template>
  <div class="category-simple-list">
    <h5>全部分类</h5>
    <Divider />
    <p v-for="category in categoryList" :key="category.id"><a @click="clickCategory(category.id)">{{ category.name }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'CategorySimpleList',
  data () {
    return {
      categoryList: [],
      page: this.$api.apiInfo.categories.request.params.page,
      size: this.$api.apiInfo.categories.request.params.size
    }
  },
  methods: {
    loadCategoryList: function () {
      let uri = this.$api.apiInfo.categories.uri
      let params = {
        page: this.page,
        size: this.size
      }
      this.$api.get(uri, params, response => {
        this.categoryList = response.data.data
      })
    },
    clickCategory: function (categoryId) {
      this.$router.push({name: 'CategoryArticle', params: {categoryId: categoryId.toString()}})
    }
  },
  mounted () {
    this.loadCategoryList()
  }
}
</script>

<style lang="scss">
.category-simple-list {
  padding: 0 16px;
  p {
    padding: 4px 16px;
  }
  @media screen and (max-width: 767px) {
    p {
      padding: 2px 8px;
    }
  }
}
@media screen and (max-width: 767px) {
  .category-simple-list {
    padding-top: 32px;
  }
}
</style>
