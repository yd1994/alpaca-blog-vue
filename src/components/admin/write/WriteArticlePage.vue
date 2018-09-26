<template>
  <div class="write-article">
    <h5>撰写文章</h5>
    <Divider />
    <mavon-editor v-model="content" :subfield="subfuelf"/>
    <Card>
      <h1 @mouseenter="mouseenter">SUBMIT</h1>
    </Card>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'WriteArticle',
  data () {
    return {
      content: ''
    }
  },
  computed: {
    subfuelf: function () {
      return this.$store.state.screenWidth > 767
    }
  },
  methods: {
    imageAdd: function (pos, $file) {
      let formdata = new FormData()
      formdata.append('image', $file)
    },
    mouseenter: function () {
      this.$Message.info({content: 'mouseenter'})
    }
  },
  components: {
    mavonEditor
  }
}
</script>

<style lang="scss">
.write-article {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
}
@media screen and (max-width: 767px) {
  .write-article {
    padding: 0 12px;
  }
}
</style>
