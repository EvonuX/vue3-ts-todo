<template>
  <div class="filter">
    <button @click="filter('all')">All</button>
    <button @click="filter('active')">Active</button>
    <button @click="filter('completed')">Completed</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTodo from "../../composables/useTodo";

export default defineComponent({
  name: "TodoFilter",

  setup() {
    const { filter } = useTodo();

    return { filter };
  }
});
</script>

<style>
.filter {
  background-color: var(--todo-bg);
  text-align: center;
  border-radius: 1rem;
}

@media screen and (max-width: 480px) {
  .filter {
    padding: 1.8rem 2rem;
    margin-top: 2rem;
    box-shadow: var(--box-shadow);
  }
}

.filter button {
  margin: 0 10px;
}
</style>
