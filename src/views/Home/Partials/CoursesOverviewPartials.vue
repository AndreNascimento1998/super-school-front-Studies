<template>
    <div class="container-fluid">
        <div>
            <CarouselComponent :slide="promotionSlide" />
        </div>
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <span class="font-default">Qual é o seu interesse acadêmico?</span>
        </div>
        <div>
            <CardPromotion
                :content="modalities"
                padding-y
                selected
            />
        </div>
    </div>

</template>
<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {Ref, ref} from "vue";
import firstSlide from "@/assets/images/carousel/firstSlide.png";
import secondSlide from "@/assets/images/carousel/secondSlide.png";
import thirdSlide from "@/assets/images/carousel/thirdSlide.png";
import graduation from '@/assets/images/trainingModalities/graduation.png'
import postGraduation from '@/assets/images/trainingModalities/post-graduation.png'
import techinicalCourses from '@/assets/images/trainingModalities/techinical-courses.png'
import CardPromotion from "@/components/CardPromotion.vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";

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
    }
])
const promotionSlide = ref([
    {
        image: firstSlide
    },
    {
        image: secondSlide
    },
    {
        image: thirdSlide
    }
])

</script>

<style scoped lang="scss">
.font-default {
    color: $primary-color;
    font-weight: 700;
    font-size: 20px;
}
</style>
