<template>
    <div>
        <div>
            <CarouselComponent :slide="promotionSlide" />
        </div>
        <div class="d-flex mt-4 align-items-center justify-content-center">
            <span class="font-default">Qual é o seu interesse acadêmico?</span>
        </div>
        <div class="d-flex justify-content-around my-4">
            <div
                v-for="image in modalities"
                :key="image.type"
                @click="handleClick(image.id)"
                class="card card-modalities align-items-center py-4"
                :class="{ 'selected-card': selectedCard === image.id }"
                style="width: 7.5rem; max-height: 8rem"
            >
                <img class="card-img-top w-50" :src="image.type" alt="Modalidades">
                <div class="card-body">
                    <p style="font-size: 12px" class="card-text text-center ">{{ image.text }}</p>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import {ref} from "vue";
import firstSlide from "@/assets/carousel/firstSlide.png";
import secondSlide from "@/assets/carousel/secondSlide.png";
import thirdSlide from "@/assets/carousel/thirdSlide.png";
import graduation from '@/assets/training modalities/graduation.png'
import postGraduation from '@/assets/training modalities/post-graduation.png'
import techinicalCourses from '@/assets/training modalities/techinical-courses.png'

let selectedCard = ref(1)
const modalities = ref([
    {
        id: 1,
        type: graduation,
        text: "Graduação"
    },
    {
        id: 2,
        type: postGraduation,
        text: "Pós-graduação"
    },
    {
        id: 3,
        type: techinicalCourses,
        text: "Cursos técnicos"
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

const handleClick = (cardId: number) => {
    selectedCard.value = cardId
}
</script>

<style scoped>
.card-modalities {
    background-color: #e5f3e8;
}

.font-default {
    color: green;
    font-size: 20px;
}

.selected-card {
    border-color: #00BE4B;
    border-width: 1px;
}
</style>
