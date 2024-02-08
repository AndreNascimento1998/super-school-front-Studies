import { defineStore } from 'pinia'
import {IPayload} from "@/model/Interfaces/IPayload.ts";
import RegistrationHttp from "@/service/RegistrationHttp.ts";

export const useRegistrationStore = defineStore('registrationStore', () => {

    async function registrationStudant(file: File, payload: IPayload) {
        return await RegistrationHttp.postRegistration(file, payload)
    }

    return {
        registrationStudant
    }
})

