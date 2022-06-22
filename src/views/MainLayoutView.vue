<template>
  <div :class="{dark : themeStore.isDark}" class="">
    <div class="relative grid grid-rows-[auto_1fr_auto] min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <!-- NAVS -->
      <Navbar />
      <!-- MAIN CONTENT -->
      <div class="">
        <router-view></router-view>
      </div>

      <!-- FOOTER -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { themeStore } from "../store/themeStore.js";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, Footer },
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