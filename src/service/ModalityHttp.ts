import HttpClient from "@/service/http/HttpClient.ts";

class ModalityHttp extends HttpClient {
    constructor() {
        super(import.meta.env.VITE_API_SUPER_PROF);
    }

    public async getModality() {
        const path = '/modality'

        return await this.get(path)
    }
}
export default new ModalityHttp()