import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_NAME, API_URL } from '@/constant'

const comments = {
	state(){ 
		return {
			newComment: null
		}
	},
	getters: {
		newComment: state => state.newComment
	},
	actions: {
		async postComment({ commit }, data) {
			try {
				const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)

				const result = await axios({
					method: 'post',
					url: `${API_URL}/comments/${data.id}/add`,
					data: { content: data.newComment },
					headers: {
						Authorization: 'Bearer ' + accessToken,
					},
				})

				commit('POST_COMMENT', { newComment: result.data.comment, id: data.id })
				commit('SAVE_NEW_COMMENT', { newComment: result.data.comment})
			} catch (err) {
				console.log(err)
			}
		},
	},
	mutations: {
		POST_COMMENT(state, data) {
			const id = data.id
			const posts = this.state.posts.posts

			for(let post of posts){
				if (post._id == id) {
					post.comments.push(data.newComment)
					return
				}
			}
		},
		SAVE_NEW_COMMENT(state, data) {
			state.newComment = data.newComment
		}
	},
}

export default comments
