// 新建图标
//map 地图
//markespos 图标地址集合
//markers生成的百度地图图标合集用作删除
//infoWindow 点击图标弹出框内容
//img  图标
//size 图标大小
export function mark(map, markespos, markers, infoWindow, img, size = new BMap.Size(26, 26)) {
    markespos.map((addr) => {
        let poist = new BMap.Point(addr.lng, addr.lat); // 创建点坐标
        var myIcon = new BMap.Icon(img, size);
        let marker = new BMap.Marker(poist, { icon: myIcon }); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        //提示信息
        // 鼠标移上标注点要发生的事
        marker.addEventListener("mouseover", function () {
            this.openInfoWindow(infoWindow);
        });
        // 鼠标移开标注点要发生的事
        marker.addEventListener("mouseout", function () {
            this.closeInfoWindow(infoWindow);
        });
        markers.push(marker)
    });
}



//map 地图
//Polylines 每个围栏数据
//polylineMuster 折线
//strokeColor颜色
//strokeStyle样式？虚线：实线
//strokeWeight线的宽度
//strokeOpacity线透明度
//新增折线
export function polyline(map, Polylines, polylineMuster, strokeColor = "blue", strokeStyle = "solid", strokeWeight = "2", strokeOpacity = "0.5") {
    let Polyline = [];
    Polylines.map(item => {
        Polyline.push(new BMap.Point(item.lng, item.lat))
    })
    let line = new BMap.Polyline(Polyline, { strokeStyle: strokeStyle, strokeColor: strokeColor, strokeWeight: strokeWeight, strokeOpacity: strokeOpacity });   //创建折线
    map.addOverlay(line);   //增加折线
    polylineMuster.push(line)
}




// strokeColor:"red",      //边线颜色。  
//             fillColor:"red",        //填充颜色。当参数为空时，圆形将没有填充效果。  
//             strokeWeight: 3,        //边线的宽度，以像素为单位。  
//             fillOpacity: 0.3,       //填充的透明度，取值范围0 - 1。  
//             strokeStyle: 'solid'    //边线的样式，solid或dashed。  
//   }, 
//新增多边形
export function Polygon(map, Polygons, PolygonsMuster, strokeColor = "red", fillColor = "red", strokeStyle = "solid", strokeWeight = "2", fillOpacity = "0.5") {
    let Polygon = [];
    Polygons.map(item => {
        Polygon.push(new BMap.Point(item.lng, item.lat))
    })
    let Poly = new BMap.Polygon(Polygon, { strokeStyle: strokeStyle, strokeColor: strokeColor, fillColor: fillColor, strokeWeight: strokeWeight, fillOpacity: fillOpacity });   //创建多边形
    //创建右键菜单
    var markerMenu = new BMap.ContextMenu();
    markerMenu.addItem(new BMap.MenuItem('删除', removeMarker.bind(map, Poly)));
    Poly.addContextMenu(markerMenu);
    map.addOverlay(Poly);   //增加多边形
    PolygonsMuster.push(Poly)
}

//删除图标 ,折线，多边形合集
export function removeMarker(map, markers) {
    //删除合集
    if (markers.length) {
        for (var i = 0; i < markers.length; i++) {
            map.removeOverlay(markers[i]);
        }
    }else{
        //单个删除
        this.removeOverlay(map);
    }
}