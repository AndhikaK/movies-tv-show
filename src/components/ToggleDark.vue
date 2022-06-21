<template>
  <button @click="toggleDarkMode">{{ themeStore.isDark ? "dark" : "light" }}</button>
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
      //   this.isDark = !this.isDark;
      themeStore.toggleDark();
    },
  },
};
</script>

<style>
</style>