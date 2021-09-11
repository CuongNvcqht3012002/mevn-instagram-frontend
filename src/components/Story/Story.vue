<template>
	<div id="story">
		<Item v-for="(story,index) in stories" :key="index" :story="story" />
	</div>
</template>

<script>
import Item from './Item'

export default {
	components: {
		Item
	},
	data(){
		return {
			stories: [
				{
					img: '@/assets/psg.jpg',
					name: 'psg'
				},
				{
					img: '@/assets/mu.jpg',
					name: 'mu'
				},
				{
					img: '@/assets/dog.jpg',
					name: 'handsome boy'
				}
			]
		}
	}
}
</script>

<style scoped>
#story {
	border-radius: 3px;
	border: 1px solid var(--border-color);
	margin-bottom: 24px;
	margin-top: 0;
	padding: 16px 10px;
	height: 118px;
	display: flex;
	align-items: center;
	overflow: hidden;
	box-shadow: 0 0 1.2px var(--border-color);
}
</style>
