import { reactive } from "vue";

export const searchStore = reactive({
  searchQuery: "",
  searchList: ["Mimpi", "tak sadar"],
  addSearchItem(search) {
    let index = this.searchList.indexOf(search);

    if (index === -1) {
      this.searchList.push(search);
    }
  },
  removeSearch(search) {
    var index = this.searchList.indexOf(search);
    if (index > -1) {
      this.searchList.splice(index, 1);
    }
  },
});
