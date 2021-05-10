<template>
  <div id="maplushu">
    <el-scrollbar style="height:calc(100% - 40ppx)">
      <mapview @baiduMap="baiduMap" class="drivingTrackmap"></mapview>
    </el-scrollbar>
  </div>
</template>

<script>
import { mark, polyline, trajectory } from "../../utils/map";
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
  // //进入路由
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   to.meta.keepAlive = true;
  //   next();
  // },
  methods: {
    baiduMap(map) {
      this.map = map;
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.point = new BMap.Point(116.363944, 39.90384); // 创建点坐标
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
      //轨迹
      let shart = [new BMap.Point(116.363944, 39.90384)]; //开始坐标
      let end = [new BMap.Point(116.360495, 39.871951)]; //结束坐标
      let speed = map.getDistance(shart[0], end[0]); //距离
      mark(this.map, shart, this.location, "", shartpic, new BMap.Size(32, 32)); //起点图标
      mark(this.map, end, this.location, "", endpic, new BMap.Size(32, 32)); //终点图标
      polyline(
        this.map,
        this.points,
        this.polylineMuster,
        "red",
        "solid",
        "3",
        "0.8"
      ); //线路
      let icon = new BMap.Icon(
        "http://developer.baidu.com/map/jsdemo/img/car.png",
        new BMap.Size(52, 26)
      );
      this.lushu = trajectory(
        this.lushu,
        this.map,
        this.points,
        icon,
        speed,
        "京A30780"
      );
      this.lushu.start(); //开始
      // this.lushu.stop(); //停止
      // this.lushu.pause();//暂停
      // this.lushu.clear()//清除路数
      // this.lushu.hideInfoWindow()//隐藏信息窗口
      // this.lushu.showInfoWindow()//展示信息窗口
    }
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