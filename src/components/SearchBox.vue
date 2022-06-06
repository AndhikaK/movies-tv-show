<template>
  <div v-if="store.search.isShow" class="fixed top-0 bottom-0 h-screen w-screen backdrop-blur-md z-50 grid justify-items-center">
    <div class="search-box bg-slate-300 rounded-xl place-self-center text-slate-900">
      <div class="p-3 grid grid-cols-[auto_1fr_auto] place-items-center">
        <i class='bx bx-search-alt-2 text-3xl'></i>
        <input type="text" class="p-2 w-full bg-transparent focus:outline-none text-xl" placeholder="Search movies or tv shows...">
        <i @click="store.toggleSearch()" class='bx bx-x ml-2 text-3xl text-slate-400 hover:text-slate-900 rounded-full'></i>
      </div>
      <div class="max-h-[400px] grid border-t border-t-slate-400 overflow-y-auto">
        <div v-if="getHistoryLength() > 0">
          <div class="p-4 px-5 font-bold text-lg">Recent</div>
          <div class="mb-5">
            <div v-for="item in history" class="px-5 py-3 grid grid-cols-[1fr_auto] content-center border-t border-t-slate-400">
              <div>Hasil search</div>
              <i @click="store.toggleSearch()" class='bx bx-x ml-2 text-3xl text-slate-400 hover:text-slate-900 rounded-full'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data() {
    const { search } = store;
    return {
      store,
      history: search.history,
    };
  },
  methods: {
    getHistoryLength() {
      return this.store.search.history.length;
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