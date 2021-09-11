import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_NAME, API_URL } from '@/constant'

const newPost = {
	state() {
		return {
			formData: new FormData(),
			caption: '',
			location: '',
		}
	},
	actions: {
		setImgPost({ state }, data) {
			state.formData.set('postImg', data)
		},

		async createPost({ commit, state }, data) {
			state.formData.set('caption', data.caption)
			state.formData.set('location', data.location)

			// push on server
			try {
				commit('TOGGLE_MODAL_CREATE_POST')

				const [result] = await Promise.all([
					axios({
						method: 'post',
						url: `${API_URL}/posts`,
						data: state.formData,
						headers: {
							'Content-Type': 'multipart/form-data',
							Authorization:
								'Bearer ' + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME),
						},
					}),
					alert('Bắt đầu đăng bài...'),
				])

				// handle newest post
				const newestPost = result.data.post

				newestPost.comments = []

				// after handle => push on home
				commit('ADD_POST', newestPost)
			} catch (error) {
				alert('Đăng bài không thành công')
			}
		},
	},
	mutations: {
		ADD_POST(state, data) {
			const posts = this.state.posts.posts
			posts.unshift(data)
		},
	},
}

export default newPost
