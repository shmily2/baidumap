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
// import './lib'
import "../font/iconfont.css"
//百度地图
import BaiduMap from 'vue-baidu-map'
import "../src/utils/map/map3"
import "../src/utils/map/lushu_min"

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Ynu1SkO1atIh778Mp9y98gMfXUrmF3i1'
})
//video.js
import "video.js/dist/video-js.css";
import Video from "video.js";
import 'videojs-contrib-hls';

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false
Vue.prototype.$video = Video; //引入Video播放器
Vue.prototype.$echarts = echarts;
Vue.prototype.$api =api;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
