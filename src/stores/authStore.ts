import { defineStore } from 'pinia'
import {Ref, ref} from 'vue'
import {User} from "@/model/Interfaces/User.ts";

export const userAuthStore = defineStore('authStore', () => {
    const user: Ref<User>  = ref(
        {
            id: 0, name: '',
            lastName: '' ,
            email: '',
            logged: false}
    )

    function authStore(){
        user.value = {
            id: 25,
            name: 'André' ,
            lastName: 'Cardoso',
            email: 'andre.dlss@jk.com',
            logged: true
        }
    }

    return {
        authStore,
        user
    }
})

