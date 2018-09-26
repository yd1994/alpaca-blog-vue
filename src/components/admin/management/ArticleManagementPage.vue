<template>
  <div class="article-management">
    <h5>文章管理</h5>
    <Divider />
    <Row type="flex" justify="space-between">
      <Col span="20">
        <RadioGroup v-model="articleListType" type="button" size="small">
          <Radio label="已发布"></Radio>
          <Radio label="未发布"></Radio>
        </RadioGroup>
      </Col>
      <Col span="4" :style="{textAlign: 'right'}">
        <Button type="primary" @click="clickAddArticle">新增</Button>
      </Col>
    </Row>
    <div class="article-management-search">
      <Row type="flex" justify="end" :gutter="2">
        <Col :xs="12" :sm="5">
          <Input v-model="search.text" size="small" placeholder="输入标题" />
        </Col>
        <Col :xs="6" :sm="3">
          <Select v-model="search.category" size="small">
            <Option v-for="category in categoryList" :value="category.id" :key="category.id">{{ category.name }}</Option>
          </Select>
        </Col>
        <Col :xs="4" :sm="2">
          <Button size="small" @click="clickSearch"><Icon type="md-search" />筛选</Button>
        </Col>
      </Row>
    </div>
    <ArticleManagementCard v-for="article in articleList" :key="article.id" :article="article"></ArticleManagementCard>
    <Page :total="100" :style="{textAlign: 'center'}" :simple="pageSimple" show-total @on-change="changePage" />
  </div>
</template>

<script>
import ArticleManagementCard from './ArticleManagementCard'
export default {
  name: 'ArticleManagement',
  data () {
    return {
      articleListType: '已发布',
      search: {
        text: '',
        category: ''
      },
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
      ],
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
  computed: {
    pageSimple: function () {
      return this.$store.state.screenWidth <= 767
    }
  },
  methods: {
    clickSearch: function () {
      this.$Message.info({content: 'test: ' + this.search.text + ' category: ' + this.search.category})
    },
    clickAddArticle: function () {
      this.$Message.info({content: 'click add article'})
    },
    changePage: function (page) {
    }
  },
  watch: {
    articleListType: function () {
      this.$Message.info({content: 'select: ' + this.articleListType})
    }
  },
  components: {
    ArticleManagementCard
  }
}
</script>

<style lang="scss">
.article-management {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  .article-management-search {
    margin: 24px 0 12px;
  }
}
@media screen and (max-width: 767px) {
  .article-management {
    padding: 0 12px;
  }
}
</style>
