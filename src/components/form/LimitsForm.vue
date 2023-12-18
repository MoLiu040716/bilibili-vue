<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="name" label="用户" width="180" />
    <el-table-column  label="高清视频" width="150">
      <el-checkbox  />
    </el-table-column>
    <el-table-column  label="免广告" width="150">
      <el-checkbox  />
    </el-table-column>
    <el-table-column  label="评论弹幕颜色配置" width="140">
      <el-checkbox  />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {ref} from "vue";

interface User {
  name: string
  style: string
  price: string
}

const tableRowClassName = ({
                             row,
                             rowIndex,
                           }: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData =ref([ {
  name: '用户1',
  style: '已出售',
  price: '10万元',
}])




</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
