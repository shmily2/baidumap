<template>
  <el-button @click="reload()">刷新</el-button>
</template>
<script>
export default {
  name: "ItemPage",
  components: {},
  inject: ["reload"], //注入reload方法
  data() {
    return {};
  },
  methods: {
  },
  mounted() {}
};
</script>