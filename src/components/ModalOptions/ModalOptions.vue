<template>
	<div class="modal-options" @click.self="closeModalOptions">
		<div class="modal-options-inner">
			<ModalOptionsItem
				v-if="$store.getters.user._id == post.userId._id"
				msg="Xóa"
				class="important"
				@click="deletePost"
			/>
			<ModalOptionsItem v-else msg="Báo cáo" class="important" />

			<ModalOptionsItem msg="Đi tới bài viết" @click="gotoDetailPost" />
			<ModalOptionsItem msg="Chia sẻ lên..." />
			<ModalOptionsItem msg="Sao chép liên kết" @click="copyLinkPost" />
			<slot></slot>
			<ModalOptionsItem msg="Hủy bỏ" @click="closeModalOptions" />
		</div>
	</div>
</template>

<script>
import ModalOptionsItem from './ModalOptionsItem'
import { BASE_URL } from '@/constant'

export default {
	components: {
		ModalOptionsItem,
	},
	props: ['post'],
	methods: {
		closeModalOptions() {
			this.$emit('close')
		},
		gotoDetailPost() {
			window.scroll(0, 0)
			this.$router.push('/p/' + this.post._id)
			document.querySelector('body').style.overflow = 'auto'
		},

		copyLinkPost() {
			navigator.clipboard.writeText(`${BASE_URL}/p/${this.post._id}`)
			alert('Đã sao chép liên kết bài viết')
			this.closeModalOptions()
		},

		deletePost() {
			this.$store.dispatch('deleteAction', this.post._id)

			this.$router.push('/')
			document.querySelector('body').style.overflow = 'auto'
		}
	},
}
</script>

<style scoped lang="scss">
.modal-options {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	z-index: 2;

	.modal-options-inner {
		margin: auto;
		margin-top: 150px;
		min-width: 400px;
		background-color: white;
		border-radius: 10px;
		overflow: hidden;
	}
}
</style>
