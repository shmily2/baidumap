import Vue from "vue"
import Router from "vue-router"
import Home from "../view/home.vue"
import login from "../view/login.vue"
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { keepAlive: true }
        },
        {
            path: "/login",
            name: "login",
            component:login,
            meta: { keepAlive: true }
        },
        {
            path: "/security",
            name: "security",
            component:()=>import("../view/security/index.vue"),
            meta: { keepAlive: true } 
        },
        {
            path: "/personnel",
            name: "personnel",
            component:()=>import("../view/personnel/index.vue"),
            meta: { keepAlive: true } 
        },
        {
            path: "/maintenance",
            name: "maintenance",
            component:()=>import("../view/maintenance/index.vue"),
            meta: { keepAlive: true } 
        },
        {
            path: "/vehicle",
            name: "vehicle",
            component:()=>import("../view/vehicle/index.vue"),
            meta: { keepAlive: true } 
        },
        {
            path: "/Bayonet",
            name: "Bayonet",
            component:()=>import("../view/Bayonet/index.vue"),
            meta: { keepAlive: true } 
        },
        {
            path: "/Video",
            name: "Video",
            component:()=>import("../view/Video/index.vue"),
            meta: { keepAlive: true } 
        },

    ],
})