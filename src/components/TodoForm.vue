<template>
  <form class="todo-form" @submit.prevent="addTodo">
    <input
      type="text"
      name="todo"
      id="todo"
      v-model="newTodo"
      autocomplete="off"
      required
      maxlength="30"
      aria-label="Create a new todo"
      placeholder="Create a new todo..."
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTodo from "@/composables/useTodo";

export default defineComponent({
  name: "TodoForm",

  setup() {
    const { newTodo, addTodo } = useTodo();

    return { newTodo, addTodo };
  }
});
</script>

<style>
.todo-form {
  background-color: var(--todo-bg);
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 1.8rem 2rem;
}

.todo-form input {
  width: 100%;
}
</style>
