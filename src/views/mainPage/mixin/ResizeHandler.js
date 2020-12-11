import store from '@/store'
const { body } = document;
const RATIO = 3
export default {
    watch: {
        // $route(to, from) {
        //     console.log(to.path);
        //     console.log(from.path);
        // },
        // // 深度观察监听
        // deep: true
    },
    mounted() {
        this.resizeHandler()
    },
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler)

    },
    methods: {
        isMobile() {
            const rect = body.getBoundingClientRect()
            return rect.width - RATIO
        },
        resizeHandler() {
            const isMobile = this.isMobile()
            console.log(isMobile)
            if (isMobile > 1200) {
                store.dispatch('onendState', 'pc')
            } else if (isMobile > 600 && isMobile < 1200) {
                store.dispatch('onendState', 'flat')
                store.dispatch('onCollapse', true)
            } else if(isMobile<600) {
                store.dispatch('onendState', 'mobile')
                store.dispatch('onCollapse', true)
            }
        }
    }
}