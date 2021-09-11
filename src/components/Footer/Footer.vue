<template>
	<div id="footer">
		<div class="info">
			<div>
				<a href="#">
					Giới thiệu
				</a>
			</div>
			<div>
				<a href="#">
					Blog
				</a>
			</div>
			<div>
				<a href="#">
					Việc làm
				</a>
			</div>
			<div>
				<a href="#">
					Trợ giúp
				</a>
			</div>
			<div>
				<a href="#">
					API
				</a>
			</div>
			<div>
				<a href="#">
					Quyền riêng tư
				</a>
			</div>
			<div>
				<a href="#">
					Điều khoản
				</a>
			</div>
			<div>
				<a href="#">
					Tài khoản liên quan nhất
				</a>
			</div>
			<div>
				<a href="#">
					Hashtag
				</a>
			</div>
			<div>
				<a href="#">
					Vị trí
				</a>
			</div>
		</div>
		<div class="copy-right">
			<div class="footer-lang">
				Tiếng Việt
				<span>
					<svg
						aria-label="Biểu tượng mũi tên xuống"
						class="_8-yf5 "
						fill="#8e8e8e"
						height="12"
						role="img"
						viewBox="0 0 48 48"
						width="12"
					>
						<path
							d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"
						></path>
					</svg>
				</span>
			</div>
			<div class="footer-face">© 2021 Instagram from Facebook</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
#footer {
	padding: 0 16px;
	margin-bottom: 52px;
}

.info {
	margin-top: 24px;
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	justify-content: center;
}

.info > div {
	margin: 0 8px 8px;
}

.info > div > a {
	color: rgb(142, 142, 142);
	text-decoration: none;
	font-weight: 400;
	font-size: 13.5px;
	display: inline-block;
}

.copy-right {
	margin: 8px 0 12px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.copy-right > div {
	color: rgb(142, 142, 142);
	font-weight: 400;
	font-size: 13.5px;
}

.footer-lang span {
	display: inline-block;
	transform: rotate(180deg) translateY(2.7px);
	margin-right: 20px;
}
</style>
