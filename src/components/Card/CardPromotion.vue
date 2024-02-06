<template>
    <div class="d-flex my-4 flex-wrap gap-2">
        <div
            class="card  card-modalities p-4 align-items-center"
            :class="{
                'd-none': !content.title,
                'py-4': props.paddingY,
                'cursor-pointer': cursorPointer,
                'rounded-4': props.rounded
            }"
        >
            <div v-if="typeGraduation" class="card-body py-0 mb-4 ">
                <div class="card-modalities__title">
                    Tipo: {{typeGraduation}}
                </div>
            </div>
            <div class="card-modalities__subtitle">{{ content.title }}</div>
            <div class="card-modalities__text-generic">
                a partir
            </div>
            <div
                :class="{
               'card-modalities__letter': priceDiscounted,
               'card-modalities__price': !priceDiscounted
            }"
            >
                {{ globalStore.formatCurrency(content?.price) }}
            </div>
            <div class="card-modalities__price" v-if="priceDiscounted">
                {{ globalStore.formatCurrency(priceDiscounted) }}
            </div>
            <div class="mt-4 mb-1">
                <div v-if="description" v-for="item in description" :key="description.id">
                    <div class="d-flex align-items-center px-5 gap-2">
                        <span class="card-modalities__ball-li"></span>
                        <div class="card-modalities__text-generic">{{ item.text }}</div>
                    </div>
                </div>
            </div>
            <div class="d-grid py-2 col-12 h-md-25 align-self-md-end">
                <button @click="handleClick(content)" class="btn btn-success" type="button">
                    ADQUIRA JÁ ESTE CURSO
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";
import {ICardOverview} from "@/model/Interfaces/ICardOverview.ts";
import {useGlobalStore} from "@/stores/GlobalStore.ts";

const globalStore = useGlobalStore()
let selectedCard = ref(1)

const emits = defineEmits(
    ['click-event']
)

const props = defineProps({
    content: {
        type: Object<ICardOverview>,
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
    },
    typeGraduation: {
        type: String,
        default: '',
        required: false
    },
    description: {
        type: Array<Object>,
        default: [],
        required: false
    },
    rounded: {
        type: Boolean,
        default: false,
        required: false
    }
})

const priceDiscounted = computed(() => {
    if (props.content?.discount) {
        return globalStore.discountPrice(props.content.price, props.content.discount)
    }
    return null
})

function handleClick (item: ICardOverview) {
    selectedCard.value = item.id
    props.returnObject ? emits('click-event', item) : emits('click-event', item.id)

}
</script>

<style scoped lang="scss">
.card-modalities {
    &__title {
        color: #404040;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
    }

    &__subtitle {
        color: $primary-color;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
    }

    &__price {
        color: $primary-color;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
    }

    &__text-generic {
        color: #404040;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    &__letter {
        font-size: 14px;
        font-style: italic;
        color: black;
        font-weight: bolder;
        text-decoration: line-through;
    }

    &__ball-li {
        width: 4px;
        height: 4px;
        background-color: $primary-color;
        border-radius: 50%;
        display: inline-block;
    }
}


//.cursor-pointer {
//    cursor: pointer;
//}
//.card-modalities {
//    //width: 7rem;
//    //max-width: 9rem;
//    background-color: $background-card;
//    &__title {
//        font-size: 16px;
//        font-weight: 700;
//        color: $primary-color;
//    }
//
//    &__text {
//        font-size: 12px;
//    }
//
//    &__discount {
//        font-size: 14px;
//        font-weight: 700;
//        color: $primary-color;
//    }
//
//    &__price {
//        font-weight: bolder;
//        font-size: 14px;
//    }
//}
////
////.selected-card {
////    border-color: black;
////    border-width: 2px;
////}
//
//@media (min-width: 1024px) {
//    .card-modalities {
//        //width: 10rem;
//        //max-width: 12rem;
//    }
//}
</style>
