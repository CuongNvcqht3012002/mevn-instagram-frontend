<template>
	<div class="more-post-item">
		<router-link :to="{ name: 'detailPost', params: { id: postItem._id } }" @click="scrollToTop">
			<img v-lazy="postItem.img" alt="" />
		</router-link>
		<ul class="short-info">
			<li>
				<i class="fas fa-heart"></i>
				<span> {{ postItem.likes.length }} </span>
			</li>
			<li>
				<i class="fas fa-comment"></i>
				<span> {{ postItem.comments.length }} </span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['postItem'],
	methods: {
		scrollToTop(){
			window.scroll(0,0)
		}
	}
}
</script>

<style scoped lang="scss">
.more-post-item {
	width: 293px;
	height: 300px;
	position: relative;
	margin-bottom: 24px;
	margin-left: 28px;

	.short-info {
		list-style: none;
		position: absolute;
		pointer-events: none;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;

		opacity: 0;
		transition: all 0.1s;

		li {
			color: white;
			font-size: 22px;
			margin: 22px;

			span {
				display: inline-block;
				margin-left: 5px;
			}
		}
	}

	&:hover .short-info {
		opacity: 1;
	}
}
</style>
