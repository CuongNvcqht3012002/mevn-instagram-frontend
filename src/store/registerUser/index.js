import axios from 'axios'
import { API_URL } from '@/constant'
import router from '@/router'

const registerUser = {
	state() {
		return {
			formData: new FormData(),
			username: '',
			password: '',
		}
	},
	actions: {
		async registerUser({ commit, state }, data) {
			try {
				// add username and password
				state.formData.set('username', data.username)
				state.formData.set('password', data.password)

				const [newUser] = await Promise.all([
					axios({
						method: 'post',
						url: `${API_URL}/auth/register`,
						data: state.formData,
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}),
					alert('Đang thực hiện đăng kí, vui lòng chờ...'),
				])

				// save user into local
				commit('SAVE_USER', newUser.data)

				state.formData = new FormData()

				router.push('/')
			} catch (error) {
				alert('Tên người dùng đã tồn tại')
			}
		},
	},
	mutations: {
		SET_AVATAR(state, data) {
			state.formData.set('avatar', data)
		},
	},
}

export default registerUser
