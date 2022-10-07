import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Abilities from '../pages/Abilities.vue'
import Projects from "../pages/Projects.vue"
import Contact from "../pages/Contact.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Abilities",
    component: Abilities,
    name: "Abilities",
},{
    path: "/Projects",
    component: Projects,
    name: "Projects",
},{
    path: "/Contact",
    component: Contact,
    name: "Contact",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveclass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0 }; 
    },
    routes,
});

export default router;