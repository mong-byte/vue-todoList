<template>
  <div :id="$style.todo_page">
    <TodoInput @add="addTodo" />
    <div :class="$style.todo_list_wrapper">
      <ul :class="$style.todo_list" v-if="todos.length">
        <li v-for="todo in todos" :key="todo.id">
          <Todo
            :content="todo.content"
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
import { computed } from "@vue/reactivity";
import TodoInput from "./components/TodoInput.vue";
import Todo from "./components/Todo.vue";
import NoItem from "./components/NoItem.vue";
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos).value;

    const addTodo = (value) => {
      if (value) {
        store.commit("addTodos", value);
      }
    };

    const deleteTodo = (id) => {
      store.commit("deleteTodos", id);
    };

    const editTodo = (id, value) => {
      store.commit("editTodos", { id, value });
    };

    return { todos, addTodo, deleteTodo, editTodo };
  },
  components: {
    TodoInput,
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
