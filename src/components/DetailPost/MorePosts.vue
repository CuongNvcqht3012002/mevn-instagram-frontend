<template>
	<div class="more-post">
		<h3 class="more-header">
			Thêm các bài viết từ
			<router-link :to="{ name: 'profileUser', params: { id: author._id } }">
				{{ author.username }}
			</router-link>
		</h3>
		<div class="post-wrap">
			<div class="row">
				<MorePostItem
					v-for="(postItem, index) in morePosts"
					:key="index"
					:postItem="postItem"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import MorePostItem from './MorePostItem'

export default {
	components: {
		MorePostItem,
	},
	props: ['morePosts', 'author'],
}
</script>

<style lang="scss" scoped>
.more-post {
	margin: 40px auto 10px;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	width: 935px;
	padding: 20px 0 0;

	.more-header {
		color: rgb(142, 142, 142);
		font-weight: 600;
		font-size: 15.5px;
		line-height: 18px;
		margin-bottom: 20px;

		a {
			margin-left: 4px;
			color: rgb(38, 38, 38);
		}
	}
}

.post-wrap .row {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-left: -28px;
}
</style>
