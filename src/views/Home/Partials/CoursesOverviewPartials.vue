<template>
    <div>
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
import firstSlide from "@/assets/carousel/firstSlide.png";
import secondSlide from "@/assets/carousel/secondSlide.png";
import thirdSlide from "@/assets/carousel/thirdSlide.png";
import graduation from '@/assets/training modalities/graduation.png'
import postGraduation from '@/assets/training modalities/post-graduation.png'
import techinicalCourses from '@/assets/training modalities/techinical-courses.png'
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
