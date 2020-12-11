<template>
	<div id="app">
		<div class="left font  pos">
			<p>left</p>
			<button @click="shex">摄像头</button>
			<button @click="detail">企业详情</button>
		</div>
		<div id="map_container"></div>
		<div class="right font bxshow pos">
			<p>rigth</p>
			<button @click="twoD">2D</button>
			<button @click="threeD">3D</button>
		</div>
		<transition name="fade">
			<div class="boxshow pos center" v-if="showpage">
				<header>
					<img src="../assets/close.png" class="pic" style="opacity: 0;" />
					<h1>企业详情</h1>
					<div class="pic" @click="close">x</div>
				</header>
				<div class="pagebody" >
					<div>企业名称:&nbsp;{{company.name}}</div>
					<div>企业颜色:&nbsp;{{company.color}}</div>
					<div>企业高度:&nbsp;{{company.height}}</div>
				</div>
			</div>
		</transition>
        </div>
</template>
	<script>
export default {
			name:"mvp",
			data(){
                return{
                //地图
				map: '',
				//图层管理器
				view: '',
				//柱状图层
				shaperLayer: '',
				layer: '',
				//文字图层
				textLayer: '',
				colors: ["#cc0808", "#f0f511", "#119ff5", "#11f51a"],
				names: ["第一粉", "蟹肉煲", "桃花醉", "翠精轩", "壹间堂", "姜堰楼", "桂福陇", "晋家门"],
				polygons: [],//柱状图层数据
				polygonsT: [],//柱状叠加
				textdata: [],//文字图层数据
				icondata: [],//图标图层数据
				flag: true,
				title: 80,
				showpage: false,
				zoomflag: true,
				company:{
					name:'',
					height:'',
					color:'',
				}
                }
			},
			created() {
			},
			mounted() {
				let that = this
				this.viewcentent();
			},
			methods: {
				animation() {
					this.map._heading += 0.1;
					if (this.map._heading > 360) {
						this.map._heading = 0;
					}
					if (this.flag) {
						this.map._tilt += 0.03;
						if (this.map._tilt > 80) {
							this.flag = false;
						}
					} else {
						this.map._tilt -= 0.03;
						if (this.map._tilt < 70) {
							this.flag = true;
						}
					}
					this.map._zoom -= 0.003;
					if (this.map._zoom < 15) {
						this.map._zoom = 15;
					}
					this.map.setHeading(this.map._heading);
					this.map.setTilt(-this.map._tilt);
					this.map.zoomUnits = Math.pow(2, 15)
					requestAnimationFrame(this.animation);
				},
				viewcentent() {
					let that = this;
					// 1. 创建地图实例
					this.map = this.$initMap({
						tilt: 80,
						heading: -90,
						//whiteStyle白purpleStyle灰，
						// style: darkStyle,

						style: [
							//背景色
							{
								elementType: "geometry",
								featureType: "background",
								stylers: {
									color: "#f8c669ff"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "poilabel",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "road",
								stylers: {
									visibility: "off"
								}
							},
							//路
							{
								elementType: "geometry.fill",
								featureType: "road",
								stylers: {
									color: "#768c78ff"
								}
							},
							{
								elementType: "geometry.stroke",
								featureType: "road",
								stylers: {
									color: "#ffffff00"
								}
							},
							//公路填满
							{
								elementType: "geometry.fill",
								featureType: "highway",
								stylers: {
									color: "#768c78ff"
								}
							},
							//(打、击等的)一下
							{
								elementType: "geometry.stroke",
								featureType: "highway",
								stylers: {
									color: "#ffffff00"
								}
							},
							//国家公路
							{
								elementType: "geometry.fill",
								featureType: "nationalway",
								stylers: {
									color: "#768c78ff"
								}
							},
							{
								elementType: "geometry.stroke",
								featureType: "nationalway",
								stylers: {
									color: "#ffffff00"
								}
							},
							//省公路
							{
								elementType: "geometry.fill",
								featureType: "provincialway",
								stylers: {
									color: "#768c78ff"
								}
							},
							{
								elementType: "geometry.stroke",
								featureType: "provincialway",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "geometry",
								featureType: "railway",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "highwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "highwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "nationalwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "nationalwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "provincialwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "provincialwaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "tertiarywaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "tertiarywaysign",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "subwaylabel",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "subwaylabel",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.text.fill",
								featureType: "poilabel",
								stylers: {
									color: "#80868dff"
								}
							},
							{
								elementType: "labels.text.stroke",
								featureType: "poilabel",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "labels.text.fill",
								featureType: "districtlabel",
								stylers: {
									color: "#71767aff"
								}
							},
							{
								elementType: "labels.text.stroke",
								featureType: "districtlabel",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "labels",
								featureType: "poilabel",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "airportlabel",
								stylers: {
									visibility: "on"
								}
							},
							{
								elementType: "labels.icon",
								featureType: "airportlabel",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels.text.fill",
								featureType: "airportlabel",
								stylers: {
									color: "#80868dff"
								}
							},
							{
								elementType: "labels.text.stroke",
								featureType: "airportlabel",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "labels",
								featureType: "manmade",
								stylers: {
									visibility: "off"
								}
							},
							//背景
							{
								elementType: "geometry",
								featureType: "manmade",
								stylers: {
									color: "#f8c669ff"
								}
							},
							{
								elementType: "labels",
								featureType: "water",
								stylers: {
									visibility: "off"
								}
							},
							//水
							{
								elementType: "geometry",
								featureType: "water",
								stylers: {
									color: "#bde3fdff"
								}
							},
							{
								elementType: "geometry",
								featureType: "green",
								stylers: {
									color: "#122228ff",
									visibility: "off"
								}
							},
							{
								elementType: "geometry",
								featureType: "subway",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "highway",
								stylers: {
									visibility: "on"
								}
							},
							{
								elementType: "labels.text.stroke",
								featureType: "highway",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "labels.text.fill",
								featureType: "highway",
								stylers: {
									color: "#5f6468ff"
								}
							},
							{
								elementType: "labels",
								featureType: "town",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "labels",
								featureType: "village",
								stylers: {
									visibility: "off"
								}
							},
							{
								elementType: "geometry",
								featureType: "highway",
								stylers: {
									weight: 3
								}
							},
							//城市公路
							{
								elementType: "geometry.fill",
								featureType: "cityhighway",
								stylers: {
									color: "#768c78ff"
								}
							},
							{
								elementType: "geometry.fill",
								featureType: "arterial",
								stylers: {
									color: "#768c78ff"
								}
							},
							{
								elementType: "geometry.stroke",
								featureType: "arterial",
								stylers: {
									color: "#ffffff00"
								}
							},
							{
								elementType: "geometry.stroke",
								featureType: "cityhighway",
								stylers: {
									color: "#ffffff00"
								}
							},
						],
						showControls: true,
						center: [106.541075, 29.564519],
						skyColors: [
							// 地面颜色
							'rgba(226, 237, 248, 0)',
							// 天空颜色
							'rgba(189, 227, 253, 1)'
						],
						zoom: 17,
					});
					console.log(this.map)
					//上下滚动时的具体处理函数
					window.onmousewheel = document.onmousewheel = that.wheel;//W3C
					// 2. 创建MapVGL图层管理器 enableFulltimeSpotClick enableIconClick enableResizeOnCenter  fixCenterWhenPinch  showControls restrictCenter  preserveDrawingBuffer
					that.view = new that.$mapvgl.View({
						map: that.map,
					});
			
						//https://mapv.baidu.com/gl/examples/static/chongqing.json
					fetch('./static/chongqing.json').then(function (rs) {
						return rs.json();
					}).then(function (rs) {
						that.boxdata = rs;
						that.polygons = [];
						that.textdata = [];
						var len = that.boxdata.length;
						for (var i = 0; i < len; i++) {
							var line = that.boxdata[i];
							var polygon = [];
							var polygontt = [];
							var pt = [line[1] * 512, line[2] * 512];
							for (var j = 3; j < line.length; j += 2) {
								pt[0] += line[j] / 100 / 2;
								pt[1] += line[j + 1] / 100 / 2;
								polygon.push([pt[0], pt[1]]);
								let pting = pt[0]
								polygontt.push([pting, pt[1]])
							}
							// //柱状图层数据
							// that.polygons.push({
							// 	geometry: {
							// 		type: 'Polygon',
							// 		coordinates: [polygon]
							// 	},
							// 	properties: {
							// 		height: 9,
							// 		metadata: line[0] / 2,
							// 		color: that.colors[that.randomNum(0, 3)],
							// 	}
							// });
							//柱状叠加
							that.polygonsT.push({
								geometry: {
									type: 'Polygon',
									coordinates: [polygontt]
								},
								properties: {
									height: line[0] / 2,
									metadata: line[0] / 2,
									color: that.colors[that.randomNum(0, 3)],
									text: that.names[that.randomNum(0, 7)],
								}
							});
							//文字图层数据
							that.textdata.push({
								geometry: {
									type: 'Polygon',
									coordinates: [polygon[0][0], polygon[0][1]]
								},
								properties: {
									text: that.names[that.randomNum(0, 7)],
								}
							})
							//摄像头图层数据
							if (polygon.length > 3) {
								that.icondata.push({
									geometry: {
										type: 'Point',
										coordinates: [polygon[3][0], polygon[3][1]]
									},
									// properties: {
									//     icon: markers[Math.floor(Math.random() * markers.length)]
									// }
								});
							} else {
								that.icondata = [];
							}

						}
						//3.实例化柱状图层
						that.shaperLayer = new that.$mapvgl.ShapeLayer({
							color: 'rgba(194, 147, 75, 0.8)', // 柱状图颜色
							style: 'windowAnimation',
							opacity: 1,
							enablePicked: true, // 是否可以拾取
							selectedIndex: -1, // 选中项
							selectedColor: '#ee1111', // 选中项颜色
							autoSelect: true, // 根据鼠标位置来自动设置选中项
							onClick: (e) => { // 点击事件
								if (e.dataItem != undefined) {
									event.stopPropagation()
									console.log(e)
									that.company.name=e.dataItem.properties.text
									that.company.color=e.dataItem.properties.color
									that.company.height=e.dataItem.properties.height
									that.showpage = true;
								}

								// var label = new BMapGL.Label("欢迎使用百度地图JSAPI WebGL版本", opts);
							},
						});
						//4.实例化文字
						that.textLayer = new that.$mapvgl.TextLayer({
							fontFamily: 'Songti SC',
							enablePicked: true,
							autoSelect: true,
							selectedColor: '#000', // 选中项颜色
							color: '#333',
							fontWeight: 800,
							fontSize: 12,
						});
						//实例化图标
						that.layer = new that.$mapvgl.IconLayer({
							width: 100 / 10,
							height: 153 / 10,
							offset: [10, -30],
							icon: 'https://mapv.baidu.com/gl/examples/images/marker.png',
							enablePicked: true, // 是否可以拾取
							selectedIndex: -1, // 选中项
							selectedColor: '#ff0000', // 选中项颜色
							autoSelect: true, // 根据鼠标位置来自动设置选中项
							onClick: (e) => { // 点击事件
								if (e.dataItem != undefined) {
									event.stopPropagation()
									that.showpage = true;
									console.log(e)
								}
							},
							onDblClick: e => {
								console.log('double click', e);
								console.log(that.map)
								that.map.zoomLevel = that.map.getZoom() + 1
								console.log(that.map.getZoom())

							},
							onRightClick: e => {
								console.log('right click', e);
							},
						});
						// 5. 关联图层与数据，享受震撼的可视化效果
						that.shaperLayer.setData(that.polygons);
						that.shaperLayer.setData(that.polygonsT);
						that.textLayer.setData(that.textdata);
						that.layer.setData(that.icondata);
						// //添加图层
						that.view.addLayer(that.shaperLayer);
						that.view.addLayer(that.textLayer);
						that.view.addLayer(that.layer);
						//that.map.setDefaultCursor('default');
						// //循环改变地图视角
						requestAnimationFrame(that.animation);
					 });
				},
				close() {
					this.showpage = false;
				},
				shex() {
					this.view.removeLayer(this.shaperLayer);
					this.view.removeLayer(this.textLayer);
					this.view.addLayer(this.layer);
				},
				detail() {
					this.view.addLayer(this.shaperLayer);
					this.view.addLayer(this.textLayer);
					this.view.removeLayer(this.layer);
				},
				throttle(method, context) {
					let lastTime = 0;
					return function () {
						const nowTime = Date.now();
						// 如果时间差小于time，就不执行
						if (nowTime - lastTime < time) return;
						fn.apply(this, arguments);
						lastTime = nowTime;
					}
				},
				//统一处理滚轮滚动事件
				wheel(event) {
					var delta = 0;
					if (!event) event = window.event;
					if (event.wheelDelta) {//IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
						delta = event.wheelDelta / 120;
						if (window.opera) delta = -delta;//因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
					}
					if (delta) {
						if (delta < 0) {
							//向下滚动
							this.zoomflag = this.map.getZoom() == 10 ? false : this.map.zoomLevel = this.map.getZoom() - 0.5;
						} else {
							//向上滚动
							this.zoomflag = this.map.getZoom() == 21 ? false : this.map.zoomLevel = this.map.getZoom() + 0.5;
						}
					}
					window.addEventListener('DOMMouseScroll', this.throttle(this.wheel, 100));
				},
				twoD() {
					this.view.removeLayer(this.shaperLayer);
					this.view.removeLayer(this.textLayer);
					this.polygons.map(item => {
						item.properties.height = 0
					})
					this.shaperLayer.setData(this.polygons);
					this.textLayer.setData(this.textdata);
					this.view.addLayer(this.shaperLayer);
					this.view.addLayer(this.textLayer);
				},
				threeD() {
					this.view.removeLayer(this.shaperLayer);
					this.view.removeLayer(this.textLayer);
					this.polygons.map(item => {
						item.properties.height = item.properties.metadata
					})
					this.shaperLayer.setData(this.polygons);
					this.textLayer.setData(this.textdata);
					this.view.addLayer(this.shaperLayer);
					this.view.addLayer(this.textLayer);
				},
				//生成从minNum到maxNum的随机数
				randomNum(minNum, maxNum) {
					switch (arguments.length) {
						case 1:
							return parseInt(Math.random() * minNum + 1, 10);
							break;
						case 2:
							return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
							break;
						default:
							return 0;
							break;
					}
				}
			}
		}
	</script>
	<style scoped lang="scss">
		/* html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		} */

		#map_container,
		#app {
			width: 100%;
			height: 100%;
			margin: 0;
		}

		.pos {
			position: absolute;
			width: 16.6%;
			min-width: 300px;
			height: 90%;
			text-align: center;
			border: 1px solid rgb(42, 65, 51);
			background: rgba(255, 255, 255, 0.6);
			top: 5%;
			z-index: 100;
			pointer-events: auto;
		}

		.left {
			left: 20px;
			z-index: 100;
			background: rgba(40, 83, 103, .4);
		}

		.boxshow {
			box-shadow: inset -3px 0 6px rgba(40, 83, 103, .4), inset 0 -3px 6px rgba(40, 83, 103, .4), inset 3px 0 6px rgba(40, 83, 103, .4), inset 0 3px 6px rgba(40, 83, 103, .4);
		}

		.right {
			right: 20px;
			z-index: 100;
			background: rgba(40, 83, 103, .4);
		}

		.font {
			color: #fff;
			font-size: 30px;
			text-shadow: -2px 0 2px rgba(0, 240, 255, .5), 0 -2px 2px rgba(0, 240, 255, .5), 2px 0 2px rgba(0, 240, 255, .5), 0 2px 2px rgba(0, 240, 255, .5);
			padding-top: 20px;
		}

		.center {
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 40%;
			min-width: 550px;
			height: 50%;
			min-height: 480px;
			border-radius: 10px;
			background: rgba(4, 25, 47, .9)
		}

		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
		}

		h1 {
			color: #fff;
			font-weight: 600;
		}

		.pic {
			height: 40px;
			width: 40px;
			line-height: 40px;
			font-size: 40px;
			color: #fff;
			cursor: pointer;
		}

		.fade-enter-active {
			animation: bounce-in 1s;
		}

		.fade-leave-active {
			animation: bounce-in 1s reverse;
		}

		@keyframes bounce-in {
			0% {
				transform: scale(0);
			}

			100% {
				transform: scale(1);
			}
		}
		.pagebody{
			padding:0 30px;
			color:#fff;
			display:flex;
			flex-direction: column;
			align-items:flex-start;
			font-size: 18px;
		}
	</style>