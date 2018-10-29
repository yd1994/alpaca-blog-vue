<template>
  <div id="admin-header">
    <Menu ref="adminMenu" mode="horizontal" theme="dark" active-name="Outline" class="menu" @on-select="selectMenu">
      <Submenu ref="subMenuConsole" class="model-menu-item" name="console">
        <template slot="title">
          <span @touchstart="touchStart('console')">
            <Icon class="item-icon" type="md-browsers" />
            控制台
          </span>
        </template>
        <MenuItem name="Outline">概要</MenuItem>
        <MenuItem name="PersonalInfo">个人信息</MenuItem>
      </Submenu>
      <MenuItem class="model-menu-item" name="WriteArticle">
        撰写
      </MenuItem>
      <Submenu ref="subMenuManagement" class="model-menu-item" name="management">
        <template slot="title">
          <span @touchstart="touchStart('management')">
            <Icon class="item-icon" type="ios-paper" />
            管理
          </span>
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
      <MenuItem class="model-menu-item" name="Home">
        首页
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader',
  data () {
    return {
      subMenuOpen: false
    }
  },
  methods: {
    selectMenu: function (name) {
      this.$router.push({ name: name })
    },
    touchStart: function (name) {
      /**
       * 解决触屏端mouseenter的问题
       * 添加点击监听触发Submenu组件 handleMouseenter() 函数
       * ！！！点击文字方可触发
       */
      switch (name) {
        case 'console':
          this.$refs.subMenuConsole.handleMouseenter()
          break
        case 'management':
          this.$refs.subMenuManagement.handleMouseenter()
          break
      }
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
