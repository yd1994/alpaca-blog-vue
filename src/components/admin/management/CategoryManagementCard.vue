<template>
    <div class="category-management-card">
      <Card class="card">
        <Row>
          <Col :xs="24" :sm="8" :md="6">
            <h4>{{ category.name }}</h4>
          </Col>
          <Col :xs="24" :sm="16" :md="13">
            <p class="card-content"><small>{{ category.description }}</small></p>
          </Col>
          <Col :xs="24" :sm="24" :md="5" :style="{textAlign: 'right'}">
            <Button type="warning" size="small" @click="clickUpdateButton"><Icon type="ios-create" />修改</Button>
            <Button v-if="category.available" @click="clientCategoryAvailable(true, category.id, category.version)" type="info" size="small"><Icon type="ios-eye" />不展示</Button>
            <Button v-if="!category.available" @click="clientCategoryAvailable(false, category.id, category.version)" type="warning" size="small"><Icon type="ios-eye" />展示</Button>
            <Button type="error" size="small" @click="clickDeleteButton"><Icon type="ios-eye" />删除</Button>
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
  },
  methods: {
    clientCategoryAvailable: function (available, categoryId, version) {
      let title = ''
      let content = ''
      if (available) {
        title = '不展示'
        content = '确认不展示该分类以及该分类下的所有文章？'
      } else {
        title = '展示'
        content = '确认展示该分类以及该分类下的所有文章？'
      }
      const _this = this
      let onOk = function () {
        let uri = _this.$api.apiInfo.categories.uri + categoryId.toString()
        let params = {
          available: !available,
          version: version
        }
        _this.$api.put(uri, params, response => {
          const statusMethods = {
            method200: function () {
              _this.dataChange()
              _this.$Message.success({content: '修改成功'})
            }
          }
          _this.utils.httpResponsePostProcessing(response, statusMethods)
        })
      }
      this.utils.model.confirm({title: title, content: content, onOk: onOk})
    },
    dataChange: function () {
      this.$emit('data-change')
    },
    clickUpdateButton: function () {
      this.$emit('click-update')
    },
    clickDeleteButton: function () {
      this.$emit('click-delete')
    }
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
