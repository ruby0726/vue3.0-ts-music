import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Recommend from "../views/Recommend/index.vue"

import Login from "../views/Login/index.vue";
import SubLogin from "../views/Login/SubLogin/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        name: 'recommend',
        component: Recommend
      }
    ]
  },

  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login,
  //   children: [
  //     {
  //       path: '/login/:type',
  //       name: 'loginsub',
  //       component: SubLogin
  //     }
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
