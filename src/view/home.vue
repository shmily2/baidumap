<template>
  <div class="polyline">
    <!-- <div class="map" id="allmap"></div> -->
    <mapview @baiduMap="baiduMap"></mapview>
    <!-- 菜单 -->
    <div class="menubox">
      <ul class="menu">
        <li
          v-for="(item, index) in muen"
          :key="item.id"
          :class="{ choice: item.show }"
          @click="operation(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="posit left">
      <ul class="side">
        <li>常用功能</li>
        <li>安全教育</li>
        <li>车辆运输管理</li>
        <li>人员入园管理</li>
      </ul>
    </div>
    <div class="posit right">
      <ul class="side">
        <li>卡口管理系统</li>
        <li>视屏监控系统</li>
        <li>监控调度系统</li>
        <li>运维管理系统</li>
      </ul>
    </div>
  </div>
</template>

<script>
import mock from "../mock/index";
import { mark, removeMarker, polyline, Polygon } from "../utils/map";
import Sdangerous from "../assets/Sdangerous.png"; //危化品车辆
import dangBayonet from "../assets/dangBayonet.png"; //危化品卡口
import emergency from "../assets/emergency.png"; //应急卡口
import ordinary from "../assets/ordinary.png"; //普通卡口
import cardProcessingCenter from "../assets/cardProcessingCenter.png"; //办卡中心
import gunMachine from "../assets/gunMachine.png"; //枪机
import domeCameras from "../assets/domeCameras.png"; //球机
import parkingLot from "../assets/parkingLot.png"; //停车场
export default {
  name: "Bmap",
  data() {
    return {
      map: "", //地图初始化
      point: "", //地图中心点
      whpcl: {
        markers: [],
        infoWindow: "",
      },
      whpkk: {
        markers: [],
        infoWindow: "",
      },
      yjkk: {
        markers: [],
        infoWindow: "",
      },
      ptkk: {
        markers: [],
        infoWindow: "",
      },
      qywl: {
        polylineMuster: [],
      },
      bkzx: {
        markers: [],
        infoWindow: "",
      },
      qj: {
        markers: [],
        infoWindow: "",
      },
      qy: {
        PolygonsMuster: [],
      },
      yqbj: {
        polylineMuster: [],
      },
      qiuj: {
        markers: [],
        infoWindow: "",
      },
      tcc: {
        markers: [],
        infoWindow: "",
      },
      whpcd: {
        polylineMuster: [],
      },
      muen: [
        {
          name: "危化品车辆",
          id: 0,
          icon: "",
          show: false,
        },
        {
          name: "危化品卡口",
          id: 1,
          icon: "",
          show: false,
        },
        {
          name: "应急卡口",
          id: 2,
          icon: "",
          show: false,
        },
        {
          name: "普通卡口",
          id: 3,
          icon: "",
          show: false,
        },
        {
          name: "办卡中心",
          id: 4,
          icon: "",
          show: false,
        },
        {
          name: "企业围墙",
          id: 5,
          icon: "",
          show: false,
        },
        {
          name: "枪机",
          id: 6,
          icon: "",
          show: false,
        },
        {
          name: "区域",
          icon: "",
          id: 7,
          show: false,
        },
        {
          name: "球机",
          id: 8,
          icon: "",
          show: false,
        },
        {
          name: "危化品车道",
          id: 9,
          icon: "",
          show: false,
        },
        {
          name: "分级管理",
          id: 10,
          icon: "",
          show: false,
        },
        {
          name: "园区边界",
          id: 11,
          icon: "",
          show: false,
        },
        {
          name: "停车场",
          id: 12,
          icon: "",
          show: false,
        },
      ],
    };
  },
  methods: {
    baiduMap(map) {
      this.map = map;
      this.point = new BMap.Point(116.404, 39.915); // 创建点坐标
      this.map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    },
    operation(list, index) {
      list.show = !list.show;
      console.log(list.id);
      switch (list.id) {
        case 0: //危化品车辆
          this.Cameras(list.show);
          break;
        case 1: //危化品卡口
          this.dangBayonet(list.show);
          break;
        case 2: //应急卡口
          this.emergency(list.show);
          break;
        case 3: //普通卡口
          this.ordinary(list.show);
          break;
        case 4: //办卡中心
          this.cardProcessingCenter(list.show);
          break;
        case 5: //企业围栏
          this.paths(list.show);
          break;
        case 6: //枪机
          this.gunMachine(list.show);
          break;
        case 7: //区域
          this.region(list.show);
          break;
        case 8: //球机
          this.domeCameras(list.show);
          break;
        case 9: //危化品车道
          this.vehicleLane(list.show);
          break;
        case 10: //分级管理
          console.log("分级管理");
          break;
        case 11: //园区边界
          this.boundary(list.show);
          break;
        case 12: //停车场
          this.parkingLot(list.show);
          break;
        default:
          console.log("zuohhou");
      }
    },
    //危化品车辆
    Cameras(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是危化品车辆", {
          offset: new BMap.Size(2, -2),
        });
        this.$api.dept.Cameras().then((res) => {
          mark(this.map, res.data, this.whpcl.markers, infoWindow, Sdangerous);
        });
      } else {
        removeMarker(this.map, this.whpcl.markers);
      }
    },
    //危化品卡口
    dangBayonet(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是危化品卡口", {
          offset: new BMap.Size(2, -5),
        });
        this.$api.dept.dangBayonet().then((res) => {
          mark(this.map, res.data, this.whpkk.markers, infoWindow, dangBayonet);
        });
      } else {
        removeMarker(this.map, this.whpkk.markers);
      }
    },
    //应急卡口
    emergency(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是应急卡口", {
          offset: new BMap.Size(2, -5),
        });
        this.$api.dept.emergency().then((res) => {
          mark(this.map, res.data, this.yjkk.markers, infoWindow, emergency);
        });
      } else {
        removeMarker(this.map, this.yjkk.markers);
      }
    },
    //普通卡口
    ordinary(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是普通卡口", {
          offset: new BMap.Size(2, -5),
        });
        this.$api.dept.ordinary().then((res) => {
          mark(this.map, res.data, this.ptkk.markers, infoWindow, ordinary);
        });
      } else {
        removeMarker(this.map, this.ptkk.markers);
      }
    },
    //办卡中心
    cardProcessingCenter(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是办卡中心", {
          offset: new BMap.Size(2, -5),
        });
        let size = new BMap.Size(32, 32);
        this.$api.dept.cardProcessingCenter().then((res) => {
          mark(
            this.map,
            res.data,
            this.bkzx.markers,
            infoWindow,
            cardProcessingCenter,
            size
          );
        });
      } else {
        removeMarker(this.map, this.bkzx.markers);
      }
    },
    //企业围栏
    paths(judge) {
      if (judge) {
        this.$api.dept.paths().then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            polyline(
              this.map,
              res.data[i],
              this.qywl.polylineMuster,
              "#fff",
              "dashed",
              "3",
              "0.8"
            );
          }
        });
      } else {
        console.log(this.qywl.polylineMuster);
        removeMarker(this.map, this.qywl.polylineMuster);
      }
    },
    //枪机
    gunMachine(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是枪机", {
          offset: new BMap.Size(2, -5),
        });
        let size = new BMap.Size(32, 32);
        this.$api.dept.gunMachine().then((res) => {
          mark(
            this.map,
            res.data,
            this.qj.markers,
            infoWindow,
            gunMachine,
            size
          );
        });
      } else {
        removeMarker(this.map, this.qj.markers);
      }
    },
    //区域
    region(judge) {
      if (judge) {
        this.$api.dept.region().then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            Polygon(
              this.map,
              res.data[i],
              this.qy.PolygonsMuster,
              "#fff",
              "red",
              "solid",
              "3",
              "0.8"
            );
          }
        });
      } else {
        removeMarker(this.map, this.qy.PolygonsMuster);
      }
    },
    //球机
    domeCameras(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是球机", {
          offset: new BMap.Size(2, -5),
        });
        let size = new BMap.Size(28, 28);
        this.$api.dept.domeCameras().then((res) => {
          mark(
            this.map,
            res.data,
            this.qiuj.markers,
            infoWindow,
            domeCameras,
            size
          );
        });
      } else {
        removeMarker(this.map, this.qiuj.markers);
      }
    },
    //危化品车道
    vehicleLane(judge) {
      if (judge) {
        this.$api.dept.vehicleLane().then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            polyline(
              this.map,
              res.data[i].PIXEL,
              this.whpcd.polylineMuster,
              "green",
              "solid",
              "5",
              "0.8"
            );
          }
        });
      } else {
        removeMarker(this.map, this.whpcd.polylineMuster);
      }
    },
    //园区边界
    boundary(judge) {
      if (judge) {
        this.$api.dept.boundary().then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            polyline(
              this.map,
              res.data[i],
              this.yqbj.polylineMuster,
              "orange",
              "dashed",
              "3",
              "0.8"
            );
          }
        });
      } else {
        removeMarker(this.map, this.yqbj.polylineMuster);
      }
    },
    //停车场
    parkingLot(judge) {
      if (judge) {
        let infoWindow = new BMap.InfoWindow("这是停车场", {
          offset: new BMap.Size(2, -5),
        });
        let size = new BMap.Size(48, 48);
        this.$api.dept.parkingLot().then((res) => {
          mark(
            this.map,
            res.data,
            this.tcc.markers,
            infoWindow,
            parkingLot,
            size
          );
        });
      } else {
        removeMarker(this.map, this.tcc.markers);
      }
    },
  },
};
</script>
<style scoped>
.polyline {
  height: 100vh;
  width: 100%;
}
.menubox {
  width: 70vw;
  height: 120px;
  position: absolute;
  bottom: 20px;
  left: 15vw;
  background: rgba(7, 60, 236, 0.3);
  border-radius: 20px;
}
.menu {
  display: flex;
  justify-content: space-around;
}
.menu > li {
  list-style: none;
  width: 20px;
  color: #fff;
  background: rgba(86, 49, 172, 1);
  border-radius: 10px;
  height: 100px;
  margin: 5px 0;
  padding: 5px 2px;
  line-height: 14px;
  font-size: 14px;
  cursor: pointer;
  z-index: 999;
}
.menu > .choice {
  list-style: none;
  width: 20px;
  color: rgb(111, 111, 112);
  font-weight: 800;
  background: rgba(5, 32, 51, 0.5);
  border-radius: 10px;
  height: 100px;
  margin: 5px 0;
  padding: 5px 2px;
  line-height: 14px;
  font-size: 14px;
  cursor: pointer;
}
.left {
  left: 30px;
}
.right {
  right: 30px;
}
.posit {
  position: absolute;
  height: 90%;
  width: 240px;
  bottom: 5%;
}
.side {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
.side > li {
  list-style: none;
  width: 100%;
  height: 22%;
  border-radius: 20px;
  color: #fff;
  line-height: 30px;
  padding-top: 10px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgba(7, 60, 236, 0.1) 0%,
    rgba(7, 60, 236, 0.2) 10%,
    rgba(7, 60, 236, 0.3) 20%,
    rgba(7, 60, 236, 0.4) 30%,
    rgba(7, 60, 236, 0.5) 60%,
    rgba(7, 60, 236, 0.4) 70%,
    rgba(7, 60, 236, 0.3) 80%,
    rgba(7, 60, 236, 0.2) 90%,
    rgba(7, 60, 236, 0.1) 100%
  );
}
</style>