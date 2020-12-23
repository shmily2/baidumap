import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './lang';
import api from "./http/api";

import store from './store'
import "./assets/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css"
import "../plugin"
import "../font/iconfont.css"
//百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Ynu1SkO1atIh778Mp9y98gMfXUrmF3i1'
})
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
