<template>
  <div class="drivingTrack">
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
    <div class="addbut">
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="mini"
        plain
        @click="add"
        >新增</el-button
      >
    </div>
    <div id="table" ref="table">
      <mytable :maxheight="maxheight" :table="table"></mytable>
    </div>
    <mydialog :dialogData="dialogData">
      <div slot="outername" class="account">
        <mapview @baiduMap="baiduMap" class="drivingTrackmap"></mapview>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
import { mark, polyline, removeMarker } from "../../utils/map";
import shartpic from "../../assets/start.png";
import endpic from "../../assets/eng.png";
export default {
  name: "drivingTrack",
  data() {
    return {
      type: "",
      map: "",
      point: "",
      location: [], //图标
      polylineMuster: [], //线
      lushu: "",
      points: [
        { lng: 116.363944, lat: 39.90384, of: "inner" },
        { lng: 116.360495, lat: 39.871951, of: "inner" }
      ],
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "路线名称",
            placeholder: "请输入路线名称",
            prop: "Route",
            max: 20,
            disabled: false
          }
        ]
      },
      searchruleForm: {
        Route: ""
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
            label: "路线名称",
            prop: "Route",
            minWidth: "200",
            click: true
          },
          { label: "起点", prop: "startPoint", minWidth: "180" },
          { label: "终点", prop: "entdPoint", minWidth: "180" },
          { label: "创建时间", prop: "Creationtime", minWidth: "180" },
          {
            type: "button",
            label: "操作",
            width: "100",
            options: [
              {
                label: "查看",
                type: "info",
                disabled: false,
                click: (index, row) => {
                  this.type = "see";
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "巡更路线管理详情";
                  this.$nextTick(() => {
                    this.routerlink(row);
                  });
                }
              },
              {
                label: "编辑",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.type = "edit";
                  this.index = index;
                  this.dialogData.outertitle = "巡更路线管理编辑";
                  this.dialogData.footshow = true;
                  this.dialogData.outerVisible = true;
                  this.routerlink(row);
                }
              },
              {
                label: "删除",
                type: "danger",
                disabled: false,
                click: (index, row) => {
                  this.table.tableData.splice(index, 1);
                }
              }
            ]
          }
        ],
        tableData: [
          {
            Route: "线路名称77778844877",
            time: "2021-05-08",
            startPoint: "118.304903,34.339782",
            entdPoint: "118.489248,34.283806",
            Creationtime: "2021-05-07 13:35:27"
          },
          {
            Route: "414141",
            time: "2021-05-06",
            startPoint: "118.315983,34.307073",
            entdPoint: "118.316271,34.303882",
            Creationtime: "2021-05-06 15:30:17"
          },
          {
            Route: "1412223",
            time: "2021-05-06",
            startPoint: "118.3176,34.306804",
            entdPoint: "118.357659,34.303693",
            Creationtime: "2021-04-30 08:53:47"
          },
          {
            Route: "12",
            time: "2021-04-29",
            startPoint: "118.318247,34.306417",
            entdPoint: "118.317852,34.30424",
            Creationtime: "2021-05-07 14:04:31"
          },
          {
            Route: "测试112",
            time: "2021-04-29",
            startPoint: "118.316235,34.30755",
            entdPoint: "118.317097,34.305522",
            Creationtime: "2021-04-29 14:29:11"
          },
          {
            Route: "66666",
            time: "2021-04-01",
            startPoint: "118.317025,34.306894",
            entdPoint: "118.327913,34.304926",
            Creationtime: "2021-04-29 14:13:26"
          },
          {
            Route: "3442133123",
            time: "2021-04-29",
            startPoint: "118.316343,34.308265",
            entdPoint: "118.334129,34.30591",
            Creationtime: "2021-04-29 13:09:26"
          },
          {
            Route: "TTTT46778443",
            time: "2021-04-29",
            startPoint: "118.322164,34.307251",
            entdPoint: "118.331147,34.299945",
            Creationtime: "2021-04-29 13:07:23"
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
        outertitle: "巡更路线详情查看",
        outerVisible: false,
        outername: "outername",
        center: true,
        footer: [
          {
            title: "提交",
            type: "primary",
            click: () => {
              if (this.type == "add") {
                this.addsubmit();
              } else if (this.type == "edit") {
                this.editsubmit();
              } else if (this.typ == "see") {
                this.seesubmit();
              }
            }
          },
          {
            title: "取消",
            type: "",
            click: () => {
              this.dialogData.outerVisible = false;
            }
          }
        ]
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
    baiduMap(map) {
      this.map = map;
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.point = new BMap.Point(116.363944, 39.90384); // 创建点坐标
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
    },
    routerlink(row) {
      let that = this;
      that.$nextTick(() => {
        //轨迹
        let shart = [new BMap.Point(116.363944, 39.90384)]; //开始坐标
        let end = [new BMap.Point(116.360495, 39.871951)]; //结束坐标
        let enableDragging = "";
        if (that.type == "see") {
          enableDragging = false;
        } else {
          enableDragging = true;
        }
        mark(
          that.map,
          shart,
          that.location,
          "",
          shartpic,
          new BMap.Size(32, 32),
          enableDragging
        ); //起点图标
        mark(
          that.map,
          end,
          that.location,
          "",
          endpic,
          new BMap.Size(32, 32),
          enableDragging
        ); //终点图标
        polyline(
          that.map,
          that.points,
          that.polylineMuster,
          "red",
          "solid",
          "3",
          "0.8"
        ); //线路
      });
    },
    onSubmit() {
      this.$refs.fromdemo.submitForm();
    },
    onReset() {
      this.$refs.fromdemo.resetForm();
    },
    //新增
    add(type) {
      this.type = "add";
      this.dialogData.outertitle = "巡更路线管理新增";
      this.dialogData.outerVisible = true;
      this.dialogData.footshow = true;
      let that = this;
      that.$nextTick(() => {
        if (that.location.length > 0) {
          that.map.clearOverlays();
        }
      });
    },
    addsubmit() {
      var myDate = new Date();
      var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
      this.dialogData.outerVisible = false;
    },
    editsubmit() {
      this.dialogData.outerVisible = false;
    }
  }
};
</script>
<style scoped lang="scss">
.drivingTrack {
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
  .drivingTrackmap {
    height: 420px;
  }
}
</style>