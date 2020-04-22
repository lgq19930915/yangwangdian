<template>
  <div class="login">
    <header>
      <go-back class="iconfont icon-fanhui"></go-back>
      <h3>登录</h3>
      <h4 @click="zc">注册</h4>
    </header>
    <div class="center">
      <p>
        <span>手机号:</span>
        <input type="text" v-model="user.tel" />
      </p>
      <p>
        <span>密码:</span>
        <input class="pass_int" type="password" v-model="user.pass" />
      </p>
      <h5>忘记密码</h5>
      <el-button type="warning" :plain="true" @click="login1">登录</el-button>
    </div>
  </div>
</template>
<script>
import { login } from "../util/request";
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
    login1() {
      // if (this.user.tel == "13321177828" && this.user.pass == "553956qaz") {
      // 	this.$router.push("/index/home");
      // 	// 做一个登录的标记
      // 	localStorage.setItem("tel", this.user.tel);
      // 	localStorage.setItem("pass", this.user.pass);
      // } else {
      // 	alert("账号密码错误");
      // }

      login(this.user.tel, this.user.pass)
        .then(res => {
          console.log(res.data.status);
          if (res.data.status == 1) {
            localStorage.setItem("tel", this.user.tel);
            localStorage.setItem("pass", this.user.pass);
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push("/index/home");
          }
          if (res.data.status == 0) {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
          }
        })
        .catch(err => {});
    },
    zc() {
      this.$router.push("/register");
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
  color: #535353;
  margin-top: 2rem;
  padding: 0 0.64rem;
  flex: 1;
}
.center h5 {
  margin-top: 0.4rem;
  float: right;
  color: #999999;
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
input {
  border: 1px solid #ccc;
  width: 3rem;
}
</style>