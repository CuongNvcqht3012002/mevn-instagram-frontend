<template>
	<div id="login" @submit.prevent="login">
		<form class="form">
			<h1>
				<img src="@/assets/logo.png" alt="logo" />
			</h1>
			<h2>Đăng nhập để xem ảnh và video từ bạn bè.</h2>
			<div>
				<input
					type="text"
					v-model="username"
					placeholder="Tên của bạn"
					required
				/>
			</div>
			<div>
				<input
					type="password"
					v-model="password"
					placeholder="Mật khẩu"
					required
				/>
			</div>
			<div>
				<button @submit.prevent="login">Đăng nhập</button>
			</div>
		</form>
		<div class="register">
			<span>Bạn chưa có tài khoản?</span>
			<router-link to="/register">Đăng kí</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		login() {
			this.$store.dispatch('loginUser', {
				username: this.username,
				password: this.password,
			})
		},
	},
}
</script>

<style lang="scss" scoped>
#login {
	text-align: center;
	.form {
		background-color: #fff;
		padding: 5px 30px;
		display: block;
		margin: 55px auto 0;
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
			margin-bottom: 28px;
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

		button {
			outline: none;
			border: none;
			width: 100%;
			display: block;
			color: #fff;
			background-color: rgba(0, 148, 246, 0.816);
			border-radius: 5px;
			padding: 10px;
			margin: 24px 0 18px;
			font-size: 16px;
			font-weight: 500;
		}
	}
}

.register {
	border: 1px solid var(--border-color);
	box-shadow: 0 0 5px var(--border-color);
	max-width: 350px;
	background-color: #fff;
	text-align: center;
	margin: 20px auto 140px;
	padding: 20px;

	span {
		color: rgba(0, 0, 0, 0.8);
		font-size: 14px;
		margin-right: 5px;
	}

	a {
		font-size: 14px;
		color: rgba(0, 149, 246);
	}
}
</style>
