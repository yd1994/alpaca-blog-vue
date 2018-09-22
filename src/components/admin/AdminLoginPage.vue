<template>
  <div id="admin-login">
    <div class="admin-background"></div>
    <Form :rules="ruleInline" class="admin-login-from">
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    clickLogin: function () {
      let content = 'username: ' + this.loginInfo.username + ', password: ' + this.loginInfo.password
      this.$Message.info({content: content})
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
