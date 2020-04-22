<template>
  <div>
    <!-- <p>首页</p> -->
    <header>
      <div>
        <img :src="banner" />
      </div>
      <h5>
        <input type="text" placeholder="程序猿" />
        <span class="iconfont icon-sousuo icon"></span>
      </h5>
    </header>
    <div class="content">
      <!-- <card-one v-for="(i,index) in home" :key="index" :home="i"></card-one> -->
      <card-one :arr="arr"></card-one>
    </div>
    <router-view></router-view>
    <footer>
      <!-- 底部导航 -->
      <v-nav></v-nav>
    </footer>
  </div>
</template>
<script>
import vNav from "../components/nav";
import banner from "../assets/image/banner.png";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    vNav
  },
  data() {
    return {
      banner: banner,

      arr: [
        {
          icon: "iconfont icon-huo ione"
        },
        {
          icon: "iconfont icon-muying ione"
        },
        {
          icon: "iconfont icon-female ione"
        },
        {
          icon: "iconfont icon-huapen ione"
        },
        {
          icon: "iconfont icon-bangbangtang ione"
        },
        {
          icon: "iconfont icon-99 ione"
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      getHome: "home/getHome"
    })
  },

  computed: {
    ...mapGetters({
      home: "home/home"
    })
  },
  mounted() {
    this.getHome();
  }
};
</script>
<style scoped>
header img {
  width: 100vw;
  text-align: center;
}
header {
  position: relative;
}
h5 {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
}
h5 input {
  width: 66vw;
  background: #f1f898;
  opacity: 0.8;
  height: 0.5rem;
  border-radius: 0.1rem;
}
.icon {
  margin-left: -0.5rem;
  position: absolute;
  top: 0.1rem;
  color: black;
  font-size: 0.4rem;
  opacity: 0.8;
}
.content {
  background: #fafafa;
}
footer {
  height: 2.5rem;
}
</style>