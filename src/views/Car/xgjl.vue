<template>
  <div class="vehicleLane">
    <div>
      <myform
        :formConfig="searchConfig"
        :ruleForm="searchruleForm"
        :rules="searchrules"
        :formName="searchformName"
        ref="fromdemo"
      ></myform>
    </div>
    <div class="footer">
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="success" @click="onReset">重置</el-button>
    </div>
    <div id="table" ref="table">
      <mytable :maxheight="maxheight" :table="table"></mytable>
    </div>
    <mydialog :dialogData="dialogData">
      <div slot="outername" class="account">
        <div id="allmap"></div>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { mark, polyline } from "../../utils/map";
import address from "../../assets/address.png"; //枪机
import shartpic from "../../assets/start.png";
import endpic from "../../assets/eng.png";
export default {
  name: "vehicleLane",
  data() {
    return {
      type: "",
      markers: [],
      polylineMuster: [],
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "人员",
            placeholder: "请输入人员",
            prop: "LEV",
            max: 20,
            disabled: false
          },
          {
            type: "input",
            label: "地址",
            max: 20,
            placeholder: "请输入地址",
            prop: "TYPE"
          },
          {
            type: "input",
            label: "棒号属性",
            max: 20,
            placeholder: "请输入棒号属性",
            prop: "shuxing"
          },
          {
            type: "input",
            label: "钮号",
            max: 20,
            placeholder: "请输入钮号",
            prop: "number"
          }
        ]
      },
      searchruleForm: {
        LEV: "",
        TYPE: "",
        shuxing: "",
        number: ""
      },
      searchrules: {},
      searchformName: "searchfrom",
      maxheight: 300,
      table: {
        pagination: true,
        currentRow: null,
        currentPage: 1,
        pageSize: 10,
        total: 0,
        tableLabel: [
          { label: "序号", type: "index", prop: "index" },
          {
            label: "钮号",
            prop: "NAME",
            width: "200",
            click: true
          },
          { label: "地址", prop: "VARSNAME", width: "180" },
          { label: "人员", prop: "preson", width: "180" },
          { label: "巡检时间", prop: "time", width: "220" },
          { label: "棒号属性", prop: "number", width: "180" },
          { label: "事件", prop: "event", width: "180" },
          {
            type: "button",
            label: "操作",
            width: "200",
            options: [
              {
                label: "选点查路线",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "巡更路线查看";
                  this.baiduMap(index, row);
                }
              },
              {
                label: "查看当天路线",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "巡更路线查看";
                  this.dopolyline(index, row);
                }
              }
            ]
          }
        ],
        tableData: [
          {
            id: 1,
            NAME: "172.16.49.21",
            VARSNAME: "22",
            CONTENT: "118.320942,34.319888",
            preson: "小李",
            time: "2018-07-06 12：13：14",
            polyline: [
              { lat: 39.920672, lng: 116.392466 },
              { lat: 39.917407, lng: 116.395915 }
            ],
            number: "",
            event: ""
          }
        ],
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
          console.log(val);
        }
      },
      dialogData: {
        footshow: true,
        outertype: "big",
        outertitle: "巡更记录详情查看",
        outerVisible: false,
        outername: "outername",
        center: true
      }
    };
  },
  created() {
    this.table.total = this.table.tableData.length;
    this.$nextTick(() => {
      this.maxheight = this.$refs.table.clientHeight - 120;
    });
  },
  methods: {
    baiduMap(index, row) {
      this.$nextTick(() => {
        this.map = new BMap.Map("allmap");
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        let lng = Number(row.CONTENT.split(",")[0]);
        let lat = Number(row.CONTENT.split(",")[1]);
        let infoWindow = new BMap.InfoWindow(row.NAME, {
          offset: new BMap.Size(2, -5)
        });
        let size = new BMap.Size(32, 32);
        let add = [
          {
            lng: lng,
            lat: lat
          }
        ];
        this.point = new BMap.Point(lng, lat); // 创建点坐标
        this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
        this.map.openInfoWindow(infoWindow, this.point);
        mark(this.map, add, this.markers, infoWindow, address, size);
      });
    },
    dopolyline(index, row) {
      this.$nextTick(() => {
        this.map = new BMap.Map("allmap");
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        this.point = new BMap.Point(row.polyline[0].lng, row.polyline[0].lat); // 创建点坐标
        this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
        let startlng = Number(row.polyline[0].lng);
        let startlat = Number(row.polyline[0].lat);
        let endlng = Number(row.polyline[1].lng);
        let endlat = Number(row.polyline[1].lat);
        var myP1 = new BMap.Point(startlng, startlat); //起点
        var myP2 = new BMap.Point(endlng, endlat); //终点
        let size = new BMap.Size(32, 32);
        this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
        var driving = new BMap.DrivingRoute(this.map, {
          renderOptions: { map: this.map, autoViewport: true }
        });
        driving.search(myP1, myP2);
        //设置起终点图标
        driving.setMarkersSetCallback(function(result) {
          result[0].marker.setIcon(shartpic);
          result[1].marker.setIcon(endpic);
        });
      });
    },
    onSubmit() {
      this.$refs.fromdemo.submitForm();
    },
    onReset() {
      this.$refs.fromdemo.resetForm();
    }
  }
};
</script>
<style scoped lang="scss">
.vehicleLane {
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  .footer {
    width: 100%;
    text-align: center;
  }
  .addbut {
    text-align: right;
    margin: 20px 20px 0 0;
  }
  #table {
    flex: 1;
    padding: 10px 0;
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  #allmap {
    height: 420px;
    width: 100%;
  }
}
</style>