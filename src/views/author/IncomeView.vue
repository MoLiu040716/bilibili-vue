

<script setup>


import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AuthorAside from "@/components/aside/AuthorAside.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import * as echarts from "echarts";
const videoList = ref([])

axios({
  url:'',
  method:"post",
  data:{

  }
}).then(res =>{
  videoList.value=res.data
})

onMounted(()=>{
  init();
})

function init(){
  const myChart = echarts.init(document.getElementById('main1'));
// 绘制图表
  myChart.setOption({
    title:{
      text:'收入分配'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '投币收入'
          },
          {
            value: 234,
            name: '点赞收入'
          },
          {
            value: 1548,
            name: '广告收入'
          }
        ]
      }
    ]
  });
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-container>
        <el-aside width="300px" >
          <AuthorAside ></AuthorAside>
        </el-aside>
        <el-main class="main">
          <div id="main1"></div>
          <div class="income">
            <p>总收入:  </p>
            <p>广告收入: </p>
            <p>点赞收入: </p>
            <p>投币收入: </p>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
#main1{
  width: 40rem;
  height: 30rem;
}
.main{
  display: flex;
  flex-direction: row;
}
.income p{
  font-weight: bold;
}
</style>