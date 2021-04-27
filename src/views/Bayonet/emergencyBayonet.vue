<template>
  <div id="yjkk" ref="yjkk">
    <mytable :maxheight="maxheight"></mytable>
  </div>
</template>
<script>
export default {
  name: "yjkk",
  data() {
    return {
      maxheight: 300
    };
  },
  created() {
    this.$nextTick(() => {
      this.maxheight = this.$refs.yjkk.clientHeight -120;
    });
  }
};
</script>
<style scoped lang="scss">
#yjkk {
  padding: 10px;
  height:100%;
}
</style>