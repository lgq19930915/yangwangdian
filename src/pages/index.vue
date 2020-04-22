<template>
	<div class="index">
		<!-- 2级路由出口 -->
		<router-view></router-view>
	</div>
</template>
<script>
import vNav from "../components/nav";
export default {
	components: {
		vNav
	},
	data() {
		return {};
	},
	methods: {}
};
</script>
<style scoped>
/* .index {
	padding: 0 0.2rem;
} */
</style>