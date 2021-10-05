<template>
  <div>
    <form @submit="handleSubmit">
      <input type="text" :value="inputValue" @input="handleInput" />
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

<style scoped>
div {
  padding: 20px;
}

div span {
  margin: 20px;
}
</style>
