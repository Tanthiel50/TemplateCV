import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueScrollTo from "vue-scrollto";

import Home from "@/views/Home.vue";
import Legacy from "@/views/Legacy.vue";

Vue.use(VueRouter);
// VueScrollTo with default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mentions-legales",
    name: "Legacy",
    component: Legacy,
  },
  { path: "/*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
