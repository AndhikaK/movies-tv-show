<template>
  <div v-if="store.smMenu" class="fixed top-0 bottom-0 h-screen w-screen backdrop-blur-md z-50 grid justify-items-center">
    <div class="p-5 search-box bg-slate-800 rounded-xl place-self-center">
      <div class="font-bold text-lg mb-4">Menu</div>
      <div class="grid">
        <router-link :to="{name: 'home'}" @click="store.smMenu = false">Home</router-link>
        <router-link :to="{name: 'movies'}" @click="store.smMenu = false">Movies</router-link>
        <router-link :to="{name: 'tv-shows'}" @click="store.smMenu = false">Tv Shows</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import router from "../router";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>


<style lang="scss">
</style>