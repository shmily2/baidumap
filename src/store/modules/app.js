export default {
    state: {
        appName: "Kitty Platform",  // 应用名称
        themeColor: "#3B3F40",  // 主题颜色
        oldThemeColor: "#3B3F40",   // 上一次主题颜色
        collapse: false,  // 导航栏收缩状态
        headfixed: true,//头部固定
        // changeLang:"zh",//语言
        menuRouteLoaded: false    // 菜单和路由是否已经加载
    },
    getters: {
        collapse(state) {// 对应着上面state
            return state.collapse
        },
        headfixed(state) {
            return state.headfixed
        },
        // changeLang(state){
        //     return state.changeLang
        // }
    },
    mutations: {
        TOGGLE_COLLAPSE: (state, collstate) => {  // 改变收缩状态
            collstate ? state.collapse = collstate : state.collapse = !state.collapse
        },
        TOGLE_HEADFIXED: (state, fixed) => {
            state.headfixed = fixed
        },
        setThemeColor(state, themeColor) {  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        // TOGLE_CHANGELANG(state,val){
        //     state.changeLang =val
        // }
    },
    actions: {
        onCollapse({ commit }, collstate) {
            commit('TOGGLE_COLLAPSE', collstate)
        },
        onHeadfixed({ commit }, fixed) {
            commit('TOGLE_HEADFIXED', fixed)
        },
        // onchangeLange({commit},val){
        //     console.log(val)
        //     commit('TOGLE_CHANGELANG',val)
        // }
    }
}