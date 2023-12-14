<script setup>
import {ref} from "vue";
import axios from "axios";

let imgList = ref([
  'src/assets/imges/test.jpeg','src/assets/imges/test1.jpeg','src/assets/imges/test2.jpeg','src/assets/imges/test3.jpeg'
])
//广告商从后端获取
function advertisement(){
  axios({
    url:'/http://localhost:8999',
    method:"get"
  }).then(res=>{
    imgList = res.data
  })
}
</script>

<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src=item class="size">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.size{
  width: 50rem;

}
</style>
