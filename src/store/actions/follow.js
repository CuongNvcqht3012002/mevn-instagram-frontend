import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '@/constant'
import axios from 'axios'

// sau này sẽ cần tối ưu
const follow = {
	actions: {
		async followUser({ commit }, id) {
			try {
				const result = await axios({
					method: 'put',
					url: `${API_URL}/follow/${id}`,
					headers: {
						Authorization:
							'Bearer ' + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME),
					},
				})

				commit('FOLLOW_USER', { id, follow: result.data.follow })
			} catch (error) {
				console.log(error)
			}
		},
	},
	mutations: {
		FOLLOW_USER(state, data) {
			const users = this.state.users.users
			const id = data.id
			const adminUser = users.filter(
				(user) => user._id == this.state.app.user._id
			)[0]

			// handle the action
			users.forEach((user) => {
				if (user._id == id) {
					// true => admin followed the user => change data
					if (data.follow) {
						user.follower.push(adminUser._id)
						adminUser.following.push(id)
					} else {
						user.follower = user.follower.filter(
							(item) => item != adminUser._id
						)

						adminUser.following = adminUser.following.filter(
							(item) => item != id
						)
					}
				}
			})
		},
	},
}

export default follow
