<template>
  <div class="mydialog">
    <el-button type="text" @click="dialogData.outerVisible = true"
      >点击打开外层 Dialog</el-button
    >
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
      <div slot="footer" class="dialog-footer">
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
    width: 966px;
    max-height: 600px;
  }
  .small {
    width: 540px;
    max-height: 600px;
  }
}
</style>