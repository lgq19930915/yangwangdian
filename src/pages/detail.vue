<!--  -->
<template>
  <div class="bdy">
    <div class="top">
      <go-back></go-back>
      <span class="iconfont icon-gouwuche"></span>
    </div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="img in detail.swiperImgArr" :key="img">
        <img :src="img" alt class="banner" />
      </el-carousel-item>
    </el-carousel>
    <hr style="background:#ccc" />
    <div class="title">
      <p>{{detail.name}}</p>
    </div>
    <div>
      <div class="price">
        <span class="p1">￥{{detail.original_price |filterPrice}}&nbsp;</span>
        <span class="pricezk">{{detail.allowance}}折</span>
        <span class="pricezk" v-if="detail.isFreeShip">包邮</span>
        <div class="price_zk">
          <span class="p2">￥{{detail.reduct_price}}</span>
          <span class="shop_bq" v-for="i in detail.describe" :key="i">{{i}}</span>
        </div>
      </div>
    </div>
    <div class="shop">
      <p>
        <span @click="show1" :class="sp1cls">商品详情</span>
        <span @click="show2" :class="sp2cls">买家口碑</span>
      </p>
    </div>
    <div class="shop_cot_left" v-if="isShow1">
      <img v-for="i in detail.shopDes" :key="i" :src="i" alt />
    </div>
    <div class="shop_cot_right" v-if="isShow2">
      <div class="pj">
        <p>
          <span :class="pjcls1" @click="pj_content1">全部评价</span>
        </p>
        <p>
          <span :class="pjcls2" @click="pj_content2">好评</span>
        </p>
        <p>
          <span :class="pjcls3" @click="pj_content3">差评</span>
        </p>
        <p>
          <span :class="pjcls4" @click="pj_content4">晒单</span>
        </p>
      </div>
      <d-iscuss :buyerReviews="detail.buyerReviews.all" v-if="buyerReviews_all"></d-iscuss>
      <d-iscuss :buyerReviews="detail.buyerReviews.bad" v-if="buyerReviews_bad"></d-iscuss>
      <d-iscuss :buyerReviews="detail.buyerReviews.good" v-if="buyerReviews_good"></d-iscuss>
      <d-iscuss :buyerReviews="detail.buyerReviews.postForm" v-if="buyerReviews_postForm"></d-iscuss>
    </div>
    <div class="jr" v-if="jrshop" @click.self="qx">
      <div class="jr_top">
        <span @click.self="qx">关闭</span>
        <div class="left">
          <img :src="detail.swiperImgArr[0]" alt />
        </div>
        <div class="right">
          <p class="p_price">￥{{detail.original_price |filterPrice}}</p>
          <p class="p_synopsis">库存{{detail.total}}件</p>
          <p class="p_synopsis">请选择商品属性</p>
        </div>
      </div>
      <!-- 购买数量 -->
      <div class="sl">
        <p>购买数量</p>
        <p>
          <button @click="sl_sub" class="btn btn-default btn-sm">-</button>
          <span>{{sl}}</span>
          <button @click="sl_add" class="btn btn-default btn-sm">+</button>
        </p>
      </div>
      <!-- 大小 -->
      <div class="size">
        <div>
          <div v-for="(item,index) in detail.buySelect" :key="item.name">
            <p>{{item.name}}</p>
            <!-- 通过绑定事件和动态类名实现点击 -->
            <button v-for="(i,idx) in item.list" :key="i" :class="{'btcls' :item.selectIndex==idx }" @click="getbtncls([index,idx])">{{i}}</button>
          </div>
        </div>
      </div>
      <!-- 年龄 -->
    </div>
    <div class="prices">
      <p class="totalPrices">
        总价:
        <span>￥{{totalPrices=(detail.original_price*sl) |filterPrice}}</span>
      </p>
      <p @click="joinShop" class="jr_btm">加入购物车</p>
      <p class="gm" @click="add">立即购买</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import banner from "../assets/image/detailBanner.jpg";
import { mapGetters, mapActions } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      buyerReviews: ["all", "bad", "good", "postForm"],
      banner,
      isShow1: true,
      isShow2: false,
      jrshop: false,
      sp1cls: "spcls",
      sp2cls: "",
      price: 455,
      sl: 0,
      pjcls1: "pjcls",
      pjcls2: "",
      pjcls3: "",
      pjcls4: "",
      buyerReviews_all: true,
      buyerReviews_bad: false,
      buyerReviews_good: false,
      buyerReviews_postForm: false,

      totalPrices: 0
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters({
      detail: "detail/detail"
    })
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapActions({
      getDetail: "detail/getDetail",
      getbtncls: "detail/getbtncls",
      addShop: "shop/addShop"
    }),
    add() {
      console.log("====================================");
      console.log(this.detail.buySelect);
      console.log("====================================");
      var buySelect = this.detail.buySelect.map(item => {
        console.log(item);
        return {
          ...item,
          select: item.list[item.selectIndex]
        };
      });
      var json = {
        id: this.detail.pid,
        price: this.detail.original_price,
        num: this.sl,
        img: this.detail.swiperImgArr[0],
        buySelect: buySelect
      };
      this.addShop(json);
      if (this.sl != 0) {
        this.$router.push("/index/shopping/");
      }
    },

    show1() {
      this.isShow1 = true;
      this.isShow2 = false;
      this.sp1cls = "spcls";
      this.sp2cls = "";
    },
    show2() {
      this.isShow2 = true;
      this.isShow1 = false;
      this.sp2cls = "spcls";
      this.sp1cls = "";
    },
    joinShop() {
      this.jrshop = true;
    },
    //蒙版取消
    qx() {
      this.jrshop = false;
    },
    sl_sub() {
      this.sl--;
      // if (this.sl <= 0) {
      // 	this.sl = 0;
      // }
      this.sl = Math.max(this.sl, 0);
    },
    sl_add() {
      this.sl++;
      // if (this.sl >= 10) {
      // 	this.sl = 10;
      // }
      this.sl = Math.min(this.sl, 10);
    },

    pj_content1() {
      this.pjcls1 = "pjcls";
      this.pjcls2 = "";
      this.pjcls3 = "";
      this.pjcls4 = "";
      this.buyerReviews_all = true;
      this.buyerReviews_bad = false;
      this.buyerReviews_good = false;
      this.buyerReviews_postForm = true;
    },
    pj_content2() {
      this.pjcls1 = "";
      this.pjcls2 = "pjcls";
      this.pjcls3 = "";
      this.pjcls4 = "";
      this.buyerReviews_all = false;
      this.buyerReviews_bad = true;
      this.buyerReviews_good = false;
      this.buyerReviews_postForm = false;
    },
    pj_content3() {
      this.pjcls1 = "";
      this.pjcls2 = "";
      this.pjcls3 = "pjcls";
      this.pjcls4 = "";
      this.buyerReviews_all = false;
      this.buyerReviews_bad = false;
      this.buyerReviews_good = true;
      this.buyerReviews_postForm = false;
    },
    pj_content4() {
      this.pjcls1 = "";
      this.pjcls2 = "";
      this.pjcls3 = "";
      this.pjcls4 = "pjcls";
      this.buyerReviews_all = false;
      this.buyerReviews_bad = false;
      this.buyerReviews_good = false;
      this.buyerReviews_postForm = true;
    }
    // buy() {

    // }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var id = this.$route.params.id;
    this.getDetail(id);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='css' scoped>
/*@import url(); 引入公共css类*/
.bdy {
  padding: 0.2rem;
}
.top {
  display: flex;
  justify-content: space-between;
}
.banner {
  text-align: center;
  width: 94vw;
}
.title {
  line-height: 1.3;
}
.price .p1 {
  color: red;
}
.price .price_zk .p2 {
  color: #ccc;
  text-decoration: line-through;
}
.pricezk {
  background: orange;
  color: #fff;
  display: inline-block;
  padding: 0.05rem 0.1rem;
  line-height: 1.1;
  margin-right: 0.05rem;
}
.price_zk .shop_bq {
  border: 1px solid orange;
  color: orange;
  font: 0.12rem;
  padding: 0.02rem 0.05rem;
  margin-right: 0.05rem;
}
.shop {
  margin-top: 0.4rem;
}
.shop p {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.shop p span {
  padding: 0.1rem;
  border-radius: 0.1rem;
}
/* .shop_cot {
	margin-top: 1rem;
	text-align: center;
} */
.pj {
  display: flex;
  justify-content: space-between;
}
.pj_cot {
  text-align: left;
  margin-bottom: 10vh;
}
.pj_p1 {
  color: orange;
}
.pj_p2 {
  color: #ccc;
}
.pj_p3 {
  padding: 0.1rem;
  border-radius: 0.3rem;
  background: #dddddd;
  color: #666;
}
.pjcls {
  padding: 0.1rem;
  border-radius: 0.1rem;
  color: #fff;
  background: gold;
}
.pj_cot img {
  width: 2rem;
  height: 3rem;
}
.prices {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 10vh;
  width: 100vw;
  margin-top: 3rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  line-height: 3;
  padding: 0.4rem;
}
.prices .totalPrices {
  width: 40vw;
}
.prices .totalPrices span {
  color: red;
}
.jr {
  z-index: 555;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  bottom: 10vh;
  background: rgba(0, 0, 0, 0.5);
}
.jr_top {
  width: 100vw;
  height: 60vh;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
}
.jr_top span {
  font-size: 0.5rem;
  position: absolute;
  right: 0.03rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
}
.left {
  position: fixed;
  left: 10vw;
  top: 25vh;
}
.left img {
  width: 40vw;
  height: 20vh;
}
.right {
  position: fixed;
  left: 55vw;
  top: 35vh;
}
.right .p_price {
  color: red;
}
.right .p_synopsis {
  color: #666;
  font-size: 0.12rem;
  line-height: 1.1;
}
.spcls {
  background: orange;
  color: #fff;
}
.sl {
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100vw;
  position: fixed;
  top: 45vh;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
}
.size {
  margin-top: 0.6rem;
  position: fixed;
  top: 50vh;
  left: 0;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100vw;
  font-size: 0.4rem;
}
.size p {
  font-size: 0.4rem;
  /* display: inline-block; */
}
.size button {
  padding: 0.1rem 0.2rem;
  margin-top: 0.05rem;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  border-radius: 0.05rem;
  outline: none;
  border: none;
  font-size: 0.4rem;
}
.btcls {
  background: chocolate;
  color: #fff;
}
.jr_btm {
  padding: 0.2rem;
  height: 8vh;
  background: gold;
  line-height: 0.6rem;
  color: #fff;
}
.gm {
  padding: 0.2rem;
  height: 8vh;
  background: tomato;
  line-height: 0.6rem;
  color: #fff;
}
</style>