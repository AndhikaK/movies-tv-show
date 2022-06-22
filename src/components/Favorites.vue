<template>
  <!-- SEARCH MODAL -->
  <Modal>
    <template v-slot:d-button>
      <i class='bx bxs-cart md:text-xl '></i>
    </template>
    <template v-slot:header>
      <div class="font-bold">Favourites</div>
    </template>
    <template v-slot:content>
      <div class="grid grid-rows-2 h-[300px] overflow-hidden">
        <div class="">
          <div class="p-5 py-4 font-bold text-left">Movies</div>
          <div class="h-[250px]  border-b border-b-slate-500/10">
            <div v-if="favMovie.length > 0" class="overflow-y-auto h-[100px]">
              <div v-for="movie in favMovie" v-bind:key="movie.id" class="p-5 py-2 text-left grid grid-cols-[1fr_auto] items-center hover:bg-slate-50 dark:hover:bg-slate-700/30 border-t border-t-slate-500/10">
                <router-link :to="{name: 'movie-detail', params: {id: movie.id}}">
                  <div>
                    {{ movie.title }}
                  </div>
                </router-link>
                <i @click="removeFavorite(movie.id, 'movie')" class='bx bx-x text-2xl hover:text-red-500'></i>
              </div>
            </div>
            <div v-else class="py-2">
              Add new favorite
            </div>
          </div>
        </div>
        <div>
          <div class="p-5 py-4 font-bold text-left">TV Shows</div>
          <div class="h-[250px] overflow-y-auto border-b border-b-slate-500/10">
            <div v-if="favTvShows.length > 0" class="overflow-y-auto">
              <div v-for="movie in favTvShows" v-bind:key="movie.id" class="p-5 py-2 text-left grid grid-cols-[1fr_auto] items-center hover:bg-slate-50 dark:hover:bg-slate-700/30 border-t border-t-slate-500/10">
                <router-link :to="{name: 'tv-detail', params: {id: movie.id}}">
                  <div>
                    {{ movie.name }}
                  </div>
                </router-link>
                <i @click="removeFavorite(movie.id, 'tv')" class='bx bx-x text-2xl hover:text-red-500'></i>
              </div>
            </div>
            <div v-else class="py-2">
              Add new favorite
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import { favoriteStore } from "../store/favoriteStore.js";
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      favMovie: favoriteStore.movieList,
      favTvShows: favoriteStore.tvShowList,
      favoriteStore,
    };
  },
  methods: {
    removeFavorite(id, type) {
      this.favoriteStore.removeFavorite(id, type);
    },
  },
};
</script>

<style scoped>
</style>