<template>
	<div id="register" @submit.prevent="register">
		<form class="form" enctype="multipart/form-data">
			<h1>
				<img src="@/assets/logo.png" alt="logo" />
			</h1>
			<h2>Đăng kí để xem ảnh và video từ bạn bè.</h2>
			<div>
				<input
					autocomplete="off"
					type="text"
					v-model="username"
					placeholder="Tên của bạn"
					required
				/>
			</div>
			<div>
				<input
					autocomplete="off"
					type="password"
					v-model="password"
					placeholder="Mật khẩu"
					required
				/>
			</div>
			<div class="avatar-img">
				<p>Avatar của bạn</p>
				<label for="avatar">
					<img v-if="previewImg" :src="previewImg" alt="" />
					<img v-else src="@/assets/default-avatar.jpg" />
				</label>
				<input type="file" id="avatar" @change="onFileChange" />
			</div>
			<div>
				<button @submit.prevent="register">Đăng kí</button>
			</div>
		</form>
		<div class="login">
			<span>Bạn đã có tài khoản?</span>
			<router-link to="/login">Đăng nhập</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
			previewImg: '',
		}
	},
	methods: {
		// setup again img avatar
		onFileChange() {
			let [file] = document.querySelector('#avatar').files
			if (file) {
				this.previewImg = URL.createObjectURL(file)

				this.$store.commit('SET_AVATAR', file)
			}
		},

		register() {
			this.$store.dispatch('registerUser', {
				username: this.username,
				password: this.password,
			})
		},
	},
}
</script>

<style lang="scss" scoped>
#register {
	text-align: center;

	.form {
		background-color: #fff;
		padding: 5px 30px;
		display: block;
		margin: 40px auto 0;
		max-width: 350px;
		border: 1px solid var(--border-color);
		box-shadow: 0 0 5px var(--border-color);

		h1 {
			width: 175px;
			margin: 15px auto 6px;
		}

		h2 {
			color: rgb(142, 142, 142);
			font-size: 17px;
			font-weight: 600;
			text-align: center;
			margin-bottom: 5px;
		}

		input {
			outline-color: rgba(0, 0, 0, 0.5);
			border: 1px solid var(--border-color);
			padding: 7px 12px;
			font-size: 15px;
			line-height: 16px;
			display: inline-block;
			margin: 10px auto;
			width: 100%;
		}

		.avatar-img {
			text-align: center;
			margin: 0 auto;
			overflow: hidden;

			p {
				margin: 7px 0 10px;
				font-weight: 7\600;
				color: rgb(142, 142, 142);
			}

			label {
				display: inline-block;
				width: 110px;
				height: 110px;
				border-radius: 50%;
				overflow: hidden;
				border: 1px solid var(--border-color);
			}

			input {
				display: none;
			}
		}

		button {
			outline: none;
			border: none;
			width: 100%;
			display: block;
			color: #fff;
			background-color: rgba(0, 148, 246, 0.816);
			border-radius: 5px;
			padding: 10px;
			margin: 12px 0 10px;
			font-size: 16px;
			font-weight: 500;
		}
	}
}

.login {
	border: 1px solid var(--border-color);
	box-shadow: 0 0 5px var(--border-color);
	max-width: 350px;
	background-color: #fff;
	text-align: center;
	margin: 20px auto 45px;
	padding: 20px;

	span {
		color: rgba(0, 0, 0, 0.8);
		font-size: 14px;
		margin-right: 5px;
	}

	a {
		font-size: 14px;
		color: rgba(0,149,246);
	}
}
</style>
