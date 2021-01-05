<template>
  <div class="todo-item" :class="todo.complete ? 'todo-item--complete' : null">
    <div class="todo-item__toggler" @click="toggleTodo(todo.id)">
      <div
        class="todo-item__toggler todo-item__toggler--complete"
        v-if="todo.complete"
      >
        <Check />
      </div>

      <div class="todo-item__toggler todo-item__toggler--incomplete" v-else>
        &nbsp;
      </div>
    </div>

    <p class="todo-item__text">{{ todo.text }}</p>

    <button class="todo-item__remove" @click="removeTodo(todo.id)">
      <Cross />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useTodo from "../composables/useTodo";
import Check from "./shared/Check.vue";
import Cross from "./shared/Cross.vue";

export default defineComponent({
  name: "TodoItem",

  components: { Check, Cross },

  props: {
    todo: Object
  },

  setup() {
    const { toggleTodo, removeTodo } = useTodo();

    return { toggleTodo, removeTodo };
  }
});
</script>

<style>
.todo-item {
  padding: 1.8rem 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item--complete {
  text-decoration: line-through;
  color: var(--todo-complete);
}

.todo-item__toggler:hover {
  cursor: pointer;
}

.todo-item:hover .todo-item__remove {
  opacity: 1;
}

.todo-item__text {
  margin-left: 3rem;
  width: 100%;
}

.todo-item__toggler {
  background-image: var(--check-bg);
  border-radius: 5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-item__toggler--complete {
  background-image: var(--check-bg);
  border: 1px solid var(--check-bg);
}

.todo-item__toggler--incomplete {
  border: 1px solid #ccc;
  background: #fff;
}

.todo-item__toggler--incomplete:hover {
  border: 1px solid var(--check-bg);
}

.todo-item__remove {
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
