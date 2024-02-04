<template>
    <div class="container-fluid">
            <div class="d-sm-none">
                <CarouselComponent :slide="promotionSlide" />
            </div>
            <div>

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
import freeCourses from '@/assets/images/trainingModalities/free-courses.png'
import languages from '@/assets/images/trainingModalities/languages.png'
import preparationCourses from '@/assets/images/trainingModalities/preparation-courses.png'
import CardPromotion from "@/components/CardPromotion.vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";

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

<style scoped lang="scss"></style>
