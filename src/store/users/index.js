import { API_URL } from '@/constant'
import axios from 'axios'

const users = {
    state(){
        return {
            users: []
        }
    },
    getters: {
        users: state => state.users
    },
    actions: {
        async getAllUsers({commit}){
            try {
                const result = await axios.get(`${API_URL}/users`)

				commit('SET_USERS', result.data.users)
            } catch (error) {
                console.log(error)
            }   
        }
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users
        }
    }
}

export default users