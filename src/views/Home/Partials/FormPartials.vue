<template>
    <div class="container-fluid ">
        <div class="d-flex justify-content-around">
            <div class="card container-card p-4">
                <span class="font-default text-center mb-4">Qual é o seu interesse acadêmico?</span>
                <div class="d-flex justify-content-around justify-content-md-center gap-md-5">
                    <div class="d-flex flex-column align-items-center gap-4">
                        <div>
                             <GraduationIcon
                                 @click="chooseGraduation( modalities[0])"
                                 class="border-card-graduation"
                                 :class="{'border-0': typeGraduation !== 1}"
                             />
                        </div>
                        <div class="text-card-graduation">
                            {{ modalities[0].title }}
                        </div>
                    </div>
                    <div class="d-flex flex-column align-items-center gap-4">
                        <div>
                            <PostGraduationIcon
                                @click="chooseGraduation( modalities[1])"
                                class="border-card-graduation"
                                :class="{'border-0': typeGraduation !== 2}"
                            />
                        </div>
                        <div class="text-card-graduation">
                            {{ modalities[1].title }}
                        </div>
                    </div>
                </div>
            </div>
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
    <div v-if="contentCourse" class="content mt-5 container-fluid">
        {{ graduationTitle }}
        <div class="container-fluid d-flex flex-column align-items-center ">
            <span class="content__font-title">Cursos em oferta! </span>
            {{ graduationText }}
            <CardPromotion
                @click="nextPage"
                :content="contentCourse"
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
import {GraduationIcon, PostGraduationIcon} from "@/assets/icons";
import graduation from "@/assets/images/trainingModalities/graduation.png";
import postGraduation from "@/assets/images/trainingModalities/post-graduation.png";
import {useModalityStore} from "@/stores/ModalityStore.ts";
import {DataCourseSelection} from "@/model/Interfaces/DataCourseSelection.ts";
import {useCourseStore} from "@/stores/CourseStore.ts";
import {useCourseDataStore} from "@/stores/CourseDataStore.ts";
import router from "@/router";

const graduationCardSelect: Ref<number> = ref(1)
const courseDataStore = useCourseDataStore()
const disabledCoursesSelect: Ref<Boolean> = ref(true)
const dataSelect: DataCourseSelection = reactive({
        modalities: {
            id: null as unknown as number
        },
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
let contentCourse = ref()
let typeGraduation: Ref<number> = ref(1)

const modalityOpt = computed(() => modalityStore.modalityOptions )
const courseOtp = computed(() => {
    console.log(courseStore?.courseOptions)
    return courseStore?.courseOptions?.filter((item: any) => item.typeGraduationId === typeGraduation.value)
})
let graduationText: object = ({
    "1": "Graduação",
    "2": "Pós-Graduação"
})
const graduationTitle = ref('')

onMounted( async() => {
    await modalityStore.fetchModality()
})

async function fetchCoursesData () {
    await courseStore.fetchCourse(dataSelect.modalities.id)
    disabledCoursesSelect.value = false
}
function chooseGraduation(item: CardOverview) {
    graduationCardSelect.value = item.id
    typeGraduation.value = item.id
    courseDataStore.overviewDataCourse.typeGraduation = item.title
    selectedGraduation.value = item
}

function cardOffers() {
    graduationTitle.value = graduationText[dataSelect.courses.typeGraduationId as keyof typeof graduationText];

    contentCourse.value = dataSelect.courses
}

function nextPage() {
    router.push({name: 'checkout'})
    assignValuesDataCourse()
}

function assignValuesDataCourse() {
    courseDataStore.overviewDataCourse.id = dataSelect.courses.id
    courseDataStore.overviewDataCourse.name = dataSelect.courses.name
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

.container-card {
    width: 100%;
}

@media (min-width: 769px) {
    .container-card{
        width: 75%;
    }
}

.border-card-graduation {
    cursor: pointer;
    border: 1px solid $primary-color;
    border-radius: 50px;
    padding: 20px;
    width: 90px;
    height: 90px;
}

.text-card-graduation {
    color: $primary-color;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}


.font-default {
    color: $primary-color;
    font-weight: 700;
    font-size: 20px;
}
</style>