<template>
  <div>
    <el-button type="primary" @click="click">详情</el-button>
    <el-button type="primary" @click="edit">编辑</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      mum:[],
    }
  },
  methods: {
    click() {
      this.mum =[1,2,3,4,5,6]
      this.$router.push("/demo/details");
    },
    edit() {
      this.mum =[0]
      this.$router.push("/demo/edit");
    }
  },
};
</script>