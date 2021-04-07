<template>
  <div id="maplushu">
    <mapview @baiduMap="baiduMap" class="drivingTrackmap"></mapview>
  </div>
</template>

<script>
import { mark, polyline } from "../../utils/map";
import shartpic from "../../assets/start.png";
import endpic from "../../assets/eng.png";
export default {
  name: "lushu",
  data() {
    return {
      map: "",
      point: "",
      location: [], //图标
      polylineMuster: [], //线
      lushu: "",
      points: [
        { lng: 116.363944, lat: 39.90384, of: "inner" },
        { lng: 116.362794, lat: 39.94368, of: "inner" },
        { lng: 116.362794, lat: 39.948105, of: "inner" },
        { lng: 116.382342, lat: 39.95253, of: "inner" },
        { lng: 116.438683, lat: 39.951645, of: "inner" },
        { lng: 116.439833, lat: 39.933943, of: "inner" },
        { lng: 116.442133, lat: 39.906496, of: "inner" },
        { lng: 116.450182, lat: 39.899412, of: "inner" },
        { lng: 116.449032, lat: 39.874609, of: "inner" },
        { lng: 116.405338, lat: 39.874609, of: "inner" },
        { lng: 116.360495, lat: 39.871951, of: "inner" }
      ]
    };
  },
  methods: {
    baiduMap(map) {
      this.map = map;
      this.point = new BMap.Point(116.404, 39.915); // 创建点坐标
      this.map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      let Polygons = [];
      this.points.map(item => {
        Polygons.push(new BMap.Point(item.lng, item.lat));
      });

      this.point = new BMap.Point(116.363944, 39.90384); // 创建点坐标
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
      let shart = [new BMap.Point(116.363944, 39.90384)];
      let end = [new BMap.Point(116.360495, 39.871951)];
      mark(this.map, shart, this.location,'',shartpic, new BMap.Size(32, 32)); //起点
      mark(this.map, end, this.location,'', endpic, new BMap.Size(32, 32)); //终点
      polyline(this.map, this.points, this.polylineMuster, "red", "solid", "3", "0.8"); //线路
      this.lushu= new BMapLib.LuShu(this.map, Polygons, {
        defaultContent: "", //"从天安门到百度大厦"
        autoView: true, //是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
        icon: new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/car.png", new BMap.Size(52, 26)),
        speed: 5000,
        enableRotation: true, //是否设置marker随着道路的走向进行旋转
        landmarkPois: []
      });
      // this.lushu.showInfoWindow()
      this.lushu.start();
           // this.lushu.clear(this.lushu)//清除
    }
    // baiduMap(map) {

    //   this.map.removeOverlay(this.marker);
    //   // this.map.clearOverlays()
    //   console.log(this.map)
    // }
  }
};
</script>
<style scoped lang="scss">
#maplushu {
  width: 100%;
  height: 100vh;
  .drivingTrackmap {
    width: 100%;
    height: 100vh;
    #allmap {
      width: 100%;
      height: 100vh;
    }
  }
}
</style>