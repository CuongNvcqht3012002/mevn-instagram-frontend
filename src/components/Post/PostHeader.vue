<template>
	<div class="post-header">
		<div class="post-avatar">
			<div class="post-avatar-img">
				<router-link
					:to="{ name: 'profileUser', params: { id: post.userId._id } }"
				>
					<img v-lazy="post.userId.avatar" :alt="post.userId.username" />
				</router-link>
			</div>
			<div class="post-more-info">
				<router-link
					:to="{ name: 'profileUser', params: { id: post.userId._id } }"
				>
					{{ post.userId.username }}
				</router-link>
				<span>{{ post.location }}</span>
			</div>
		</div>
		<div class="post-action" @click="toggleModalOptions">
			<svg
				aria-label="Tùy chọn khác"
				class="_8-yf5 "
				fill="#262626"
				height="20"
				role="img"
				viewBox="0 0 48 48"
				width="20"
			>
				<circle
					clip-rule="evenodd"
					cx="8"
					cy="24"
					fill-rule="evenodd"
					r="4.5"
				></circle>
				<circle
					clip-rule="evenodd"
					cx="24"
					cy="24"
					fill-rule="evenodd"
					r="4.5"
				></circle>
				<circle
					clip-rule="evenodd"
					cx="40"
					cy="24"
					fill-rule="evenodd"
					r="4.5"
				></circle>
			</svg>
		</div>

		<ModalOptions
			v-if="isOpenModalOptions"
			@close="toggleModalOptions"
			:post="post"
		>
		</ModalOptions>
	</div>
</template>

<script>
import ModalOptions from '@/components/ModalOptions/ModalOptions'

export default {
	props: ['post'],
	components: {
		ModalOptions,
	},
	data() {
		return {
			isOpenModalOptions: false,
		}
	},
	methods: {
		toggleModalOptions() {
			this.isOpenModalOptions = !this.isOpenModalOptions

			// stop window scroll
			if (this.isOpenModalOptions)
				document.querySelector('body').style.overflow = 'hidden'
			else document.querySelector('body').style.overflow = 'auto'
		},
	},
}
</script>

<style scoped lang="scss">
.post-header {
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
}
.post-avatar {
	display: flex;
	align-items: center;
}

.post-avatar-img {
	width: 40px;
	height: 40px;
	position: relative;
	background: linear-gradient(to left bottom, #ca3e98, #fbb97e);
	padding: 2px;
	border-radius: 50%;
	margin-right: 13px;
}
.post-avatar-img img {
	border-radius: 50%;
}

.post-more-info {
	display: flex;
	flex-direction: column;

	a {
		margin-bottom: 4px;
		font-weight: 500;
		font-size: 15px;
		color: rgb(38, 38, 38);
		font-weight: 550;
		&:hover {
			text-decoration: underline;
		}
	}

	span {
		margin-top: -1px;
		font-size: 12px;
	}
}

.post-action {
	width: 24px;
	height: 24px;
	cursor: pointer;
}
</style>
