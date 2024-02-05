import { defineStore } from 'pinia'
import {reactive} from 'vue'

export const useCourseDataStore = defineStore('courseDataStore', () => {

    const overviewDataCourse = reactive({
        id: null,
        name: '',
        typeGraduation: "Graduação",
        idCourse: null,
        title: '',
        turn: '',
        typeModality: '',
        maxInstallments: null,
        discount: null,
        period: null,
        price: null
    })

    return {
        overviewDataCourse
    }
})

