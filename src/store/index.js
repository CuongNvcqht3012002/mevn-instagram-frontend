import { createStore } from 'vuex'
import app from './app/index'
import newPost from './newPost/index'
import registerUser from './registerUser/index'
import loginUser from './loginUser/index'
import posts from './posts/index'
import users from './users/index'
import comment from './actions/comment'
import follow from './actions/follow'
import like from './actions/like'
import deletePost from './actions/deletePost'

const store = createStore({
	modules: {
		app,
		newPost,
		registerUser,
		loginUser,
		posts,
		users,
		comment,
		like,
		follow,
		deletePost
	},
})

export default store
