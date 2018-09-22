<template>
    <div class="category-management-card">
      <Card class="card">
        <Row>
          <Col :xs="24" :sm="8" :md="8">
            <h4>{{ category.name }}</h4>
          </Col>
          <Col :xs="24" :sm="16" :md="11">
            <p class="card-content"><small>{{ category.description }}</small></p>
          </Col>
          <Col :xs="24" :sm="24" :md="5" :style="{textAlign: 'right'}">
            <Button type="warning" size="small"><Icon type="ios-create" />修改</Button>
            <Button type="info" size="small"><Icon type="ios-eye" />不展示</Button>
            <Button type="error" size="small"><Icon type="ios-eye" />删除</Button>
          </Col>
        </Row>
      </Card>
    </div>
</template>

<script>
export default {
  name: 'CategoryManagementCard',
  props: {
    category: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.category-management-card {
  .card {
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 767px) {
  .category-management-card {
    .card {
      .ivu-card-body {
        padding: 8px;
        .card-content {
          padding: 16px;
        }
      }
    }
  }
}
</style>
