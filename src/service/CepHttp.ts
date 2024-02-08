import HttpClient from "@/service/http/HttpClient.ts";

class CepHttp extends HttpClient {
    constructor() {
        super(import.meta.env.VITE_API_CEP);
    }

    public async checkCep(cep: string) {
        const path =  `/ws/${cep.replace('-', '')}/json`

        return await this.get(path)
    }
}
export default new CepHttp()