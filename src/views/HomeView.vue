

<script setup>

import HeadNavigation from "@/components/head/HeadNavigation.vue";
import {ref} from "vue";
import Carousel from "@/components/Carousel.vue";
import Recommended from "@/components/Recommended.vue";
import axios from "axios";
const search = ref('');

function searchput(){
  axios({
    url:'',
    method:"post",
    data:search
  }).then(res=>{
    console.log("搜索")
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-main class="main">
        <div class="carousel">
          <Carousel></Carousel>
        </div>
        <div class="search">
          <el-input v-model="search" placeholder="请输入你要搜索的视频"  class="size"/>
          <el-button type="primary" class="push" @click="search">搜索</el-button>
        </div>

        <div class="recommend">
          <t3 class="Recommended ">推荐内容</t3>
          <div class="item">
            <Recommended></Recommended>
          </div>

        </div>

      </el-main>
    </el-container>
  </div>

</template>

<style scoped>
  .header{

  }
  .main{
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .size{
    width: 50vw;
    display: flex;
    height: 3rem;
    margin-top: 5rem;
  }
  .push{
    height: 3rem;
    width: 5rem;
    margin-top: 5rem;
  }
  .carousel{
    width: 50rem;

  }
  .search{
    display: flex;
    flex-direction: row;

  }
  .recommend{
    width: 90vw;
  }
  .recommend .item{
    display: flex;
    flex-direction: row;

  }
  .Recommended{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    font-size: 2rem;
    color: #2cce97;
  }

  @media (max-width: 900px) {
    .header{
      height: 3rem;
    }
    .size{
      width: 50vw;
      display: flex;
      height: 2rem;
      margin-top: 10rem;
    }
    .push{
      height: 2rem;
      width: 5.5rem;
      margin-top: 10rem;
    }
    .Recommended{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      font-size: 1.5rem;
      color: #2cce97;
    }
  }
</style>