<template>
  <div class="p-5 md:px-12">
    <div v-if="movies.length === 0">
      <div v-if="!store.search.query === ''">
        <div class="pl-3 md:pl-5 text-lg font-semibold border-l-2 md:border-l-4 border-l-red-500">Search result for '{{ store.search.query }}'</div>
      </div>
      <div v-if="store.search.query === ''">
        <div class="pl-3 md:pl-5 text-lg font-semibold border-l-2 md:border-l-4 border-l-red-500">Search result</div>
      </div>
      <EmptyResult />
    </div>
    <div class="mt-7 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      <!-- <div class="bg-red-500">dfaf</div> -->
      <MovieCard v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import EmptyResult from "../components/EmptyResult.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      apiKey: store.apiKey,
      query: store.search.query,
      movies: [],
    };
  },
  components: { EmptyResult, MovieCard },
  computed: {
    queryUpdate() {
      return store.search.query;
    },
  },
  watch: {
    queryUpdate(newQuery, oldQuery) {
      this.updateMovie(newQuery);
    },
  },
  mounted() {
    // if (!this.store.search.query === "") {
    this.updateMovie(this.store.search.query);
    // }
  },
  methods: {
    updateMovie(query) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
      axios.get(url).then((response) => {
        // console.log(response.data);
        this.movies = response.data.results;
      });
    },
  },
};
</script>

<style>
</style>