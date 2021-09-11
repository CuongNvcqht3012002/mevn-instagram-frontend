<template>
	<div class="not-found">
		<h1>
			This is not found page
		</h1>
        <div v-if="$store.getters.isAuthenticated">
			<router-link to="/">Quay lại trang chủ</router-link>
		</div>
		<div v-else>
			<router-link to="/login">Login</router-link>
			<router-link to="/register">Register</router-link>
		</div>
	</div>
</template>	

<script>
export default {}
</script>

<style scoped lang="scss">
.not-found {
	margin-top: 140px;
	margin-bottom: 400px;
	text-align: center;

	> div {
		margin-top: 20px;
		font-size: 20px;
	}

	a {
		margin: 10px 15px;
	}
}
</style>