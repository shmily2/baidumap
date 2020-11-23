<template>
  <div class="box">
    <cephalosome :moduleName="moduleName" :info="info"></cephalosome>
    <div class="cententbox">
      <div class="bottom" :class="{ height: this.$store.getters.headfixed }">
        <div class="left" :style="{background:themeColor}">
          <navbar></navbar>
        </div>
        <div class="right">
          <div class="centent">
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>fdsafdsa</p>
            <p>打发的撒多</p>
            <el-drawer :visible.sync="drawer" direction="rtl" size="280px">
              <div class="drawerView">
                <span>{{ $t("theme.theme") }}</span>
                <theme-picker
                  class="theme-picker"
                  :default="themeColor"
                  @onThemeChange="onThemeChange"
                ></theme-picker>
              </div>
              <div class="drawerView">
                <span>{{ $t("route.head") }}</span>
                <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  @change="change"
                ></el-switch>
              </div>
              <div class="drawerView">
                <span>{{ $t("login.lange") }}</span>
                <div v-popover:popover class="fa fa-language" :style="{color:themeColor}"></div>
                <el-popover
                  trigger="click"
                  ref="popover"
                  placement="top"
                  width="160"
                  v-model="visible"
                >
                  <el-radio-group v-model="lang" @change="changeLanguage">
                    <el-radio-button label="zh" size="small"
                      >中文</el-radio-button
                    >
                    <el-radio-button label="en" size="small"
                      >English</el-radio-button
                    >
                  </el-radio-group>
                </el-popover>
              </div>
            </el-drawer>
            <router-view></router-view>
            <div
              class="el-icon-s-tools setUp"
              :style="{color:themeColor}"
              @click="drawer = true"
              :class="{ drawer: drawer }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "mainPage",
  data() {
    return {
      value: true,
      drawer: false,
      visible: false,
      lang: "",
      info: {
        circleUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        name: "士大夫",
      },
    };
  },
  created() {
    window.onresize = () => {
      return (() => {
        if (document.body.clientWidth < 998) {
          this.$store.dispatch("onCollapse", true);
        }
      })();
    };
  },
  computed: {
    moduleName() {
      return this.$t("login.companyName");
    },
    ...mapState({
      themeColor: (state) => state.app.themeColor,
    }),
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    change() {
      this.$store.dispatch("onHeadfixed", this.value);
    },
    // 切换主题
    onThemeChange: function (themeColor) {
      this.$store.commit("setThemeColor", themeColor);
    },
    //切换语言
    changeLanguage(lange) {
      this.visible = false;
      this.$i18n.locale = lange;
    },
  },
};
</script>
<style scoped >
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.cententbox {
  height: calc(100% - 90px);
  width: 100%;
  position: relative;
}
.bottom {
  display: flex;
}
.height {
  height: 100%;
}
/* .left {
  background: rgb(84, 92, 100);
} */
.right {
  height: 100%;
  width: 100%;
}
.centent {
  text-align: left;
  height: 100%;
  overflow: auto;
  position: relative;
}
.setUp {
  font-size: 30px;
  position: fixed;
  right: 20px;
  bottom: 50%;
}
.drawer {
  right: 280px;
}
.drawerView {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.drawerView > span {
  margin: 0 10px 0 30px;
}
</style>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 220px;
  overflow: auto;
  height: 100%;
}
</style>