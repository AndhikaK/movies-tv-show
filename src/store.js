// store.js
import { reactive } from "vue";

export const store = reactive({
  apiKey: "e434b858f3e1e705a796da7d3c803b75",
  imgPath: "https://image.tmdb.org/t/p/original/",
  smMenu: false,
  search: {
    isShow: false,
    query: "",
    history: [],
  },
  watchList: {
    isShow: false,
    list: {
      movie: [],
      tv: [],
    },
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
  addToWatchList(movie, type = movie) {
    if (type === "movie") {
      this.watchList.list.movie = [...this.watchList.list.movie, movie];
    } else {
      this.watchList.list.tv = [...this.watchList.list.tv, movie];
    }
  },
  removeWatchList(movie, type = "movie") {
    let index = this.isWatchListExist(movie, type);

    if (index > -1) {
      if (type === "movie") {
        this.watchList.list.movie.splice(index, 1);
      } else {
        this.watchList.list.tv.splice(index, 1);
      }
    }
  },
  toggleWatchList() {
    this.watchList.isShow = !this.watchList.isShow;
  },
  toggleMenuModal() {
    this.smMenu = !this.smMenu;
  },
  isWatchListExist(movie, type = "movie") {
    let list = [];
    if (type === "movie") {
      list = this.watchList.list.movie;
    } else {
      list = this.watchList.list.tv;
    }
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === movie) {
        return i;
      }
    }

    return -1;
  },
});
