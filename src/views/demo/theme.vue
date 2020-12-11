<template>
  <el-button @click="click">详情</el-button>
</template>
<script>
export default {
  methods: {
    click() {
        this.$router.push("/demo/details")
    },
  },
};
</script>