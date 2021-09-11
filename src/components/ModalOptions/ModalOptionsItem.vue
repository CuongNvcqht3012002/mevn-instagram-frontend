<template>
	<div class="option-item">
		{{msg}}
	</div>
</template>

<script>
export default {
    props: ['msg']
}
</script>

<style lang="scss" scoped>
.option-item {
	background-color: transparent;
	border-top: 1px solid #8b868671;
	cursor: pointer;
	user-select: none;
	color: #262626;
	font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	font-size: 16px;
	min-height: 48px;
    line-height: 48px;
    text-align: center;

    &:hover {
        background-color: rgba(148, 147, 147, 0.2)
    }
}

.option-item.important {
	color: #ed4956;
	font-weight: 700;
}
</style>
