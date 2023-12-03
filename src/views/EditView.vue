<script setup>
import IndividualHead from "@/components/head/IndividualHead.vue";
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import IndividualForm from "@/components/form/IndividualForm.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-main >
        <IndividualHead></IndividualHead>
        <div class="form">
          <IndividualForm></IndividualForm>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.form{
  margin-top: 2rem;
}
</style>