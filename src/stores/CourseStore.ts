import { defineStore } from 'pinia'
import {ref} from "vue";
import CourseHttp from "@/service/CourseHttp.ts";

export const useCourseStore = defineStore('courseStore', () => {
    const courseOptions = ref()

    async function fetchCourse(id: number) {
        const response = await CourseHttp.getCourse(id)
        courseOptions.value = response.data
    }

    return {
        fetchCourse,
        courseOptions
    }
})

