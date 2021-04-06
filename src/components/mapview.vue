<template>
  <div class="map">
    <div id="allmap"></div>
  </div>
</template>
<script>
export default {
  name: "mapview",
  data() {
    return {
      map: ""
    };
  },
  created() {
    this.$nextTick(() => {
      this.map = new BMap.Map("allmap");
      this.$emit("baiduMap", this.map);
    });
  },
  methods: {
    showInfo(e) {
      console.log(e.point.lat);
      console.log(e.point.lng);
    },
    //地图添加点击事件
    addMapEvent() {
      this.map.addEventListener("click", this.showInfo);
    },
    //移除地图点击事件
    removeMapEvent() {
      this.map.removeEventList("click", this.showInfo);
    }
  }
};
</script>
<style scoped>
#allmap {
  height: 100%;
  width: 100%;
  margin: auto;
}
/* 去除百度地图版权那行字 和 百度logo */
.baidumap > .BMap_cpyCtrl {
  display: none !important;
}
#allmap > .anchorBL {
  display: none !important;
}
</style>