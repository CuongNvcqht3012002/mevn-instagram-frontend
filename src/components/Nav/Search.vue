<template>
	<div class="nav-search">
		<div>
			<label for="nav-search-input"></label>
			<input type="text" placeholder="Tìm kiếm" id="nav-search-input" />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>

.nav-search > div {
    display: flex;
	align-items: center;
	justify-content: center;
    height: 28px;
	width: 215px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 1px;
	margin-left: 50px;
}

.nav-search label::before {
	font-family: 'Font Awesome 5 Free';
	content: '\f002';
	font-weight: 600;
	color: rgba(0, 0, 0, 0.35);
    height: 100%;
    font-size: 14px;
    display: inline-block;
    margin-left: 10px;
	margin-right: 8px;
}

input {
    border: none;
	outline: none;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.8);
	min-width: 70px;
	height: 100%;
    padding: 2zpx 7px;
}

::placeholder {
	color: rgba(0, 0, 0, 0.5);
	font-weight: 500;
	font-size: 15.5px;
}

</style>
