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
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import { ref} from "vue";
import firstSlide from "@/assets/images/carousel/firstSlide.png";
import secondSlide from "@/assets/images/carousel/secondSlide.png";
import thirdSlide from "@/assets/images/carousel/thirdSlide.png";

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
