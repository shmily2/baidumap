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
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="路线名称" prop="name">
            <el-input
              v-model="ruleForm.name"
              :disabled="ruleForm.disabled"
            ></el-input>
          </el-form-item>
        </el-form>
        <div id="allmap" class="drivingTrackmap"></div>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
import { mark, polyline, removeMarker } from "../../utils/map";
import shartpic from "../../assets/start.png";
import endpic from "../../assets/eng.png";
import smallstart from "../../assets/smallstart.png";
import smallend from "../../assets/smallend.png";
export default {
  name: "drivingTrack",
  data() {
    let that = this;
    return {
      row:'',
      tadatabox: [
        {
          id: 1,
          Route: "线路名称77778844877",
          time: "2021-05-08",
          startPoint: "118.304903,34.339782",
          entdPoint: "118.489248,34.283806",
          Creationtime: "2021-05-07 13:35:27"
        },
        {
          id: 2,
          Route: "414141",
          time: "2021-05-06",
          startPoint: "118.315983,34.307073",
          entdPoint: "118.316271,34.303882",
          Creationtime: "2021-05-06 15:30:17"
        },
        {
          id: 3,
          Route: "1412223",
          time: "2021-05-06",
          startPoint: "118.3176,34.306804",
          entdPoint: "118.357659,34.303693",
          Creationtime: "2021-04-30 08:53:47"
        },
        {
          id: 4,
          Route: "12",
          time: "2021-04-29",
          startPoint: "118.318247,34.306417",
          entdPoint: "118.317852,34.30424",
          Creationtime: "2021-05-07 14:04:31"
        },
        {
          id: 5,
          Route: "测试112",
          time: "2021-04-29",
          startPoint: "118.316235,34.30755",
          entdPoint: "118.317097,34.305522",
          Creationtime: "2021-04-29 14:29:11"
        },
        {
          id: 6,
          Route: "66666",
          time: "2021-04-01",
          startPoint: "118.317025,34.306894",
          entdPoint: "118.327913,34.304926",
          Creationtime: "2021-04-29 14:13:26"
        },
        {
          id: 7,
          Route: "3442133123",
          time: "2021-04-29",
          startPoint: "118.316343,34.308265",
          entdPoint: "118.334129,34.30591",
          Creationtime: "2021-04-29 13:09:26"
        },
        {
          id: 8,
          Route: "TTTT46778443",
          time: "2021-04-29",
          startPoint: "118.322164,34.307251",
          entdPoint: "118.331147,34.299945",
          Creationtime: "2021-04-29 13:07:23"
        }
      ],
      ruleForm: {
        name: "",
        disabled: false
      },
      rules: {
        name: [
          { required: true, message: "请输入路线名称", trigger: "blur" },
          { max: 20, message: "最多20个字符", trigger: "blur" }
        ]
      },
      type: "",
      driving: "",
      map: "",
      point: "",
      startPoi: "",
      endPoi: "",
      dragPois: [],
      markers: {
        srart: [],
        end: []
      },
      startMarker: null,
      endMarker: null,
      polylineMuster: [], //线
      lushu: "",
      points: "",
      startingpoint: {},
      finishingpoint: {},
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
                  (this.ruleForm.disabled = true),
                    (this.ruleForm.name = row.Route);
                  this.dialogData.outertitle = "巡更路线管理详情";
                  this.baiduMap(index, row);
                }
              },
              {
                label: "编辑",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.type = "edit";
                  this.row = row;
                  this.dialogData.outertitle = "巡更路线管理编辑";
                  this.dialogData.outerVisible = true;
                  this.dialogData.footshow = true;
                  this.startMarker = null;
                  this.endMarker = null;
                  this.ruleForm.name = row.Route;
                  this.ruleForm.disabled = false;
                  let that = this;
                  this.$nextTick(() => {
                    this.map = new BMap.Map("allmap");
                    this.point = new BMap.Point(116.404, 39.915); // 创建点坐标
                    this.map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
                    this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                    let startlng = Number(row.startPoint.split(",")[0]);
                    let startlat = Number(row.startPoint.split(",")[1]);
                    let endlng = Number(row.entdPoint.split(",")[0]);
                    let endlat = Number(row.entdPoint.split(",")[1]);
                    var myP1 = new BMap.Point(startlng, startlat); //起点
                    var myP2 = new BMap.Point(endlng, endlat); //终点
                    this.map.removeEventListener("rightclick", that.mapmenu);
                    this.Search();
                    this.setStarting(myP1);
                    this.setEnd(myP2);
                  });
                }
              },
              {
                label: "删除",
                type: "danger",
                disabled: false,
                click: (index, row) => {
                  for (var i = 0; i < that.tadatabox.length; i++) {
                    if (this.tadatabox[i].id == row.id) {
                      this.tadatabox.splice(i, 1);
                    }
                  }
                }
              }
            ]
          }
        ],
        tableData: [],
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          that.table.pageSize = val;
          that.paging();
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          that.table.currentPage = Number(val);
          that.paging();
        },
        currentChange(row) {
          console.log(row);
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
              }
            }
          },
          {
            title: "取消",
            type: "",
            click: () => {
              this.dialogData.outerVisible = false;
              this.$refs.ruleForm.resetFields();
            }
          }
        ]
      }
    };
  },
  watch: {
    tadatabox: {
      handler(newValue, oldValue) {
        this.paging();
      },
      deep: true
    }
  },
  created() {
    this.paging();
    this.$nextTick(() => {
      this.maxheight = this.$refs.table.clientHeight - 120;
    });
  },
  methods: {
    //假分页
    paging() {
      if (this.table.tableData.length < 2) {
        this.table.currentPage =
          this.table.currentPage > 1 ? this.table.currentPage - 1 : 1;
      }
      if (
        this.tadatabox.length <
        this.table.currentPage * this.table.pageSize
      ) {
        this.table.tableData = this.tadatabox.slice(
          (this.table.currentPage - 1) * this.table.pageSize,
          this.tadatabox.length
        );
      } else {
        this.table.tableData = this.tadatabox.slice(
          (this.table.currentPage - 1) * this.table.pageSize,
          this.table.currentPage * this.table.pageSize
        );
      }
      this.table.total = this.tadatabox.length;
    },
    //查看
    baiduMap(index, row) {
      let that = this;
      this.$nextTick(() => {
        this.map = new BMap.Map("allmap");
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        let startlng = Number(row.startPoint.split(",")[0]);
        let startlat = Number(row.startPoint.split(",")[1]);
        let endlng = Number(row.entdPoint.split(",")[0]);
        let endlat = Number(row.entdPoint.split(",")[1]);
        var myP1 = new BMap.Point(startlng, startlat); //起点
        var myP2 = new BMap.Point(endlng, endlat); //终点
        this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
        this.map.removeEventListener("rightclick", that.mapmenu);
        var driving = new BMap.DrivingRoute(this.map, {
          renderOptions: { map: this.map, autoViewport: true }
        });
        driving.search(myP1, myP2);
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
      this.startMarker = null;
      this.endMarker = null;
      this.ruleForm.name = "";
      this.ruleForm.disabled = false;
      this.$nextTick(() => {
        this.map = new BMap.Map("allmap");
        this.point = new BMap.Point(116.404, 39.915); // 创建点坐标
        this.map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        this.Search();
        let that = this;
        this.map.addEventListener("rightclick", that.mapmenu);
      });
    },
    //右击菜单
    mapmenu(e) {
      var mapmenu = new BMap.ContextMenu();
      mapmenu.addItem(
        new BMap.MenuItem(
          "设为起点",
          e => {
            this.setStarting(e);
          },
          {
            iconUrl: smallstart
          }
        )
      );
      mapmenu.addItem(
        new BMap.MenuItem(
          "设为终点",
          e => {
            this.setEnd(e);
          },
          {
            iconUrl: smallend
          }
        )
      );
      this.map.addContextMenu(mapmenu);
    },
    //设为起点
    setStarting(e) {
      let startPoi = new BMap.Point(e.lng, e.lat);
      var myIcon = new BMap.Icon(shartpic, new BMap.Size(32, 32));
      if (this.startMarker == null) {
        this.startMarker = new BMap.Marker(startPoi, {
          icon: myIcon
        });
        this.startMarker.enableDragging();
        this.map.addOverlay(this.startMarker);
      } else {
        this.transit.clearResults();
        this.map.removeOverlay(this.startMarker);
        this.startMarker = null;
        this.startPoi = startPoi;
        this.startMarker = new BMap.Marker(startPoi, {
          icon: myIcon
        });
        this.startMarker.enableDragging();
        this.map.addOverlay(this.startMarker);
        this.startMarker.setPosition(this.startPoi);
      }
      if (this.endMarker != null) {
        this.searchRoad();
      }
    },
    //设为终点
    setEnd(e) {
      let endPoi = new BMap.Point(e.lng, e.lat);
      if (this.endMarker == null) {
        var myIcon = new BMap.Icon(endpic, new BMap.Size(32, 32));
        this.endMarker = new BMap.Marker(endPoi, {
          icon: myIcon
        });
        this.endMarker.enableDragging();
        this.map.addOverlay(this.endMarker);
      } else {
        this.transit.clearResults();
        this.map.removeOverlay(this.endMarker);
        this.endMarker = null;
        this.endPoi = endPoi;
        var myIcon = new BMap.Icon(endpic, new BMap.Size(32, 32));
        this.endMarker = new BMap.Marker(endPoi, {
          icon: myIcon
        });
        this.endMarker.enableDragging();
        this.map.addOverlay(this.endMarker);
        this.endMarker.setPosition(this.endPoi);
      }
      if (this.startMarker != null) {
        this.searchRoad();
      }
    },
    Search() {
      let that = this;
      that.transit = new BMap.DrivingRoute(that.map, {
        renderOptions: {
          map: that.map,
          enableDragging: true //起终点可进行拖拽
        },
        onSearchComplete: function(results) {
          if (that.transit.getStatus() == BMAP_STATUS_SUCCESS) {
            var a = results.getStart();
            that.startPoi = results.getStart().point;
            that.endPoi = results.getEnd().point;
            var pos = results.getPlan(0).getDragPois();
            that.dragPois = [];
            for (var i = 0; i < pos.length; i++) {
              that.dragPois.push(pos[i].point);
            }
          }
        }
      });
    },
    searchRoad() {
      this.map.removeOverlay(this.startMarker);
      this.map.removeOverlay(this.endMarker);
      this.startPoi = null;
      this.endPoi = null;
      this.dragPois = null;
      this.Search();
      this.transit.search(
        this.startMarker.getPosition(),
        this.endMarker.getPosition()
      );
      this.map.removeOverlay(this.startMarker);
      this.map.removeOverlay(this.endMarker);
    },
    addsubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.startMarker == null || this.endMarker == null) {
            this.$message({
              message: "尚无可保存路线",
              type: "error",
              showClose: true,
              offset: 300
            });
          } else {
            var myDate = new Date();
            var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
            let value = {
              Route: this.ruleForm.name,
              startPoint: this.startPoi.lng + "," + this.startPoi.lat,
              entdPoint: this.endPoi.lng + "," + this.endPoi.lat,
              Creationtime: mytime,
              id: new Date()
            };
            let data = Object.assign({}, value);
            this.tadatabox.unshift(data);
            this.dialogData.outerVisible = false;
          }
        }
      });
    },
    editsubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.startMarker == null || this.endMarker == null) {
            this.$message({
              message: "尚无可保存路线",
              type: "error",
              showClose: true,
              offset: 300
            });
          } else {
            var myDate = new Date();
            var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
            let data = {
              Route: this.ruleForm.name,
              startPoint: this.startPoi.lng + "," + this.startPoi.lat,
              entdPoint: this.endPoi.lng + "," + this.endPoi.lat,
              Creationtime: mytime,
              id:myDate,
            };
            for (var i = 0; i < this.tadatabox.length; i++) {
              if (this.tadatabox[i].id == this.row.id) {
                   this.tadatabox.splice(i, 1, data);
              }
            }
            this.dialogData.outerVisible = false;
          }
        }
      });
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
    height: 360px;
  }
}
</style>
<style lang="scss">
.drivingTrack {
  .el-input.is-disabled .el-input__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #303133;
    cursor: not-allowed;
  }
}
</style>