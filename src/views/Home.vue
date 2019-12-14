<template>
  <div class="home">
    <template v-if="logged_in">
      welcome {{ user.name }}
    <form @submit.prevent="submitTodo()" @keydown.enter.self="submitTodo()" class="d-flex mb-3">
      <input type="text" v-model="form.title" class="form-control mr-2" autofocus />
      <button type="submit" class="btn btn-success">add</button>
    </form>
    <todos :todos="activeTodos">Active Todos</todos>
    <todos :todos="completedTodos">Completed Todos</todos>
    </template>
    <template v-else>
      <div class="card">
        <div class="card-body">you must <router-link :to="{name: 'login'}">log in</router-link></div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import Todos from '@/components/Todos';
import { mapGetters, mapState } from 'vuex';

export default {
  name: "home",
  components: {
    Todos
  },
  data: () => ({    
    form: {
      title: '',
      errors: [],
    },
    todos: [
    ],
  }),
  computed: { 
    ...mapGetters('auth', ['logged_in']),
    ...mapState('auth', ['user']),
    completedTodos() {
      return this.todos.filter(todo => {
        return todo.completed;
      });
    },
    activeTodos() {
      return this.todos.filter(todo => {
        return !todo.completed;
      });
    }
  }, 
  methods: {
    submitTodo() {
      axios.post('/todos', { ...this.form}).then(response => {
        this.todos.unshift(response.data);
        this.form.title = "";
      }).catch(errors => {
        this.form.errors.push(errors.response.data.errors)
      });       
    }
  },
  created() {
    axios.get('/todos').then(response => {
      this.todos = response.data
    })
  },
};
</script>
