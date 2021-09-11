<template>
	<div class="modal" @click.self="TOGGLE_MODAL_CREATE_POST">
		<div class="modal-inner">
			<div class="modal-header">
				<h2>Tạo Bài Viết</h2>
				<div class="modal-close" @click="TOGGLE_MODAL_CREATE_POST">
					<svg
						aria-label="Đóng"
						class="_8-yf5 "
						fill="#262626"
						height="24"
						role="img"
						viewBox="0 0 48 48"
						width="24"
					>
						<path
							clip-rule="evenodd"
							d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
							fill-rule="evenodd"
						></path>
					</svg>
				</div>
			</div>

			<!-- MODAL BODY -->
			<div class="modal-body">
				<div class="modal-img">
					<div class="modal-img-wrap">
						<label for="postImg">
							<img v-if="previewImg" :src="previewImg" alt="" />
							<img
								v-else
								src="@/assets/empty-img-post.jpg"
								alt=""
								style="object-fit: contain;"
							/>
						</label>
						<p v-if="previewImg" class="nameImg">File name: {{ filename }}</p>
					</div>
				</div>
				<ModalCaption />
			</div>
			<!-- Form create post -->
			<form enctype="multipart/form-data" @submit.prevent="null">
				<input type="file" id="postImg" @change="onFileChange" required />
			</form>
		</div>
	</div>
</template>

<script>
import ModalCaption from './ModalCaption.vue'
import { mapMutations } from 'vuex'

export default {
	components: {
		ModalCaption,
	},
	methods: {
		// Show/Hide modal create post
		...mapMutations(['TOGGLE_MODAL_CREATE_POST']),

		// create again previewImg and append new img to form data of Store
		onFileChange() {
			let [file] = document.querySelector('#postImg').files
			if (file) {
				this.previewImg = URL.createObjectURL(file)
				this.filename = file.name

				this.$store.dispatch('setImgPost', file)
			}
		},
	},
	data() {
		return {
			previewImg: '',
			filename: ''
		}
	},
}
</script>

<style scoped lang="scss">
.modal {
	background-color: rgba(0, 0, 0, 0.65);
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	transition: opacity linear 0.25s;
}

.modal-inner {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
	max-width: 100%;
	width: 90%;
	height: 90%;
	text-align: center;
	padding: 14px 0 0;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.modal-header {
	border-bottom: 1px solid var(--border-color);
	padding-bottom: 14px;
}

.modal-header h2 {
	font-size: 20px;
	font-weight: 550;
}

.modal-close {
	position: absolute;
	right: 15px;
	top: 10px;
	cursor: pointer;
}

/* MODAL BODY */
.modal-body {
	display: flex;
	flex: 1;
}

.modal-img {
	flex-basis: 62.5%;
	display: flex;
	justify-content: center;
	border-right: 1px solid var(--border-color);

	.modal-img-wrap {
		width: 400px;
		max-height: 500px;
		margin-top: 10px;
		border: 1px solid var(--border-color);

		label {
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		.nameImg {
			margin-top: 15px;
			white-space: nowrap;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
}

form {
	display: none;
}
</style>
