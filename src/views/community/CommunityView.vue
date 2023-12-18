

<script setup>


import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AuthorAside from "@/components/aside/AuthorAside.vue";
import Upload from "@/components/upload/Upload.vue";
import axios from "axios";
import {ref} from "vue";
import CommunityAside from "@/components/aside/CommunityAside.vue";
const videoList = ref([])

axios({
  url:'',
  method:"post",
  data:{

  }
}).then(res =>{
  videoList.value=res.data
})
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-container>
        <el-aside width="300px" >
          <CommunityAside></CommunityAside>
        </el-aside>
        <el-main>
          <div class="main">
            <t3>评论审核</t3>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.main t3{
  margin-left: 25rem;
  font-size: 2rem;
}

</style>