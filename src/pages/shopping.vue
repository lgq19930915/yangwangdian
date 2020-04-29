<template>
  <div class="bdy">
    <header>
      <go-back></go-back>
      <h2>购物车</h2>
    </header>
    <section class="sec" v-if="sec">
      <p class="p1">
        <img :src="store" alt />杭州保税
      </p>
      <!-- <p>{{shopping}}</p> -->
      <div class="secCot" v-for="(item,i) in shopping" :key="item.pid">
        <img v-if="qxsc" class="qx" @click="xz(i)" :src="radio_hig" alt />
        <!-- <button v-if="qxsc" class="qx" @click="xz(i)">√</button> -->
        <img :src="item.img" class="spImg1" alt />
        <div class="spTitle">
          <p v-for="i in item.buySelect" :key="i.name">{{i.name}}:{{i.select}}</p>
          <div class="spBtn">
            <button @click="sub(i)" class="btn btn-default btn-xs">-</button>
            <button class="btn btn-default btn-xs">{{item.num}}</button>
            <button @click="add(i)" class="btn btn-default btn-xs">+</button>
          </div>
        </div>
        <div class="totalPrices">
          <p>￥：{{item.num*item.price}}</p>
        </div>
        <div class="del" v-if="!qxsc" @click="isDelete1(i)">
          <p>删</p>
          <p>除</p>
        </div>
      </div>
    </section>
    <section class="sec1" v-if="shopping==0">
      <img :src="shoppingwu" alt />
      <p>购物车还是是空的</p>
      <p>快去逛逛吧~</p>
    </section>
    <n-av></n-av>
  </div>
</template>
<script>
import store from "../assets/image/store.png";
import radio_hig from "../assets/image/radio_hig.png";
import enitor_nor from "../assets/image/editor_nor.png";
import sp from "../assets/image/detailBanner.jpg";
import shoppingwu from "../assets/image/shopping_wu.png";
import nAv from "../components/nav";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    nAv
  },
  data() {
    return {
      store,
      radio_hig,
      enitor_nor,
      sp,
      shoppingwu,
      sec: true,
      sec1: true,
      qxsc: true
    };
  },
  methods: {
    xz(i) {
      this.qxsc = false;
    },
    isDelete1(i) {
      this.shopping.splice(i, 1);
    },

    ...mapActions({
      add: "shop/add",
      sub: "shop/sub"
    }),

    redact() {
      // this.goods.qxsc = false;
      for (var i = 0; i < this.goods.length; i++) this.goods[i].qxsc = false;
    },
    quanxuan() {
      this.goods.enitor_nor;
      for (var i = 0; i < this.goods.length; i++) {
        this.goods[i].enitor_nor = radio_hig;
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      shopping: "shop/shopping"
    })
  }
};
</script>
<style scoped>
header {
  width: 100vw;
  background-color: tomato;
  height: 10vh;
  line-height: 10vh;
}
h2 {
  display: inline-block;
  color: #fff;
  margin-left: 30vw;
}
.sec {
  padding: 0.2rem;
  height: 3rem;
  margin-bottom: 3rem;
}
.p1 {
  color: #ccc;
}
.secCot {
  display: flex;
}
.secCot .qx {
  z-index: 999999;
  margin-top: 0.6rem;
  width: 0.9rem;
  /* padding-right: 0.5rem; */
  height: 0.5rem;
}
.sec .spImg1 {
  margin-top: 0.5rem;
  line-height: 3;
  width: 1rem;
  height: 1.5rem;
}
.sec .spTitle {
  display: inline-block;
  line-height: 0.9;
}
.sec .spBtn button {
  line-height: 1.2;
  width: 0.7rem;
}
.totalPrices {
  display: inline-block;
  height: 1.6rem;
  margin-top: 0.5rem;
  font-size: 0.3rem;
  font-weight: 800;
}
.del {
  background-color: orange;
  margin-top: -0.25rem;
  height: 2rem;
  width: 1rem;
}
.del p {
  color: #fff;
  margin: 0.4rem 0 0 0.3rem;
}
.sec1 {
  color: #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.settle {
  width: 100vw;
  height: 10vh;
  margin-left: -0.4rem;
  position: fixed;
  bottom: 1.6rem;
  padding: 0 0.4rem;
}
.settle .settle_l_top {
  width: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.settle .settle_l_btm {
  width: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #ccc;
}
</style>