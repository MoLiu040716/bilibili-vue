import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import IndividualView from "@/views/IndividualView.vue";
import FollowView from "@/views/FollowView.vue";
import EditView from "@/views/EditView.vue";
import FanView from "@/views/FanView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },

    {
      path:'/individual',
      name:'individual',
      component: IndividualView
    },
    {
      path:'/follow',
      name:'follow',
      component:FollowView
    },
    {
      path:'/edit',
      name:'edit',
      component:EditView
    },
    {
      path:'/fan',
      name:'fan',
      component:FanView
    }
  ]
})

export default router
