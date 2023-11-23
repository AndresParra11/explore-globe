import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CountryDetailView from "../views/CountryDetailView.vue"; // Vista detallada de un país
import ViewOneView from "../views/ViewOneView.vue"; // Vista 1
import ViewTwoView from "../views/ViewTwoView.vue"; // Vista 2

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/country/:id", // Ruta dinámica para la vista detallada de un país
    name: "country-detail",
    component: CountryDetailView,
    props: true, // Permite pasar parámetros como props
  },
  {
    path: "/view-one",
    name: "vista-uno",
    component: ViewOneView,
  },
  {
    path: "/view-two",
    name: "vista-dps",
    component: ViewTwoView,
  },
];

const router = new VueRouter({
  mode: "history", // Modo de enrutamiento
  base: process.env.BASE_URL,
  routes,
});

export default router;
