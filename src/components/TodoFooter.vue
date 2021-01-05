<template>
  <div class="todo-footer">
    <p>{{ items }} items left</p>

    <TodoFilter class="hide--mobile" @filter="filter" />

    <button @click="clearTodos">Clear Completed</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import useTodo from "@/composables/useTodo";
import TodoFilter from "./shared/TodoFilter.vue";

export default defineComponent({
  name: "TodoFooter",

  components: { TodoFilter },

  setup() {
    const { todos, filteredTodos, filter, clearTodos } = useTodo();

    const items = computed(() =>
      filteredTodos.value.length > 0
        ? filteredTodos.value.length
        : todos.value.length
    );

    return { items, filter, clearTodos };
  }
});
</script>

<style>
.todo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--todo-bg);
  border-radius: 0 0 1rem 1rem;
  padding: 1.8rem 2rem;
}

.todo-footer p,
.todo-footer button {
  color: hsl(236, 9%, 61%);
}

.todo-footer button:hover {
  color: var(--primary);
}
</style>
