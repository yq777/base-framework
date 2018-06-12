<template>
  <div class="g-menu-page">
    <div class="g-nav">
      <div class="m-logo">
        <img class="u-logo" src="../../../build/logo.png"/>
      </div>
      <div class="m-username">
        <el-dropdown trigger="click">
          <span class="u-username">
            张三
            <i class="el-icon-caret-bottom u-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="g-content-wrap">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#fff"
        :unique-opened="true"
        class="m-menu"
        :router="true"
      >
        <el-submenu :index="item.value" v-for="item in menu" :key="item.value">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item :index="index.value" v-for="index in item.children" :key="index.value">
            <span>{{index.label}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="m-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            label: "菜单1",
            value: "1",
            children: [
              {
                label: "子菜单1",
                value: '/test'
              },
              {
                label: "子菜单2",
                value: '/test1'
              },
              {
                label: "子菜单3",
                value: '1-3'
              },
              {
                label: "子菜单4",
                value: '1-4'
              }
            ]
          },
          {
            label: "菜单2",
            value: "2",
            children: [
              {
                label: "子菜单1",
                value: '2-1'
              },
              {
                label: "子菜单2",
                value: '2-2'
              },
              {
                label: "子菜单3",
                value: '2-3'
              },
              {
                label: "子菜单4",
                value: '2-4'
              }
            ]
          },
          {
            label: "菜单3",
            value: "3",
            children: [
              {
                label: "子菜单1",
                value: '3-1'
              },
              {
                label: "子菜单2",
                value: '3-2'
              },
              {
                label: "子菜单3",
                value: '3-3'
              },
              {
                label: "子菜单4",
                value: '3-4'
              }
            ]
          },
          {
            label: "菜单4",
            value: "4",
            children: [
              {
                label: "子菜单1",
                value: '4-1'
              },
              {
                label: "子菜单2",
                value: '4-2'
              },
              {
                label: "子菜单3",
                value: '4-3'
              },
              {
                label: "子菜单4",
                value: '4-4'
              }
            ]
          }
        ]
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .g-menu-page {
    .g-nav {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #545c64;
      .m-logo {
        width: 200px;
        height: 50px;
        text-align: center;
        margin-top: 5px;
        .u-logo {
          width: 100px;
        }
      }
      .m-username {
        margin-right: 10px;
        .u-username {
          color: #fff;
          .u-arrow-down {
            color: #fff;
          }
        }
      }
    }
    .g-content-wrap {
      height: calc(~"100vh - 50px");
      background-color: #545c64;
      display: flex;
      overflow: hidden;
      .m-menu {
        width: 200px;
        border-right: none;
        &:not(.el-menu--collapse) {
          width: 200px;
          border-right: none;
        }
        .el-menu-item.is-active {
          background: #409EFF !important;
        }
      }
      .m-content {
        padding: 10px 10px 0;
        flex: 1;
        width: 100%;
        background-color: #fff;
        height: calc(~"100vh - 50px");
        overflow: auto;
      }
    }
  }
</style>
