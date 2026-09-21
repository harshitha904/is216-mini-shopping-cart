import { createRouter, createWebHistory } from "vue-router";

//being imported from the views folder (pages to be used for routing) where componets are used across diff pages (like components)
import AboutView from "../views/AboutView.vue";
import MenuView from "../views/MenuView.vue";
import CartView from "../views/CartView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AboutView,
    },
    {
      path: "/menu",
      component: MenuView,
    },
    {
      path: "/cart",
      component: CartView,
    },
    
  ],
});

export default router;
