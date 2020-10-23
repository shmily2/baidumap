import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BaiduMap from 'vue-baidu-map'
import api from "./http/api"
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Ynu1SkO1atIh778Mp9y98gMfXUrmF3i1'
})
Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
