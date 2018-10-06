<template>
  <div class="write-article">
    <h5>撰写文章</h5>
    <Divider />
    <Card>
      <Form :model="articles" :label-width="80">
        <FormItem label="标题">
          <Input v-model="articles.title" placeholder="标题"/>
        </FormItem>
        <FormItem label="简介">
          <Input type="textarea" v-model="articles.summary" placeholder="简介"/>
        </FormItem>
        <FormItem label="置顶">
          <i-switch v-model="articles.top" />
        </FormItem>
      </Form>
    </Card>
    <mavon-editor v-model="articles.content" :subfield="subfuelf" @imgAdd="imageAdd"/>
    <Card dis-hover>
      <Button type="success" long>保存</Button>
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
      articles: {
        title: '',
        summary: '',
        top: false,
        content: ''
      }
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
      let uri = this.$api.apiInfo.images.uri
      this.$api.post(uri, formdata, response => {
        console.info('imageAdd', response)
        let url = this.$api.apiInfo.images.uri + response.data.data.toString()
        mavonEditor.$img2Url(pos, url)
      })
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
