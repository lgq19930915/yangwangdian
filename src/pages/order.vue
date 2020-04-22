<template>
	<div class="order">
		<h5>
			<go-back></go-back>
			<input type="text" placeholder="程序猿为何半夜发狂" />
			<span class="iconfont icon-sousuo icon"></span>
		</h5>
		<div class="order_c">
			<!-- <p>分类</p> -->
			<div class="left">
				<p class="left_p" :class="{'active':cutIndex==index}" @click="changeName(index)" v-for="(item,index) in order" :key="item.name">{{item.name}}</p>
			</div>
			<div class="right" v-if="order.length>0">
				<div class="right_cot" v-for="item in order[cutIndex].list" :key="item.id">
					<div class="right_cot-con">
						<img :src="item.thumbnail" />
						<p>{{item.name}}</p>
					</div>
				</div>
			</div>
		</div>
		<v-nav></v-nav>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import vNav from "../components/nav";
export default {
	components: {
		vNav
	},
	data() {
		return {
			cutIndex: 0,
		};
	},
	methods: {
		...mapActions({
			"getOrder": "order/getOrder",
		}),

		changeName(index) {
			// console.log("click")
			this.cutIndex = index;
		}

	},
	computed: {
		...mapGetters({
			"order": "order/order",
		}),

	},
	mounted() {
		this.getOrder();



	}
};
</script>
<style scoped>
.order_c {
	display: flex;
}
.order_c .left {
	width: 0.2rem;
	height: 2rem;
	flex: 0.4;
}
.left_p {
	margin-left: 0.3rem;
	height: 0.7rem;
	line-height: 2;
	font-size: 0.35rem;
}
.active {
	background: #fafafa;
	color: #fe9900;
	border-left: 0.1rem solid #1d84a7;
}
.right {
	overflow: hidden;
	flex: 1;
}

.right_cot {
	width: 50%;
	height: 2.5rem;
	box-sizing: border-box;
	float: left;
	text-align: center;
	border-radius: 5px;
	padding-bottom: 0.3rem;
	padding-right: 0.05rem;
}
.right_cot-con {
	border: 2px solid #1d84a7;
	height: 100%;
}
.right_cot img {
	width: 100%;
	height: 2rem;
}
.right_cot p {
	color: #fff;
	background: #1d84a7;
	height: 0.39rem;
	position: relative;
	top: -0.4rem;
}

h5 input {
	width: 66vw;
	background: #f1f898;
	opacity: 0.8;
	height: 0.5rem;
	border-radius: 0.1rem;
	margin-left: 0.8rem;
	margin-top: 0.4rem;
}
h5 {
	background: #98a465;
	height: 1.1rem;
	border-radius: 3px;
	width: 100vw;
	margin-top: -1vh;
}
.order {
	margin-bottom: 15vh;
}
</style>