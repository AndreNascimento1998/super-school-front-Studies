import { defineStore } from 'pinia'
import {Ref, ref} from 'vue'
import {IUser} from "@/model/Interfaces/IUser.ts";

export const userAuthStore = defineStore('authStore', () => {
    const user: Ref<IUser>  = ref({
            name: 'André' ,
            lastName: 'Cardoso',
            email: 'andre.dlss@jk.com',
            logged: true
        }
    )

    // function authStore(){
    //     user.value = {
    //         id: 25,
    //         name: 'André' ,
    //         lastName: 'Cardoso',
    //         email: 'andre.dlss@jk.com',
    //         logged: true
    //     }
    // }

    return {
        user
    }
})

