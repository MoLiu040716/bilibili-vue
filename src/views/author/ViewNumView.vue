<script setup>


import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AuthorAside from "@/components/aside/AuthorAside.vue";
import Upload from "@/components/upload/Upload.vue";
import axios from "axios";
import {ref} from "vue";
import Statistics from "@/components/Statistics.vue";

const videoList = ref([])

axios({
  url: '',
  method: "post",
  data: {}
}).then(res => {
  videoList.value = res.data
})
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
          <div class="main">
            <Statistics ></Statistics>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.main {
  margin-top: 10rem;
}

</style>