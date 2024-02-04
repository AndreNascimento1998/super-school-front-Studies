import { defineStore } from 'pinia'
import ModalityHttp from "@/service/ModalityHttp.ts";
import {ref} from "vue";

export const useModalityStore = defineStore('modalityStore', () => {
    const modalityOptions = ref()

    async function fetchModality() {
        const response = await ModalityHttp.getModality()
        modalityOptions.value = response.data
    }

    return {
        fetchModality,
        modalityOptions
    }
})

