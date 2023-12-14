<script setup>
import {reactive, ref, toRefs} from "vue";
  const state = reactive({
    circleUrl:
        'src/assets/imges/test.jpeg'
  })

  const circleUrl = toRefs(state)
</script>

<template>
  <div>
    <el-avatar :size="40" :src="state.circleUrl" />
  </div>
</template>

<style scoped>

</style>