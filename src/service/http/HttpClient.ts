import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export default abstract class HttpClient {
    protected readonly instance: AxiosInstance

    protected constructor(baseUrl = '') {
        this.instance = axios.create({
            validateStatus(status) {
                return status >= 200 && status <= 522
            },
            baseURL: baseUrl,
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

    protected get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request<T, R, D>(config ?? { method: 'get', url })
    }

    private async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
        try {
            return await this.instance.request<T, R, D>(config)
        } catch (e: any) {
            let messages = e.data
            messages = Array.isArray(messages) ? messages : [messages]

            throw {
                error: e,
                messages:
                    messages.map((m: any) => m?.message).join('<br>') ||
                    'Ocorreu um erro ao processar sua requisição, tente novamente mais tarde.',
            }
        }
    }
}