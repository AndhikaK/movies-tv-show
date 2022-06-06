<template>
  <nav class="static w-full py-3 px-3 flex justify-between items-center backdrop-blur-md text-slate-900 z-0">
    <div>
      <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14">
    </div>
    <div>
      <i @click="store.toggleSearch()" class='bx bx-search-alt-2 text-lg'></i>
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
};
</script>

<style>
</style>