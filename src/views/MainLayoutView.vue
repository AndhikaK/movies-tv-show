<template>
  <div :class="{dark : themeStore.isDark}" class="">
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen bg-whie dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <!-- NAVS -->
      <Navbar />
      <!-- MAIN CONTENT -->
      <div class="">
        main
      </div>
      <!-- FOOTER -->
      <div>
        footer
      </div>
    </div>
  </div>
</template>

<script>
import { themeStore } from "../store/themeStore.js";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      //   isDark: localStorage.getItem("darkMode"),
      themeStore,
    };
  },
};
</script>

<style>
</style>