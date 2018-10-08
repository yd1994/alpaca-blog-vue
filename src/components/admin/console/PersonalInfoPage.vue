<template>
  <div class="personal-info">
    <h5>个人信息</h5>
    <Divider />
    <Row>
      <Col :xs="24" :sm="24" :md="8">
        <h1>admin</h1>
      </Col>
      <Col :xs="24" :sm="24" :md="16">
        <Divider orientation="left">个人资料</Divider>
        <Form label-position="top">
          <FormItem label="昵称">
            <Input v-model="personalName" placeholder="用户昵称可以与用户名不同, 用于前台显示." />
            <p><small>用户昵称可以与用户名不同, 用于前台显示.</small></p>
          </FormItem>
          <FormItem label="电子邮箱地址">
            <Input v-model="personalEmail" type="email" placeholder="电子邮箱地址将作为此用户的主要联系方式."/>
            <p><small>电子邮箱地址将作为此用户的主要联系方式.</small></p>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="clickPersonalUpdateButton">更新个人资料</Button>
          </FormItem>
        </Form>
        <Divider orientation="left">密码修改</Divider>
        <Form label-position="top">
          <FormItem label="原始密码">
            <Input v-model="oldPassword" type="password" placeholder="原始密码" />
          </FormItem>
          <FormItem label="新密码">
            <Input v-model="newPassword" type="password" placeholder="新密码." />
          </FormItem>
          <FormItem label="新密码确认">
            <Input v-model="confirmPassword" type="password" placeholder="新密码确认." />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="clickUpdatePasswordButton">更新密码</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      personalName: '',
      personalEmail: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    init: function () {
      this.personalName = this.$store.state.sysInformation.personalName.value
      this.personalEmail = this.$store.state.sysInformation.personalEmail.value
    },
    load: function () {
      this.loadPersonalName()
      this.loadPersonalEmail()
    },
    loadPersonalName: function () {
      let sitePersonalName = this.$api.apiInfo.sysInformation.personalName.uri
      this.$api.get(sitePersonalName, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.personalName = this.$store.state.sysInformation.personalName.value
      })
    },
    loadPersonalEmail: function () {
      let sitePersonalEmail = this.$api.apiInfo.sysInformation.personalEmail.uri
      this.$api.get(sitePersonalEmail, {}, response => {
        this.$store.commit('changeSysInformation', response.data)
        this.personalEmail = this.$store.state.sysInformation.personalEmail.value
      })
    },
    updatePersonal: function () {
      if (this.personalName !== this.$store.state.sysInformation.personalName.value) {
        let personalNameUri = this.$api.apiInfo.sysInformation.personalName.uri
        let params = {
          value: this.personalName,
          version: this.$store.state.sysInformation.personalName.version
        }
        this.$api.put(personalNameUri, params, response => {
          this.loadPersonalName()
        })
      }
      if (this.personalEmail !== this.$store.state.sysInformation.personalEmail.value) {
        let personalEmailUri = this.$api.apiInfo.sysInformation.personalEmail.uri
        let params = {
          value: this.personalEmail,
          version: this.$store.state.sysInformation.personalEmail.version
        }
        this.$api.put(personalEmailUri, params, response => {
          this.loadPersonalEmail()
        })
      }
    },
    clickPersonalUpdateButton: function () {
      this.updatePersonal()
    },
    clickUpdatePasswordButton: function () {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.personal-info {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
}
@media screen and (max-width: 767px) {
  .personal-info {
    padding: 0 12px;
  }
}
</style>
