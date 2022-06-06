// store.js
import { reactive } from "vue";

export const store = reactive({
  apiKey: "e434b858f3e1e705a796da7d3c803b75",
  imgPath: "https://image.tmdb.org/t/p/original/",
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
