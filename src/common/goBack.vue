<template>
	<span class="iconfont icon-fanhui" @click="goBack">返回</span>
</template>
<script>
export default {
	components: {},
	data() {
		return {};
	},
	methods: {
		goBack() {
			console.log(1)
			this.$router.go(-1)
		}
	},
	mounted() {
	}
};
</script>
<style scoped>
span {
	font-size: 0.5rem;
	color: brown;
}
</style>
