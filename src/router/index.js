import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PopularMoviesView from "../views/PopularMoviesView.vue";
import PopularTvShowsView from "../views/PopularTvShowsView.vue";
import SearchPageView from "../views/SearchPageView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/popular-movies",
    name: "movies",
    component: PopularMoviesView,
  },
  //   {
  //     path: "/movie/:id",
  //     name: "movie-detail",
  //     component: MovieDetailView,
  //   },
  {
    path: "/popular-shows",
    name: "tv-shows",
    component: PopularTvShowsView,
  },
  //   {
  //     path: "/tv-show/:id",
  //     name: "tv-detail",
  //     component: TvDetailView,
  //   },
  {
    path: "/search",
    name: "search",
    component: SearchPageView,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
