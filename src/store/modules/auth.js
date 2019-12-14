import axios from "@/plugins/axios"
import router from "@/router";

export default {
    namespaced: true,
    state: {
        form: {
            name: '',
            email: '',
            password: '',
        },
        errors: [],
        user: {},
    },
    getters: {
        logged_in(state) {
            return !!state.user.name;
        }
    },
    actions: {
        submitRegister({commit, state}) {
            axios.post('/auth/register', {...state.form}).then(response => {
                commit('SET_USER', response.data);
                router.push({name: 'home'});
            })
        },
        submitLogin({commit, state}) {
            axios.post('/auth/login', {...state.form}).then(response => {
                commit('SET_USER', response.data);
                router.push({name: 'home'});
            })
        },
        logout({commit}){
            commit('SET_USER', null);
            router.push({name: 'home'})
        }
    },
    mutations: {
        SET_USER(state, user){
            if(user) {
                localStorage.setItem('api_token', user.api_token);
                state.user = user;
            } else {
                localStorage.removeItem('api_token')
                state.user = {}
            }
        }
    }
}