<template>
  <div v-if="store.watchList.isShow" class="fixed top-0 bottom-0 h-screen w-screen backdrop-blur-md z-50 grid justify-items-center">
    <div class="search-box bg-slate-800 rounded-xl place-self-center">
      <div class=" p-5 grid grid-cols-[1fr_auto] place-items-center">
        <div class="text-2xl font-bold">Watch List</div>
        <i @click="store.toggleWatchList()" class='bx bx-x ml-2 text-3xl text-slate-400 hover:text-slate-200 rounded-full'></i>
      </div>
      <div class="max-h-[400px] grid border-t border-t-slate-700 overflow-y-auto">
        <div class="mb-5">
          <div class="px-5 mt-5 font-bold text-lg text-red-600">Movies {{getWatchListMovieLength()}}</div>
          <div v-for="item in store.watchList.list.movie" class="px-5 py-3 grid grid-cols-[1fr_auto] content-center border-t border-t-slate-700 hover:bg-slate-700/20">
            <div>{{item.title}}</div>
            <i @click="removeWatchList(item, 'movie')" class='bx bx-x ml-2 text-3xl text-slate-400 hover:text-slate-200 rounded-full'></i>
          </div>
        </div>
        <div class="mb-5">
          <div class="px-5 font-bold text-lg text-red-600">Tv Shows {{getWatchListTvLength()}}</div>
          <div v-for="item in store.watchList.list.tv" class="px-5 py-3 grid grid-cols-[1fr_auto] content-center border-t border-t-slate-700 hover:bg-slate-700/20">
            <div>{{item.name}}</div>
            <i @click="removeWatchList(item, 'tv')" class='bx bx-x ml-2 text-3xl text-slate-400 hover:text-slate-200 rounded-full'></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import router from "../router";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getWatchListMovieLength() {
      return this.store.watchList.list.movie.length;
    },
    getWatchListTvLength() {
      return this.store.watchList.list.tv.length;
    },
    removeWatchList(movie, type = "movie") {
      this.store.removeWatchList(movie, type);
    },
  },
};
</script>


<style lang="scss">
.search-box {
  /* width: minmax(10%, 600px); */
  width: 90%;

  @include lg {
    width: 600px;
  }
}
</style>