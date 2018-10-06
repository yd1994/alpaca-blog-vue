<template>
  <Time :time="time" :type="timeType" />
</template>

<script>
export default {
  name: 'TimeContainer',
  props: {
    time: {
      type: [Number, Date, String],
      required: true
    }
  },
  computed: {
    timeType: function () {
      const type = typeof this.time
      let time
      if (type === 'number') {
        const timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000
        time = (new Date(timestamp)).getTime()
      } else if (type === 'object') {
        time = this.time.getTime()
      } else if (type === 'string') {
        time = (new Date(this.time)).getTime()
      }
      let ms = new Date().getTime() - time
      if (ms / 1000 / 60 / 60 / 24 <= 7) {
        return 'relative'
      } else {
        return 'date'
      }
    }
  }
}
</script>

<style lang="scss">
.time-container {
}
</style>
