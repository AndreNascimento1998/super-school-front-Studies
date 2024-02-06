<template>
    <div class="d-flex d-flex flex-wrap gap-2 justify-content-around my-4">
        <div
            v-for="item in props.content"
            :key="item.id"
            class="card p-2 hidden-card"
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
            <div class="card-body ">
                {{ item.desc }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {StarIcon} from "@/assets/icons";
import {ICardTestemonial} from "@/model/Interfaces/ICardTestemonial.ts";

const props = defineProps({
    content: {
        type: Array<ICardTestemonial>,
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

@media (max-width: 578px) {
    .hidden-card:nth-child(n + 2) {
        display: none;
    }
}
</style>