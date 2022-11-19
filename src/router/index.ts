import { createRouter, createWebHistory } from "vue-router";
import ContactManager from "../views/ContactManager.vue";
import AddContact from "../views/AddContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/contacts",
    },
    {
      path: "/contacts",
      name: "ContactManager",
      component: ContactManager,
    },
    {
      path: "/add-contact",
      name: "AddContact",
      component: AddContact,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
