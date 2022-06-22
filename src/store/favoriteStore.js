import { reactive } from "vue";

export const favoriteStore = reactive({
  movieList: [],
  tvShowList: [],
  addNewFavorite(movie, type) {
    if (type == "tv") {
      const { length } = this.tvShowList;
      if (length < 0) {
        this.tvShowList.push(movie);
      } else {
        const id = length + 1;
        const found = this.tvShowList.some((el) => el.id === movie.id);
        if (!found) this.tvShowList.push(movie);
      }
    }
    if (type == "movie") {
      const { length } = this.movieList;
      if (length < 0) {
        this.movieList.push(movie);
      } else {
        const id = length + 1;
        const found = this.movieList.some((el) => el.id === movie.id);
        if (!found) this.movieList.push(movie);
      }
    }
  },
  removeFavorite(id, type) {
    if (type == "tv") {
      const index = this.tvShowList.map((object) => object.id).indexOf(id);

      if (index > -1) {
        this.tvShowList.splice(index, 1);
      }
    }
    if (type == "movie") {
      const index = this.movieList.map((object) => object.id).indexOf(id);

      if (index > -1) {
        this.movieList.splice(index, 1);
      }
    }
  },
  isFavouriteExits(movie, type) {
    if (type == "tv") {
      const { length } = this.tvShowList;
      const id = length + 1;
      return this.tvShowList.some((el) => el.id === movie.id);
    }
    if (type == "movie") {
      const { length } = this.movieList;
      return this.movieList.some((el) => el.id === movie.id);
    }
  },
});
