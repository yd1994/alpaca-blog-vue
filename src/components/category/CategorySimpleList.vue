<template>
  <div id="category-simple-list">
    <h5>全部分类</h5>
    <Divider />
    <p v-for="item in categoryList" :key="item.id"><a>{{ item.name }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'CategorySimpleList',
  data () {
    return {
      categoryList: [
        {
          id: 1,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 2,
          name: '随笔',
          descript: '点点滴滴'
        },
        {
          id: 3,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 4,
          name: '随笔',
          descript: '点点滴滴'
        },
        {
          id: 5,
          name: '默认分类',
          descript: '只是默认分类'
        },
        {
          id: 6,
          name: '随笔',
          descript: '点点滴滴'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#category-simple-list {
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
</style>
