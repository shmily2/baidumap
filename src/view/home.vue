<template>
  <div class="polyline">
    <!-- @click="getPoint" 
     :mapClick="false"自带弹窗
    -->
    <baidu-map
      class="map"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="13"
      :scroll-wheel-zoom="true"
      :mapClick="false"
      @ready="ready"
    >
      <!-- //地图切换 -->
      <bm-map-type
        :map-types="[
          'BMAP_NORMAL_MAP',
          'BMAP_HYBRID_MAP',
          'BMAP_PERSPECTIVE_MAP',
        ]"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <!-- 右下角定位 -->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <!-- //全景 -->
      <bm-panorama></bm-panorama>
      <!-- 球机 -->
      <div v-for="(mark, ind) in markers.position" :key="'ind,' + ind">
        <bm-marker
          :position="mark"
          :icon="markers.icon"
          :dragging="markers.dragging"
          @click="infoWindowOpen(mark, ind)"
          @rightclick="inforight(mark, ind)"
        >
          <bm-info-window
            :show="mark.windowshow"
            @close="infoWindowClose(mark)"
            @open="infoWindowOpen(mark, ind)"
            >我爱北京天安门</bm-info-window
          >
        </bm-marker>
      </div>

      <!-- 多边形-->
      <bm-polyline
        :path="path"
        :editing="false"
        v-for="(path, inde) of polyline.paths"
        :key="'inde,' + inde"
      ></bm-polyline>
      <!-- 折线 -->
      <bm-polyline
        v-for="(item, ind) of polylinePath"
        :key="ind"
        :path="item"
        stroke-color="red"
        :stroke-opacity="0.8"
        :stroke-weight="4"
        :editing="false"
      ></bm-polyline>
    </baidu-map>

    <!-- 轨迹 -->
    <div>
      <bm-polyline
        :path="polylinePath"
        stroke-color="blue"
        :stroke-opacity="0.5"
        :stroke-weight="3"
        :editing="false"
      ></bm-polyline>
      <bm-marker
        :icon="startIcon"
        :position="{ lng: startMark.lng, lat: startMark.lat }"
      ></bm-marker>
      <bm-marker
        :icon="endIcon"
        :position="{ lng: endMark.lng, lat: endMark.lat }"
      ></bm-marker>
      <bml-lushu
        @stop="stop"
        :path="trackPath"
        :icon="icon"
        :play="play"
        :speed="speed"
        :autoView="autoView"
        :infoWindow="infoWindow"
        :content="content"
        :rotation="rotation"
      >
      </bml-lushu>
    </div>
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
import qiuji from "../assets/qiuji.png";
export default {
  name: "mapvgl",
  data() {
    return {
      polyline: {
        editing: false,
        paths: [],
      },
      polylinePath: [],
      paths: [], //企业围栏
      vehicleLane: [], //危险品车道
      markespos: [], //球机
      markers: {
        icon: {
          url: qiuji,
          size: { width: 32, height: 32 },
        },
        dragging: false,
        position: [],
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
    //围栏
    this.$api.dept
      .paths()
      .then((res) => {
        this.paths = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    //危险品车道
    this.$api.dept.vehicleLane().then((res) => {
      res.data.map((item) => {
        this.vehicleLane.push(item.PIXEL);
      });
    });
    //球机
    this.$api.dept.Cameras().then((res) => {
      res.data.map((list) => {
        list.windowshow = false;
        this.markespos.push(list);
      });
    });
  },
  methods: {
    //地图颜色
    ready({ BMap, map }) {
      map.setMapStyle({ style: "midnight" });
    },
    //点击菜单
    operation(item, index) {
      item.show = !item.show;
      this.ind = index;
      if (item.id == 0) {
        console.log("111");
      } else if (item.id == 5) {
        if (item.show) {
          this.polyline.paths = this.paths;
        } else {
          this.polyline.paths = [];
        }
      } else if (item.id == 8) {
        if (item.show) {
          this.markers.position = this.markespos;
        } else {
          this.markers.position = [];
        }
      } else if (item.id == 9) {
        if (item.show) {
          this.polylinePath = this.vehicleLane;
          console.log(this.polylinePath);
        } else {
          this.polylinePath = [];
        }
      }
    },
    infoWindowClose(mark) {
      mark.windowshow = false;
    },
    infoWindowOpen(mark) {
      mark.windowshow = true;
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
