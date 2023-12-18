<script setup>


import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AuthorAside from "@/components/aside/AuthorAside.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import Statistics from "@/components/Statistics.vue";
import * as echarts from "echarts"
const videoList = ref([])

axios({
  url: '',
  method: "post",
  data: {}
}).then(res => {
  videoList.value = res.data
})

onMounted(()=>{
  init();
})

function init(){
  const myChart = echarts.init(document.getElementById('main'));
// 绘制图表
  myChart.setOption({
    title: {
      text: '用户反馈'
    },
    tooltip: {},
    xAxis: {
      data: ['内容低俗', '内容一般', '内容较好', '内容精彩', '五星好评']
    },
    yAxis: {},
    series: [
      {
        name: '评价',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
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
        <el-aside width="300px">
          <AuthorAside></AuthorAside>
        </el-aside>
        <el-main>
          <div class="main" id="main">
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.main {
  margin-top: 5rem;
}
#main{
  width: 50rem;
  height: 30rem;
}
</style>