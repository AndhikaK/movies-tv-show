<template>
  <div class="p-5 md:px-12">
    <div class="pl-3 md:pl-5 text-lg font-semibold border-l-2 md:border-l-4 border-l-red-500">POPULAR TV SHOWS</div>
    <div v-if="movies.length === 0">
      <EmptyResult />
    </div>
    <div class="mt-7 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      <!-- <div class="bg-red-500">dfaf</div> -->
      <TvCard v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import TvCard from "../components/TvCard.vue";
import EmptyResult from "../components/EmptyResult.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      apiKey: store.apiKey,
      movies: [],
    };
  },
  components: { TvCard, EmptyResult },
  mounted() {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=" + this.apiKey;
    axios.get(url).then((response) => {
      console.log(response.data);
      this.movies = response.data.results;
    });
  },
};
</script>

<style>
</style>