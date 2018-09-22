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
              <Input placeholder="Enter something..." style="width: 300px" />
              <p><small>站点的名称将显示在网页的标题处.</small></p>
            </FormItem>
            <FormItem label="站点地址">
              <Input type="url" placeholder="Enter something..." style="width: 300px" />
              <p><small>站点地址主要用于生成内容的永久链接.</small></p>
            </FormItem>
            <FormItem label="站点描述">
              <Input type="email" placeholder="Enter something..." style="width: 300px" />
              <p><small>站点描述将显示在网页代码的头部.</small></p>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">更新个人资料</Button>
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
    return {}
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
