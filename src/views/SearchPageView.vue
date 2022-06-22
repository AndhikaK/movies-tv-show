<template>
  <div class="mt-5">
    <!-- Header -->
    <div class="pb-5 flex justify-between">
      <div class="pl-3 md:text-xl font-bold border-l-4 border-l-red-500">Search results for "{{this.$route.query.q}}"</div>
    </div>
    <!-- CONTENT -->
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <div v-if="!movies.length > 0">
        Search not found
      </div>
      <MovieItem v-else v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiStore } from "../store/apiStore.js";
import { searchStore } from "../store/searchStore.js";
import MovieItem from "../components/MovieItem.vue";

export default {
  components: { MovieItem },
  data() {
    return {
      searchStore,
      q: this.$route.query.q,
      apiKey: apiStore.apiKey,
      movies: [],
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.query,
      () => {
        this.fetchSearchResult();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    fetchSearchResult() {
      if (this.$route.query.q !== "") {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.$route.query.q}`;

        axios.get(url).then((response) => {
          this.movies = response.data.results;
        });
      }
    },
  },
};
</script>

<style>
</style>