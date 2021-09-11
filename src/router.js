import { createWebHistory, createRouter } from 'vue-router'
const Login = () => import('@/components/Auth/Login')
const Register = () => import('@/components/Auth/Register')
const Home = () => import('@/components/Home/Home')
const NotFound = () => import('@/components/NotFound/NotFound')
const DetailPost = () => import('@/components/DetailPost/DetailPost')
const ProfileUser = () => import('@/components/ProfileUser/ProfileUser')
const PostsOfUser = () => import('@/components/ProfileUser/PostsOfUser')
const SavedPosts = () => import('@/components/ProfileUser/SavedPosts')
import store from '@/store'
import { LOCAL_STORAGE_TOKEN_NAME } from '@/constant'

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
	{
		path: '/p/:id',
		name: 'detailPost',
		component: DetailPost,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/users/:id',
		name: 'profileUser',
		component: ProfileUser,
		meta: {
			requiresAuth: true,
		},
		redirect: { name: 'postsOfUser' },
		children: [
			{
				path: 'saved',
				component: SavedPosts,
				name: 'savedPosts',
				
			},
			{
				path: '',
				component: PostsOfUser,
				name: 'postsOfUser',
			},
		],
	},
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/:pathMatch(.*)',
		name: 'notFound',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(async (to, from, next) => {
	// check user already logged before
	if (store.getters.user == null) {
		await store.dispatch('checkUser')
	}
	if (store.getters.posts == null && store.getters.isAuthenticated) {
		await Promise.all([
			store.dispatch('getAllPosts'),
			store.dispatch('getAllUsers'),
		])
	}

	// go to page is not login or register
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// check authenticated
		if (
			!localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME) &&
			!store.getters.isAuthenticated
		)
			return next('/login')
	} else {
		// when people logged, we prevent them to go to login/register page
		if (
			store.getters.isAuthenticated &&
			(to.fullPath == '/login' || to.fullPath == '/register')
		)
			router.push('/')
	}

	next()
})

export default router
