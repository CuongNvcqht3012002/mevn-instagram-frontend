<template>
	<section id="main">
		<div>
			<div class="left">
				<Story />
				<div id="feed">
					<Post v-for="post in $store.getters.posts" :key="post._id" :post="post" />
				</div>
			</div>
			<RightBar />
		</div>
	</section>
</template>

<script>
import Story from '@/components/Story/Story'
import RightBar from '@/components/RightBar/RightBar'
import Post from '@/components/Post/Post'

export default {
	components: {
		Story,
		RightBar,
		Post,
	}
}
</script>

<style scoped>
#main {
	background-color: var(--bg-color);
}

#main > div {
	padding-top: 30px;
	width: 935px;
	margin: 54px auto;
	display: flex;
}

.left {
	margin-right: 28px;
	width: 614px;
}
</style>
