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
                   v-model="payload.modalities"
                   @change="() => disabledCoursesSelect = false"
                   label="Modalidades"
                   :items="modalityOpt"
               />
            </div>
            <div class="my-4 my-md-0 col-12 col-md-4">
                <InputSelect :disabled="disabledCoursesSelect" label="Cursos" :items="options" />
            </div>
            <div class="d-grid col-12 col-md-4 h-md-25 align-self-md-end">
                <button class="btn btn-success" type="button">Buscar</button>
            </div>
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

const disabledCoursesSelect = ref(true)
const payload: DataCourseSelection = reactive({
        modalities: {},
        courses: {}
})
const modalityStore = useModalityStore()
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
const options = ref([
    {
        name: 'Curso Informática',
        value: '1'
    },
    {
        name: 'Curso Técnico',
        value: '2'
    },
    {
        name: 'Curso de Fisiologia',
        value: '3'
    }
])

const modalityOpt = computed(() => modalityStore.modalityOptions )

onMounted( async() => {
    await modalityStore.fetchModality()
})

function handleClick(item: CardOverview) {
    console.log(item)
}
</script>

<style scoped lang="scss">
.font-default {
    color: $primary-color;
    font-weight: 700;
    font-size: 20px;
}
</style>