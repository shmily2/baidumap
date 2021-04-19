<template>
     <el-scrollbar style="height:100%">
        <div style="margin:20px;">滚动条111</div>
        <p  v-for="(list,index) in qure" :key="index">国际化{{index}}</p>
        <div style="margin:20px;">滚动条</div>
    </el-scrollbar>
</template>
<script>
export default {
    name:"il8n",
      data(){
          return{
              qure:35,
          }
    },
}
</script>
<style scoped>

</style>