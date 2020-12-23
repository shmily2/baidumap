<template>
  <div>
    <el-button type="primary" @click="click">详情</el-button>
    <el-button type="primary" @click="edit">编辑</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      this.$router.push("/demo/details");
    },
    edit(){
      this.$router.push("/demo/edit");
    }
  },
};
</script>