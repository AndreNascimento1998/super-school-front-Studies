<!-- src/components/Carousel.vue -->
<template>
    <Carousel  :items-to-show="1">
        <Slide v-for="item in props.slide" :key="item?.image">
            <div>
                <img :src="item?.image">
            </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
    slide:{
        type: Array,
        default: [],
        required: true
    }
})

</script>

<style scoped lang="scss"></style>
