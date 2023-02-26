import Login from "@/app/view/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../view/Home.vue");
const Dashboard = () => import("../view/Dashboard.vue");

const Favorites = () => import("../view/home/Favorites.vue");

const Details = () => import("../view/home/Details.vue");

const Catalog = () => import("../view/home/Catalog.vue");

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dash",
    name: "Dash",
    redirect: { name: "Home" },
    component: Dashboard,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        redirect: { name: "Catalog" },
        children: [
          {
            path: "favorites",
            name: "Favorites",
            component: Favorites,
          },
          {
            path: "",
            name: "Catalog",
            component: Catalog,
          },
        ],
      },
      {
        path: "details/:id",
        name: "Details",
        component: Details,
      },
    ],
  },
];

import { store } from "@/app/store";
import { UserStore } from "../store/authUser";
import { getModule } from "vuex-module-decorators";

const authState = getModule(UserStore, store);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Navigation Guard

router.beforeEach(async (to: any, from: any, next: any) => {
  if (!authState.user.state && to.name !== "Login") {
    next({ name: "Login" });
  } else if (!!authState.user.state && to.name == "Login") {
    next({ name: "Dash" });
  } else {
    next();
  }
});

export default router;
