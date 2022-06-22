<template>
  <nav class="z-50 w-full py-2 lg:py-5 px-5 md:px-12 sticky top-0 flex justify-between items-center bg-white dark:bg-slate-800" :class="{bgtransparent: isIdParamExists(), pabsolute: isIdParamExists(), }">
    <div class=" block lg:hidden">
      <!-- MENU OFFCANVAS FOR MOBILE -->
      <OffCanvas>
        <template v-slot:d-button>
          <i class='bx bx-menu text-xl'></i>
        </template>
        <template v-slot:header>
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14 md:w-14 lg:w-24">
        </template>
        <template v-slot:content>
          <router-link :to="{name: 'home'}">
            <div>Home</div>
          </router-link>
          <router-link :to="{name: 'movies'}">
            <div>Movies</div>
          </router-link>
          <router-link :to="{name: 'tv-shows'}">
            <div>TV Shows</div>
          </router-link>
        </template>
      </OffCanvas>
    </div>

    <router-link :to="{name: 'home'}">
      <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14 md:w-14 lg:w-24">
    </router-link>

    <div class="hidden lg:flex gap-7 " :class="{'text-white': isIdParamExists()}">
      <router-link :to="{name: 'home'}">
        <div class="hover:text-red-500">Home</div>
      </router-link>
      <router-link :to="{name: 'movies'}">
        <div class="hover:text-red-500">Movies</div>
      </router-link>
      <router-link :to="{name: 'tv-shows'}">
        <div class="hover:text-red-500">TV Shows</div>
      </router-link>
    </div>

    <div class="flex items-center gap-3  md:gap-5 " :class="{'text-white': isIdParamExists()}">
      <Search />
      <i class='bx bxs-cart md:text-xl '></i>
      <ToggleDark />
    </div>
  </nav>
</template>

<script>
import ToggleDark from "./ToggleDark.vue";
import OffCanvas from "./OffCanvas.vue";
import Search from "./Search.vue";
import Modal from "./Modal.vue";

export default {
  components: { ToggleDark, Modal, Search, OffCanvas },
  data() {
    return {};
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.isIdParamExists();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    isIdParamExists() {
      // console.log(this.$route.params.id > 0);

      if (this.$route.params.id > 0) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style>
.router-link-active.router-link-exact-active div {
  color: red;
}
.bgtransparent {
  background: transparent !important;
}
.pabsolute {
  position: fixed !important;
}
</style>
