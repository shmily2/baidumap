<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
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
    // 118.255915,34.337669 新沂经济开发区
    //118.735574,32.01023南京
    var initialLon = 118.255915;
    var lat = 34.337669;
    var height = 180.0;
    // // 创建viewer实例
    let viewer = new Cesium.Viewer("cesiumContainer", {
      // 需要进行可视化的数据源的集合
      animation: false, // 是否显示动画控件
      debugShowFramesPerSecond: true,
      shouldAnimate: true,
      homeButton: true, // 是否显示Home按钮
      fullscreenButton: true, // 是否显示全屏按钮
      baseLayerPicker: false, // 是否显示图层选择控件
      geocoder: true, // 是否显示地名查找控件
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: true, // 是否显示点击要素之后显示的信息
      requestRenderMode: true, // 启用请求渲染模式
      terrainProvider: Cesium.createWorldTerrain(),
      sceneModePicker: true, //是否显示投影方式控件  三维/二维
      navigationInstructionsInitiallyVisible: false,
      scene3DOnly: true, // 每个几何实例将只能以3D渲染以节省GPU内存
      sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
      selectionIndicator: true, //是否显示指示器组件

      //去水印
      // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      //   url:
      //     "http://t0.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=8746f4bf8eb216c8f98d7f454090db1e",
      //   format: "tiles",
      //   tileMatrixSetID: "c",
      //   tilingScheme: new Cesium.GeographicTilingScheme(),
      //   tileMatrixLabels: [
      //     "1",
      //     "2",
      //     "3",
      //     "4",
      //     "5",
      //     "6",
      //     "7",
      //     "8",
      //     "9",
      //     "10",
      //     "11",
      //     "12",
      //     "13",
      //     "14",
      //     "15",
      //     "16",
      //     "17",
      //     "18"
      //   ],
      //   layer: "tdtImgAnnoLayer",
      //   style: "default",
      //   show: false
      // }),
      fullscreenElement: document.body // 全屏时渲染的HTML元素 暂时没发现用处
    });
    viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        url:
          "http://t0.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=8746f4bf8eb216c8f98d7f454090db1e",
        format: "tiles",
        tileMatrixSetID: "c",
        tilingScheme: new Cesium.GeographicTilingScheme(),
        tileMatrixLabels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18"
        ],
        layer: "tdtImgAnnoLayer",
        style: "default",
        show: false
      })
    );

    // //天地图
    // viewer.imageryLayers.addImageryProvider(
    //   new Cesium.WebMapTileServiceImageryProvider({
    //     url:
    //       "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=8746f4bf8eb216c8f98d7f454090db1e"
    //   })
    // );

    //显示帧速(FPS)
    viewer.scene.debugShowFramesPerSecond = true;


    var tileset = new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(40866)
    });

    viewer.scene.primitives.add(tileset);
    viewer.zoomTo(tileset);
        // 将经纬度转换为世界坐标
    var target = Cesium.Cartesian3.fromDegrees(initialLon, lat, height);
    var offset = new Cesium.Cartesian3(-70.06, -68.64, 6.0908);
    viewer.scene.camera.lookAt(target, offset);
    // let redBox = viewer.entities.add({
    //   name: "Red box with black outline",
    //   position: Cesium.Cartesian3.fromDegrees(118.255915, 34.337669),
    //   box: {
    //     dimensions: new Cesium.Cartesian3(200.0, 200.0),
    //     material: Cesium.Color.RED.withAlpha(0.3),
    //     outline: true,
    //     outlineColor: Cesium.Color.BLACK
    //   }
    // });
    // viewer.zoomTo(viewer.entities);
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
<style lang='scss' >
// 去除版权信息
.cesium-widget-credits {
  display: none !important; /*去除Cesium默认版权信息*/
}
</style>
