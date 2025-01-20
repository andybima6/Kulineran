import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import FoodsDetailView from "../views/FoodsDetailView.vue"; // Ensure correct import

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "FoodsView",
    component: FoodsView,
  },
  {
    // Correct dynamic route for food details
    path: "/foods/:id",
    name: "FoodsDetail",
    component: FoodsDetailView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history", // Make sure this matches your setup
  base: process.env.BASE_URL,
  routes,
});

export default router;
