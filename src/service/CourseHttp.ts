import HttpClient from "@/service/http/HttpClient.ts";

class CourseHttp extends HttpClient {
    constructor() {
        super(import.meta.env.VITE_API_SUPER_PROF);
    }

    public async getCourse(id: number) {
        const path =  `/course/${id}`

        return await this.get(path)
    }
}
export default new CourseHttp()