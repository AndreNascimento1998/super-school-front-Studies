<template>
    <div class="d-flex my-4 flex-wrap gap-2">
        <div
            @click="() => handleClick(content)"
            class="card card-modalities align-items-center"
            :class="{
                'd-none': !content.title,
                'py-4': props.paddingY,
                'cursor-pointer': cursorPointer,

            }"
        >
            <img v-if="content.src" class="card-img-top w-50" :src="content.src" alt="Modalidades">
            <div v-if="content.title" class="card-body ">
                <p class="card-text card-modalities__title">{{ content.title }}</p>
            </div>

            <div v-if="content.price" class="card-body d-flex flex-column gap-2">
                <div class="card-modalities__discount">Clique aqui e adquira agora!</div>
                <div v-if="content.discount " class="card-modalities__text">Desconto de <span class="card-modalities__discount">{{ content.discount }}%</span></div>
                <div class="card-modalities__text">A partir de <span class="card-modalities__discount">R${{ content.price }}</span></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";

let selectedCard = ref(1)

const emits = defineEmits(
    ['click-event']
)

const props = defineProps({
    content: {
        type: Object<CardOverview>,
        default: [],
        required: true
    },
    width: {
        type: String,
        default: "7rem",
        required: false
    },
    maxHeight: {
        type: String,
        default: "9rem",
        required: false
    },
    paddingY: {
        type: Boolean,
        default: false,
        required: false
    },
    returnObject: {
        type: Boolean,
        default: true,
        required: false
    },
    cursorPointer: {
        type: Boolean,
        default: false,
        required: false
    }
})

function handleClick (item: CardOverview) {
    selectedCard.value = item.id
    props.returnObject ? emits('click-event', item) : emits('click-event', item.id)

}
</script>

<style scoped lang="scss">
.cursor-pointer {
    cursor: pointer;
}
.card-modalities {
    width: 7rem;
    max-width: 9rem;
    background-color: $background-card;
    &__title {
        font-size: 16px;
        font-weight: 700;
        color: $primary-color;
    }

    &__text {
        font-size: 12px;
    }

    &__discount {
        font-size: 14px;
        font-weight: 700;
        color: $primary-color;
    }

    &__price {
        font-weight: bolder;
        font-size: 14px;
    }
}
//
//.selected-card {
//    border-color: black;
//    border-width: 2px;
//}

@media (min-width: 1024px) {
    .card-modalities {
        width: 10rem;
        max-width: 12rem;
    }
}
</style>
