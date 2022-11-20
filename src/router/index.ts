import { createRouter, createWebHistory } from "vue-router";
import ContactManager from "../views/ContactManager.vue";
import AddContact from "../views/AddContact.vue";
import ViewContact from "@/views/ViewContact.vue";
import EditContact from "@/views/EditContact.vue";
import PageNotFound from "@/views/PageNotFound.vue";

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
      path: "/contacts/add",
      name: "AddContact",
      component: AddContact,
    },
    {
      path: "/contacts/view/:contactID",
      name: "ViewContact",
      component: ViewContact,
    },
    {
      path: "/contacts/edit/:contactID",
      name: "EditContact",
      component: EditContact,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
