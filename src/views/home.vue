<template>
  <div class="indexpage">
    <div class="polyline">
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
      <div class="qyhead">
        <div class="weatherright">
          <router-link
            :to="{ name: 'mainPage' }"
            tag="div"
            class="but scale-img"
          >
            <img src="../assets/getInto.png" />
            <p>{{$t("navbar.getInto")}}</p>
          </router-link>
          <router-link :to="{ name: 'login' }" tag="div" class="but scale-img">
            <img src="../assets/Logout.png" />
            <p>{{$t("navbar.logOut")}}</p>
          </router-link>
        </div>
        <div class="weather">
          <div class="weatherleft">
            <img :src="wea_img" />
            <p>{{ weatherData.wea }}</p>
            <p>{{ weatherData.tem2 }} ~ {{ weatherData.tem1 }}℃</p>
          </div>
          <div class="weatherleft">
            <p>{{ weatherData.date }}</p>
            <p>{{ weatherData.week }}</p>
            <p>{{ hourtime }}</p>
          </div>
        </div>
      </div>
      <div class="operation">
        <div class="left">
          <ul class="side">
            <li @click="Security">
              <div class="title">
                <span>人员入园管理</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="echartflex">
                <div id="Security"></div>
              </div>
            </li>
            <li @click="Car">
              <div class="title">
                <span>车辆运输管理</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="echartflex">
                <div id="Car"></div>
              </div>
            </li>
            <li @click="education">
              <div class="title">
                <span>安全教育</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="echartflex">
                <div id="education"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="side">
            <li @click="Car">
              <div class="title">
                <span>卡口管理系统</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="echartflex">
                <div id="Bayonet"></div>
              </div>
            </li>
            <li>
              <div class="title">
                <span>重点位置视频监控</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="echartflex">
                <ul>
                  <li v-for="(vide, index) in video" :key="index">
                    <video
                      controls
                      autoplay
                      loop
                      style="
                        border-radius: 5px;
                        width: 100%;
                        border: 1px solid #fff;
                      "
                    >
                      <source
                        src="https://linkingvision.com/download/h5stream/video/h5ssample.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h5>{{ vide.name }}</h5>
                  </li>
                </ul>
              </div>
            </li>
            <li @click="maintenance">
              <div class="title">
                <span>运维管理系统</span>
                <!-- <div class="img"></div> -->
              </div>
              <div class="maintenance">
                <div class="headtitle">
                  <ul class="title">
                    <li>人员</li>
                    <li>时间</li>
                    <li>电脑ip</li>
                  </ul>
                  <div id="review_box">
                    <ul
                      id="inner-container"
                      @mouseover="move"
                      @mouseout="out"
                      class="trans"
                    >
                      <li
                        class="text"
                        v-for="(list, index) in maintenancepre"
                        :key="index"
                      >
                        <div>{{ list.name }}</div>
                        <div>{{ list.time }}</div>
                        <div>{{ list.ip }}</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mock from "../mock/index";
import axios from "axios";
import { mark, removeMarker, polyline, Polygon } from "../utils/map";
import { Doughnut, Columnarvar, Rose } from "../utils/echarts";
import Sdangerous from "../assets/Sdangerous.png"; //危化品车辆
import dangBayonet from "../assets/dangBayonet.png"; //危化品卡口
import emergency from "../assets/emergency.png"; //应急卡口
import ordinary from "../assets/ordinary.png"; //普通卡口
import cardProcessingCenter from "../assets/cardProcessingCenter.png"; //办卡中心
import gunMachine from "../assets/gunMachine.png"; //枪机
import domeCameras from "../assets/domeCameras.png"; //球机
import parkingLot from "../assets/parkingLot.png"; //停车场
import { datetime } from "../utils/time";
export default {
  name: "Bmap",
  data() {
    return {
      timer: null, // 定时器名称
      wea_img: "",
      hourtime: "",
      xue: require("../assets/xue.png"),
      lei: require("../assets/lei.png"),
      shachen: require("../assets/shachen.png"),
      wu: require("../assets/wu.png"),
      bingbao: require("../assets/bingbao.png"),
      yun: require("../assets/yun.png"),
      yu: require("../assets/yu.png"),
      yin: require("../assets/yin.png"),
      qing: require("../assets/qing.png"),
      weatherData: "",
      video: [
        { name: "南门出入口" },
        { name: "北门出入口" },
        { name: "边界点A" },
        { name: "边界点B" },
        { name: "重要机房点A" },
        { name: "重要机房点B" },
      ],
      map: "", //地图初始化
      point: "", //地图中心点
      maintenancepre: [], //运维管理
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
  mounted() {
    this.Security();
    this.Car();
    this.Bayonet();
    this.education();
    this.maintenance();
    this.weather();
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
    //人员
    Security() {
      let Security = this.$echarts.init(document.getElementById("Security"));
      let data = {
        legend: ["企业人员", "危化品从业人员", "危化品驾驶员"],
        information: [
          { value: 335, name: "企业人员" },
          { value: 220, name: "危化品从业人员" },
          { value: 160, name: "危化品驾驶员" },
        ],
        EChart: Security,
      };
      Doughnut(data);
    },
    //车辆运输
    Car() {
      let Car = this.$echarts.init(document.getElementById("Car"));
      let data = {
        data0: [7, 15, 22, 29, 64, 24, 32],
        Xdata: ["9点", "10点", "11点", "12点", "13点", "14点", "15点"],
        dataT: [7, 16, 24, 32, 68, 29, 34],
        nameO: "入园",
        nameT: "出园",
        EChart: Car,
      };
      Columnarvar(data);
    },
    //卡口管理服务
    Bayonet() {
      let Bayonet = this.$echarts.init(document.getElementById("Bayonet"));
      let data = {
        EChart: Bayonet,
        name: "直接访问",
        data: [
          {
            value: 335,
            name: "直接访问",
            itemStyle: {
              color: "#33f8b3",
            },
          },
          {
            value: 310,
            name: "邮件营销",
            itemStyle: {
              color: "#47b3fe",
            },
          },
          {
            value: 274,
            name: "联盟广告",
            itemStyle: {
              color: "#fffc37",
            },
          },
          {
            value: 235,
            name: "视频广告",
            itemStyle: {
              color: "#ffa500",
            },
          },
          {
            value: 400,
            name: "搜索引擎",
            itemStyle: {
              color: "#1DE516",
            },
          },
        ],
      };
      Rose(data);
    },
    //安全教育
    education() {
      let education = this.$echarts.init(document.getElementById("education"));
      let data = {
        EChart: education,
        // name: "食堂工作",
        data: [
          {
            value: 60,
            name: "食堂工作",
            itemStyle: {
              color: "#1DE516",
            },
          },
          {
            value: 90,
            name: "安保人员",
            itemStyle: {
              color: "#fffc37",
            },
          },
          {
            value: 50,
            name: "清洁人员",
            itemStyle: {
              color: "#33f8b3",
            },
          },
          {
            value: 125,
            name: "教师",
            itemStyle: {
              color: "#47b3fe",
            },
          },
        ],
      };
      Rose(data);
    },
    //运维管理
    maintenance() {
      this.$api.dept.maintenance().then((res) => {
        this.maintenancepre = res.data;
        this.timer = setInterval(() => {
          this.maintenancepre.push(this.maintenancepre[0]);
          this.maintenancepre.shift();
        }, 2000);
      });
    },
    move() {
      clearInterval(this.timer);
      this.timer = null;
    },
    out() {
      this.timer = setInterval(() => {
        this.maintenancepre.push(this.maintenancepre[0]);
        this.maintenancepre.shift();
      }, 2000);
    },
    //天气
    weather() {
      axios
        .get("https://v0.yiketianqi.com/api", {
          params: {
            vue: 1,
            appid: "11149282",
            appsecret: "jWblPH7l",
            city: "南京",
            version: "v61",
            province: "江苏",
          },
        })
        .then((res) => {
          this.weatherData = res.data;
          this.wea_img = require("../assets/" +
            this.weatherData.wea_img +
            ".png");
          setInterval(() => {
            this.hourtime = datetime();
          }, 1000);
        });
    },
  },
};
</script>
<style scoped>
.indexpage {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(8, 48, 74, 1);
}
.polyline {
  width: 100%;
}
.menubox {
  width: calc(100% - 870px);
  height: 120px;
  position: absolute;
  bottom: 20px;
  left: 435px;
  background: rgba(22, 22, 23, 0.3);
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
  background: rgba(22, 22, 51, 0.5);
  border-radius: 10px;
  height: 100px;
  margin: 5px 0;
  padding: 5px 2px;
  line-height: 14px;
  font-size: 14px;
  cursor: pointer;
}
.left {
  position: absolute;
  left: 10px;
  top: 120px;
  height: calc(100% - 126px);
}
.right {
  position: absolute;
  right: 10px;
  top: 120px;
  height: calc(100% - 126px);
}
.posit {
  position: absolute;
  width: 100%;
  bottom: 0px;
  right: 0px;
}
.qyhead {
  position: absolute;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  background: url("../assets/header.png") no-repeat 100% 100%;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.weather {
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
.weatherleft {
  display: flex;
  align-content: center;
  margin-right: 30px;
}
.weatherright {
  display: flex;
}
.weatherleft > img {
  padding-right: 10px;
}
.weatherleft > p {
  padding-right: 20px;
}
.scale-img:hover img {
  transform: scale3d(1.3, 1.3, 1.3);
}
.side {
  display: flex;
  flex-direction: column;
  height: calc(100% - 30px);
  width: 420px;
  justify-content: space-around;
}
.side > li {
  list-style: none;
  width: 100%;
  height: 32%;
  border-top-left-radius: 60px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  z-index: 99;
  background: linear-gradient(
    to bottom,
    rgba(22, 22, 34, 0.1) 0%,
    rgba(22, 22, 34, 0.2) 10%,
    rgba(22, 22, 34, 0.3) 20%,
    rgba(22, 22, 34, 0.4) 30%,
    rgba(22, 22, 34, 0.5) 60%,
    rgba(22, 22, 34, 0.4) 70%,
    rgba(22, 22, 34, 0.3) 80%,
    rgba(22, 22, 34, 0.2) 90%,
    rgba(22, 22, 34, 0.1) 100%
  );
}
.side > li > .title {
  margin-top: 20px;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.title > .img {
  height: 32px;
  width: 32px;
  background: url("../assets/WBS-out.png") no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}
.title > .img:hover {
  background: url("../assets/WBS.png") no-repeat;
}
.title > span {
  padding-left: 40px;
  color: rgb(28, 185, 255);
}
.echartflex {
  width: 100%;
  height: 100%;
}
.echartflex > ul {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.echartflex > ul > li {
  width: 32%;
  height: calc(50% - 5px);
  border-radius: 5px;
  box-sizing: border-box;
  list-style-type: none;
  /* border: 1px solid #fff; */
}
#Security,
#Bayonet,
#education,
#Car {
  width: 100%;
  height: 100%;
}
.maintenance {
  width: 100%;
  height: calc(100% - 52px);
}
.headtitle {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.but {
  cursor: pointer;
  padding-left: 20px;
}
.but > p {
  font-size: 14px;
  width: 58px;
}
.title {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.title > li {
  list-style: none;
  width: 33%;
  text-align: center;
  color: #9fa89d;
}
#review_box {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
#comment {
  height: 100%;
  width: 100%;
}
#inner-container > li {
  width: 100%;
  height: 30px;
  display: flex;
}
#inner-container > li > div {
  list-style: none;
  width: 33%;
  text-align: center;
}
</style>