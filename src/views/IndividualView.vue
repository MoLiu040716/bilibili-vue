<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import {ref} from "vue";
import Upload from "@/components/upload/Upload.vue";
import IndividualHead from "@/components/head/IndividualHead.vue";
const username=ref("未命名")
</script>
<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <HeadNavigation></HeadNavigation>
        </el-header>
        <el-main >
            <IndividualHead></IndividualHead>
            <div class="content">
              <Upload></Upload>
            </div>
              <p class="list">我的视频</p>
              <div class="listform">
              </div>
        </el-main>
      </el-container>
    </div>
</template>
<style scoped>

ul{
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 0rem;

}
li{
  list-style: none;
  margin-left: 4rem;

}
.content{
  width: 70vw;
  margin-left: 13rem;
}
.list{
  margin-left: 36rem;
  font-size: 2rem;
}
.listform{

  height: 20rem;
}

</style>