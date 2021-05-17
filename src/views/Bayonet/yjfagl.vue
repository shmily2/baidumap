<template>
  <div class="parkingLot">
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
        <myform
          :formConfig="editConfig"
          :ruleForm="editruleForm"
          :rules="editrules"
          :formName="editformName"
          ref="fromedit"
        >
          <div slot="zanwei" style="width:420px!important;height:0px;"></div>
          <div slot="Basics" class="title">
            <span class="font">预警等级设置</span>
            <!-- <mytable :maxheight="320" :table="djtable"></mytable> -->
          </div>
        </myform>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
import { isnumber } from "../../utils/validate";
export default {
  name: "parkingLot",
  data() {
    var vaildContent = (rule, value, callback) => {
      if (!value) {
        callback();
      } else {
        if (!isnumber(value)) {
          callback(new Error("请输入大于0的整数或者2位以内的小数"));
        } else {
          callback();
        }
      }
    };
    let that = this;
    return {
      type: "",
      row: "",
      tadatabox: [
        {
          id: 1,
          STATUS: "园区入侵",
          NAME: "50",
          VARSNAME: "红外摄像头",
          IP: "118.304903,34.339782",
          CONTENT: "192.168.3.12",
          time: "2021-05-07 16:27:08",
          yleftvalue: 51,
          yrightvalue: 70,
          eleftvalue: 71,
          erightvalue: 100,
          sleftvalue: 101,
          srightvalue: 120,
          fleftvalue: 121,
          frightvalue: 140
        },
        {
          id: 2,
          STATUS: "人员信息异常",
          NAME: "20",
          VARSNAME: "AI摄像头",
          IP: "118.315983,34.307073",
          CONTENT: "192.168.1.14",
          time: "2021-05-08 13:55:57",
          yleftvalue: 21,
          yrightvalue: 40,
          eleftvalue: 41,
          erightvalue: 60,
          sleftvalue: 61,
          srightvalue: 80,
          fleftvalue: 81,
          frightvalue: 100
        },
        {
          id: 3,
          STATUS: "人员行为异常",
          NAME: "30",
          VARSNAME: "湿度感应器",
          IP: "118.3176,34.306804",
          CONTENT: "192.160.0.27",
          time: "2021-04-29 15:11:40",
          yleftvalue: 31,
          yrightvalue: 50,
          eleftvalue: 51,
          erightvalue: 70,
          sleftvalue: 71,
          srightvalue: 90,
          fleftvalue: 91,
          frightvalue: 110
        },
        {
          id: 4,
          STATUS: "车辆行为异常",
          NAME: "40",
          VARSNAME: "气压感应器",
          IP: "118.318247,34.306417",
          CONTENT: "192.0.0.167",
          time: "2021-04-29 13:56:24",
          yleftvalue: 41,
          yrightvalue: 60,
          eleftvalue: 61,
          erightvalue: 80,
          sleftvalue: 81,
          srightvalue: 100,
          fleftvalue: 101,
          frightvalue: 120
        }
      ],
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "预警设备",
            placeholder: "请输入预警设备",
            prop: "LEV",
            disabled: false,
            click: () => {}
          },
          {
            type: "select",
            label: "预警类型",
            placeholder: "预警类型",
            levels: false, //仅显示最后一级
            filterable: true, //可搜索
            prop: "TYPE",
            props: {
              expandTrigger: "clik"
            },
            click: () => {},
            options: [
              {
                label: "园区入侵",
                value: "园区入侵"
              },
              {
                label: "一般",
                value: "一般"
              },
              {
                label: "灯杆报警",
                value: "灯杆报警"
              },
              {
                label: "短信报警",
                value: "短信报警"
              }
            ]
          }
        ]
      },
      searchruleForm: {
        LEV: "",
        TYPE: ""
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
          { label: "设备类型", prop: "VARSNAME", width: "180" },
          { label: "设备IP", prop: "CONTENT", width: "180" },
          { label: "设备位置", prop: "IP", width: "180" },
          { label: "预警名称", prop: "STATUS", width: "180" },
          { label: "预警阈值", prop: "NAME", width: "180" },
          {
            type: "button",
            label: "操作",
            width: "200",
            options: [
              {
                label: "查看",
                type: "info",
                disabled: false,
                click: (index, row) => {
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "预警数值管理详情";
                  this.$nextTick(() => {
                    Object.assign(this.editruleForm, row);
                    for (var i = 0; i < this.editConfig.fromdata.length; i++) {
                      if (this.editConfig.fromdata[i].type == "select") {
                        this.editConfig.fromdata[i].type = "input";
                      }
                      this.editConfig.fromdata[i].disabled = true;
                    }
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
                  this.row = row;
                  this.dialogData.outertitle = "预警数值管理编辑";
                  this.dialogData.footshow = true;
                  this.dialogData.outerVisible = true;
                  this.$nextTick(() => {
                    Object.assign(this.editruleForm, row);
                    for (var i = 0; i < this.editConfig.fromdata.length; i++) {
                      if (
                        this.editConfig.fromdata[i].options &&
                        this.editConfig.fromdata[i].type == "input"
                      ) {
                        this.editConfig.fromdata[i].type = "select";
                      }
                      this.editConfig.fromdata[i].disabled = false;
                    }
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
          that.table.currentPage = Number(val);
          that.paging();
          console.log(`当前页: ${val}`);
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
        outertitle: "预警设备信息修改",
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
              this.$refs.fromedit.resetForm();
              this.dialogData.outerVisible = false;
            }
          }
        ]
      },
      editConfig: {
        fromdata: [
          {
            type: "input",
            prop: "VARSNAME",
            max: 20,
            disabled: false,
            placeholder: "请输入设备类型",
            label: "设备类型",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "CONTENT",
            disabled: false,
            placeholder: "请输入设备IP",
            label: "设备IP",
            click: () => {}
          },
          {
            type: "input",
            prop: "IP",
            disabled: false,
            placeholder: "请输入设备位置",
            label: "设备位置",
            click: () => {}
          },
          {
            type: "input",
            prop: "STATUS",
            disabled: false,
            placeholder: "请输入预警名称",
            label: "预警名称",
            click: () => {}
          },
          {
            type: "input",
            prop: "NAME",
            max: 20,
            disabled: false,
            placeholder: "请输入预警阈值",
            label: "预警阈值",
            readonly: false, //只读,
            click: () => {}
          },
          { type: "slot", slot: "zanwei ", disabled: false },
          { type: "slot", slot: "Basics", disabled: false, class: true },
          {
            type: "input",
            prop: "yleftvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入左区间值",
            label: "一级：",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "yrightvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入右区间值",
            label: " ",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "eleftvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入左区间值",
            label: "二级：",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "erightvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入右区间值",
            label: " ",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "sleftvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入左区间值",
            label: "三级：",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "srightvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入右区间值",
            label: " ",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "fleftvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入左区间值",
            label: "四级：",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "frightvalue",
            max: 20,
            disabled: false,
            placeholder: "请输入右区间值",
            label: " ",
            readonly: false, //只读,
            click: () => {}
          }
        ]
      },
      editruleForm: {
        NAME: "",
        VARSNAME: "",
        CONTENT: "",
        STATUS: "",
        IP: "",
        yleftvalue: "",
        yrightvalue: "",
        eleftvalue: "",
        erightvalue: "",
        sleftvalue: "",
        srightvalue: "",
        fleftvalue: "",
        frightvalue: ""
      },
      editrules: {
        NAME: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        yleftvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        yrightvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        eleftvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        erightvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        sleftvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        srightvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        fleftvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ],
        frightvalue: [
          {
            validator: vaildContent,
            trigger: "blur"
          }
        ]
      },
      editformName: "editfrom"
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
      console.log(this.maxheight);
    });
  },
  methods: {
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
    onSubmit() {
      this.$refs.fromdemo.submitForm();
    },
    onReset() {
      this.$refs.fromdemo.resetForm();
    },
    //新增
    add(type) {
      this.type = "add";
      this.dialogData.outertitle = "预警数值管理新增";
      this.dialogData.outerVisible = true;
      this.dialogData.footshow = true;
      this.$nextTick(() => {
        for (var i = 0; i < this.editConfig.fromdata.length; i++) {
          if (
            this.editConfig.fromdata[i].options &&
            this.editConfig.fromdata[i].type == "input"
          ) {
            this.editConfig.fromdata[i].type = "select";
          }
          this.editConfig.fromdata[i].disabled = false;
        }
        this.$refs.fromedit.resetForm();
      });
    },
    addsubmit() {
      if (this.$refs.fromedit.submitForm()) {
        let data = Object.assign({}, this.editruleForm);
        data.id = new Date();
        this.tadatabox.unshift(data);
        this.dialogData.outerVisible = false;
      }
    },
    editsubmit() {
      let data = Object.assign({}, this.editruleForm);
      for (var i = 0; i < this.tadatabox.length; i++) {
        if (this.tadatabox[i].id == this.row.id) {
          this.editruleForm.id = new Date();
          let data = Object.assign({}, this.editruleForm);
          this.tadatabox.splice(i, 1, data);
        }
      }
      this.dialogData.outerVisible = false;
    },
    seesubmit() {}
  }
};
</script>
<style scoped lang="scss">
.parkingLot {
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
}
</style>