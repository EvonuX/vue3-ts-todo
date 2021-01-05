<template>
  <div class="todo-list" v-if="filteredTodos.length">
    <TodoItem
      v-for="(todo, i) in filteredTodos"
      :key="todo.id"
      :todo="todo"
      draggable="true"
      @dragstart="dragStart(i)"
      @dragover.prevent
      @dragend="dragEnd"
      @drop="dragFinish(i)"
    />
  </div>

  <div class="todo-list" v-else>
    <TodoItem
      v-for="(todo, i) in todos"
      :key="todo.id"
      :todo="todo"
      draggable="true"
      @dragstart="dragStart(i)"
      @dragover.prevent
      @dragend="dragEnd"
      @drop="dragFinish(i)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useTodo from "@/composables/useTodo";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",

  components: { TodoItem },

  setup() {
    const { todos, filteredTodos, updateStorage } = useTodo();

    const dragging = ref(-1);

    function dragStart(i: number) {
      dragging.value = i;
    }

    function dragEnd() {
      dragging.value = -1;
    }

    function dragFinish(to: number) {
      todos.value.splice(to, 0, todos.value.splice(dragging.value, 1)[0]);
      updateStorage();
    }

    return {
      todos,
      filteredTodos,
      dragStart,
      dragEnd,
      dragFinish
    };
  }
});
</script>

<style>
.todo-list {
  background-color: var(--todo-bg);
  border-radius: 1rem 1rem 0 0;
}
</style>
