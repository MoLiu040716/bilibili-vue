<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
</script>

<template>
  <div class="appContainer">
    <router-view></router-view>
  </div>


</template>

<style scoped>
.appContainer{
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;



}
</style>
