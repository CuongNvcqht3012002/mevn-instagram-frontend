<template>
	<div class="profile-user">
		<div class="header">
			<div class="user-avatar">
				<img v-lazy="author.avatar" alt="" />
			</div>
			<div class="user-info">
				<div class="info-header">
					<h1>{{ author.username }}</h1>
					<div
						class="info-config"
						v-if="author._id == $store.getters.user._id"
					>
						<a href="#">Chỉnh sửa trang cá nhân</a>
						<i class="fas fa-cog"></i>
					</div>
					<div v-else class="info-action">
						<span class="follow-action">
							<button>Theo dõi</button>
						</span>
						<span class="more-action">
							<i class="fas fa-ellipsis-h"></i>
						</span>
					</div>
				</div>
				<div class="info-related">
					<div>
						<span> {{ morePosts.length }} </span>
						bài viết
					</div>
					<div class="follower">
						<span>{{ author.follower.length }}</span>
						người theo dõi
					</div>
					<div class="following">
						Đang theo dõi <span>{{ author.following.length }}</span> người dùng
					</div>
				</div>
			</div>
		</div>

		<div class="ralated-posts">
			<ul>
				<li>
					<router-link :to="{ name: 'postsOfUser' }">
						<span>
							<svg
								aria-label=""
								class="_8-yf5 "
								fill="#262626"
								height="14"
								role="img"
								viewBox="0 0 48 48"
								width="14"
							>
								<path
									clip-rule="evenodd"
									d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
						Bài viết
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'savedPosts' }">
						<span>
							<svg
								aria-label=""
								class="_8-yf5 "
								fill="#8e8e8e"
								height="14"
								role="img"
								viewBox="0 0 48 48"
								width="14"
							>
								<path
									d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
								></path>
							</svg>
						</span>
						Đã lưu
					</router-link>
				</li>
			</ul>
			<router-view :morePosts="morePosts"></router-view>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { API_URL } from '@/constant'

export default {
	data() {
		return {
			morePosts: [],
			author: '',
		}
	},
	async created() {
		// get user
		const id = this.$route.params.id

		// get all posts of user
		this.morePosts = this.$store.getters.posts.filter((post) => {
			return post.userId._id == id
		})

		// get user data: if user has at least one post => get user from post, else call api => save time
		if (this.morePosts.length == 0) {
			const result = await axios({
				method: 'get',
				url: `${API_URL}/users/${id}`,
			})

			this.author = result.data.user
		} else {
			this.author = this.morePosts[0].userId
		}
	},
}
</script>

<style lang="scss" scoped>
.profile-user {
	width: 935px;
	margin: 60px auto 0;
}

.header {
	display: flex;
	align-items: center;
	width: 100%;
	height: 220px;
	padding: 30px 0;
}

.user-avatar {
	height: 100%;
	width: 30%;
	display: flex;

	img {
		width: 170px;
		height: 170px;
		border-radius: 50%;
		margin: -8px auto 0;
	}
}

.user-info {
	height: 100%;
	flex: 1;
	margin-left: 30px;
	margin-top: -10px;

	.info-header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		h1 {
			white-space: nowrap;
			color: rgb(38, 38, 38);
			font-weight: 300;
			font-size: 28px;
			font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
			margin-right: 17px;
			margin-bottom: 4px;
		}

		.info-config {
			display: flex;
			a {
				border: 1px solid #dbdbdb;
				color: rgba(38, 38, 38, 0.8);
				box-shadow: 0 0 2px var(--border-color);
				font-weight: 600;
				padding: 5px 11px;
				text-align: center;
				text-decoration: none;
				font-size: 14px;
				border-radius: 4px;
				margin-right: 17px;
			}

			i {
				color: rgb(38, 38, 38);
				font-size: 22px;
				cursor: pointer;
				margin-top: 3px;
			}
		}

		.info-action {
			display: flex;
			margin-left: 20px;

			.follow-action button {
				outline: none;
				border: none;
				border-radius: 3px;
				font-size: 14px;
				font-weight: 500;
				line-height: 26px;
				user-select: none;
				white-space: nowrap;
				background: #0095f6;
				color: #fff;
				padding: 2px 24px;
			}

			.more-action i {
				font-size: 16px;
				margin-left: 18px;
				margin-top: 7px;
				cursor: pointer;
			}
		}
	}

	.info-related {
		display: flex;
		align-items: center;

		> div {
			margin-right: 40px;
			color: rgba(38, 38, 38, 0.8);
			font-size: 15.5px;

			span {
				color: rgba(38, 38, 38, 1);
				font-weight: 600;
			}
		}
	}
}

.ralated-posts {
	border-top: 1px solid var(--border-color);
	margin-top: 20px;
	> ul {
		list-style: none;
		padding: 0;
		margin: 0;
		margin-bottom: 10px;
		text-align: center;

		li {
			display: inline-block;
			padding: 12px 0;
			transition: all 0.25s;

			span {
				display: inline-block;
				color: rgb(142, 142, 142);
				margin-right: 6px;
			}

			a {
				color: rgb(142, 142, 142);
				margin: 0 20px;
			}

			&.active {
				border-top: 1.5px solid black;
				a {
					color: rgb(38, 38, 38);
				}
				span {
					color: rgb(38, 38, 38);
				}
			}
		}
	}
}
</style>
