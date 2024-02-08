<template>
    <div class="container-fluid">
            <div>
                <CarouselComponent :slide="test" />
            </div>
            <div>

        </div>
    </div>

</template>
<script setup lang="ts">
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import {computed, ref} from "vue";
import firstSlide from "@/assets/images/carousel/firstSlide.png";
import secondSlide from "@/assets/images/carousel/secondSlide.png";
import thirdSlide from "@/assets/images/carousel/thirdSlide.png";
import firstSlideDesktop from "@/assets/images/carousel/firstSlideDesktop.png";
import secondSlideDesktop from "@/assets/images/carousel/secondSlideDesktop.png";
import thirdSlideDesktop from "@/assets/images/carousel/thirdSlideDesktop.png";

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

const promotionSlideDesktop = ref([
    {
        image: firstSlideDesktop
    },
    {
        image: secondSlideDesktop
    },
    {
        image: thirdSlideDesktop
    }
])

const test = computed(() => {
    if (window.innerWidth < 578) {
        return promotionSlide.value
    }
    return promotionSlideDesktop.value
})

</script>

<style scoped lang="scss"></style>
