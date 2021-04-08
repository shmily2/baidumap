<template>
  <div class="video">
    <div v-for="(item, i) in list" :key="i" class="videocentent">
      <video
        :id="'myVideo' + item.id"
        class="video-js vjs-default-skin vjs-big-play-centered"
        style="object-fit:cover;width:100%;height:100%"
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
  props:["list"],
  data() {
    return {
      myPlayer: {},
   
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法 循环列表获取每个视频的id
      this.list.map((item, i) => {
        this.myPlayer[i] = this.$video("myVideo" + item.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          // //封面图
          // poster: item.pic
        });
      });
    }
  },
  beforeDestroy() {
    this.list.map((item, i) => {
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
  .videocentent {
    width: 50%;
    height: 50%;
    object-fit:cover;
  }
}
</style>
