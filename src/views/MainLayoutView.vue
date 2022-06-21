<template>
  <div :class="{dark : themeStore.isDark}" class="grid grid-rows-[auto_1fr_auto] min-h-screen">
    <!-- NAVS -->
    <Navbar />
    <!-- MAIN CONTENT -->
    <div class="">
      main
      {{ isDark }}
    </div>
    <!-- FOOTER -->
    <div>
      footer
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