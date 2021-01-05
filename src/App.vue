<template>
  <TodoHeader />

  <div class="todo">
    <TodoForm />

    <div class="box-shadow" v-if="hasTodos">
      <TodoList />
      <TodoFooter />
    </div>

    <TodoFilter class="hide--desktop" v-if="hasTodos" />

    <div class="todo-info" v-if="hasTodos">
      <p>Drag and drop to reorder list 📃</p>
    </div>

    <div v-else class="todo__empty">
      <p>Create a new todo to manage the list ✨</p>

      <EmptyState />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import TodoHeader from "@/components/TodoHeader.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import TodoFilter from "@/components/shared/TodoFilter.vue";
import EmptyState from "./components/shared/EmptyState.vue";
import useTodo from "@/composables/useTodo";

export default defineComponent({
  name: "App",

  components: {
    TodoHeader,
    TodoForm,
    TodoList,
    TodoFooter,
    TodoFilter,
    EmptyState
  },

  setup() {
    const { todos, filteredTodos } = useTodo();

    const hasTodos = computed(
      () => todos.value.length || filteredTodos.value.length
    );

    return { hasTodos };
  }
});
</script>

<style>
.todo {
  max-width: 63rem;
  padding: 0 3rem;
  width: 100%;
  margin: -10rem auto 0;
}

.todo__empty {
  text-align: center;
  margin-top: 10rem;
}

.todo__empty p {
  display: block;
  margin-bottom: 5rem;
}

.todo-info {
  text-align: center;
  margin-top: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
}
</style>
