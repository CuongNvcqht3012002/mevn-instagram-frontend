import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '@/constant'
import axios from 'axios'

const like = {
	actions: {
		async likePost({ commit }, id) {
			try {
				commit('LIKE_POST', { id })

				await axios({
					method: 'put',
					url: `${API_URL}/like/${id}`,
					headers: {
						Authorization:
							'Bearer ' + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME),
					},
				})
			} catch (error) {
				console.log(error)
			}
		},
	},
	mutations: {
		LIKE_POST(state, data) {
			const posts = this.state.posts.posts
			const id = data.id

			for (let post of posts) {
				if (post._id == id) {
					if (post.likes.indexOf(this.state.app.user._id) > -1) {
						post.likes = post.likes.filter(
							(id) => id != this.state.app.user._id
						)
					} else {
						post.likes.push(this.state.app.user._id)
					}
					break
				}
			}
		},
	},
}

export default like
