<template>
	<div class="header" v-if="$store.getters.user">
		<div class="header-avatar">
			<router-link :to="{name: 'profileUser', params:{id: $store.getters.user._id}}">
				<img v-lazy="$store.getters.user.avatar" alt="" />
			</router-link>
		</div>
		<div class="username">
			<router-link :to="{name: 'profileUser', params:{id: $store.getters.user._id}}">
				{{  $store.getters.user.username }}
			</router-link>
		</div>
		<button class="switch-account">Chuyển</button>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.header {
	margin: 18px 0 10px;
	height: 60px;
	display: flex;
	align-items: center;

	.header-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}

	.username a {
		color: rgba(38, 38, 38,1);
		font-weight: 600;
		overflow-x: hidden;
		text-overflow: ellipsis;
		font-size: 14.5px;
        margin-left: 10px;

		&:hover {
			text-decoration: underline;
		}
	}

	.switch-account {
		display: inline-block;
		margin-left: auto;
		border: none;
		outline: none;

		font-weight: 600;
		font-size: 13.5px;
		line-height: 14px;
		color: rgb( 0, 149, 246);
		user-select: none;
        background-color:transparent;
	}
}
</style>
