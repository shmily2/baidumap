<template>
  <div class="VideoPlayer">
    <div class="centent" ref="center">
      <div class="player" v-if="this.player.length > 0">
        <div
          :class="[
            { videohlsbig: radio == 1 },
            { videohlstwo: radio == 2 },
            { videohlsthre: radio == 3 },
            { videohls: radio == 4 }
          ]"
          v-for="(item, index) in player"
          :key="index"
        >
          <video
            :ref="`refName${index}`"
            class="video-js vjs-big-play-centered"
            style="object-fit:cover;"
          ></video>
        </div>
      </div>
      <div v-else class="title">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  props: ["proportion", "text"],
  data() {
    return {
      videovalue: [],
      player: [],
      radio: 1
    };
  },
  methods: {
    //点击视频
    itemclick(value) {
      if (this.player.length < this.radio * this.radio) {
        this.player.push({});
        this.$nextTick(() => {
          this.player[this.player.length - 1] = this.$video(
            this.$refs[`refName${this.player.length - 1}`][0],
            {
              autoplay: "muted", //自动播放
              controls: true, //用户可以与之交互的控件
              loop: true, //视频一结束就重新开始
              muted: false, //默认情况下将使所有音频静音
              aspectRatio: this.proportion, //显示比率
              fullscreen: {
                options: { navigationUI: "hide" }
              },

              sources: [
                {
                  src: value.src,
                  type: value.type
                }
              ],
              onPlayerReady() {
                console.log("onPlayerReady", this);
              }
            }
          );
          this.player[this.player.length - 1].typeid = value.id;
          this.videovalue.push(value.id);
        });
      } else {
        let sortnumber = this.videovalue.sort()[0];
        for (var i = 0; i < this.player.length; i++) {
          if (this.player[i].typeid == sortnumber) {
            this.player[i].src({
              src: value.src,
              type: value.type
            });
            console.log(this.player[i]);
            this.player[i].load();
            this.player[i].play();
            this.player[i].typeid = value.id;
            this.videovalue.sort()[0] = value.id;
          }
        }
      }
    },
    //选择分屏
    change(radio) {
      this.radio = radio;
      if (this.player.length < this.radio * this.radio) {
      } else {
        console.log(this.radio * this.radio);
        let sources = this.player.slice(0, this.radio * this.radio);
        this.player = sources;
      }
    }
  },
  destroyed() {
    for (var i = 0; i < this.player.length; i++) {
      this.player[i].dispose();
    }
  },
};
</script>
<style lang="scss" scoped>
.VideoPlayer {
  height: 100%;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  color: #333;
  .centent {
    flex: 1;
    overflow: auto;
    .player {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .videohlsbig {
        width: 100%;
        border: 1px solid #333;
      }
      .videohlstwo {
        width: 50%;
        border: none;
      }
      .videohlsthre {
        width: calc(33.33% - 10px);
        border: 1px solid #333;
      }
      .videohls {
        width: calc(25% - 10px);
        border: 1px solid #333;
      }
    }
    .title {
      height: 40px;
      line-height: 40px;
      font-size: 22px;
      color: red;
    }
  }
}
</style>