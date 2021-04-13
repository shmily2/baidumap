<template>
  <div class="spjk">
    <div class="centent">
      <div class="radio">
        <el-button @click="itemclick">添加</el-button>
        <el-radio-group v-model="radio" @change="change">
          <el-radio :label="1">1x1</el-radio>
          <el-radio :label="2">2x2</el-radio>
          <el-radio :label="3">3x3</el-radio>
          <el-radio :label="4">4x4</el-radio>
        </el-radio-group>
      </div>
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
          <video :ref="`refName${index}`" class="video-js"></video>
          <h1>{{ item.name}}</h1>
        </div>
      </div>
      <div v-else class="title">请选择播放视频</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      cameraId: "",
      videovalue: [],
      player: [],
      options: [{}],
      radio: 1
    };
  },
  created() {
    this.videoMenuList();
  },
  methods: {
    //分组数
    videoMenuList() {},
    //点击视频
    itemclick() {
      this.$api.dept.voided().then(res => {
        console.log(res);
        if (res.code == 200) {
          let value = {
            src: res.data.address,
            name: res.data.name,
            id: new Date().getTime()
          };
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
                }
              );
              this.player[this.player.length - 1].typeid = value.id;
              this.player[this.player.length - 1].name = value.name;
              this.videovalue.push(value.id);
            });
          } else {
            let sortnumber = this.videovalue.sort()[0];
            for (var i = 0; i < this.player.length; i++) {
              if (this.player[i].typeid == sortnumber) {
                this.player[i].src({
                  src: value.src,
                  type: "video/mp4"
                });
                console.log(this.player[i]);
                this.player[i].load();
                this.player[i].play();
                this.player[i].typeid = value.id;
                this.player[i].name = value.name;
                this.videovalue.sort()[0] = value.id;
              }
            }
          }
        }
      });
    },
    //选择分屏
    change() {
      if (this.player.length < this.radio * this.radio) {
        console.log(111);
      } else {
        let sources = this.player.slice(0, this.radio * this.radio);
        this.player = sources;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.spjk {
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  color: #333;
  .left {
    flex-shrink: 0;
    width: 220px;
  }
  .centent {
    flex: 1;
    overflow: auto;
    .radio {
      text-align: left;
      font-size: 22px;
    }
    .videobox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .videohlsbig {
        width: 100%;
        border: 1px solid #333;
      }
      .videohlstwo {
        width: calc(50% - 10px);
        border: 1px solid #333;
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