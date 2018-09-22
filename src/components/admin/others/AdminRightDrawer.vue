<template>
  <div class="admin-right-drawer">
    <Drawer title="Basic Drawer" :closable="false" v-model="show" :on-close="onClose">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'AdminRightDrawer',
  model: {
    prop: 'showDrawer',
    event: 'chang'
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
    onClose: function () {
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

<style lang="scss">
.admin-right-drawer{
}
</style>
