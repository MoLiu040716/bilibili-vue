<script setup>

import HeadNavigation from "@/components/head/HeadNavigation.vue";
import {useUserInfoStore} from "@/stores/UserInfo";
import axios from "axios";

const store = useUserInfoStore()
function login(){
  axios({
    url:'',
    method:'post',
    data:{
      userId:store.userId,
      userPassword:store.userPassword
    }
  })
}
</script>
<template>
  <div class="common-layout  ">
    <el-container>
      <el-header class="header">
        <HeadNavigation></HeadNavigation>
      </el-header>
      <el-main class="main">
        <div class="LoginBox">
         <t1 class="text" >登录</t1>
         <el-form label-position="right" class="input">
           <el-form-item label="账号" >
             <el-input type="text" v-model="store.userId"  size="large"></el-input>
           </el-form-item>
           <el-form-item label="密码" >
             <el-input  type="password" v-model="store.userPassword" size="large"></el-input>
           </el-form-item>
         </el-form>
         <el-button type="primary" class="button" @click="login()">登录</el-button>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped>

.header{

}
.input{
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 8rem;
  margin-top: 3rem;
  margin-left: 25rem;
}
.button{
  margin-left: 40rem;
}

.text{
  display: flex;
  margin-left: 34rem;
  font-size: 2rem;
  margin-top: 7rem;
}
.main{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("src/assets/imges/loginback.png");
}
.LoginBox{
  background-color: white;
  width: 50rem;
  height: 30rem;
  margin-top: 5rem;

}
@media (max-width: 900px) {
  .loginContainer {
    position: relative;
    display: flex;
    height: 80vh;
    width: 100vw;
  }

  .search{
    width: 20rem;
    height: 10rem;
    position: relative;
    display: flex;
    background-color: aquamarine;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  }
  input{
    height: 2rem;
    width: 15rem;
  }

}

</style>