<template>
	<div class="app">
		<Nav v-if="showNav" />
		<router-view :key="$route.fullPath"></router-view>
		<Footer />
	</div>
</template>

<script>
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

export default {
	components: {
		Nav,
		Footer,
	},
	computed: {
		showNav() {
			return (
				this.$route.path != '/register' &&
				this.$route.path != '/login' &&
				this.$store.getters.isAuthenticated
			)
		},
	}
}
</script>

<style>
:root {
	--border-color: rgb(211, 211, 211);
	--bg-color: rgb(250, 250, 250);
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scroll-behavior: smooth;
}

a,
button {
	text-decoration: none;
	cursor: pointer;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}
</style>
