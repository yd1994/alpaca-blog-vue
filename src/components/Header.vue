<template>
  <div id="header">
    <Row class="header-row">
      <Col :xs="{ span: 24}" :sm="{ span: 2}">
        <div class="header-row-logo">
          <img class="header-row-logo" src="../assets/logo.png" @click="clickLogo" />
        </div>
      </Col>
      <Col :xs="{ span: 12}" :sm="{ span: 16}">
        <div class="header-row-nav">
          <Menu class="header-row-menu" mode="horizontal" @on-select="clickMenu" :active-name="actionMenuItem">
            <MenuItem name="Home">
              首页
            </MenuItem>
            <MenuItem name="Category">
              分类
            </MenuItem>
            <MenuItem name="About">
              关于
            </MenuItem>
          </Menu>
        </div>
      </Col>
      <Col :xs="{ span: 11}" :sm="{ span: 5}">
        <div class="header-row-search">
          <Input search placeholder="搜索" />
        </div>
      </Col>
    </Row>
    <LeftDrawer v-model="showLeftDrawer"></LeftDrawer>
  </div>
</template>

<script>
import LeftDrawer from './others/LeftDrawer'
export default {
  name: 'Header',
  data () {
    return {
      actionMenuItem: 'Home',
      showLeftDrawer: false
    }
  },
  methods: {
    clickLogo: function () {
      this.showLeftDrawer = true
    },
    clickMenu: function (name) {
      this.$router.push({ name: name })
      this.changeMenu(name)
    },
    changeMenu: function (name) {
      this.actionMenuItem = name
    }
  },
  components: {
    LeftDrawer
  }
}
</script>

<style lang="scss">
#header {
  margin-bottom: 64px;
  .header-row {
    box-shadow: 0 0 1px rgba(0 , 0, 0, .15);
    .header-row-logo {
      width: 60px;
      height: 60px;
    }
    .header-row-nav {
      height: 60px;
      ul {
        li {
          color: rgba(0, 0, 0, .2);
        }
        .ivu-menu-item-active {
          color: black;
          border-bottom: 1px solid black;
        }
        .ivu-menu-item:hover {
          color: #515a6e;
          border-bottom: 1px solid #515a6e;
        }
        .ivu-menu-item:active {
          color: black;
          border-bottom: none;
        }
        /*
        .ivu-menu-item:hover + .ivu-menu-item-active {
          color: #515a6e;
          border-bottom: none;
        }
        */
      }
      ul:after {
        display: none;
      }
      ivu-tabs-nav:after {
        display: none;
      }
    }
    .header-row-search {
      line-height: 60px;
    }
    @media screen and (max-width: 767px) {
      .header-row-nav {
        height: 32px;
        ul {
          height: 32px;
          li {
            height: 32px;
            padding: 0 8px;
            line-height: 32px;
          }
        }
      }
      .header-row-search {
        line-height: 32px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  #header {
    margin-bottom: 32px;
    .header-row {
      .header-row-nav {
        height: 32px;
        ul {
          height: 32px;
          li {
            height: 32px;
            padding: 0 8px;
            line-height: 32px;
          }
        }
      }
      .header-row-search {
        line-height: 32px;
      }
    }
  }
}
</style>
