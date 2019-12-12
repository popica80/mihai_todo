<template>
  <div class="home">
    <form @submit.prevent="submitTodo()">
      <input type="text" v-model="form.title" class="form-control" />
      <button type="submit" class="btn btn-success">add</button>
    </form>
    <Todos :todos="activeTodos" header="Active Todos" />
    <Todos :todos="completedTodos" header="Completed Todos" />
  </div>
</template>

<script>
import axios from 'axios';
import Todos from '@/components/Todos';

export default {
  name: "home",
  components: {
    Todos
  },
  computed: {
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
  data: () => ({    
    form: {
      title: '',
      errors: []
    },
    todos: [
    ],
  }), 
  methods: {
    submitTodo() {
      axios.post('http://todos.test/api/todos', { ...this.form}).then(response => {
        this.todos.unshift(response.data);
        this.form.title = "";
      }).catch(errors => {
        this.form.errors.push(errors.response.data.errors)
      });       
    }
  },
  mounted() {
  },
  created() {
    axios.get('http://todos.test/api/todos').then(response => {
      this.todos = response.data
    })
  },
};
</script>
