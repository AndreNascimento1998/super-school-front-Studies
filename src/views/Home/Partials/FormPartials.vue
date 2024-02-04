<template>
    <div class="container-fluid ">
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <span class="font-default">Qual é o seu interesse acadêmico?</span>
        </div>
        <div>
            <CardPromotion
                @click-event="handleClick"
                :content="modalities"
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
                <button class="btn btn-success" type="button">Buscar</button>
            </div>
        </div>
    </div>
    <div class="row content mt-5 container-fluid">
        <div class="container-fluid col-12 col-lg-5 col-xl-4">
            <span class="content__font-title">Descontos em cursos de graduação: </span>
            <p class="content_font-desc">Modalidade: EAD </p>
            <p class="content_font-desc">Cursos: Direito </p>
            <CardPromotion
                :content="discountGraduation"
                width="11rem"
                cursor-pointer
            />
        </div>
        <div class="my-5 my-lg-0 container-fluid col-12 col-lg-5 col-xl-4">
            <span class="content__font-title">Descontos em cursos de pós-graduação: </span>
            <p class="content__font-desc">Modalidade: EAD </p>
            <p class="content__font-desc">Cursos: História </p>
            <CardPromotion
                :content="discountGraduation"
                width="11rem"
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
import techinicalCourses from "@/assets/images/trainingModalities/techinical-courses.png";
import freeCourses from "@/assets/images/trainingModalities/free-courses.png";
import languages from "@/assets/images/trainingModalities/languages.png";
import preparationCourses from "@/assets/images/trainingModalities/preparation-courses.png";
import {useModalityStore} from "@/stores/ModalityStore.ts";
import {DataCourseSelection} from "@/model/Interfaces/DataCourseSelection.ts";
import {useCourseStore} from "@/stores/CourseStore.ts";

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
        desc: "Graduação"
    },
    {
        id: 2,
        src: postGraduation,
        desc: "Pós-graduação"
    },
    {
        id: 3,
        src: techinicalCourses,
        desc: "Cursos técnicos"
    },
    {
        id: 4,
        src: freeCourses,
        desc: "Cursos livres"
    },
    {
        id: 5,
        src: languages,
        desc: "Idiomas"
    },
    {
        id: 6,
        src: preparationCourses,
        desc: "Cursos de preparação"
    },
])
const discountGraduation: Ref<Array<CardOverview>> = ref([
    {
        id: 1,
        title:"Direito",
        descOpt: "Desconto de ",
        discount: "20%",
        desc: "A partir de ",
        price: "R$ 490,00"
    },
    {
        id: 2,
        title:"História",
        descOpt: "Desconto de ",
        discount: "80%",
        desc: "A partir de ",
        price: "R$ 120,00"
    },
    {
        id: 3,
        title:"Direito",
        descOpt: "Desconto de ",
        discount: "20%",
        desc: "A partir de ",
        price: "R$ 490,00"
    },
    {
        id: 4,
        title:"História",
        descOpt: "Desconto de ",
        discount: "80%",
        desc: "A partir de ",
        price: "R$ 120,00"
    }
])

const modalityOpt = computed(() => modalityStore.modalityOptions )
const courseOtp = computed(() => courseStore.courseOptions )

onMounted( async() => {
    await modalityStore.fetchModality()
})

async function fetchCoursesData () {
    await courseStore.fetchCourse(dataSelect.modalities.id)
    disabledCoursesSelect.value = false
}
function handleClick(item: CardOverview) {
    console.log(item)
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