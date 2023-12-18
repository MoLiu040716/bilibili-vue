<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="name" label="用户" width="180" />
    <el-table-column  label="冻结账号" width="150">
      <el-checkbox  />
    </el-table-column>
    <el-table-column fixed="right" label="购买" width="100">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="reset(scope.$index)"
        >
          重置密码
        </el-button>
      </template>
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

function reset(index){

}


</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
