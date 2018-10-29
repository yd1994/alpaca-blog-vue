<template>
  <div id="admin-login">
    <div class="admin-background"></div>
    <Form :rules="loginInfo" class="admin-login-from">
      <FormItem>
        <div class="admin-login-from-title">
          Alpaca-blog
        </div>
      </FormItem>
      <FormItem>
        <Input type="text" v-model="loginInfo.username" prefix="ios-contact" size="large" placeholder="请输入账号"></Input>
      </FormItem>
      <FormItem>
        <Input type="password" v-model="loginInfo.password" prefix="ios-lock" size="large" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="clickLogin">登陆</Button>
      </FormItem>
      <FormItem>
        <div class="admin-login-from-footer"><a @click="clickBackHome">返回首页</a></div>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data () {
    return {
      loginInfo: {
        username: 'admin',
        password: '',
        message: ''
      }
    }
  },
  methods: {
    clickLogin: function () {
      let uri = this.$api.apiInfo.oauth.token.uri
      this.message = ''
      let params = {
        grant_type: this.$api.apiInfo.oauth.token.request.params.grant_type,
        scope: this.$api.apiInfo.oauth.token.request.params.scope,
        client_id: this.$api.apiInfo.oauth.token.request.params.client_id,
        client_secret: this.$api.apiInfo.oauth.token.request.params.client_secret,
        username: this.loginInfo.username,
        password: this.loginInfo.password
      }
      let formdata = JSON.stringify(
        params
      )
      console.info(formdata)
      /*
      formdata.append('grant_type', this.$api.apiInfo.oauth.token.request.params.grant_type)
      formdata.append('scope', this.$api.apiInfo.oauth.token.request.params.scope)
      formdata.append('client_id', this.$api.apiInfo.oauth.token.request.params.client_id)
      formdata.append('client_secret', this.$api.apiInfo.oauth.token.request.params.client_secret)
      formdata.append('username', this.loginInfo.username)
      formdata.append('password', this.loginInfo.password)
      */
      this.$api.post(uri, params, response => {
        const _this = this
        const statusMethods = {
          method200: function () {
            window.localStorage.token_access_token = response.data.access_token
            // window.localStorage.token_refresh_token = response.data.refresh_token
            window.localStorage.token_expires_in = response.data.expires_in
            window.localStorage.token_expires_time = new Date().getTime() + response.data.expires_in * 1000
            window.localStorage.token_scope = response.data.scope
            window.localStorage.token_token_type = response.data.token_type
            _this.$Message.success({content: '登录成功'})
            _this.$router.push({name: 'Admin'})
          },
          method400: function () {
            _this.message = '帐号或者密码错误'
            _this.$Message.warning({content: '帐号或者密码错误', duration: 5})
          },
          method401: function () {
            _this.message = '帐号或者密码错误'
            _this.$Message.warning({content: '帐号或者密码错误', duration: 5})
          }
        }
        this.utils.httpResponsePostProcessing(response, statusMethods)
      })
    },
    clickBackHome: function () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss">
#admin-login {
  padding: 128px 36px;
  .admin-background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #36563C;
  }
  .admin-login-from {
    max-width: 256px;
    margin: 0 auto;
    .admin-login-from-title {
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: white;
    }
    .admin-login-from-footer {
      text-align: center;
      a {
        color: white;
      }
      a:hover {
        color: gainsboro;
      }
    }
  }
}
</style>
