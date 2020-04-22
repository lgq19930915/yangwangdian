<template>
  <div>
    <header>
      <go-back class="iconfont icon-fanhui"></go-back>
      <h3>注册</h3>
      <h4 @click="login">登录</h4>
    </header>
    <div class="center">
      <p>
        <span>手机号:</span>
        <input class="int" type="text" v-model="user.tel" />
      </p>
      <p>
        <span>密码:</span>
        <input class="pass_int int" type="password" v-model="user.pass" />
      </p>
      <p>
        <span>验证码:</span>
        <input class="int" type="password" />
        <span class="register_span">点击获取</span>
      </p>
      <el-button :plain="true" type="warning" @click="register">下一步</el-button>
      <h4>
        <input type="checkbox" />
        <span>我已阅读并同意使用条款和隐私政策</span>
      </h4>
    </div>
  </div>
</template>
<script>
import { register } from "../util/request";
export default {
  components: {},
  data() {
    return {
      user: {
        tel: "",
        pass: ""
      }
    };
  },
  methods: {
    register() {
      if (this.user.tel == "" || this.user.pass == "") {
        alert("账号密码不能为空");
      } else {
        // localStorage.setItem("tel", this.user.tel);
        // localStorage.setItem("pass", this.user.pass);
        register(this.user.tel, this.user.pass).then(res => {
          this.$message({
            showClose: true,
            message: res.data.msg
          });
          console.log(res);
          if (res.data.status == 1) {
            this.$router.push("/login");
          }
        });
      }
    },
    login() {
      $router.push("/login");
    }
  }
};
</script>
<style scoped>
header {
  background: #fe9900;
  color: #fff;
  height: 1.2rem;
  padding: 0 0.35rem;
  display: flex;
  line-height: 1.6rem;
  justify-content: space-between;
}
header h4 {
  line-height: 1rem;
}
.pass_int {
  margin-left: 0.3rem;
}
.center p {
  border-bottom: 1px solid #bfbfbf;
  padding: 0.5rem 0;
}
.center {
  color: #414141;
  margin-top: 1.5rem;
  padding: 0 0.64rem;
  flex: 1;
}

.login {
  display: flex;
  flex-direction: column;
}
.center button {
  border: none;
  width: 83vw;
  height: 0.9rem;
  border-radius: 5px;
  background: #ff9900;
  color: #fff;
  font-size: 0.31rem;
  margin-top: 0.6rem;
}
.register_span {
  font-size: 0.2rem;
  color: #fc275d;
}
.center h4 {
  font-size: 0.2rem;
  color: #696969;
  margin-top: 0.6rem;
}
.center h4 input {
  position: relative;
  top: 0.06rem;
}
.int {
  border: 1px solid #ccc;
  width: 3rem;
}
</style>
