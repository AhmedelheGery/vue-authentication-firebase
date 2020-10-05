import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Protect from "@/components/Protect";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/protect",
    name: "Protect",
    component: Protect,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    alias: "/"
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isUserAuth) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router;
