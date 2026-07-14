import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import ServiceView from "../views/ServiceView.vue";
import ContactView from "../views/ContactView.vue";
import LoginView from "../views/LoginView.vue";


const routes = [
    { path: "/", component: HomeView },
    { path: "/shop", component: ShopView },
    { path: "/service", component: ServiceView },
    { path: "/contact", component: ContactView },
    { path: "/login", component: LoginView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;