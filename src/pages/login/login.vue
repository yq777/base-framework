<template>
  <div class="g-register">
    <div class="m-register">
      <div class="m-label">用户登录</div>
      <el-form label-width="70px">
        <el-form-item label="用户名" required>
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" required>
          <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="u-button" type="primary" @click="register">登录</el-button>
      <div class="u-login" @click="goToRegister">没有账号？去注册</div>
    </div>
  </div>

</template>

<script>
  import {loginUser} from "../../api";
  import {StringUtils} from "graf-foundation";
  import {SET_USERINFO} from "../../store/mutation-types";

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    created() {
    },
    methods: {
      goToRegister() {
        this.$router.replace({
          name: 'register'
        })
      },
      register() {
        if (StringUtils.isBlank(this.username)) {
          this.$message.error("请输入用户名");
          return false;
        }
        if (StringUtils.isBlank(this.password)) {
          this.$message.error("请输入密码");
          return false;
        }
        loginUser(this.username, this.password).then(res => {
          console.log(res);
          this.$store.commit(`common/${SET_USERINFO}`, res);
          this.$router.replace({
            name: 'index'
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .g-register {
    .m-register {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -160px 0 0 -160px;
      width: 320px;
      padding: 0 36px 36px;
      box-shadow: 0 0 100px rgba(0, 0, 0, .08);
      .m-label {
        padding: 25px 0;
        text-align: center;
        font-size: 16px;
        color: #409EFF;
      }
      .u-button {
        width: 100%;
      }
      .u-login {
        margin-top: 10px;
        text-align: right;
        color: #409EFF;
        cursor: pointer;
        font-size: 13px;
      }
    }
  }
</style>
