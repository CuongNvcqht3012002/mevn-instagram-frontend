<template>
	<div class="story-item">
		<div class="item-inner">
			<div class="item-img">
				<img v-if="story.name == 'psg'" src="@/assets/psg.jpg" alt="psg" />
				<img v-else-if="story.name == 'mu'" src="@/assets/mu.jpg" alt="mu" />
				<img v-else src="@/assets/dog.jpg" alt="psg" />
			</div>
			<div class="item-info">{{ story.name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['story'],
}
</script>

<style scoped>
.item-inner {
	width: 80px;
	height: 122px;
	padding: 0 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.item-img {
	width: 64px;
	height: 64px;
	position: relative;
	background: linear-gradient(to left bottom, #ca3e98, #fbb97e);
	padding: 2.5px;
	border-radius: 50%;
}
.item-img img {
	border-radius: 50%;
}

.item-info {
	color: #262626;
	font-size: 13px;
	max-width: 64px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-top: 4px;
}
</style>
