import { API_URL } from '@/constant'
import axios from 'axios'

const posts = {
	state() {
		return {
			posts: null,
		}
	},
	getters: {
		posts: (state) => state.posts,
	},
	actions: {
		async getAllPosts({ commit }) {
			try {
				const result = await axios.get(`${API_URL}/posts`)

				commit('SET_POSTS', result.data.posts)
			} catch (error) {
				console.log(error)
			}
		},
	},
	mutations: {
		SET_POSTS(state, posts) {
			// reverse because new post will see first
			posts.reverse()
			let [post1] = posts
			posts.splice(0, 1)

			posts = posts.sort(() => Math.random() - 0.5)

			posts.unshift(post1)

			state.posts = posts
		},
	},
}

export default posts
