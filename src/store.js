// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 2,
  search: {
    isShow: false,
    history: ["Terluka", "Terluka", "Terluka", "Terluka"],
  },
  toggleSearch() {
    this.search.isShow = !this.search.isShow;
  },
});
