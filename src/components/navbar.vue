<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      :background-color="themeColor"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="this.$store.getters.collapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont el-icon-anquanjiaoyu"></i>
          <span>安全教育</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">安全知识</template>
          <el-menu-item index="1-1-1">出入园区主要通道</el-menu-item>
          <el-menu-item index="1-1-2">危化品运输常识</el-menu-item>
          <el-menu-item index="1-1-3">应急预案管理</el-menu-item>
          <el-menu-item index="1-1-4">园区安全教育平台</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">学习平台</template>
          <el-menu-item index="1-2-1">知识学习系统</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">安全考试</template>
          <el-submenu index="1-3-1">
            <template slot="title">试题库</template>
            <el-menu-item index="1-3-11">试题列表</el-menu-item>
            <el-menu-item index="1-3-12">目录管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-3-2">试卷列表</el-menu-item>
          <el-menu-item index="1-3-3">考试列表</el-menu-item>
          <el-menu-item index="1-3-4">成绩列表</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont el-icon-yunweizhongxin"></i>
          <span>运维中心</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="iconfont el-icon-renyuanjieshao"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont el-icon-cheliangguanli"></i>
        <span slot="title">车辆管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="iconfont el-icon-qiakouguanli"></i>
        <span slot="title">卡口管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="iconfont el-icon-shipinguanli"></i>
        <span slot="title">视频管理</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "navbar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed:{
    ...mapState({
      themeColor: (state) => state.app.themeColor,
    })
  }
};
</script>
<style lange="scss">
</style>