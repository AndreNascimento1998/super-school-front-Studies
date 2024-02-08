import HttpClient from "@/service/http/HttpClient.ts";
import {IPayload} from "@/model/Interfaces/IPayload.ts";

class RegistrationHttp extends HttpClient {
    constructor() {
        super(import.meta.env.VITE_API_SUPER_PROF);
    }

    public async postRegistration(file: File, payload: IPayload) {
        const path = '/register-course'

        return await this.postWithMultipartFormData(path, file, payload)
    }
}
export default new RegistrationHttp()