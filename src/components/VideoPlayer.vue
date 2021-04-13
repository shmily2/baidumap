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
        <source :ref="`refName${i}`" :src="item.src" :type="item.type" />
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
      myPlayer: [],
      listVal: this.list,
      videovalue: [],
      ind: 0
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
        this.initVideo();
      },
      deep: true //true 深度监听
    }
  },
  methods: {
    indchange(val) {
      this.ind = val;
    },
    init(val) {
      if (this.list.length > val * val) {
        //截取视频
        this.listVal = this.listVal.splice(0, val * val);
        this.videovalue = this.videovalue.splice(0, val * val);
        this.$emit("changeList", this.listVal);
      } else {
        console.log(this.myPlayer);
        console.log("添加视频");
      }
    },
    initVideo() {
      let value = {
        src: this.listVal[this.ind].src,
        id: new Date().getTime()
      };
      if (this.myPlayer.length < this.screen * this.screen) {
        this.myPlayer.push({});
        let i = this.myPlayer.length - 1;
        this.$nextTick(() => {
          this.myPlayer[this.myPlayer.length - 1] = this.$video("myVideo" + i, {
            autoplay: "muted", //自动播放
            controls: true, //用户可以与之交互的控件
            loop: true, //视频一结束就重新开始
            muted: false, //默认情况下将使所有音频静音
            aspectRatio: "16:9", //显示比率
            fullscreen: {
              options: { navigationUI: "hide" }
            },
            sources: [
              {
                src: value.src,
                type: "video/mp4"
              }
            ],
            onPlayerReady() {
              console.log("onPlayerReady", this);
            }
          });
          this.myPlayer[this.myPlayer.length - 1].typeid = value.id;
          this.videovalue.push(value.id);
        });
      } else {
        let sortnumber = this.videovalue.sort()[0];
        for (var i = 0; i < this.myPlayer.length; i++) {
          if (this.myPlayer[i].typeid == sortnumber) {
            console.log(this.myPlayer[i])
            this.myPlayer[i].src({
              src: value.src,
              type: "video/mp4"
            });
            this.myPlayer[i].load();
            this.myPlayer[i].play();
            this.myPlayer[i].typeid = value.id;
            this.videovalue.sort()[0] = value.id;
          }
        }
      } //初始化视频方法 循环列表获取每个视频的id
    }
  },
  beforeDestroy() {
    for (let i = 0; i < this.myPlayer.length; i++) {
      this.myPlayer[i].dispose();
    }
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
