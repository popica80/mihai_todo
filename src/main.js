import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('api_token');
  if(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    axios.get('/user?api_token='+token).then(response => {
      store.commit('auth/SET_USER', response.data);
    })
  }

  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
