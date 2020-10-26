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
            name: "/login",
            component:login,
            meta: { keepAlive: true }
        },

    ],
})