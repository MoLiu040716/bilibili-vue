<script setup>

import {useUserInfoStore} from "@/stores/UserInfo";

const userInfoStore = useUserInfoStore()


</script>

<template>
  <div>
    <el-avatar :size="40" :src="userInfoStore.userImg" />
  </div>
</template>

<style scoped>

</style>