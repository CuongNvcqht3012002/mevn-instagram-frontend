<template>
	<div class="post-right">
		<div class="post-header">
			<div class="admin-post-avatar">
				<router-link
					:to="{ name: 'profileUser', params: { id: post.userId._id } }"
				>
					<img v-lazy="post.userId.avatar" alt="" />
				</router-link>
			</div>

			<router-link
				:to="{ name: 'profileUser', params: { id: post.userId._id } }"
				class="admin-post-name"
			>
				<span>{{ post.userId.username }}</span>
			</router-link>
			<div class="post-action" @click="toggleModalOptions">
				<svg
					aria-label="Tùy chọn khác"
					class="_8-yf5 "
					fill="#262626"
					height="21"
					role="img"
					viewBox="0 0 48 48"
					width="21"
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


		<!-- List comments and caption-->
		<div class="post-comments">
			<ul>
				<li>
					<router-link
						:to="{ name: 'profileUser', params: { id: post.userId._id } }"
					>
						<img v-lazy="post.userId.avatar" alt="" />
					</router-link>
					<div>
						<div>
							<router-link
								:to="{ name: 'profileUser', params: { id: post.userId._id } }"
								>{{ post.userId.username }}</router-link
							>
							<span class="comment-body">{{ post.caption }}</span>
							<span class="comment-time">{{
								new Date(post.createdAt).toLocaleString()
							}}</span>
						</div>
					</div>
				</li>
				<li v-for="(comment, index) in post.comments" :key="index">
					<router-link
						:to="{ name: 'profileUser', params: { id: comment.userId._id } }"
					>
						<img v-lazy="comment.userId.avatar" alt="" />
					</router-link>
					<div>
						<div>
							<router-link
								:to="{
									name: 'profileUser',
									params: { id: comment.userId._id },
								}"
							>
								{{ comment.userId.username }}
							</router-link>
							<span class="comment-body">{{ comment.content }}</span>
							<span class="comment-time">{{
								new Date(comment.createdAt).toLocaleString()
							}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<div class="post-your-interact">
			<div class="interact-header">
				<div @click="likePost(post._id)">
					<svg
						v-if="post.likes.includes($store.getters.user._id)"
						aria-label="Bỏ thích"
						class="_8-yf5 "
						fill="#ed4956"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
						></path>
					</svg>
					<svg
						v-else
						aria-label="Thích"
						class="_8-yf5 "
						fill="#262626"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
						></path>
					</svg>
				</div>
				<div>
					<svg
						aria-label="Bình luận"
						class="_8-yf5 "
						fill="#262626"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							clip-rule="evenodd"
							d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
							fill-rule="evenodd"
						></path>
					</svg>
				</div>
				<div>
					<svg
						aria-label="Chia sẻ bài viết"
						class="_8-yf5 "
						fill="#262626"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
						></path>
					</svg>
				</div>
				<div class="save-post">
					<svg
						aria-label="Lưu"
						class="_8-yf5 "
						fill="#262626"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
						></path>
					</svg>
				</div>
			</div>
			<div class="post-vote">
				<p>{{ post.likes.length }} nguời đã thích</p>
			</div>
			<div class="post-time">
				<p>
					{{ new Date(post.createdAt).toLocaleString() }}
				</p>
			</div>
			<form class="form-comment-short" @submit.prevent="postComment">
				<div class="comment-icon">
					<svg
						aria-label="Biểu tượng cảm xúc"
						class="_8-yf5 "
						fill="#262626"
						height="22"
						role="img"
						viewBox="0 0 48 48"
						width="22"
					>
						<path
							d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"
						></path>
						<path
							d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"
						></path>
					</svg>
				</div>
				<input
					type="text"
					placeholder="Thêm bình luận..."
					v-model="newComment"
				/>
				<button @click.prevent="postComment">Đăng</button>
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import ModalOptions from '@/components/ModalOptions/ModalOptions'

export default {
	props: ['post'],
	data() {
		return {
			newComment: '',
			isOpenModalOptions: false,
		}
	},
	components: {
		ModalOptions,
	},
	methods: {
		toggleModalOptions() {
			this.isOpenModalOptions = !this.isOpenModalOptions

			// stop window scroll
			if (this.isOpenModalOptions)
				document.querySelector('body').style.overflow = 'hidden'
			else document.querySelector('body').style.overflow = 'auto'
		},

		...mapActions(['likePost']),
		async postComment() {
			if (this.newComment == '') return
			this.newComment.trim()

			const startPost = this.newComment
			this.newComment = ''

			await this.$store.dispatch('postComment', {
				id: this.post._id,
				newComment: startPost,
			})

			let listCommentDiv = document.querySelector('.post-comments')
			listCommentDiv.scrollTop = listCommentDiv.scrollHeight
		},
	},
}
</script>

<style scoped lang="scss">
.post-right {
	width: 335px;
	border-left: 1px solid var(--border-color);

	display: flex;
	flex-direction: column;

	.post-header {
		border-bottom: 1px solid rgb(202, 202, 202);
		height: 72px;
		padding: 16px;
		display: flex;
		align-items: center;

		.admin-post-avatar {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			overflow: hidden;
		}

		.admin-post-name {
			display: inline-block;
			margin-left: 14px;
			color: rgb(38, 38, 38);
			font-weight: 550;
			font-size: 14px;

			&:hover {
				text-decoration: underline;
			}
		}

		.post-action {
			margin-left: auto;
			cursor: pointer;
		}
	}

	.post-comments {
		overflow-x: hidden;
		flex: 1;

		> ul {
			list-style: none;
			padding: 14px 18px;
			scroll-behavior: smooth;

			li {
				margin-bottom: 19px;
				display: flex;

				img {
					width: 36px;
					height: 36px;
					border-radius: 50%;
					margin-right: 14px;
				}

				a {
					display: inline-block;
					color: rgb(38, 38, 38);
					font-weight: 550;
					font-size: 13px;
					margin-right: 6.5px;
					&:hover {
						text-decoration: underline;
					}
				}

				.comment-body {
					color: rgb(38, 38, 38);
					font-size: 15.5px;
					line-height: 22px;
					font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
					word-wrap: break-word;
				}

				.comment-time {
					display: block;
					margin-top: 8px;
					font-size: 13px;
					color: rgb(142, 142, 142);
				}
			}
		}
	}

	// your interact
	.post-your-interact {
		border-top: 1px solid var(--border-color);
		height: 150px;

		.interact-header {
			display: flex;
			align-items: center;
			margin-top: 10px;
			padding: 0 16px;
		}

		.interact-header > div {
			width: 42px;
			height: 32px;
			cursor: pointer;
		}

		.save-post {
			margin-left: auto;
			margin-right: -20px;
		}

		.post-vote p {
			color: rgb(38, 38, 38);
			font-size: 14px;
			font-weight: 500;
			font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
			display: inline-block;
			padding: 0 16px;
		}

		.post-time p {
			margin: 10px 0 6px;
			font-size: 13.2px;
			color: rgba(142, 142, 142);
			display: inline-block;
			padding: 0 16px;
		}

		.form-comment-short {
			border-top: 1px solid var(--border-color);
			padding: 0 16px;
			margin-top: 4px;
			display: flex;
			align-items: center;
			height: 56px;
		}

		input {
			border: none;
			outline: none;
			flex: 1;
			margin-bottom: 2px;
			color: black;
			font-size: 15px;
		}

		.comment-icon {
			margin-right: 15px;
		}

		.post-interact *::placeholder {
			font-size: 14px;
		}

		.form-comment-short button {
			border: 0;
			color: #0094f6d2;
			margin-bottom: 3.5px;
			appearance: none;
			background: 0 0;
			border: 0;
			font-weight: 600;
			padding: 5px 9px;
			text-align: center;

			user-select: none;
			margin-left: auto;
			font-size: 16.6px;
		}
	}
}
</style>
