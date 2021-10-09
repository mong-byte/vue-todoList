<template>
  <div :class="$style.todo_input__container">
    <form @submit="handleSubmit">
      <input
        type="text"
        :value="state.inputValue"
        @input="handleInput"
        placeholder="Write your todos"
      />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "todo-input",
  setup(props, { emit }) {
    const state = reactive({
      inputValue: "",
    });

    const addTodos = (value) => {
      emit("add", value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      addTodos(state.inputValue);
      state.inputValue = "";
    };

    const handleInput = (event) => {
      state.inputValue = event.target.value;
    };

    return { state, addTodos, handleSubmit, handleInput };
  },
};
</script>

<style lang="scss" module>
.todo_input__container {
  display: flex;
  align-items: center;
  width: 100%;
  @include border-background;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    input {
      width: 80%;
      @include input-style;
    }

    button {
      all: unset;
      width: 10%;
      margin-right: 5px;
      padding: 8px;
      background-color: $main-blue;
      border-radius: $main-radius;
      color: $white;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
