import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import echarts from'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import api from "./http/api"
import "../plugin"
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Ynu1SkO1atIh778Mp9y98gMfXUrmF3i1'
})
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
