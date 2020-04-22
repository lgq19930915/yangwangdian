<template>
	<div class="box">
		<div class="card" v-for="item in card" :key="item.id" is="router-link" :to="'detail/'+item.id">
			<img :src="item.thumbnail" />
			<h4>
				<span>￥{{item.reduct_price |filterPrice}}</span>
				<em>￥{{item.original_price |filterPrice}}</em>
			</h4>
			<p>{{item.brand}}{{item.name}}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: ["card"],
	components: {},
	data() {
		return {};
	},
	methods: {}
};
</script>
<style scoped>
.box {
	overflow: hidden;
}
.card {
	width: 2.8rem;
	height: 4.6rem;
	border: 1px solid #fafafa;
	float: left;
	background: #fff;
	margin-right: 0.15rem;
	margin-left: 0.15rem;
}

.card img {
	width: 100%;
}
h4 {
	font-size: 0.28rem;
	margin-left: 0.1rem;
	display: flex;
	justify-content: space-between;
	margin-right: 0.1rem;
}
h4 span {
	color: tomato;
}
.card p {
	font-size: 0.28rem;
	margin-top: 0.2rem;
	margin-left: 0.1rem;
	color: #aaa;
	margin-right: 0.1rem;
}
</style>