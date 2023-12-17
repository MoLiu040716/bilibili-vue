<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {useUserInfoStore} from "../../stores/UserInfo";
import UploadImg from "../upload/UploadImg.vue";
import axios from "axios";
interface RuleForm {
  name: string
  sex: string
  phone:string
  signature:string
  style: string[]

}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()

const userInfoStore = useUserInfoStore()
const ruleForm = reactive<RuleForm>({
  name: userInfoStore.userName,
  sex:  userInfoStore.userSex,
  phone: userInfoStore.userPhone,
  signature: userInfoStore.signature,
  style:userInfoStore.style


})



// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!', fields)
//     }
//   })
// }
function submitForm(){
  userInfoStore.userName=ruleForm.name
  userInfoStore.userSex=ruleForm.sex
  userInfoStore.userPhone=ruleForm.phone
  userInfoStore.signature=ruleForm.signature
  userInfoStore.style= ruleForm.style

  // 上传用户编辑的信息
  axios({
    url:'',
    method:'post',
    data:{}
  })
  
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<template>

  <UploadImg class="upload"></UploadImg>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="性别" prop="region">
      <el-select v-model="ruleForm.sex" placeholder="sex">
        <el-option label="男" value=1 />
        <el-option label="女" value=0 />
      </el-select>
    </el-form-item>
    <el-form-item label="电话" prop="count">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>


    <el-form-item label="观看类型" prop="type">
      <el-checkbox-group v-model="ruleForm.style">
        <el-checkbox label="直播" name="type" />
        <el-checkbox label="游戏" name="type" />
        <el-checkbox label="美女" name="type" />
        <el-checkbox label="动漫" name="type" />
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="个性签名" prop="desc">
      <el-input v-model="ruleForm.signature" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        提交
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">清空</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.upload{
  margin-left: 8rem;
  margin-bottom: 1rem;
}
</style>
