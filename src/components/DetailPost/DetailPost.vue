<template>
	<div class="detail-post">
		<div class="post-img" @dblclick.prevent="likePost">
			<img v-lazy="post.img" alt="" />
			<i class="fas fa-heart heart"></i>
		</div>
		<DetailPostRight :post="post" />
	</div>
	<MorePosts
		v-if="morePosts.length > 0"
		:author="post.userId"
		:morePosts="morePosts"
	/>
</template>

<script>
import MorePosts from '@/components/DetailPost/MorePosts'
import DetailPostRight from './DetailPostRight'

export default {
	components: {
		MorePosts,
		DetailPostRight,
	},
	created() {
		// get post
		const id = this.$route.params.id
		this.post = this.$store.getters.posts.filter((post) => post._id == id)[0]

		// get more relevant posts
		// same author
		this.morePosts = this.$store.getters.posts.filter((post) => {
			return (
				post.userId._id == this.post.userId._id && post._id != this.post._id
			)
		})
	},
	data() {
		return {
			post: null,
			morePosts: null,
		}
	},
	methods: {
		likePost($event) {
			this.$store.dispatch('likePost', this.post._id)
			const heart = $event.target.nextElementSibling

			heart.classList.add('heart-effect')
			setTimeout(() => {
				heart.classList.remove('heart-effect')
			}, 1200)
		},
	},
}
</script>

<style scoped lang="scss">
.detail-post {
	border: 1px solid var(--border-color);
	width: 935px;
	display: flex;
	height: 560px;
	margin: 80px auto 0;

	.post-img {
		flex: 1;
		position: relative;

		img {
			object-fit: contain;
			cursor: pointer;
		}
	}
}

.heart {
	color: red;
	display: inline-block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 90px;
	pointer-events: none;
	opacity: 0;
	transform-origin: left top;
}

.heart.heart-effect {
	animation: 1.2s like-heart-animation ease-in-out forwards;
}

@keyframes like-heart-animation {
	0%,
	to {
		opacity: 0;
		transform: scale(0) translate(-50%, -50%);
	}
	15% {
		opacity: 0.9;
		transform: scale(1.2) translate(-50%, -50%);
	}
	30% {
		transform: scale(0.95) translate(-50%, -50%);
	}
	45%,
	80% {
		opacity: 0.9;
		transform: scale(1) translate(-50%, -50%);
	}
}
</style>
