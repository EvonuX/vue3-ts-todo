<template>
  <header class="header">
    <div class="header__main">
      <h1>TODO</h1>

      <button @click="toggleTheme">
        <Moon v-if="isLightTheme" />
        <Sun v-else />
      </button>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import Moon from "./shared/Moon.vue";
import Sun from "./shared/Sun.vue";
import useTheme from "../composables/useTheme";

export default defineComponent({
  name: "TodoHeader",

  components: { Moon, Sun },

  setup() {
    const { isLightTheme, toggleTheme } = useTheme();

    return { isLightTheme, toggleTheme };
  }
});
</script>

<style>
.header {
  background: var(--img) center center no-repeat;
  background-size: cover;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 480px) {
  .header {
    height: 25rem;
  }
}

.header__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 63rem;
  padding: 0 3rem;
  width: 100%;
  margin: -8rem auto 0;
}

.header__main h1 {
  letter-spacing: 2rem;
  color: #fff;
}
</style>
