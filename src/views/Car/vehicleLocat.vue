<template>
  <div class="vehicleLocat">
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
        </myform>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
export default {
  name: "vehicleLocat",
  data() {
    let that = this;
    return {
      type: "",
      row: "",
      tadatabox: [
        {
          id: 1,
          name: "我问问",
          time: "2021-05-08",
          CONTENT: "pm001",
          Creationtime: "2021-05-07 13:38:41",
          personnel: ["朱家贝", "朱志祥", "测33333"],
          starttime: "2021-05-08 00:00:00",
          endtime: "2021-05-08 23:59:59",
          Route: "测试",
          standard: "巡更标准名称1"
        },
        {
          id: 2,
          name: "排班名称",
          time: "2021-05-06",
          CONTENT: "pm001",
          Creationtime: "2021-05-06 15:02:39",
          personnel: ["朱家贝", "测33333"],
          starttime: "2021-05-07 00:00:00",
          endtime: "2021-05-07 23:59:59",
          Route: "小李111",
          standard: "巡更标准名称1"
        },
        {
          id: 3,
          name: "排班名称排班名称1",
          time: "2021-05-06",
          CONTENT: "pm001",
          Creationtime: "2021-05-06 14:52:10",
          personnel: ["朱志祥", "测33333"],
          starttime: "2021-05-07 00:00:00",
          endtime: "2021-05-07 23:59:59",
          Route: "897",
          standard: "巡更标准名称3"
        },
        {
          id: 4,
          name: "排班名称e8888",
          time: "2021-04-29",
          CONTENT: "pm001",
          Creationtime: "2021-04-29 14:39:58",
          personnel: ["朱家贝", "朱志祥", "测33333"],
          starttime: "2021-04-30 00:00:00",
          endtime: "2021-04-30 23:59:59",
          Route: "测试",
          standard: "巡更标准名称2"
        },
        {
          id: 5,
          name: "排班名称",
          time: "2021-04-29",
          CONTENT: "pm001",
          Creationtime: "2021-04-29 14:15:48",
          personnel: ["朱家贝", "朱志祥"],
          starttime: "2021-04-30 00:00:00",
          endtime: "2021-04-30 23:59:59",
          Route: "测试",
          standard: "巡更标准名称2"
        },
        {
          id: 6,
          name: "排班名称1",
          time: "2021-04-01",
          CONTENT: "pm001",
          Creationtime: "2021-04-29 09:27:25",
          personnel: ["朱志祥", "测33333"],
          starttime: "2021-04-30 00:00:00",
          endtime: "2021-04-30 23:59:59",
          Route: "小李111",
          standard: "巡更标准名称3"
        },
        {
          id: 7,
          name: "排班名称!@#",
          time: "2021-04-29",
          CONTENT: "pm001",
          Creationtime: "2021-04-29 09:24:49",
          personnel: ["朱家贝", "测33333"],
          starttime: "2021-04-30 00:00:00",
          endtime: "2021-04-30 23:59:59",
          Route: "897",
          standard: "巡更标准名称1"
        },
        {
          id: 8,
          name: "排班名称",
          time: "2021-04-29",
          CONTENT: "pm001",
          Creationtime: "2021-04-29 09:20:28",
          personnel: ["朱家贝", "朱志祥"],
          starttime: "2021-04-30 00:00:00",
          endtime: "2021-04-30 23:59:59",
          Route: "测试002",
          standard: "巡更标准名称3"
        }
      ],
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "排班名称",
            placeholder: "请输入排班名称",
            prop: "LEV",
            max: 20,
            disabled: false
          },
          {
            type: "date",
            label: "巡更时间",
            placeholder: "请选择巡更时间",
            prop: "TYPE"
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
          {
            label: "排班名称",
            prop: "name",
            minWidth: "200",
            click: true
          },
          { label: "巡更时间", prop: "time", minWidth: "180" },
          { label: "创建人", prop: "CONTENT", minWidth: "180" },
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
                  console.log(row);
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "巡更排班管理详情";
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
                  this.dialogData.outertitle = "巡更排班管理编辑";
                  this.dialogData.footshow = true;
                  this.dialogData.outerVisible = true;
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
                    Object.assign(this.editruleForm, row);
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
                  // this.table.tableData.splice(index, 1);
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
        outertitle: "巡更排班详情查看",
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
            prop: "name",
            max: 20,
            disabled: false,
            placeholder: "请输入排班名称",
            label: "排班名称",
            click: () => {}
          },
          {
            type: "date",
            prop: "time",
            disabled: false,
            placeholder: "请选择时间",
            label: "时间",
            dateFormate: "yyyy-MM-dd",
            click: () => {}
          },
          {
            type: "select",
            prop: "personnel",
            disabled: false,
            filterable: true, //可搜索
            multiple: true, //多选
            placeholder: "请选择巡更人员",
            label: "巡更人员",
            options: [
              {
                label: "朱家贝",
                value: "朱家贝"
              },
              {
                label: "朱志祥",
                value: "朱志祥"
              },
              {
                label: "测33333",
                value: "测33333"
              },
              {
                label: "老谢",
                value: "老谢"
              }
            ],
            click: () => {}
          },
          {
            type: "datetime",
            prop: "starttime",
            disabled: false,
            placeholder: "请选择开始时间",
            label: "开始时间"
          },
          {
            type: "datetime",
            prop: "endtime",
            disabled: false,
            placeholder: "请选择结束时间",
            label: "结束时间"
          },
          {
            type: "select",
            prop: "Route",
            disabled: false,
            placeholder: "请选择巡更路线",
            label: "巡更路线",
            options: [
              {
                label: "测试002",
                value: "测试002"
              },
              {
                label: "897",
                value: "897"
              },
              {
                label: "小李111",
                value: "小李111"
              },
              {
                label: "测试",
                value: "测试"
              }
            ],
            click: () => {}
          },
          {
            type: "select",
            prop: "standard",
            disabled: false,
            placeholder: "请选择巡更标准",
            label: "巡更标准",
            options: [
              {
                label: "巡更标准名称1",
                value: "巡更标准名称1"
              },
              {
                label: "巡更标准名称2",
                value: "巡更标准名称2"
              },
              {
                label: "巡更标准名称3",
                value: "巡更标准名称3"
              }
            ],
            click: () => {}
          }
        ]
      },
      editruleForm: {
        name: "",
        time: "",
        CONTENT: "pm001",
        Creationtime: "",
        personnel: [],
        starttime: "",
        endtime: "",
        Route: "",
        standard: ""
      },
      editrules: {
        name: [{ required: true, message: "请输入排班名称", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "change" }]
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
      this.dialogData.outertitle = "巡更排班管理新增";
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
        console.log(this.tadatabox);
        var myDate = new Date();
        var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
        this.editruleForm.Creationtime = mytime;
        this.editruleForm.id = myDate;
        let data = Object.assign({}, this.editruleForm);
        this.tadatabox.unshift(data);
        // this.table.tableData.unshift(data);
        this.dialogData.outerVisible = false;
      }
    },
    editsubmit() {
      if (this.$refs.fromedit.submitForm()) {
        let data = Object.assign({}, this.editruleForm);
        for (var i = 0; i < this.tadatabox.length; i++) {
          if (this.tadatabox[i].id == this.row.id) {
            this.editruleForm.id = new Date();
            let data = Object.assign({}, this.editruleForm);
            this.tadatabox.splice(i, 1, data);
          }
        }
        this.dialogData.outerVisible = false;
      }
    },
    seesubmit() {}
  }
};
</script>
<style scoped lang="scss">
.vehicleLocat {
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