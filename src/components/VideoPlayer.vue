<template>
  <div class="video">
    <div
      v-for="(item, i) in listVal"
      :key="i"
      :class="[
        { videobig: screen == 1 },
        { videocentent: screen == 2 },
        { videobigsmall: screen == 3 },
        { videosmall: screen == 4 }
      ]"
    >
      <!-- data-setup="{}" -->
      <video
        :id="'myVideo' + i"
        class="video-js vjs-default-skin vjs-big-play-centered"
        style="object-fit:cover;width:100%;height:100%;"
        playsinline
        webkit-playsinline
        preload="center"
        x-webkit-airplay="allow"
        x5-video-player-fullscreen="true"
        x5-video-player-typ="h5"
        :poster="item.pic"
        controls
      >
        <source :src="item.src" :type="item.type" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  props: ["list", "screen"],
  data() {
    return {
      myPlayer: {},
      listVal: this.list
    };
  },
  mounted() {
    this.init(this.screen);
  },
  watch: {
    screen: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        this.init(val);
      },
      deep: true //true 深度监听
    },
    listVal: {
      //深度监听，可监听到对象、数组的变化
      handler(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      deep: true //true 深度监听
    }
  },
  methods: {
    init(val) {
      if (this.list.length > val * val) {
        //添加视频
        this.listVal = this.listVal.splice(0, val * val);
        this.$emit("changeList", this.listVal);
      } else {
        console.log("替换视频");
      }
    },
    initVideo() {
      //初始化视频方法 循环列表获取每个视频的id
      this.listVal.map((item, i) => {
        this.myPlayer[i] = this.$video("myVideo" + i, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          // autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto"
        });
      });
    }
  },
  beforeDestroy() {
    this.listVal.map((item, i) => {
      if (this.myPlayer[i]) {
        this.myPlayer[i].dispose();
      }
    });
  }
};
</script>
<style scoped lang="scss">
.video {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100vh - 148px);
  margin: auto;
  overflow: hidden;
  align-content: flex-start;
  .videobig {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .videocentent {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
  .videobigsmall {
    width: 33.3333%;
    height: 33.3333%;
    object-fit: cover;
  }
  .videosmall {
    width: 25%;
    height: 25%;
    object-fit: cover;
  }
}
</style>
<style>
.vjs-poster {
  background-size: 100% 100% !important;
}
</style>
