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
  watchList: {
    isShow: false,
    list: [],
  },
  updateSearchQuery(query) {
    console.log(query);
    this.search.query = query;
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
  addToWatchList(movie) {
    this.watchList.list = [...this.watchList.list, movie];
  },
  removeWatchList(movie) {
    const index = this.isWatchListExist(movie);
    console.log("masuk ke sini gk si");

    if (index > -1) {
      this.watchList.list.splice(index, 1);
    }
  },
  toggleWatchList() {
    this.watchList.isShow = !this.watchList.isShow;
  },
  isWatchListExist(movie) {
    const list = this.watchList.list;
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === movie) {
        return i;
      }
    }

    return -1;
  },
});
