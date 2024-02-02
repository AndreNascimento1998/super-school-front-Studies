<template>
    <div>
        <div>
            <CardPromotion
                :content="discountGraduation"
                width="11rem"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardPromotion from "@/components/CardPromotion.vue";
import {ref, Ref} from "vue";
import {CardOverview} from "@/model/Interfaces/CardOverview.ts";

const discountGraduation: Ref<Array<CardOverview>> = ref([
    {
        id: 1,
        src: "",
        title:"Direito",
        descOpt: "Desconto de ",
        discount: "20%",
        desc: "A partir de ",
        price: "R$ 490,00"
    },
    {
        id: 2,
        src: '',
        title:"História",
        descOpt: "Desconto de ",
        discount: "80%",
        desc: "A partir de ",
        price: "R$ 120,00"
    }
])
</script>