<template>
  <div class="box">
    <cephalosome :moduleName="moduleName" :info="info"></cephalosome>
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
          :collapse="this.$store.getters.collapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
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
  name: "mainPage",
  data() {
    return {
      moduleName: "安全教育",
      info: {
        circleUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        name: "士大夫",
      },
    };
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
</style>
<style lang="scss">
.el-submenu__title {
  font-size: 14px;
  color: #303133;
  padding: 0px 52px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.el-menu-item {
  font-size: 14px;
  color: #303133;
  padding: 0 52px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
</style>