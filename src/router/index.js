import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import FoodsDetailView from "../views/FoodsDetailView.vue"; // Ensure correct import
import KeranjangView from "../views/KeranjangView.vue";

Vue.use(VueRouter); // This line enables Vue Router

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
    path: "/foods/:id", // Dynamic route to handle food details
    name: "FoodsDetail",
    component: FoodsDetailView,
  },
  {
    path: "/keranjang",
    name: "KeranjangView",
    component: KeranjangView,
  },
];

const router = new VueRouter({
  mode: "history", // Make sure this matches your setup (history mode)
  base: process.env.BASE_URL, // Can be customized if necessaryvue ui
  routes,
});

export default router;
