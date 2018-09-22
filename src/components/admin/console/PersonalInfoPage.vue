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
            <Input placeholder="Enter something..." style="width: 300px" />
            <p><small>用户昵称可以与用户名不同, 用于前台显示.</small></p>
          </FormItem>
          <FormItem label="个人主页地址">
            <Input type="url" placeholder="Enter something..." style="width: 300px" />
            <p><small>此用户的个人主页地址, 请用 http://  或 https:// 开头.</small></p>
          </FormItem>
          <FormItem label="电子邮箱地址">
            <Input type="email" placeholder="Enter something..." style="width: 300px" />
            <p><small>电子邮箱地址将作为此用户的主要联系方式.</small></p>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">更新个人资料</Button>
          </FormItem>
        </Form>
        <Divider orientation="left">密码修改</Divider>
        <Form label-position="top">
          <FormItem label="用户密码">
            <Input placeholder="Enter something..." style="width: 300px" />
            <p><small>用户昵称可以与用户名不同, 用于前台显示.</small></p>
          </FormItem>
          <FormItem label="密码确认">
            <Input type="url" placeholder="Enter something..." style="width: 300px" />
            <p><small>此用户的个人主页地址, 请用 http://  或 https:// 开头.</small></p>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">更新密码</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo'
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
