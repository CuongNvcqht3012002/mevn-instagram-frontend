<template>
	<div class="item">
		<div class="item-avatar">
			<router-link :to="{name: 'profileUser', params:{id: userSuggest._id}}">
				<img v-lazy="userSuggest.avatar" alt="" />
			</router-link>
		</div>
		<div class="item-username">
			<router-link :to="{name: 'profileUser', params:{id: userSuggest._id}}">
				{{  userSuggest.username }}
			</router-link>
			<span>Gợi ý cho bạn</span>
		</div>
		<button class="follow-account" @click="followUser">Theo dõi</button>
	</div>
</template>

<script>

export default {
	props: ['userSuggest'],
	methods: {
		followUser(){
			this.$store.dispatch('followUser', this.userSuggest._id)
			alert('Bắt đầu follow ' + this.userSuggest.username)
		}
	}
}
</script>

<style scoped lang="scss">
.item {
	height: 55px;
	display: flex;
	align-items: center;

	.item-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
        margin-right: 9px;
	}

	.item-username {
		a {
			color: rgba(38, 38, 38, 1);
			overflow-x: hidden;
			text-overflow: ellipsis;
			font-size: 14px;
			font-weight: 600;
            margin-top: -2px;
            display: inline-block;

            &:hover {
                text-decoration: underline;
            }
		}
		span {
			color: rgb(142, 142, 142);
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: 400;
			font-size: 12px;
			line-height: 14px;
            margin-top: -2px;
		}
	}

	.follow-account {
		display: inline-block;
		margin-left: auto;
		border: none;
		outline: none;

		font-weight: 600;
		font-size: 12px;
		line-height: 14px;
		color: rgb(0, 149, 246);
		user-select: none;
		background-color: transparent;
	}
}
</style>
