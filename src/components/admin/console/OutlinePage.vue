<template>
  <div class="outline-page">
    <h5>网站概要</h5>
    <Divider />
    <p :style="{margin: '16px'}">共有文章：{{ articleTotal }}</p>
    <p :style="{margin: '16px'}">共有分类：{{ categoryTotal }}</p>
    <h3 :style="{margin: '32px 0 16px'}">点击下面的链接快速开始:</h3>
    <p><Button type="primary">撰写新文章</Button><Button type="warning" :style="{marginLeft: '16px'}">系统设置</Button></p>
    <Divider />
    <Row>
      <Col :xs="24" :md="12">
        <Card class="outline-card">
          <h4 slot="title">
            <Icon type="ios-film-outline"></Icon>
            最新发布文章
          </h4>
          <p v-for="article in articleList" :key="article.id">{{ article.time }}<Divider type="vertical"/>{{ article.title }}</p>
        </Card>
      </Col>
      <Col :xs="24" :md="12">
        <Card class="outline-card">
          <h4 slot="title">
            <Icon type="ios-film-outline"></Icon>
            官方最新
          </h4>
          <p v-for="article in articleList" :key="article.id">{{ article.time }}<Divider type="vertical"/>{{ article.title }}</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'OutlinePage',
  data () {
    return {
      articleTotal: 0,
      categoryTotal: 0,
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
      ]
    }
  }
}
</script>

<style lang="scss">
.outline-page {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  .outline-card {
    margin: 16px;
    p {
      padding-top: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
}
@media screen and (max-width: 767px) {
  .outline-page {
    padding: 0 12px;
  }
}
</style>
