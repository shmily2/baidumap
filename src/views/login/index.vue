<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title-container">
        <h3 class="title"><img src="../../img/lALPBbCc1j9HjFvM18zN_205_215.png" class="title-logo" alt="">
          {{$t('login.title')}}</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input class="fontWhite" name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入账号" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input class="fontWhite" name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
          autoComplete="on" placeholder="请输入密码" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="iconeye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
      <div class="forgetPwd" @click="forgetThePassword()">忘记密码</div>

      <!-- 忘记密码弹出框 S -->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="38%" center :modal-append-to-body='false'>
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="输入手机号码：" prop="linkMobile">
            <el-input v-model="form.linkMobile" placeholder="请输入手机号码" style="border:1px solid lightgrey;border-radius:8px;width:220px;"></el-input>
            <el-button type="info" size="small" style="margin-left:20px;" :disabled='SelectBtn' @click="verificationCode()">{{num}}</el-button>
          </el-form-item>
          <el-form-item label="输入验证码：" prop="code">
            <el-input placeholder="请输入验证码" v-model="form.code" style="border:1px solid lightgrey;border-radius:8px;width:220px;"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class=" pan-btn tiffany-btn" type="primary" @click="confirmPhone()">下 一 步</el-button>
        </span>
      </el-dialog>
      <!-- 忘记密码弹出框 E -->

      <!-- 修改密码弹出框 S -->

      <el-dialog :visible.sync="dialogUpdatePwd" width="38%" center  :modal-append-to-body='false'>
        <el-form :model="ruleForm" status-icon :rules="rulesUpdatePwd" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="新密码" prop="loginPassword">
            <el-input style="border:1px solid lightgrey;border-radius:8px;width:260px;" type="password" v-model="ruleForm.loginPassword"
              autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="confirmPassword">
            <el-input style="border:1px solid lightgrey;border-radius:4px;width:260px;" type="password" v-model="ruleForm.confirmPassword"
              autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class=" pan-btn tiffany-btn" @click="resetForm('ruleForm')">重置</el-button>
          <el-button class=" pan-btn tiffany-btn" @click="dialogUpdatePwd = false">取 消</el-button>
          <el-button class=" pan-btn tiffany-btn" type="primary" @click="changePwdBtn('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 修改密码弹出框 E -->

    </el-form>

    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
      {{$t('login.thirdpartyTips')}}
      <br />
      <br />
      <br />
      <social-sign />
    </el-dialog>

  </div>
</template>

<script>
  import LangSelect from '@/components/LangSelect'
  import {
    getMobile,
    ifCode,
    updatePwd
  } from '@/api/forgotPwd'
  import {
    isHave,
    isvalidPhone
  } from '@/api/validate'
  export default {
    components: {
      LangSelect
    },
    name: 'login',
    data() {
      var authCode = (rule, value, callback) => {
        if (!isHave(value)) {
          callback(new Error('验证码不能含空格'))
        } else if (!this.SelectBtn) {
          callback(new Error('请先获取验证码'))
        } else if (!value) {
          callback(new Error('请输入验证码'))
        } else {
          callback()
        }
      }

      var validPhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入手机号码'))
        } else if (!isvalidPhone(value)) {
          callback(new Error('请输入正确的11位手机号码'))
        } else {
          callback()
        }
      }

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.confirmPassword !== '') {
            this.$refs.ruleForm.validateField('confirmPassword')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.loginPassword) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }

      return {
        loginForm: {
          username: '',
          password: ''
        },
        iconeye: 'eye',
        form: {
          linkMobile: '',
          code: ''
        },
        // 获取验证码字段
        SelectBtn: false,
        num: '获取验证码',
        dialogVisible: false,
        dialogUpdatePwd: false,
        loginRules: {
          username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        rules: {
          authCode: [{
            required: true,
            validator: authCode,
            trigger: 'change'
          }],
          linkMobile: [{
            required: true,
            validator: validPhone,
            trigger: 'change'
          }]
        },
        ruleForm: {
          linkMobile: '',
          loginPassword: '',
          confirmPassword: ''
        },
        rulesUpdatePwd: {
          loginPassword: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          confirmPassword: [{
            validator: validatePass2,
            trigger: 'blur'
          }]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false
      }
    },
    methods: {
      forgetThePassword() {
        this.dialogVisible = true
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
          this.iconeye = 'eyes'
        } else {
          this.passwordType = 'password'
          this.iconeye = 'eye'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({
                path: '/'
              })
            }).catch((error) => {
              this.loading = false
              this.$message({
                showClose: true,
                message: error,
                type: 'error'
              })
            })
          } else {
            // console.log('error submit!!')
            return false
          }
        })
      },
      afterQRScan() {
  
      },
      // 获取验证码的点击事件(60s倒计时)
      verificationCode() {
        var that = this
        that.ruleForm.linkMobile = that.form.linkMobile
        this.$refs.form.validateField('linkMobile', function(valid, msg) {
          // 成功
          if (valid === '' && msg === null) {
            // 手机接口
            getMobile({
              linkMobile: that.form.linkMobile
            }).then(response => {
              if (response.data.code === '200') {
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'success'
                })
              } else {
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                })
              }
            })

            // todo
            var num1 = 60
            that.SelectBtn = true
            that.timer = setInterval(function() {
              that.num = num1-- + '秒后重新获取'
              if (num1 === 0) {
                that.num = '获取验证码'
                that.SelectBtn = false
                clearInterval(that.timer)
              }
            }, 1000)
          }
        })
      },
      confirmPhone() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.ruleForm.linkMobile = this.form.linkMobile
            ifCode(this.form).then(response => {
              if (response.data.code === '200') {
                this.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'success'
                })
                this.dialogVisible = false
                this.dialogUpdatePwd = true
              } else {
                this.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                })
              }
            })
          }
        })
      },
      // 修改密码点击事件
      changePwdBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.linkMobile = this.form.linkMobile
            updatePwd(this.ruleForm).then(response => {
              if (response.data.code === '200') {
                this.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'success'
                })
                this.dialogUpdatePwd = false
              } else {
                this.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                })
                this.dialogUpdatePwd = true
              }
            })
          } else {
            return false
          }
        })
      },
      // 修改密码 两次是否一致与重置按钮
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    },
    created() {
  
    },
    destroyed() {
  
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:black;

  .fontWhite.el-input>input.el-input__inner {
    color:white
  }

  .el-form-item--medium .el-form-item__content,
  .el-form-item--medium .el-form-item__label {
    line-height: 48px;
  }

  /* reset element-ui css */
  .forgetPwd {
    color: white;
    cursor: pointer;
    margin-left: 380px;
  }

  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;

        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;

      &_login {
        font-size: 20px;
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 22px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }

      .title-logo {
        width: 60px;
        height: 60px;
        position: relative;
        top: 20px;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
