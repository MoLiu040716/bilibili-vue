<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import IndividualHead from "@/components/head/IndividualHead.vue";
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
          <p class="text">全部关注</p>
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

.list{
  margin-top: 4rem;
  margin-left: 7rem;
}
.text{
  font-size: 2rem;

}
</style>