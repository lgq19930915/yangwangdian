<template>
  <div class="nav">
    <footer>
      <router-link to="/index/home" activeClass="select">
        <p class="iconfont icon-shouye icon"></p>
        <p>首页</p>
      </router-link>
      <router-link to="/index/order" activeClass="select">
        <p class="iconfont icon-fenlei icon"></p>
        <p>分类</p>
      </router-link>
      <router-link to="/index/shopping" activeClass="select">
        <p class="iconfont icon-gouwuche icon"></p>
        <p>购物车</p>
      </router-link>
      <router-link to="/index/mine" activeClass="select">
        <p class="iconfont icon-wo icon"></p>
        <p>我</p>
      </router-link>
    </footer>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      gwccls: ""
    };
  },
  methods: {
    gwc() {
      this.gwccls = "select";
    }
  }
};
</script>
<style scoped>
footer {
  width: 100vw;
  height: 1.6rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  color: #cccccc;
  display: flex;
  padding: 0 0.33rem;
}
footer a {
  flex: 1;
  text-align: center;
  line-height: 0.6rem;
  transition: all 0.3s;
}
.select {
  background: #fff;
  color: #fe9900;
}
.icon {
  font-size: 0.6rem;
  margin-top: 0.2rem;
}
</style>