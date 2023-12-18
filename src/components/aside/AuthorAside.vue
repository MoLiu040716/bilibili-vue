<template>
  <el-row class="tac">
    <el-col :span="12" >
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="1">
          <router-link to="/author" class="router-link-active">视频上传</router-link>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <span>创作者工具</span>
          </template>
            <el-menu-item index="1-1">
              <router-link to="/viewNum" class="router-link-active">视频观看量</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/feedback" class="router-link-active">用户反馈</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/income" class="router-link-active">收入</router-link>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" >
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Navigator Four</span>
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
