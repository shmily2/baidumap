import Vue from "vue"
import Router from "vue-router"
import Home from "../view/home.vue"
import login from "../view/login.vue"
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
Vue.use(Router)
export const constantRouterMap = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { keepAlive: true }
    },
    {
        path: "/login",
        name: "login",
        component: login,
        meta: { keepAlive: true }
    },
    {
        path: "/mainPage",
        name: "mainPage",
        component: () => import("../view/mainPage.vue"),
        meta: { keepAlive: true },
        children:[
           
        ],
    },

]

// 实例化vue的时候只挂载constantRouter
const  router = new Router({
    // mode: 'history', // require service support
    //scrollBehavior翻页滚动位置
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })
  
  router.afterEach(() => {
    NProgress.done()
  })
export default router