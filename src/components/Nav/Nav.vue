<template>
	<nav id="nav">
		<div class="nav-inner">
			<h1 class="nav-logo">
				<router-link :to="{name: 'home'}">
					<img src="@/assets/logo.png" alt="logo" />
				</router-link>
			</h1>
			<Search />
			<Menu />
			<Modal v-if="$store.getters.isOpenModalCreatPost" />
		</div>
	</nav>
</template>

<script>
import Search from './Search'
import Menu from './Menu'
import Modal from '@/components/Modal/Modal'
export default {
	components: {
		Search,
		Menu,
		Modal,
	},
}
</script>

<style scoped>
#nav {
	width: 100%;
	border-bottom: 1px solid rgb(198, 195, 195);
	height: 54px;
	position: fixed;
	top: 0;
	background-color: var(--bg-color);
	transition: all 0.2s ease-in-out;
	z-index: 2;
	box-shadow: 0 0 1px var(--border-color);
}

nav .nav-inner {
	max-width: 975px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	padding: 0 20px;
}

.nav-logo {
	margin-top: 8px;
}
</style>
