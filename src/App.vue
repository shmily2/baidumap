<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height:100%;
  position: absolute;
    /* background: linear-gradient(
    to right,
    rgba(8,48,74, 0.1) 0%,
    rgba(8,48,74, 0.2) 10%,
    rgba(8,48,74, 0.3) 20%,
    rgba(8,48,74, 0.4) 30%,
    rgba(8,48,74, 0.5) 60%,
    rgba(8,48,74, 0.4) 70%,
    rgba(8,48,74, 0.3) 80%,
    rgba(8,48,74, 0.2) 90%,
    rgba(8,48,74, 0.1) 100%
  ); */
   background: rgba(8, 48, 74, 1); 
}
</style>
