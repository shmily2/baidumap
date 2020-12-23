import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import app from './modules/app'
import iframe from './modules/iframe'
import menu from './modules/menu'
import tab from './modules/tab'
import user from './modules/user'
const store = new vuex.Store({
    modules: {
        app,
        iframe,
        menu,
        tab,
        user
    }
})

export default store