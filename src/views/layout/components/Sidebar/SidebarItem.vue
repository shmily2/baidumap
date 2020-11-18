<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow"
                   :to="item.path+'/'+item.children[0].path"
                   :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :style="checkType() && item.children[0].name === 'dashboard'?styleObject:''" :class="{'submenu-title-noDropdown':!isNest}">
          <img v-if="checkType() && item.children[0].name === 'dashboard'" :src="getCompanyLogo()"
               style="width: 170px;height: 100%;">
          <svg-icon
            v-if="item.children[0].meta&&item.children[0].meta.icon && !(checkType() && item.children[0].name === 'dashboard')"
            :icon-class="item.children[0].meta.icon"></svg-icon>
          <span
            v-if="item.children[0].meta&&item.children[0].meta.title && !(checkType() && item.children[0].name === 'dashboard')"
            slot="title">{{generateTitle(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else-if="item.children.length > 0" :index="item.name||item.path" :key="item.name">
        <template slot="title" v-if="item.children.length > 0">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{generateTitle(item.meta.title)}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0"
                        :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{generateTitle(child.meta.title)}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
  import { generateTitle } from '@/utils/i18n'
  import store from '@/store'

  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        styleObject: {
          width: '180px',
          height: '100%',
          padding: '2px',
          border: '2px solid rgb(48, 65, 86)'
        }
      }
    },
    methods: {
      hasOneShowingChildren(children) {
        const showingChildren = children.filter(item => {
          return !item.hidden
        })
        // console.log(showingChildren)
        if (showingChildren.length === 1) {
          return true
        }
        return false
      },
      getCompanyLogo() {
        // debugger
        // 无logo 展示默认logo（如测试企业
        if (!store.getters.customer.companyLogo) {
          return 'http://cdn.ananwulian.com/Fj1l7tYiOBKr4XwvHHiganIv2hI4'
        } else {
          return 'http://cdn.ananwulian.com/' + store.getters.customer.companyLogo
        }
      },
      checkType() {
        return store.getters.customer.type === '2' || store.getters.customer.type === '3' || store.getters.customer.type === '4'
      },
      generateTitle
    }
  }
</script>

