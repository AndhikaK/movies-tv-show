<template>
  <div class="rounded-md">
    <div class="movie-img relative h-[130px] md:h-[200px] lg:h-[240px] bg-slate-600 rounded-md overflow-hidden">
      <div class="absolute h-full w-full top-0 bottom-0 right-0">
        <img :src="getImgPath(movie.poster_path)" alt="" class="h-full w-full">
      </div>
      <span v-if="isRecommended(movie)" class="absolute top-0 left-0 p-1 bg-red-500 text-white rounded-br-md text-xs">Recommended</span>
      <span v-if="movie.vote_average > 0" class="vote-score absolute bottom-0 right-0 p-1 bg-red-500 text-white rounded-tl-md text-xs font-bold">
        {{ movie.vote_average }}
      </span>
    </div>
    <div class="mt-1 text-left">
      <div class="font-bold line-clamp-1">{{movie.title}}</div>
      <div class="text-sm text-slate-500">{{ getYear(movie.release_date) }}</div>
    </div>
  </div>
</template>

<script>
import { apiStore } from "../store/apiStore";
import dateformat from "dateformat";

export default {
  props: ["movie"],
  data() {
    return {
      apiStore,
    };
  },
  methods: {
    getImgPath(img) {
      const path = this.apiStore.imgPath;
      return path + img;
    },
    getYear(releaseDate) {
      return dateformat(releaseDate, "yyyy");
    },
    isRecommended(movie) {
      return movie.vote_average > 8 && movie.vote_count > 1000;
    },
  },
};
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.movie-img img {
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in;
}
.movie-img:hover img {
  transform: scale(130%);
  opacity: 0.5;
}
.movie-img .vote-score {
  transform: translateY(100%);
  transition: transform 0.3s ease-in;
}

.movie-img:hover .vote-score {
  transform: translateY(0);
}
</style>