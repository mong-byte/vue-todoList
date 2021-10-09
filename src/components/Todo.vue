<template>
  <div :class="$style.todo_container">
    <div :class="$style.todo_contents_wrapper" v-if="!state.editMode">
      <span :class="$style.todo_contents">{{ props.content }}</span>
    </div>
    <input
      :class="$style.edit_input"
      v-if="state.editMode"
      :value="state.editedValue"
      type="text"
      @input="editInput"
    />
    <div :class="$style.todo_button_box" v-if="!state.editMode">
      <button @click="toggleEdit">edit</button>
      <button @click="handleDelete">done</button>
    </div>
    <div :class="$style.todo_button_box" v-if="state.editMode">
      <button @click="saveEdit">save</button>
      <button @click="toggleEdit">exit</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Todo",
  props: {
    content: String,
    todoId: String,
  },
  setup(props, { emit }) {
    const state = reactive({
      editMode: false,
      editedValue: "",
    });

    const handleDelete = () => {
      emit("deleteTodo", props.todoId);
    };
    const toggleEdit = () => {
      state.editMode = !state.editMode;
    };

    const editInput = (event) => {
      state.editedValue = event.target.value;
    };

    const saveEdit = () => {
      emit("editTodo", props.todoId, state.editedValue);
      toggleEdit();
    };

    return { props, handleDelete, toggleEdit, editInput, saveEdit, state };
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
