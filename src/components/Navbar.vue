<template>
  <nav :class="isDetail()">
    <div class="flex gap-12">
      <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14 md:w-14 lg:w-24">
      <div class="hidden md:flex gap-5">
        <router-link :to="{name: 'home'}">
          <span class="font-bold">Home</span>
        </router-link>
        <router-link :to="{name: 'movies'}">
          <span class="font-bold">Movies</span>
        </router-link>
        <router-link :to="{name: 'tv-shows'}">
          <span class="font-bold">TV Shows </span>
        </router-link>
      </div>
    </div>
    <div class="flex gap-3">
      <i @click="store.toggleSearch()" class='bx bx-search-alt-2 text-3xl hover:text-slate-200'></i>
      <i @click="store.toggleWatchList()" class='bx bxs-bookmarks text-3xl hover:text-slate-200'></i>
      <i class='bx bx-dots-vertical-rounded md:hidden text-3xl'></i>
    </div>
  </nav>
</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    isDetail() {
      let classes =
        "w-full py-5 px-5 md:px-12 flex justify-between items-center z-0 ";

      if (this.$route.params.id) {
        classes += "fixed";
      } else {
        classes += "sticky top-0 backdrop-blur bg-slate-900/70";
      }

      return classes;
    },
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: red;
}
</style>