<template>
  <div>
    <span>{{ todo }}</span>
    <button @click="handleDelete">x</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: String,
    todoId: String,
  },
  methods: {
    handleDelete() {
      this.$emit("deleteTodo", this.todoId);
    },
  },
};
</script>

<style></style>
