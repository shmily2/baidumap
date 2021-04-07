// 新建图标
//map 地图
//markups 图标地址集合
//markers生成的百度地图图标合集用作删除
//infoWindow 点击图标弹出框内容
//img  图标
//size 图标大小
export function mark(map, markups, markers, infoWindow, img, size = new BMap.Size(26, 26)) {
    markups.map((addr) => {
        let posit = new BMap.Point(addr.lng, addr.lat); // 创建点坐标
        var myIcon = new BMap.Icon(img, size);
        let marker = new BMap.Marker(posit, { icon: myIcon }); // 创建标注
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

//新增多边形模块
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

//路数
export function trajectory(lushun,map,points,icon,speed,defaultContent){
        let Polygons = [];
        points.map(item => {
        Polygons.push(new BMap.Point(item.lng, item.lat));
        });
        lushun= new BMapLib.LuShu(map, Polygons, {
                defaultContent:defaultContent,//"从天安门到百度大厦"
                autoView: true, //是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                icon: icon,
                speed: speed,
                enableRotation: true, //是否设置marker随着道路的走向进行旋转
                landmarkPoise: []
             });
    return  lushun
}

