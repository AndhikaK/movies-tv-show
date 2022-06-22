<template>
  <div class="mt-5 py-2 lg:py-5 px-5 md:px-12">
    <!-- Header -->
    <div class="pb-5 flex justify-between">
      <div class="pl-3 md:text-xl font-bold border-l-4 border-l-red-500">Popular Movies</div>
    </div>
    <!-- CONTENT -->
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <TvItem v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiStore } from "../store/apiStore.js";
import TvItem from "../components/TvItem.vue";

export default {
  components: { TvItem },
  data() {
    return {
      apiKey: apiStore.apiKey,
      movies: [],
    };
  },
  mounted() {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=" + this.apiKey;

    axios.get(url).then((response) => {
      this.movies = response.data.results;
    });
  },
};
</script>

<style>
</style>