import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // --- Nav ---
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },

  // --- Components ---
  {
    path: "/components/basic",
    name: "Basic",
    component: () => import("../components/Basic.vue")
  },
  {
    path: "/components/form",
    name: "Form",
    component: () => import("../components/Form.vue")
  },
  {
    path: "/components/data",
    name: "Data",
    component: () => import("../components/Data.vue")
  },
  {
    path: "/components/notice",
    name: "Notice",
    component: () => import("../components/Notice.vue")
  },
  {
    path: "/components/navigation",
    name: "Navigation",
    component: () => import("../components/Navigation.vue")
  },
  {
    path: "/components/others",
    name: "Others",
    component: () => import("../components/Others.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
