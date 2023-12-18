import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



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
      component:()=>import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('../views/RegisterView.vue')
    },

    {
      path:'/individual',
      name:'individual',
      component:()=>import('../views/individual/IndividualView.vue')
    },
    {
      path:'/follow',
      name:'follow',
      component:()=>import('../views/individual/FollowView.vue')
    },
    {
      path:'/edit',
      name:'edit',
      component:()=>import('../views/individual/EditView.vue')
    },
    {
      path:'/fan',
      name:'fan',
      component:()=>import('../views/individual/FanView.vue')
    },{
      path:'/record',
      name:'record',
      component:()=>import('../views/individual/RecordView.vue')
    },
    {
      path:'/author',
      name:'author',
      component:() =>import('../views/author/AuthorView.vue')
    },
    {
      path:'/viewNum',
      name:'viewNum',
      component:()=>import('../views/author/ViewNumView.vue')
    },
    {
      path:'/feedback',
      name:'feedback',
      component:()=>import('../views/author/FeedbackView.vue')
    },
    {
      path:'/income',
      name:'income',
      component:()=>import('../views/author/IncomeView.vue')
    },
    {
      path:'/advertisement',
      name:'advertisement',
      component:()=>import('../views/advertise/AdvertiseView.vue')
    },
    {
      path:'/uploadAdvertise',
      name:'uploadAdvertise',
      component:()=>import('../views/advertise/UploadView.vue')
    },
    {
      path:'/analysis',
      name:'analysis',
      component:()=>import('../views/advertise/AnalysisView.vue')
    },
    {
      path:'/community',
      name:'community',
      component:()=>import('../views/community/CommunityView.vue')
    },
    {
      path:'/communityLogin',
      name:'communityLogin',
      component:()=>import('../views/community/CommunityLoginView.vue')
    },
    {
      path:'/report',
      name:'report',
      component:()=>import('../views/community/ReportView.vue')
    },
    {
      path:'/userLimits',
      name:'userLimits',
      component:()=>import('../views/community/UserView.vue')
    },
    {
      path:'/limits',
      name:'limits',
      component:()=>import('../views/community/LimitsView.vue')
    }
  ]
})

export default router
