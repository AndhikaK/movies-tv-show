
<template>
  <div class="relative">
    <Navbar />
    <SearchBox />
    <router-view></router-view>

  </div>
</template>


<script setup>
import HomeView from "./views/HomeView.vue";
import Navbar from "./components/Navbar.vue";
import SearchBox from "./components/SearchBox.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
