<!-- src/components/Carousel.vue -->
<template>
    <Carousel :items-to-show="1">
        <Slide v-for="{image} in props.slide" :key="image">
            <div>
                <img :src="image">
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
