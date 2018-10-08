<template>
  <div class="article-management-card">
    <Card class="card">
      <Row>
        <Col :xs="24" :sm="24" :md="6">
          <small>{{ article.category.name }}</small>
          <Divider type="vertical" />
          <small>发布时间：<Time :time="article.created" /></small>
        </Col>
        <Col :xs="24" :sm="18" :md="13" class="card-content">
          {{ article.title }}
        </Col>
        <Col :xs="24" :sm="6" :md="5" :style="{textAlign: 'right'}">
          <Button type="info" size="small" @click="clickShowButton"><Icon type="ios-eye" />查看</Button>
          <Button type="warning" size="small" @click="clickUpdateButton"><Icon type="ios-create" />修改</Button>
          <Dropdown trigger="click" size="small" placement="bottom-end" @on-click="clickDropdown">
            <Button type="primary" size="small">
              更多
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="delete" :style="{color: 'red'}"><Icon type="ios-trash-outline" />删除</DropdownItem>
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
  },
  methods: {
    clickShowButton: function () {
      this.$router.push({name: 'Article', params: {articleId: this.article.id.toString()}})
    },
    clickUpdateButton: function () {
      this.$router.push({name: 'WriteArticleUpdate', params: {articleId: this.article.id.toString()}})
    },
    clickDropdown: function (name) {
      if (name === 'delete') {
        this.deleteArticle()
      }
    },
    clickDeleteButton: function () {
    },
    deleteArticle: function () {
      console.info('clickDeleteButton')
      let _this = this
      let config = {
        content: '确认删除分类[ ' + _this.article.title + ' ]',
        onOk: () => {
          this.utils.model.confirm(config)
          let uri = this.$api.apiInfo.articles.uri + _this.article.id.toString()
          let params = {}
          if (_this === undefined) _this = this
          _this.$api.delete(uri, params, () => { _this.dataChange() })
        }
      }
      this.utils.model.confirm(config)
    },
    dataChange: function () {
      this.$emit('data-change')
    }
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
