<script setup>
import axios from "axios";
import {ref} from "vue";
const recommends = ref([])
let imgList = ref([
  'src/assets/imges/test.jpeg','src/assets/imges/test1.jpeg','src/assets/imges/test2.jpeg','src/assets/imges/test3.jpeg'
])
function recommend(){
  axios({
    url:'',
    method:"get"
  }).then(res =>{
    recommends.value = res.data
  })
}
</script>


<template>
  <div class="recommend">
    <ul class="layout">
      <li  v-for="item in imgList" :key="item">
        <img :src="item">
      </li>
    </ul>

  </div>
</template>



<style scoped>
.layout{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.layout li{
  width: 2rem;
  height: 2rem;
  margin-left: 11rem;
  margin-top: 1rem;
  list-style: none;
}
.layout li img{
  width: 10rem;
  height: 10rem;
}
</style>