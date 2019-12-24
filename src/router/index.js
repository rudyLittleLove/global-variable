import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/stylus"
  },
  {
    path: "/scss",
    name: "scss",
    component: () => import(/* webpackhunkName: "scss" */ "../views/Scss.vue")
  },
  {
    path: "/less",
    name: "less",
    component: () => import(/* webpackChunkName: "less" */ "../views/Less.vue")
  },
  {
    path: "/stylus",
    name: "stylus",
    component: () =>
      import(/* webpackChunkName: "stylus" */ "../views/Stylus.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
