import {defineStore} from "pinia";
import {ref} from "vue";


export const useUserInfoStore= defineStore('UserInfo',()=>{
    const userId = ref("")
    const userPassword=ref("")
    const userName = ref("")
    const userPhone=ref("")
    const userSex = ref("")
    const style=ref([])
    const signature = ref("")
    const birth=ref("")
    const userImg = ref("")
    return{userId,userPassword,userName,userPhone,userSex,style,signature,birth,userImg}
})