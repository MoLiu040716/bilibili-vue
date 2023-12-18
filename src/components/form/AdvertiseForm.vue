<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="name" label="广告位" width="180" />
    <el-table-column prop="style" label="状态" width="180" />
    <el-table-column prop="price" label="价格" />
    <el-table-column fixed="right" label="购买" width="58">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="purchase(scope.$index)"
        >
          购买
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
  name: '广告位1',
  style: '已出售',
  price: '10万元',
},
  {
    name: '广告位2',
    style: '已出售',
    price: '10万元',
  },
  {
    name: '广告位3',
    style: '已出售',
    price: '10万元',
  },
  {
    name: '广告位4',
    style: '已出售',
    price: '10万元',
  },
  {
    name: '广告位5',
    style: '已出售',
    price: '10万元',
  },])



function purchase(index){
  if (tableData.value[index].style=="已购买"){
    alert("广告位已出售")
  }
  else {
    tableData.value[index].style="已购买"
  }

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
