<template>
    <div class="container-fluid ">
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <span class="font-default">Qual é o seu interesse acadêmico?</span>
        </div>
        <div class="d-flex justify-content-around gap-md-5  justify-content-md-around">
            <CardPromotion
                v-for="item in modalities"
                @click-event="chooseGraduation"
                :content="item"
                padding-y
                cursor-pointer
                selected
            />
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
               <InputSelect
                   v-model="dataSelect.modalities"
                   @change="fetchCoursesData()"
                   label="Modalidades"
                   :items="modalityOpt"
               />
            </div>
            <div class="my-4 my-md-0 col-12 col-md-4">
                <InputSelect
                    v-model="dataSelect.courses"
                    :disabled="disabledCoursesSelect"
                    label="Cursos"
                    :items="courseOtp"
                />
            </div>
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button @click="cardOffers()" class="btn btn-success" type="button">Buscar</button>
            </div>
        </div>
    </div>
    <div v-if="discountGraduation" class="content mt-5 container-fluid">
        <div class="container-fluid d-flex flex-column align-items-center ">
            <span class="content__font-title">Cursos em oferta! </span>
            <CardPromotion
                @click="nextPage"
                :content="discountGraduation"
                width="13rem"
                cursor-pointer
            />
        </div>
    </div>
</template>
<script setup lang="ts">

import {computed, onMounted, reactive, Ref, ref} from "vue";
import InputSelect from "@/components/InputSelect.vue";
import CardPromotion from "@/components/CardPromotion.vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";
import graduation from "@/assets/images/trainingModalities/graduation.png";
import postGraduation from "@/assets/images/trainingModalities/post-graduation.png";
import {useModalityStore} from "@/stores/ModalityStore.ts";
import {DataCourseSelection} from "@/model/Interfaces/DataCourseSelection.ts";
import {useCourseStore} from "@/stores/CourseStore.ts";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";
import router from "@/router";

const courseDataStore = useCourseDataStore()
const disabledCoursesSelect = ref(true)
const dataSelect: DataCourseSelection = reactive({
        modalities: {},
        courses: {}
})
const modalityStore = useModalityStore()
const courseStore = useCourseStore()
const modalities: Ref<Array<CardOverview>> = ref([
    {
        id: 1,
        src: graduation,
        title: "Graduação"
    },
    {
        id: 2,
        src: postGraduation,
        title: "Pós-graduação"
    },
])
let selectedGraduation: Ref<CardOverview> | Ref<number> = ref(1)
let discountGraduation = ref()

const modalityOpt = computed(() => modalityStore.modalityOptions )
const courseOtp = computed(() => courseStore.courseOptions )

onMounted( async() => {
    await modalityStore.fetchModality()
})

async function fetchCoursesData () {
    await courseStore.fetchCourse(dataSelect.modalities.id)
    disabledCoursesSelect.value = false
}
function chooseGraduation(item: CardOverview) {
    courseDataStore.overviewDataCourse.typeGraduation = item.title
    selectedGraduation.value = item
}

function cardOffers() {
    discountGraduation.value = dataSelect.courses
}

function nextPage() {
    router.push({name: 'checkout'})
    assignValuesDataCourse()
}

function assignValuesDataCourse() {
    console.log(dataSelect.courses)
    courseDataStore.overviewDataCourse.id = dataSelect.courses.id
    courseDataStore.overviewDataCourse.idCourse = dataSelect.courses.idCourse
    courseDataStore.overviewDataCourse.discount = dataSelect.courses.discount
    courseDataStore.overviewDataCourse.title = dataSelect.courses.title
    courseDataStore.overviewDataCourse.period = dataSelect.courses.period
    courseDataStore.overviewDataCourse.maxInstallments = dataSelect.courses.maxInstallments
    courseDataStore.overviewDataCourse.turn = dataSelect.courses.turn
    courseDataStore.overviewDataCourse.typeModality = dataSelect.courses.type
    courseDataStore.overviewDataCourse.price = dataSelect.courses.price
}
</script>

<style scoped lang="scss">
.content {
    &__font-title {
        color: $primary-color;
    }

    &__font-desc {
        font-size: 14px;
    }
}

.font-default {
    color: $primary-color;
    font-weight: 700;
    font-size: 20px;
}
</style>