<template>
  <div id="admin-header">
    <Menu mode="horizontal" theme="dark" active-name="Outline" class="menu" @on-select="clickMenu" >
      <Submenu class="model-menu-item" name="console">
        <template slot="title">
          <Icon class="item-icon" type="md-browsers" />
          控制台
        </template>
        <MenuItem name="Outline">概要</MenuItem>
        <MenuItem name="PersonalInfo">个人信息</MenuItem>
      </Submenu>
      <MenuItem class="model-menu-item" name="WriteArticle">
        <Icon class="item-icon" type="md-code" />
        撰写
      </MenuItem>
      <Submenu class="model-menu-item" name="management">
        <template slot="title">
          <Icon class="item-icon" type="ios-paper" />
          管理
        </template>
        <MenuItem name="ArticleManagement">文章</MenuItem>
        <MenuItem name="CategoryManagement">分类</MenuItem>
      </Submenu>
      <Submenu class="model-menu-item" name="options">
        <template slot="title">
          <Icon class="item-icon" type="md-build" />
          设置
        </template>
        <MenuItem name="OptionGeneral">基本</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader',
  data () {
    return {
    }
  },
  methods: {
    clickMenu: function (name) {
      if (name.indexOf('-') !== -1 || name === '2') return
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss">
#admin-header {
  margin-bottom: 64px;
  background-color: #515a6e;
  .menu {
  }
}
@media screen and (max-width: 767px) {
  #admin-header {
    margin-bottom: 16px;
    .menu {
      height: 42px;
      line-height: 42px;
      .model-menu-item {
        height: 42px;
        padding: 0 0 0 12px;
        .item-icon {
          display: none;
        }
      }
    }
  }
}
</style>
