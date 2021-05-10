<template>
  <div id="whpkk">
    <el-scrollbar style="height:100%">
      <myform
        :formConfig="formConfig"
        :ruleForm="ruleForm"
        :rules="rules"
        :formName="formName"
        ref="fromdemo"
      >
        <div slot="Basics" class="account">
          <span class="line"></span>
          <span class="font">现有设备情况</span>
        </div>
      </myform>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "whpkk",
  data() {
    return {
      qure: 35,
      formName: "from",
      formConfig: {
        footer: [
          {
            name: "立即创建",
            type: "primary",
            click: val => {
              this.$refs.fromdemo.submitForm();
            }
          },
          {
            name: "重置",
            type: "",
            click: val => {
              this.$refs.fromdemo.resetForm();
            }
          }
        ],
        fromdata: [
           { type: "slot", slot: "Basics", disabled: false },
          {
            type: "input",
            prop: "name",
            max: 20,
            disabled: false,
            placeholder: "请输入input",
            label: "活动名称",
            readonly: true, //只读
            click: () => {
              console.log(111);
            },
            suffix: "万元" //input框尾部的文字
          },
          {
            type: "select",
            prop: "region",
            disabled: false,
            placeholder: "请选择select,可搜索",
            label: "活动名称",
            multiple: true, //对选
            valueType: true, //选择值返回对象
            filterable: true, //可搜索
            click: val => {
              console.log(val);
            },
            options: [
              {
                label: "区域一",
                value: "shanghai"
              },
              {
                label: "区域二",
                value: "beijing"
              },
              {
                label: "区域三",
                value: "suzhou"
              },
              {
                label: "区域四",
                value: "taixin"
              },
              {
                label: "区域五",
                value: "changzhou"
              },
              {
                label: "区域六",
                value: "wuxi"
              },
              {
                label: "区域七",
                value: "nanjing"
              }
            ]
          },
          {
            type: "textarea",
            prop: "desc",
            max: 300,
            disabled: false,
            placeholder: "请输入textarea",
            label: "活动形式"
          },
          {
            type: "switch",
            label: "即时配送",
            text: "立刻",
            selectvalue: "1",
            noSelectvalue: "2",
            selectColor: "#13ce66",
            noSelectColor: "#ff4949",
            disabled: false,
            click: val => {
              console.log(val);
            }
          },
          {
            type: "radio",
            label: "特殊资源",
            prop: "resource",
            disabled: false,
            options: [
              {
                label: "线上品牌商赞助",
                value: 0
              },
              {
                label: "线下场地免费",
                value: 1
              }
            ],
            click: val => {
              console.log(val);
            }
          },
          {
            type: "checkbox",
            label: "活动性质",
            prop: "type",
            disabled: false,
            proprs: { expandTrigger: "hover" },
            options: [
              {
                label: "美食/餐厅线上活动",
                value: 0
              },
              {
                label: "地推活动",
                value: 1
              },
              {
                label: "线下主题活动",
                value: 2
              },
              {
                label: "单纯品牌曝光",
                value: 3
              }
            ],
            click: val => {
              console.log(val);
            }
          },
          {
            type: "button",
            label: "文件",
            prop: "file",
            options: [
              {
                label: "点击下载",
                type: "primary",
                name:"1583560283(1).png",
                eventtype: "download",
                src:
                  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              },
              {
                label: "文件预览",
                type: "info",
                eventtype: "preview",
                name:"1583560283.png",
                src:
                  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              }
            ]
          },
          {
            type: "Photo",
            label: "照片",
            srcList: [
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            ],
            src:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          },
          {
            type: "cascader",
            label: "级联选择器",
            placeholder: "请选择,可搜索",
            levels: true, //仅显示最后一级
            filterable: true, //可搜索
            props: {
              expandTrigger: "hover"
            },
            options: [
              {
                value: "zhinan",
                label: "指南",
                children: [
                  {
                    value: "shejiyuanze",
                    label: "设计原则",
                    children: [
                      {
                        value: "yizhi",
                        label: "一致"
                      },
                      {
                        value: "fankui",
                        label: "反馈"
                      },
                      {
                        value: "xiaolv",
                        label: "效率"
                      },
                      {
                        value: "kekong",
                        label: "可控"
                      }
                    ]
                  },
                  {
                    value: "daohang",
                    label: "导航",
                    children: [
                      {
                        value: "cexiangdaohang",
                        label: "侧向导航"
                      },
                      {
                        value: "dingbudaohang",
                        label: "顶部导航"
                      }
                    ]
                  }
                ]
              },
              {
                value: "zujian",
                label: "组件",
                children: [
                  {
                    value: "basic",
                    label: "Basic",
                    children: [
                      {
                        value: "layout",
                        label: "Layout 布局"
                      },
                      {
                        value: "color",
                        label: "Color 色彩"
                      },
                      {
                        value: "typography",
                        label: "Typography 字体"
                      },
                      {
                        value: "icon",
                        label: "Icon 图标"
                      },
                      {
                        value: "button",
                        label: "Button 按钮"
                      }
                    ]
                  },
                  {
                    value: "form",
                    label: "Form",
                    children: [
                      {
                        value: "radio",
                        label: "Radio 单选框"
                      },
                      {
                        value: "checkbox",
                        label: "Checkbox 多选框"
                      },
                      {
                        value: "input",
                        label: "Input 输入框"
                      },
                      {
                        value: "input-number",
                        label: "InputNumber 计数器"
                      },
                      {
                        value: "select",
                        label: "Select 选择器"
                      },
                      {
                        value: "cascader",
                        label: "Cascader 级联选择器"
                      },
                      {
                        value: "switch",
                        label: "Switch 开关"
                      },
                      {
                        value: "slider",
                        label: "Slider 滑块"
                      },
                      {
                        value: "time-picker",
                        label: "TimePicker 时间选择器"
                      },
                      {
                        value: "date-picker",
                        label: "DatePicker 日期选择器"
                      },
                      {
                        value: "datetime-picker",
                        label: "DateTimePicker 日期时间选择器"
                      },
                      {
                        value: "upload",
                        label: "Upload 上传"
                      },
                      {
                        value: "rate",
                        label: "Rate 评分"
                      },
                      {
                        value: "form",
                        label: "Form 表单"
                      }
                    ]
                  },
                  {
                    value: "data",
                    label: "Data",
                    children: [
                      {
                        value: "table",
                        label: "Table 表格"
                      },
                      {
                        value: "tag",
                        label: "Tag 标签"
                      },
                      {
                        value: "progress",
                        label: "Progress 进度条"
                      },
                      {
                        value: "tree",
                        label: "Tree 树形控件"
                      },
                      {
                        value: "pagination",
                        label: "Pagination 分页"
                      },
                      {
                        value: "badge",
                        label: "Badge 标记"
                      }
                    ]
                  },
                  {
                    value: "notice",
                    label: "Notice",
                    children: [
                      {
                        value: "alert",
                        label: "Alert 警告"
                      },
                      {
                        value: "loading",
                        label: "Loading 加载"
                      },
                      {
                        value: "message",
                        label: "Message 消息提示"
                      },
                      {
                        value: "message-box",
                        label: "MessageBox 弹框"
                      },
                      {
                        value: "notification",
                        label: "Notification 通知"
                      }
                    ]
                  },
                  {
                    value: "navigation",
                    label: "Navigation",
                    children: [
                      {
                        value: "menu",
                        label: "NavMenu 导航菜单"
                      },
                      {
                        value: "tabs",
                        label: "Tabs 标签页"
                      },
                      {
                        value: "breadcrumb",
                        label: "Breadcrumb 面包屑"
                      },
                      {
                        value: "dropdown",
                        label: "Dropdown 下拉菜单"
                      },
                      {
                        value: "steps",
                        label: "Steps 步骤条"
                      }
                    ]
                  },
                  {
                    value: "others",
                    label: "Others",
                    children: [
                      {
                        value: "dialog",
                        label: "Dialog 对话框"
                      },
                      {
                        value: "tooltip",
                        label: "Tooltip 文字提示"
                      },
                      {
                        value: "popover",
                        label: "Popover 弹出框"
                      },
                      {
                        value: "card",
                        label: "Card 卡片"
                      },
                      {
                        value: "carousel",
                        label: "Carousel 走马灯"
                      },
                      {
                        value: "collapse",
                        label: "Collapse 折叠面板"
                      }
                    ]
                  }
                ]
              },
              {
                value: "ziyuan",
                label: "资源",
                children: [
                  {
                    value: "axure",
                    label: "Axure Components"
                  },
                  {
                    value: "sketch",
                    label: "Sketch Templates"
                  },
                  {
                    value: "jiaohu",
                    label: "组件交互文档"
                  }
                ]
              }
            ]
          },
          {
            type: "file",
            label: "上传文件",
            ref: "uploadButton",
            action: "https://jsonplaceholder.typicode.com/posts/",
            limit: 2,
            fileList: [],
            prompting: "只能上传jpg/png文件，且不超过500kb",
            tip: "请上传文件",
            required: true
          },
          {
            type: "file",
            label: "上传图片",
            ref: "upload",
            action: "https://jsonplaceholder.typicode.com/posts/",
            limit: 3,
            fileList: [],
            prompting: "只能上传jpg/png文件，且不超过500kb",
            tip: "请上传文件",
            required: true
          },
          {
            label: "活动时间",
            type: "doubleTime",
            datatype: "date",
            start: {
              placeholder: "请选择开始时间",
              prop: "start",
              pickerOptions: {
                disabledDate: time => {
                  // console.log(time)
                  console.log(this.ruleForm.end);
                  // if (this.q.startTime) {
                  //   return  time.getTime() > Date.now() ||time.getTime() <new Date(this.q.startTime).getTime() - 8.64e7
                  // } else {
                  //   return time.getTime() > Date.now();
                  // }
                }
              }
            },
            end: {
              prop: "end",
              placeholder: "请选择结束时间",
              pickerOptions: {
                disabledDate: time => {
                  console.log(this.ruleForm.start);
                }
              }
            }
          },
          {
            prop: "date",
            label: "时间",
            placeholder: "请选择时间",
            dateFormate: "yyyy-MM-dd",
            pickerOptions: {
              disabledDate: time => {
                console.log(this.ruleForm.date);
              }
            }
          }
        ]
      },
      ruleForm: {
        name: "",
        picker: "",
        region: [],
        date: "",
        start: "",
        end: "",
        delivery: false,
        type: [],
        resource: 0,
        desc: "",
        file: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          {
            type: "array",
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        file: [{ required: true, message: "请选择文件", trigger: "change" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  }
};
</script>
<style scoped>
#whpkk {
  height: 100%;
  padding: 10px;
}
</style>