<template>
  <div class="myform">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select
          v-model="ruleForm.region"
          :multiple="multiple"
          :filterable="filterable"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
          <el-option label="区域三" value="suzhou"></el-option>
          <el-option label="区域四" value="taixin"></el-option>
          <el-option label="区域五" value="changzhou"></el-option>
          <el-option label="区域六" value="wuxi"></el-option>
          <el-option label="区域七" value="nanjing"></el-option>
          <el-option label="区域八" value="hangzhou"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker
          type="date"
          placeholder="选择开始日期"
          v-model="ruleForm.date1"
        ></el-date-picker>
        <span>-</span>
        <el-date-picker
          type="date"
          placeholder="选择结束日期"
          v-model="ruleForm.date2"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="时间范围" required>
        <el-date-picker
          v-model="ruleForm.valueue1"
          type="datetime"
          placeholder="选择开始日期时间"
        >
        </el-date-picker>
        <span>-</span>
        <el-date-picker
          v-model="ruleForm.valueue2"
          type="datetime"
          placeholder="选择结束日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="上传文件" prop="file">
        <el-input v-model="ruleForm.file" style="display:none"></el-input>
        <el-upload
          ref="uploadButton"
          :http-request="submitForm"
          class="upload-demo"
          :auto-upload="false"
          action=""
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-change="handchange"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="ruleForm.fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>

          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="级联选择器" prop="cascader">
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="单个时间">
        <el-date-picker
          v-model="ruleForm.picker"
          align="right"
          class="singledate"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item style="border:none"> </el-form-item>
      <el-form-item style="border:none"> </el-form-item>
      <el-form-item style="border:none"> </el-form-item>
      <el-form-item style="border:none"> </el-form-item>
    </el-form>
    <div class="fromfoot">
      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "myfrom",
  data() {
    return {
      multiple: true, //多选
      filterable: true,
      value: [],
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
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      ruleForm: {
        name: "",
        picker: "",
        region: "",
        date1: "",
        date2: "",
        valueue1: "",
        valueue2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        file: "",
        fileList: []
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
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
  },
  methods: {
    submitForm(formName) {
      // 通过submit调用uploadFile
      //   this.$refs.uploadButton.submit();
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //文件变化
    handchange(file, fileList) {
      this.ruleForm.fileList = fileList;
      if (fileList.length > 0) {
        this.ruleForm.file = fileList[0].name;
      } else {
        this.ruleForm.file = "";
      }
    },
    // 删除文件
    handleRemove(file, fileList) {
      this.ruleForm.fileList = fileList;
      if (fileList.length > 0) {
        this.ruleForm.file = fileList[0].name;
      } else {
        this.ruleForm.file = "";
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="scss">
.myform {
  height: 100%;
  overflow: auto;
  .el-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .fromfoot {
    width: 100%;
    text-align: center;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    width: 445px;
    height: 100%;
  }
  .el-select {
    display: inline-block;
    position: relative;
    width: 100%;
  }
  .el-upload {
    width:100%;
    border: 1px solid #dcdfe6;
    text-align: left;
    padding-left:12px;
  }
  .el-cascader {
    width: 445px;
  }
  .el-form-item__content > .singledate {
    width: 445px;
  }
  .el-checkbox-group,
  .el-switch,
  .el-radio-group {
    border: 1px solid #dcdfe6;
    padding: 8px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>