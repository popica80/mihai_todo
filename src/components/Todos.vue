<template>
  <div class="card">
    <h5 class="card-header"><slot></slot></h5>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <input type="checkbox" v-model="todo.completed" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ['todos', 'header'],
  data: () => ({
    form: {
      title: ''
    },
  }),
    
};
</script>

<style scoped>
</style>