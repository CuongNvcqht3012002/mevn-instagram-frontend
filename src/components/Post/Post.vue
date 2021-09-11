<template>
	<div class="post">
		<PostHeader
			:post="post"
		/>
		<div class="post-img">
			<img v-lazy="post.img" alt="" @dblclick="likePost" />
			<i class="fas fa-heart heart"></i>
		</div>
		<PostInteract
			:post="post"
		/>
	</div>
</template>

<script>
import PostInteract from './PostInteract'
import PostHeader from './PostHeader'

export default {
	components: {
		PostInteract,
		PostHeader,
	},
	props: ['post'],
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

<style scoped>
.post {
	border-radius: 3px;
	border: 1px solid var(--border-color);
	width: 100%;
	margin-bottom: 24px;
	box-shadow: 0 0 1.4px var(--border-color);
}

.post-img {
	position: relative;
}

.post-img img {
	width: calc(100% + 0.5px);
	cursor: pointer;
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
