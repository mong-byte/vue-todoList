<template>
  <div :class="$style.todo_container">
    <div :class="$style.todo_contents_wrapper" v-if="!editMode">
      <span :class="$style.todo_contents">{{ todo }}</span>
    </div>
    <input
      :class="$style.edit_input"
      v-if="editMode"
      type="text"
      @input="editInput"
    />
    <div :class="$style.todo_button_box" v-if="!editMode">
      <button @click="toggleEdit">edit</button>
      <button @click="handleDelete">done</button>
    </div>
    <div :class="$style.todo_button_box" v-if="editMode">
      <button @click="saveEdit">save</button>
      <button @click="toggleEdit">exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      editMode: false,
      editedValue: "",
    };
  },
  props: {
    todo: String,
    todoId: String,
  },
  methods: {
    handleDelete() {
      this.$emit("deleteTodo", this.todoId);
    },
    toggleEdit() {
      this.editMode = !this.editMode;
    },
    editInput(event) {
      this.editedValue = event.target.value;
    },
    saveEdit() {
      this.$emit("editTodo", this.todoId, this.editedValue);
      this.toggleEdit();
    },
  },
};
</script>

<style lang="scss" module>
.todo_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $default-padding;
  border: 1px solid $light-gray-border;
  border-radius: $main-radius;
}

.todo_contents_wrapper {
  margin: 6px 0px;
}

.todo_contents {
  font-size: 25px;
  color: $main-blue;
}

.edit_input {
  width: 80%;
  @include input-style;
}

.todo_button_box {
  button {
    all: unset;
    padding: 8px;
    background-color: $main-blue;
    color: $white;
    border-radius: $main-radius;
    cursor: pointer;

    &:last-child {
      margin-left: 5px;
    }
  }
}
</style>
