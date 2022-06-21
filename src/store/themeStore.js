import { reactive } from "vue";

export const themeStore = reactive({
  isDark: false,
  toggleDark() {
    this.isDark = !this.isDark;
    localStorage.setItem("darkMode", this.isDark);
  },
});
