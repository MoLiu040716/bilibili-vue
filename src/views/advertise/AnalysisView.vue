<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AdvertiseAside from "@/components/aside/AdvertiseAside.vue";
import {onMounted} from "vue";
import * as echarts from "echarts";
onMounted(()=>{
  init();
})
function init(){
  const myChart = echarts.init(document.getElementById('main2'));
// 绘制图表
  myChart.setOption({
    title:{
      text:'广告点击转换率'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '点击率'
          },
          {
            value: 234,
            name: '转化率'
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
        <el-aside width="300px" class="aside">
          <AdvertiseAside></AdvertiseAside>
        </el-aside>
        <el-main>
          <div id="main2"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
#main2{
  width: 40rem;
  height: 30rem;
}
</style>