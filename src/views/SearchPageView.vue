<template>
  <div class="p-5 md:px-12">
    <div class="pl-3 md:pl-5 text-lg font-semibold border-l-2 md:border-l-4 border-l-red-500">Search result for '{{ store.search.query }}'</div>
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
      store,
      apiKey: store.apiKey,
      query: store.search.query,
      movies: [],
    };
  },
  components: { MovieCard },
  computed: {
    queryUpdate() {
      return store.search.query;
    },
  },
  watch: {
    queryUpdate(newQuery, oldQuery) {
      console.log(newQuery, oldQuery);
      this.updateMovie(newQuery);
    },
  },
  mounted() {
    if (!this.store.search.query === "") {
      // const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${this.store.search.query}`;
      // axios.get(url).then((response) => {
      //   console.log(response.data);
      //   this.movies = response.data.results;
      // });
      this.updateMovie(this.store.search.query);
    }
  },
  methods: {
    updateMovie(query) {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${query}`;
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