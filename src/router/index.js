import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import TvShowsView from "../views/TvShowsView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/movie/:id",
    name: "movie-detail",
    component: MovieDetailView,
  },
  {
    path: "/tv-shows",
    name: "tv-shows",
    component: TvShowsView,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
