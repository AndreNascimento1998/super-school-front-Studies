<template>
    <div>
        <div>
            <CarouselComponent :slide="promotionSlide" />
        </div>
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <span class="font-default">Qual é o seu interesse acadêmico?</span>
        </div>
        <div class="d-flex justify-content-around my-4">
            <Graduation />
            <PostGraduation />
            <TechinicalCourses />
        </div>
    </div>

</template>
<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {ref} from "vue";
import firstSlide from "@/assets/carousel/firstSlide.png";
import secondSlide from "@/assets/carousel/secondSlide.png";
import thirdSlide from "@/assets/carousel/thirdSlide.png";
import {Graduation, PostGraduation, TechinicalCourses} from "@/assets/icons";

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
<style scoped>
.font-default {
    color: green;
    font-size: 20px;
}
</style>
