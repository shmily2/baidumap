<template>
  <header id="cephalosome">
    <div class="hedleft">
      <span
        class="toogle"
        :class="[
          this.$store.getters.collapse ? 'el-icon-s-fold ' : 'el-icon-s-unfold',
        ]"
        @click="tooglebut"
      ></span>
      <span class="logname">{{ moduleName }}</span>
    </div>
    <div>
      <div class="basic">
        <el-popover placement="bottom" width="260" trigger="hover">
          <div class="popovercentent">
            <el-button type="success" class="home" @click="homepage"
              >{{$t('navbar.dashboard')}}</el-button
            >
            <el-button type="danger" class="login" @click="Logout"
              >{{$t('navbar.logOut')}}</el-button
            >
          </div>
          <div class="basicCircle" slot="reference">
            <el-avatar size="large" :src="info.circleUrl"></el-avatar>
            <span>{{ info.name }}</span>
          </div>
        </el-popover>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Cephalosome",
  props: ["moduleName", "info"],
  methods: {
    tooglebut() {
      this.$store.dispatch("onCollapse");
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
<style scoped lang="scss">
header {
  height: 80px;
  width: 100%;
  display: flex;
  z-index: 999;
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
.basicCircle > span:first-child {
  margin-left: 30px;
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
.popovercentent{
  .el-button+.el-button {
     margin-left: 0px; 
}
}
</style>