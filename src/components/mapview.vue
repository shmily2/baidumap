<template>
  <div class="map">
    <div id="allmap"></div>
  </div>
</template>
<script>
export default {
  name: "mapview",
  data(){
    return{
      map:'',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.baiduMap();
    });
  },
  methods: {
    baiduMap() {
      this.map = new BMap.Map("allmap");
      this.map.setMapStyle({ style: "midnight" }); //地图风格
      this.$emit("baiduMap",this.map)
    },
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
     },
  },
};
</script>
<style>
#allmap {
  height: calc(100vh - 270px);
  width: calc(100% - 870px);
  margin:auto;
  margin-top:125px;
}
/* 去除百度地图版权那行字 和 百度logo */
.baidumap > .BMap_cpyCtrl {
  display: none !important;
}
#allmap > .anchorBL {
  display: none !important;
}
</style>