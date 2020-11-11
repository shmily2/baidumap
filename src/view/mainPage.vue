<template>
  <div class="box">
    <cephalosome :moduleName="moduleName" :info="info"></cephalosome>
    <div class="cententbox">
      <div class="left">
        <navbar></navbar>
      </div>
      <div class="right">
        <div class="centent">
         <router-view></router-view>
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
  methods: {},
};
</script>
<style scoped >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>