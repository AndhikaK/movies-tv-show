<template>
  <div @click="toggleModal" class="hover:text-red-500 ">
    <slot name="d-button"></slot>
  </div>
  <div @click.self="toggleModal" :class="{active: isShow}" class="modal fixed top-0 bottom-0 left-0 right-0 h-screen w-screen grid justify-items-center bg-slate-900/50 text-slate-800 dark:text-slate-200">
    <div class="w-5/6 max-h-[70%] md:w-[60%] md:max-h-[75%] mt-[20%] md:mt-[8%] bg-white dark:bg-slate-800 rounded-lg place-self-start-center">
      <!-- TITLE -->
      <div class="p-5 py-4 text-left border-b border-b-slate-500/20">
        <slot name="header"></slot>
      </div>
      <!-- CONTENT -->
      <div class="">
        <!-- EMPTY -->
        <slot name="content"></slot>

      </div>
      <!-- FOOTER -->
      <div class="mt-5 p-5 border-t border-t-slate-500/20">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.modal {
  display: none;
}
.modal.active {
  display: grid;
}
.place-self-start-center {
  place-self: start center;
}
</style>