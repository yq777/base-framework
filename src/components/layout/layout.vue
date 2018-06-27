<template>
  <div class="g-menu-page">
    <div class="g-nav">
      <div class="m-logo">
        <img class="u-logo" src="../../../build/logo.png"/>
      </div>
      <div class="m-username">
        <el-dropdown trigger="click" @command="logout">
          <span class="u-username">
            {{userInfo.username}}
            <i class="el-icon-caret-bottom u-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
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
  import {mapState} from "vuex";
  import {logoutUser} from "../../api";
  import {SET_USERINFO} from "../../store/mutation-types";
  import {menu} from '../../utils/menu';

  export default {
    data() {
      return {
        menu
      }
    },
    computed: {
      ...mapState('common', [
        'userInfo'
      ])
    },
    created() {
    },
    methods: {
      logout(command) {
        if (command === 'logout') {
          this.$confirm('确认退出当前用户吗?', '提示', {type: 'warning'}).then(() => {
            logoutUser().then(() => {
              this.$message.success('退出成功');
              this.$store.commit(`common/${SET_USERINFO}`, {});
              this.$router.replace({
                name: 'login'
              })
            })
          });
        }
      }
    }
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
