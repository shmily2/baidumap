<template>
  <div clas="polyline">
    <div class="map" id="allmap"></div>
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
export default {
  name: "Bmap",
  data() {
    return {
      map: "",
      point: "",
      markers: [],
      markespos: [],
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
    this.baiduMap();
  },
  methods: {
    async baiduMap() {
      this.map = new BMap.Map("allmap");
      this.point = new BMap.Point(116.41056739311784, 39.9440377812521); // 创建点坐标
      this.map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.setMapStyle({ style: "midnight" }); //地图风格
      //球机
      await this.$api.dept.Cameras().then((res) => {
        this.markers = res.data;
      });
      var infoWindow = new BMap.InfoWindow("这是提示信息");

    },
  },
};
</script>
<style scoped>
.map {
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
/* 去除百度地图版权那行字 和 百度logo */
.baidumap > .BMap_cpyCtrl {
  display: none !important;
}
.baidumap > .anchorBL {
  display: none !important;
}
</style>