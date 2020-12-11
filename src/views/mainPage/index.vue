<template>
  <div class="box">
    <cephalosome :moduleName="moduleName" :info="info"></cephalosome>
    <div class="cententbox">
      <!-- <div
        :class="{
          bg:
            this.$store.getters.endState == 'mobile' &&
            this.$store.getters.barbackground,
        }"
        @click="handleClickOutside"
      ></div> -->
      <div class="bottom" :class="{ height: this.$store.getters.headfixed }">
        <div
          class="left"
          :style="{ background: themeColor }"
          :class="{
            mobile:
              this.$store.getters.endState == 'mobile' &&
              this.$store.getters.barbackground == false,
          }"
        >
          <el-scrollbar style="height: 100%">
            <navbar></navbar>
          </el-scrollbar>
        </div>
        <div class="right">
          <div class="tab">
            <el-tabs
              class="tabs"
              :class="
                $store.state.app.collapse
                  ? 'position-collapse-left'
                  : 'position-left'
              "
              v-model="mainTabsActiveName"
              :closable="true"
              type="card"
              @tab-click="selectedTabHandle"
              @tab-remove="removeTabHandle"
            >
              <el-dropdown class="tabs-tools" :show-timeout="0" trigger="hover">
                <div style="font-size: 20px; width: 50px">
                  <i class="el-icon-arrow-down"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="tabsCloseCurrentHandle"
                    >关闭当前标签</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="tabsCloseOtherHandle"
                    >关闭其它标签</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="tabsCloseAllHandle"
                    >关闭全部标签</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="tabsRefreshCurrentHandle"
                    >刷新当前标签</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
              <el-tab-pane
                v-for="item in mainTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                <span slot="label"
                  ><i :class="item.icon"></i> {{ item.title }}
                </span>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- <div class="scroll"> -->
          <el-scrollbar style="height: 100%">
            <div class="centent">
              <router-view></router-view>
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
                  <div
                    v-popover:popover
                    class="fa fa-language"
                    :style="{ color: themeColor }"
                  ></div>
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
              <div
                class="el-icon-s-tools setUp"
                :style="{ color: themeColor }"
                @click="drawer = true"
                :class="{ drawer: drawer }"
              ></div>
            </div>
          </el-scrollbar>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ResizeMixin from "./mixin/ResizeHandler";
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
  mounted() {
    console.log(this.$store.getters.endState);
  },
  mixins: [ResizeMixin],
  computed: {
    moduleName() {
      return this.$t("login.companyName");
    },
    ...mapState({
      themeColor: (state) => state.app.themeColor,
      sidebar: (state) => state.app.sidebar,
      endState: (state) => state.app.endState,
      device: (state) => state.app.device,
    }),
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      },
    },
  },
  created() {
    this.lang = this.$i18n.locale;
  },
  methods: {
    //头部固定
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

      localStorage.setItem("locale", lange);
      this.$i18n.locale = localStorage.getItem("locale");
    },
    handleClickOutside() {
      this.$store.dispatch("onbarcbackground", false);
      this.$store.dispatch("onCollapse");
    },

    // tabs, 选中tab
    selectedTabHandle(tab) {
      tab = this.mainTabs.filter((item) => item.name === tab.name);
      if (tab.length >= 1) {
        this.$router.push({ name: tab[0].name });
        console.log(tab[0].name)
      }
    },
    // tabs, 删除tab
    removeTabHandle(tabName) {
      this.mainTabs = this.mainTabs.filter((item) => item.name !== tabName);
      if (this.mainTabs.length >= 1) {
        // 当前选中tab被删除
        if (tabName === this.mainTabsActiveName) {
          this.$router.push(
            { name: this.mainTabs[this.mainTabs.length - 1].name },
            () => {
              this.mainTabsActiveName = this.$route.name;
            }
          );
        }
      } else {
        this.$router.push("/");
      }
    },
    // tabs, 关闭当前
    tabsCloseCurrentHandle() {
      this.removeTabHandle(this.mainTabsActiveName);
    },
    // tabs, 关闭其它
    tabsCloseOtherHandle() {
      this.mainTabs = this.mainTabs.filter(
        (item) => item.name === this.mainTabsActiveName
      );
    },
    // tabs, 关闭全部
    tabsCloseAllHandle() {
      this.mainTabs = [];
      this.$router.push("/");
    },
    // tabs, 刷新当前
    tabsRefreshCurrentHandle() {
      var tempTabName = this.mainTabsActiveName;
      console.log(tempTabName)
      this.removeTabHandle(tempTabName);
      this.$nextTick(() => {
        this.$router.push({ name: tempTabName });
      });
    },
  },
};
</script>
<style scoped>
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
.left {
  position: relative;
  z-index: 1000;
}
.right {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
/* .tab {
  height: 60px;
} */
.scroll {
  width: 100%;
  flex: 1;
}
.centent {
  text-align: left;
  height: 100%;
  overflow: auto;
}
.setUp {
  font-size: 30px;
  position: fixed;
  right: 20px;
  bottom: 50%;
  z-index: 1200;
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
.bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.mobile {
  width: 0;
}
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabs-tools {
  width: 50px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  border: 1px solid #e4e7ed;
}
.el-tabs__header {
  margin: 0px !important;
  flex: 1;
  overflow: hidden;
}
</style>