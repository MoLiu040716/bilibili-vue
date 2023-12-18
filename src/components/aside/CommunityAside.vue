<template>
  <el-row class="tac">
    <el-col :span="12" >
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>社区管理</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/community" class="router-link-active">管理评论</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/report" class="router-link-active">用户举报</router-link>
          </el-menu-item>

        </el-sub-menu>
        <el-menu-item index="2" >
          <router-link to="/userLimits" class="router-link-active">用户管理</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/limits" class="router-link-active">权限管理</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: black;
}

</style>
