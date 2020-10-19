<template>
  <div class="map">
    <!-- @click="getPoint" 
     :mapClick="false"自带弹窗
    -->
    <baidu-map
      class="map"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="15"
      :scroll-wheel-zoom="true"
      :mapClick="false"
      @click="getPoint"
      @ready="ready"
    >
      <!-- //地图切换 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
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

      <!-- 图标:dragging="true" -->
      <div v-for="(mark, ind) in markers" :key="ind">
        <bm-marker
          :position="mark.position"
          animation="BMAP_ANIMATION_BOUNCE"
          :icon="mark.icon"
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
    </baidu-map>
    <div class="menubox">
      <ul class="menu">
        <li
          v-for="(item, index) in muen"
          :key="index"
          :class="{ choice: item.show }"
          @click="operation(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import login from "../assets/logo.png"
export default {
  name: "mapvgl",
  data() {
    return {
      markers: [],
      ind: "",
      markerind: "",
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
          name: "电子围栏",
          id: 4,
          icon: "",
          show: false,
        },
        {
          name: "园区边界",
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
          name: "企业",
          icon: "",
          id: 7,
          show: false,
        },
        {
          name: "区域",
          id: 8,
          icon: "",
          show: false,
        },
        {
          name: "球机",
          id: 9,
          icon: "",
          show: false,
        },
        {
          name: "立杆",
          id: 10,
          icon: "",
          show: false,
        },
        {
          name: "报警主机",
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
        {
          name: "危化品专用车道",
          id: 13,
          icon: "",
          show: false,
        },
      ],
    };
  },
  methods: {
    getPoint(e) {
      if (e.overlay) {
        // 存在覆盖物退出
        this.markers[this.markerind].windowshow = true;
      } else {
        if (this.muen[this.ind].id == 9) {
          if (this.muen[this.ind].show) {
            let lat = e.point.lat;
            let lng = e.point.lng;
            this.markers.push({
              position: { lat, lng },
              icon: this.muen[this.ind].icon,
              windowshow: false,
            });
          } else {
            console.log(this.muen[this.ind].show);
          }
        }else{
          console.log(e)
        }
      }
    },
    //地图颜色
    ready({ BMap, map }) {
      map.setMapStyle({ style: "midnight" });
      console.log(BMap);
    },
    //点击菜单
    operation(item, index) {
      item.show = !item.show;
      this.ind = index
      if (item.id == 9) {
        if (item.show) {
          this.ind = index;
          item.icon = {
            url: "http://developer.baidu.com/map/jsdemo/img/fox.gif",
            size: { width: 300, height: 157 },
          };
        } else {
          this.markers = [];
        }
      }else{
        console.log(item)
      }

      // this.icon = new BMap.Icon(login, new BMap.Size(30, 30));
      // var point = new BMap.Point(109.49926175379778, 36.60449676862417);
      // map.centerAndZoom(point, 13);
      // var icon = new BMap.Icon(login,new BMap.Size(30,30));
      // var marker = new BMap.Marker(point,{icon:icon}); // 创建标注
      // map.addOverlay(marker); // 将标注添加到地图中
      // var circle = new BMap.Circle(point, 6, {
      //   strokeColor: "Red",
      //   strokeWeight: 6,
      //   strokeOpacity: 1,
      //   Color: "Red",
      //   fillColor: "#f03",
      // });
      // map.addOverlay(circle);
    },
    inforight(item, index) {
      console.log(item, index);
    },
    //信息窗体关闭
    infoWindowClose(item) {
      item.windowshow = false;
    },
    //信息窗体打开
    infoWindowOpen(item, ind) {
      this.markerind = ind;
      item.windowshow = true;
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
  font-size: 12px;
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
  font-size: 12px;
  cursor: pointer;
}
</style>
