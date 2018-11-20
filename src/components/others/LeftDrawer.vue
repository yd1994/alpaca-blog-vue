<template>
  <Drawer title="Alpaca Blog" placement="left" :closable="false" :inner="true" v-model="show" @on-close="onCloseDrawer">
    <CellGroup @on-click="clickCell">
      <Cell title="关于博主" to="/about"  />
      <Cell title="后台管理" to="/admin" />
    </CellGroup>
  </Drawer>
</template>

<script>
export default {
  name: 'LeftDrawer',
  model: {
    prop: 'showDrawer',
    event: 'change'
  },
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onCloseDrawer: function () {
      this.$emit('change', false)
    },
    clickCell: function () {
      this.$emit('change', false)
    }
  },
  watch: {
    showDrawer (newValue) {
      this.show = newValue
    }
  }
}
</script>

<style scoped>

</style>
