import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Register from "@/components/Register";
Vue.use(VueRouter);

const routes = [
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

export default router;
