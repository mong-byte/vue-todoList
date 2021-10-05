<template>
  <div :class="$style.todo_input__container">
    <form @submit="handleSubmit">
      <input
        type="text"
        :value="inputValue"
        @input="handleInput"
        placeholder="Write your todos"
      />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "todo-input",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    addTodos(value) {
      this.$emit("add", value);
    },
    handleSubmit(event) {
      event.preventDefault();
      this.addTodos(this.inputValue);
      this.inputValue = "";
    },
    handleInput(event) {
      this.inputValue = event.target.value;
    },
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
