<template>
  <div @click="toggleOffCanvas" class="hover:text-yellow-500">
    <slot name="d-button"></slot>
  </div>
  <div @click.self="toggleOffCanvas" :class="{hidden: !isShow, block: isShow, offcanvas: isShow}" class="fixed top-0 bottom-0 right-0 left-0 w-screen h-screen bg-slate-900/30">
    <div class="offcanvas-content h-screen w-5/6 text-left bg-white dark:bg-slate-800 p-3">
      <!-- Header -->
      <div class="fw-bold">
        <div class="flex gap-3">
          <i @click="toggleOffCanvas" class='bx bx-x text-xl'></i>
          <slot name="header"></slot>
        </div>
        <div class="flex flex-col gap-4 border-t border-t-slate800/20 mt-5 pt-5">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleDark from "./ToggleDark.vue";
export default {
  components: { ToggleDark },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleOffCanvas() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
.offcanvas.hidden {
  opacity: 0;
  animation: fade 0.1s both;
}

.offcanvas.block {
  opacity: 1;
}

.offcanvas .offcanvas-content {
  transform: translateX(-100%);
  animation: slide-in 0.25s ease-in both;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>