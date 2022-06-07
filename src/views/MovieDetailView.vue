<template>
  <div class="pt-20 md:pt-0 relative -z-10">
    <img :src="getImgPath(movie.backdrop_path)" alt="" class="w-screen lg:h-screen object-cover -z-50">
    <div class="z-10 pt-28 absolute top-0 w-full p-5 md:px-12 h-full bg-slate-900/90 grid grid-cols-[auto_1fr] gap-3 md:gap-8 lg:gap-12 content-center">
      <img :src="getImgPath(movie.poster_path)" alt="" class="w-[75px] md:w-[175px] lg:w-[225px] object-cover rounded-xl">
      <div class="text-left justify-self-stretch">
        <div class="font-bold md:text-lg lg:text-5xl text-slate-200">{{ movie.title }}</div>
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
        <div class="mt-5 flex gap-5 items-center">
          <span class="md:text-2xl p-3 bg-slate-800/80 rounded-lg font-bold text-green-500">{{movie.vote_average}}</span>
          {{ movie.vote_count }} votes
        </div>
        <div class="hidden lg:block mt-8">
          <span class="ml-2" v-for="genre in movie.genres">{{genre.name}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:hidden p-5 md:px-12">
    {{ movie.overview }}
  </div>
  <div class="py-12">
    <div class="text-center">
      <div v-if="store.isWatchListExist(movie, 'movie') < 0" @click="store.addToWatchList(movie, 'movie')" class="inline-block p-2 py-2 text-sm text-slate-900 rounded-md bg-slate-200 self-center">Add to watchlist</div>
      <div v-if="store.isWatchListExist(movie, 'movie') > -1" @click="store.removeWatchList(movie, 'movie')" class="inline-block p-2 py-2 text-sm  rounded-md self-center text-white bg-red-600">Added</div>
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
      store,
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
