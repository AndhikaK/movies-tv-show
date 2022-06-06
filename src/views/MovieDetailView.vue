<template>
  <div class="relative -z-10">
    <img :src="getImgPath(movie.backdrop_path)" alt="" class="w-screen lg:h-screen object-cover">
    <div class="hidden pt-28 absolute top-0 w-full p-5 md:px-12 h-full bg-slate-900/90 z-0 lg:grid grid-cols-[auto_1fr] lg:gap-12 content-center">
      <img :src="getImgPath(movie.poster_path)" alt="" class="w-1/3 lg:w-[225px] object-cover rounded-xl">
      <div class="text-left justify-self-stretch">
        <div class="font-bold text-5xl text-slate-200">{{ movie.title }}</div>
        <div class="mt-2 text-slate-500">{{ movie.tagline }}</div>
        <div class="flex gap-12 mt-5">
          <div>
            {{ formatDate(movie.release_date) }}
          </div>
          <div>
            {{ getDuration(movie.runtime) }}
          </div>
        </div>
        <div class="mt-5 mr-10 hidden lg:block">
          {{ movie.overview }}
        </div>
        <div class="mt-5 flex gap-5">
          <span class="text-2xl p-3 bg-slate-800/80 rounded-lg font-bold text-green-500">{{movie.vote_average}}</span>
          <div class="p-2 py-2 text-sm text-slate-900 rounded-md bg-slate-200 self-center">Add to watchlist</div>
        </div>
        <div class="mt-8">
          <span class="ml-2" v-for="genre in movie.genres">{{genre.name}}</span>
        </div>
      </div>
    </div>

    <div class="lg:hidden px-5 md:px-12 grid grid-cols-[auto_1fr] absolute top-0 w-full h-full bg-slate-900/90 content-center">
      <div class="bg-red-200">
        <img :src="getImgPath(movie.poster_path)" alt="" class="w-[75px] md:w-[175px] object-cover rounded-xl">
      </div>
      <div class="bg-red-300">dfa</div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import dateformat from "dateformat";

export default {
  data() {
    return {
      apiKey: store.apiKey,
      imgPath: store.imgPath,
      movie: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
    axios.get(url).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {
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
  },
};
</script>
