import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '@/constant'
import axios from 'axios'

const deletePost = {
	actions: {
		async deleteAction({ commit }, id) {
			try {
				commit('DELETE_POST', { id })

				await Promise.all([
					axios({
						method: 'delete',
						url: `${API_URL}/posts/${id}`,
						headers: {
							Authorization:
								'Bearer ' + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME),
						},
					}),
					alert('Bắt đầu xóa bài viết'),
				])

				alert('Xóa bài viết thành công')
			} catch (error) {
				alert('Xóa bài viết thất bại')
			}
		},
	},
	mutations: {
		DELETE_POST(state, data) {
			const id = data.id

			this.state.posts.posts = this.state.posts.posts.filter((post) => {
				return post._id != id
			})
		},
	},
}

export default deletePost
