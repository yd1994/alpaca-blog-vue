<template>
    <div class="option-general">
      <h5>基本设置</h5>
      <Divider />
      <Row>
        <Col :xs="24" :sm="24" :md="8">
          <h1>admin</h1>
        </Col>
        <Col :xs="24" :sm="24" :md="16">
          <Divider orientation="left">系统资料</Divider>
          <Form label-position="top">
            <FormItem label="站点名称">
              <Input v-model="siteName" placeholder="站点的名称将显示在网页的标题处." />
              <p><small>站点的名称将显示在网页的标题处.</small></p>
            </FormItem>
            <FormItem label="站点地址">
              <Input v-model="siteAddress" type="url" placeholder="站点地址主要用于生成内容的永久链接." />
              <p><small>站点地址主要用于生成内容的永久链接.</small></p>
            </FormItem>
            <FormItem label="站点描述">
              <Input v-model="siteDescription" type="textarea" placeholder="站点描述将显示在网页代码的头部." />
              <p><small>站点描述将显示在网页代码的头部.</small></p>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="clickUpdateBUtton">更新资料</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>
</template>

<script>
export default {
  name: 'OptionGeneral',
  data () {
    return {
      siteName: '',
      siteAddress: '',
      siteDescription: ''
    }
  },
  methods: {
    init: function () {
      this.siteName = this.$store.state.sysInformation.siteName.value
      this.siteAddress = this.$store.state.sysInformation.siteAddress.value
      this.siteDescription = this.$store.state.sysInformation.siteDescription.value
    },
    load: function () {
      this.loadSiteName()
      this.loadSiteAddress()
      this.loadSiteDescription()
    },
    loadSiteName: function () {
      let siteNameUri = this.$api.apiInfo.sysInformation.siteName.uri
      this.$api.get(siteNameUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.siteName = this.$store.state.sysInformation.siteName.value
      })
    },
    loadSiteAddress: function () {
      let siteAddressUri = this.$api.apiInfo.sysInformation.siteAddress.uri
      this.$api.get(siteAddressUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.siteAddress = this.$store.state.sysInformation.siteAddress.value
      })
    },
    loadSiteDescription: function () {
      let siteDescriptionUri = this.$api.apiInfo.sysInformation.siteDescription.uri
      this.$api.get(siteDescriptionUri, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.siteDescription = this.$store.state.sysInformation.siteDescription.value
      })
    },
    update: function () {
      if (this.siteName !== this.$store.state.sysInformation.siteName.value) {
        let siteNameUri = this.$api.apiInfo.sysInformation.siteName.uri
        let params = {
          value: this.siteName,
          version: this.$store.state.sysInformation.siteName.version
        }
        this.$api.put(siteNameUri, params, response => {
          this.loadSiteName()
        })
      }
      if (this.siteAddress !== this.$store.state.sysInformation.siteAddress.value) {
        let siteAddressUri = this.$api.apiInfo.sysInformation.siteAddress.uri
        let params = {
          value: this.siteAddress,
          version: this.$store.state.sysInformation.siteName.version
        }
        this.$api.put(siteAddressUri, params, response => {
          this.loadSiteAddress()
        })
      }
      if (this.siteDescription !== this.$store.state.sysInformation.siteDescription.value) {
        let siteDescriptionUri = this.$api.apiInfo.sysInformation.siteDescription.uri
        let params = {
          value: this.siteDescription,
          version: this.$store.state.sysInformation.siteName.version
        }
        this.$api.put(siteDescriptionUri, params, response => {
          this.loadSiteDescription()
        })
      }
    },
    clickUpdateBUtton: function () {
      this.update()
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style lang="scss">
.option-general {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
}
@media screen and (max-width: 767px) {
  .option-general {
    padding: 0 12px;
  }
}
</style>
