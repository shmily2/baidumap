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
        ></myform>
      </div>
    </mydialog>
  </div>
</template>
<script>
export default {
  name: "parkingLot",
  data() {
    return {
      searchConfig: {
        fromdata: [
          {
            type: "input",
            prop: "NAME",
            max: 20,
            disabled: false,
            placeholder: "请输入名称",
            label: "名称",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "select",
            prop: "TYPE",
            disabled: false,
            placeholder: "请选择设备类型",
            label: "设备类型",
            options: [
              {
                label: "红外摄像头",
                value: "1817"
              },
              {
                label: "AI摄像头",
                value: 1816
              },
              {
                label: "湿度感应器",
                value: 1815
              },
              {
                label: "气压感应器",
                value: 1814
              }
            ],
            click: () => {}
          },
          {
            type: "select",
            prop: "LEV",
            disabled: false,
            placeholder: "请选择所属控制区",
            label: "所属控制区",
            options: [
              {
                label: "核心区",
                value: 5
              },
              {
                label: "关键区",
                value: 6
              },
              {
                label: "一般区",
                value: 7
              }
            ],
            click: () => {}
          }
        ]
      },
      searchruleForm: {
        LEV: "",
        TYPE: "",
        NAME: ""
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
            label: "设备名称",
            prop: "NAME",
            minWidth: "200",
            click: true
          },
          { label: "设备类型", prop: "VARSNAME", minWidth: "180" },
          { label: "所属控制区", prop: "CONTENT", minWidth: "180" },
          { label: "设备ip", prop: "IP", minWidth: "180" },
          { label: "状态", prop: "STATUS", minWidth: "180" },
          {
            type: "button",
            label: "操作",
            minWidth: "200",
            options: [
              {
                label: "编辑",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.editruleForm.id = "";
                  this.dialogData.outerVisible = true;
                  this.editruleForm.name = row.NAME;
                  this.editruleForm.ip = row.IP;
                  this.editruleForm.id = row.id;
                  this.editruleForm.pixel = "118.33691,34.316145";
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
            STATUS: "在线",
            NAME: "标注信息气压12",
            VARSNAME: "气压感应器",
            IP: "192.168.3.12",
            CONTENT: "一般控制区域"
          },
          {
            id: 2,
            STATUS: "在线",
            NAME: "标注信息气压",
            VARSNAME: "信息报警",
            IP: "192.168.1.14",
            CONTENT: "核心控制区域"
          },
          {
            id: 3,
            STATUS: "离线",
            NAME: "标注信息气压1",
            VARSNAME: "灯杆",
            IP: "192.160.0.27",
            CONTENT: "关键控制区域"
          },
          {
            id: 4,
            STATUS: "离线",
            NAME: "标注信息气压2",
            VARSNAME: "球枪",
            IP: "192.0.0.167",
            CONTENT: "核心控制区域"
          },
          {
            id: 5,
            STATUS: "在线",
            NAME: "标注信息气压5",
            VARSNAME: "监控",
            IP: "192.102.3.1",
            CONTENT: "核心控制区域"
          },
          {
            id: 6,
            STATUS: "离线",
            NAME: "标注信息",
            VARSNAME: "气压感应器",
            IP: "192.110.0.100",
            CONTENT: "一般控制区域"
          },
          {
            id: 7,
            STATUS: "离线",
            NAME: "标注信息气压7",
            VARSNAME: "球枪",
            IP: "192.18.0.1",
            CONTENT: "关键控制区域"
          },
          {
            id: 8,
            STATUS: "在线",
            NAME: "标注信息气12",
            VARSNAME: "球枪",
            IP: "192.168.01.1",
            CONTENT: "关键控制区域"
          },
          {
            id: 9,
            STATUS: "在线",
            NAME: "标注信息气压19",
            VARSNAME: "气压感应器",
            IP: "192.168.0.1",
            CONTENT: "核心控制区域"
          },
          {
            id: 10,
            STATUS: "在线",
            NAME: "标注信息气压20",
            VARSNAME: "气压感应器",
            IP: "192.168.0.1",
            CONTENT: "一般控制区域"
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
        footshow:true,
        outertype: "small",
        outertitle: "预警设备信息修改",
        outerVisible: false,
        outername: "outername",
        center: true,
        footer: [
          {
            title: "提交",
            type: "primary",
            click: () => {
              for (let i = 0; i < this.table.tableData.length; i++) {
                if (this.table.tableData[i].id == this.editruleForm.id) {
                  this.table.tableData[i].NAME = this.editruleForm.name;
                  this.table.tableData[i].IP = this.editruleForm.ip;
                }
              }
              this.dialogData.outerVisible = false;
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
      },
      editConfig: {
        fromdata: [
          {
            type: "input",
            prop: "name",
            max: 20,
            disabled: false,
            placeholder: "请输入设备名称",
            label: "设备名称",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "ip",
            max: 20,
            disabled: false,
            placeholder: "请输入设备ip",
            label: "设备ip",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "input",
            prop: "pixel",
            max: 20,
            disabled: true,
            placeholder: "请输入设备位置",
            label: "设备位置",
            readonly: false, //只读,
            click: () => {}
          }
        ]
      },
      editruleForm: {
        name: "",
        ip: "",
        pixel: ""
      },
      editrules: {},
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
      console.log(this.$refs.fromdemo.submitForm());
    },
    onReset() {
      console.log(this.$refs.fromdemo.resetForm());
    }
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
  #table {
    flex: 1;
    padding: 40px 0;
  }
}
</style>