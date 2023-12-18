<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="name" label="我的广告位" width="180" />
    <el-table-column prop="style" label="状态" width="180" />
    <el-table-column fixed="right" label="上传内容" width="80">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="upload(scope.$index)"
        >
          上传内容
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import axios from "axios";

interface User {
  name: string
  style: string

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
  name: '广告位1',
  style: '使用中',

},
  {
    name: '广告位2',
    style: '使用中',

  },
  {
    name: '广告位3',
    style: '使用中',

  },
  {
    name: '广告位4',
    style: '使用中',

  },
  {
    name: '广告位5',
    style: '使用中',

  },])



function upload(index){
  axios({
    url:'',
    method:'post',
    data:{

    }
  })

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
