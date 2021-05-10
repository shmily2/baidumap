<template>
  <div class="myform">
    <el-form
      :model="ruleForm"
      :rules="rules"
      :ref="formName"
      class="demo-ruleForm"
    >
      <el-form-item
        v-for="(item, index) in formConfig.fromdata"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :class="[{ slotclass: item.type == 'slot' }]"
        :required="item.required"
      >
        <!-- input框只读点击事件 -->
        <el-input
          v-if="item.type == 'input' && item.readonly"
          :maxlength="item.max || '20'"
          v-model="ruleForm[item.prop]"
          :clearable="true"
          :readonly="item.readonly || false"
          :placeholder="item.disabled ? '' : item.placeholder"
          :disabled="item.disabled || false"
          @click.native="item.click"
        >
          <template slot="suffix">{{ item.suffix }}</template>
        </el-input>
        <!-- 正常input框 -->
        <el-input
          v-else-if="item.type == 'input' && item.readonly != true"
          :maxlength="item.max || '20'"
          v-model="ruleForm[item.prop]"
          :clearable="true"
          :placeholder="item.disabled ? '' : item.placeholder"
          :disabled="item.disabled || false"
        >
          <template slot="suffix">{{ item.suffix }}</template>
        </el-input>
        <!-- select框 -->
        <el-select
          v-else-if="item.type == 'select'"
          v-model="ruleForm[item.prop]"
          :multiple="item.multiple"
          :filterable="item.filterable || false"
          :placeholder="item.disabled ? '' : item.placeholder"
          :disabled="item.disabled || false"
          @change="item.click"
          :clearable="true"
          :value-key="item.value"
          collapse-tags
        >
          <div v-if="item.valueType">
            <el-option
              v-for="it in item.options"
              :label="it.label"
              :multiple="it.multiple || false"
              :filterable="it.filterable || false"
              :key="it.value"
              :value="it"
            ></el-option>
          </div>
          <div v-else>
            <el-option
              v-for="it in item.options"
              :label="it.label"
              :multiple="it.multiple || false"
              :filterable="it.filterable || false"
              :key="it.value"
              :value="it.value"
            ></el-option>
          </div>
        </el-select>
        <!-- 多行文本框 -->
        <el-input
          v-else-if="item.type == 'textarea'"
          :type="item.type"
          :maxlength="item.max || '300'"
          v-model="ruleForm[item.prop]"
          :placeholder="item.disabled ? '' : item.placeholder"
          :disabled="item.disabled || false"
        ></el-input>
        <!-- Switch 开关 -->
        <el-switch
          v-else-if="item.type == 'switch'"
          :active-color="item.selectColor"
          :inactive-color="item.noSelectColor"
          :disabled="item.disabled || false"
          :active-value="item.selectvalue"
          :inactive-value="item.noSelectvalue"
          :active-text="item.text"
          v-model="ruleForm[item.prop]"
          @change="item.click"
        ></el-switch>
        <!-- 单选 -->
        <el-radio-group
          v-else-if="item.type == 'radio'"
          v-model="ruleForm[item.prop]"
          :disabled="item.disabled || false"
          @change="item.click"
        >
          <el-radio
            :label="itm.value"
            v-for="itm in item.options"
            :key="itm.value"
            >{{ itm.label }}</el-radio
          >
        </el-radio-group>

        <!-- 多选 -->
        <el-checkbox-group
          v-model="ruleForm[item.prop]"
          v-else-if="item.type == 'checkbox'"
          :disabled="item.disabled || false"
          @change="item.click"
        >
          <el-checkbox
            :label="itm.value"
            v-for="itm in item.options"
            :key="itm.value"
            >{{ itm.label }}</el-checkbox
          >
        </el-checkbox-group>
        <!-- 点击按钮 -->
        <div v-else-if="item.type == 'button'" class="frombutton">
          <div v-if="item.fileList.length > 0">
            <div
              v-for="list in item.fileList"
              :key="list.url"
              class="upshowbut"
            >
              <span>{{ list.name }}</span>
              <div v-if="list.button">
                <el-button
                  v-for="but in list.button"
                  size="small"
                  :type="but.type"
                  :key="list.url + but.label"
                  @click="buttonclick(list)"
                  >{{ but.label }}</el-button
                >
              </div>
            </div>
          </div>
          <div v-else>暂无数据</div>
        </div>
        <!-- 照片 -->
        <div v-else-if="item.type == 'Photo'">

          <el-image
            :src="ruleForm[item.prop]"
            fit="cover"
            :preview-src-list="ruleForm[item.srcList]"
            v-if="ruleForm[item.prop]"
          ></el-image>
          <span v-else style="color:red">暂未上传图片</span>
        </div>
        <!-- 级联选择器 -->
        <el-cascader
          v-else-if="item.type == 'cascader'"
          v-model="ruleForm[item.prop]"
          clearable
          :options="item.options"
          :props="item.props"
          :show-all-levels="item.levels"
          :placeholder="item.placeholder"
          :filterable="item.filterable"
          @change="handleChange"
        >
          <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </el-cascader>
        <!-- 上传文件 -->
        <el-upload
          v-else-if="item.type == 'file'"
          :ref="item.ref"
          :action="item.action"
          class="upload-demo"
          :auto-upload="false"
          :before-upload="file => beforeAvatarUpload(file, index)"
          :on-remove="(file, fileList) => handleRemove(file, fileList, index)"
          :before-remove="
            (file, fileList) => beforeRemove(file, fileList, index)
          "
          :on-change="(file, fileList) => handchange(file, fileList, index)"
          multiple
          :limit="item.limit"
          :on-exceed="
            (files, fileList) =>
              handleExceed(files, fileList, index, item.label, item.limit)
          "
          :file-list="item.fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            {{ item.prompting }}
          </div>
          <div
            slot="tip"
            :id="'tip' + index"
            v-show="item.tipshow"
            class="tip"
          ></div>
        </el-upload>
        <!-- 自定义 -->
        <template v-else-if="item.type === 'slot'">
          <slot :name="item.slot" />
        </template>
        <!-- 时间 -->
        <div v-else-if="item.type == 'doubleTime'" class="doubletime">
          <el-date-picker
            :value-format="
              item.start.dateFormate
                ? item.start.dateFormate
                : 'yyyy-MM-dd HH:mm:ss'
            "
            v-model="ruleForm[item.start.prop]"
            :type="item.datatype"
            :disabled="item.start.disabled"
            clearable
            :picker-options="item.start.pickerOptions"
            :placeholder="item.start.disabled ? '' : item.start.placeholder"
          ></el-date-picker>
          <span>-</span>
          <el-date-picker
            :type="item.datatype"
            v-model="ruleForm[item.end.prop]"
            :disabled="item.end.disabled"
            clearable
            :picker-options="item.end.pickerOptions"
            :value-format="
              item.end.dateFormate
                ? item.end.dateFormate
                : 'yyyy-MM-dd HH:mm:ss'
            "
            :placeholder="item.end.disabled ? '' : item.end.placeholder"
          ></el-date-picker>
        </div>
        <!-- 时间 -->
        <el-date-picker
          v-else
          :type="item.type"
          v-model="ruleForm[item.prop]"
          :disabled="item.disabled"
          clearable
          :picker-options="item.pickerOptions"
          :value-format="
            item.dateFormate ? item.dateFormate : 'yyyy-MM-dd HH:mm:ss'
          "
          :placeholder="item.disabled ? '' : item.placeholder"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="zw"></el-form-item>
      <el-form-item class="zw"></el-form-item>
      <el-form-item class="zw"></el-form-item>
      <el-form-item class="zw"></el-form-item>
    </el-form>
    <div class="fromfoot">
      <el-button
        v-for="(list, ind) in formConfig.footer"
        :key="ind"
        :type="list.type"
        @click="list.click()"
        >{{ list.name }}</el-button
      >
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "myform",
  props: {
    formName: {
      type: String,
      required: true
    },
    formConfig: {
      type: Object,
      required: true
    },
    ruleForm: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      multiple: true, //多选
      filterable: true,
      value: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  methods: {
    beforeAvatarUpload(file, index) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    //超出限制
    handleExceed(files, fileList, index, label, limit) {
      this.$message.warning(
        `${label}限制选择 ${limit}个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList, index) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 删除文件
    handleRemove(file, fileList, index) {
      this.formConfig.fromdata[index].fileList = fileList;
      document.getElementById(
        `tip${index}`
      ).innerHTML = this.formConfig.fromdata[index].tip;
      if (fileList.length < 1 && this.formConfig.fromdata[index].required) {
        this.formConfig.fromdata[index].tipshow = true;
      } else {
        this.formConfig.fromdata[index].tipshow = false;
      }
    },
    //文件变化
    handchange(file, fileList, index) {
      this.formConfig.fromdata[index].fileList = fileList;
      document.getElementById(
        `tip${index}`
      ).innerHTML = this.formConfig.fromdata[index].tip;
      if (fileList.length < 1 && this.formConfig.fromdata[index].required) {
        this.formConfig.fromdata[index].tipshow = true;
      } else {
        this.formConfig.fromdata[index].tipshow = false;
      }
    },

    //级联选择
    handleChange(value) {
      console.log(value);
    },
    //按钮事件
    buttonclick(val) {
      //下载
      if (val.eventtype == "download") {
        this.download(val);
      } else if (val.eventtype == "preview") {
        //预览
        this.preview(val);
      }
    },
    //下载
    download(val) {
      // var temp = document.createElement("form");
      // temp.action = val.src;
      // temp.method = "post";
      // temp.style.display = "none";
      // for (var key in val.data) {
      //   var opt = document.createElement("input");
      //   opt.name = key;
      //   opt.value = val.data[key];
      //   temp.appendChild(opt);
      // }
      // document.body.appendChild(temp);
      // temp.submit();
      //  a标签下载
      let link = document.createElement("a"); // 创建a标签
      link.style.display = "none";
      link.href = val.url + "?response-content-type=application/octet-stream"; // 设置下载地址
      link.setAttribute("download", ""); // 添加downLoad属性
      document.body.appendChild(link);
      link.click();
    },
    //预览
    preview(val) {
      console.log("预览");
      // a标签下载
      let link = document.createElement("a"); // 创建a标签
      link.style.display = "none";
      link.href = val.url; // 设置下载地址
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
    },
    //提交
    submitForm() {
      let result = "";
      this.$refs[this.formName].validate(valid => {
        if (valid) {
          console.log("submit!");
          return (result = true);
        } else {
          console.log("error submit!!");
          return (result = false);
        }
      });
      return result;
    },
    //重置
    resetForm() {
      this.$refs[this.formName].resetFields();
    }
  }
};
</script>
<style lang="scss">
.myform {
  overflow: auto;
  .el-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .el-form-item {
    width: 420px;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    .el-form-item__label {
      width: 100px;
      line-height: 16px;
    }
  }
  .zw {
    margin-bottom: 0px;
  }
  .fromfoot {
    width: 100%;
    text-align: center;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    width: 300px;
    height: 100%;

    .doubletime {
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 147px;
      }
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 300px;
    }
  }
  .el-select {
    display: inline-block;
    position: relative;
    width: 100%;
  }
  .el-upload {
    width: 100%;
    /* border: 1px solid #dcdfe6; */
    text-align: left;
    padding-left: 12px;
    box-sizing: border-box;
  }
  .el-cascader {
    width: 300px;
  }
  .el-form-item__content > .singledate {
    width: 300px;
  }
  .el-icon-circle-close:before {
    content: "\e78d";
    color: #000;
  }
  .upshowbut {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  /* .frombutton,
  .el-checkbox-group,
  .el-switch,
  .el-radio-group {
    border: 1px solid #dcdfe6;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 12px;
  } */
  .el-input.is-disabled .el-input__inner {
    background-color: #f5f7fa;
    border-color: #e7ecf7;
    color: #454750;
    cursor: not-allowed;
  }
  .el-textarea.is-disabled .el-textarea__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #454750;
    cursor: not-allowed;
  }
  .el-radio {
    height: 40px;
    line-height: 40px;
  }
  .tip {
    color: red;
  }
  .slotclass {
    width: 100%;
    .el-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      width: 100%;
      height: 100%;
    }
  }
  /*修改滚动条样式
  :-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
  */
  div::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb {
    background: rgba(191, 191, 191, 0.4);
    border-radius: 20px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
}
</style>