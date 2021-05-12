<template>
  <div class="dangerousVehicles">
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
      <el-button type="primary" icon="el-icon-setting" size="mini" @click="add"
        >巡更人员设置</el-button
      >
      <el-button
        type="info"
        icon="el-icon-refresh-left"
        size="mini"
        @click="refresh"
        >巡更人员撤销</el-button
      >
    </div>
    <div id="table" ref="table">
      <mytable
        :maxheight="maxheight"
        :table="table"
        ref="multipleTable"
      ></mytable>
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
export default {
  name: "dangerousVehicles",
  data() {
    let that = this;
    return {
      type: "",
      selectionData: [],
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "姓名",
            placeholder: "请输入姓名",
            prop: "LEV",
            max: 20,
            disabled: false,
            click: () => {}
          },
          {
            type: "select",
            label: "性别",
            placeholder: "请选择性别",
            prop: "TYPE",
            click: val => {
              console.log(val);
            },
            options: [
              {
                label: "男",
                value: "男"
              },
              {
                label: "女",
                value: "女"
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
        ref: "renyuan",
        tableLabel: [
          {
            type: "selection",
            fixed: true,
            width: 55
          },
          { label: "序号", type: "index", prop: "index" },
          {
            label: "姓名",
            typeclick: true,
            style: "color:#409eff;cursor: pointer;",
            prop: "NAME",
            minWidth: "200",
            click: (item, row) => {
              console.log(item);
              console.log(row);
              this.dialogData.footshow = false;
              this.dialogData.outerVisible = true;
              this.dialogData.outertitle = "巡更人员管理详情";
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
          { label: "性别", prop: "sex", minWidth: "180" },
          { label: "企业", prop: "park", minWidth: "180" },
          { label: "电话", prop: "phone", minWidth: "180" },
          { label: "地址", prop: "address", minWidth: "180" },
          { label: "是否为巡更人员", prop: "whether", minWidth: "180" }
        ],
        tableData: [
          {
            id: 1,
            NAME: "小李",
            sex: "男",
            whether: "否",
            park: "利民化学有限责任公司",
            phone: "18114028592",
            address: "",
            srcList: [
              "https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b7003af33a87e950306e9efc11385343fbf2b420.jpg"
            ],
            src:
              "https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b7003af33a87e950306e9efc11385343fbf2b420.jpg"
          },
          {
            id: 2,
            NAME: "测33333",
            sex: "男",
            whether: "否",
            park: "江苏晋煤恒盛化工股份有限公司",
            phone: "13022163762",
            address: "",
            srcList: [
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4293923982,4216613352&fm=224&gp=0.jpg"
            ],
            src:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4293923982,4216613352&fm=224&gp=0.jpg"
          },
          {
            id: 3,
            NAME: "测22222",
            sex: "男",
            whether: "否",
            park: "江苏晋煤恒盛化工股份有限公司",
            phone: "13022163761",
            address: "",
            srcList: [],
            src: ""
          },
          {
            id: 4,
            NAME: "测11111",
            sex: "女",
            whether: "否",
            park: "江苏晋煤恒盛化工股份有限公司",
            phone: "13022163760",
            address: "",
            srcList: [],
            src: ""
          },
          {
            id: 5,
            NAME: "老谢",
            sex: "男",
            whether: "是",
            park: "江苏维尤纳特精细化工公司",
            phone: "18114028592",
            address: "",
            srcList: [],
            src: ""
          },
          {
            id: 6,
            NAME: "小张",
            sex: "男",
            whether: "否",
            park: "江苏维尤纳特精细化工公司",
            phone: "",
            address: "",
            srcList: [],
            src: ""
          },
          {
            id: 7,
            NAME: "驾驶员姓名2",
            sex: "男",
            whether: "否",
            park: "江苏晋煤恒盛化工股份有限公司",
            phone: "18114028595",
            address: "",
            srcList: [],
            src: ""
          }
        ],
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
          that.selectionData = val;
        },
        currentChange(row) {
          console.log(row);
        }
      },
      dialogData: {
        footshow: true,
        outertype: "big",
        outertitle: "巡更人员详情查看",
        outerVisible: false,
        outername: "outername",
        center: true
      },
      editConfig: {
        fromdata: [
          {
            type: "input",
            prop: "NAME",
            max: 20,
            disabled: false,
            placeholder: "请输入姓名",
            label: "姓名",
            click: () => {}
          },
          {
            type: "input",
            prop: "sex",
            disabled: false,
            placeholder: "请输入性别",
            label: "性别",
            readonly: false, //只读,
            click: () => {}
          },

          {
            type: "input",
            prop: "park",
            disabled: false,
            placeholder: "请输入企业",
            label: "企业",
            click: () => {}
          },
          {
            type: "input",
            prop: "phone",
            disabled: false,
            placeholder: "请输入联系电话",
            label: "联系电话",
            click: () => {}
          },
          {
            type: "input",
            prop: "address",
            disabled: false,
            placeholder: "请输入联系地址",
            label: "联系地址",
            click: () => {}
          },
          {
            type: "input",
            prop: "whether",
            disabled: false,
            placeholder: "请输入是否为巡更人员",
            label: "是否为巡更人员",
            click: () => {}
          },

          {
            type: "Photo",
            label: "照片",
            prop: "src",
            srcList: "srcList"
          }
        ]
      },
      editruleForm: {
        NAME: "",
        sex: "",
        whether: "",
        park: "",
        phone: "",
        address: ""
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
      this.$refs.fromdemo.submitForm();
    },
    onReset() {
      this.$refs.fromdemo.resetForm();
    },
    add() {
      for (var i = 0; i < this.selectionData.length; i++) {
        this.table.tableData.map((item, index) => {
          if (this.selectionData[i].id == item.id) {
            item.whether = "是";
          }
        });
      }
      this.$refs.multipleTable.$refs.renyuan.clearSelection();
    },
    refresh() {
      for (var i = 0; i < this.selectionData.length; i++) {
        this.table.tableData.map((item, index) => {
          if (this.selectionData[i].id == item.id) {
            item.whether = "否";
          }
        });
      }
      this.$refs.multipleTable.$refs.renyuan.clearSelection();
    }
  }
};
</script>
<style scoped lang="scss">
.dangerousVehicles {
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