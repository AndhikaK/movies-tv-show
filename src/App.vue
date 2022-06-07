
<template>
  <div class="relative ">
    <Navbar />
    <SearchBox />
    <WatchList />
    <ModalMenu />
    <router-view></router-view>
    <Footer />

  </div>
</template>


<script setup>
import HomeView from "./views/HomeView.vue";
import Navbar from "./components/Navbar.vue";
import SearchBox from "./components/SearchBox.vue";
import ModalMenu from "./components/ModalMenu.vue";
import WatchList from "./components/WatchList.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
