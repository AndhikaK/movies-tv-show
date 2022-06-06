// store.js
import { reactive } from "vue";

export const store = reactive({
  count: 2,
  search: {
    isShow: false,
    query: "",
    history: [],
  },
  toggleSearch() {
    this.search.isShow = !this.search.isShow;
  },
  emptySearch() {
    this.search.query = "";
  },
  addHistory(q) {
    this.search.history.push(q);
  },
  removeHistory(history) {
    const index = this.search.history.indexOf(history);

    if (index > -1) {
      this.search.history.splice(index, 1);
    }
    console.log(this.search.history);
  },
});
