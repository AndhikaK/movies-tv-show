<template>
  <!-- SEARCH MODAL -->
  <Modal>
    <template v-slot:d-button>
      <i class='bx bx-search text-xl'></i>
    </template>
    <template v-slot:header>
      <div class="grid grid-cols-[auto_1fr_auto] gap-3 items-center">
        <i class='bx bx-search md:text-xl'></i>
        <input v-model="searchQuery" @keypress.enter="addSearchItem(searchQuery)" type="text" class="outline-none place-self-center-start bg-transparent" placeholder="Search movies or TV shows">
      </div>
    </template>
    <template v-slot:content>
      <div v-if="searchList.length > 0">
        <div class="p-5 py-4 font-bold text-left">Recent searches</div>
        <div class="border-b border-b-slate-500/10">
          <div v-for="search in searchList" v-bind:key="search" class="p-5 py-2 text-left grid grid-cols-[1fr_auto] items-center hover:bg-slate-50 dark:hover:bg-slate-700/30 border-t border-t-slate-500/10">
            <div>
              {{ search }}
            </div>
            <i @click="removeSearchItem(search)" class='bx bx-x text-2xl hover:text-red-500'></i>
          </div>
        </div>
      </div>
      <div v-else class="h-[100px] grid place-items-center">
        No recent search
      </div>
    </template>
  </Modal>
</template>

<script>
import { searchStore } from "../store/searchStore.js";
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      searchQuery: searchStore.searchQuery,
      searchList: searchStore.searchList,
      searchStore,
    };
  },
  methods: {
    addSearchItem(search) {
      this.searchStore.addSearchItem(search);
    },
    removeSearchItem(search) {
      this.searchStore.removeSearch(search);
    },
  },
};
</script>

<style scoped>
</style>