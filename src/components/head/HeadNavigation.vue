<script setup>
import Avatar from "@/components/head/Avatar.vue";
</script>

<template>
  <div id="header" class="container">
      <p class="logo">Video</p>
      <ul>
        <li><RouterLink to="/" class="router-link-active">首页</RouterLink></li>
        <li><RouterLink to="/authoringTool" class="router-link-active">创作工具</RouterLink></li>
        <li><RouterLink to="/" class="router-link-active">创作者中心</RouterLink></li>
        <li><RouterLink to="/" class="router-link-active">社交中心</RouterLink></li>
        <li><RouterLink to="/"  class="router-link-active">关注</RouterLink></li>
        <li><RouterLink to="/"  class="router-link-active">社区</RouterLink></li>
        <li><RouterLink to="/login" class="router-link-active">登录</RouterLink></li>
        <li><RouterLink to="/register" class="router-link-active" >注册</RouterLink></li>
        <li><RouterLink to="/individual"  class="router-link-active">
          <Avatar></Avatar>
        </RouterLink></li>
      </ul>
  </div>
</template>

<style scoped>
  .container{
    height: 3rem;
    width: 96vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo{
    width: 5rem;
    font-family: Arial,serif;
    color: #2cce97;
    font-size: 2rem;
    padding-top: 0rem;
  }
  ul{
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  li{
    list-style: none;

  }
  .router-link-active {
    text-decoration: none;
    color: black;
  }


  @media (max-width: 900px) {
    .container{
      height: 3rem;
      width: 100vw;
    }
    ul{
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;
    }
    li{
      list-style: none;
      font-size: 0.7rem;
    }
    .router-link-active {
      text-decoration: none;
      color: black;
    }

  }

</style>