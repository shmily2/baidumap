<template>
  <div class="fapiao">
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      style=" position: fixed; width:100%;height:100%"
      @click="getClickInfo"
      :scroll-wheel-zoom="true"
    >
      <div>
        <bm-driving
          start="天安门"
          end="百环大厦(写字楼)"
          :auto-viewport="true"
          policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
          :panel="false"
          location="北京"
        >
        </bm-driving>
        <bml-lushu
          @stop="reset"
          :path="trackPath"
          :icon="icon"
          :speed="speed"
          :autoView="true"
          :play="play"
          :rotation="true"
        >
        </bml-lushu>
      </div>
    </baidu-map>
  </div>
</template>
<script>
import { BmlLushu } from "vue-baidu-map";
export default {
  name: "TestBaiDu",
  data() {
    return {
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 15,
      rotation: true, //是否根据线路的方向车辆随着转向
      autoView: true, //视野是否跟着一起移动
      content: "路线",
      infoWindow: true,
      speed: 1000,
      play: true,
      path: [],
      icon: {
        url: "http://api.map.baidu.com/library/LuShu/1.2/examples/car.png",
        size: { width: 52, height: 26 },
        opts: { anchor: { width: 27, height: 13 } }
      },
      trackPath: []
    };
  },
  created() {},
  components: {
    BmlLushu
  },
  methods: {
    goback() {
      this.$router.back();
    },
    reset() {
      this.play = false;
    },
    handler({ BMap, map }) {
      // 初始化地图,设置中心点坐标
      var point = new BMap.Point(116.467843, 39.902432);
      map.centerAndZoom(point, 16);
      // 添加鼠标滚动缩放
      map.enableScrollWheelZoom();
      // 添加缩略图控件
      map.addControl(
        new BMap.OverviewMapControl({
          isOpen: false,
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        })
      );
      let paths = [
        { lng: 116.471483, lat: 39.951258 },
        { lng: 116.471473, lat: 39.951708 },
        { lng: 116.470764, lat: 39.951725 },
        { lng: 116.470764, lat: 39.951725 },
        { lng: 116.470734, lat: 39.951384 },
        { lng: 116.470734, lat: 39.951384 },
        { lng: 116.470015, lat: 39.951402 },
        { lng: 116.470005, lat: 39.951472 },
        { lng: 116.469955, lat: 39.951522 },
        { lng: 116.469726, lat: 39.951561 },
        { lng: 116.469606, lat: 39.951501 },
        { lng: 116.469605, lat: 39.951411 },
        { lng: 116.469605, lat: 39.951411 },
        { lng: 116.469605, lat: 39.951351 },
        { lng: 116.469605, lat: 39.95131 },
        { lng: 116.469565, lat: 39.95126 },
        { lng: 116.469565, lat: 39.95126 },
        { lng: 116.468946, lat: 39.951259 },
        { lng: 116.468636, lat: 39.951248 },
        { lng: 116.468636, lat: 39.951248 },
        { lng: 116.468636, lat: 39.951598 },
        { lng: 116.468637, lat: 39.951768 },
        { lng: 116.468637, lat: 39.952559 },
        { lng: 116.468057, lat: 39.952548 },
        { lng: 116.468057, lat: 39.952548 },
        { lng: 116.468056, lat: 39.950747 },
        { lng: 116.468056, lat: 39.950577 },
        { lng: 116.468075, lat: 39.949577 },
        { lng: 116.468075, lat: 39.949387 },
        { lng: 116.468074, lat: 39.947036 },
        { lng: 116.468064, lat: 39.946946 },
        { lng: 116.468073, lat: 39.944926 },
        { lng: 116.468062, lat: 39.944356 },
        { lng: 116.468062, lat: 39.944316 },
        { lng: 116.468062, lat: 39.944316 },
        { lng: 116.468262, lat: 39.943956 },
        { lng: 116.468262, lat: 39.942996 },
        { lng: 116.468262, lat: 39.942996 },
        { lng: 116.468262, lat: 39.942406 },
        { lng: 116.468241, lat: 39.940116 },
        { lng: 116.468231, lat: 39.938475 },
        { lng: 116.468231, lat: 39.938055 },
        { lng: 116.46821, lat: 39.935875 },
        { lng: 116.46821, lat: 39.935875 },
        { lng: 116.46821, lat: 39.935715 },
        { lng: 116.46821, lat: 39.935335 },
        { lng: 116.46819, lat: 39.933715 },
        { lng: 116.468191, lat: 39.932975 },
        { lng: 116.468181, lat: 39.932615 },
        { lng: 116.468171, lat: 39.931586 },
        { lng: 116.468161, lat: 39.930936 },
        { lng: 116.468161, lat: 39.930696 },
        { lng: 116.468141, lat: 39.929466 },
        { lng: 116.468141, lat: 39.929326 },
        { lng: 116.468142, lat: 39.929026 },
        { lng: 116.468142, lat: 39.928976 },
        { lng: 116.468132, lat: 39.927636 },
        { lng: 116.468123, lat: 39.926026 },
        { lng: 116.468143, lat: 39.925006 },
        { lng: 116.468143, lat: 39.924886 },
        { lng: 116.468143, lat: 39.924886 },
        { lng: 116.468143, lat: 39.924806 },
        { lng: 116.468143, lat: 39.924796 },
        { lng: 116.468204, lat: 39.923007 },
        { lng: 116.468204, lat: 39.922897 },
        { lng: 116.468225, lat: 39.922317 },
        { lng: 116.468235, lat: 39.922267 },
        { lng: 116.468235, lat: 39.922197 },
        { lng: 116.468255, lat: 39.921817 },
        { lng: 116.468255, lat: 39.921817 },
        { lng: 116.468336, lat: 39.920178 },
        { lng: 116.468346, lat: 39.919908 },
        { lng: 116.468346, lat: 39.919838 },
        { lng: 116.468377, lat: 39.919348 },
        { lng: 116.468377, lat: 39.919318 },
        { lng: 116.468377, lat: 39.918878 },
        { lng: 116.468367, lat: 39.918798 },
        { lng: 116.468348, lat: 39.918158 },
        { lng: 116.468338, lat: 39.917688 },
        { lng: 116.468328, lat: 39.917508 },
        { lng: 116.468328, lat: 39.917478 },
        { lng: 116.468328, lat: 39.917428 },
        { lng: 116.468309, lat: 39.916499 },
        { lng: 116.468309, lat: 39.916499 },
        { lng: 116.468309, lat: 39.916449 },
        { lng: 116.468299, lat: 39.916139 },
        { lng: 116.46828, lat: 39.915359 },
        { lng: 116.46828, lat: 39.915079 },
        { lng: 116.468261, lat: 39.914509 },
        { lng: 116.468251, lat: 39.914359 },
        { lng: 116.468251, lat: 39.914319 },
        { lng: 116.468251, lat: 39.914179 },
        { lng: 116.468251, lat: 39.914119 },
        { lng: 116.468251, lat: 39.913959 },
        { lng: 116.468241, lat: 39.913749 },
        { lng: 116.468222, lat: 39.91276 },
        { lng: 116.468213, lat: 39.91163 },
        { lng: 116.468204, lat: 39.91089 },
        { lng: 116.468204, lat: 39.9108 },
        { lng: 116.468205, lat: 39.91019 },
        { lng: 116.468205, lat: 39.9101 },
        { lng: 116.468176, lat: 39.908871 },
        { lng: 116.468166, lat: 39.908641 },
        { lng: 116.468147, lat: 39.907751 },
        { lng: 116.468137, lat: 39.907461 },
        { lng: 116.468118, lat: 39.906481 },
        { lng: 116.468109, lat: 39.906262 },
        { lng: 116.468099, lat: 39.905582 },
        { lng: 116.46807, lat: 39.904522 },
        { lng: 116.468042, lat: 39.903342 },
        { lng: 116.468042, lat: 39.903152 },
        { lng: 116.468042, lat: 39.903152 },
        { lng: 116.467842, lat: 39.902702 },
        { lng: 116.467842, lat: 39.902702 },
        { lng: 116.467842, lat: 39.902492 },
        { lng: 116.467843, lat: 39.902432 },
        { lng: 116.467843, lat: 39.902013 },
        { lng: 116.467843, lat: 39.901993 },
        { lng: 116.467843, lat: 39.901993 },
        { lng: 116.467843, lat: 39.901523 },
        { lng: 116.467844, lat: 39.901193 },
        { lng: 116.467844, lat: 39.901003 },
        { lng: 116.467834, lat: 39.900423 },
        { lng: 116.467815, lat: 39.899923 },
        { lng: 116.467815, lat: 39.899863 },
        { lng: 116.467885, lat: 39.899463 },
        { lng: 116.467936, lat: 39.899334 },
        { lng: 116.468006, lat: 39.899244 },
        { lng: 116.468326, lat: 39.898994 },
        { lng: 116.468326, lat: 39.898994 },
        { lng: 116.468595, lat: 39.898985 },
        { lng: 116.469465, lat: 39.898977 },
        { lng: 116.470224, lat: 39.898959 },
        { lng: 116.471602, lat: 39.898935 },
        { lng: 116.471602, lat: 39.898935 },
        { lng: 116.471663, lat: 39.898105 },
        { lng: 116.471663, lat: 39.897855 },
        { lng: 116.471644, lat: 39.897275 },
        { lng: 116.471644, lat: 39.897235 },
        { lng: 116.471684, lat: 39.897236 },
        { lng: 116.471684, lat: 39.897236 },
        { lng: 116.472342, lat: 39.897239 },
        { lng: 116.47345, lat: 39.897225 },
        { lng: 116.47351, lat: 39.897226 },
        { lng: 116.474169, lat: 39.89722 },
        { lng: 116.474169, lat: 39.89722 },
        { lng: 116.474169, lat: 39.89703 },
        { lng: 116.474169, lat: 39.89703 },
        { lng: 116.473969, lat: 39.897009 },
        { lng: 116.473959, lat: 39.896969 },
        { lng: 116.473959, lat: 39.896969 },
        { lng: 116.473969, lat: 39.896689 }
      ];
      for (var i = 0; i < paths.length; i++) {
        this.trackPath.push(new BMap.Point(paths[i].lng, paths[i].lat));
      }
      // 添加缩放平移控件
      map.addControl(new BMap.NavigationControl());
      //添加比例尺控件
      map.addControl(new BMap.ScaleControl());
      //添加地图类型控件
      //map.addControl(new BMap.MapTypeControl());
      //设置标注的图标
      var icon = new BMap.Icon(
        "../../assets/parkingLot.png",
        new BMap.Size(100, 100)
      );
      //设置标注的经纬度
      var marker = new BMap.Marker(new BMap.Point(121.160724, 31.173277), {
        icon: icon
      });
      //把标注添加到地图上
      map.addOverlay(marker);
      var content = "<table>";
      content = content + "<tr><td> 编号：001</td></tr>";
      content =
        content + "<tr><td> 地点：上海汉得信息技术股份有限公司</td></tr>";
      content = content + "<tr><td> 时间：2018-1-3</td></tr>";
      content += "</table>";
      var infowindow = new BMap.InfoWindow(content);
      // 图标点击的时候显示标注
      marker.addEventListener("click", function() {
        this.openInfoWindow(infowindow);
      });
      // 标注默认显示
      // var infoWindow = new BMap.InfoWindow(content) // 创建信息窗口对象
      // map.openInfoWindow(infoWindow, point)
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>
<style lang="scss" scoped>
.mapset {
  width: 750px;
  height: 147px;
  background: #fff;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  .left {
    width: 80px;
    height: 68px;
    background: rgba(232, 237, 243, 1);
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    img {
      width: 27px;
      height: 27px;
    }
  }
  .right {
    margin-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    input {
      width: 500px;
      height: 68px;
      border: 1px solid rgba(153, 153, 153, 0.5);
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 26px;
      text-indent: 20px;
    }
    .save {
      width: 105px;
      height: 68px;
      background: rgba(32, 142, 255, 1);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
/* 地图标注圆角显示 */
.BMap_bubble_title {
  color: black;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
}
.BMap_pop div:nth-child(1) {
  border-radius: 7px 0 0 0;
}
.BMap_pop div:nth-child(3) {
  border-radius: 0 7px 0 0;
  background: #ababab;
  /*background: #ABABAB;*/
  width: 23px;
  width: 0px;
  height: 10px;
}
.BMap_pop div:nth-child(3) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(5) {
  border-radius: 0 0 0 7px;
}
.BMap_pop div:nth-child(5) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(7) {
  border-radius: 0 0 7px 0;
}
</style>
