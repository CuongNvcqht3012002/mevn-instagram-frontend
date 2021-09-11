<template>
	<div class="post-wrap">
		<div class="row">
			<MorePostItem
				v-for="(postItem, index) in morePosts"
				:key="index"
				:postItem="postItem"
			/>
		</div>
	</div>
</template>

<script>
import MorePostItem from '@/components/DetailPost/MorePostItem'
export default {   
    components: {
        MorePostItem
    },
    props: ['morePosts'],

}
</script>

<style lang="scss" scoped>
.post-wrap .row {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-left: -28px;
    min-height: 260px;
}

</style>
