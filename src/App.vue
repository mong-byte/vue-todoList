<template>
  <div :id="$style.todo_page">
    <TitleViewer @add="addTodo" />
    <div :class="$style.todo_list_wrapper">
      <ul :class="$style.todo_list" v-if="todos.length">
        <li v-for="todo in todos" :key="todo.id">
          <Todo
            :todo="todo.todo"
            :todoId="todo.id"
            @deleteTodo="deleteTodo"
            @editTodo="editTodo"
          />
        </li>
      </ul>
      <NoItem v-if="!todos.length" />
    </div>
  </div>
</template>

<script>
import TitleViewer from "./components/TodoInput.vue";
import Todo from "./components/Todo.vue";
import NoItem from "./components/NoItem.vue";
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
    editTodo(id, value) {
      const editedTodos = this.todos.map((todo) => {
        return todo.id !== id
          ? todo
          : {
              ...todo,
              todo: value,
            };
      });
      this.todos = editedTodos;
    },
  },
  components: {
    TitleViewer,
    Todo,
    NoItem,
  },
};
</script>

<style lang="scss" module>
#todo_page {
  max-width: $web-view-port;
  margin: 0 auto;
  padding-top: $default-padding;
}

.todo_list_wrapper {
  margin-top: $default-padding;
  @include border-background;
}

.todo_list {
  li {
    margin-bottom: $default-padding;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
