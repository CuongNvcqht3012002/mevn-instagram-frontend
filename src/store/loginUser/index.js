import axios from 'axios'
import { API_URL } from '@/constant'
import router from '@/router'

const loginUser = {
	actions: {
		async loginUser({ commit }, data) {
			try {
				const [result] = await Promise.all([
					axios.post(`${API_URL}/auth/login`, {
						username: data.username,
						password: data.password,
					}),
					alert('Đang thực hiện đăng nhập...'),
				])

				commit('SAVE_USER', result.data)
				router.push('/')
			} catch (error) {
				alert('Tên người dùng hoặc mật khẩu không chính xác')
			}
		},
	},
}

export default loginUser
