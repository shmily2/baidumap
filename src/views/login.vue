<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">
        <span>{{ $t("login.title") }}</span>
        <div v-popover:popover class="fa fa-language"></div>
        <div class="popover">
          <el-popover
            trigger="click"
            ref="popover"
            placement="top"
            width="160"
            v-model="visible"
          >
            <el-radio-group v-model="lang" @change="changeLanguage">
              <el-radio-button label="zh" size="small">中文</el-radio-button>
              <el-radio-button label="en" size="small">English</el-radio-button>
            </el-radio-group>
          </el-popover>
        </div>
      </h2>
      <el-form-item :label="$t('login.username')" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item :label="$t('login.password')" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">{{
          $t("login.logIn")
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      visible: false,
      lang: "zh",
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        username: [
          {
            required: true,
            message: this.$t("rules.username"),
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: this.$t("rules.userNumber"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("rules.password"),
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: this.$t("rules.passNumber"),
            trigger: "blur",
          },
        ],
      };
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // console.log(valid) 验证通过为true，有一个不通过就是false
        if (valid) {
          // 通过的逻辑
          this.$router.push({ name: "home" });
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
    changeLanguage(lange) {
      this.visible = false;
      this.$i18n.locale = lange;
    },
  },
};
</script>

  <style scoped lang="scss">
.login-form {
  width: 300px;
  position: absolute;
  top: 22%;
  right: 10%;
  background-color: rgba(255, 255, 255, 0.8); /* 透明背景色 */
  box-shadow: 10px 10px 10px 5px #888888;
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/login.jpg") no-repeat;
  background-size: 100% 100%;
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.login-title > span {
  flex: 1;
  text-align: left;
  margin-left: 110px;
}
.fa-language {
  margin-left: 30px;
}
</style> 
<style lang="scss">
.el-popover {
  .el-radio-group {
    line-height: 1;
    vertical-align: middle;
    display: flex !important;
    flex-direction: column;
    .el-radio-button {
      margin-top: 10px;
      .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        width: 100%;
      }
      .el-radio-button__inner {
        width: 100%;
        border: none;
      }
    }
  }
}
</style>