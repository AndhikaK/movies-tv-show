<template>
  <div class="p-5 md:px-12">
    <div class="pl-3 md:pl-5 text-lg font-semibold border-l-2 md:border-l-4 border-l-red-500">TRENDING</div>
    <div v-if="movies.length === 0" class="">
      There is no movie
    </div>
    <div class="mt-7 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      <!-- <div class="bg-red-500">dfaf</div> -->
      <MovieCard v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      apiKey: store.apiKey,
      movies: [],
    };
  },
  components: { MovieCard },
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