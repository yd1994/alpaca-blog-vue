<template>
  <div class="spin-container">
    <Button v-if="!noMore && !loading" type="text" :style="{color: '#5cadff'}" long @click="loadMore">加载更多</Button>
    <Spin v-if="!noMore && loading" fix>
    </Spin>
    <span  v-if="noMore">
      <Spin fix>
        <span>暂无更多内容</span>
      </Spin>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SpinContainer',
  props: {
    noMore: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false,
      scrollTop: 0
    }
  },
  methods: {
    loadMore: function () {
      if (!this.loading) {
        this.loading = true
        this.$emit('on-loading')
        setTimeout(() => {
          // 0.5秒h后才能再次刷新
          this.loading = false
        }, 500)
      }
    },
    handleScroll: function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollHeight - scrollTop - windowHeight <= 64 && this.scrollTop < scrollTop) {
        this.loadMore()
      }
      this.scrollTop = scrollTop
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  .spin-container {
    margin-top: 8px;
    display: inline-block;
    width: 100%;
    height: 32px;
    position: relative;
  }
</style>
