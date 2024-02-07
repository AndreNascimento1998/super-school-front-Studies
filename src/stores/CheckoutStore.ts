import { defineStore } from 'pinia'
import {reactive} from 'vue'
import {IPersonalData} from "@/model/Interfaces/IPersonalData.ts";

export const useCheckoutStore = defineStore('checkoutStore', () => {
    const payloadData: IPersonalData = reactive({
        name: "",
        email: "",
        phone: "",
        cep: "",
        cpf: "",
        dateBirth: null,
        file: ""
    })


    return {
        payloadData
    }
})

