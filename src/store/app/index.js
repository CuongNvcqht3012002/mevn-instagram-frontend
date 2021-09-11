import { LOCAL_STORAGE_TOKEN_NAME, API_URL } from '@/constant'
import axios from 'axios'
import router from '@/router'

const app = {
	state() {
		return {
			isAuthenticated: false,
			user: null,
			token: undefined,
			isOpenModalCreatPost: false,
		}
	},
	getters: {
		isAuthenticated: (state) => state.isAuthenticated,
		isOpenModalCreatPost: (state) => state.isOpenModalCreatPost,
		user: (state) => state.user,
	},
	actions: {
		async checkUser({ commit }) {
			try {
				const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

				const result = await axios({
					method: 'POST',
					url: `${API_URL}/auth/logging`,
					headers: {
						Authorization: 'Bearer ' + accessToken,
					}
				})

				// user was logged
				commit('SAVE_USER', { user: result.data.user, accessToken })

			} catch (err) {
				commit('RESET_USER')
			}
		},
		logout({ commit }) {
			commit('RESET_USER')
			router.push('/login')
		},
	},
	mutations: {
		TOGGLE_MODAL_CREATE_POST(state) {
			state.isOpenModalCreatPost = !state.isOpenModalCreatPost
		},
		SAVE_USER(state, data) {
			state.isAuthenticated = true
			state.user = data.user
			state.token = data.accessToken

			localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, data.accessToken)
		},
		RESET_USER(state) {
			state.isAuthenticated = false
			state.user = null
			state.token = undefined
			this.state.posts.posts = null
			this.state.users.users = null
			
			// remove token into local
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
		},
	},
}

export default app
