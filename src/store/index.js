import { v4 as uuidv4 } from "uuid";
import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  state: {
    todos: [],
  },

  mutations: {
    addTodos(state, payload) {
      return state.todos.push({ id: uuidv4(), content: payload });
    },
    deleteTodos(state, payload) {
      return (state.todos = state.todos.filter((todo) => todo.id !== payload));
    },
    editTodos(state, payload) {
      return (state.todos = state.todos.map((todo) =>
        todo.id !== payload.id ? todo : { ...todo, content: payload.value }
      ));
    },
  },
});
