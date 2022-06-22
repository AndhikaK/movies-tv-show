<template>
  <div class="mt-5">
    <!-- Header -->
    <div class="pb-5 flex justify-between">
      <div class="pl-3 md:text-xl font-bold border-l-4 border-l-red-500">Popular Movies</div>
    </div>
    <!-- CONTENT -->
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <MovieItem v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiStore } from "../store/apiStore.js";
import MovieItem from "../components/MovieItem.vue";

export default {
  components: { MovieItem },
  data() {
    return {
      apiKey: apiStore.apiKey,
      movies: [],
    };
  },
  mounted() {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey;

    axios.get(url).then((response) => {
      console.log(response.data);
      this.movies = response.data.results;
    });
  },
};
</script>

<style>
</style>