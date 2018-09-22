<template>
  <div class="article-management-card">
    <Card class="card">
      <Row>
        <Col :xs="24" :sm="24" :md="8">
          <small>{{ article.category.name }}</small>
          <Divider type="vertical" />
          <small>发布时间：{{ article.time }}</small>
        </Col>
        <Col :xs="24" :sm="18" :md="11" class="card-content">
          {{ article.title }}
        </Col>
        <Col :xs="24" :sm="6" :md="5" :style="{textAlign: 'right'}">
          <Button type="info" size="small"><Icon type="ios-eye" />查看</Button>
          <Button type="warning" size="small"><Icon type="ios-create" />修改</Button>
          <Dropdown trigger="click" size="small" placement="bottom-end">
            <Button type="primary" size="small">
              更多
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem><Icon type="md-checkbox-outline" />不展示</DropdownItem>
              <DropdownItem :style="{color: 'red'}"><Icon type="ios-trash-outline" />删除</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ArticleManagementCard',
  props: {
    article: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.article-management-card {
  .card {
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 767px) {
  .article-management-card {
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
