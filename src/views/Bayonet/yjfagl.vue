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
          <div slot="Basics" class="title">
            <span class="font">预案内容</span>
          </div>
        </myform>
      </div>
    </mydialog>
  </div>
</template>
<script>
import { formatWithSeparator } from "../../utils/datetime";
export default {
  name: "parkingLot",
  data() {
    return {
      type: "",
      searchConfig: {
        fromdata: [
          {
            type: "input",
            label: "预警设备",
            placeholder: "请输入预警设备",
            prop: "LEV",
            disabled:false,

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
            options: [
              {
                label:"园区入侵",
                value:"园区入侵"
              },
              {
                label:"园区入侵",
                value:"园区入侵"
              },
              {
                label:"园区入侵",
                value:"园区入侵"
              },
              {
                label:"园区入侵",
                value:"园区入侵"
              },
            ]
          }
        ]
      },
      searchruleForm: {
        LEV: "",
        TYPE: "",
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
            label: "所属单位",
            prop: "NAME",
            minWidth: "200",
            click: true
          },
          { label: "预案名称", prop: "VARSNAME", minWidth: "180" },
          { label: "预案类型", prop: "CONTENT", minWidth: "180" },
          { label: "事故类型", prop: "IP", minWidth: "180" },
          { label: "预案级别", prop: "STATUS", minWidth: "180" },
          { label: "起草时间", prop: "time", minWidth: "180" },
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
                  this.dialogData.outertitle = "预警方案管理详情";
                  this.$nextTick(() => {
                    Object.assign(this.editruleForm, row);
                    this.editConfig.fromdata[5].fileList = this.editruleForm.fileList;
                    for (var i = 0; i < this.editConfig.fromdata.length; i++) {
                      if (this.editConfig.fromdata[i].type == "select") {
                        this.editConfig.fromdata[i].type = "input";
                      }
                      this.editConfig.fromdata[i].disabled = true;
                    }

                    this.editConfig.fromdata[5].type = "button";
                    for (
                      let j = 0;
                      j < this.editConfig.fromdata[5].fileList.length;
                      j++
                    ) {
                      this.editConfig.fromdata[5].fileList[j].button = [
                        {
                          type: "info",
                          eventtype: "preview",
                          label: "预览"
                        },
                        {
                          type: "primary",
                          eventtype: "download",
                          label: "下载"
                        }
                      ];
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
                  this.dialogData.outertitle = "预警方案管理编辑";
                  this.dialogData.footshow = true;
                  this.dialogData.outerVisible = true;
                  this.$nextTick(() => {
                    Object.assign(this.editruleForm, row);
                    this.editConfig.fromdata[5].fileList = this.editruleForm.fileList;
                    for (var i = 0; i < this.editConfig.fromdata.length; i++) {
                      if (
                        this.editConfig.fromdata[i].options &&
                        this.editConfig.fromdata[i].type == "input"
                      ) {
                        this.editConfig.fromdata[i].type = "select";
                      }
                      this.editConfig.fromdata[i].disabled = false;
                    }
                    this.editConfig.fromdata[5].type = "file";
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
            STATUS: "一级预案",
            NAME: "利民化学有限责任公司",
            VARSNAME: "1111",
            IP: "其他",
            CONTENT: "综合预案",
            time: "2021-05-07 16:27:08"
          },
          {
            id: 2,
            STATUS: "一级预案",
            NAME: "江苏晋煤恒盛化工股份有限公司",
            VARSNAME: "预案名称1",
            IP: "一般事故",
            CONTENT: "综合预案",
            time: "2021-05-08 13:55:57"
          },
          {
            id: 3,
            STATUS: "一级预案",
            NAME: "江苏晋煤恒盛化工股份有限公司",
            VARSNAME: "12121212",
            IP: "一般事故",
            CONTENT: "综合预案",
            time: "2021-04-29 15:11:40"
          },
          {
            id: 4,
            STATUS: "一级预案",
            NAME: "江苏晋煤恒盛化工股份有限公司",
            VARSNAME: "预案名称",
            IP: "其他",
            CONTENT: "综合预案",
            time: "2021-04-29 13:56:24"
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
            type: "select",
            prop: "NAME",
            max: 20,
            disabled: false,
            placeholder: "请选择所属单位",
            label: "所属单位",
            options: [
              {
                value: "经开区",
                deptLevel: 0,
                label: "经开区",
                deptOrder: 1,
                fvalue: -1,
                path: "-1,0"
              },
              {
                value: "管委会",
                deptLevel: 1,
                label: "管委会",
                deptOrder: 1,
                fvalue: 0,
                path: "-1,0,1440"
              },
              {
                value: "苏化片区",
                deptLevel: 1,
                label: "苏化片区",
                deptOrder: 2,
                fvalue: 0,
                path: "-1,0,1421"
              },
              {
                value: "唐店片区",
                deptLevel: 1,
                label: "唐店片区",
                deptOrder: 3,
                fvalue: 0,
                path: "-1,0,1423"
              },
              {
                value: "小李测试公司2",
                deptLevel: 1,
                label: "小李测试公司2",
                fvalue: 0,
                path: "-1,0,1474"
              },
              {
                value: "小李测试公司",
                deptLevel: 1,
                label: "小李测试公司",
                fvalue: 0,
                path: "-1,0,1473"
              },
              {
                value: "利民化学有限责任公司",
                deptLevel: 2,
                label: "利民化学有限责任公司",
                deptOrder: 1,
                fvalue: 1423
              },
              {
                value: "财审局",
                deptLevel: 2,
                label: "财审局",
                deptOrder: 1,
                fvalue: 1440,
                path: "-1,0,1440,1439"
              },
              {
                value: "江苏晋煤恒盛化工股份有限公司",
                deptLevel: 2,
                label: "江苏晋煤恒盛化工股份有限公司",
                deptOrder: 1,
                fvalue: 1421
              },
              {
                value: "党群办",
                deptLevel: 2,
                label: "党群办",
                deptOrder: 2,
                fvalue: 1440,
                path: "-1,0,1440,1441"
              },
              {
                value: "新沂市永诚化工公司",
                deptLevel: 2,
                label: "新沂市永诚化工公司",
                deptOrder: 2,
                fvalue: 1423
              },
              {
                value: "江苏蓝丰生物化工股份公司",
                deptLevel: 2,
                label: "江苏蓝丰生物化工股份公司",
                deptOrder: 2,
                fvalue: 1421
              },
              {
                value: "新河化工",
                deptLevel: 2,
                label: "新河化工",
                deptOrder: 3,
                fvalue: 1423,
                path: "-1,0,1423,1426"
              },
              {
                value: "企业发展中心",
                deptLevel: 2,
                label: "企业发展中心",
                deptOrder: 3,
                fvalue: 1440,
                path: "-1,0,1440,1442"
              },
              {
                value: "机关党委",
                deptLevel: 2,
                label: "机关党委",
                deptOrder: 4,
                fvalue: 1440,
                path: "-1,0,1440,1443"
              },
              {
                value: "江苏金路化工有限公司",
                deptLevel: 2,
                label: "江苏金路化工有限公司",
                deptOrder: 4,
                fvalue: 1423
              },
              {
                value: "经发局",
                deptLevel: 2,
                label: "经发局",
                deptOrder: 5,
                fvalue: 1440,
                path: "-1,0,1440,1444"
              },
              {
                value: "江苏维尤纳特精细化工公司",
                deptLevel: 2,
                label: "江苏维尤纳特精细化工公司",
                deptOrder: 5,
                fvalue: 1423
              },
              {
                value: "新沂大江化工公司",
                deptLevel: 2,
                label: "新沂大江化工公司",
                deptOrder: 6,
                fvalue: 1423,
                path: "-1,0,1423,1429"
              },
              {
                value: "社会事业局",
                deptLevel: 2,
                label: "社会事业局",
                deptOrder: 6,
                fvalue: 1440,
                path: "-1,0,1440,1445"
              },
              {
                value: "规划建设局",
                deptLevel: 2,
                label: "规划建设局",
                deptOrder: 7,
                fvalue: 1440,
                path: "-1,0,1440,1446"
              },
              {
                value: "新沂市泰松化工有限公司",
                deptLevel: 2,
                label: "新沂市泰松化工有限公司",
                deptOrder: 7,
                fvalue: 1423
              },
              {
                value: "综合执法局",
                deptLevel: 2,
                label: "综合执法局",
                deptOrder: 8,
                fvalue: 1440,
                path: "-1,0,1440,1447"
              },
              {
                value: "江苏新汉菱生物工程公司",
                deptLevel: 2,
                label: "江苏新汉菱生物工程公司",
                deptOrder: 8,
                fvalue: 1423
              }
            ],
            click: () => {}
          },
          {
            type: "input",
            prop: "VARSNAME",
            max: 20,
            disabled: false,
            placeholder: "请输入预案名称",
            label: "预案名称",
            readonly: false, //只读,
            click: () => {}
          },
          {
            type: "select",
            prop: "CONTENT",
            disabled: false,
            placeholder: "请选择预案类型",
            label: "预案类型",
            options: [
              {
                label: "综合预案",
                value: "综合预案"
              }
            ],
            click: () => {}
          },
          {
            type: "select",
            prop: "STATUS",
            disabled: false,
            placeholder: "请选择预案等级",
            label: "预案等级",
            options: [
              {
                label: "一级预案",
                value: "一级预案"
              }
            ],
            click: () => {}
          },
          {
            type: "select",
            prop: "IP",
            disabled: false,
            placeholder: "请选择事故类型",
            label: "事故类型",
            options: [
              {
                label: "一般事故",
                value: "一般事故"
              },
              {
                label: "其他",
                value: "其他"
              }
            ],
            click: () => {}
          },
          {
            type: "file",
            label: "预案附件",
            ref: "uploadButton",
            action: "https://jsonplaceholder.typicode.com/posts/",
            limit: 1,
            fileList: [],
            prompting: "",
            tip: "请上传预案附件",
            required: false
          },
          { type: "slot", slot: "Basics", disabled: false },
          {
            type: "textarea",
            prop: "wxxfx",
            max: 300,
            disabled: false,
            placeholder: "请输入危险性分析	",
            label: "危险性分析	"
          },
          {
            type: "textarea",
            prop: "yjzztx",
            max: 300,
            disabled: false,
            placeholder: "请输入应急组织体系",
            label: "应急组织体系"
          },
          {
            type: "textarea",
            prop: "wxyjk",
            max: 300,
            disabled: false,
            placeholder: "请输入危险源监控",
            label: "危险源监控"
          },
          {
            type: "textarea",
            prop: "xyfj",
            max: 300,
            disabled: false,
            placeholder: "请输入响应分级",
            label: "响应分级"
          },
          {
            type: "textarea",
            prop: "xycx",
            max: 300,
            disabled: false,
            placeholder: "请输入响应程序",
            label: "响应程序"
          },
          {
            type: "textarea",
            prop: "hqcz",
            max: 300,
            disabled: false,
            placeholder: "请输入后期处置",
            label: "后期处置"
          },
          {
            type: "textarea",
            prop: "bzcs",
            max: 300,
            disabled: false,
            placeholder: "请输入保障措施",
            label: "保障措施"
          }
        ]
      },
      editruleForm: {
        NAME: "",
        VARSNAME: "",
        CONTENT: "",
        fileList: [],
        STATUS: "",
        IP: "",
        wxxfx: "",
        yjzztx: "",
        wxyjk: "",
        xyfj: "",
        xycx: "",
        hqcz: "",
        bzcs: "",
        time: ""
      },
      editrules: {
        NAME: [{ required: true, message: "请选择所属单位", trigger: "change" }]
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
      this.dialogData.outertitle = "预警方案管理新增";
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
        this.editConfig.fromdata[5].fileList = [];
        this.editConfig.fromdata[5].type = "file";
        this.$refs.fromedit.resetForm();
      });
    },
    addsubmit() {
      if (this.$refs.fromedit.submitForm()) {
        var myDate = new Date();
        var mytime = formatWithSeparator(myDate, "-", ":"); //获取当前时间
        this.editruleForm.time = mytime;
        let file = JSON.parse(
          JSON.stringify(this.editConfig.fromdata[5].fileList)
        );
        this.editruleForm.fileList = file;
        let data = Object.assign({}, this.editruleForm);
        console.log(data);
        this.table.tableData.unshift(data);
        this.dialogData.outerVisible = false;
      }
    },
    editsubmit() {
      let file = JSON.parse(
        JSON.stringify(this.editConfig.fromdata[5].fileList)
      );
      this.editruleForm.fileList = file;
      let data = Object.assign({}, this.editruleForm);
      this.table.tableData.splice(this.index, 1, data);
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