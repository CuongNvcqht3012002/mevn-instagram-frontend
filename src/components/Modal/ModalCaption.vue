<template>
	<div class="modal-caption">
		<form>
			<div class="modal-caption-input">
				<div class="caption-main">
					<div class="caption-header">
						<img v-lazy="this.$store.getters.user.avatar" alt="" />
						<h3>{{ this.$store.getters.username }}</h3>
					</div>
					<textarea class="textarea" placeholder="Viết chú thích..." v-model="caption">
					</textarea>
					<div class="caption-icon">
						<span>
							<svg
								aria-label="Biểu tượng cảm xúc"
								class="_8-yf5 "
								fill="#8e8e8e"
								height="20"
								role="img"
								viewBox="0 0 48 48"
								width="20"
							>
								<path
									d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"
								></path>
								<path
									d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"
								></path>
							</svg>
						</span>
					</div>
				</div>

				<div class="caption-more">
					<div class="caption-location">
						<label for="location-input">
							<input
								type="text"
								placeholder="Thêm vị trí..."
								id="location-input"
								v-model="location"
							/>
							<span>
								<svg
									aria-label="Thêm vị trí..."
									class="_8-yf5 "
									fill="#8e8e8e"
									height="20"
									role="img"
									viewBox="0 0 48 48"
									width="20"
								>
									<path
										clip-rule="evenodd"
										d="M24 22.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
										fill-rule="evenodd"
									></path>
									<path
										d="M24 3c8.8 0 16 7.1 16 15.9 0 9.6-9.8 20.5-16 25.8-6.2-5.3-16-16.2-16-25.8C8 10.1 15.2 3 24 3m0-3C13.5 0 5 8.5 5 18.9 5 31.3 18.4 44 22.7 47.5c.4.3.8.5 1.3.5s.9-.2 1.3-.5C29.6 44 43 31.3 43 18.9 43 8.5 34.5 0 24 0z"
									></path>
								</svg>
							</span>
						</label>
					</div>
					<div class="caption-support">
						Trợ năng
						<span style="display: inline-block; transform: rotate(180deg);"
							><svg
								aria-label="Biểu tượng mũi tên xuống"
								class="_8-yf5 "
								fill="#262626"
								height="16"
								role="img"
								viewBox="0 0 48 48"
								width="16"
							>
								<path
									d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"
								></path></svg
						></span>
					</div>
					<div class="caption-advanced">
						Cài đặt nâng cao
						<span style="display: inline-block; transform: rotate(180deg);"
							><svg
								aria-label="Biểu tượng mũi tên xuống"
								class="_8-yf5 "
								fill="#262626"
								height="16"
								role="img"
								viewBox="0 0 48 48"
								width="16"
							>
								<path
									d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"
								></path></svg
						></span>
					</div>
				</div>
			</div>
			<div class="modal-submit">
				<button @click.prevent="createPost">Chia sẻ</button>
			</div>
		</form>
	</div>
</template>
<script>

export default {
	data(){
		return {
			caption: '',
			location: ''
		}
	},
	methods: {
		async createPost(){
			await this.$store.dispatch('createPost', {caption: this.caption, location: this.location})

			// go to top because upload post successfully
			window.scroll(0,0);
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
.modal-caption {
	flex: 1;
	height: 100%;

	form {
		.modal-caption-input {
			border: 1px solid transparent;

			height: 520px;
		}

		.modal-submit {
			padding: 16px;

			button {
				outline: none;
				border: none;
				background-color: rgba(0, 148, 246, 0.9);
				padding: 12px 18px;
				width: 100%;
				border-radius: 5px;
				color: #fff;
				font-weight: 600;
				padding: 12px 18px;
				font-size: 14px;
				line-height: 18px;
			}
		}
	}
}

.caption-main {
	padding: 0 16px;
	border-bottom: 1px solid var(--border-color);

	.caption-header {
		margin: 18px 0 20px;
		display: flex;
		align-items: center;

		img {
			margin-right: 16px;
			width: 44px;
			height: 44px;
			border-radius: 50%;
		}

		h3 {
			font-size: 18px;
			font-weight: 600;
			color: rgb(38, 38, 38);
			line-height: 24px;
		}
	}

	.textarea {
		outline: none;
		width: 100%;
		height: 120px;
		background: 0 0;
		border: none;
		overflow: auto;

		resize: none;
		font-size: 17px;
		line-height: 24px;
		margin: 0;
	}
}

.caption-icon {
	display: flex;
	align-items: center;
	justify-content: space-between;

	span:first-child {
		padding-bottom: 8px;
		padding-top: 4px;

		padding-right: 8px;
	}
}

.caption-more > div {
	border-bottom: 1px solid var(--border-color);
}

.caption-location {
	padding: 0 8px;
	height: 44px;
	label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	input {
		height: 42px;
		display: inline-block;
		outline: none;
		border: none;
		padding: 4px 9px;
		width: 100%;
		font-size: 16px;
		color: rgb(38, 38, 38);
	}

	span {
		margin-right: 10px;
	}
}

.caption-support,
.caption-advanced {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	text-align: start;
	color: rgb(38, 38, 38);
	font-weight: 600;
	font-size: 16px;

	span {
		margin-right: 3px;
	}
}
</style>
