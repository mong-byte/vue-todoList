<template>
  <div id="app">
    <TitleViewer @add="addTodo" />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo.todo" :todoId="todo.id" @deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import TitleViewer from "./components/TodoInput.vue";
import Todo from "./components/Todo.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(value) {
      if (value) {
        const todoObj = {
          id: uuidv4(),
          todo: value,
        };
        const newTodos = this.todos.concat(todoObj);
        this.todos = newTodos;
      }
    },
    deleteTodo(id) {
      const filterTodos = this.todos.filter((todo) => todo.id !== id);
      this.todos = filterTodos;
    },
  },
  components: {
    TitleViewer,
    Todo,
  },
};
</script>

<style></style>
