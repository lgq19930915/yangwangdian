<template>
	<div class="mine">
		<!-- <p>个人中心</p> -->
		<header>
			<span class="iconfont icon-shezhi"></span>
			<h2>个人中心</h2>
			<span class="iconfont icon-liuyan"></span>
		</header>
		<div class="center_1">
			<div class="boxshow"></div>
			<p>点击登录</p>
			<h3>
				<span class="iconfont icon-wodeshoucang"></span>
				<em>我的收藏</em>
			</h3>
			<h4></h4>
			<h3 class="c_h3">
				<b>我的订单</b>
				<em>查看全部订单</em>
			</h3>
			<h6></h6>
			<ul class="mine_ico">
				<li>
					<p>
						<span class="iconfont icon-daifukuan"></span>
					</p>
					<h5>待付款</h5>
				</li>
				<li>
					<p>
						<span class="iconfont icon-icon2"></span>
					</p>
					<h5>代发货</h5>
				</li>
				<li>
					<p>
						<span class="iconfont icon-daishouhuo"></span>
					</p>
					<h5>待收货</h5>
				</li>
				<li>
					<p>
						<span class="iconfont icon-daipingjia20"></span>
					</p>
					<h5>待评价</h5>
				</li>
				<li>
					<p>
						<span class="iconfont icon-tuikuan"></span>
					</p>
					<h5>退款/售后</h5>
				</li>
			</ul>
			<h4></h4>
			<h3 class="c_h3">
				<em>收获地址管理</em>
			</h3>
		</div>
		<footer>
			<n-av></n-av>
		</footer>
	</div>
</template>
<script>
import nAv from "../components/nav";
export default {
	components: {
		nAv
	},
	data() {
		return {};
	},
	methods: {}
};
</script>
<style scoped>
header {
	background: #18c455;
	color: #fff;
	height: 4rem;
	padding: 0 0.35rem;
	display: flex;
	line-height: 1.6rem;
	justify-content: space-between;
	font-size: 0.35rem;
}
header span {
	font-size: 0.5rem;
}
.center_1 {
	background-color: #fafafa;
	border: 1px solid transparent;
}
.boxshow {
	width: 2rem;
	height: 2rem;
	background: #e7dedf;
	border-radius: 50%;
	border: 5px solid #fff;
	margin: 0 auto;
	margin-top: -1.5rem;
}
.center_1 p {
	margin: 0.1rem 0;
	text-align: center;
}
.center_1 h3 {
	margin-left: 0.2rem;
}
.center_1 h3 span {
	color: #ef8986;
	font-weight: 900;
}
.center_1 h4 {
	height: 0.2rem;
	background: #f3f3f3;
	margin: 0.5rem 0;
}
.c_h3 {
	display: flex;
	justify-content: space-between;
	margin: 0.4rem 0;
}
.c_h3 em {
	color: #b8b8b8;
}
.center_1 h6 {
	height: 0.05rem;
	background-color: #eee;
	margin: 0.2rem 0;
}
.mine_ico {
	display: flex;
	justify-content: space-around;
	margin-bottom: 0.4rem;
}
.mine_ico h5 {
	font-size: 0.2rem;
	color: #b8b8b8;
}
.mine_ico p span {
	font-size: 0.4rem;
	color: #b8b8b8;
}
.mine {
	display: flex;
	flex-direction: column;
	height: 120vh;
}
footer {
	flex: 1;
	background: #f3f3f3;
}
</style>