<script setup>
import HeadNavigation from "@/components/head/HeadNavigation.vue";
import {ref} from "vue";
import Passage from "@/components/passage/passage.vue";
import {useUserInfoStore} from "@/stores/UserInfo";
import axios from "axios";
const store = useUserInfoStore()
function submit(){
  axios({
    url:'',
    method:"post",
    data:{
      userId:store.userId,
      userName:store.userName,
      userPassword:store.userPassword
    }
  }).then(res =>{
    console.log("注册")
  })
}
function reset(){

}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <t3 class="t3">上传头像</t3>
          <passage class="passage"></passage>
        </el-aside>
        <el-main class="main">
          <el-form label-position="top">
           <el-form-item label="用户名" >
             <el-input v-model="store.userName" type="text" autocomplete="on" class="form"></el-input>
           </el-form-item>
           <el-form-item label="账号">
             <el-input v-model="store.userId" type="text" autocomplete="on" class="form"></el-input>
           </el-form-item>
           <el-form-item label="密码">
             <el-input v-model="store.userPassword" type="password" autocomplete="off" class="form"></el-input>
           </el-form-item>
            <el-form-item label="再次输入">
              <el-input  type="password" autocomplete="off" class="form"></el-input>
            </el-form-item>
          </el-form>
          <div class="button" >
            <el-button type="primary" @click="submit()">确认</el-button>
            <el-button type="primary" @click="reset()" >重置</el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.header{

}
.aside{
  width: 40vw;
}
.t3{
  display: flex;
  margin-top: 5rem;
  margin-left: 14rem;
  position: relative;
}
.main{
  height: 100vh;
  width: 60vw;
  margin-top: 6rem;

}
.form{
  width: 30rem;
}
.button{
  display: flex;
  margin-left: 20rem;
}
.passage{
  margin-top: 1rem;
  margin-left: 10rem;
}
</style>