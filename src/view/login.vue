<template>
  <div class="login">
    <el-button type="primary" @click="login">点击登录</el-button>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>