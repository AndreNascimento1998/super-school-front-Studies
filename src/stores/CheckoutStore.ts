import { defineStore } from 'pinia'
import {Ref, ref} from 'vue'

export const useCheckoutStore = defineStore('checkoutStore', () => {
    const name: Ref<string> = ref('')
    const email: Ref<string> = ref('')
    const phone: Ref<string> = ref('')
    const cep: Ref<string> = ref('')
    const cpf: Ref<string> = ref('')
    const dateBirth: Ref<string> = ref('')
    const fileCnh: Ref<any> = ref(null)
    const fileRg: Ref<any> = ref(null)

    return {
        name,
        email,
        phone,
        cep,
        cpf,
        dateBirth,
        fileCnh,
        fileRg
    }
})

