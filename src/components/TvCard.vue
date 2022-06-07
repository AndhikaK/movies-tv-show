<template>
  <router-link :to="{name: 'tv-detail', params: {id: movie.id}}">
    <div class="relative -z-10">
      <div class="rounded-lg overflow-hidden">
        <div v-if="isRecommended(movie)" class="absolute top-0 left-0 p-1 text-xs bg-red-600 text-slate-200 rounded-br-xl">Recommended</div>
        <img :src="getImgPath(movie.poster_path)" alt="" class=" object-cover w-full h-[150px] md:h-[225px] lg:h-[300px]">
      </div>
      <div class="line-clamp-1 text-slate-300">{{ movie.name }}</div>
      <div class="line-clamp-1 text-slate-500 text-sm">{{ formatDate(movie.release_date) }}</div>
    </div>
  </router-link>
</template>

<script>
import dateformat from "dateformat";
import { store } from "../store.js";

export default {
  props: ["movie"],
  data() {
    return {
      store,
    };
  },
  methods: {
    getImgPath(img) {
      const path = this.store.imgPath;
      return path + img;
    },
    formatDate(releaseDate) {
      return dateformat(releaseDate, "mmmm d, yyyy");
    },
    isRecommended(movie) {
      return movie.vote_average > 8 && movie.vote_count > 1000;
    },
  },
};
</script>

<style lang="scss">
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
