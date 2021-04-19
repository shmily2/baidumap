<template>
  <div class="commonbayonet">
    <div class="radio">
      <el-button @click="vodeoinit">添加视频</el-button>
      <el-radio-group v-model="radio">
        <el-radio :label="1">1x1</el-radio>
        <el-radio :label="2">2x2</el-radio>
        <el-radio :label="3">3x3</el-radio>
        <el-radio :label="4">4x4</el-radio>
      </el-radio-group>
    </div>
    <el-scrollbar class="bottom" id="videoplay">
      <VideoPlayer
        :radio="radio"
        ref="videoPlay"
        :proportion="proportion"
        :text="text"
      ></VideoPlayer>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 1,//分屏数量默认1
      proportion: "",//视屏宽搞比例
      text:"点击添加视频"
    };
  },
  watch: {
    radio: {
      handler(val, oldVal) {
        this.$refs.videoPlay.change(val);
      },
      deep: true //true 深度监听
    }
  },
  mounted() {
    let height = document.getElementById("videoplay").offsetHeight;
    let width = document.getElementById("videoplay").offsetWidth;
    let calcheight = parseInt((height / width) * 96);
    this.proportion = "100:" + calcheight;
  },
  methods: {
    vodeoinit() {
      this.$api.dept.voided().then(res => {
        if (res.code == 200) {
          let value = {
            src: res.data.address,
            name: res.data.name,
            type: "video/mp4", //application/x-mpegURL(m3u8格式)
            id: new Date().getTime()
          };
          this.$refs.videoPlay.itemclick(value);
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.commonbayonet {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  .radio {
    height: 40px;
    line-height: 40px;
  }
  .bottom {
    flex: 1;
  }
}
</style>