export default {
    state: {
        appName: "Kitty Platform",  // 应用名称
        themeColor: "#3B3F40",  // 主题颜色
        oldThemeColor: "#3B3F40",   // 上一次主题颜色
        collapse:false,  // 导航栏收缩状态
        headfixed: true,//头部固定
        // changeLang:"zh",//语言
        menuRouteLoaded: false,    // 菜单和路由是否已经加载
        endState:"pc",//端状态
        barbackground:false,
    },
    getters: {
        collapse(state) {// 对应着上面state
            return state.collapse
        },
        headfixed(state) {
            return state.headfixed
        },
        endState(state){
            return state.endState
        },
        barbackground(state){
            return state.barbackground
        }
    },
    mutations: {
        TOGGLE_COLLAPSE: (state, collstate) => {  // 改变收缩状态
            collstate ? state.collapse = collstate : state.collapse = !state.collapse
            if(state.endState=="mobile" && state.collapse==false){
                state.barbackground=true
            }
        },
        TOGLE_HEADFIXED: (state, fixed) => {
            state.headfixed = fixed
        },
        setThemeColor(state, themeColor) {  // 改变主题颜色
            state.oldThemeColor = state.themeColor
            state.themeColor = themeColor
        },
        TOGGLE_ENDSTATE(state,val){
            state.endState = val
        },
        TOGGLE_BARBACKGROUND(state,val){
            state.barbackground=val;
        },
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        }
    },
    actions: {
        onCollapse({ commit }, collstate) {
            commit('TOGGLE_COLLAPSE', collstate)
        },
        onHeadfixed({ commit }, fixed) {
            commit('TOGLE_HEADFIXED', fixed)
        },
        onendState({commit},val){
            commit('TOGGLE_ENDSTATE',val)
        },
        onbarcbackground({commit},val){
            commit('TOGGLE_BARBACKGROUND',val)
        }
        
        // onchangeLange({commit},val){
        //     console.log(val)
        //     commit('TOGLE_CHANGELANG',val)
        // }
    }
}