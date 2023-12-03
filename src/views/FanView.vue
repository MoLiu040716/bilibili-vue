<script setup>

import HeadNavigation from "@/components/head/HeadNavigation.vue";
import IndividualHead from "@/components/head/IndividualHead.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-main >
        <IndividualHead></IndividualHead>
        <div class="list">
          <p class="text">我的粉丝</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.list{
  margin-top: 4rem;
  margin-left: 7rem;
}
.text{
  font-size: 2rem;
}
</style>