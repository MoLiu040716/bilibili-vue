
<script setup>

import HeadNavigation from "@/components/head/HeadNavigation.vue";
import IndividualHead from "@/components/head/IndividualHead.vue";
import axios from "axios";
import {ref} from "vue";
const historyList = ref([])

//获取历史记录
axios({
  url:'',
  method:"get"
}).then(res =>{
  historyList.value=res.data
})
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
          <p class="text">历史记录</p>
        </div>
        <ul>
          <li v-for="item in historyList">
            <p>{{item}}</p>
          </li>
        </ul>
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