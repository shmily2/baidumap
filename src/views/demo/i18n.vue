<template>
    <div>
        <p  v-for="(list,index) in qure" :key="index">国际化</p>
        <div style="margin:20px;">滚动条</div>
    </div>
</template>
<script>
export default {
    name:"il8n",
      data(){
          return{
              qure:68,
          }
    },
}
</script>
<style scoped>

</style>