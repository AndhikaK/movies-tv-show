<template>
  <div class="portrait:hidden relative md:h-screen w-screen mt-[15%] md:mt-0 bg-cover bg-center" v-bind:style="{'background-image': 'url(' + getImgPath( movie.backdrop_path) + ')'}">
    <div class="px-3 md:px-[10%] h-full w-full bg-slate-900/80 grid grid-cols-[auto_1fr] items-center gap-10">
      <img :src="getImgPath(movie.poster_path)" alt="" class="w-[75px] md:w-[175px] lg:w-[225px] object-cover rounded-xl">
      <div class="text-white text-left justify-self-stretch">
        <div class="text-lg font-bold">{{ movie.name }}</div>
        <div class="text-xs mt-2 text-slate-100">{{ movie.tagline }}</div>
        <div class="flex gap-12 mt-5">
          <div>
            {{ formatDate(movie.release_date) }}
          </div>
          <div>
            {{ `${movie.episode_run_time} min per episode` }}
          </div>
        </div>
        <div class="mt-5 mr-10 hidden lg:block">
          {{ movie.overview }}
        </div>
        <div class="mt-5 flex gap-5 items-center">
          <span class="md:text-2xl p-3 bg-slate-800/80 rounded-lg font-bold text-green-500">{{movie.vote_average}}</span>
          {{ movie.vote_count }} votes
          <div>
            <button v-if="!favoriteStore.isFavouriteExits(movie, 'tv')" @click="addFavorite('tv')" class="p-2 rounded-md bg-red-500 hover:bg-red-700 text-white">Add to watchlist </button>
            <button v-if="favoriteStore.isFavouriteExits(movie, 'tv')" @click="removeFavorite('tv')" class="p-2 rounded-md bg-red-800 hover:bg-red-500 text-white">Already in favorited </button>
          </div>
        </div>
        <div class="hidden lg:block mt-8">
          Genre:
          <span class="ml-2" v-for="genre in movie.genres" v-bind:key="genre">{{genre.name}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="landscape:hidden relative bg-center bg-cover" v-bind:style="{'background-image': 'url(' + getImgPath( movie.backdrop_path) + ')'}">
    <div class="p-3 mt-[15%] grid grid-cols-[auto_1fr] gap-3  bg-slate-900/80 text-white">
      <img :src="getImgPath(movie.poster_path)" alt="" class="w-[75px] md:w-[175px] lg:w-[225px] object-cover rounded-md">
      <div class="text-left text-xs">
        <div class="text-xl font-bold">{{ movie.name }}</div>
        <div class="text-xs text-slate-400">{{ movie.tagline }}</div>
        <div class="flex gap-4 mt-1">
          <div>
            {{ formatDate(movie.release_date) }}
          </div>
          <div>
            {{ `${movie.episode_run_time} min` }}
          </div>
        </div>
        <div class="mt-3">
          Genre:
          <span class="ml-2" v-for="genre in movie.genres" v-bind:key="genre">{{genre.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dateformat from "dateformat";
import { apiStore } from "../store/apiStore";
import { favoriteStore } from "../store/favoriteStore.js";

export default {
  data() {
    return {
      favoriteStore,
      apiKey: apiStore.apiKey,
      imgPath: apiStore.imgPath,
      movie: {},
      error: false,
      isFavorited: null,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchMovieData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    fetchMovieData() {
      const url = `https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=${this.apiKey}`;

      axios
        .get(url)
        .then((response) => {
          this.error = false;
          console.log(response.data);
          this.movie = response.data;
        })
        .catch((err) => {
          this.error = true;
        });
    },
    getImgPath(img) {
      return this.imgPath + img;
    },
    formatDate(releaseDate) {
      return dateformat(releaseDate, "mmmm d, yyyy");
    },
    getDuration(duration) {
      const hour = duration / 60;
      const minute = duration % 60;
      return `${Math.round(hour)} hr ${minute} min`;
    },
    addFavorite(type) {
      this.favoriteStore.addNewFavorite(this.movie, type);
    },
    removeFavorite(type) {
      this.favoriteStore.removeFavorite(this.movie.id, type);
    },
    isShowsExist() {
      let check = this.favoriteStore.isFavouriteExits(this.movie, "tv");
      console.log(check);
      this.isFavorited = check ? true : false;
    },
  },
};
</script>

<style>
</style>