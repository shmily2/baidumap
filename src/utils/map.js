// 新建图标
function mark(map,markers,  infoWindow, ) {
    markers.map((addr) => {
        let poist = new BMap.Point(addr.lng, addr.lat); // 创建点坐标
        let marker = new BMap.Marker(poist); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        console.log(map)
        //提示信息
        // 鼠标移上标注点要发生的事
        marker.addEventListener("mouseover", function () {
            this.openInfoWindow(infoWindow);
        });
        // 鼠标移开标注点要发生的事
        marker.addEventListener("mouseout", function () {
            this.closeInfoWindow(infoWindow);
        });
    });
}
