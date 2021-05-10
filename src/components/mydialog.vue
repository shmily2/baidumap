<template>
  <div class="mydialog">
    <el-dialog
      :custom-class="dialogData.outertype"
      :title="dialogData.outertitle"
      :visible.sync="dialogData.outerVisible"
      :center="dialogData.center"
    >
      <slot :name="dialogData.outername" />
      <el-dialog
        :title="dialogData.innertitle"
        :custom-class="dialogData.innertype"
        :visible.sync="dialogData.innerVisible"
        append-to-body
      >
        <slot :name="dialogData.innername" />
      </el-dialog>
      <div slot="footer" class="dialog-footer" v-if="dialogData.footshow">
        <el-button
          v-for="(item, ind) in dialogData.footer"
          :key="ind"
          :type="item.type"
          @click="item.click"
          >{{ item.title }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "mydialog",
  props: {
    dialogData: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.el-dialog__wrapper {
  .big {
    width: 90%;
    max-width: 966px;
    max-height: 600px;
    overflow: auto;
  }
  .small {
    width: 90%;
    max-width: 540px;
    max-height: 600px;
    overflow: auto;
  }
  .el-dialog__header {
    .el-dialog__title {
      line-height: 24px;
      font-size: 16px;
    }
    background: rgba(109, 105, 105, 0.2);
  }

  /*修改滚动条样式
  :-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
  */
  div::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  div::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb {
    background: rgba(191, 191, 191, 0.4);
    border-radius: 20px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  div::-webkit-scrollbar-corner {
    background: #179a16;
  }
}
</style>