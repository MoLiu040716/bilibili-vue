
<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import AdvertiseAside from "@/components/aside/AdvertiseAside.vue";
import AdvertiseForm from "@/components/form/AdvertiseForm.vue";
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
          <AdvertiseForm class="form"></AdvertiseForm>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.form{
  margin-top: 5rem;
}
</style>