<template>
  <div class="iframe-container">
    <div id="mainContainer"></div>
    <iframe
      :src="src"
      scrolling="auto"
      frameborder="0"
      class="frame"
      @load="onloaded()"
    >
    </iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "",
      loading: null
    };
  },
  methods: {
    // 获取路径
    resetSrc: function(url) {
      if (url == "http://vipclass.fangjiaoyu.com") {
        this.src = url + "/index.php?cate=Vipzaojia&uid=Fg210404madidi-okpi&pay=0";
      } else {
        this.src = url;
      }
      this.load();
    },
    load: function() {
      this.loading = this.$loading({
        lock: true,
        text: "loading...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)",
        // fullscreen: false,
        target: document.querySelector("#mainContainer")
      });
    },
    onloaded: function() {
      if (this.loading) {
        this.loading.close();
      }
    }
  },
  mounted() {
    this.resetSrc(this.$store.state.iframe.iframeUrl);
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // 如果是跳转到嵌套页面，切换iframe的url
        console.log(this.$store.state.iframe.iframeUrl);
        this.resetSrc(this.$store.state.iframe.iframeUrl);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#mainContainer {
  width: 100%;
  margin-top: 42px;
  height: calc(100% - 42px);
  position: absolute;
  z-index: -1;
}
.iframe-container {
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  .frame {
    width: 100%;
    margin-top: 42px;
    height: calc(100% - 42px);
  }
}
</style>
