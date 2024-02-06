import { defineStore } from 'pinia'
import {Ref, ref} from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
    const userName: Ref<string>  = ref('André')

    function formatCurrency(value: number): string {
        const options = {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }
        return value.toLocaleString('pt-Br', options)
    }

    function discountPrice(price: number, discount: number) {
        const discountFloat = discount / 100
        return  price - (price * discountFloat)
    }

    return {
        userName,
        formatCurrency,
        discountPrice
    }
})

