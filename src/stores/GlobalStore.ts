import { defineStore } from 'pinia'
import {Ref, ref} from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
    const userName: Ref<string>  = ref('André')

    return {
        userName,
    }
})

