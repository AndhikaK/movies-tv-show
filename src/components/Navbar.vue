<template>
  <nav class="w-full py-2 lg:py-5 px-5 md:px-12 flex justify-between items-center dark:bg-slate-800 shadow-md">
    <div class="block lg:hidden">
      <OffCanvas>
        <template v-slot:d-button>
          <i class='bx bx-menu text-xl'></i>
        </template>
        <template v-slot:header>
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14 md:w-14 lg:w-24">
        </template>
        <template v-slot:content>
          <div>Home</div>
          <div>Movies</div>
          <div>TV Shows</div>
        </template>
      </OffCanvas>
    </div>
    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" class="w-14 md:w-14 lg:w-24">
    <div class="hidden lg:flex gap-7 ">
      <div class="hover:text-red-500">Home</div>
      <div class="hover:text-red-500">Movies</div>
      <div class="hover:text-red-500">TV Shows</div>
    </div>
    <div class="flex items-center gap-5">
      <i class='bx bxs-cart text-xl '></i>
      <ToggleDark />
    </div>
  </nav>
</template>

<script>
import ToggleDark from "./ToggleDark.vue";
import OffCanvas from "./OffCanvas.vue";

export default {
  components: { ToggleDark, OffCanvas },
};
</script>
