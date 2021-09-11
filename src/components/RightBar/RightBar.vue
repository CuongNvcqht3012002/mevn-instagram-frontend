<template>
	<div id="right-bar" v-if="$store.getters.users">
		<RightBarHeader />
		<div class="suggest-item">
			<div class="header">
				<span>Gợi ý cho bạn</span>
				<a href="#">Xem tất cả</a>
			</div>
			<SuggestItem
				v-for="(user, index) in usersSuggest.slice(0,5)"
				:key="index"
				:userSuggest="user"
			/>
		</div>
		<RightBarFooter />
	</div>
</template>

<script>
import RightBarHeader from '@/components/RightBar/RightBarHeader'
import RightBarFooter from '@/components/RightBar/RightBarFooter'
import SuggestItem from '@/components/RightBar/SuggestItem'

export default {
	components: {
		RightBarHeader,
		RightBarFooter,
		SuggestItem,
	},
	data() {
		return {
			usersSuggest: [],
		}
	},
	async created() {
		const users = this.$store.getters.users
		const adminUser = this.$store.getters.user


		// handle user who suggest to follow
		this.usersSuggest = users.filter((user) => {
			return !adminUser.following.includes(user._id) && user._id != adminUser._id
		})

		// random
		this.usersSuggest = this.usersSuggest.sort(() => Math.random() - 0.5)

	},
}
</script>

<style scoped lang="scss">
#right-bar {
	border: 1px solid var(--border-color);
	flex: 1;
	position: sticky;
	right: 0;
	top: 84px;
	box-shadow: 0 0 1.2px var(--border-color);
	padding: 0 10px 10px;
	display: flex;
	flex-direction: column;
	max-height: 520px;
}

.suggest-item {
	margin: 15px 4px;

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 7px;

		span {
			display: block;
			color: #8e8e8e;
			font-size: 14px;
			line-height: 18px;
			font-weight: 600;
		}

		a {
			color: #262626;
			font-weight: 600;
			font-size: 13px;
			line-height: 14px;
			// margin: -2px 0 -3px;
			font-family: Avenir, Helvetica, Arial, sans-serif;
		}
	}
}
</style>
