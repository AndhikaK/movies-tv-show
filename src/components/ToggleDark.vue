<template>
  <button @click="toggleDarkMode" class="grid place-items-center">
    <i v-if="!themeStore.isDark" class='bx bxs-sun text-sky-500 text-xl'></i>
    <i v-else class='bx bxs-moon text-sky-500 text-xl'></i>
  </button>
</template>

<script>
import { themeStore } from "../store/themeStore.js";

export default {
  data() {
    return {
      themeStore,
    };
  },
  methods: {
    toggleDarkMode() {
      themeStore.toggleDark();
    },
  },
};
</script>

<style>
</style>