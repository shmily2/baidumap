<template>
  <div class="box">
    <header>
      <div class="hedleft">
        <span
          class="toogle"
          :class="[isCollapse ? 'el-icon-s-fold ' : 'el-icon-s-unfold']"
          @click="tooglebut"
        ></span>
        <span class="logname">安全教育</span>
      </div>
      <div>
        <div class="basic">
          <el-popover placement="bottom" width="260" trigger="click">
            <div class="popovercentent">
              <el-button type="success" class="home" @click="homepage"
                >返回首页</el-button
              >
              <el-button type="danger" class="login" @click="Logout"
                >退出登录</el-button
              >
            </div>
            <div class="basicCircle" slot="reference">
              <el-avatar size="large" :src="circleUrl"></el-avatar>
              <span>旺盛达</span>
            </div>
          </el-popover>
        </div>
      </div>
    </header>
    <div class="cententbox">
      <div class="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div class="centent">
          内容范德萨范德萨范德萨范德三分规范的时光让师傅的搜啊u二恶烷日豆腐脑手榴弹二恶烷
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "security",
  data() {
    return {
      isCollapse: true,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tooglebut() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    },
    homepage() {
      this.$router.push({ name: "home" });
    },
    Logout() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
header {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    to right,
    rgba(29, 229, 22, 0.1) 0%,
    rgba(29, 229, 22, 0.2) 10%,
    rgba(29, 229, 22, 0.3) 20%,
    rgba(29, 229, 22, 0.4) 30%,
    rgba(29, 229, 22, 0.5) 60%,
    rgba(29, 229, 22, 0.4) 70%,
    rgba(29, 229, 22, 0.3) 80%,
    rgba(29, 229, 22, 0.2) 90%,
    rgba(29, 229, 22, 0.1) 100%
  );
}
.hedleft {
  padding-left: 30px;
  color: #505da5;
  display: flex;
  align-items: center;
}
.toogle {
  font-size: 30px;
  color: #505da5;
  padding-right: 10px;
  cursor: pointer;
}
.logname {
  font-size: 25px;
  font-weight: 700;
}
.cententbox {
  flex: 1;
  width: 100%;
  display: flex;
}
.left {
  height: 100%;
  background: rgb(84, 92, 100);
}
.right {
  height: 100%;
  width: 100%;
}
.centent {
  text-align: left;
}
.basic {
  padding-right: 30px;
  cursor: pointer;
}
.basicCircle {
  display: flex;
  align-items: center;
}
.basicCircle > span {
  margin-left: 10px;
}
.popovercentent {
  display: flex;
  flex-direction: column;
}
.login {
  margin-top: 10px;
}
</style>
<style lang="scss">
.box {
  .el-submenu__icon-arrow {
    position: absolute;
    top: 50%;
    right: 6px;
    margin-top: -7px;
    transition: transform 0.3s;
    font-size: 12px;
  }
  .el-button + .el-button {
    margin-left: 0px;
  }
}
</style>