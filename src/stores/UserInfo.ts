import {defineStore} from "pinia";


export const useUserInfoStore= defineStore('UserInfo',{
    state:()=>{
        return{
            userId:"",
            userPassword:"",
            userName:"",
            userPhone:"",
            userSex:"",
            style:[],
            signature:"",
            birth:""
        }
    }
})