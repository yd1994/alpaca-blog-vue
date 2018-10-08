<template>
  <div class="category-management-page">
    <h5>分类管理</h5>
    <Divider />
    <Row type="flex" justify="end">
      <Col span="6" :style="{textAlign: 'right', marginBottom: '16px'}">
        <Button type="success" @click="clickAddCategory">新增</Button>
        <Button type="primary" @click="reloadCategoryList">刷新</Button>
      </Col>
    </Row>
    <CategoryManagementCard v-for="category in categoryList" :key="category.id"
                            :category="category" @data-change="reloadCategoryList"
                            @click-update="clickUpdateCategory(category)" @click-delete="clickDelete(category)"/>
    <Page :total="categoryListTotal" :style="{textAlign: 'center'}" :simple="pageSimple" show-total @on-change="changePage" />
    <Modal v-model="formModel.show" :title="formModel.title" :footer-hide="true">
      <Form :label-width="80" :model="formModel.category" :rules="formModel.ruleValidate">
        <FormItem label="分类名称" prop="name">
          <Input v-model="formModel.category.name" placeholder="分类名称"></Input>
        </FormItem>
        <FormItem label="分类描述">
          <Input type="textarea" v-model="formModel.category.description" placeholder="分类描述"></Input>
        </FormItem>
        <Alert v-if="showFormModelMsg" type="error">{{ formModel.errMsg }}</Alert>
        <FormItem>
          <Button type="primary" @click="clickFormModelOK">提交</Button>
          <Button @click="clickFormModelReset" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import CategoryManagementCard from './CategoryManagementCard'
const FORM_MODEL_TYPE = {
  add: '添加',
  update: '修改'
}
export default {
  name: 'CategoryManagementPage',
  data () {
    return {
      categoryPage: {
        page: this.$api.apiInfo.categories.request.params.page,
        size: this.$api.apiInfo.categories.request.params.size
      },
      categoryList: [],
      categoryListTotal: 0,
      formModel: {
        show: false,
        type: FORM_MODEL_TYPE.add,
        title: '',
        errMsg: '',
        category: {
          id: 0,
          name: '',
          description: '',
          version: -1
        },
        ruleValidate: {
          name: [{required: true, message: '分类名称不能为空', trigger: 'blur'}]
        }
      }
    }
  },
  computed: {
    pageSimple: function () {
      return this.$store.state.screenWidth <= 767
    },
    showFormModelMsg: function () {
      return this.formModel.errMsg !== ''
    }
  },
  methods: {
    changePage: function (page) {
      this.categoryPage.page = page
    },
    loadCategoryList: function () {
      let uri = this.$api.apiInfo.categories.uri
      let params = {
        page: this.categoryPage.page,
        size: this.categoryPage.size,
        sortByDesc: 'created'
      }
      this.$api.get(uri, params, response => {
        this.categoryList = response.data.data
        this.categoryListTotal = response.data.total
      })
    },
    reloadCategoryList: function () {
      this.loadCategoryList()
    },
    addCategory: function () {
      let uri = this.$api.apiInfo.categories.uri
      let params = {
        name: this.formModel.category.name,
        description: this.formModel.category.description
      }
      this.$api.post(uri, params, response => {
        this.formModel.show = false
        this.reloadCategoryList()
      })
    },
    updateCategory: function () {
      let uri = this.$api.apiInfo.categories.uri + this.formModel.category.id.toString()
      let params = {
        name: this.formModel.category.name,
        description: this.formModel.category.description,
        version: this.formModel.category.version
      }
      this.$api.put(uri, params, response => {
        this.formModel.show = false
        this.reloadCategoryList()
      })
    },
    clickAddCategory: function () {
      this.formModel.errMsg = ''
      this.formModel.title = '新增'
      this.formModel.type = FORM_MODEL_TYPE.add
      this.formModel.category.id = 0
      this.formModel.category.name = ''
      this.formModel.category.description = ''
      this.formModel.show = true
    },
    clickUpdateCategory: function (category) {
      this.formModel.errMsg = ''
      this.formModel.title = '修改'
      this.formModel.type = FORM_MODEL_TYPE.update
      this.formModel.category.id = category.id
      this.formModel.category.name = category.name
      this.formModel.category.description = category.description
      this.formModel.category.version = category.version
      this.formModel.show = true
    },
    clickFormModelOK: function () {
      console.info('clickFormModelOK')
      if (this.formModel.category.name === '') {
        this.formModel.errMsg = '分类名称不能为空'
        return false
      }
      switch (this.formModel.type) {
        case FORM_MODEL_TYPE.add:
          this.addCategory()
          break
        case FORM_MODEL_TYPE.update:
          this.updateCategory()
          break
      }
    },
    clickFormModelReset: function () {
      this.formModel.category.name = ''
      this.formModel.category.description = ''
    },
    clickDelete: function (category) {
      let _this = this
      let config = {
        content: '确认删除分类[ ' + category.name + ' ]',
        onOk: () => { _this.deleteCategory(category.id, _this) }
      }
      this.utils.model.confirm(config)
    },
    deleteCategory: function (categoryId, _this) {
      let uri = this.$api.apiInfo.categories.uri + categoryId.toString()
      let params = {}
      if (_this === undefined) _this = this
      _this.$api.delete(uri, params, response => {
        this.formModel.show = false
        this.reloadCategoryList()
      })
    }
  },
  components: {
    CategoryManagementCard
  },
  mounted () {
    this.loadCategoryList()
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
