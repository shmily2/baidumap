<template>
  <!-- unique-opened -->
  <el-menu
    ref="navmenu"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
    @select="handleselect"
    background-color="#3b3f40"
    text-color="#fff"
    :active-text-color="themeColor"
    :collapse="this.$store.getters.collapse"
  >
    <!-- 导航菜单树组件，动态加载菜单 -->
    <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
  </el-menu>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      menuitems: "",
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      appName: (state) => state.app.appName,
      themeColor: (state) => state.app.themeColor,
      collapse: (state) => state.app.collapse,
      navTree: (state) => state.menu.navTree,
    }),
    mainTabs: {
      //读取属性时
      get() {
        return this.$store.state.tab.mainTabs;
      },
      //改变属性时
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
  watch: {
    $route: "handleRoute",
  },
  created() {
    this.handleRoute(this.$route);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect(a, b) {
      console.log("handleselect");
    },
    // 路由操作处理
    handleRoute(route) {
      let tab = "";
      if (route.meta.tabshow) {
        // tab标签页选中, 如果不存在则先添加
        tab = this.mainTabs.filter((item) => item.title === route.meta.title)[0];
        if (!tab) {
          tab = {
            name: route.name,
            title: route.meta.title,
            icon: route.meta.icon,
          };
          this.mainTabs = this.mainTabs.concat(tab);
        } else {
          this.mainTabs.map((item, index) => {
            if (item.title === route.meta.title) {
                 item.name = route.name;
            }
          });
        }
      } else {
        tab = this.mainTabs.filter( (item) => item.title === route.meta.parentTitle )[0];
        if (!tab) {
          tab = {
            name: route.name,
            title: route.meta.parentTitle,
            icon: route.meta.icon,
          };
          this.mainTabs = this.mainTabs.concat(tab);
        } else {
          this.mainTabs.map((item, index) => {
            if (item.title === route.meta.parentTitle) {
              item.name = route.name;
            }
          });
        }
      }
      this.mainTabsActiveName = tab.title;
      // 切换标签页时同步更新高亮菜单
      this.$nextTick(() => {
        if (this.$refs.navmenu != null) {
          this.$refs.navmenu.activeIndex = "" + route.meta.index; //菜单高亮
          this.$store.commit("updateMainTabsActiveName", route.name); //tab高亮
          this.$refs.navmenu.initOpenedMenu();
        }
      });
    },
  },
};
</script>
<style>
.el-submenu__title>i[class^=el-icon-]{
  color:#fff;
}
.el-menu-item >i[class^=el-icon-]{
  color:#fff;
}
.is-active>i[class^=el-icon-]{
  color: inherit;
}
.el-menu{
  text-align: left!important;
}
</style>