<template>
    <div class="category-management-page">
      <h5>分类管理</h5>
      <Divider />
      <Row type="flex" justify="space-between">
        <Col span="20">
        </Col>
        <Col span="4" :style="{textAlign: 'right', marginBottom: '16px'}">
          <Button type="primary" @click="clickAddCategory">新增</Button>
        </Col>
      </Row>
      <CategoryManagementCard v-for="category in categoryList" :key="category.id" :category="category"></CategoryManagementCard>
    </div>
</template>

<script>
import CategoryManagementCard from './CategoryManagementCard'
export default {
  name: 'CategoryManagementPage',
  data () {
    return {
      categoryList: [
        {
          id: 1,
          name: '默认分类',
          description: '只是默认分类'
        },
        {
          id: 2,
          name: '随笔',
          description: '点点滴滴'
        },
        {
          id: 3,
          name: '默认分类',
          description: '只是默认分类'
        },
        {
          id: 4,
          name: '随笔',
          description: '点点滴滴'
        },
        {
          id: 5,
          name: '默认分类',
          description: '只是默认分类'
        },
        {
          id: 6,
          name: '随笔',
          description: '点点滴滴'
        }
      ]
    }
  },
  methods: {
    clickAddCategory: function () {
      this.utils.model.confirmDeletion({content: '删除苦难不会也'})
    }
  },
  components: {
    CategoryManagementCard
  }
}
</script>

<style lang="scss">
.category-management-page {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
}
@media screen and (max-width: 767px) {
  .category-management-page {
  }
}
</style>
