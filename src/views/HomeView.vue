<template>
  <div class="">

    <!-- MOVIES -->
    <div>
      <!-- Header -->
      <div class="pb-5 flex justify-between">
        <div class="pl-3 md:text-xl font-bold border-l-4 border-l-red-500">Popular Movies</div>
        <router-link :to="{name: 'movies'}">
          <div class="hover:text-red-500">See all</div>
        </router-link>
      </div>
      <!-- CONTENT -->
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <MovieItem v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
      </div>
    </div>

    <!-- TV SHOWS -->
    <div class="mt-5">
      <!-- Header -->
      <div class="pb-5 flex justify-between">
        <div class="pl-3 md:text-xl font-bold border-l-4 border-l-red-500">Popular Movies</div>
        <router-link :to="{name: 'tv-shows'}">
          <div class="hover:text-red-500">See all</div>
        </router-link>
      </div>
      <!-- CONTENT -->
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <TvItem v-for="movie in tvShows" v-bind:key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiStore } from "../store/apiStore.js";
import MovieItem from "../components/MovieItem.vue";
import TvItem from "../components/TvItem.vue";

export default {
  components: { MovieItem, TvItem },
  data() {
    return {
      apiKey: apiStore.apiKey,
      movies: [],
      tvShows: [],
    };
  },
  mounted() {
    const moviesUrl =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey;
    const tvsUrl =
      "https://api.themoviedb.org/3/tv/popular?api_key=" + this.apiKey;

    axios.get(moviesUrl).then((response) => {
      this.movies = response.data.results;
    });

    axios.get(tvsUrl).then((response) => {
      this.tvShows = response.data.results;
    });
  },
};
</script>

<style>
</style>