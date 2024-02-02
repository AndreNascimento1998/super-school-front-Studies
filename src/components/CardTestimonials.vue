<template>
    <div class="d-flex justify-content-around my-4">
        <div
            v-for="item in props.content"
            :key="item.id"
            class="card p-2"
            :style="{
                width: props.width,
                maxHeight: props.maxHeight
            }"
            style="width: 22rem;"
        >
            <div class="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <img class="card-item w-50" :src="item.src" alt="Depoimentos">
                    {{ item.name }}
                </div>
                <div>
                    <StarIcon v-for="rating in item.rating" :key="item.rating" />
                </div>
            </div>
            <div style="font-weight: bold" class="card-title text-center">
                {{ item.title }}
            </div>
            <div class="card-body">
                {{ item.desc }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {StarIcon} from "@/assets/icons";
import {CardTestemonial} from "@/model/Interfaces/CardTestemonial.ts";

const props = defineProps({
    content: {
        type: Array<CardTestemonial>,
        default: [],
        required: true
    }
})

</script>

<style scoped lang="scss">
.card-item {
    max-width: 2rem;
    object-fit: cover;
}
</style>