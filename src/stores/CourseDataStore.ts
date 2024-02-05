import { defineStore } from 'pinia'
import {reactive} from 'vue'

export const useCourseDataStore = defineStore('courseDataStore', () => {

    const overviewDataCourse = reactive({
        id: null,
        typeGraduation: "Graduação",
        idCourse: null,
        title: '',
        turn: '',
        typeModality: '',
        maxInstallments: null,
        discount: '',
        period: null,
        price: null
    })

    return {
        overviewDataCourse
    }
})

