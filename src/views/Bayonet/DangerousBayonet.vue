<template>
  <div class="DangerousBayonet">
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
    let that = this;
    return {
      type: "",
      row: "",
      tadatabox: [
        {
          id: 1,
          NAME: "园区入侵",
          VARSNAME: "一般",
          STATUS: "短信内容短信内容短信内容",
          CONTENT: "黄总",
          time: "2021-05-07 14:00:18"
        },
        {
          id: 2,
          NAME: "园区入侵",
          VARSNAME: "一般",
          STATUS: "23",
          CONTENT: "xyadmin,dataAdmin",
          time: "2021-04-29 15:09:20"
        },
        {
          id: 3,
          NAME: "园区入侵",
          VARSNAME: "一般",
          STATUS: "短信内容短信内容短信内容短信内容短信内容1",
          CONTENT: "王默,黄总,陈昶睿,卡口值班员, 佟雨泽,陈烁,王一",
          time: "2021-04-29 15:08:53"
        }
      ],
      searchConfig: {
        fromdata: [
          {
            type: "select",
            prop: "TYPE",
            disabled: false,
            placeholder: "请选择预警类型",
            label: "预警类型",
            click: () => {},
            options: [
              {
                label: "园区入侵",
                value: "园区入侵"
              },
              {
                label: "人员信息异常",
                value: "人员信息异常"
              },
              {
                label: "人员行为异常",
                value: "人员行为异常"
              },
              {
                label: "车辆行为异常",
                value: "车辆行为异常"
              },
              {
                label: "岗亭值班异常",
                value: "岗亭值班异常"
              },
              {
                label: "设备状态异常",
                value: "设备状态异常"
              }
            ]
          }
        ]
      },
      searchruleForm: {
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
            label: "预警类型",
            prop: "NAME",
            width: "100",
            click: true
          },
          { label: "状态", prop: "VARSNAME", width: "100" },
          { label: "责任人", prop: "CONTENT", width: "240" },
          { label: "通知内容", prop: "STATUS", width: "240" },
          { label: "创建时间", prop: "time", width: "180" },
          {
            type: "button",
            label: "操作",
            width: "150",
            options: [
              {
                label: "编辑",
                type: "primary",
                disabled: false,
                click: (index, row) => {
                  this.type = "edit";
                  this.index = index;
                  this.row = row;
                  this.dialogData.footshow = true;
                  this.dialogData.outertitle = "预警通知管理编辑";
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
        outertype: "small",
        outertitle: "预警通知管理新增",
        outerVisible: false,
        outername: "outername",
        center: true,
        footer: [
          {
            title: "发送",
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
            placeholder: "请选择预警类型",
            label: "预警类型",
            options: [
              {
                label: "园区入侵",
                value: "园区入侵"
              },
              {
                label: "人员信息异常",
                value: "人员信息异常"
              },
              {
                label: "人员行为异常",
                value: "人员行为异常"
              },
              {
                label: "车辆行为异常",
                value: "车辆行为异常"
              },
              {
                label: "岗亭值班异常",
                value: "岗亭值班异常"
              },
              {
                label: "设备状态异常",
                value: "设备状态异常"
              }
            ],
            click: () => {}
          },
          {
            type: "input",
            prop: "VARSNAME",
            disabled: false,
            placeholder: "请选择预警状态",
            label: "预警状态",
            click: () => {},
            options: [
              {
                label: "一般",
                value: "一般"
              }
            ]
          },
          {
            type: "cascader",
            label: "接收人员",
            placeholder: "请选择接收人员,可搜索",
            levels: false, //仅显示最后一级
            filterable: true, //可搜索
            prop: "CONTENTVALUE",
            props: {
              expandTrigger: "clik",
              multiple: true,
              value: "value"
            },
            options: [
              {
                value: "管委会",
                label: "管委会",
                children: [
                  { label: "李南昌", PHONE: "15190799950", value: "李南昌" },
                  { label: "章学辉", PHONE: "13813259092", value: "章学辉" },
                  { label: "陈东", PHONE: "13225253669", value: "陈东" },
                  { label: "程小亮", PHONE: "18952102456", value: "程小亮" },
                  { label: "梁尊", PHONE: "13375108128", value: "梁尊" },
                  { label: "晏鹏", PHONE: "18752598766", value: "晏鹏" },
                  { label: "王飞", PHONE: "15996909076", value: "王飞" },
                  { label: "潘伟", PHONE: "18652208855", value: "潘伟" },
                  { label: "杨学龙", PHONE: "15862137267", value: "杨学龙" },
                  { label: "薛飞", PHONE: "13655222097", value: "薛飞" },
                  { label: "邓振", PHONE: "15952288659", value: "邓振" }
                ]
              },
              {
                value: "苏化片区",
                label: "苏化片区",
                children: [
                  {
                    value: "江苏晋煤恒盛化工股份有限公司",
                    label: "江苏晋煤恒盛化工股份有限公司",
                    children: [
                      {
                        label: "李跃军",
                        PHONE: "13655222252",
                        value: "李跃军"
                      },
                      {
                        label: "王东升",
                        PHONE: "18852294543",
                        value: "王东升"
                      },
                      {
                        label: "牛佳",
                        PHONE: "13775867875",
                        value: "牛佳"
                      },
                      {
                        label: "陈海峰",
                        PHONE: "15205224510",
                        value: "陈海峰"
                      },
                      {
                        label: "何春雷",
                        PHONE: "13815332572",
                        value: "何春雷"
                      },
                      {
                        label: "沙建设",
                        PHONE: "15751030823",
                        value: "沙建设"
                      },
                      {
                        label: "王远",
                        PHONE: "18751750373",
                        value: "王远"
                      },
                      {
                        label: "王德印",
                        PHONE: "17558404301",
                        value: "王德印"
                      }
                    ]
                  },
                  {
                    value: "江苏蓝丰化工股份公司",
                    label: "江苏蓝丰化工股份公司",
                    children: [
                      { label: "王庆猛", PHONE: "15062064840", value: "王庆猛" }
                    ]
                  }
                ]
              },
              {
                value: "唐店片区",
                label: "唐店片区",
                children: [
                  {
                    value: "利民化学有限责任公司",
                    label: "利民化学有限责任公司",
                    children: [
                      {
                        label: "丁方成",
                        PHONE: "13196820959",
                        value: "丁方成"
                      },
                      {
                        label: "徐品清",
                        PHONE: "15952288063",
                        value: "徐品清"
                      }
                    ]
                  },
                  {
                    value: "新沂市永诚化工公司",
                    label: "新沂市永诚化工公司",
                    children: [
                      {
                        label: "周小明",
                        PHONE: "13921753350",
                        value: "周小明"
                      },
                      {
                        label: "薛传省",
                        PHONE: "17351741006",
                        value: "薛传省"
                      },
                      {
                        label: "孙亚东",
                        PHONE: "17712039182",
                        value: "孙亚东"
                      },
                      {
                        label: "刘永",
                        PHONE: "18952283818",
                        value: "刘永"
                      },
                      {
                        label: "刘苏斌",
                        PHONE: "18852299588",
                        value: "刘苏斌"
                      },
                      {
                        label: "黄金郭",
                        PHONE: "15152065299",
                        value: "黄金郭"
                      }
                    ]
                  },
                  {
                    value: "新河化工",
                    label: "新河化工",
                    children: [
                      { label: "时云虎", PHONE: "15952288061", value: "时云虎" }
                    ]
                  },
                  {
                    value: "江苏金路化工有限公司",
                    label: "江苏金路化工有限公司",
                    children: [
                      {
                        label: "马继友",
                        PHONE: "13225252068",
                        value: "马继友"
                      },
                      { label: "何丛政", PHONE: "19941613089", value: "何丛政" }
                    ]
                  },
                  {
                    value: "江苏维尤纳特精细化工公司",
                    label: "江苏维尤纳特精细化工公司",
                    children: [
                      {
                        label: "丛涛",
                        PHONE: "15952284836",
                        value: "丛涛"
                      },
                      {
                        label: "杨立远",
                        PHONE: "13775956067",
                        value: "杨立远"
                      },

                      {
                        label: "慎邦俊",
                        PHONE: "13852072102",
                        value: "慎邦俊"
                      }
                    ]
                  },
                  {
                    value: "新沂大江化工公司",
                    label: "新沂大江化工公司",
                    children: [
                      { label: "邵雷", PHONE: "15952298228", value: "邵雷" }
                    ]
                  },
                  {
                    value: "新沂市泰松化工有限公司",
                    label: "新沂市泰松化工有限公司"
                  },
                  {
                    value: "江苏新汉菱生物工程公司",
                    label: "江苏新汉菱生物工程公司",
                    children: [
                      {
                        label: "薛东升",
                        PHONE: "13905224187",
                        value: "薛东升"
                      },
                      {
                        label: "薛震",
                        PHONE: "13905225566",
                        value: "薛震"
                      },
                      {
                        label: "薛良富",
                        PHONE: "13921753112",
                        value: "薛良富"
                      },
                      {
                        label: "李楠",
                        PHONE: "15952288718",
                        value: "李楠"
                      },
                      {
                        label: "陈欣",
                        PHONE: "13775862868",
                        value: "陈欣"
                      },
                      {
                        label: "刘玉敏",
                        PHONE: "13921751198",
                        value: "刘玉敏"
                      },
                      { label: "朱岩", PHONE: "15752211282", value: "朱岩" }
                    ]
                  },
                  {
                    value: "江苏达美聚酯科技有限公司",
                    label: "江苏达美聚酯科技有限公司",
                    children: [
                      {
                        label: "房严委",
                        PHONE: "15252196934",
                        value: "房严委"
                      },
                      {
                        label: "陈国庆",
                        PHONE: "15205226750",
                        value: "陈国庆"
                      },
                      { label: "梁岩", PHONE: "18118597567", value: "梁岩" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "textarea",
            prop: "STATUS",
            disabled: false,
            placeholder: "请输入短信内容",
            label: "短信内容",
            click: () => {}
          }
        ]
      },
      editruleForm: {
        NAME: "",
        VARSNAME: "",
        CONTENT: "",
        CONTENTVALUE: "",
        STATUS: ""
      },
      editrules: {
        NAME: [
          { required: true, message: "请选择预警类型", trigger: "change" }
        ],
        VARSNAME: [
          { required: true, message: "请选择状态", trigger: "change" }
        ],
        CONTENTVALUE: [
          { required: true, message: "请选择接收人员", trigger: "change" }
        ],
        STATUS: [{ required: true, message: "请输入短信内容", trigger: "blur" }]
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
      this.dialogData.outertitle = "预警通知管理新增";
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
        this.editruleForm.id = myDate;
        this.editruleForm.CONTENT = "";
        if (this.editruleForm.CONTENTVALUE.length > 0) {
          for (let i = 0; i < this.editruleForm.CONTENTVALUE.length; i++) {
            let ind = this.editruleForm.CONTENTVALUE[i].length - 1;
            this.editruleForm.CONTENT +=
              this.editruleForm.CONTENTVALUE[i][ind] + " ";
          }
        }
        let data = Object.assign({}, this.editruleForm);
        this.tadatabox.unshift(data);
        this.dialogData.outerVisible = false;
      }
    },
    editsubmit() {
      this.editruleForm.CONTENT = "";
      if (this.editruleForm.CONTENTVALUE.length > 0) {
        for (let i = 0; i < this.editruleForm.CONTENTVALUE.length; i++) {
          let ind = this.editruleForm.CONTENTVALUE[i].length - 1;
          this.editruleForm.CONTENT +=
            this.editruleForm.CONTENTVALUE[i][ind] + " ";
        }
      }
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
.DangerousBayonet {
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
<style lang="scss">
</style>