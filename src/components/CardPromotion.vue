<template>
    <div class="d-flex justify-content-around my-4 flex-wrap gap-2">
        <div
            v-for="item in props.content"
            :key="item.type"
            @click="handleClick(item.id)"
            class="card card-modalities align-items-center"
            :class="{
                'selected-card': selected && selectedCard === item.id,
                'py-4': props.paddingY,
                'cursor-pointer': selected
            }"
        >
            <img v-if="item.src" class="card-img-top w-50" :src="item.src" alt="Modalidades">
            <div v-if="item.title" class="card-body ">
                <p class="card-text text-center card-modalities__title">{{ item.title }}</p>
            </div>
            <div class="card-body">
                <p
                    v-if="item.descOpt"
                    style="font-size: 12px"
                    class="card-text text-center "
                >
                    {{ item.descOpt }}
                    <span
                        class="card-modalities__discount"
                    >
                        {{ item.discount }}
                    </span>
                </p>
                <p style="font-size: 12px" class="card-text text-center ">{{ item.desc }} <span class="card-modalities__price">{{ item.price }}</span> </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

let selectedCard = ref(1)

const props = defineProps({
    content: {
        type: Array<any>,
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
    selected: {
        type: Boolean,
        default: false,
        required: false
    }
})

const handleClick = (cardId: number) => {
    selectedCard.value = cardId
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

.selected-card {
    border-color: black;
    border-width: 3px;
}

@media (min-width: 1024px) {
    .card-modalities {
        width: 10rem;
        max-width: 12rem;
    }
}
</style>
