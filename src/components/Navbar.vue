<template>
  <nav class="flex justify-between bg-red-200 dark:bg-black">
    <div>Logo</div>
    <div>
      <div>menu</div>
      <div>menu</div>
      <div>menu</div>
    </div>
    <div>
      <ToggleDark />
    </div>
  </nav>
</template>

<script>
import ToggleDark from "./ToggleDark.vue";

export default {
  components: { ToggleDark },
};
</script>
