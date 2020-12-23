<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "cesiumContainer",
  data() {
    return {
      viewer: "",
      tileset: ""
    };
  },
  mounted() {
    //103.37324413479338, 29.544684360197113
    var initialLon = 103.37324413479338;
    var lat = 29.544684360197113;
    var height = 10.0;
    // // 创建viewer实例
    let viewer = new Cesium.Viewer("cesiumContainer", {
      // 需要进行可视化的数据源的集合
      animation: false, // 是否显示动画控件
      shouldAnimate: true,
      homeButton: true, // 是否显示Home按钮
      fullscreenButton: true, // 是否显示全屏按钮
      baseLayerPicker: true, // 是否显示图层选择控件
      geocoder: true, // 是否显示地名查找控件
      timeline: false, // 是否显示时间线控件
      sceneModePicker: false, // 是否显示投影方式控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: true, // 是否显示点击要素之后显示的信息
      requestRenderMode: true, // 启用请求渲染模式
      scene3DOnly: false, // 每个几何实例将只能以3D渲染以节省GPU内存
      sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
      fullscreenElement: document.body // 全屏时渲染的HTML元素 暂时没发现用处
    });
    // 去除版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none";
    // 天地图矢量底图
    viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        url:
          "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=4d133cc2c1d12cea409bb954d40f02c9",
        layer: "tdtVecBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMaps"
      })
    );
    // 天地图矢量标注图层
    viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        url:
          "http://t6.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=4d133cc2c1d12cea409bb954d40f02c9",
        layer: "tdtImgAnnoLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible"
      })
    );

    // 将经纬度转换为世界坐标
    var target = Cesium.Cartesian3.fromDegrees(initialLon, lat, height);
    var offset = new Cesium.Cartesian3(-70.06, -68.64, 6.0908);
    viewer.scene.camera.lookAt(target, offset);
  }
};
</script>

<style lang='scss' scoped>
#cesiumContainer {
  height: calc(100vh - 270px);
  width: calc(100% - 870px);
  margin: auto;
  margin-top: 125px;
}
</style>
