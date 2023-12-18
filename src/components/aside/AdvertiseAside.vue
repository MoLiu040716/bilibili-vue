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
            <span>广告投放</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/advertisement" class="router-link-active">广告位购买</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/uploadAdvertise" class="router-link-active">广告内容上传</router-link>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <router-link to="/analysis" class="router-link-active">广告分析</router-link>
        </el-menu-item>

        <el-menu-item index="3" >
          <router-link to="/" class="router-link-active">商业合作</router-link>
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
