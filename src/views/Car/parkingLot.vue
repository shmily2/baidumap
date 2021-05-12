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
        </myform>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
import { number } from "../../utils/validate";
export default {
  name: "parkingLot",
  data() {
    //数字
    var validate = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!number(value)) {
        callback(new Error("请输入正整数"));
      } else {
        callback();
      }
    };
    return {
      type: "",
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "标准名称",
            placeholder: "请输入标准名称",
            prop: "LEV",
            max: 20,
            disabled: false
          },
          {
            type: "input",
            label: "创建人",
            max: 20,
            placeholder: "请输入创建人",
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
            label: "巡更标准名称",
            prop: "NAME",
            minWidth: "200",
            click: true
          },
          { label: "类型", prop: "VARSNAME", minWidth: "180" },
          { label: "创建人", prop: "CONTENT", minWidth: "180" },
          { label: "创建单位", prop: "IP", minWidth: "180" },
          { label: "创建时间", prop: "time", minWidth: "180" },
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
                  this.dialogData.footshow = false;
                  this.dialogData.outerVisible = true;
                  this.dialogData.outertitle = "巡更标准管理详情";
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
                  this.dialogData.outertitle = "巡更标准管理编辑";
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
                  this.table.tableData.splice(index, 1);
                }
              }
            ]
          }
        ],
        tableData: [
          {
            id: 1,
            NAME: "巡更标准名称3",
            VARSNAME: "巡更测试类型",
            IP: "经发局",
            renshu: "6",
            cishu: "4",
            haoshi: "180",
            yjzztx: "早晚各二次",
            CONTENT: "pm001",
            time: "2021-05-07 13:36:39"
          },
          {
            id: 2,
            renshu: "4",
            cishu: "4",
            haoshi: "120",
            yjzztx: "早晚各一次",
            NAME: "巡更标准名称2",
            VARSNAME: "巡更测试类型",
            IP: "经发局",
            CONTENT: "pm001",
            time: "2021-05-06 14:53:28"
          },
          {
            id: 3,
            NAME: "巡更标准名称1",
            VARSNAME: "巡更测试类型",
            IP: "经发局",
            CONTENT: "pm001",
            renshu: "6",
            cishu: "3",
            yjzztx: "早中晚各一次",
            haoshi: "360",
            time: "2021-05-06 14:53:20"
          }
        ],
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
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
        outertype: "small",
        outertitle: "巡更标准详情查看",
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
            prop: "NAME",
            max: 20,
            disabled: false,
            placeholder: "请输入巡更标准名称",
            label: "巡更标准名称",
            click: () => {}
          },
          {
            type: "select",
            prop: "VARSNAME",
            disabled: false,
            placeholder: "请选择巡更类型",
            label: "巡更类型",
            options: [
              {
                label: "巡更测试类型",
                value: "巡更测试类型"
              }
            ],
            click: () => {}
          },
          {
            type: "input",
            prop: "renshu",
            max: 10,
            disabled: false,
            placeholder: "请输入巡更人数",
            label: "巡更人数",
            readonly: false, //只读,
            click: () => {}
          },

          {
            type: "input",
            prop: "cishu",
            max: 10,
            disabled: false,
            placeholder: "请输入巡更次数(一天)",
            label: "巡更次数(一天)",
            click: () => {}
          },
          {
            type: "input",
            prop: "haoshi",
            max: 10,
            disabled: false,
            placeholder: "请输入巡更耗时(单次)",
            label: "巡更耗时(单次)",
            click: () => {},
            suffix: "分钟" //input框尾部的文字
          },
          {
            type: "textarea",
            prop: "yjzztx",
            max: 300,
            disabled: false,
            placeholder: "请输入巡更标准说明",
            label: "巡更标准说明"
          }
        ]
      },
      editruleForm: {
        NAME: "",
        VARSNAME: "巡更测试类型",
        CONTENT: "pm001",
        IP: "经发局",
        renshu: "",
        cishu: "",
        haoshi: "",
        yjzztx: ""
      },
      editrules: {
        renshu: [
          { validator: validate, trigger: "blur" },
          { max: 10, message: "最多输入10位数字", trigger: "blur" }
        ],
        cishu: [
          { validator: validate, trigger: "blur" },
          { max: 10, message: "最多输入10位数字", trigger: "blur" }
        ],
        haoshi: [
          { validator: validate, trigger: "blur" },
          { max: 10, message: "最多输入10位数字", trigger: "blur" }
        ]
      },
      editformName: "editfrom"
    };
  },
  created() {
    this.table.total = this.table.tableData.length;
    this.$nextTick(() => {
      this.maxheight = this.$refs.table.clientHeight - 120;
      console.log(this.maxheight);
    });
  },
  methods: {
    onSubmit() {
      this.$refs.fromdemo.submitForm();
    },
    onReset() {
      this.$refs.fromdemo.resetForm();
    },
    //新增
    add(type) {
      this.type = "add";
      this.dialogData.outertitle = "巡更标准管理新增";
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
        var myDate = new Date();
        var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
        this.editruleForm.time = mytime;
        let data = Object.assign({}, this.editruleForm);
        this.table.tableData.unshift(data);
        this.dialogData.outerVisible = false;
      }
    },
    editsubmit() {
      if (this.$refs.fromedit.submitForm()) {
        let data = Object.assign({}, this.editruleForm);
        this.table.tableData.splice(this.index, 1, data);
        this.dialogData.outerVisible = false;
      }
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